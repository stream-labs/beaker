<template>
  <div>
    <div class="section">
      <h1>Modal</h1>
      <h2>Default Modal</h2>
      <pre><code>import { ModalComp } from 'streamlabs-beaker';

components: {
  ModalComp
}</code></pre>

      <ModalComp
        :type="'basic'"
        :title="'UI Modal'"
        :subTitle="'Subtitle'"
        :text="'Save combining multiple windows like Streamlabels, Twitch Chat, Twitch Dashboard, Video, Streamlabs Dashboard, OBS etc into a live view.'"
      ></ModalComp>

      <ModalComp
        :type="'subscribe'"
        :title="'Streamlabs'"
        :subTitle="'Never pay for GIFs and effects again!'"
        :text="'Get unlimited free GIFs and effects that will show up on all alerts on all channels! You’ll also get a fancy ‘Pro’ badge next to your username on your donations.'"
        :subscribeText="'galazy83 donated $50.00!'"
        :subscribeMessage="'Thanks for the stream. Go CivRyan!'"
        :notes="'You may cancel your subscription at any time.'"
      ></ModalComp>

      <ModalComp
        :type="'redirect'"
        :title="'Redirecting ...'"
        :text="'Redirecting you to PayPal to update your method of payment. Click here if you have been waiting longer than 5 seconds.'"
      ></ModalComp>

      <ModalComp
        :type="'confirm'"
        :width="400"
        :subTitle="'Delete ‘Streamlabs Pillow’'"
        :text="'Are you sure you want to delete the merch item ‘Streamlabs Pillow’? This action cannot be undone.'"
      ></ModalComp>

      <div class="button-container--left buttons">
        <Button :variation="'default'" :title="'modal'" @click="$modal.show('modal-basic')"></Button>
        <Button
          :variation="'default'"
          :title="'modal subscribe'"
          @click="$modal.show('modal-subscribe')"
        ></Button>
        <Button
          :variation="'default'"
          :title="'modal redirect'"
          @click="$modal.show('modal-redirect')"
        ></Button>
        <Button
          :variation="'warning'"
          :title="'modal confirmation'"
          @click="$modal.show('modal-confirmation')"
        ></Button>
      </div>

      <table class="docs-table">
        <thead>
          <tr>
            <th>Props</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>interval</td>
            <td>Number</td>
            <td>1</td>
            <td>The steps between the values</td>
          </tr>
          <tr>
            <td>max</td>
            <td>Number</td>
            <td>null</td>
            <td>The maximum numerical value that can be selected</td>
          </tr>
          <tr>
            <td>min</td>
            <td>Number</td>
            <td>null</td>
            <td>The minimum numerical value that can be selected</td>
          </tr>
          <tr>
            <td>suffix</td>
            <td>String</td>
            <td>px</td>
            <td>Suffix label that will be displayed next to the value in the tooltip</td>
          </tr>
          <tr>
            <td>tooltip</td>
            <td>String</td>
            <td>always</td>
            <td>Show the tooltip or not. Options are 'always' or 'false'</td>
          </tr>
          <tr>
            <td>value</td>
            <td>Number, String, Array, Object</td>
            <td>1</td>
            <td>Initial value of the slider.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ModalComp from './../components/ModalComp.vue'
import Button from './../components/Button.vue'

@Component({
  components: {
    ModalComp,
    Button,
  },
})
export default class Modals extends Vue {}
</script>
<style lang="less" scoped>
@import './../styles/Imports';

.buttons {
  .margin-v-sides(4);
}
</style>