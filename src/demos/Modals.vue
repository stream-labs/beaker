<template>
  <div>
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
      <div slot="normal-upper">
        <h1 class="title">UI Modal</h1>
        <h2 class="sub-title">Subtitle</h2>
        <p class="text">Save combining multiple windows like Streamlabels, Twitch Chat, Twitch Dashboard, Video, Streamlabs Dashboard, OBS etc into a live view.</p>
      </div>
    </Modal>

    <Modal
      v-if="modalDonate"
      :modalType="'donate'"
      @close="modalDonate = false"
    >
      <div slot="donate-upper">
        <div class="donate-title-box">
          <h1 class="title">Streamlabs</h1>
          <badge :align-left="true">
            Pro
          </badge>
        </div>
        <h2 class="sub-title">Never pay for GIFs and effects again!</h2>
      </div>

      <div slot="donate-bottom">
        <p class="text">Get unlimited free GIFs and effects that will show up on all alerts on all channels! You’ll also get a fancy ‘Pro’ badge next to your username on your donations.</p>
        <Button
          :variation="'subscribe'"
          :title="'Subscribe with PayPal'"
          :icon="'unitpay'"
          :price="'$5.99/mo'"
          class="button-subscribe"
        >
        </Button>
        <p class="notes">You may cancel your subscription at any time.</p>
      </div>
    </Modal>

    <Modal
      v-if="modalRedirect"
      :modalType="'redirect'"
      @close="modalRedirect = false"
    >
      <div
        slot="redirect"
        class="redirect"
      >
        <h1 class="title">Redirecting ...</h1>
        <p class="text">Redirecting you to PayPal to update your method of payment.
          Click here if you have been waiting longer than 5 seconds.</p>
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
    let count = 0
    let countup = () => {
      count++
      this.modalRedirect = true
      let id = setTimeout(countup, 1000)
      if (count > 4) {
        this.modalRedirect = false
        clearTimeout(id)
      }
    }
    countup()
  }
}
</script>


<style lang="less" scoped>
@import './../styles/Imports';

.title {
  color: @dark-2;
  .weight(@bold);
  .plan {
    color: @teal;
    font-size: 14px;
    background: #ffffff;
    .margin-left();
  }
}
.sub-title {
  .weight(500);
}
.text {
  font-size: 14px;
  line-height: 21px;
}
.donate-title-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
  .title {
    margin: 0;
    margin-right: 8px;
  }
}
.button-subscribe {
  .margin-top(@spacing: 3);
}
.notes {
  text-align: center;
  color: @light-5;
  .small-type();
  .padding-v-sides(@spacing: 2);
}
.redirect {
  text-align: center;
  .padding(@spacing: 3);
}
.night,
.night-theme {
}
</style>
