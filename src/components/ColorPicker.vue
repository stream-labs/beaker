<template>
  <div class="s-colorpicker-container" ref="colorpicker">
    <input
      type="text"
      :value="value"
      :placeholder="placeholder"
      @click="showPicker()"
      @input="updateFromInput"
    />
    <div
      class="s-colorpicker__preview"
      :style="{ backgroundColor: value }"
      @click="showPicker()"
    ></div>
    <picker
      class="s-colorpicker"
      :class="alphaClass"
      :value="colors"
      v-if="displayPicker"
      :disable-alpha="!hasAlpha"
      :disable-fields="!hasAlpha"
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

  @Prop({ default: false })
  hasAlpha!: boolean;

  private displayPicker: Boolean = false;
  private backgroundColor: String = "";

  colors: object = {};

  get alphaClass() {
    return this.hasAlpha
      ? this.colors["a"] === 1
        ? "nonAlpha"
        : "alpha"
      : false;
  }

  created() {
    this.colors = Object.assign({}, this.colors, { hex: this.value });
  }

  updateFromPicker(value: any) {
    this.colors = value;
    if (this.alphaClass === "alpha") {
      this.$emit("input", value.hex8);
    } else {
      this.$emit("input", value.hex);
    }
  }
  
  updateFromInput(event: any) {
    this.colors = event.target.value;
    this.$emit("input", event.target.value);
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
@import (reference) "./../styles/Imports";

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
  width: 225px;
  display: inline-block;
}

.alpha,
.nonAlpha {
  .vc-chrome-toggle-btn {
    display: none;
  }
}

.alpha {
  .vc-chrome-fields:not(:nth-child(2)) {
    display: none !important;
  }

  .vc-chrome-fields:nth-child(2) {
    display: flex !important;
  }
}

.vc-chrome-fields-wrap {
  display: none !important;
}
</style>
