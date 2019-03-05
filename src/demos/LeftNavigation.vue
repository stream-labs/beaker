<template>
  <div class="left-navigation">
    <div class="left-navigation-section">
      <h4>Essentials</h4>
      <a class="left-navigation__link" @click="changeSection('installation')">Installation</a>
      <a class="left-navigation__link" @click="changeSection('assets')">Assets</a>
      <!-- <a class="left-navigation__link" @click="changeSection('colors')">Colors</a> -->
      <!-- <a class="left-navigation__link" @click="changeSection('typography')">Typography</a> -->
    </div>
    <div class="left-navigation-section">
      <h4>Components</h4>
      <a class="left-navigation__link" @click="changeSection('accordions')">Accordions</a>
      <a class="left-navigation__link" @click="changeSection('announcements')">Announcements</a>
      <a class="left-navigation__link" @click="changeSection('badges')">Badges</a>
      <a class="left-navigation__link" @click="changeSection('banners')">Banners</a>
      <a class="left-navigation__link" @click="changeSection('buttons')">Buttons</a>
      <a class="left-navigation__link" @click="changeSection('callouts')">Callouts</a>
      <a class="left-navigation__link" @click="changeSection('call-to-actions')">Call To Actions</a>
      <a class="left-navigation__link" @click="changeSection('color-pickers')">Color Picker</a>
      <a class="left-navigation__link" @click="changeSection('dropdowns')">Dropdowns</a>
      <a class="left-navigation__link" @click="changeSection('extras')">Extras</a>
      <a class="left-navigation__link" @click="changeSection('forms')">Forms</a>
      <a class="left-navigation__link" @click="changeSection('icons')">Icons</a>
      <a class="left-navigation__link" @click="changeSection('image-pickers')">Image Pickers</a>
      <a class="left-navigation__link" @click="changeSection('inputs')">Inputs</a>
      <a class="left-navigation__link" @click="changeSection('layouts')">Layouts</a>
      <a class="left-navigation__link" @click="changeSection('loaders')">Loaders</a>
      <a class="left-navigation__link" @click="changeSection('modals')">Modals</a>
      <!-- <a class="left-navigation__link" @click="changeSection('merch')">Merch</a> -->
      <a class="left-navigation__link" @click="changeSection('notices')">Notices</a>
      <a class="left-navigation__link" @click="changeSection('paginations')">Paginations</a>
      <a class="left-navigation__link" @click="changeSection('progress-bars')">Progress Bars</a>
      <a class="left-navigation__link" @click="changeSection('sliders')">Sliders</a>
      <a class="left-navigation__link" @click="changeSection('streamer-sites')">Streamer Sites</a>
      <a class="left-navigation__link" @click="changeSection('tables')">Tables</a>
      <a class="left-navigation__link" @click="changeSection('tabs')">Tabs</a>
      <a class="left-navigation__link" @click="changeSection('toggles')">Toggles</a>
      <a class="left-navigation__link" @click="changeSection('virtual-items')">Virtual Items</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class LeftNavigation extends Vue {
  @Prop()
  activeSection!: string

  changeSection(activeSection: string) {
    this.$emit('update-section', activeSection)
  }
}
</script>

<style lang="less" scoped>
@import './../styles/Imports';

.left-navigation {
  display: flex;
  flex-direction: column;
  .margin-top(7);
}

.left-navigation-section {
  .margin-bottom(2);

  h4 {
    .margin-bottom();
  }
}

.left-navigation__link {
  text-decoration: none;
  cursor: default;
  .weight(@medium);
  .padding-v-sides();
  display: block;
}
</style>
