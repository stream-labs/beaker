<template>
  <div>
    <div class="section">
      <h1>Forms</h1>
      <p>
        Wrap input components in form groups for different input and label
        layouts.
      </p>

      <pre><code>import { FormGroup, FormGroupH, FormGroupV } from 'streamlabs-beaker';

components: {
  FormGroup,
  FormGroupH,
  FormGroupV
}</code></pre>
    </div>

    <div class="section">
      <h2>Form Group</h2>

      <DemoSection
        title="Form Group"
        :code="demoCode"
      >
        <template #components>
          <FormGroup>
            <template #input>
              <TextInput
                v-model="inputValue"
                :type="textInputType"
                :placeholder="textInputPlaceholder"
                :label="title"
              />
            </template>
          </FormGroup>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Horizontal Form Group</h2>

      <DemoSection
        title="Horizontal Form Group"
        :code="demoCode"
      >
        <template #components>
          <FormGroupH
            :title="title"
            :help-text="helpText"
            :tooltip="tooltip"
          >
            <template #input>
              <TextInput
                v-model="inputValue"
                :type="textInputType"
                :placeholder="textInputPlaceholder"
              />
            </template>
          </FormGroupH>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Vertical Form Group</h2>

      <DemoSection
        title="Vertical Form Group"
        :code="demoCode"
      >
        <template #components>
          <FormGroupV
            :title="title"
            label="Vertical Form Group Input"
            title-layout="flex-start"
            :tooltip="tooltip"
            :help-text="helpText"
          >
            <template #input>
              <TextInput
                v-model="inputValue"
                :type="textInputType"
                :placeholder="textInputPlaceholder"
              />
            </template>
          </FormGroupV>
        </template>
      </DemoSection>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import DemoSection from '../components/DemoSection.vue';
import FormsCode from '!!raw-loader!./Forms.vue';
import FormGroup from '../components/FormGroup.vue';
import FormGroupH from '../components/FormGroupH.vue';
import FormGroupV from '../components/FormGroupV.vue';
import TextInput from '../components/TextInput.vue';

export default defineComponent({
  components: {
    DemoSection,
    FormGroup,
    FormGroupH,
    FormGroupV,
    TextInput,
  },

  setup() {
    const demoCode: string = FormsCode;
    const title = 'Text Input';
    const tooltip = 'Input tooltip message.';
    const helpText = 'This is help text';
    const textInputPlaceholder = 'Text input placeholder';
    const textInputType = 'text';
    const inputValue = ref('');

    return {
      demoCode,
      title,
      tooltip,
      helpText,
      textInputPlaceholder,
      textInputType,
      inputValue,
    };
  },
});
</script>
