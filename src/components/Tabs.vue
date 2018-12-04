<template>
  <div class="tabs-wrapper">
    <div class="tabs-nav-wrapper">
      <div class="tabs-nav" :class="className">
        <div v-show="hasPrev" @click="scrollLeft" class="tabs-nav__control has-prev">
          <i class="icon-down icon-left"></i>
        </div>
        <div
          ref="scrollable_tabs"
          class="tabs"
          @scroll="calculateScrolls"
          :class="{
          'has-next': hasNext,
          'has-prev': hasPrev}"
         >
          <span
            v-for="tab in tabs"
            :key="tab.value"
            class="tab"

            :class="{'is-active': tab.value === value}"
            @click="handleClick($event, tab.value)"
          >{{ tab.name }}</span>
          <div ref="underline_tabs" class="underline"></div>
        </div>
        <div v-show="hasNext" @click="scrollRight" class="tabs-nav__control has-next">
          <i class="icon-down icon-right"></i>
        </div>
      </div>
    </div>
    <transition-group
      v-if="!hideContent"
      tag="div"
      class="tab-content-wrapper"
      :name="tabDirection"
    >
      <div
        id="tab-content-id"
        v-if="tab.value === value"
        v-for="(tab, id) in tabs"
        :key="id"
        class="tab-content"
      >
        <slot :name="tab.value"/>
      </div>
    </transition-group>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class Tabs extends Vue {
  $refs!: {
    scrollable_tabs: HTMLDivElement;
    underline_tabs: HTMLDivElement;
  };

  isMounted = false;
  tabsContainer: HTMLDivElement = null as any;
  tabsUnderline: HTMLDivElement = null as any;
  tabFrom: number = 0;
  tabTo: number = 0;
  canScroll = false;
  hasNext = false;
  hasPrev = false;
  private scrollIncrement = 100;

  @Prop()
  tabs!: [
    {
      name: string;
      value: string;
    }
  ];

  @Prop()
  value!: string;

  @Prop()
  className!: string;

  @Prop()
  hideContent!: boolean;

  @Prop() direction!: number;

  @Watch("value")
  onPropertyChanged(value: string, oldValue: string) {
    let oldTab: any = this.tabs.find(tab => tab.value === oldValue);
    this.tabFrom = this.tabs.indexOf(oldTab);
    let newTab: any = this.tabs.find(tab => tab.value === value);
    this.tabTo = this.tabs.indexOf(newTab);
  }

  created() {
    window.addEventListener("resize", this.calculateScrolls);
    window.addEventListener("resize", this.calculateUnderline);
  }

  destroyed() {
    window.removeEventListener("resize", this.calculateScrolls);
    window.removeEventListener("resize", this.calculateUnderline);
  }

  mounted() {
    this.isMounted = true;
    this.tabsContainer = this.$refs.scrollable_tabs;
    this.tabsUnderline = this.$refs.underline_tabs;
    this.calculateScrolls();
    this.tabsUnderline.style.width =
      ((<HTMLElement>this.tabsContainer.childNodes[0]) as any).offsetWidth +
      "px";

    if (!this.value) this.showTab(this.tabs[0].value);
  }

  scrollLeft() {
    this.tabsContainer.scrollLeft =
      this.tabsContainer.scrollLeft - this.scrollIncrement;
  }

  scrollRight() {
    this.tabsContainer.scrollLeft =
      this.tabsContainer.scrollLeft + this.scrollIncrement;
  }

  calculateScrolls() {
    if (!this.isMounted) return false;

    this.canScroll =
      this.tabsContainer.scrollWidth > this.tabsContainer.clientWidth;

    this.hasPrev = this.tabsContainer.scrollLeft > 0;

    let scrollRight =
      this.tabsContainer.scrollWidth -
      (this.tabsContainer.scrollLeft + this.tabsContainer.clientWidth);

    this.hasNext = scrollRight > 0;
  }

  get tabDirection() {
    let from = this.tabFrom;
    let to = this.tabTo;
    if (to > from) {
      return "right";
    }
    if (from > to) {
      return "left";
    }
  }

  calculateUnderline(event: any) {
    if (!this.isMounted) return false;

    let p: boolean;
    let n: boolean;

    if (this.tabsContainer.classList.contains("has-prev")) {
      p = true;
    } else {
      p = false;
    }
    if (this.tabsContainer.classList.contains("has-next")) {
      n = true;
    } else {
      n = false;
    }

    if ((!p && n) || (!p && !n)) {
      this.tabsUnderline.style.width = event.target.offsetWidth + 2 + "px";
      this.tabsUnderline.style.transform =
        "translateX(" + event.target.offsetLeft + "px)";
    }

    if (p && !n) {
      this.tabsUnderline.style.width = event.target.offsetWidth + 2 + "px";
      this.tabsUnderline.style.transform =
        "translateX(" + (event.target.offsetLeft - 30) + "px)";
    }

    if (p && n) {
      this.tabsUnderline.style.width = event.target.offsetWidth + 2 + "px";
      this.tabsUnderline.style.transform =
        "translateX(" + (event.target.offsetLeft - 30) + "px)";
    }
  }

  showTab(tab: string) {
    this.$emit("input", tab);
  }

  handleClick(event: any, tab: string) {
    this.showTab(tab);
    this.calculateUnderline(event);
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.right-enter-active {
  transition: all 0.25s 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.right-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.right-enter {
  opacity: 0;
  transform: translateX(-100px);
}

.right-leave {
  opacity: 1;
  transform: scale(1);
}

.right-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.left-enter-active {
  transition: all 0.25s 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.left-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.left-enter {
  opacity: 0;
  transform: translateX(100px);
}

.left-leave {
  opacity: 1;
  transform: scale(1);
}

.left-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.underline {
  height: 1px;
  width: 0;
  background-color: @night-border;
  transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}

.tabs-wrapper {
  height: 100%;
}

.tabs-nav-wrapper {
  position: relative;
  height: 34px;
}

// hi
.tabs-nav {
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: flex-start;
  background: transparent;
  box-sizing: border-box;
  position: relative;
  max-width: none;
  border-bottom: 1px solid @day-border;
  background: transparent;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.tabs-nav__control {
  height: calc(~"2 * " @spacing);
  display: flex;
  align-items: flex-end;
  .margin-bottom(2);
  position: relative;

  &.has-next,
  &.has-prev {
    &:before {
      content: "";
      width: 40px;
      height: 16px;
      position: absolute;
    }
  }

  &.has-next {
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

  &.has-prev {
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

.tabs {
  display: inline-block;
  overflow-x: hidden;
  white-space: nowrap;
  overflow-y: hidden;
  width: 100%;
  scroll-behavior: smooth;
  transition: all 0.15s cubic-bezier(0.215, 0.61, 0.355, 1);
  &.has-prev {
    .margin-left(2);
  }

  &.has-next {
    .margin-right(2);
  }
}

.tab {
  color: @day-paragraph;
  .padding-bottom(2);
  margin-bottom: -1px;
  .margin-right(2);
  cursor: default;
  .transition();

  &.is-active {
    .weight(@medium);
    color: @day-title;
  }
}

.tab-content {
  position: relative;
  overflow-y: auto;
  .padding-v-sides(3);
}

.night-theme {
  .underline {
    background-color: @light-1;
  }

  .tabs-nav {
    border-color: @night-border;
  }

  .tab {
    color: @night-paragraph;

    &.is-active {
      color: @night-title;
    }
  }

  .tabs-nav__control {
    &.has-next {
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

    &.has-prev {
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
