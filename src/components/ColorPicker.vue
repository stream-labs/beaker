<template>
  <div class="s-colorpicker-container" ref="colorpicker">
    <input
      type="text"
      @click="showPicker()"
      :value="color"
      @change="updateFromInput"
      placeholder="test"
    >
    <div class="s-colorpicker__preview" :style="{ backgroundColor: color }" @click="showPicker()"></div>
    <picker
      class="s-colorpicker"
      :value="colors"
      v-if="displayPicker"
      :disable-alpha="true"
      :disable-fields="true"
      @input="updateFromPicker"
    ></picker>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Chrome } from "vue-color";

@Component({
  components: {
    picker: Chrome
  }
})
export default class ColorPicker extends Vue {
  $refs!: {
    colorpicker: HTMLElement;
  };

  @Prop({ default: "#31c3ac" })
  defaultColor!: any;

  @Prop()
  value!: any;

  private displayPicker: Boolean = false;
  private backgroundColor: String = "";
  private color: String = this.defaultColor;

  colors: object = {
    hex: "#194d33",
    hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
    hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
    rgba: { r: 25, g: 77, b: 51, a: 1 },
    a: 1
  };

  updateFromPicker(value: any) {
    this.color = value.hex;
    this.colors = value;
    this.$emit("input", this.color);
  }

  updateFromInput(event: any) {
    this.color = event.target.value;
    this.$emit("input", this.color);
  }

  hidePicker() {
    document.removeEventListener("click", this.documentClick);
    this.displayPicker = false;
  }

  showPicker() {
    document.addEventListener("click", this.documentClick);
    this.displayPicker = true;
  }

  documentClick(e: any) {
    let el = this.$refs.colorpicker;
    let target = e.target;
    if (el !== target && !el.contains(target)) {
      this.hidePicker();
    }
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";

.s-colorpicker {
  left: 0;
  top: 0;
  position: relative !important;
  .radius !important;
  .day-shadow !important;
}

.s-colorpicker__preview {
  height: 20px;
  width: 20px;
  .radius(0.5);
  box-sizing: border-box;
  position: absolute;
  top: 10px;
  right: 8px;
  border: 1px solid fade(@day-input-border, 12%);
  border-style: inset;
}

.s-colorpicker-container {
  position: relative;
  width: 176px;
  display: inline-block;
}
</style>
