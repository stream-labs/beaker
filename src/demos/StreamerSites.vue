<template>
  <div>
    <div class="section">
      <h1>Streamer Sites Components</h1>

      <pre><code>import { SPProSimulator } from 'streamlabs-beaker';

components: {
  SPProSimulator
}</code></pre>

      <ss-pro-simulator :username="username"></ss-pro-simulator>
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
          <td>username</td>
          <td>string</td>
          <td>"Awkward_Raccoon"</td>
          <td>Set this to users platform username.</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>string</td>
          <td>"https://live.kickstarter.com/images/avatar/medium/avatars4.png"</td>
          <td>Set this to users platform icon.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import SSProSimulator from "./../components/SSProSimulator.vue";

@Component({
  components: {
    Accordion,
    "ss-pro-simulator": SSProSimulator
  }
})
export default class Toggles extends Vue {
  username = "morganleee";
  icon =
    "https://static-cdn.jtvnw.net/jtv_user_pictures/9dfce03d-25cc-4737-96d2-2ecf6924bebe-profile_image-70x70.jpg";
}
</script>
