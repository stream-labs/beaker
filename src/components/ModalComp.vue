<template>
  <div>
    <div v-if="modalType === 'basic'">
      <ModalBasic
        :title="modalTitle"
        :subTitle="modalsubTitle"
        :text="modalText"
        :width="modalWidth"
        :minWidth="modalMinWidth"
      ></ModalBasic>
    </div>

    <div v-if="modalType === 'subscribe'">
      <ModalSubscribe
        :title="modalTitle"
        :subTitle="modalsubTitle"
        :text="modalText"
        :subscribeText="modalSubscribeText"
        :subscribeMessage="modalSubscribeMessage"
        :notes="modalNotes"
        :width="modalWidth"
        :minWidth="modalMinWidth"
      ></ModalSubscribe>
    </div>

    <div v-if="modalType === 'redirect'">
      <ModalRedirect
        :title="modalTitle"
        :text="modalText"
        :width="modalWidth"
        :minWidth="modalMinWidth"
      ></ModalRedirect>
    </div>

    <div v-if="modalType === 'confirmation'">
      <ModalConfirmation
        :subTitle="modalsubTitle"
        :text="modalText"
        :width="modalWidth"
        :minWidth="modalMinWidth"
        @confirm="$emit('confirm')"
        :confirm-button-text="confirmButtonText"
      ></ModalConfirmation>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "./../components/Button.vue";
import ModalBasic from "./../components/ModalBasic.vue";
import ModalSubscribe from "./../components/ModalSubscribe.vue";
import ModalRedirect from "./../components/ModalRedirect.vue";
import ModalConfirmation from "./../components/ModalConfirmation.vue";
import VModal from "vue-js-modal";

Vue.use(VModal);

@Component({
  components: {
    Button,
    ModalBasic,
    ModalSubscribe,
    ModalRedirect,
    ModalConfirmation
  }
})
export default class ModalComp extends Vue {
  @Prop({ default: 600 })
  width!: number;

  modalWidth: number = this.width;

  @Prop({ default: 600 })
  minWidth!: number;

  modalMinWidth: number = this.minWidth;

  @Prop()
  type!: string;

  modalType: string = this.type;

  @Prop()
  title!: string;

  modalTitle: string = this.title;

  @Prop()
  subTitle!: string;

  modalsubTitle: string = this.subTitle;

  @Prop()
  text!: string;

  modalText: string = this.text;

  @Prop()
  subscribeText!: string;

  modalSubscribeText: string = this.subscribeText;

  @Prop()
  subscribeMessage!: string;

  modalSubscribeMessage: string = this.subscribeMessage;

  @Prop()
  notes!: string;

  modalNotes: string = this.notes;

  @Prop({ default: 'Confirm' })
  confirmButtonText!: string;
}
</script>
