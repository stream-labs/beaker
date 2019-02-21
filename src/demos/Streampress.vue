<template>
  <div>
    <div class="section">
      <h1>Streampress Components</h1>

  <pre><code>import { SPProSimulator } from 'streamlabs-beaker';

components: {
  SPProSimulator
}</code></pre>

      <sp-pro-simulator :username="username" :icon="icon">

      </sp-pro-simulator>
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
import SPProSimulator from "./../components/SPProSimulator.vue";

@Component({
  components: {
    Accordion,
    "sp-pro-simulator": SPProSimulator
  }
})
export default class Toggles extends Vue {
  username = "morganleee";
  icon = "https://static-cdn.jtvnw.net/jtv_user_pictures/9dfce03d-25cc-4737-96d2-2ecf6924bebe-profile_image-70x70.jpg";
}
</script>
