<template>
  <div>
    <div class="section">
      <h1>Toggles</h1>
      <p>Toggle between two custom options such as visible and hidden. </p>
      <toggle :values="toggleOption" :selected.sync="selectedOption" :default="'visible'"></toggle>

      <accordion
        :openedTitle="'Hide Code'"
        :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;toggle
  :values=&quot;toggleOptions&quot;
  :selected.sync=&quot;toggleSelected&quot;
  :default=&quot;'visible'&quot;&gt;
&lt;/toggle&gt;</code></pre>
        </div>
      </accordion>
    </div>

    <div class="section">
      <h2>Props</h2>
      <h3>values - Required</h3>
      <p>Use the <strong>values</strong> prop to hold your toggle options. It accepts an object with strings for the keys and HTML for the values.</p>

      <h3>selected.sync - Required</h3>
      <p>Use the <strong>selected.sync</strong> prop as a bind to the currently selected toggle option.</p>

      <h3>default - Required</h3>
      <p>Set the <strong>default</strong> prop in order for the component to have an selected toggle option when created.</p>

      <toggle
        :values="{
          'show': '<strong>Show</strong>',
          'hide': '<strong>hide</strong>'
        }"
        :selected.sync="selectedTextOption"
        :default="'show'"></toggle>

      <accordion
        :openedTitle="'Hide Code'"
        :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;toggle
  :values=&quot;{
    'visible': '&lt;strong&gt;Visible&lt;/strong&gt;',
    'hidden': '&lt;strong&gt;Hidden&lt;/strong&gt;'
  }&quot;
  :selected.sync=&quot;selectedOption&quot;
  :default=&quot;'visible'&quot;&gt;
&lt;/toggle&gt;</code></pre>
        </div>
      </accordion>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Accordion from "./../Accordion.vue";
import Toggle from "./../Toggle.vue";

@Component({
  components: {
    Accordion,
    Toggle
  }
})
export default class Toggles extends Vue {
  toggleOption = {
    visible: "<i class='icon-view'></i>",
    hidden: "<i class='icon-hide'></i>"
  };

  selectedOption = "";
  selectedTextOption = "";
}
</script>
