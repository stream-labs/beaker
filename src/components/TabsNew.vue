<template>
  <div class="s-tabs" ref="tabsWrapper">
    <div class="s-tabs__nav" ref="tabs" :class="className">
      <!-- <div ref="tabs" class="s-tabs"> -->
      <div
        v-for="tab in tabs"
        :key="tab.value"
        class="s-tabs__tab"
        :class="{ 'is-active': tab.value === selectedTab }"
        :style="selectTabSize"
        @click="showTab(tab.value)"
        :aria-controls="`${tab.value}-tab`"
      >
        <component
          :is="tabLinkTag"
          v-bind="tabLinkOptions(tab.value)"
          class="s-tab__link"
          tabindex="-1"
        >
          <i v-if="tab.icon" :class="`icon-${tab.icon}`"></i>
          <span
            @keydown.left.prevent="highlightTab(tab.value, 'LEFT')"
            @keydown.right.prevent="highlightTab(tab.value)"
            :tabindex="tab.value === selectedTab ? 0 : -1"
            class="s-tab-title"
          >{{ tab.name }}</span>
        </component>
      </div>
      <PaneDropdown v-if="hasOverflowTabs" menuAlign="right">
        <template slot="title">More</template>
        <a v-for="tab in overflowTabs" :key="`overflow-${tab.value}`">{{ tab.name }}</a>
      </PaneDropdown>
      <!-- <div
            class="s-tabs-nav__control"
            :style="{'background-color': overflowIsActive ? 'red' : 'transparent'}"
            @mouseenter="showOverflowTabs(true)"
            @mouseleave="showOverflowTabs(false)"
          >
            More
            <i class="icon-dropdown"></i>
      </div>-->
      <!-- </div> -->

      <!--  -->
    </div>

    <div class="s-tab-content" v-if="!hideContent">
      <div v-for="(tab, index) in tabs" :key="index" v-show="tab.value === selectedTab">
        <slot :name="tab.value" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Prop, Vue } from "vue-property-decorator";
import ResizeObserver from "resize-observer-polyfill";
import { debounce } from "lodash";

import PaneDropdown from "./PaneDropdown.vue";

@Component({
  components: {
    PaneDropdown
  }
})
export default class TabsNew extends Vue {
  @Prop()
  tabs!: [
    {
      name: string;
      value: string;
      icon: string;
    }
  ];

  @Watch("tabs", { deep: true })
  onTabsChange() {
    this.$nextTick(() => this.setOverflowTabs());
  }

  @Prop()
  size!: string;

  @Prop()
  selected!: string;

  @Prop()
  className!: string;

  @Prop()
  hideContent!: boolean;

  @Prop({ default: true })
  updateRoute!: boolean;

  $refs!: {
    tabs: HTMLDivElement;
    tabsWrapper: HTMLDivElement;
  };

  isMounted = false;

  overflowIsActive = false;

  selectedTab: string = "";
  tabsContainer: HTMLDivElement = null as any;
  selectTabSize = {
    fontSize: this.tabSize
  };

  get tabLinkTag() {
    return this.updateRoute ? "router-link" : "span";
  }

  get tabSize() {
    return this.size === "large" ? "16px" : "14px";
  }

  get overflowTabs() {
    return this.tabs;
  }

  get hasOverflowTabs() {
    return !!this.overflowTabs.length;
  }

  destroyed() {
    // window.removeEventListener("resize", this.debouncedScroll);
  }

  mounted() {
    this.isMounted = true;
    this.tabsContainer = this.$refs.tabs;
    this.loadResizeObserver();
    this.selectedTab = this.selected || this.tabs[0].value;

    // this.$whatInput.registerOnChange(this.calculateScrolls, "input");
  }

  loadResizeObserver() {
    const ro = new ResizeObserver(entries => {
      entries.forEach(entry => {
        this.setOverflowTabs();
      });
    });
    ro.observe(this.tabsContainer);
  }

  setOverflowTabs() {
    if (!this.isMounted) return false;
  }

  showOverflowTabs(val: boolean) {
    this.overflowIsActive = val;
  }

  tabLinkOptions(tabValue) {
    return this.updateRoute ? { to: `#/${tabValue}` } : {};
  }

  showTab(tab: string) {
    this.selectedTab = tab;
    this.$emit("tab-selected", tab);
  }
}
</script>

<style lang="less" scoped>
@import (reference) "./../styles/Imports";

a {
  text-decoration: none;
}

.s-tabs {
  height: 100%;

  &__nav {
    display: flex;
    background: transparent;
    position: relative;
    width: 100%;
    border-bottom: 1px solid #000;
  }

  &__tab {
    position: relative;
    display: inline-block;
    .margin-right(2);
    // border-bottom: 2px solid transparent;
    .weight(@medium);
    color: @day-paragraph;
    cursor: pointer;
    .transition(color);

    &:hover {
      color: @day-title;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -1px;
      background-color: transparent;
      height: 2px;
      width: 100%;
      .transition(background-color);
    }

    &.is-active {
      border-color: @dark-2;
      color: @day-title;

      &::after {
        background-color: @dark-2;
      }
    }

    i {
      .margin-right();
    }
  }

  &__link {
    padding-top: 4px;
    padding-bottom: 11px;
    display: flex;
    text-decoration: none;
  }

  ::v-deep .s-pane-dropdown {
    padding-top: 4px;
    padding-bottom: 12px;

    .icon-dropdown {
      height: 14px;
      .margin-left();
    }
  }
}

.s-tab-content {
  position: relative;
  overflow-y: auto;
  .padding-v-sides(3);
}

.night,
.night-theme {
  .s-tabs {
    &__nav {
      border-color: @night-border;
    }

    &__tab {
      color: @night-paragraph;

      &:hover {
        color: @night-title;
      }

      &.is-active {
        border-color: @light-1;

        // .s-tab__link {
        color: @night-title;
        // }

        &::after {
          background-color: @white;
        }
      }
    }
  }

  .s-tabs-nav__control {
    &.s-has-next {
      &:before {
        background: -moz-linear-gradient(
          left,
          rgba(23, 36, 45, 0) 0%,
          rgba(23, 36, 45, 1) 100%
        ); /* FF3.6-15 */
        background: -webkit-linear-gradient(
          left,
          rgba(23, 36, 45, 0) 0%,
          rgba(23, 36, 45, 1) 100%
        ); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(
          to right,
          rgba(23, 36, 45, 0) 0%,
          rgba(23, 36, 45, 1) 100%
        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      }
    }

    &.s-has-prev {
      &:before {
        background: -moz-linear-gradient(
          left,
          rgba(23, 36, 45, 1) 0%,
          rgba(23, 36, 45, 0) 100%
        ); /* FF3.6-15 */
        background: -webkit-linear-gradient(
          left,
          rgba(23, 36, 45, 1) 0%,
          rgba(23, 36, 45, 0) 100%
        ); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(
          to right,
          rgba(23, 36, 45, 1) 0%,
          rgba(23, 36, 45, 0) 100%
        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      }
    }
  }
}
</style>
