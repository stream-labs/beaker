<template>
  <div class="s-onboarding-step">
    <h1>
      <slot name="title"></slot>
    </h1>
    <p>
      <slot name="desc"></slot>
    </p>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "./../components/Button.vue";

@Component({
  components: {
    Button
  }
})
export default class OnboardingStep extends Vue {
  @Prop()
  title!: string;

  @Prop()
  desc!: string;
}
</script>

<style lang="less">
@import (reference) "./../styles/Imports";
.s-onboarding-step {
  .margin-top(4);
}
</style>
