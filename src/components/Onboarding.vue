<template>
  <div class="s-onboarding">
    <div class="s-onboarding-main" :class="location">
      <div class="s-onboarding-progress" :class="location">
        <div class="s-onboarding-progress__line" :class="location"></div>
        <div
          v-for="(key, index) in steps"
          :key="index"
          class="s-bullet"
          :class="{ 'current-step': currentStepStyle(index) }"
        >
          <i :class="{ 'icon-check-mark': checkmarkStyle(index) }"></i>
        </div>
      </div>
      <div class="s-onboarding-body">
        <slot :name="currentStep"></slot>
      </div>
    </div>
    <div class="s-onboarding-footer">
      <div class="s-previousStep">
        <p v-show="currentStep !== 1" @click="previousStep">Back</p>
      </div>
      <div class="s-nextStep">
        <p v-if="skip  && currentStep !== stepObjects.length" @click="nextStep">Skip</p>
        <Button
          v-if="currentStep !== steps"
          :variation="'action'"
          :title="'Continue'"
          @click="continueProcess"
        ></Button>
        <Button v-if="isCompleted" :variation="'action'" :title="'Complete'" @click="onComplete"></Button>
        <Button
          v-if="!isCompleted && currentStep === steps"
          :variation="'default'"
          :title="'continue'"
        ></Button>
      </div>
    </div>
  </div>
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
  steps!: number;

  @Prop({ default: "left" })
  stepLocation!: string;

  @Prop()
  current!: number;

  @Prop()
  continueFunc!: Function;

  @Prop()
  completeFunc!: Function;

  @Prop()
  skip!: boolean;

  currentStep: number = this.current;
  stepObjects: any[] = [];

  get countStepObjects() {
    for (let i = 0; i < this.steps; i++) {
      this.stepObjects.push({ isChecked: false });
    }
    return;
  }

  get isCompleted() {
    let checkedCount = 0;
    for (let i = 0; i < this.steps; i++) {
      if (this.stepObjects[i].isChecked) {
        checkedCount++;
      }
    }
    return this.currentStep === this.steps && checkedCount === this.steps - 1;
  }

  get location() {
    if (this.stepLocation === "left") return "s-onboarding__left";
    if (this.stepLocation === "top") return "s-onboarding__top";
  }

  currentStepStyle(index) {
    return index + 1 === this.currentStep;
  }

  checkmarkStyle(index) {
    return this.stepObjects[index].isChecked;
  }

  nextStep() {
    if (this.currentStep < this.steps) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
      this.removeCheckmark();
    }
  }

  addCheckmark() {
    this.stepObjects[this.currentStep - 1].isChecked = true;
  }

  removeCheckmark() {
    this.stepObjects[this.currentStep - 1].isChecked = false;
  }

  continueProcess() {
    this.addCheckmark();
    this.nextStep();
    this.continueFunc();
  }

  onComplete() {
    this.completeFunc();
  }

  beforeMount() {
    this.countStepObjects;
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";

.s-onboarding {
  display: flex;
  flex-direction: column;
  z-index: 10;
  width: 800px;

  .s-onboarding-main {
    display: flex;

    &.s-onboarding__top {
      flex-direction: column;
    }

    &.s-onboarding__left {
      flex-direction: row;
    }
  }

  .s-onboarding-progress {
    display: flex;
    position: relative;
    justify-content: space-between;
    overflow: hidden;

    &.s-onboarding__left {
      flex-direction: column;
      min-width: 24px;
      .margin-right(6);
      .padding-top(7);
      height: 400px;
    }

    &.s-onboarding__top {
      flex-direction: row;
      width: 400px;
      min-height: 24px;
    }
  }

  .s-onboarding-progress__line {
    background: @light-3;
    z-index: 1;
    position: absolute;

    &.s-onboarding__left {
      width: 4px;
      height: 100%;
      left: 10px;
    }

    &.s-onboarding__top {
      width: 100%;
      height: 4px;
      top: 10px;
    }
  }

  .s-bullet {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: @light-3;
    border-radius: 50%;
    z-index: 10;
    .transition();

    > i {
      font-size: 12px;
      color: @light-1;
    }

    &.s-onboarding__top {
      .margin-bottom(5);
    }
  }

  .s-bullet.current-step {
    background-color: @teal;
  }

  .s-onboarding-body {
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
}

.night,
.night-theme {
  .s-onboarding {
    display: flex;
    flex-direction: column;
    z-index: 10;
    width: 800px;

    .s-onboarding-progress__line {
      background: @dark-2;
    }

    .s-bullet {
      background-color: @dark-2;

      > i {
        color: @light-5;
      }
    }

    .s-bullet.current-step {
      background-color: @light-2;
    }

    .s-onboarding-footer {
      border-top: 1px solid @dark-5;
    }
  }
}
</style>
