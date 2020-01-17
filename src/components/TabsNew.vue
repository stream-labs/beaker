<template>
  <div class="s-tabs" ref="tabsWrapper">
    <div class="s-tabs__nav" ref="tabsNav" :class="className">
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
          class="s-tabs__link"
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

      <PaneDropdown
        ref="overflowDropdown"
        v-if="hasOverflowTabs"
        menuAlign="right"
        :dropdown-icon="false"
      >
        <template slot="title">
          <i class="icon-back"></i>
        </template>
        <a
          v-for="tab in overflowTabs"
          :key="`overflow-${tab.value}`"
          @click="showTab(tab.value)"
          :class="{ 'is-active': tab.value === selectedTab }"
        >{{ tab.name }}</a>
      </PaneDropdown>
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

interface ITabs {
  name: string;
  value: string;
  icon: string;
}

@Component({
  components: {
    PaneDropdown
  }
})
export default class TabsNew extends Vue {
  @Prop()
  tabs!: ITabs[];

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
    tabsNav: HTMLDivElement;
    tabsWrapper: HTMLDivElement;
  };

  isMounted = false;
  overflowTabs: ITabs[] = [];
  overflowIsActive = false;

  selectedTab: string = "";
  tabsNav: HTMLDivElement = null as any;
  tabsNavHeight = 0;
  overflowDropdown: HTMLDivElement = null as any;
  selectTabSize = {
    fontSize: this.tabSize
  };

  get tabLinkTag() {
    return this.updateRoute ? "router-link" : "span";
  }

  get tabSize() {
    return this.size === "large" ? "16px" : "14px";
  }

  get hasOverflowTabs() {
    return !!this.overflowTabs.length;
  }

  mounted() {
    this.isMounted = true;
    this.tabsNav = this.$refs.tabsNav;
    this.overflowDropdown = this.$refs.tabsNav;
    this.selectedTab = this.selected || this.tabs[0].value;
    this.loadResizeObserver();

    // this.$whatInput.registerOnChange(this.calculateScrolls, "input");
  }

  loadResizeObserver() {
    const ro = new ResizeObserver(entries => {
      entries.forEach(entry => {
        const { height } = entry.contentRect;
        // this.tabsNav.offsetHeight, height
        // if (this.tabsNavHeight !== height) return;
        this.setOverflowTabs();
        this.tabsNavHeight = height;
      });
    });
    ro.observe(this.tabsNav);
  }

  setOverflowTabs() {
    if (!this.isMounted) return false;

    const allTabs: NodeListOf<HTMLDivElement> = this.tabsNav.querySelectorAll(
      ".s-tabs__tab"
    );

    const overflowTab = Array.from(
      this.overflowDropdown.children
    ).pop() as HTMLDivElement;
    let totalTabsWidth = overflowTab.offsetWidth;
    const tabsNavWidth = this.tabsNav.offsetWidth;
    this.overflowTabs = [];

    allTabs.forEach(tab => {
      tab.classList.remove("is-hidden");
    });

    allTabs.forEach((tab, index) => {
      if (tabsNavWidth >= totalTabsWidth + tab.offsetWidth + 17) {
        totalTabsWidth += tab.offsetWidth + 16;
      } else {
        totalTabsWidth += tab.offsetWidth + 16;
        tab.classList.add("is-hidden");
        this.overflowTabs.push(this.tabs[index]);
      }
    });
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

.s-tabs {
  height: 100%;

  a {
    cursor: pointer;
    .transition(color);
  }

  .is-active {
    color: @day-title;
  }

  .is-hidden {
    display: none;
  }

  &__nav {
    display: flex;
    flex-wrap: wrap;
    background: transparent;
    position: relative;
    // width: 100%;
    border-bottom: 1px solid @day-border;
  }

  &__tab {
    position: relative;
    display: inline-block;
    .margin-right(2);
    padding-top: 4px;
    padding-bottom: 12px;
    .weight(@medium);
    color: @day-paragraph;
    cursor: pointer;
    .transition(color);

    &:last-child {
      margin-right: 0;
    }

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

      &::after {
        background-color: @dark-2;
      }
    }

    i {
      .margin-right();
    }
  }

  &__link {
    display: flex;
    text-decoration: none;
  }

  ::v-deep .s-pane-dropdown {
    padding-top: 4px;
    padding-bottom: 12px;

    &__toggle i {
      height: 14px;
      margin-top: 2px;
      .margin-left(0);
      color: @day-paragraph;
      transform: rotate(180deg);
      .transition(color);

      &:hover,
      &--active {
        color: @day-title;
      }
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
    .is-active {
      color: @night-title;
    }

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

        &::after {
          background-color: @white;
        }
      }
    }

    ::v-deep .s-pane-dropdown {
      &__toggle i {
        color: @night-paragraph;

        &:hover,
        &--active {
          color: @night-title;
        }
      }
    }
  }
}
</style>
