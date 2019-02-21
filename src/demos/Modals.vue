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
        :title="'modal donate'"
        @click="showModalDonate"
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
      <h1
        slot="title"
        class="modal-title"
      >UI Modal</h1>
      <h2
        slot="sub-title"
        class="modal-sub-title"
      >Subtitle</h2>
      <p
        slot="text"
        class="modal-text"
      >Save combining multiple windows like Streamlabels, Twitch Chat, Twitch Dashboard, Video, Streamlabs Dashboard, OBS etc into a live view.</p>
    </Modal>

    <Modal
      v-if="modalDonate"
      :modalType="'donate'"
      @close="modalDonate = false"
    >
      <div slot="donate-upper">
        <div class="donate-title-box">
          <h1 class="modal-title">Streamlabs</h1>
          <badge :align-left="true">
            Pro
          </badge>
        </div>
        <h2 class="modal-sub-title">Never pay for GIFs and effects again!</h2>
      </div>

      <div slot="donate-bottom">
        <p class="modal-text modal-text-donate">Get unlimited free GIFs and effects that will show up on all alerts on all channels! You’ll also get a fancy ‘Pro’ badge next to your username on your donations.</p>
        <Button
          :variation="'subscribe'"
          :title="'Subscribe with PayPal'"
          :price="'$5.99/mo'"
          class="button-subscribe"
        >
        </Button>
        <p class="modal-notes">You may cancel your subscription at any time.</p>
      </div>
    </Modal>

    <Modal
      v-if="modalRedirect"
      :modalType="'redirect'"
    >
      <div
        slot="redirect"
        class="redirect"
      >
        <h1 class="modal-title">Redirecting ...</h1>
        <p class="modal-text">Redirecting you to PayPal to update your method of payment.
          <a href="#">Click here</a> if you have been waiting longer than 5 seconds.</p>
      </div>
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
  modalDonate: Boolean = false
  modalRedirect: Boolean = false
  modalType: string = ''
  showModalNormal() {
    this.modal = true
  }
  showModalDonate() {
    this.modalDonate = true
  }
  showModalRedirect() {
    this.modalRedirect = true
  }
  // showModalRedirect() {
  //   let count = 0
  //   let countup = () => {
  //     count++
  //     this.modalRedirect = true
  //     let id = setTimeout(countup, 1000)
  //     if (count > 4) {
  //       this.modalRedirect = false
  //       clearTimeout(id)
  //     }
  //   }
  //   countup()
  // }
}
</script>
