<template>
  <div>
    <h1>Inputs</h1>

    <div class="section">
      <h2>Text Inputs</h2>
      <p>
        These 4 fields below are wrapped in a
        <code>FormGroup</code> component. This will put 16px of margin between
        form fields and 24px margin between form groups.
      </p>
      <FormGroup>
        <text-input
          label="Text input"
          type="text"
          :placeholder="textInputPlaceholder"
          v-model="textInputValue"
          name="textExample"
          slot="input"
        ></text-input>

        <text-input
          label="Email input"
          type="email"
          :placeholder="emailInputPlaceholder"
          v-model="emailInputValue"
          name="emailExample"
          slot="input"
        ></text-input>

        <text-input
          label="Password input"
          type="password"
          :placeholder="passwordInputPlaceholder"
          v-model="passwordInputValue"
          name="passwordExample"
          slot="input"
        ></text-input>

        <text-input
          label="With error"
          type="text"
          :placeholder="textInputPlaceholder"
          v-model="errorTextInputValue"
          name="textExample"
          slot="input"
          :error="'Hello, I am an error message'"
        ></text-input>
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
            <td>
              Puts a disabled class on the form field and disables the input.
            </td>
          </tr>
          <tr>
            <td>error</td>
            <td>string</td>
            <td>null</td>
            <td>
              If there is error text, error classes will go on the input - we
              plan to add better validation handling.
            </td>
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
            <td>
              Input type:
              <code>text</code>, <code>email</code>, <code>password</code>.
            </td>
          </tr>
          <tr>
            <td>value</td>
            <td>string</td>
            <td>null</td>
            <td>Input value using v-model.</td>
          </tr>
          <tr>
            <td>readonly</td>
            <td>boolean</td>
            <td>null</td>
            <td>Specifies that an input field is read-only.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section">
      <h2>Selector</h2>

      <pre><code>import { Selector } from 'streamlabs-beaker';

components: {
  Selector
}</code></pre>

      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
<code>&lt;selector v-model=&quot;selected&quot; :options=&quot;['Option A', 'Option B', 'Option C']&quot;&gt;&lt;/selector&gt;

&lt;selector
  v-model=&quot;selected&quot;
  :options=&quot;['Option A', 'Option B', 'Option C', 'Option D', 'Option E', 'Option F']&quot;
  disabled
&gt;&lt;/selector&gt;

&lt;selector
  v-model=&quot;multipleSelected&quot;
  :options=&quot;['Option A', 'Option B', 'Option C', 'Option D', 'Option E', 'Option F']&quot;
  multiple
&gt;&lt;/selector&gt;

&lt;selector
  v-model=&quot;multipleSelected&quot;
  :options=&quot;['Option A', 'Option B', 'Option C', 'Option D', 'Option E', 'Option F']&quot;
  disabled
  multiple
&gt;&lt;/selector&gt;</code></pre>
        </div>
      </Accordion>
      <Selector
        v-model="selected"
        :options="['Option A', 'Option B', 'Option C']"
      ></Selector>
      <br />
      <selector
        v-model="selected"
        :options="[
          'Option A',
          'Option B',
          'Option C',
          'Option D',
          'Option E',
          'Option F'
        ]"
        disabled
      ></selector>
      <br />
      <selector
        v-model="multipleSelected"
        :options="[
          'Option A',
          'Option B',
          'Option C',
          'Option D',
          'Option E',
          'Option F'
        ]"
        multiple
        :searchable="false"
      ></selector>
      <br />
      <selector
        v-model="multipleSelected"
        :options="[
          'Option A',
          'Option B',
          'Option C',
          'Option D',
          'Option E',
          'Option F'
        ]"
        disabled
        multiple
      ></selector>
      <br />

      <selector
        v-model="objectSelected"
        :options="options"
        :label="'title'"
        :trackBy="'title'"
      ></selector>
      <br />

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
            <td>Current selected value.</td>
          </tr>
          <tr>
            <td>options</td>
            <td>[''] or {}</td>
            <td>null</td>
            <td>Array of strings or objects to use as the options.</td>
          </tr>
          <tr>
            <td>multiple</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Optional label for the input.</td>
          </tr>
          <tr>
            <td>placeholder</td>
            <td>String</td>
            <td>''</td>
            <td>Equivalent to the `placeholder` attribute on an input.</td>
          </tr>
          <tr>
            <td>searchable</td>
            <td>Boolean</td>
            <td>true</td>
            <td>Optional label for the input.</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Boolean</td>
            <td>false</td>
            <td>
              Puts a disabled class on the form field and disables the input.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section">
      <h2>Checkboxes</h2>

      <div class="section">
        <h3>Single Checkbox</h3>
        <checkbox
          :id="'checkbox1'"
          :name="'checkbox1'"
          :label="'Checkbox label'"
          v-model="checkboxValue1"
        ></checkbox>
      </div>

      <div class="section">
        <h3>Checkbox Group</h3>
        <div class="s-checkbox-group">
          <checkbox
            :id="'checkbox2'"
            :name="'checkbox2'"
            :label="'Checkbox labe2'"
            v-model="checkboxValue2"
          ></checkbox>
          <checkbox
            :id="'checkbox3'"
            :name="'checkbox3'"
            :label="'Checkbox label'"
            v-model="checkboxValue3"
          ></checkbox>
          <checkbox
            :id="'checkbox4'"
            :name="'checkbox4'"
            :label="'Checkbox label'"
            v-model="checkboxValue4"
          ></checkbox>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>Radios</h2>
      <div class="section">
        <div class="s-checkbox-group">
          <radio
            :id="'radio1'"
            :name="'radio-group'"
            :label="'Enabled'"
            :val="true"
            v-model="radioValue"
          ></radio>
          <radio
            :id="'radio2'"
            :name="'radio-group'"
            :label="'Disabled'"
            :val="false"
            v-model="radioValue"
          ></radio>
          <span>Picked: {{ radioValue }}</span>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>Status Switch</h2>
      <div class="section">
        <status-switch
          v-model="statusValue"
          :label="'Status Label'"
        ></status-switch>
      </div>
      <div class="section">
        <small>
          <status-switch v-model="statusValue">
            <label>Small Switch</label>
          </status-switch>
        </small>
      </div>
      <div class="section">
        <h1>
          <status-switch v-model="statusValue">
            <label>H1 Switch</label>
          </status-switch>
        </h1>
      </div>

      <div class="section">
        <status-switch v-model="statusValue" />
        <status-switch v-model="statusValue" />
        <status-switch v-model="statusValue" />
      </div>

      <Accordion
        :openedTitle="'Hide Code'"
        :closedTitle="'Show Code'"
        class="docs-code"
      >
        <div slot="content">
          <pre><code>&lt;status-switch v-model="statusValue" :label="'Status Label'"&gt;&lt;/status-switch&gt;

&lt;small&gt;
  &lt;status-switch v-model="statusValue"&gt;
    &lt;label&gt;Small Switch&lt;/label&gt;
  &lt;/status-switch&gt;
&lt;/small&gt;

&lt;h1&gt;
  &lt;status-switch v-model="statusValue"&gt;
    &lt;label&gt;H1 Switch&lt;/label&gt;
  &lt;/status-switch&gt;
&lt;/h1&gt;

&lt;status-switch v-model="statusValue" /&gt;
&lt;status-switch v-model="statusValue" /&gt;
&lt;status-switch v-model="statusValue" /&gt;</code></pre>
        </div>
      </Accordion>
    </div>

    <div class="section">
      <h2>Image Input Picker</h2>
      <div class="section">
        <h3>Default</h3>
        <p>
          By default, the image input picker is setup to have our Alert Box
          layout styles as the options.
        </p>
        <Accordion
          :openedTitle="'Hide Code'"
          :closedTitle="'Show Code'"
          class="docs-code"
        >
          <div slot="content">
            <pre>
<code>&lt;image-picker-input v-model=&quot;layoutValue&quot;&gt;&lt;/image-picker-input&gt;</code></pre>
          </div>
        </Accordion>
        <image-picker-input v-model="layoutValue"></image-picker-input>
      </div>
      <div class="section">
        <h3>Custom</h3>
        <p>
          You can pass in any options you'd like with the options prop. This is
          an example using our Jar options.
        </p>
        <Accordion
          :openedTitle="'Hide Code'"
          :closedTitle="'Show Code'"
          class="docs-code"
        >
          <div slot="content">
            <pre>
<code>&lt;image-picker-input v-model=&quot;jarValue&quot; :options=&quot;options&quot;&gt;&lt;/image-picker-input&gt;</code></pre>
          </div>
        </Accordion>
        <image-picker-input
          v-model="jarValue"
          :options="options"
        ></image-picker-input>
      </div>
    </div>

    <div class="section">
      <h3>Tagging Input</h3>
      <TaggingInput
        name="aliases"
        placeholder="!hello"
        maxItems="10"
        inputValidation="required"
        @keydown.space.prevent
      />
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
import TaggingInput from "./../components/TaggingInput.vue";

@Component({
  components: {
    Accordion,
    Selector,
    Checkbox,
    ImagePickerInput,
    Radio,
    StatusSwitch,
    TextInput,
    FormGroup,
    TaggingInput
  }
})
export default class Inputs extends Vue {
  data = "";

  radioValue = true;

  checkboxValue1 = true;
  checkboxValue2 = false;
  checkboxValue3 = true;
  checkboxValue4 = false;
  selected = "Option A";
  multipleSelected = ["Option B", "Option D"];
  optionSelected = ["Glass Pint", "Glass Beer"];
  objectSelected = {
    value: "glass-pint",
    title: "Glass Pint",
    image: "https://cdn.streamlabs.com/static/tip-jar/jars/glass-pint.png"
  };
  radioValue1 = true;
  radioValue2 = false;
  statusValue = true;
  testingInput = null;

  layoutValue = "above";
  jarValue = "glass-pint";

  // Text inputs
  textInputValue = "test";
  emailInputValue = "";
  passwordInputValue = "";
  errorTextInputValue = "";

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

  show = [
    "Bounce",
    "Bounce In",
    "Bounce In Down",
    "Bounce In Left",
    "Bounce In Right",
    "Bounce In Up",
    "Fade In",
    "Fade In Down",
    "Fade In Down Big",
    "Fade In Left",
    "Fade In Left Big",
    "Fade In Right",
    "Fade In",
    "Fade In Up",
    "Fade In Up Big"
  ];
}
</script>
