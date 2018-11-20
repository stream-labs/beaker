<template >
  <div
    class="pane-dropdown"
    ref="paneMenu">

    <a
      class="pane-dropdown__toggle"
      :class="{ 'pane-dropdown__toggle--active': paneMenuOpen }"
      @click="paneMenuOpen = !paneMenuOpen">
      <span>
        <slot name="title"></slot>
        <i v-if="dropdownIcon" class="icon-dropdown"></i>
      </span>
    </a>

    <transition name="fade">
      <div
        class="pane-dropdown__menu"
        v-show="paneMenuOpen">
        <ul class="pane-dropdown__list">
          <li v-for="(item, idx) in paneList" :key="idx">
            <a :href="item.href" class="pane-dropdown__link" :class="item.className">{{ item.textContent }}</a>
          </li>
        </ul>
      </div>
    </transition>

    <span ref="panelinks" class="pane-dropdown__slot-list"><slot></slot></span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class PaneDropdown extends Vue {
  @Prop({ default: true })
  dropdownIcon!: boolean;

  paneMenuOpen = false;
  paneList = null;

  created() {
    document.addEventListener("click", this.documentClick);
  }

  destroyed() {
    document.removeEventListener("click", this.documentClick);
  }

  mounted() {
    let links: any = this.$refs.panelinks;
    let [...list] = links.children;
    this.paneList = list;
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

<style lang="less" scoped>
@import "./../styles/Imports";

.pane-dropdown {
  position: relative;
  display: flex;

  &__slot-list {
    display: none;
  }
}

.pane-dropdown--left {
  .pane-dropdown__menu {
    left: 0;
    right: auto;
  }
}

.pane-dropdown__menu {
  position: absolute;
  top: 25px;
  right: -4px;
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

  &.active {
    display: block;
  }

  li {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .pane-dropdown__link {
    width: 100%;
    white-space: nowrap;
    margin-left: 0;
    color: @day-paragraph;
    text-decoration: none;

    &:hover {
      color: @day-title;
    }
  }
}

// .panel-dropdown--button-toggle {
//   .pane-dropdown__menu {
//     top: 34px;
//     right: 0;
//     min-width: 100%;
//   }
// }

.pane-dropdown__list {
  .margin();
  padding: 0;
  list-style-type: none;
}

.pane-dropdown__toggle {
  .transition();
  text-decoration: none;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
  }

  i {
    font-size: 16px;
    color: @icon;
    margin-left: 4px;
  }
}

.pane-dropdown__toggle--active {
  color: @dark-2;
}
</style>
