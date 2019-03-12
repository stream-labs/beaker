<template>
  <div class="s-tabs-wrapper s-md-wrapper" :class="getTabSize">
    <div class="s-tabs-nav-wrapper">
      <div class="s-tabs-nav" :class="className">
        <div v-if="hasPrev" @click="scrollLeft" class="s-tabs-nav__control s-has-prev">
          <i class="s-icon-down s-icon-left"></i>
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
          <md-tabs>
            <template slot="md-tab" slot-scope="{ tab }">
              {{ tab.label }}
              <i :class="`s-icon-${tab.data.icon}`"></i>
            </template>
            <div v-for="(tab, index) in tabs" :key="index">
              <md-tab
                :id="tab.tabId"
                :md-label="tab.tabLabel"
                :to="tab.tabTo"
                :md-template-data="{icon: tab.tabIcon}"
              ></md-tab>
            </div>
          </md-tabs>
          <!-- <span
            v-for="tab in tabs"
            :key="tab.value"
            class="s-tab"
            :class="{ 's-is-active': tab.value === value }"
            @click="showTab(tab.value)"
          >{{ tab.name }}</span>-->
        </div>

        <div v-if="hasNext" @click="scrollRight" class="s-tabs-nav__control s-has-next">
          <i class="s-icon-down s-icon-right"></i>
        </div>
      </div>
    </div>

    <!-- <div class="s-tab-content" v-if="!hideContent">
      <slot v-for="tab in tabs" :name="tab.value" v-if="tab.value === value"/>
    </div>-->
  </div>

  <!-- <div class="s-md-wrapper" :class="getTabSize">
    <md-tabs @md-changed="checkNewPosts">
      <template slot="md-tab" slot-scope="{ tab }">
        {{ tab.label }}
        <i :class="`s-icon-${tab.data}`"></i>
      </template>
      <div v-for="(tab, index) in tabs" :key="index">
        <md-tab
          :id="tab.tabId"
          :md-label="tab.tabLabel"
          :to="tab.tabTo"
          :md-template-data="tab.tabIcon"
        ></md-tab>
      </div>
    </md-tabs>
  </div>-->
</template>]

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator"
import ViewMaterial from "vue-material"
// import "vue-material/dist/vue-material.min.css"
Vue.use(ViewMaterial)

@Component({})
export default class TabDevelop extends Vue {
  $refs!: {
    scrollable_tabs: HTMLDivElement;
  };

  isMounted = false;
  tabsContainer: HTMLDivElement = null as any;
  canScroll = false;
  hasNext = false;
  hasPrev = false;
  private scrollIncrement = 100;

  data = {
    icon: ""
  };

  @Prop()
  tabs!: [
    {
      tabLabel: string;
      tabTo: string;
      tabId: string;
      tabIcon: string;
    }
  ];

  @Prop({ default: "small" })
  tabSize!: string;

  get getTabSize() {
    return this.tabSize === "small" ? "font-small" : "font-large";
  }

  @Prop()
  value!: string;

  @Prop()
  className!: string;

  @Prop()
  hideContent!: boolean;

  created() {
    window.addEventListener("resize", this.calculateScrolls);
  }

  destroyed() {
    window.removeEventListener("resize", this.calculateScrolls);
  }

  mounted() {
    // const tabNav = document.querySelector(".md-tabs-navigation") as HTMLDivElement;

    // this.$nextTick(() => {
    //   // ...
    //   console.log(tabNav.offsetWidth)
    // })

    this.isMounted = true;
    this.tabsContainer = this.$refs.scrollable_tabs;
    this.calculateScrolls();

    const mdButton = document.querySelector(".md-button") as HTMLDivElement;
    // console.log(mdButton);
    this.$nextTick(() => {
      // ...
      console.log(mdButton);
    });
    // if (!this.value) this.showTab(this.tabs[0].value);
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
    if (!this.isMounted) {
      return false;
    } else {
      this.canScroll =
        this.tabsContainer.scrollWidth > this.tabsContainer.clientWidth;
      this.hasPrev = this.tabsContainer.scrollLeft > 0;
      const scrollRight =
        this.tabsContainer.scrollWidth -
        (this.tabsContainer.scrollLeft + this.tabsContainer.clientWidth);

      this.hasNext = scrollRight > 0;
    }
  }

  showTab(tab: string) {
    this.$emit("input", tab);
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";
// md does not have support for scoped styles

.font-small {
  .md-button-content {
    font-size: 14px;
  }
}

.font-large {
  .md-button-content {
    font-size: 16px;
  }
}

.s-md-wrapper {
  .md-tabs-navigation {
    display: flex;
    // border-bottom: 1px solid #f0f2f2;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .md-button {
    height: auto;
    width:auto;
    transition: .4s cubic-bezier(.4,0,.2,1);
  }

  .md-button, .md-button-clean {
    margin: 0;
    padding: 0;
    display: inline-block;
    position: relative;
    overflow: hidden;
    outline: none;
    background: transparent;
    border: 0;
    border-radius: 0;
    transition: .4s cubic-bezier(.4,0,.2,1);
    font-family: inherit;
    line-height: normal;
    text-decoration: none;
    vertical-align: top;
    white-space: nowrap;
}

  .md-button:hover {
    color: @dark-2;
    outline: none;
  }


  .md-button:not([disabled]).md-focused:before,
  .md-button:not([disabled]):active:before,
  .md-button:not([disabled]):hover:before {
    background: none;
  }

  .md-button.md-active {
    color: @dark-2;
  }

  .md-ripple {
    .padding(0);
    .padding-bottom(1.75);
    .margin-right(2);
    border-bottom: 2px solid transparent;
    position: static;
  }

  .md-tabs-indicator {
    background: @dark-2;
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateZ(0);
    will-change: left,right;
  }

  .md-tabs-indicator.md-tabs-indicator-left {
    transition: left .3s cubic-bezier(.4,0,.2,1),right .35s cubic-bezier(.4,0,.2,1) !important;
  }

.night,
.night-theme {
  .md-tabs-navigation {
    border-bottom-color: @dark-4;
  }

  .md-button {
    color: @light-4;
  }

  .md-button:hover {
    color: @white;
    outline: none;
  }

  .md-ripple {
    color: @light-4;
  }

  .md-button.md-active {
    .md-ripple {
      color: @white;
    }
  }

  .md-tabs-indicator {
    background: @white;
  }
}
}
</style>


<style lang="less" scoped>
@import "./../styles/Imports";

.md-tabs {
  display: flex;
  flex-direction: row;
}

.s-tabs-wrapper {
  height: 100%;
}

.s-tabs-nav-wrapper {
  position: relative;
  height: 34px;
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
    background-color: @light-3;
  }
}

.s-tab {
  color: @day-paragraph;
  .padding-bottom(2);
  border-bottom: 2px solid transparent;
  .margin-right(2);
  cursor: default;
  .transition();
  display: inline-block;
  position: relative;
  .weight(@medium);

  &.is-active {
    color: @day-title;
    border-color: @dark-2;
  }
}

.s-tab-content {
  position: relative;
  overflow-y: auto;
  .padding-v-sides(3);
}

.night-theme {
  .s-tabs {
    &:before {
      background-color: @night-border;
    }
  }

  .s-tab {
    color: @night-paragraph;

    &.s-is-active {
      color: @night-title;
      border-color: @light-1;
    }
  }
}
</style>
