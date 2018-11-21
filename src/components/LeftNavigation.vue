<template>
  <div class="left-navigation">
    <a class="left-navigation__link" @click="changeSection('accordions')">Accordions</a>
    <a class="left-navigation__link" @click="changeSection('badges')">Badges</a>
    <a class="left-navigation__link" @click="changeSection('banners')">Banners</a>
    <a class="left-navigation__link" @click="changeSection('buttons')">Buttons</a>
    <a class="left-navigation__link" @click="changeSection('callouts')">Callouts</a>
    <a class="left-navigation__link" @click="changeSection('color-picker')">Color Picker</a>
    <!-- <a class="left-navigation__link" @click="changeSection('colors')">Colors</a> -->
    <!-- <a class="left-navigation__link" @click="changeSection('dropdowns')">Dropdowns</a> -->
    <a class="left-navigation__link" @click="changeSection('forms')">Forms</a>
    <a class="left-navigation__link" @click="changeSection('icons')">Icons</a>
    <a class="left-navigation__link" @click="changeSection('inputs')">Inputs</a>
    <!-- <a class="left-navigation__link" @click="changeSection('merch')">Merch</a> -->
    <a class="left-navigation__link" @click="changeSection('sliders')">Sliders</a>
    <a class="left-navigation__link" @click="changeSection('tables')">Tables</a>
    <a class="left-navigation__link" @click="changeSection('tabs')">Tabs</a>
    <a class="left-navigation__link" @click="changeSection('toggles')">Toggles</a>
    <!-- <a class="left-navigation__link" @click="changeSection('typography')">Typography</a> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class LeftNavigation extends Vue {
  @Prop() activeSection!: string;

  changeSection(activeSection: string) {
    this.$emit("update-section", activeSection);
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.left-navigation {
  display: flex;
  flex-direction: column;
}

.left-navigation__link {
  text-decoration: none;
  cursor: default;
  .weight(@medium);
  .padding-v-sides();
}
</style>
