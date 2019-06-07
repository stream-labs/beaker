<template>
  <div>
    <div v-if="type === 'basic'">
      <ModalBasic
        :name="modalName"
        :title="title"
        :subTitle="subTitle"
        :text="text"
        :width="width"
        :minWidth="minWidth"
        v-on="$listeners"
      >
        <slot></slot>
      </ModalBasic>
    </div>

    <div v-if="type === 'subscribe'">
      <ModalSubscribe
        :name="modalName"
        :title="title"
        :subTitle="subTitle"
        :text="text"
        :subscribeText="subscribeText"
        :subscribeMessage="subscribeMessage"
        :notes="notes"
        :width="width"
        :minWidth="minWidth"
        :proBadge="proBadge"
        :customPreview="customPreview"
        :buttonTitle="buttonTitle"
        :buttonPrice="buttonPrice"
        :buttonVariation="buttonVariation"
        @click="$emit('subscribe-click')"
        v-on="$listeners"
      >
        <template #preview>
          <slot name="preview"></slot>
        </template>
        <slot></slot>
      </ModalSubscribe>
    </div>

    <div v-if="type === 'redirect'">
      <ModalRedirect
        :name="modalName"
        :title="title"
        :text="text"
        :width="width"
        :minWidth="minWidth"
        v-on="$listeners"
      ></ModalRedirect>
    </div>

    <div v-if="type === 'confirmation'">
      <ModalConfirmation
        :name="modalName"
        :subTitle="subTitle"
        :text="text"
        :width="width"
        :minWidth="minWidth"
        @confirm="$emit('confirm')"
        :confirmButtonText="confirmButtonText"
        :buttonVariation="buttonVariation"
        v-on="$listeners"
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
  @Prop()
  name!: string;

  @Prop({ default: 600 })
  width!: number;

  @Prop({ default: 600 })
  minWidth!: number;

  @Prop()
  type!: string;

  @Prop()
  title!: string;

  @Prop()
  subTitle!: string;

  @Prop()
  text!: string;

  @Prop()
  subscribeText!: string;

  @Prop()
  subscribeMessage!: string;

  @Prop()
  notes!: string;

  @Prop()
  proBadge!: boolean;

  @Prop()
  customPreview!: boolean;

  @Prop()
  confirmButtonText!: string;

  @Prop()
  buttonVariation!: string;

  @Prop()
  buttonTitle!: string;

  @Prop()
  buttonPrice!: string;

  modalName: string = "";

  mounted() {
    this.selectName();
  }

  selectName() {
    switch (this.type) {
      case "basic":
        if (this.name) {
          this.modalName = this.name;
        } else {
          this.modalName = "modal-basic";
        }
        break;

      case "subscribe":
        if (this.name) {
          this.modalName = this.name;
        } else {
          this.modalName = "modal-subscribe";
        }
        break;

      case "redirect":
        if (this.name) {
          this.modalName = this.name;
        } else {
          this.modalName = "modal-redirect";
        }
        break;

      case "confirmation":
        if (this.name) {
          this.modalName = this.name;
        } else {
          this.modalName = "modal-confirmation";
        }
        break;
    }
  }
}
</script>
