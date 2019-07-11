<template>
  <div>
    <div class="section">
      <h1>Onboarding</h1>
      <p>Documentation for this will have to be redone.</p>

      <div class="row" style="padding-top: 96px; margin-bottom: 96px;">
        <Onboarding
          :steps="steps"
          :skippable="true"
          :currentStep="currentStep"
          :stepLocation="'top'"
          :skipHandler="skipFunc"
          :prevHandler="previousFunc"
          :continueHandler="continueFunc"
          :completeHandler="completeFunc"
        >
          <OnboardingStep slot="1">
            <template slot="title">Getting Started</template>
            <template slot="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
              luctus nibh. Sed quis velit vitae leo sagittis rutrum. In hac
              habitasse platea dictumst. Fusce eget tempus risus, posuere
              tincidunt mauris. Mauris faucibus felis vitae.
            </template>
            <SSProSimulator :username="username" :domain="domain"></SSProSimulator>
          </OnboardingStep>
          <OnboardingStep slot="2">
            <template slot="title">A Few More Things</template>
            <template slot="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              tincidunt convallis felis non dapibus. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Morbi sit amet commodo neque. Aliquam et sem nec velit eleifend
              sollicitudin quis eget ligula.
            </template>
            <SSProSimulator :username="username" :domain="domain"></SSProSimulator>
          </OnboardingStep>
          <OnboardingStep slot="3">
            <template slot="title">Almost There</template>
            <template slot="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis purus id ligula dictum accumsan. Donec non posuere
              neque.
            </template>
            <SSProSimulator :username="username" :domain="domain"></SSProSimulator>
          </OnboardingStep>
          <OnboardingStep slot="4">
            <template slot="title">Getting Started</template>
            <template slot="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
              luctus nibh. Sed quis velit vitae leo sagittis rutrum. In hac
              habitasse platea dictumst. Fusce eget tempus risus, posuere
              tincidunt mauris. Mauris faucibus felis vitae.
            </template>
            <SSProSimulator :username="username" :domain="domain"></SSProSimulator>
          </OnboardingStep>
        </Onboarding>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accordion from "./../components/Accordion.vue";
import Onboarding from "./../components/Onboarding.vue";
import OnboardingStep from "./../components/OnboardingStep.vue";
import SSProSimulator from "./../components/SSProSimulator.vue";

@Component({
  components: {
    Accordion,
    Onboarding,
    OnboardingStep,
    SSProSimulator
  }
})
export default class Onboardings extends Vue {
  currentStep: number = 1;

  steps: Object = [
    { name: "one", complete: false },
    { name: "two", complete: false },
    { name: "three", complete: false },
    { name: "four", complete: false }
  ];

  continueFunc() {
    this.currentStep++;
  }

  skipFunc() {
    this.currentStep++;
  }

  previousFunc() {
    this.currentStep--;
  }

  completeFunc() {
    console.log("complete clicked");
  }

  username = "morganleee";
  icon =
    "https://static-cdn.jtvnw.net/jtv_user_pictures/9dfce03d-25cc-4737-96d2-2ecf6924bebe-profile_image-70x70.jpg";

  domain = "morganleeeeeeeeeee.com";
}
</script>
