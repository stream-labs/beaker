<template>
  <div>
    <div class="apps-nav">
      <div v-if="hasPrev" @click="scrollLeft" class="apps-nav-control flex has-prev">
        <i class="icon-down icon-left"></i>
        <span>...</span>
      </div>
      <div
        ref="scrollable_nav"
        @scroll="calculateScrolls"
        class="apps-tab__container"
        :class="{
        'has-next': hasNext,
        'has-prev': hasPrev
      }"
      >
        <span
          v-for="item in items"
          :key="item.value"
          @click="navigateItem(item.value)"
          class="app-tab"
          :class="{ 'is-active': item.value === value }"
        >
          <span>{{ item.name }}</span>
        </span>
      </div>
      <div v-if="hasNext" @click="scrollRight" class="apps-nav-control flex has-next">
        <span>...</span>
        <i class="icon-down icon-right"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class AppsNav extends Vue {
  $refs!: {
    scrollable_nav: HTMLDivElement;
  };

  @Prop()
  items!: [
    {
      name: string;
      value: string;
    }
  ];

  @Prop()
  value!: string;

  isMounted = false;
  appTabsContainer!: HTMLDivElement;
  canScroll = false;
  hasNext = false;
  hasPrev = false;

  private scrollIncrement = 100;

  created() {
    window.addEventListener("resize", this.calculateScrolls);
  }

  destroyed() {
    window.removeEventListener("resize", this.calculateScrolls);
  }

  mounted() {
    this.isMounted = true;
    this.appTabsContainer = this.$refs.scrollable_nav;
    this.calculateScrolls();
  }

  scrollLeft() {
    this.appTabsContainer.scrollLeft =
      this.appTabsContainer.scrollLeft - this.scrollIncrement;
  }

  scrollRight() {
    this.appTabsContainer.scrollLeft =
      this.appTabsContainer.scrollLeft + this.scrollIncrement;
  }

  calculateScrolls() {
    if (!this.isMounted) return false;
    this.canScroll =
      this.appTabsContainer.scrollWidth > this.appTabsContainer.clientWidth;
    this.hasPrev = this.appTabsContainer.scrollLeft > 0;
    let scrollRight =
      this.appTabsContainer.scrollWidth -
      (this.appTabsContainer.scrollLeft + this.appTabsContainer.clientWidth);

    this.hasNext = scrollRight > 0;
  }

  navigateItem(item: string) {
    this.$emit("input", item);
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.apps-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  .padding-h-sides();
  position: relative;
  max-width: none;
  background-color: @day-section;
  border-bottom: 1px solid @day-border;
  flex: 0 0 35px;
  height: 35px;
  z-index: 1;
}

.apps-tab__container {
  display: inline-block;
  overflow-x: auto;
  white-space: nowrap;
  overflow-y: hidden;

  &.has-prev {
    .margin-left(2);
  }
  &.has-next {
    .margin-right(2);
  }
}

.apps-nav-control {
  cursor: pointer;

  &.has-prev {
    margin-left: 8px;
    i {
      margin-right: 5px;
    }
  }
  &.has-next {
    margin-right: 8px;
    i {
      margin-left: 5px;
    }
  }
}

.apps-tab__container::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}

.app-tab {
  .padding();
  color: @day-paragraph;
  .weight(@medium);
  cursor: pointer;

  &.is-active {
    color: @day-title;
  }
}

.app-tab-icon {
  margin-left: 4px;
}

.night-theme {
  .apps-nav {
    background-color: @night-bg;
    border-color: @night-border;
  }
  .app-tab {
    color: @night-paragraph;

    &.is-active {
      color: @night-title;
    }
  }
}
</style>
