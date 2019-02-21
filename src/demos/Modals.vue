<template>
  <div>
    <Button
      :variation="'default'"
      :title="'modal'"
      @click="showModal = true"
    >
    </Button>
    <Button
      :variation="'default'"
      :title="'modal donate'"
      @click="showModal2 = true"
    >
    </Button>
    <Button
      :variation="'default'"
      :title="'modal redirect'"
      @click="showModal3 = true"
    >
    </Button>
    <Modal
      v-if="showModal"
      :modalType="'normal'"
      @close="showModal = false"
    >
      <div slot="normal-upper">
        <h1 class="title">UI Modal</h1>
        <h2 class="sub-title">Subtitle</h2>
        <p class="text">Save combining multiple windows like Streamlabels, Twitch Chat, Twitch Dashboard, Video, Streamlabs Dashboard, OBS etc into a live view.</p>
      </div>
    </Modal>

    <Modal
      v-if="showModal2"
      :modalType="'donate'"
      @close="showModal2 = false"
    >
      <div slot="donate">
        <h1 class="title">Streamlabs<span class="plan">Pro</span>
        </h1>
        <h2 class="sub-title">Never pay for GIFs and effects again!</h2>
        <div class="donate-box">
          <p class="donate-amount ">galazy83 donated $50.00!</p>
          <p class="donate-message">Thanks for the stream. Go CivRyan!</p>
        </div>
        <p class="text">Get unlimited free GIFs and effects that will show up on all alerts on all channels! You’ll also get a fancy ‘Pro’ badge next to your username on your donations.</p>
        <Button
          :variation="'subscribe'"
          :title="'Subscribe with PayPal'"
          :icon="'unitpay'"
          :price="'$5.99/mo'"
        >
        </Button>
        <p class="notes">You may cancel your subscription at any time.</p>
      </div>

    </Modal>
    <Modal
      v-if="showModal3"
      :modalType="'redirect'"
      @close="showModal3 = false"
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

@Component({
  components: {
    Modal,
    Button,
  },
})
export default class Modals extends Vue {
  showModal: Boolean = false
  showModal2: Boolean = true
  showModal3: Boolean = false
  modalType: string = ''
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
.donate-box {
  text-align: center;
  background: #efefef;
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
