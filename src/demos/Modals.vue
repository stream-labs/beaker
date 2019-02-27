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

    <Modal v-if="modal" :modalType="'modal'" @close="modal = false">
      <template slot="title">UI Modal</template>
      <template slot="sub-title">Subtitle</template>
      <template
        slot="text"
      >Save combining multiple windows like Streamlabels, Twitch Chat, Twitch Dashboard, Video, Streamlabs Dashboard, OBS etc into a live view.</template>
    </Modal>

    <Modal v-if="modalsubscribe" :modalType="'subscribe'" @close="modalsubscribe = false">
      <template slot="title">Streamer</template>
      <template slot="badge">
        <badge :align-left="true">Pro</badge>
      </template>
      <template slot="sub-title">Never pay for GIFs and effects again!</template>
      <template slot="subscribe-body">
        <SSProSimulator :username="'Pokimane'" :icon="'https://static-cdn.jtvnw.net/jtv_user_pictures/6faa5a7174a604bf-profile_image-70x70.png'"></SSProSimulator>
      </template>
      <template
        slot="text"
      >Get unlimited free GIFs and effects that will show up on all alerts on all channels! You’ll also get a fancy ‘Pro’ badge next to your username on your donations.</template>
      <template slot="button-subscribe">
        <Button :variation="'subscribe'" :title="'Subscribe with PayPal'" :price="'$5.99/mo'"></Button>
      </template>
      <template slot="notes">You may cancel your subscription at any time.</template>
    </Modal>

    <Modal v-if="modalsubscribePro" :streamlabsPro="true" :modalType="'subscribe'" @close="modalsubscribePro = false">
      <template slot="title">Streamlabs</template>
      <template slot="badge">
        <badge :align-left="true">Pro</badge>
      </template>
      <template slot="sub-title">Never pay for GIFs and effects again!</template>
      <template slot="subscribe-text">galazy83 donated $50.00!</template>
      <template slot="subscribe-message">Thanks for the stream. Go CivRyan!</template>
      <template slot="subscribe-icon">
        <img src="../assets/imgs/girl.svg">
      </template>
      <template
        slot="text"
      >Get unlimited free GIFs and effects that will show up on all alerts on all channels! You’ll also get a fancy ‘Pro’ badge next to your username on your donations.</template>
      <template slot="button-subscribe">
        <Button :variation="'subscribe'" :title="'Subscribe with PayPal'" :price="'$5.99/mo'"></Button>
      </template>
      <template slot="notes">You may cancel your subscription at any time.</template>
    </Modal>

    <Modal v-if="modalRedirect" :modalType="'redirect'">
      <template slot="title">Redirecting ...</template>
      <template slot="text">Redirecting you to PayPal to update your method of payment.
        <br>
        <a href="#">Click here</a> if you have been waiting longer than 5 seconds.
      </template>
    </Modal>

    <Modal v-if="modalConfirmation" :modalType="'confirmation'" @close="modalConfirmation = false">
      <template slot="sub-title">Delete ‘Streamlabs Pillow’</template>
      <template
        slot="text"
      >Are you sure you want to delete the merch item ‘Streamlabs Pillow’? This action cannot be undone.</template>
    </Modal>
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
}
</script>

<style lang="less">
.subscribe-body {
  padding: 0 40px;
}
</style>
