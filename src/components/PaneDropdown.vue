<template>
  <div class="s-pane-dropdown" ref="paneMenu" @blur.stop.prevent="close">
    <a
      class="s-pane-dropdown__toggle"
      :class="{ 's-pane-dropdown__toggle--active': paneMenuOpen }"
      @click="paneMenuOpen = !paneMenuOpen"
    >
      <span>
        <slot name="title"></slot>
        <i v-if="dropdownIcon" class="icon-dropdown"></i>
      </span>
    </a>

    <transition
      name="expand"
      @enter="open"
      @after-enter="afterOpen"
      @leave="close"
    >
      <div
        :class="menuAlignClass"
        class="s-pane-dropdown__menu"
        @mouseup="paneMenuOpen = !paneMenuOpen"
        v-show="paneMenuOpen"
      >
        <slot v-if="custom"></slot>
        <div v-else class="s-pane-dropdown__list">
          <slot></slot>
        </div>
      </div>
    </transition>
    <span v-if="!custom" ref="panelinks" class="s-pane-dropdown__slot-list">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class PaneDropdown extends Vue {
  $refs!: {
    paneMenu: HTMLDivElement;
    panelinks: HTMLSpanElement;
  };

  @Prop()
  icons!: string[];

  @Prop({ default: true })
  dropdownIcon!: boolean;

  @Prop({ default: null })
  menuAlign!: string;

  @Prop({ default: false })
  custom!: boolean;

  paneMenuOpen = false;
  paneList = null;

  created() {
    document.addEventListener("click", this.documentClick);
  }

  destroyed() {
    document.removeEventListener("click", this.documentClick);
  }

  get menuAlignClass() {
    return `s-pane-dropdown__menu--${this.menuAlign}`;
  }

  openContent() {
    this.paneMenuOpen = !this.paneMenuOpen;
  }

  afterOpen(element) {
    element.style.height = "auto";
  }

  open(element) {
    let width = getComputedStyle(element).width;
    element.style.width = width;
    let maxWidth = getComputedStyle(element).width;
    element.style.maxWidth = maxWidth;
    element.style.position = `absolute`;
    element.style.visibility = `hidden`;
    element.style.height = `auto`;
    let height = getComputedStyle(element).height;
    element.style.width = null;
    element.style.position = null;
    element.style.visibility = null;
    element.style.height = 0;
    getComputedStyle(element).height;
    setTimeout(() => {
      element.style.height = height;
    });
  }

  close(element) {
    let height = getComputedStyle(element).height;
    element.style.height = height;
    getComputedStyle(element).height;
    setTimeout(() => {
      element.style.height = 0;
    });
  }

  mounted() {
    if (!this.custom) {
      let links: any = this.$refs.panelinks;
      let [...list] = links.children;
      this.paneList = list;
    }
  }

  documentClick(e: Event) {
    let el: any = this.$refs.paneMenu;
    let target = e.target;
    if (el !== target && !el.contains(target)) {
      this.paneMenuOpen = false;
    }
  }

  hide() {
    this.paneMenuOpen = false;
  }

  show() {
    this.paneMenuOpen = true;
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";

.s-pane-dropdown {
  position: relative;
  display: inline-block;

  &__slot-list {
    display: none;
  }

  &__menu {
    position: absolute;
    top: 25px;
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

    li {
      .margin-bottom();

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__menu--right {
    right: 0;
  }

  &__menu--center {
    left: 50%;
    transform: translateX(-50%);
  }

  &__link {
    width: 100%;
    margin-left: 0;
    text-decoration: none;
    white-space: nowrap;
    color: @day-paragraph;

    &:hover {
      color: @day-title;
    }
  }

  &__icon {
    .margin-right();
  }

  &__list {
    .margin(2);
    padding: 0;
    list-style-type: none;

    li {
      display: flex;
      align-items: center;
    }

    a {
      text-decoration: none;
      white-space: nowrap;
      display: block;
      .margin-bottom();
    }

    i {
      .margin-right();
    }
  }

  &__toggle {
    .transition();
    text-decoration: none;
    cursor: pointer;

    span {
      display: flex;
      align-items: center;
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

.expand-enter-active,
.expand-leave-active {
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.expand-enter,
.expand-leave-to {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  height: 0;
  opacity: 0;
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

    &__link,
    a {
      &:hover {
        color: @night-title;
      }
    }
  }
}
</style>
