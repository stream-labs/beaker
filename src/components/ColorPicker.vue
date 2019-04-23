<template>
  <div class="s-colorpicker-container" ref="colorpicker">
    <input
      type="text"
      :value="displayColor"
      :placeholder="placeholder"
      @click="showPicker()"
      @input="updateFromInput"
    >
    <div
      class="s-colorpicker__preview"
      :style="{ backgroundColor: displayColor }"
      @click="showPicker()"
    ></div>
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

  @Prop()
  value!: any;

  @Prop()
  placeholder!: string;

  private displayPicker: Boolean = false;
  private backgroundColor: String = "";
  private displayColor: String = "";

  colors: object = {};

  created() {
    this.displayColor = this.value;
    this.colors = Object.assign({}, this.colors, { hex: this.displayColor });
  }

  updateFromPicker(value: any) {
    this.displayColor = value.hex;
    this.colors = value;
    this.$emit("input", this.displayColor);
  }

  updateFromInput(event: any) {
    this.displayColor = event.target.value;
    this.colors = event.target.value;
    this.$emit("input", this.displayColor);
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
