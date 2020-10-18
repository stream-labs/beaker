<template>
  <div
    ref="paneMenu"
    class="s-pane-dropdown"
    @blur.stop.prevent="close"
    v-on="hoverOption ? { mouseleave: hide } : {}"
  >
    <div
      ref="paneToggle"
      class="s-pane-dropdown__toggle"
      :class="{ 's-pane-dropdown__toggle--active': paneMenuOpen }"
      :tabindex="0"
      @click="paneMenuOpen = !paneMenuOpen"
      v-on="hoverOption ? { mouseover: show } : {}"
      @keydown.space.prevent="paneMenuOpen = !paneMenuOpen"
      @keydown.enter.prevent="paneMenuOpen = !paneMenuOpen"
      @keydown.esc.prevent="hide"
      @keydown.tab.shift="hide"
    >
      <span>
        <slot name="title" />
        <i
          v-if="dropdownIcon"
          class="icon-dropdown"
        />
      </span>
    </div>

    <transition
      name="expand-dropdown"
      @enter="open"
      @after-enter="afterOpen"
      @leave="close"
    >
      <div
        v-show="paneMenuOpen"
        :class="menuClasses"
        class="s-pane-dropdown__menu"
      >
        <slot v-if="custom" />
        <div
          v-else
          ref="paneList"
          class="s-pane-dropdown__list"
          @mouseup="onMenuClick"
          @keydown.esc.prevent="hide"
        >
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, nextTick, onUnmounted, ref, watch,
} from 'vue';

export default defineComponent({
  name: 'PaneDropdown',

  props: {
    dropdownIcon: {
      type: Boolean,
      default: true,
    },

    menuAlign: {
      type: String,
      default: null,
    },

    autoHeight: {
      type: Boolean,
      default: false,
    },

    closeOnSelect: {
      type: Boolean,
      default: true,
    },

    custom: {
      type: Boolean,
      default: false,
    },

    relativeMenu: {
      type: Boolean,
      default: false,
    },

    simpleMenu: {
      type: Boolean,
      default: false,
    },

    hoverOption: {
      type: Boolean,
      default: false,
    },

    nested: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['on-click', 'input'],

  setup(props) {
    const paneMenuOpen = ref(false);
    const paneMenu = ref<HTMLDivElement | null>(null);
    const paneList = ref<HTMLDivElement | null>(null);

    /* eslint-disable no-param-reassign */
    function afterOpen(element: HTMLDivElement) {
      element.style.height = 'auto';
    }

    function open(element: HTMLDivElement) {
      const { width } = getComputedStyle(element);
      element.style.width = width;
      const maxWidth = getComputedStyle(element).width;
      element.style.maxWidth = maxWidth;
      element.style.position = 'absolute';
      element.style.visibility = 'hidden';
      element.style.height = 'auto';
      const { height } = getComputedStyle(element);
      element.style.width = '';
      element.style.position = '';
      element.style.visibility = '';
      element.style.height = '0';
      // getComputedStyle(element).height;
      setTimeout(() => {
        element.style.height = height;
      });
    }

    function close(element: HTMLDivElement) {
      if ('target' in element) return;

      const { height } = getComputedStyle(element);
      element.style.height = height;
      // getComputedStyle(element).height;
      setTimeout(() => {
        element.style.height = '0';
      });
    }
    /* eslint-enable no-param-reassign */

    function documentClick(e: MouseEvent) {
      if (paneMenu.value && e.target !== null) {
        const el = paneMenu.value;
        if (el !== e.target && !el.contains(e.target as Node)) {
          paneMenuOpen.value = false;
        }
      }
    }

    function onMenuClick() {
      if (props.closeOnSelect) paneMenuOpen.value = !paneMenuOpen.value;
    }

    function hide() {
      paneMenuOpen.value = false;
    }

    function show() {
      paneMenuOpen.value = true;
    }

    document.addEventListener('click', documentClick);

    onUnmounted(() => {
      document.removeEventListener('click', documentClick);
    });

    const menuClasses = computed(() => {
      const classes: string[] = [];

      if (props.menuAlign) {
        classes.push(`s-pane-dropdown__menu--${props.menuAlign}`);
      }

      if (props.autoHeight) {
        classes.push('s-pane-dropdown__menu--auto-height');
      }

      if (props.relativeMenu) {
        classes.push('s-pane-dropdown__menu--relative');
      }

      if (props.simpleMenu) {
        classes.push('s-pane-dropdown__menu--simple');
      }

      return classes;
    });

    watch(paneMenuOpen, (newVal) => {
      if (newVal && !props.custom) {
        nextTick(() => {
          if (paneList.value) {
            const list = paneList.value;
            const lastSlotItem = list.lastElementChild as HTMLElement;
            const onTab = (e: KeyboardEvent) => {
              if (e.keyCode === 9 && !e.shiftKey) hide();
            };

            lastSlotItem.addEventListener('keydown', onTab);
          }
        });
      }
    });

    return {
      paneMenuOpen,
      afterOpen,
      open,
      close,
      onMenuClick,
      show,
      menuClasses,
    };
  },
});
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-pane-dropdown {
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  padding: 3px 0;

  &__slot-list {
    display: none;
  }

  &__menu {
    position: absolute;
    top: 24px;
    z-index: 100;
    width: auto;
    max-height: 300px;
    margin: 0;
    padding: 0;
    .radius();
    text-align: left;
    list-style-type: none;
    background-color: @white;
    box-shadow: 0 6px 14px rgba(55, 71, 79, 0.1);
    overflow-y: auto;

    &--auto-height {
      max-height: initial;
    }
  }

  &__menu--right {
    right: 0;
  }

  &__menu--center {
    left: 50%;
    transform: translateX(-50%);
  }

  &__menu--relative {
    position: relative;
    top: 0;
  }

  &__menu--simple {
    background-color: transparent;
    box-shadow: none;

    .s-pane-dropdown__list {
      .margin(0);
    }
  }

  &__icon {
    .margin-right();
  }

  &__list {
    .margin(2);
    padding: 0;
    list-style-type: none;

    .s-pane-dropdown {
      &__toggle {
        margin-bottom: 0;
      }

      &__menu {
        position: relative;
        top: 4px;
        box-shadow: none;
      }

      &__list {
        margin: 8px 8px 0;
      }
    }

    hr {
      width: 100%;
      margin: 12px 0 16px;
      border: none;
      border-bottom: 1px solid @light-3;
    }

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      white-space: nowrap;
      .margin-bottom();

      &:last-of-type {
        margin-bottom: 4px;
      }
    }

    i {
      .margin-right();
    }
  }

  &__toggle {
    display: flex;
    .weight(@medium);
    .transition();
    text-decoration: none;
    cursor: pointer;

    & span {
      display: flex;
      align-items: center;
      white-space: nowrap;
    }

    i {
      color: @icon;
      .margin-left();
      margin-top: -2px;
    }
  }

  &__toggle--active {
    color: @dark-2;

    i {
      color: @dark-2;
    }
  }
}

.night {
  .s-pane-dropdown {
    &__toggle {
      &:hover {
        color: @white;
      }
    }

    &__toggle--active {
      color: white;

      i {
        color: white;
      }
    }

    &__menu {
      background-color: @dark-4;
    }

    &__menu--simple {
      background-color: transparent;
    }

    &__list {
      hr {
        border-bottom-color: @dark-5;
      }
    }

    a {
      &:hover {
        color: @night-title;
      }
    }
  }
}

.expand-dropdown-enter-active {
  animation: dropdown-fadein 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes dropdown-fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
