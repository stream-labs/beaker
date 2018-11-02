<template>
  <div>
    <h1>Inputs</h1>
    <div class="section">
      <h2>Text Input</h2>
      <input type="text" placeholder="Text Input" />
    </div>
    <div class="section">
      <h2>Text Input with Search</h2>
      <div class="input-wrapper--search">
        <i class="icon-search"></i>
        <input class="input--search" type="text" placeholder="Text Input" />
      </div>
    </div>
    <div class="section">
      <h2>Email Input</h2>
      <input type="email" placeholder="morgan@streamlabs.com" />
    </div>
    <div class="section">
      <h2>Textarea</h2>
      <textarea rows="3"></textarea>
    </div>
    <div class="section">
      <h2>Selector</h2>
      <selector :options="['Option A', 'Option B', 'Option C']"></selector>
    </div>
    <div class="section">
      <h2>Checkboxes</h2>

      <div class="section">
        <h3>Single Checkbox</h3>
        <div class="checkbox">
          <input
            type="checkbox"
            v-model="checkboxExample"/>
          <label>Checkbox</label>
        </div>
      </div>
      <div class="section">
        <h3>Checkbox Group</h3>
        <div class="checkbox-group">
          <div class="checkbox">
            <input
              type="checkbox"
              v-model="checkboxExample1"/>
            <label>Checkbox</label>
          </div>
          <div class="checkbox">
            <input
              type="checkbox"
              v-model="checkboxExample2"/>
            <label>Checkbox</label>
          </div>
          <div class="checkbox">
            <input
              type="checkbox"
              v-model="checkboxExample3"/>
            <label>Checkbox</label>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <h2>Radio Buttons</h2>

      <div class="section">
        <h3>Single Radio Button</h3>
        <div class="checkbox radio">
          <input
            type="radio"
            v-model="radioExample"
            name="radioExampleSingle"/>
          <label>Checkbox</label>
        </div>
      </div>
      <div class="section">
        <h3>Checkbox Group</h3>
        <div class="checkbox-group">
          <div class="checkbox radio">
            <input
              type="radio"
              v-model="radioExample1"
              name="radioExample" />
            <label>Checkbox</label>
          </div>
          <div class="checkbox radio">
            <input
              type="radio"
              v-model="radioExample2"
              name="radioExample"/>
            <label>Checkbox</label>
          </div>
          <div class="checkbox radio">
            <input
              type="radio"
              v-model="radioExample3"
              name="radioExample"/>
            <label>Checkbox</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Selector from "./../Selector.vue";

@Component({
  components: {
    Selector
  }
})
export default class Inputs extends Vue {
  checkboxExample = true;
  checkboxExample1 = false;
  checkboxExample2 = true;
  checkboxExample3 = true;
  radioExample = true;
  radioExample1 = true;
  radioExample2 = false;
  radioExample3 = true;
}
</script>
