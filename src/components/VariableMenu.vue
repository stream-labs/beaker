<template>
  <div
    ref="variableMenu"
    class="s-variablemenu"
    @input="watchInput($event)"
    @focus="watchCursor($event)"
    @click="watchCursor($event)"
    @keyup="watchCursor($event)"
    @keydown="keyEvent"
  >
    <transition
      name="expand"
      tag="div"
      @enter="open"
      @after-enter="afterOpen"
      @leave="close"
    >
      <div
        v-if="phaseTwo && limitedResult.length >= 1"
        ref="resultArea"
        class="s-variablemenu-results__cont"
        :style="calcTransform"
      >
        <transition-group name="s-variablemenu--fadeX">
          <div
            v-for="(searchResult, i) in limitedResult"
            :key="searchResult.item.variable"
            class="s-variablemenu-results"
            :class="{ 's-active-result': currentResult === i }"
            @mouseover="currentResult = i"
            @mousedown="mergeValues"
            @mouseup="blurSearch"
          >
            <div class="s-variablemenu__result--title">
              {{ searchResult.item.variable }}
            </div>
            <div class="s-variablemenu__result--desc">
              {{ searchResult.item.description }}
            </div>
          </div>
        </transition-group>
      </div>
    </transition>
    <div
      ref="inputCont"
      class="s-variablemenu--searchbar__cont"
    >
      <slot name="input" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, computed, onMounted, watch,
} from 'vue';
import Fuse from 'fuse.js';

export default defineComponent({
  props: {
    input_cursor: {
      type: Number,
      default: 0,
    },
    jsonSearch: {
      type: String || Number || Object,
    },
    search: {
      type: String,
      default: '',
    },
    eventName: {
      type: String,
      default: 'fuseResultsUpdated',
    },
    inputChangeEventName: {
      type: String,
      default: 'fuseInputChanged',
    },
  },

  setup(props, { emit }) {
    const result = ref([]);
    const value = ref('');

    // Element Refs
    const variableMenu = ref(null);
    const variableMenuRef = variableMenu.value as HTMLDivElement | null;

    const resultArea = ref(null);
    const resultAreaRef = resultArea.value as HTMLDivElement | null;

    const inputCont = ref(null);
    const inputContRef = inputCont.value as HTMLDivElement | null;

    // Private
    let fuse: any = null;
    let searchFromClick = false;
    let phaseOne = false;
    const phaseTwo = ref(false);
    let currentResult = 0;
    let queryLength = 0;
    let cursorPos = 0;

    const options = computed(() => ({
      caseSensitive: false,
      includeScore: true,
      includeMatches: false,
      tokenize: false,
      matchAllTokens: false,
      findAllMatches: true,
      shouldSort: true,
      threshold: 0.2,
      location: 1,
      distance: 10,
      maxPatternLength: 12,
      minMatchCharLength: 0,
      keys: ['variable'],
    }));

    const noResults = computed(() => result.value.length === 0 && value.value != '');
    const limitedResult = computed(() => result.value.reverse());
    const selectedResult = computed(() => limitedResult.value[currentResult].item.variable);
    const currentLength = computed(() => value.value.length);

    const calcTransform = computed(() => {
      if (variableMenuRef) {
        const nudge = variableMenuRef.offsetHeight;
        return `transform: translateY(-${nudge}px);`;
      }

      return null;
    });

    const afterOpen = (element: HTMLElement) => {
      element.style.height = 'auto';
    };

    const open = (element: HTMLElement) => {
      const { width } = getComputedStyle(element);
      element.style.width = width;
      element.style.position = 'absolute';
      element.style.visibility = 'hidden';
      element.style.height = 'auto';
      const { height } = getComputedStyle(element);
      element.style.width = '';
      element.style.position = '';
      element.style.visibility = '';
      element.style.height = '';
      getComputedStyle(element).height;
      setTimeout(() => {
        element.style.height = height;
      });
    };

    const close = (element: HTMLElement) => {
      const { height } = getComputedStyle(element);
      element.style.height = height;
      getComputedStyle(element).height;
      setTimeout(() => {
        element.style.height = '0';
      });
    };

    const watchCursor = (val) => {
      cursorPos = val.target.selectionStart;
      getSearchString();
      if (noResults.value) playClosingSequence();
      if (value.value.length <= 0) playClosingSequence();
    };

    const watchInput = (val) => {
      value.value = val.target.value;
    };

    const getSearchString = () => {
      if (value.value.trim() === '') {
        result.value = [];
      } else {
        const bracketOpen = value.value.lastIndexOf('{', cursorPos - 1);
        const searchValue = value.value.substring(bracketOpen, cursorPos);
        const bracketClose = searchValue.lastIndexOf('}');
        if (
          cursorPos > bracketOpen
          && bracketClose === -1
          && bracketOpen !== -1
        ) {
          result.value = fuse.search(searchValue);
          queryLength = searchValue.length;
        } else {
          playClosingSequence();
        }
      }
    };

    const keyEvent = (event: KeyboardEvent) => {
      // KEYPRESS UP
      if (event.keyCode === 38 && currentResult > 0) {
        if (currentResult <= limitedResult.value.length - 7 && resultAreaRef) {
          resultAreaRef.scrollBy(0, -32);
        }
        event.preventDefault();
        event.stopPropagation();
        currentResult--;
      }
      // KEYPRESS DOWN
      if (
        event.keyCode === 40
        && currentResult < limitedResult.value.length - 1
      ) {
        if (currentResult >= 6 && resultAreaRef) {
          resultAreaRef.scrollBy(0, 32);
        }
        event.stopPropagation();
        currentResult++;
      }
      // KEYPRESS ENTER
      if (event.keyCode === 13 && phaseOne) {
        if (result.value != []) {
          event.preventDefault();
          event.stopPropagation();
          mergeValues();
        }
      }
      // KEYPRESS ESC
      if (event.keyCode === 27 && phaseOne) {
        blurSearch();
      }
      // KEYPRESS TAB
      if (event.keyCode === 9 && phaseOne) {
        if (result.value != []) {
          event.preventDefault();
          event.stopPropagation();
          mergeValues();
        }
      }
    };

    const mergeValues = () => {
      const cursor = cursorPos;
      value.value = value.value.substring(0, cursor)
        + selectedResult.value.substring(queryLength)
        + value.value.substring(cursor);
      setTimeout(() => {
        result.value = [];
      });
      emit('update', value.value);
      if (searchFromClick) searchFromClick = !searchFromClick;
    };

    const playClosingSequence = () => {
      if (phaseTwo.value) {
        setTimeout(() => {
          phaseTwo.value = !phaseTwo.value;
        }, 100);
        setTimeout(() => {
          phaseOne = !phaseOne;
        }, 200);
      }
    };

    const playOpeningSequence = () => {
      if (!phaseOne) {
        phaseOne = !phaseOne;
        setTimeout(() => {
          phaseTwo.value = !phaseTwo.value;
        }, 100);
      }
    };

    const initFuse = () => {
      if (props.jsonSearch) {
        fuse = new Fuse(props.jsonSearch, options.value);
        if (props.search) {
          value.value = props.search;
        }
      }
    };

    const blurSearch = () => {
      currentResult = 0;
    };

    watch(value, () => {
      this.$parent.$emit(props.inputChangeEventName, value.value);
      emit(props.inputChangeEventName, value.value);
      if (value.value.includes('{')) {
        getSearchString();
        if (noResults.value) playClosingSequence();
        if (value.value.length <= 0) playClosingSequence();
      }
      if (value.value === '') result.value = [];
    }, { immediate: true });

    watch(result, (val: [], oldVal: []) => {
      if (noResults.value || value.value == '' || val.length != oldVal.length) {
        currentResult = limitedResult.value.length - 1;
      }
      emit(props.eventName, result.value);
      this.$parent.$emit(props.eventName, result.value);
      noResults.value ? playClosingSequence() : playOpeningSequence();
    });

    onMounted(() => {
      initFuse();
    });

    return {
      variableMenuRef,
    };
  },
});
</script>

<style lang="less">
@import "./../styles/Imports";

.s-variablemenu {
  position: relative;
  display: block;
  transform-origin: bottom;
  .margin-bottom(2);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &.s-variablemenu--phase-one {
    background-color: @day-bg;
  }

  .s-variablemenu__result--title {
    font-size: 12px;
    color: @day-title;
    background-color: @day-input-border;
    .radius(1);
    .margin-right(1);
    .padding-v-sides(0.25);
    .padding-h-sides(0.75);
    font-weight: @medium;
    word-wrap: none;
    white-space: nowrap;
  }

  .s-variablemenu__result--desc {
    width: 100%;
    font-size: 12px;
    color: @dark-5;
  }

  .s-variablemenu-results__cont {
    display: flex;
    width: 100%;
    max-height: 224px;
    bottom: 0;
    flex-direction: column-reverse;
    overflow-y: scroll;
    overflow-x: hidden;
    position: absolute;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid @day-input-border;
    z-index: 9;
    background-color: @day-bg;
    .radius();
  }

  .s-variablemenu-results__cont::-webkit-scrollbar-corner {
    background-color: rgba(0, 0, 0, 0.04);
    background-image: none;
  }

  .s-variablemenu-results__cont::-webkit-scrollbar {
    width: 1em;
    background-color: rgba(0, 0, 0, 0.04);
  }

  .s-variablemenu-results__cont::-webkit-scrollbar {
    width: 16px;
    height: 9px;
  }

  .s-variablemenu-results__cont::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-border-radius: 10px;
    height: 10px;
    background-color: @dark-5;
    border: 4px solid rgba(0, 0, 0, 0.04);
    background-clip: padding-box;
    -webkit-box-shadow: inset -1px -1px 0px @dark-5, inset 1px 1px 0px @dark-5;
    box-shadow: inset -1px -1px 0px @dark-5, inset 1px 1px 0px @dark-5;
  }

  .s-variablemenu-results {
    display: flex;
    height: 32px;
    transform-origin: bottom;
    flex-direction: row;
    align-items: center;
    align-content: center;
    .input-padding();
    .padding-v-sides();
    text-decoration: none;

    &.s-active-result {
      background-color: @day-dropdown-bg;
      .s-variablemenu__result--image,
      .s-variablemenu__result--title {
        color: @day-title;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  .s-variablemenu--fadeX-enter-active {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 1;
  }

  .s-variablemenu--fadeX-leave-active {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    opacity: 0;
  }

  .s-variablemenu--fadeX-enter {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }

  .s-variablemenu--fadeX-leave-to {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }

  .s-variablemenu--fadeX-move {
    transition: transform 0.125s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.expand-enter,
.expand-leave-to {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  height: 0;
  opacity: 0;
}

.night {
  .s-variablemenu {
    &.s-variablemenu--phase-one {
      background-color: @night-bg;
    }

    .s-variablemenu-textarea {
      border: 1px solid @night-input-border;
    }

    .s-variablemenu__result--title {
      color: @night-title;
      background-color: @night-input-border;
    }

    .s-variablemenu__result--desc {
      color: @night-paragraph;
    }

    .s-variablemenu-results__cont {
      border: 1px solid @night-input-border;

      background-color: @night-bg;
    }

    .s-variablemenu-results {
      &.s-active-result {
        background-color: @night-dropdown-bg;
        .s-variablemenu__result--image,
        .s-variablemenu__result--title {
          color: @night-title;
        }
      }
    }
  }
}
</style>
