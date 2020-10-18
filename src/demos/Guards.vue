<template>
  <div>
    <div class="section">
      <h1>Guards</h1>

      <pre><code>import { Guard } from 'streamlabs-beaker';

components: {
  Guard
}</code></pre>
    </div>

    <div class="section">
      <h2>Text Guard</h2>

      <DemoSection
        title="Text Guard"
        :code="demoCode"
      >
        <template #components>
          <Guard
            class="guard-margin"
            type="alt"
            value="Text"
          />
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Input Guard</h2>

      <DemoSection
        title="Input Guard"
        :code="demoCode"
      >
        <template #components>
          <Guard type="input">
            <template #content>
              <div>
                <TextInput
                  v-model="textInputValue"
                  label="Text input"
                  type="text"
                  :placeholder="textInputPlaceholder"
                  name="textExample"
                />
              </div>
            </template>
          </Guard>
        </template>
      </DemoSection>
    </div>

    <!-- <div class="section">
      <h2>Text Guard</h2>

      <DemoSection title="Text Guard" :code="demoCode">
        <template #components>
          <GuardNew :value="textInputValue" />
        </template>
      </DemoSection>
    </div>-->

    <table class="docs-table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>value</td>
          <td>string</td>
          <td>null</td>
          <td>Text Value</td>
        </tr>
        <tr>
          <td>type</td>
          <td>string</td>
          <td>text</td>
          <td>
            This can be either text or input (supply content slot for input)
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import DemoSection from '../components/DemoSection.vue';
import Guard from '../components/Guard.vue';
// import GuardNew from '../components/GuardNew.vue';
import GuardsCode from '!!raw-loader!./Guards.vue';
import TextInput from '../components/TextInput.vue';

export default defineComponent({
  components: {
    DemoSection,
    Guard,
    // GuardNew,
    TextInput,
  },

  setup() {
    const demoCode: string = GuardsCode;
    const textInputPlaceholder = ref('placeholder');
    const textInputValue = ref('This is something super secret...');

    return {
      demoCode,
      textInputPlaceholder,
      textInputValue,
    };
  },
});
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.guard-margin {
  margin-bottom: 10px;
}
</style>
