<template>
  <div class="colorpicker-container" ref="colorpicker">
    <input type="text" @click="showPicker()" :value="value.hex" @change="updateFromInput">
    <div class="colorpicker__preview" :style="{ backgroundColor: value.hex }" @click="showPicker()"></div>
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

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Chrome } from "vue-color";

@Component({
  components: {
    'picker': Chrome
  }
})
export default class ColorPicker extends Vue {

$refs!: {
  colorpicker: HTMLElement;
}

private displayPicker: Boolean = false;
private backgroundColor: String = '';
private colors: any[] = [];

@Prop()
value!: String;





updateFromPicker(value: any) {
  this.colors = value;
  this.$emit("input", value.hex);
}

updateFromInput(event: any) {
  this.colors = event.target.value;
  this.$emit("input", event.target.value);
}

stopProp(event: any) {
  event.stopPropagation();
}

hidePicker() {
  document.removeEventListener("click", this.documentClick);
  this.displayPicker = false;
}

showPicker() {
  document.addEventListener("click", this.documentClick);
  this.displayPicker = true;
}

documentClick(e:any) {
  let el = this.$refs.colorpicker;
  let target = e.target;
  if (el !== target && !el.contains(target)) {
    this.hidePicker();
  }
  }

  }



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
  top: 10px;
  right: 8px;
  border: 1px solid rgba(9, 22, 29, 0.12);
}

.colorpicker-container {
  position: relative;
  width: 176px;
  display: inline-block;
}

</style>
