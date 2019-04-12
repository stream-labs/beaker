<template>
  <div>
    <div class="s-onboarding-main">
      <div class="s-bullets">
        <span
          v-for="(key,index) in steps.length"
          :key="index"
          class="s-bullet"
          :class="{'current-step': index + 1 === currentStep, 'icon-check-mark': steps[index + 1] === currentStep && isChecked || steps[index + 1] < currentStep}"
        ></span>
      </div>
      <div class="s-body">
        <slot :name="currentStep"></slot>
      </div>
    </div>
    <div class="s-onboarding-footer">
      <div class="s-previousStep">
        <p v-show="currentStep !== 1" @click="previousStep">Back</p>
      </div>
      <div class="s-nextStep">
        <p @click="nextStep">Skip</p>
        <Button :variation="'default'" :title="'Continue'" @click="continueProcess"></Button>
      </div>
    </div>
  </div>
  <!-- <modal
    name="new-feature"
    :adaptive="true"
    :width="'100%'"
    :height="'auto'"
    classes="s-overlay__wrapper"
    :clickToClose="true"
    @opened="opened"
  >
    <div slot="top-right" class="s-overlay__icon">
      <span class="s-icon icon-close" @click="onDismiss"></span>
    </div>
    <div class="s-overlay__container" :class="containerMq">
      <div class="s-overlay__body">
        <p class="s-overlay__label">{{ label }}</p>
        <h1 class="s-overlay__title">{{ title }}</h1>
        <p class="s-overlay__text">
          <slot></slot>
        </p>
        <div class="s-overlay-links">
          <Button
            :size="'large'"
            :variation="'action'"
            :tag="buttonTag"
            :to="buttonRoute"
            :href="buttonHref"
            :target="buttonTarget"
            :title="buttonTitle"
            @click.native="onPrimaryAction"
          ></Button>
          <router-link
            class="s-overlay__link"
            :to="dismissRoute"
            @click.native="onDismiss"
          >{{ dismissText }}</router-link>
        </div>
      </div>

      <div class="s-overlay__image-block" :class="overlay__imageBlockMq">
        <img v-if="isImage" :src="overlayImage" class="s-overlay__image">
        <video controls="false" autoplay loop v-if="!isImage" class="s-overlay__image">
          <source :src="overlayImage">Environment does not support video playback
        </video>
      </div>
    </div>
  </modal>-->
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import OnboardingStep from "./../components/OnboardingStep.vue";
import Button from "./../components/Button.vue";

@Component({
  components: {
    OnboardingStep,
    Button
  }
})
export default class Onboarding extends Vue {
  @Prop()
  steps!: any[];

  @Prop()
  current!: number;

  @Prop()
  callback!: Function;

  currentStep: number = this.current;

  isChecked: boolean = false;

  mounted() {
    this.currentTop;
  }

  get currentTop() {
    if (this.currentStep > this.steps.length || this.currentStep < 0) {
      return (this.currentStep = 1);
    }
  }

  nextStep() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }

  previousStep() {
    this.isChecked = false;
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  checkmark() {
    this.isChecked = true;
  }

  continueProcess() {
    this.callback();
    this.checkmark();
    this.nextStep();
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.s-onboarding-main {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.s-bullets {
  display: flex;
  flex-direction: column;
  position: relative;
  .margin-right(6);
}

.s-bullet {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: @dark-2;
  border-radius: 50%;
  z-index: 10;
  .margin-bottom(4);
  .transition();
}

.s-bullet:last-child {
  .margin-bottom(0);
}

.s-bullet.current-step {
  background: yellowgreen;
}

.s-bullets::before {
  content: "";
  width: 2px;
  background: @dark-2;
  position: absolute;
  top: 0;
  bottom: 5px;
  left: 11px;
}

.s-body {
  .transition();
}

.s-onboarding-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid @light-3;
  .padding-top(3);
  .margin-top(5);
  p {
    text-decoration: underline;
    .margin(0);
    cursor: pointer;
  }
  button {
    cursor: pointer;
  }
}

.s-nextStep {
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    .margin-right(2);
  }
}

.night,
.night-there {
  .s-bullet.current-step {
    background: @white;
  }
  .s-onboarding-footer {
    border-top: 1px solid @dark-5;
  }
}
</style>
