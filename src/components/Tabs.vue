<template>
<div class="tabs-wrapper">
  <div class="tabs" :class="className">
    <div
      v-for="tab in tabs"
      :key="tab.value"
      class="tab"
      :class="{ 'is-active': tab.value === value }"
      @click="showTab(tab.value)">
      {{ tab.name }}
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

  showTab(tab: string) {
    this.$emit("input", tab);
  }

  mounted() {
    if (!this.value) this.showTab(this.tabs[0].value);
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.tabs-wrapper {
  height: 100%;
}

.tabs {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background: transparent;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  border: 0;
  border-bottom: 1px solid @day-border;
  background: transparent;
  padding: 0;
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
  .tabs {
    border-color: @night-border;
  }

  .tab {
    color: @night-paragraph;

    &.is-active {
      color: @night-title;
      border-color: @light-1;
    }
  }
}
</style>
