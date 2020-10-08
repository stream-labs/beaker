<template>
  <modal
    :name="name"
    classes="s-modal-wrapper"
    :width="width"
    :min-width="minWidth"
    height="auto"
    :adaptive="true"
    v-on="$listeners"
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
      v-on="$listeners"
    >
      <slot />
    </welcome-prime>
  </modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { defineComponent } from 'vue';
import WelcomePrime from './WelcomePrime.vue';

@Component({
  components: {
    WelcomePrime,
  },
})
export default defineComponent({
  @Prop({ default: 'modal-welcome-prime' })
  name!: string;

  @Prop()
  width!: number;

  @Prop()
  minWidth!: number;

  @Prop({ default: false })
  hasPrimeCloseButton!: boolean;

  @Prop({ default: 'Continue' })
  primeButtonText!: string;
})
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
