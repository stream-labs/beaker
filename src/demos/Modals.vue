<template>
  <div>
    <Button
      :variation="'default'"
      :title="'Default'"
      @click="showModal = true"
    >
    </Button>
    <Button
      :variation="'default'"
      :title="'Default'"
      @click="showModal2 = true"
    >
    </Button>
    <Button
      :variation="'default'"
      :title="'Default'"
      @click="showModal3 = true"
    >
    </Button>
    <Modal
      v-if="showModal"
      @close="showModal = false"
    >
      <h3
        slot="title"
        class="title"
      >UI Modal</h3>
      <h4
        slot="sub-title"
        class="sub-title"
      >Subtitle</h4>
      <p
        slot="text"
        class="text"
      >Save combining multiple windows like Streamlabels, Twitch Chat, Twitch Dashboard, Video, Streamlabs Dashboard, OBS etc into a live view.</p>
    </Modal>
    <Modal
      v-if="showModal2"
      @close="showModal2 = false"
    >
      <h3
        slot="title"
        class="title"
      >Streamlabs<p slot="mode">Pro</p>
      </h3>
      <h4
        slot="sub-title"
        class="sub-title"
      >Never pay for GIFs and effects again!</h4>
      <div slot=donate-done>
        <p>galazy83 donated $50.00!</p>
        <p>Thanks for the stream. Go CivRyan!</p>
      </div>
      <p slot="text">Get unlimited free GIFs and effects that will show up on all alerts on all channels! You’ll also get a fancy ‘Pro’ badge next to your username on your donations.</p>

      <div slot="button-subscribe">
        <Button
          :variation="'subscribe'"
          :title="'Subscribe with PayPal'"
          :icon="'unitpay'"
          :price="'$5.99/mo'"
        >
        </Button>
      </div>
      <p slot="notes">You may cancel your subscription at any time.</p>

    </Modal>
    <Modal
      v-if="showModal3"
      @close="showModal3 = false"
    >
      <h3
        slot="title"
        class="title"
      >3</h3>
      <h4
        slot="sub-title"
        class="sub-title"
      >Subtitle</h4>
      <p
        slot="text"
        class="text"
      >Save combining multiple windows like Streamlabels, Twitch Chat, Twitch Dashboard, Video, Streamlabs Dashboard, OBS etc into a live view.</p>
      <div>
        <Button
          :variation="'default'"
          :title="'Default'"
        >
        </Button>

        <Button
          :variation="'action'"
          :title="'Action'"
        >
        </Button>

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
  showModal = true
  showModal2 = false
  showModal3 = false
}
</script>


<style lang="less" scoped>
@import './../styles/Imports';
// .title {
//   .weight(@bold);
// }
// .sub-title {
//   .weight(@bold);
// }
// .text {
//   font-size: 14px;
//   line-height: 21px;
// }
</style>
