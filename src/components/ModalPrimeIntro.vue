<template>
  <modal
    :name="name"
    classes="s-modal-wrapper"
    :width="width"
    :min-width="minWidth"
    height="auto"
    :adaptive="true"
    v-on="$listeners"
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
      v-on="$listeners"
    >
      <slot />
    </PrimeIntro>
  </modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { defineComponent } from 'vue';
import PrimeIntro from './PrimeIntro.vue';

@Component({
  components: { PrimeIntro },
})
export default defineComponent({
  @Prop({ default: 'modal-prime-intro' })
  name!: string;

  @Prop()
  width!: number;

  @Prop()
  minWidth!: number;

  @Prop({ default: false })
  hasPrimeCloseButton!: boolean;

  @Prop({ default: 'Join Prime' })
  primeButtonText!: string;
})
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
