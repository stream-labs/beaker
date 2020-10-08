<template>
  <div>
    <div class="section">
      <h1>Color Picker</h1>
      <p>This color picker uses a chrome style picker</p>

      <pre><code>import { ColorPicker } from "streamlabs-beaker"

components: {
  ColorPicker
}</code></pre>
    </div>

    <div class="section">
      <h2>Default Color Picker</h2>

      <div class="section">
        <DemoSection
          title="Default"
          :code="demoCode"
        >
          <template #components>
            <ColorPicker v-model="color" />
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h3>With Alpha</h3>
        <DemoSection
          title="Alpha"
          :code="demoCode"
        >
          <template #components>
            <ColorPicker
              v-model="alphaColor"
              :has-alpha="true"
            />
          </template>
        </DemoSection>
      </div>

      <table class="docs-table">
        <thead>
          <tr>
            <th>Props</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>value</td>
            <td>String</td>
            <td>#31c3a2</td>
            <td>Color to show up on a fresh color picker</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>String</td>
            <td>null</td>
            <td>It shows as a placeholder in case of blank</td>
          </tr>
          <tr>
            <td>hasAlpha</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Option to add alpha setting for the color picker</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import ColorPicker from '../components/ColorPicker.vue';
import ColorPickersCode from '!!raw-loader!./ColorPickers.vue';
import DemoSection from '../components/DemoSection.vue';

export default defineComponent({
  components: {
    ColorPicker,
    DemoSection,
  },

  setup() {
    const demoCode: string = ColorPickersCode;
    const color = ref('#5E3BEC');
    const alphaColor = ref('#EB7777');

    return {
      demoCode,
      color,
      alphaColor,
    };
  },
});
</script>
