<template>
  <div class="s-colors section">
    <h2>Colors</h2>

    <div v-for="color in colors" :key="color.color" class="side-by-side">
      <div class="nospace-flex">
        <div
          class="color-square"
          :style="'background-color:' + color.hex + ';'"
        ></div>
        <div class="subtitle">{{ color.color }}</div>
      </div>
      <p>{{ color.hex }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Colors extends Vue {
  private colors: object = [
    { color: "Teal (primary)", hex: "#31C3A2" },
    { color: "Red (count badges, warnings, errors", hex: "#F85640" },
    { color: "Yellow (info)", hex: "#E3973E" },
    { color: "Dark 1 (app store icons, bg", hex: "#000000" },
    { color: "Dark 2 (day title, subtitle, selected)", hex: "#09161D" },
    { color: "Dark 3 (night bg)", hex: "#17242D" },
    { color: "Dark 4 (night cards/sections bg", hex: "#2B383F" },
    { color: "Dark 5 (day p, night button, night cards", hex: "#4F5E65" },
    { color: "Light 1 (day title, bg", hex: "#FFFFFF" },
    { color: "Light 2 (day tip page bg, cards", hex: "#F5F8FA" },
    { color: "Light 3 (day button)", hex: "#E3E8EB" },
    { color: "Light 4 (night paragraph)", hex: "#BDC2C4" },
    { color: "Light 5 (day/night icons, captions", hex: "#91979A" },
    { color: "Blue", hex: "#36ADE0" },
    { color: "Pink", hex: "#EB7777" },
    { color: "Purple", hex: "#5E3BEC" },
    { color: "Streamlabs Prime", hex: "#42C9D2" }
  ];
}
</script>

<style lang="less" scoped>
@import (reference) "./../styles/Imports";
.s-colors {
  width: 400px;
}

.nospace-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.color-square {
  width: 20px;
  height: 20px;
  .radius();
  .margin-right(2);
}
</style>
