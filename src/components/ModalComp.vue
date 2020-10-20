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
        :clickToClose="clickToClose"
        v-bind="$attrs"
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
        v-bind="$attrs"
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
        v-bind="$attrs"
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
        v-bind="$attrs"
      />
    </div>

    <div v-if="type === 'welcome-prime'">
      <ModalPrime
        :name="modalName"
        :width="width"
        :min-width="minWidth"
        :prime-button-text="primeButtonText"
        :has-prime-close-button="hasPrimeCloseButton"
        v-bind="$attrs"
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
        v-bind="$attrs"
      >
        <slot />
      </ModalPrimeIntro>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import ModalBasic from './ModalBasic.vue';
import ModalSubscribe from './ModalSubscribe.vue';
import ModalRedirect from './ModalRedirect.vue';
import ModalConfirmation from './ModalConfirmation.vue';
import ModalPrime from './ModalPrime.vue';
import ModalPrimeIntro from './ModalPrimeIntro.vue';

export default defineComponent({
  components: {
    ModalBasic,
    ModalSubscribe,
    ModalRedirect,
    ModalConfirmation,
    ModalPrime,
    ModalPrimeIntro,
  },

  props: {
    name: {
      type: String,
    },

    width: {
      type: Number,
      default: 600,
    },

    minWidth: {
      type: Number,
      default: 600,
    },

    scrollable: {
      type: Boolean,
    },

    type: {
      type: String,
      default: 'basic',
    },

    title: {
      type: String,
    },

    subTitle: {
      type: String,
    },

    text: {
      type: String,
    },

    subscribeText: {
      type: String,
    },

    subscribeMessage: {
      type: String,
    },

    notes: {
      type: String,
    },

    proBadge: {
      type: Boolean,
    },

    customPreview: {
      type: Boolean,
    },

    confirmButtonText: {
      type: String,
    },

    buttonVariation: {
      type: String,
    },

    buttonTitle: {
      type: String,
    },

    buttonPrice: {
      type: String,
    },

    cancelTitle: {
      type: String,
    },

    primeButtonText: {
      type: String,
    },

    hasPrimeCloseButton: {
      type: Boolean,
    },

    hideActionButtons: {
      type: String,
    },
  },

  setup(props) {
    const modalName = ref('');

    function selectName() {
      modalName.value = props.name || `modal-${props.type}`;
    }

    onMounted(() => {
      selectName();
    });

<<<<<<< HEAD
    return {
      modalName,
    };
  },

});
=======
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

  @Prop()
  clickToClose!: boolean;

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

      case "welcome-prime":
        if (this.name) {
          this.modalName = this.name;
        } else {
          this.modalName = "modal-welcome-prime";
        }
        break;

      case "prime-intro":
        if (this.name) {
          this.modalName = this.name;
        } else {
          this.modalName = "modal-prime-intro";
        }
        break;
    }
  }
}
>>>>>>> a7a6790c6cbb7e7e472be867d8f90c9d015435ba
</script>
