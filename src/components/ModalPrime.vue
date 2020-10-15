<template>
  <modal
    :name="name"
    classes="s-modal-wrapper"
    :width="width"
    :min-width="minWidth"
    height="auto"
    :adaptive="true"
    v-bind="$attrs"
  >
    <div
      class="modal-prime__close"
      v-if="hasPrimeCloseButton"
    >
      <i
        class="icon-close"
        @click="$modal.hide(name)"
      />
    </div>
    <welcome-prime
      :prime-button-text="primeButtonText"
      v-bind="$attrs"
    >
      <slot />
    </welcome-prime>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WelcomePrime from './WelcomePrime.vue';

export default defineComponent({
  components: {
    WelcomePrime,
  },

  props: {
    name: {
      type: String,
      default: 'modal-welcome-prime',
    },

    width: {
      type: Number,
    },

    minWidth: {
      type: Number,
    },

    hasPrimeCloseButton: {
      type: Boolean,
      default: false,
    },

    primeButtonText: {
      type: String,
      default: 'Continue',
    },
  },
});
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.modal-prime__close {
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 100;

  .icon-close {
    cursor: pointer;
    color: @light-5;
  }
}
</style>
