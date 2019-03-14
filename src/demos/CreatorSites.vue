<template>
  <div>
    <div class="section">
      <h1>Creator Sites Components</h1>

      <pre><code>import { SSProSimulator, UrlBar } from 'streamlabs-beaker';

components: {
  SSProSimulator,
  UrlBar
}</code></pre>
      <div class="section">
        <SSProSimulator :username="username"></SSProSimulator>
        <br>
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
              <td>domain</td>
              <td>string</td>
              <td>-</td>
              <td>Domain name for the Url Bar.</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>string</td>
              <td>"https://live.kickstarter.com/images/avatar/medium/avatars4.png"</td>
              <td>Set this to users platform icon.</td>
            </tr>
            <tr>
              <td>username</td>
              <td>string</td>
              <td>"Awkward_Raccoon"</td>
              <td>Set this to users platform username.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br>
      <br>
      <div class="section">
        <UrlBar :domain="domain"></UrlBar>
        <br>
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
              <td>domain</td>
              <td>string</td>
              <td>-</td>
              <td>Domain name for the Url Bar.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import SSProSimulator from "./../components/SSProSimulator.vue";
import UrlBar from "./../components/UrlBar.vue";

@Component({
  components: {
    Accordion,
    SSProSimulator,
    UrlBar
  }
})
export default class CreatorSitesDemo extends Vue {
  username = "morganleee";
  icon =
    "https://static-cdn.jtvnw.net/jtv_user_pictures/9dfce03d-25cc-4737-96d2-2ecf6924bebe-profile_image-70x70.jpg";

  domain = "morganleee.com";
}
</script>
