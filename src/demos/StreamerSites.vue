<template>
  <div>
    <div class="section">
      <h1>Streamer Sites Components</h1>

  <pre><code>import { SPProSimulator } from 'streamlabs-beaker';

components: {
  SPProSimulator
}</code></pre>

      <ss-pro-simulator :username="username" :icon="icon"></ss-pro-simulator>

      <Button
        :variation="'default'"
        :title="'modal subscribing'"
        @click="showModalSubscribing"
      ></Button>

      <Modal
        v-if="modalSubscribing"
        :modalType="'subscribing'"
        @close="modalSubscribing = false"
      >
        <template slot="title">Streamlabs</template>
        <template slot="sub-title">Never pay for GIFs and effects again!</template>
        <template slot="text">Get unlimited free GIFs and effects that will show up on all alerts on all channels! You’ll also get a fancy ‘Pro’ badge next to your username on your donations.</template>
        <template slot="button-subscribe">
          <Button
            :variation="'subscribe'"
            :title="'Subscribe with PayPal'"
            :price="'$5.99/mo'"
          >
          </Button>
        </template>
        <template slot="notes">You may cancel your subscription at any time.</template>
      </Modal>
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
import SSProSimulator from "./../components/SSProSimulator.vue";
import ModalComp from "./../components/ModalComp.vue";
import Button from "./../components/Button.vue";

@Component({
  components: {
    Accordion,
    "ss-pro-simulator": SSProSimulator,
    ModalComp,
    Button
  }
})
export default class Toggles extends Vue {
  username = "morganleee";
  icon =
    "https://static-cdn.jtvnw.net/jtv_user_pictures/9dfce03d-25cc-4737-96d2-2ecf6924bebe-profile_image-70x70.jpg";
  modalSubscribing = false;

  showModalSubscribing() {
    this.modalSubscribing = true;
  }
}
</script>
