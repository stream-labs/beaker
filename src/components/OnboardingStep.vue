<template>
  <div class="s-onboarding-step">
    <h1>
      <slot name="title" />
    </h1>
    <p>
      <slot name="desc" />
    </p>
    <div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { defineComponent } from 'vue';
import Button from './Button.vue';

@Component({
  components: {
    Button,
  },
})
export default defineComponent({
  @Prop()
  title!: string;

  @Prop()
  desc!: string;
})
</script>

<style lang="less">
@import (reference) "./../styles/Imports";
.s-onboarding-step {
  .margin-top(4);
}
</style>
