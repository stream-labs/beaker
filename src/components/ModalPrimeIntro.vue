<template>
  <modal
    :name="name"
    classes="s-modal-wrapper"
    :width="width"
    :min-width="minWidth"
    height="auto"
    :adaptive="true"
    v-bind="$attrs"
    :scrollable="true"
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
    <PrimeIntro
      :prime-button-text="primeButtonText"
      v-bind="$attrs"
    >
      <slot />
    </PrimeIntro>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PrimeIntro from './PrimeIntro.vue';

export default defineComponent({
  components: { PrimeIntro },

  props: {
    name: {
      type: String,
      default: 'modal-prime-intro',
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
      default: 'Join Prime',
    },
  },
});
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.modal-prime__close {
  position: absolute;
  top: 26px;
  right: 30px;
  z-index: 100;

  .icon-close {
    cursor: pointer;
    color: @white;
  }
}
</style>
