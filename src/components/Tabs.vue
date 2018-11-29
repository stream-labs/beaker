<template>
<div class="tabs-wrapper">
  <div class="tabs-nav-wrapper">
    <div class="tabs-nav" :class="className">
      <div
        v-if="hasPrev"
        @click="scrollLeft"
        class="tabs-nav__control has-prev">
        <i class="icon-down icon-left"></i>
      </div>

      <div
        ref="scrollable_tabs"
        @scroll="calculateScrolls"
        class="tabs"
        :class="{
          'has-next': hasNext,
          'has-prev': hasPrev
        }">

        <span
          v-for="tab in tabs"
          :key="tab.value"
          class="tab"
          :class="{ 'is-active': tab.value === value }"
          @click="showTab(tab.value)">
          {{ tab.name }}
        </span>
      </div>

      <div
        v-if="hasNext"
        @click="scrollRight"
        class="tabs-nav__control has-next">
        <i class="icon-down icon-right"></i>
      </div>
    </div>
  </div>

  <div class="tab-content" v-if="!hideContent">
    <slot
      v-for="tab in tabs"
      :name="tab.value"
      v-if="tab.value === value"/>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Tabs extends Vue {
  $refs!: {
    scrollable_tabs: HTMLDivElement;
  };

  isMounted = false;
  tabsContainer: HTMLDivElement = null as any;
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

  @Prop() value!: string;

  @Prop() className!: string;

  @Prop() hideContent!: boolean;

  created() {
    window.addEventListener("resize", this.calculateScrolls);
  }

  destroyed() {
    window.removeEventListener("resize", this.calculateScrolls);
  }

  mounted() {
    this.isMounted = true;
    this.tabsContainer = this.$refs.scrollable_tabs;
    this.calculateScrolls();
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

  showTab(tab: string) {
    this.$emit("input", tab);
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.tabs-wrapper {
  height: 100%;
}

.tabs-nav-wrapper {
  position: relative;
  height: 34px;
}

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
  .padding-bottom(2);
  width: 100%;

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
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  .margin-right(2);
  cursor: default;
  .transition();

  &.is-active {
    .weight(@medium);
    color: @day-title;
    border-color: @dark-2;
  }
}

.tab-content {
  position: relative;
  overflow-y: auto;
  .padding-v-sides(3);
}

.night-theme {
  .tabs-nav {
    border-color: @night-border;
  }

  .tab {
    color: @night-paragraph;

    &.is-active {
      color: @night-title;
      border-color: @light-1;
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
