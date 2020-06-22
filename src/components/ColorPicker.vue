<template>
  <div class="s-colorpicker-container" ref="colorpicker">
    <input
      type="text"
      :value="value"
      :placeholder="placeholder"
      @click="showPicker()"
      @input="updateFromInput"
      :class="{ 's-colorpicker__input--error': error }"
    />
    <div v-if="error" class="s-colorpicker__input-error">
      <i class="icon-error"></i>
      {{ error }}
    </div>

    <div
      class="s-colorpicker__preview"
      :style="{ backgroundColor: value }"
      @click="showPicker()"
    ></div>
    <div class="s-colorpicker__preview--alpha"></div>

    <transition name="fade">
      <picker
        class="s-colorpicker"
        :class="alphaClass"
        :value="colors"
        v-if="displayPicker"
        :disable-alpha="!hasAlpha"
        :disable-fields="!hasAlpha"
        @input="updateFromPicker"
      />
    </transition>
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

  @Prop({ default: "#31c3a2" })
  placeholder!: string;

  @Prop({ default: false })
  hasAlpha!: boolean;

  @Prop()
  error!: string;

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
  &-container {
    position: relative;
    display: inline-block;
    width: 225px;
  }

  &__preview {
    box-sizing: border-box;
    position: absolute;
    top: 10px;
    right: 8px;
    width: 20px;
    height: 20px;
    border: 1px solid fade(@dark-2, 12%);
    .radius(0.5);
    z-index: 1;

    &--alpha {
      position: absolute;
      top: 11px;
      right: 9px;
      z-index: 0;
      width: 18px;
      height: 18px;
      .radius(0.5);
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMElEQVQ4T2N89uzZfwY8QFJSEp80A+OoAcMiDP7//483HTx//hx/Ohg1gIFx6IcBALl+VXknOCvFAAAAAElFTkSuQmCC");
    }
  }

  &.vc-chrome {
    position: relative;
    left: 0;
    top: 0;
    border-radius: 4px 4px 5px 5px;
    .day-shadow();
  }

  .vc-chrome-active-color {
    border: 1px solid fade(@dark-2, 12%);
    .radius();
  }

  .vc-chrome-body {
    padding: 12px;
    border-radius: 0 0 4px 4px;
  }

  .vc-chrome-toggle-btn,
  .vc-chrome-fields-wrap {
    display: none;
  }

  &.alpha {
    .vc-chrome-fields:not(:nth-child(2)) {
      display: none;
    }

    .vc-chrome-fields:nth-child(2) {
      display: flex;
    }

    .vc-alpha-checkboard-wrap {
      border-radius: 2px 4px 4px 2px;
    }
  }

  &.alpha,
  &.nonAlpha {
    .vc-chrome-color-wrap {
      width: 42px;

      .vc-checkerboard {
        .radius();
      }
    }
  }
}

.night {
  .s-colorpicker {
    &__preview {
      border-color: fade(@white, 16%);
    }

    .vc-chrome-body {
      background-color: @dark-4;
    }

    .vc-chrome-active-color {
      border-color: fade(@white, 16%);
    }
  }
}
</style>
