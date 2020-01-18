<template>
  <div class="s-tabs" ref="tabsWrapper">
    <div class="s-tabs__nav" ref="tabsNav" :class="className">
      <div
        v-for="tab in modifiedTabs"
        :key="tab.value"
        class="s-tabs__tab"
        :class="{
          'is-active': tab.value === selectedTab,
          'is-hidden': tab.hidden
        }"
        :style="selectTabSize"
        @click="showTab(tab.value)"
        :aria-controls="`${tab.value}-tab`"
        tabindex="-1"
      >
        <component
          :is="tabLinkTag"
          v-bind="tabLinkOptions(tab.value)"
          class="s-tabs__link"
          :tabindex="tab.value === selectedTab ? 0 : -1"
          @keydown.left.prevent="setTabOnKeyDown(tab.value, 'LEFT')"
          @keydown.up.prevent="setTabOnKeyDown(tab.value, 'LEFT')"
          @keydown.right.prevent="setTabOnKeyDown(tab.value)"
          @keydown.down.prevent="setTabOnKeyDown(tab.value)"
        >
          <i v-if="tab.icon" :class="`icon-${tab.icon}`"></i>
          <span class="s-tabs__title">{{ tab.name }}</span>
        </component>
      </div>

      <PaneDropdown v-if="hasHiddenTabs" menuAlign="right">
        <template slot="title">More</template>
        <a
          v-for="tab in hiddenTabs"
          :key="`hidden-${tab.value}`"
          @click="showTab(tab.value)"
          @keydown.left.prevent="setTabOnKeyDown(tab.value, 'LEFT')"
          @keydown.up.prevent="setTabOnKeyDown(tab.value, 'LEFT')"
          @keydown.right.prevent="setTabOnKeyDown(tab.value)"
          @keydown.down.prevent="setTabOnKeyDown(tab.value)"
          :class="{ 'is-active': tab.value === selectedTab }"
          >{{ tab.name }}</a
        >
      </PaneDropdown>
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
import { debounce, cloneDeep } from "lodash-es";

import PaneDropdown from "./PaneDropdown.vue";

interface ITabs {
  name: string;
  value: string;
  icon: string;
}

interface IModifiedTabs extends ITabs {
  hidden: boolean;
  active: boolean;
}

@Component({
  components: {
    PaneDropdown
  }
})
export default class TabsNew extends Vue {
  @Prop()
  tabs!: ITabs[];

  // @Watch("modifiedTabs", { deep: true })
  // onTabsChange() {
  //   this.$nextTick(() => this.setHiddenTabs());
  // }

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
  hasHiddenTabs = true;
  modifiedTabs: IModifiedTabs[] = [];
  dropdownIsActive = false;
  selectedTab: string = "";
  selectTabSize = { fontSize: this.tabSize };
  prevWidth = 0;
  prevHeight = 0;

  tabsNav: HTMLDivElement = null as any;
  allTabs: NodeListOf<HTMLDivElement> = null as any;

  get tabLinkTag() {
    return this.updateRoute ? "router-link" : "span";
  }

  get tabSize() {
    return this.size === "large" ? "16px" : "14px";
  }

  get hiddenTabs() {
    return this.modifiedTabs.filter(tab => tab.hidden);
  }

  // get hasHiddenTabs() {
  //   return !!this.hiddenTabs.length;
  // }

  mounted() {
    this.loadTabProperties();
    this.isMounted = true;
    this.tabsNav = this.$refs.tabsNav;

    this.$nextTick(() => {
      this.allTabs = this.tabsNav.querySelectorAll(".s-tabs__tab");
      this.selectedTab = this.selected || this.tabs[0].value;
      this.loadResizeObserver();
      this.setHiddenTabs();
    });

    // this.$whatInput.registerOnChange(this.calculateScrolls, "input");
  }

  loadTabProperties() {
    this.modifiedTabs = cloneDeep(this.tabs).map(tab => {
      return {
        ...tab,
        hidden: false,
        active: false
      };
    });
  }

  loadResizeObserver() {
    const ro = new ResizeObserver(entries => {
      entries.forEach(entry => {
        const { width, height } = entry.contentRect;
        if (this.prevWidth !== width) {
          this.setHiddenTabs();
          this.prevWidth = width;
        }
      });
    });
    ro.observe(this.tabsNav);
  }

  setHiddenTabs() {
    if (!this.isMounted) return false;

    const moreTab = Array.from(this.tabsNav.children).pop() as HTMLDivElement;
    let totalTabsWidth = moreTab.offsetWidth;
    const tabsNavWidth = this.tabsNav.offsetWidth;
    let startedHiding = false;

    this.modifiedTabs.forEach(tab => (tab.hidden = false));

    this.allTabs.forEach((tab, index) => {
      if (
        tabsNavWidth >= totalTabsWidth + tab.offsetWidth + 17 &&
        !startedHiding
      ) {
        totalTabsWidth += tab.offsetWidth + 17;
      } else {
        this.modifiedTabs[index].hidden = true;
        startedHiding = true;
        console.log(
          "TCL: TabsNew -> setHiddenTabs -> totalTabsWidth",
          tab,
          totalTabsWidth,
          tabsNavWidth,
          this.modifiedTabs[index]
        );
      }
    });

    if (this.modifiedTabs.some(tab => tab.hidden)) this.hasHiddenTabs = true;
  }

  setTabOnKeyDown(current, direction = "RIGHT") {
    const currentIndex = this.tabs.findIndex(tab => current === tab.value);
    const paneDropdown = this.tabsNav.querySelector(
      ".s-pane-dropdown"
    ) as HTMLDivElement;
    const paneDropdownToggle = paneDropdown.querySelector(
      ".s-pane-dropdown__toggle"
    ) as HTMLDivElement;
    // const paneDropdownFirstItem = paneDropdownList
    //   .children[0] as HTMLAnchorElement;

    let newTabIndex = 0;

    if (direction === "LEFT") {
      newTabIndex =
        currentIndex === 0 ? this.tabs.length - 1 : currentIndex - 1;
    } else {
      newTabIndex =
        currentIndex === this.tabs.length - 1 ? 0 : currentIndex + 1;
    }

    if (
      this.hiddenTabs.find(tab => this.tabs[newTabIndex].value === tab.value) &&
      !this.dropdownIsActive
    ) {
      paneDropdownToggle.click();
      setTimeout(() => {
        const paneDropdownList = paneDropdown.querySelector(
          ".s-pane-dropdown__list"
        ) as HTMLDivElement;
        const paneDropdownFirstItem = paneDropdownList
          .children[0] as HTMLAnchorElement;
        console.log(
          "TCL: TabsNew -> setTabOnKeyDown -> paneDropdownFirstItem",
          paneDropdownFirstItem
        );
        paneDropdownFirstItem.tabIndex = 0;
        paneDropdownFirstItem.focus();
        this.dropdownIsActive = true;
      }, 250);
    }

    let currentTab = this.allTabs[currentIndex].querySelector(
      ".s-tabs__link"
    ) as HTMLSpanElement;
    let newTab = this.allTabs[newTabIndex] as HTMLDivElement;
    let newTabLink = newTab.querySelector(".s-tabs__link") as HTMLSpanElement;

    currentTab.tabIndex = -1;
    newTabLink.tabIndex = 0;
    newTabLink.focus();
    this.showTab(this.tabs[newTabIndex].value);
  }

  showHiddenTabs(val: boolean) {
    this.dropdownIsActive = val;
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

    // &__toggle i {
    //   height: 14px;
    //   margin-top: 2px;
    //   .margin-left(0);
    //   color: @day-paragraph;
    //   transform: rotate(180deg);
    //   .transition(color);

    //   &:hover,
    //   &--active {
    //     color: @day-title;
    //   }
    // }
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
      // &__toggle i {
      //   color: @night-paragraph;

      //   &:hover,
      //   &--active {
      //     color: @night-title;
      //   }
      // }
    }
  }
}
</style>
