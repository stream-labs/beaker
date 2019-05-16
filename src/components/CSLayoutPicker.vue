<template>
  <div class="s-cs-layout-picker">
    <div @click="showChooseLayout" v-if="addLayout" class="s-cs-layout-picker__add-bar">
      <i class="icon-add"></i>
    </div>
    <div v-if="chooseLayout" @blur="showAddLayout" class="s-cs-layout-picker__layouts-bar">
      <div v-for="layout in layouts" :key="layout.id">
        <img :src="layout.src">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class CSLayoutPicker extends Vue {
  addLayout = true;
  chooseLayout = false;

  showChooseLayout() {
    this.chooseLayout = true;
    this.addLayout = false;
  }

  showAddLayout() {
    this.chooseLayout = false;
    this.addLayout = true;
  }

  layouts = [
    { src: "./assets/imgs/cs-layouts/100.svg" },
    { src: "./assets/imgs/cs-layouts/50_50.svg" }
  ];
}
</script>

<style lang="less">
@import "./../styles/Imports";

.s-cs-layout-picker {
}
</style>
