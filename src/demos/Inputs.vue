<template>
  <div>
    <h1>Inputs</h1>

    <div class="section">
      <h2>Text Inputs</h2>
      <p>These 4 fields below are wrapped in a <code>FormGroup</code> component. This will put 16px of margin between form fields and 24px margin between form groups.</p>
      <FormGroup>
        <text-input
          label="Text input"
          type="text"
          :placeholder="textInputPlaceholder"
          v-model="textInputValue"
          name="textExample"
          slot="input">
        </text-input>

        <text-input
          label="Email input"
          type="email"
          :placeholder="emailInputPlaceholder"
          v-model="emailInputValue"
          name="emailExample"
          slot="input">
        </text-input>

        <text-input
          label="Password input"
          type="password"
          :placeholder="passwordInputPlaceholder"
          v-model="passwordInputValue"
          name="passwordExample"
          slot="input">
        </text-input>

        <text-input
          label="With error"
          type="text"
          :placeholder="textInputPlaceholder"
          v-model="textInputValue"
          name="textExample"
          slot="input"
          :error="'Hello, I am an error message'">
        </text-input>

        <text-input
          label="With error"
          type="text"
          :placeholder="textInputPlaceholder"
          v-model="textInputValue"
          name="textExample"
          slot="input"
          :help-text="'Hello, I am help text'">
        </text-input>
      </FormGroup>

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
          <td>disabled</td>
          <td>boolean</td>
          <td>null</td>
          <td>Puts a disabled class on the form field and disables the input.</td>
        </tr>
        <tr>
          <td>error</td>
          <td>string</td>
          <td>null</td>
          <td>If there is error text, error classes will go on the input - we plan to add better validation handling.</td>
        </tr>
        <tr>
          <td>label</td>
          <td>string</td>
          <td>null</td>
          <td>Optional label for the input.</td>
        </tr>
        <tr>
          <td>name</td>
          <td>string</td>
          <td>null</td>
          <td>Input name attribute.</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>string</td>
          <td>null</td>
          <td>Input placeholder text.</td>
        </tr>
        <tr>
          <td>type</td>
          <td>string</td>
          <td>text</td>
          <td>Input type: <code>text</code>, <code>email</code>, <code>password</code>.</td>
        </tr>
        <tr>
          <td>value</td>
          <td>string</td>
          <td>null</td>
          <td>Input value using v-model.</td>
        </tr>
      </tbody>
    </table>
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
      <h2>Status Switch</h2>
      <div class="section">
        <status-switch v-model="statusValue" :label="'Status Label'"></status-switch>
      </div>
    </div>

    <div class="section">
      <h2>Image Input Picker</h2>
      <div class="section">
        <h3>Default</h3>
        <p>By default, the image input picker is setup to have our Alert Box layout styles as the options.</p>
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'" class="docs-code">
          <div slot="content">
            <pre>
<code>&lt;image-picker-input v-model=&quot;layoutValue&quot;&gt;&lt;/image-picker-input&gt;</code></pre>
          </div>
        </Accordion>
        <image-picker-input v-model="layoutValue"></image-picker-input>
      </div>
      <div class="section">
        <h3>Custom</h3>
        <p>You can pass in any options you'd like with the options prop. This is an example using our Jar options.</p>
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'" class="docs-code">
          <div slot="content">
            <pre>
<code>&lt;image-picker-input v-model=&quot;jarValue&quot; :options=&quot;options&quot;&gt;&lt;/image-picker-input&gt;</code></pre>
          </div>
        </Accordion>
        <image-picker-input v-model="jarValue" :options="options"></image-picker-input>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import Selector from "./../components/Selector.vue";
import Checkbox from "./../components/Checkbox.vue";
import ImagePickerInput from "./../components/ImagePickerInput.vue";
import Radio from "./../components/Radio.vue";
import StatusSwitch from "./../components/StatusSwitch.vue";
import TextInput from "./../components/TextInput.vue";
import FormGroup from "./../components/FormGroup.vue";

@Component({
  components: {
    Accordion,
    Selector,
    Checkbox,
    ImagePickerInput,
    Radio,
    StatusSwitch,
    TextInput,
    FormGroup
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
  statusValue = true;
  testingInput = null;

  layoutValue = "above";
  jarValue = "glass-pint";

  // Text inputs
  textInputValue = "";
  emailInputValue = "";
  passwordInputValue = "";

  textInputPlaceholder = "Placeholder";
  emailInputPlaceholder = "Placeholder";
  passwordInputPlaceholder = "Placeholder";

  options = [
    {
      value: "glass-pint",
      title: "Glass Pint",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-pint.png"
    },
    {
      value: "glass-beer",
      title: "Glass Beer",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-beer.png"
    },
    {
      value: "glass-beer-2",
      title: "Glass Beer 2",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-beer2.png"
    },
    {
      value: "glass-coffee",
      title: "Glass Coffee",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-coffee.png"
    },
    {
      value: "glass-fancy",
      title: "Glass Fancy",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-fancy.png"
    },
    {
      value: "glass-whiskey",
      title: "Glass Whiskey",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-whiskey.png"
    },
    {
      value: "glass-burbon",
      title: "Glass Burbon",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-burbon.png"
    },
    {
      value: "glass-martini",
      title: "Glass Martini",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-martini.png"
    },
    {
      value: "glass-beer-3",
      title: "Glass Beer 3",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-beer3.png"
    },
    {
      value: "glass-wine",
      title: "Glass Wine",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-wine.png"
    },
    {
      value: "glass-baileys",
      title: "Glass Baileys",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-baileys.png"
    },
    {
      value: "glass-champagne",
      title: "Glass Champagne",
      image:
        "https://cdn.streamlabs.com/static/tip-jar/jars/glass-champagne.png"
    },
    {
      value: "glass-coffee-no-handle",
      title: "Glass Coffee No Handle",
      image:
        "https://cdn.streamlabs.com/static/tip-jar/jars/glass-coffee-no-handle.png"
    },
    {
      value: "glass-plinko",
      title: "Glass Plinko",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-plinko.png"
    },
    {
      value: "glass-stocking",
      title: "Glass Stocking",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-stocking.png"
    },
    {
      value: "glass-snowman",
      title: "Glass Snowman",
      image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-snowman.png"
    }
  ];
}
</script>
