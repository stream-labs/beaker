<template>
  <div>
    <div class="section">
      <h1>Modal</h1>
      <p>Modal</p>
    </div>

    <ModalBasic
      :title="'UI Modal'"
      :sub-title="'Subtitle'"
      :text="'Save combining multiple windows like Streamlabels, Twitch Chat, Twitch Dashboard, Video, Streamlabs Dashboard, OBS etc into a live view.'"
    ></ModalBasic>

    <ModalSubscribe
      :title="'Streamlabs'"
      :sub-title="'Never pay for GIFs and effects again!'"
      :text="'Get unlimited free GIFs and effects that will show up on all alerts on all channels! You’ll also get a fancy ‘Pro’ badge next to your username on your donations.'"
      :subscribe-text="'galazy83 donated $50.00!'"
      :subscribe-message="'Thanks for the stream. Go CivRyan!'"
      :notes="'You may cancel your subscription at any time.'"
    ></ModalSubscribe>

    <ModalRedirect
      :title="'Redirecting ...'"
      :text="'Redirecting you to PayPal to update your method of payment. Click here if you have been waiting longer than 5 seconds.'"
    ></ModalRedirect>

    <ModalConfirmation
      :width="400"
      :sub-title="'Delete ‘Streamlabs Pillow’'"
      :text="'Are you sure you want to delete the merch item ‘Streamlabs Pillow’? This action cannot be undone.'"
    ></ModalConfirmation>

    <div class="button-container--left">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ModalBasic from './../components/ModalBasic.vue'
import ModalSubscribe from './../components/ModalSubscribe.vue'
import ModalRedirect from './../components/ModalRedirect.vue'
import ModalConfirmation from './../components/ModalConfirmation.vue'
import Button from './../components/Button.vue'
import Badge from './../components/Badge.vue'

@Component({
  components: {
    ModalBasic,
    ModalSubscribe,
    ModalRedirect,
    ModalConfirmation,
    Button,
    Badge,
  },
})
export default class Modals extends Vue {
  // show() {
  //   this.$modal.show('modal-basic')
  // }
  // showBasicDialog() {
  //   this.$modal.show('modalBasic', {
  //     // text: 'I am a tiny dialog box.<br/>And I render <b>HTML!</b>',
  //   })
  // }
}
</script>
