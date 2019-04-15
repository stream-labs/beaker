<template>
  <div class="s-onboarding-wrapper">
    <div class="s-bullets">
      <span
        v-for="(key,index) in steps"
        :key="index"
        class="s-bullet"
        :class="[{'current-step': currentStepStyle(index), 'icon-check-mark': checkmarkStyle(index)}]"
      ></span>
    </div>
    <div class="s-onboarding-main">
      <div class="s-onboarding-body">
        <slot :name="currentStep"></slot>
      </div>
      <div class="s-onboarding-footer">
        <div class="s-previousStep">
          <p v-show="currentStep !== 1" @click="previousStep">Back</p>
        </div>
        <div class="s-nextStep">
          <p v-if="skip" @click="nextStep">Skip</p>
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

  beforeMount() {
    this.countStepObjects;
  }

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
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.s-onboarding-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.s-onboarding-main {
  width: 800px;
  height: auto;
}

.s-bullets {
  display: flex;
  flex-direction: column;
  position: relative;
  .margin-top(6);
  .margin-right(6);
}

.s-bullet {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: @dark-2;
  border-radius: 50%;
  z-index: 10;
  .margin-bottom(5);
  .transition();
  text-align: center;
  vertical-align: middle;
  line-height: 24px;
}

.s-bullet:last-child {
  .margin-bottom(0);
}

.s-bullet.current-step {
  background: @teal;
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
