<template>
  <div>
    <md-tabs
      md-sync-route
      class="md-tabs-navigation md-elevation-0"
      v-for="(tab, index) in tabs"
      :key="index"
    >
      <md-tab
        :id="tab.tabId"
        :md-label="tab.tabLabel"
        :to="tab.tabTo"
        :md-disabled="tab.isDisabled"
        :md-icon="tab.tabIcon"
      ></md-tab>
    </md-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { MdButton, MdTabs } from 'vue-material/dist/components';
// import 'vue-material/dist/vue-material.min.css'

Vue.use(MdButton);
Vue.use(MdTabs);

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
      tabLabel: string;
      tabTo: string;
      tabId: string
      tabIcon: string
    }
  ];

  @Prop({ default: "small" })
  tabSize!: string

  // get test() {
  //   return this.tabSize === "small" ? "small" : "large"
  // }

  // created() {
  //   window.addEventListener("resize", this.calculateScrolls);
  // }

  // destroyed() {
  //   window.removeEventListener("resize", this.calculateScrolls);
  // }

  // mounted() {
  //   this.isMounted = true;
  //   this.tabsContainer = this.$refs.scrollable_tabs;
  //   this.calculateScrolls();
  //   if (!this.value) this.showTab(this.tabs[0].value);
  // }

  // scrollLeft() {
  //   this.tabsContainer.scrollLeft =
  //     this.tabsContainer.scrollLeft - this.scrollIncrement;
  // }

  // scrollRight() {
  //   this.tabsContainer.scrollLeft =
  //     this.tabsContainer.scrollLeft + this.scrollIncrement;
  // }

  // calculateScrolls() {
  //   if (!this.isMounted) return false;
  //   this.canScroll =
  //     this.tabsContainer.scrollWidth > this.tabsContainer.clientWidth;
  //   this.hasPrev = this.tabsContainer.scrollLeft > 0;
  //   let scrollRight =
  //     this.tabsContainer.scrollWidth -
  //     (this.tabsContainer.scrollLeft + this.tabsContainer.clientWidth);

  //   this.hasNext = scrollRight > 0;
  // }

  // showTab(tab: string) {
  //   this.$emit("input", tab);
  // }
}
</script>

<style lang="less" scoped>
@import './../styles/Imports';

.md-tabs-navigation {
  display: flex;
  margin-bottom: 24px;
  border: 0;
  padding: 0;
  border-radius: 4px 4px 0 0;
  background-color: transparent;
  border-bottom: 1px solid #f0f2f2;
  width: 100%;
}

.night,
.night-theme {
  .md-tabs-navigation {
    border-bottom-color: #2b383f;
  }

  .md-ripple {
    color: #bdc2c4;
  }
}

.md-tabs-navigation .md-button-content{
  padding: 1000px !important;
}
</style>
