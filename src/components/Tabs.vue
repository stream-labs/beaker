<template>
  <div class="s-tabs-wrapper" ref="tabsWrapper">
    <div class="s-tabs-nav-wrapper">
      <div class="s-tabs-nav" :class="className">
        <div
          v-if="hasPrev"
          @click="scrollLeft"
          class="s-tabs-nav__control s-has-prev"
        >
          <i class="icon-back"></i>
        </div>

        <div
          ref="scrollable_tabs"
          @scroll="calculateScrolls"
          class="s-tabs"
          :class="{
            's-has-next': hasNext,
            's-has-prev': hasPrev
          }"
        >
          <div
            v-for="tab in tabs"
            :key="tab.value"
            class="s-tab"
            :class="{ 'is-active': tab.value === selectedTab }"
            :style="selectTabSize"
            @click="showTab(tab.value)"
            :aria-controls="`${tab.value}-tab`"
          >
            <router-link
              v-if="updateRoute"
              :to="`#/${tab.value}`"
              class="s-tab-link"
              tabindex="-1"
            >
              <i v-if="tab.icon" :class="`icon-${tab.icon}`"></i>
              <span
                @keydown.left.prevent="highlightTab(tab.value, 'LEFT')"
                @keydown.right.prevent="highlightTab(tab.value)"
                :tabindex="tab.value === selectedTab ? 0 : -1"
                class="s-tab-title"
                >{{ tab.name }}</span
              >
            </router-link>
            <div v-else class="s-tab-link" tabindex="-1">
              <i v-if="tab.icon" :class="`icon-${tab.icon}`"></i>
              <span
                @keydown.left.prevent="highlightTab(tab.value, 'LEFT')"
                @keydown.right.prevent="highlightTab(tab.value)"
                :tabindex="tab.value === selectedTab ? 0 : -1"
                class="s-tab-title"
                >{{ tab.name }}</span
              >
            </div>
            <!-- <div>
              {{ tab.name }}
              <span :class="`icon-${tab.icon}`"></span>
            </div>-->
          </div>
        </div>

        <div
          v-if="hasNext"
          @click="scrollRight"
          class="s-tabs-nav__control s-has-next"
        >
          <i class="icon-back"></i>
        </div>
      </div>
    </div>

    <div class="s-tab-content" v-if="!hideContent">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        v-show="tab.value === selectedTab"
      >
        <slot :name="tab.value" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Prop, Vue } from "vue-property-decorator";
import ResizeObserver from "resize-observer-polyfill";
import { debounce } from "lodash";

@Component({})
export default class Tabs extends Vue {
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
    this.$nextTick(() => this.calculateScrolls());
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
    tabsWrapper: HTMLDivElement;
    scrollable_tabs: HTMLDivElement;
  };

  isMounted = false;
  tabsContainer: HTMLDivElement = null as any;
  canScroll = false;
  hasNext = false;
  hasPrev = false;
  hightlightedTabIndex = 0;
  private scrollIncrement = 100;

  selectedTab: string = "";

  selectTabSize = {
    fontSize: this.tabSize
  };

  get tabSize() {
    if (this.size === "small") {
      return "14px";
    } else if (this.size === "large") {
      return "16px";
    } else {
      return "14px";
    }
  }

  destroyed() {
    // window.removeEventListener("resize", this.debouncedScroll);
  }

  mounted() {
    this.isMounted = true;
    // this.tabsContainer = this.$refs.scrollable_tabs;
    this.tabsContainer = document.querySelector(".s-tabs") as HTMLDivElement;
    this.loadResizeObserver();

    if (this.selected) {
      this.selectedTab = this.selected;
    } else {
      this.selectedTab = this.tabs[0].value;
    }

    this.$whatInput.registerOnChange(this.calculateScrolls, "input");
  }

  loadResizeObserver() {
    const ro = new ResizeObserver(entries => {
      entries.forEach(entry => {
        this.calculateScrolls("resizeObserver");
      });
    });
    ro.observe(this.tabsContainer);
  }

  scrollLeft() {
    this.tabsContainer.scrollLeft =
      this.tabsContainer.scrollLeft - this.scrollIncrement;
  }

  scrollRight() {
    this.tabsContainer.scrollLeft =
      this.tabsContainer.scrollLeft + this.scrollIncrement;
  }

  highlightTab(current, direction = "RIGHT") {
    const currentIndex = this.tabs.findIndex(tab => current === tab.value);
    const tabsContainer = document.querySelector(".s-tabs") as HTMLDivElement;
    const tabs = tabsContainer.children;
    let newTabIndex = 0;

    if (direction === "LEFT") {
      newTabIndex =
        currentIndex === 0 ? this.tabs.length - 1 : currentIndex - 1;
    } else {
      newTabIndex =
        currentIndex === this.tabs.length - 1 ? 0 : currentIndex + 1;
    }

    let currentTab = tabs[currentIndex].querySelector(
      ".s-tab-title"
    ) as HTMLSpanElement;
    let newTab = tabs[newTabIndex] as HTMLDivElement;
    let newTabTitle = tabs[newTabIndex].querySelector(
      ".s-tab-title"
    ) as HTMLSpanElement;

    const viewport = tabsContainer.clientWidth;
    const viewportOffset = tabsContainer.scrollLeft;
    const viewportPosition = viewportOffset + viewport;
    const maxScroll = tabsContainer.scrollWidth - viewport;
    const tabPosition = newTab.offsetLeft;
    const tabWidth = newTab.clientWidth;
    let scrollReqiuired = true;

    // check if scroll is required
    if (
      tabPosition > viewportOffset &&
      tabPosition + tabWidth < viewportOffset + viewport
    ) {
      scrollReqiuired = false;
    }

    if (
      scrollReqiuired &&
      tabPosition > viewportOffset &&
      tabPosition + tabWidth > viewportOffset + viewport
    ) {
      tabsContainer.scrollLeft = tabPosition + tabWidth - viewport + 30;
    }

    setTimeout(() => {
      currentTab.tabIndex = -1;
      newTabTitle.tabIndex = 0;
      newTabTitle.focus();
      this.showTab(this.tabs[newTabIndex].value);
    }, 0);
  }

  calculateScrolls(caller = "intent") {
    // console.log("TCL: Tabs -> calculateScrolls -> caller", caller);
    if (!this.isMounted) return false;
    if (this.$whatInput.ask() === "keyboard") {
      this.hasNext = this.hasPrev = false;
      return false;
    }

    // console.log(
    //   "TCL: Tabs -> calculateScrolls -> this.tabsContainer",
    //   this.tabsContainer
    // );
    this.canScroll =
      this.tabsContainer.scrollWidth > this.tabsContainer.clientWidth;
    this.hasPrev = this.tabsContainer.scrollLeft > 0;
    const scrollRight =
      this.tabsContainer.scrollWidth -
      (this.tabsContainer.scrollLeft + this.tabsContainer.clientWidth);

    this.hasNext = scrollRight > 0;
  }

  debouncedScroll = debounce(this.calculateScrolls, 500);

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

.s-tabs-wrapper {
  height: 100%;
}

.s-tabs-nav-wrapper {
  position: relative;
  height: 30px;
}

.s-tabs-nav {
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: flex-start;
  background: transparent;
  box-sizing: border-box;
  position: relative;
  max-width: none;
  background: transparent;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.s-tabs-nav__control {
  height: calc(~"2 * " @spacing);
  display: flex;
  align-items: flex-end;
  .margin-bottom(2);
  position: relative;

  &.s-has-next,
  &.s-has-prev {
    &:before {
      content: "";
      width: 40px;
      height: 16px;
      position: absolute;
    }
  }

  &.s-has-next {
    .icon-back {
      transform: rotate(180deg);
    }

    &:before {
      right: 16px;
      background: -moz-linear-gradient(
        left,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        left,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    }
  }

  &.s-has-prev {
    &:before {
      left: 16px;
      background: -moz-linear-gradient(
        left,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        left,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    }
  }
}

.s-tabs {
  display: inline-block;
  overflow-x: hidden;
  white-space: nowrap;
  overflow-y: hidden;
  width: 100%;

  &.s-has-prev {
    .margin-left(2);
  }

  &.s-has-next {
    .margin-right(2);
  }

  &:before {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: @day-border;
  }
}

.s-tab {
  color: @day-paragraph;
  border-bottom: 2px solid transparent;
  .margin-right(2);
  cursor: pointer;
  display: inline-block;
  position: relative;
  .transition(border);
  .weight(@medium);

  &.is-active {
    border-color: @dark-2;

    .s-tab-link {
      color: @day-title;
    }
  }

  i {
    .margin-right();
  }
}

.s-tab-link {
  padding-top: 4px;
  padding-bottom: 11px;
  display: flex;
  text-decoration: none;
}

.s-tab-content {
  position: relative;
  overflow-y: auto;
  .padding-v-sides(3);
}

.night,
.night-theme {
  .s-tabs {
    &:before {
      background-color: @night-border;
    }
  }

  .s-tab {
    color: @night-paragraph;

    &.is-active {
      border-color: @light-1;

      .s-tab-link {
        color: @night-title;
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
