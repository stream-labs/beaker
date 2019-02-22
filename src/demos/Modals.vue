<template>
  <div>
    <div class="section">
      <h1>Modal</h1>
      <p>Modal</p>
    </div>

    <div class="button-container--left">
      <Button
        :variation="'default'"
        :title="'modal'"
        @click="showModalNormal"
      >
      </Button>
      <Button
        :variation="'default'"
        :title="'modal subscribing'"
        @click="showModalSubscribing"
      >
      </Button>
      <Button
        :variation="'default'"
        :title="'modal redirect'"
        @click="showModalRedirect"
      >
      </Button>
    </div>
    <Modal
      v-if="modal"
      :modalType="'modal'"
      @close="modal = false"
    >
      <template slot="title">UI Modal</template>
      <template slot="sub-title">Subtitle</template>
      <template slot="text">Save combining multiple windows like Streamlabels, Twitch Chat, Twitch Dashboard, Video, Streamlabs Dashboard, OBS etc into a live view.</template>
    </Modal>

    <Modal
      v-if="modalSubscribing"
      :modalType="'subscribing'"
      @close="modalSubscribing = false"
    >
      <template slot="title">Streamlabs</template>
      <template slot="badge">
        <badge :align-left="true">
          Pro
        </badge>
      </template>
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

    <Modal
      v-if="modalRedirect"
      :modalType="'redirect'"
    >
      <template slot="title">Redirecting ...
      </template>
      <template slot="text">Redirecting you to PayPal to update your method of payment.<a href="#">Click here</a> if you have been waiting longer than 5 seconds.</template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Modal from './../components/Modal.vue'
import Button from './../components/Button.vue'
import Badge from './../components/Badge.vue'

@Component({
  components: {
    Modal,
    Button,
    Badge,
  },
})
export default class Modals extends Vue {
  modal: Boolean = false
  modalSubscribing: Boolean = true
  modalRedirect: Boolean = false
  modalType: string = ''
  showModalNormal() {
    this.modal = true
  }
  showModalSubscribing() {
    this.modalSubscribing = true
  }
  showModalRedirect() {
    this.modalRedirect = true
  }
}
</script>
