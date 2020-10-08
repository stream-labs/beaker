<template>
  <div>
    <div v-if="type === 'basic'">
      <ModalBasic
        :name="modalName"
        :title="title"
        :sub-title="subTitle"
        :text="text"
        :width="width"
        :min-width="minWidth"
        :hide-action-buttons="hideActionButtons"
        v-on="$listeners"
      >
        <slot />
      </ModalBasic>
    </div>

    <div v-if="type === 'subscribe'">
      <ModalSubscribe
        :name="modalName"
        :title="title"
        :sub-title="subTitle"
        :text="text"
        :subscribe-text="subscribeText"
        :subscribe-message="subscribeMessage"
        :notes="notes"
        :width="width"
        :min-width="minWidth"
        :scrollable="scrollable"
        :pro-badge="proBadge"
        :custom-preview="customPreview"
        :button-title="buttonTitle"
        :button-price="buttonPrice"
        :button-variation="buttonVariation"
        :cancel-title="cancelTitle"
        v-on="$listeners"
      >
        <template #preview>
          <slot name="preview" />
        </template>
        <slot />
      </ModalSubscribe>
    </div>

    <div v-if="type === 'redirect'">
      <ModalRedirect
        :name="modalName"
        :title="title"
        :text="text"
        :width="width"
        :min-width="minWidth"
        v-on="$listeners"
      />
    </div>

    <div v-if="type === 'confirmation'">
      <ModalConfirmation
        :name="modalName"
        :sub-title="subTitle"
        :text="text"
        :width="width"
        :min-width="minWidth"
        :confirm-button-text="confirmButtonText"
        :button-variation="buttonVariation"
        v-on="$listeners"
      />
    </div>

    <div v-if="type === 'welcome-prime'">
      <ModalPrime
        :name="modalName"
        :width="width"
        :min-width="minWidth"
        :prime-button-text="primeButtonText"
        :has-prime-close-button="hasPrimeCloseButton"
        v-on="$listeners"
      >
        <slot />
      </ModalPrime>
    </div>

    <div v-if="type === 'prime-intro'">
      <ModalPrimeIntro
        :name="modalName"
        :width="680"
        :min-width="minWidth"
        :prime-button-text="primeButtonText"
        :has-prime-close-button="hasPrimeCloseButton"
        v-on="$listeners"
      >
        <slot />
      </ModalPrimeIntro>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { defineComponent } from 'vue';
import VModal from 'vue-js-modal';
import Button from './Button.vue';
import ModalBasic from './ModalBasic.vue';
import ModalSubscribe from './ModalSubscribe.vue';
import ModalRedirect from './ModalRedirect.vue';
import ModalConfirmation from './ModalConfirmation.vue';
import ModalPrime from './ModalPrime.vue';
import ModalPrimeIntro from './ModalPrimeIntro.vue';

Vue.use(VModal);

@Component({
  components: {
    Button,
    ModalBasic,
    ModalSubscribe,
    ModalRedirect,
    ModalConfirmation,
    ModalPrime,
    ModalPrimeIntro,
  },
})
export default defineComponent({
  @Prop()
  name!: string;

  @Prop({ default: 600 })
  width!: number;

  @Prop({ default: 600 })
  minWidth!: number;

  @Prop()
  scrollable!: boolean;

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

  @Prop()
  cancelTitle!: string;

  @Prop()
  primeButtonText!: string;

  @Prop()
  hasPrimeCloseButton!: boolean;

  @Prop()
  hideActionButtons!: string;

  modalName = '';

  mounted() {
    this.selectName();
  }

  selectName() {
    switch (this.type) {
      case 'basic':
        if (this.name) {
          this.modalName = this.name;
        } else {
          this.modalName = 'modal-basic';
        }
        break;

      case 'subscribe':
        if (this.name) {
          this.modalName = this.name;
        } else {
          this.modalName = 'modal-subscribe';
        }
        break;

      case 'redirect':
        if (this.name) {
          this.modalName = this.name;
        } else {
          this.modalName = 'modal-redirect';
        }
        break;

      case 'confirmation':
        if (this.name) {
          this.modalName = this.name;
        } else {
          this.modalName = 'modal-confirmation';
        }
        break;

      case 'welcome-prime':
        if (this.name) {
          this.modalName = this.name;
        } else {
          this.modalName = 'modal-welcome-prime';
        }
        break;

      case 'prime-intro':
        if (this.name) {
          this.modalName = this.name;
        } else {
          this.modalName = 'modal-prime-intro';
        }
        break;
    }
  }
})
</script>
