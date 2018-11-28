<template>
  <div class="colorpicker-container" ref="colorpicker">
    <input type="text" @focus="showPicker()" :value="value" @input="updateFromInput">

    <div class="colorpicker__preview" :style="{ backgroundColor: value }" @click="showPicker()"></div>

    <picker
      class="colorpicker"
      :value="colors"
      v-if="displayPicker"
      :disable-alpha="true"
      :disable-fields="true"
      @input="updateFromPicker"
    ></picker>
  </div>
</template>

<script>
import { Chrome } from "vue-color";

export default {
  name: "ColorPicker",
  // props: ["value"],
  extends: Chrome,

  data() {
    return {
      displayPicker: false
    };
  },

  components: {
    picker: Chrome
  },

  mounted() {
    this.backgroundColor = this.value;
  },

  methods: {
    updateFromPicker(value) {
      this.colors = value;
      this.$emit("input", value.hex);
    },

    updateFromInput(event) {
      this.$emit("input", event.target.value);
    },

    stopProp(event) {
      event.stopPropagation();
    },

    hidePicker() {
      document.removeEventListener("click", this.documentClick);
      this.displayPicker = false;
    },

    showPicker() {
      document.addEventListener("click", this.documentClick);
      this.displayPicker = true;
    },

    documentClick(e) {
      var el = this.$refs.colorpicker,
        target = e.target;
      if (el !== target && !el.contains(target)) {
        this.hidePicker();
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.colorpicker {
  left: 0;
  top: 0;
  position: relative !important;
  .radius !important;
  .day-shadow !important;
}

.colorpicker__preview {
  height: 20px;
  width: 20px;
  .radius();
  box-sizing: border-box;
  position: absolute;
  top: 7px;
  right: 8px;
  border: 1px solid @day-input-border;
}

.colorpicker-container {
  position: relative;
  width: 160px;
  display: inline-block;
}

.vc-chrome {
  margin: 0px;
  display: inline-block !important;
  position: absolute;
  z-index: 1000000;
}

.vc-chrome-active-color {
  .radius !important;
}

.vc-chrome-body {
  border-radius: 0 0 @radius @radius;
  border: 1px solid @day-dropdown-border;
  background-color: @day-dropdown-bg!important;
}
</style>
