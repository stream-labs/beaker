<template>
  <div>
    <h1>Inputs</h1>
    <div class="section">
      <h2>Text Input</h2>
      <input type="text" placeholder="Text Input">
    </div>

    <div class="section">
      <h2>Text Input with Search</h2>
      <div class="input-wrapper--search">
        <i class="icon-search"></i>
        <input class="input--search" type="text" placeholder="Text Input">
      </div>
    </div>

    <div class="section">
      <h2>Email Input</h2>
      <input type="email" placeholder="morgan@streamlabs.com">
    </div>

    <div class="section">
      <h2>Textarea</h2>
      <textarea rows="3"></textarea>
    </div>

    <div class="section">
      <h2>Selector</h2>
      <selector v-model="selected" :options="['Option A', 'Option B', 'Option C']"></selector>
    </div>

    <div class="section">
      <h2>Checkboxes</h2>

      <div class="section">
        <h3>Single Checkbox</h3>
        <checkbox :label="'Checkbox label'" v-model="checkboxValue0"></checkbox>
      </div>

      <div class="section">
        <h3>Checkbox Group</h3>
        <div class="checkbox-group">
          <checkbox :label="'Checkbox label'" v-model="checkboxValue1"></checkbox>
          <checkbox :label="'Checkbox label'" v-model="checkboxValue2"></checkbox>
          <checkbox :label="'Checkbox label'" v-model="checkboxValue3"></checkbox>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>Radios</h2>
      <div class="section">
        <div class="checkbox-group">
          <radio :label="'Enable'" :name="'radio-group'" v-model="radioValue1"></radio>
          <radio :label="'Disable'" :name="'radio-group'" v-model="radioValue2"></radio>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>Image Input Picker</h2>
      <image-input-picker v-model="value"></image-input-picker>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Selector from "./../components/Selector.vue";
import Checkbox from "./../components/Checkbox.vue";
import ImageInputPicker from "./../components/ImageInputPicker.vue";
import Radio from "./../components/Radio.vue";

@Component({
  components: {
    Selector,
    Checkbox,
    ImageInputPicker,
    Radio
  }
})
export default class Inputs extends Vue {
  checkboxValue0 = true;
  checkboxValue1 = false;
  checkboxValue2 = true;
  checkboxValue3 = false;
  selected = "Option A";
  radioValue1 = true;
  radioValue2 = false;
  value = "above";
}
</script>
