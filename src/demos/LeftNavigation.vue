<template>
  <div class="left-navigation">
    <div class="left-navigation-section">
      <h4>Essentials</h4>
      <router-link to="installation">Installation</router-link>
      <router-link to="assets">Assets</router-link>
      <!-- <a class="left-navigation__link" @click="changeSection('colors')">Colors</a> -->
      <!-- <a class="left-navigation__link" @click="changeSection('typography')">Typography</a> -->
    </div>
    <div class="left-navigation-section">
      <h4>Components</h4>
      <template v-for="{ name, label } in componentDemos">
        <router-link :to="name" :key="name">{{ label }}</router-link>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import demos from "../demos";

const excludeFromComponentDemos = [
  "installation",
  "assets",
  "left-navigation",
  "navigations"
];

@Component({})
export default class LeftNavigation extends Vue {
  componentDemos = demos.filter(
    ({ name }) => !excludeFromComponentDemos.includes(name)
  );

  @Prop()
  activeSection!: string;

  changeSection(activeSection: string) {
    this.$emit("update-section", activeSection);
  }
}
</script>

<style lang="less" scoped>
@import (reference) "./../styles/Imports";

.left-navigation {
  display: flex;
  flex-direction: column;
  .margin-top(7);

  a {
    text-decoration: none;
    .weight(@medium);
    .padding-v-sides();
    display: block;

    &.router-link-active {
      color: @primary;
    }
  }
}

.left-navigation-section {
  .margin-bottom(2);

  h4 {
    .margin-bottom();
  }
}
</style>
