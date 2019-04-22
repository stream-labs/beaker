<template >
  <div class="s-pane-dropdown" ref="paneMenu">
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

    <transition name="fade">
      <div :class="menuAlignClass" class="s-pane-dropdown__menu" v-show="paneMenuOpen">
        <slot v-if="custom"></slot>

        <ul class="s-pane-dropdown__list" v-else>
          <li v-for="(item, idx) in paneList" :key="idx">
            <i :class="icon" class="s-pane-dropdown__icon"></i>
            <a
              :href="item.href"
              class="s-pane-dropdown__link"
              :class="item.className"
            >{{ item.textContent }}</a>
          </li>
        </ul>
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
  @Prop()
  icon!: string;

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

  &__list {
    .margin(2);
    padding: 0;
    list-style-type: none;
    li {
      display: flex;
      align-items: center;
    }
  }

  &__icon {
    .margin-right(0.5);
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
