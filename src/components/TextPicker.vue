<template>
  <div
    class="s-textpicker"
    :class="{ 's-textarea-area--with-label': label }"
  >
    <transition-group name="s-textpicker--fadeY">
      <div
        class="s-textpicker-results__cont"
        :key="limitedResult.length"
        v-if="phaseTwo && limitedResult.length >= 1"
        :style="calcTransform"
        ref="resultArea"
      >
        <transition-group name="s-textpicker--fadeX">
          <div
            class="s-textpicker-results"
            v-for="(searchResult, i) in limitedResult"
            :key="searchResult.item.variable"
            :class="{ 's-active-result': currentResult === i }"
            @mouseover="currentResult = i"
            @mousedown="mergeValues"
            @mouseup="blurSearch"
          >
            <div class="s-textpicker__result--title">{{ searchResult.item.variable }}</div>
            <div class="s-textpicker__result--desc">{{ searchResult.item.description }}</div>
          </div>
        </transition-group>
      </div>
    </transition-group>
    <div class="s-textpicker--searchbar__cont">
            <p v-if="maxLength" class="s-textpicker-area__characters">
        {{ currentLength }}/{{ maxLength }}
      </p>
      <textarea
        ref="textArea"
        class="s-textpicker-textarea"
        :class="{
          's-textpicker-area__input--error': !!error,
          's-textpicker-area__input--count': !!maxLength
        }"
        :name="name"
        :cols="cols"
        :rows="rows"
        :placeholder="placeholder"
        :maxlength="maxLength"
        v-model="value"
        v-on="filteredListeners"
        @keydown="blockKeyDown"
        @keyup="updateCursorPos"
        @click="updateCursorPos"
        @focus="updateCursorPos"
        @blur.stop.prevent="playClosingSequence"
        @keyup.stop.prevent="keyEvent"
        @keydown.enter.prevent
      />
      <label
        :class="{
          's-textpicker-area__label--top': value !== '',
          's-textpicker-area__label--error': !!error
        }"
        class="s-textpicker-area__label"
        v-if="label"
        >{{ label }}</label
      >
    </div>
    <transition name="fadeX-from-left">
      <p v-show="error" class="s-form-area__error-text">{{ error }}</p>
    </transition>

    <p v-show="helpText" class="s-form-area__help-text">{{ helpText }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { omit } from "lodash";
import Fuse from "fuse.js";

@Component({})
export default class TextPicker extends Vue {
  $refs!: {
    textArea: HTMLTextAreaElement;
    resultArea: HTMLDivElement;
  };

  result: any = [];
  queryStart: any = [];
  private queryLength: number = 0;
  private phaseOne: Boolean = false;
  private phaseTwo: Boolean = false;
  private resultLimit: Number = 7;
  private fuse: any = null;
  private value: String = "";
  private quickLinkLoc: any = [];
  private keyEvents: any = [];
  private currentResult: number = 0;

  @Prop()
  jsonSearch!: any;
  searchData = this.jsonSearch;

  @Prop({ default: "" })
  search!: String;

  @Prop({ default: "fuseResultsUpdated" })
  eventName!: string;

  @Prop({ default: "fuseInputChanged" })
  inputChangeEventName!: string;

  @Prop()
  name!: string;
  @Prop()
  label!: string;
  @Prop()
  placeholder!: string;
  @Prop()
  error!: string;
  @Prop()
  helpText!: string;
  @Prop({ default: 100 })
  cols!: number;
  @Prop({ default: 3 })
  rows!: number;
  @Prop()
  maxLength!: number;
  @Prop()
  autoResize!: boolean;
  @Prop()
  maxHeight!: number;

  get options() {
    let options = {
      caseSensitive: false,
      includeScore: true,
      includeMatches: false,
      tokenize: false,
      matchAllTokens: false,
      findAllMatches: true,
      shouldSort: true,
      threshold: 0.1,
      location: 1,
      distance: 100,
      maxPatternLength: 12,
      minMatchCharLength: 0,
      keys: ["variable"]
    };
    return options;
  }

  get noResults() {
    if (this.result.length === 0 && this.value != "") {
      return true;
    } else {
      return false;
    }
  }

  get limitedResult() {
    return this.result.reverse();
  }

  get selectedResult() {
    return this.limitedResult[this.currentResult].item.variable;
  }

 get currentLength() {
    return this.value.length;
  }

  get calcMaxHeight() {
    if (this.phaseOne === false) {
      return "max-height: 51px;";
    }
  }

  get calcTransform() {
    if (this.phaseOne === false) {
      return "transform: translateY(0);";
    }
    if (
      this.limitedResult.length >= 1 &&
      this.limitedResult.length <= 7 &&
      this.phaseOne == true
    ) {
      let y = parseInt(this.limitedResult.length) * 32;
      return "transform: translateY(-" + y + "px);";
    } else {
      return "transform: translateY(-224px);";
    }
  }

  get filteredListeners() {
    return omit(this.$listeners, ["input"]);
  }

  @Watch("value")
  watchValue() {
    this.$parent.$emit(this.inputChangeEventName, this.value);
    this.$emit(this.inputChangeEventName, this.value);
    if (this.value.includes("{")) {
      this.getSearchString();
      if (this.noResults) this.playClosingSequence();
      if (this.value.length <= 0) this.playClosingSequence();
    }
  }

  @Watch("result")
  watchResult(val: [], oldVal: []) {
    if (this.noResults || this.value == "" || val.length != oldVal.length) {
      this.currentResult = this.limitedResult.length - 1;
    }
    this.$emit(this.eventName, this.result);
    this.$parent.$emit(this.eventName, this.result);
    this.noResults ? this.playClosingSequence() : this.playOpeningSequence();
  }

  updateCursorPos(e) {
    this.watchValue();
  }

  blockKeyDown(event) {
    if (event.type === "keydown" && this.phaseTwo) {
      const codes = ["ArrowUp", "ArrowDown"];
      if (codes.includes(event.key)) {
        event.preventDefault();
      }
    }
  }

  getSearchString() {
    if (this.value.trim() === "") {
      this.result = [];
    } else {
      const cursorPos = this.$refs.textArea.selectionStart;
      const bracketOpen = this.value.substring(0, cursorPos).lastIndexOf("{");
      const searchValue = this.value.substring(bracketOpen, cursorPos);
      const bracketClose = searchValue.lastIndexOf("}");

      if (
        cursorPos > bracketOpen &&
        bracketClose === -1 &&
        bracketOpen !== -1
      ) {
        this.result = this.fuse.search(searchValue);
        this.queryLength = searchValue.length;
      } else {
        this.playClosingSequence();
      }
    }
  }

  keyEvent(event) {
    // KEYPRESS UP
    if (event.keyCode === 38 && this.currentResult > 0) {
      if (this.currentResult <= this.limitedResult.length - 7) {
        this.$refs.resultArea.scrollBy(0, -32);
      }
      this.currentResult--;
    }
    // KEYPRESS DOWN
    if (
      event.keyCode === 40 &&
      this.currentResult < this.limitedResult.length - 1
    ) {
      if (this.currentResult >= 6) {
        this.$refs.resultArea.scrollBy(0, 32);
      }
      this.currentResult++;
    }
    // KEYPRESS ENTER
    if (event.keyCode === 13 && this.phaseOne) {
      event.preventDefault();
      this.mergeValues();
    }
    // KEYPRESS ESC
    if (event.keyCode === 27 && this.phaseOne) {
      this.blurSearch();
    }
  }

  mergeValues() {
    const cursorPos = this.$refs.textArea.selectionStart;
    if (this.value.length === cursorPos) {
      this.value =
        this.value.substring(0, cursorPos) +
        this.selectedResult.substring(this.queryLength) +
        this.value.substring(cursorPos) +
        "}";
    } else {
      this.value =
        this.value.substring(0, cursorPos) +
        this.selectedResult.substring(this.queryLength) +
        this.value.substring(cursorPos);
    }
    this.result = [];
    this.currentResult = 0;
    this.playClosingSequence();
  }

  playClosingSequence() {
    if (this.phaseTwo) {
      setTimeout(() => {
        this.phaseTwo = !this.phaseTwo;
      }, 100);
      setTimeout(() => {
        this.phaseOne = !this.phaseOne;
      }, 200);
    }
  }

  playOpeningSequence() {
    if (!this.phaseOne) {
      this.phaseOne = !this.phaseOne;
      setTimeout(() => {
        this.phaseTwo = !this.phaseTwo;
      }, 100);
    }
  }

  initFuse() {
    this.fuse = new Fuse(this.searchData, this.options);
    if (this.search) {
      this.value = this.search;
    }
  }

  blurSearch() {
    this.$refs.textArea.blur();
    this.currentResult = 0;
  }

  mounted() {
    this.initFuse();
  }

    focus() {
    this.$refs.textArea.focus();
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";

.s-textpicker {
  z-index: 15;

  position: relative;
  max-height: 51px;
  transform-origin: bottom;
  padding: 0;
  margin: 0;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &.s-textpicker--phase-one {
    background-color: @day-bg;
  }

  ::placeholder {
    color: #91979a;
    opacity: 1;
  }

  .s-textpicker-textarea {
    border: 1px solid @day-input-border;
    border-radius: @radius;
    margin: 0;
  }

  .s-textpicker-area__input--error {
  border-color: @red;
}

.s-textpicker-area__input--count {
  .padding-bottom(4) !important;
}

.s-textpicker-area__characters {
  .absolute(auto, 20px, 15px, auto);
  margin: 0;
}

  .s-textpicker__result--title {
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

  .s-textpicker__result--desc {
    width: 100%;
    font-size: 12px;
    color: @dark-5;
  }

  .s-textpicker-results__cont {
    display: flex;
    width: 100%;
    max-height: 224px;
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

  .s-textpicker-results__cont::-webkit-scrollbar-corner {
    background-color: rgba(0, 0, 0, 0.04);
    background-image: none;
  }

  .s-textpicker-results__cont::-webkit-scrollbar {
    width: 1em;
    background-color: rgba(0, 0, 0, 0.04);
  }

  .s-textpicker-results__cont::-webkit-scrollbar {
    width: 16px;
    height: 9px;
  }

  .s-textpicker-results__cont::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-border-radius: 10px;
    height: 10px;
    background-color: @dark-5;
    border: 4px solid rgba(0, 0, 0, 0.04);
    background-clip: padding-box;
    -webkit-box-shadow: inset -1px -1px 0px @dark-5, inset 1px 1px 0px @dark-5;
    box-shadow: inset -1px -1px 0px @dark-5, inset 1px 1px 0px @dark-5;
  }

  .s-textpicker-results {
    display: flex;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
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
      .s-textpicker__result--image,
      .s-textpicker__result--title {
        color: @day-title;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  .s-textpicker-area__label {
  position: absolute;
  color: @dark-5;
  left: 8px;
  top: 12px;
  .radius();
}

.s-textpicker-area__label--error,
.s-textpicker-area__error-text {
  color: @red;
}

  .s-textpicker--fadeX-enter-active {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 1;
  }

  .s-textpicker--fadeX-leave-active {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    opacity: 0;
  }

  .s-textpicker--fadeX-enter {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(10px);
    opacity: 0;
  }

  .s-textpicker--fadeX-leave-to {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    transform: translateX(10px);
  }

  .s-textpicker--fadeX-move {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .s-textpicker--fadeY-enter-active {
    transition: all 0.25s 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 1;
  }

  .s-textpicker--fadeY-leave-active {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    opacity: 0;
  }

  .s-textpicker--fadeY-enter {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(-10px);
    opacity: 0;
  }

  .s-textpicker--fadeY-leave-to {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    transform: translateY(-10px);
  }

  .s-textpicker--fadeY-move {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.s-textpicker-area--with-label {
  position: relative;

  label {
    order: -1;
    transition: all 0.275s ease-in-out;
    transform: translateY(0px);
    pointer-events: none;
    background-color: @white;
    padding: 0 4px;
    line-height: 130%;
  }

  .s-textpicker-area__input:focus::-webkit-input-placeholder {
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: @light-5;
  }
  .s-textpicker-area__input:focus:-moz-placeholder {
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: @light-5;
  } /* FF 4-18 */
  .s-textpicker-area__input:focus::-moz-placeholder {
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: @light-5;
  } /* FF 19+ */
  .s-textpicker-area__input:focus:-ms-input-placeholder {
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: @light-5;
  } /* IE 10+ */

  .s-textpicker-area__input:focus + label,
  .s-textpicker-area__label--top {
    transform: translateY(-20px);
    font-size: 12px;
  }

  .s-textpicker-area__input:focus + label {
    color: @day-title;
  }

  .s-textpicker-area__input:focus + .s-form-area__label--error {
    color: green;
  }

  .s-textpicker-area--top {
    color: @day-paragraph;
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: transparent;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: transparent;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: transparent;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: transparent;
  }
}


.night {
  .s-textpicker {
    &.s-textpicker--phase-one {
      background-color: @night-bg;
    }

    .s-textpicker-textarea {
      border: 1px solid @night-input-border;
    }

    .s-textpicker__result--title {
      color: @night-title;
      background-color: @night-input-border;
    }

    .s-textpicker__result--desc {
      color: @night-paragraph;
    }

    .s-textpicker-results__cont {
      border: 1px solid @night-input-border;

      background-color: @night-bg;
    }

    .s-textpicker-results {
      &.s-active-result {
        background-color: @night-dropdown-bg;
        .s-textpicker__result--image,
        .s-textpicker__result--title {
          color: @night-title;
        }
      }
    }
  }
}
</style>
