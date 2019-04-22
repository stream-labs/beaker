<template>
  <div>
    <div v-if="type === 'basic'">
      <ModalBasic
        :name="SelectName"
        :title="title"
        :subTitle="subTitle"
        :text="text"
        :width="width"
        :minWidth="minWidth"
      ></ModalBasic>
    </div>

    <div v-if="type === 'subscribe'">
      <ModalSubscribe
        :name="SelectName"
        :title="title"
        :subTitle="subTitle"
        :text="text"
        :subscribeText="subscribeText"
        :subscribeMessage="subscribeMessage"
        :notes="notes"
        :width="width"
        :minWidth="minWidth"
      ></ModalSubscribe>
    </div>

    <div v-if="type === 'redirect'">
      <ModalRedirect
        :name="SelectName"
        :title="title"
        :text="text"
        :width="width"
        :minWidth="minWidth"
      ></ModalRedirect>
    </div>

    <div v-if="type === 'confirmation'">
      <ModalConfirmation
        :name="SelectName"
        :subTitle="subTitle"
        :text="text"
        :width="width"
        :minWidth="minWidth"
        @confirm="$emit('confirm')"
        :confirmButtonText="confirmButtonText"
        :buttonVariation="buttonVariation"
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
  confirmButtonText!: string;

  @Prop()
  buttonVariation!: string;

  get SelectName() {
    switch (this.type) {
      case "basic":
        if (this.name) {
          return this.name;
        } else {
          return (this.name = "modal-basic");
        }
        break;

      case "subscribe":
        if (this.name) {
          return this.name;
        } else {
          return (this.name = "modal-subscribe");
        }
        break;

      case "redirect":
        if (this.name) {
          return this.name;
        } else {
          return (this.name = "modal-redirect");
        }
        break;

      case "confirmation":
        if (this.name) {
          return this.name;
        } else {
          return (this.name = "modal-confirmation");
        }
        break;
    }
  }
}
</script>
