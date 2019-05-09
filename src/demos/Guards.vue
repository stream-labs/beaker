<template>
  <div>
    <div class="section">
      <h2>Text Guard</h2>
      <Accordion
        :openedTitle="'Hide Code'"
        :closedTitle="'Show Code'"
        class="docs-code"
      >
        <div slot="content">
          <pre>
            <code>
&lt;Guard :value=&quot;'Text'&quot; /&gt;
            </code>
          </pre>
        </div>
      </Accordion>
      <guard class="guard-margin" :value="'Text'" />

      <h2>Input Guard</h2>
      <Accordion
        :openedTitle="'Hide Code'"
        :closedTitle="'Show Code'"
        class="docs-code"
      >
        <div slot="content">
          <pre>
            <code>
&lt;Guard :type=&quot;'input'&quot;&gt;
  &lt;div slot=&quot;content&quot;&gt;
     &lt;text-input
      label=&quot;Text input&quot;
      type="&quot;text&quot;
      :placeholder=&quot;textInputPlaceholder&quot;
      v-model=&quot;textInputValue&quot;
      name=&quot;textExample&quot;
      slot=&quot;input&quot;
    &gt;&lt;/text-input&gt;
  &lt;/div&gt;
&lt;/Guard&gt;
            </code>
          </pre>
        </div>
      </Accordion>
      <guard type="input">
        <div slot="content">
          <text-input
            label="Text input"
            type="text"
            :placeholder="textInputPlaceholder"
            v-model="textInputValue"
            name="textExample"
            slot="input"
          ></text-input>
        </div>
      </guard>
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import TextInput from "./../components/TextInput.vue";
import Guard from "./../components/Guard.vue";

@Component({
  components: {
    TextInput,
    Guard,
    Accordion
  }
})
export default class Accordions extends Vue {
  textInputPlaceholder = "placeholder";
  textInputValue = "This is something super secret...";
}
</script>

<style lang="less">
@import "./../styles/Imports";

.guard-margin {
  margin-bottom: 10px;
}
</style>
