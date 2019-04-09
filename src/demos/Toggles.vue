<template>
  <div>
    <div class="section">
      <h1>Toggles</h1>
      <p>Toggle between two custom options such as show and hide.</p>

      <pre><code>import { Toggle } from 'streamlabs-beaker';

components: {
  Toggle
}</code></pre>

      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;toggle
  :values=&quot;{
    'show': `&lt;i class='icon-view'&gt;&lt;/i&gt;`,
    'hide': `&lt;i class='icon-hide'&gt;&lt;/i&gt;`
  }&quot;
  :selected.sync=&quot;selectedOption&quot;
  :default=&quot;'visible'&quot;&gt;
&lt;/toggle&gt;</code></pre>
        </div>
      </accordion>

      <toggle
        :values="{
          'show': `<i class='icon-view'></i>`,
          'hide': `<i class='icon-hide'></i>`
        }"
        :selected.sync="selectedTextOption"
        :default="'show'"
      ></toggle>
    </div>

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
          <td>values</td>
          <td>object</td>
          <td>null</td>
          <td>Set toggle options with strings for the keys and HTML for the values. Keys will also be displayed as toggle title attributes.</td>
        </tr>
        <tr>
          <td>selected.sync</td>
          <td>string</td>
          <td>null</td>
          <td>Use as a bind to the currently selected toggle option.</td>
        </tr>
        <tr>
          <td>default</td>
          <td>string</td>
          <td>null</td>
          <td>Set to have a preselected toggle option when created.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import Toggle from "./../components/Toggle.vue";

@Component({
  components: {
    Accordion,
    Toggle
  }
})
export default class Toggles extends Vue {
  selectedOption = "";
  selectedTextOption = "";
}
</script>
