<template>
  <div>
    <div class="section">
      <h1>Onboarding</h1>
      <p>Onboarding component - now with all logic outside of component!</p>
    </div>
    <div class="section">
      <h2>Onboarding - Named Steps</h2>
      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
            <code>
import { Onboarding, OnboardingStep } from "streamlabs-beaker"

@Component({
  components: {
    Onboarding,
    OnboardingStep,
  }
})

data() {
  return {
    currentStep: 1,
    steps: [
      { name: &quot;Step One&quot;, complete: false},
      { name: &quot;Step Two&quot;, complete: false},
      { name: &quot;Step Three&quot;, complete: false}
    ]
  }
}

&lt;Onboarding
  :steps=&quot;steps&quot;
  :skippable=&quot;true&quot;
  :currentStep=&quot;currentStep&quot;
  :stepLocation=&quot;'top'&quot;
  :skipHandler=&quot;skipFunc&quot;
  :prevHandler=&quot;previousFunc&quot;
  :continueHandler=&quot;continueFunc&quot;
  :completeHandler=&quot;completeFunc&quot;
&gt;
  &lt;OnboardingStep slot=&quot;1&quot;&gt;
    &lt;div&gt;Slot One&lt;/div&gt;
  &lt;/OnboardingStep&gt;
  &lt;OnboardingStep slot=&quot;2&quot;&gt;
    &lt;div&gt;Slot Two&lt;/div&gt;
  &lt;/OnboardingStep&gt;
  &lt;OnboardingStep slot=&quot;3&quot;&gt;
    &lt;div&gt;Slot Three&lt;/div&gt;
  &lt;/OnboardingStep&gt;
&lt;/Onboarding&gt;


            </code>
          </pre>
        </div>
      </Accordion>
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
            <template slot="title"
              >Getting Started</template
            >
            <template slot="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
              luctus nibh. Sed quis velit vitae leo sagittis rutrum. In hac
              habitasse platea dictumst. Fusce eget tempus risus, posuere
              tincidunt mauris. Mauris faucibus felis vitae.
            </template>
            <SSProSimulator
              :username="username"
              :domain="domain"
            ></SSProSimulator>
          </OnboardingStep>
          <OnboardingStep slot="2">
            <template slot="title"
              >A Few More Things</template
            >
            <template slot="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              tincidunt convallis felis non dapibus. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Morbi sit amet commodo neque. Aliquam et sem nec velit eleifend
              sollicitudin quis eget ligula.
            </template>
            <SSProSimulator
              :username="username"
              :domain="domain"
            ></SSProSimulator>
          </OnboardingStep>
          <OnboardingStep slot="3">
            <template slot="title"
              >Almost There</template
            >
            <template slot="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis purus id ligula dictum accumsan. Donec non posuere
              neque.
            </template>
            <SSProSimulator
              :username="username"
              :domain="domain"
            ></SSProSimulator>
          </OnboardingStep>
          <OnboardingStep slot="4">
            <template slot="title"
              >Getting Started</template
            >
            <template slot="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
              luctus nibh. Sed quis velit vitae leo sagittis rutrum. In hac
              habitasse platea dictumst. Fusce eget tempus risus, posuere
              tincidunt mauris. Mauris faucibus felis vitae.
            </template>
            <SSProSimulator
              :username="username"
              :domain="domain"
            ></SSProSimulator>
          </OnboardingStep>
        </Onboarding>
      </div>

      <div class="row" style="padding-top: 96px; margin-bottom: 96px;">
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
            <code>
import { Onboarding, OnboardingStep } from "streamlabs-beaker"

@Component({
  components: {
    Onboarding,
    OnboardingStep,
  }
})

data() {
  return {
    currentStep: 1,
    steps: [
      { complete: false},
      { complete: false},
      { complete: false}
    ]
  }
}

&lt;Onboarding
  :steps=&quot;steps&quot;
  :skippable=&quot;true&quot;
  :currentStep=&quot;currentStep&quot;
  :stepLocation=&quot;'top'&quot;
  :skipHandler=&quot;skipFunc&quot;
  :prevHandler=&quot;previousFunc&quot;
  :continueHandler=&quot;continueFunc&quot;
  :completeHandler=&quot;completeFunc&quot;
&gt;
  &lt;OnboardingStep slot=&quot;1&quot;&gt;
    &lt;div&gt;Slot One&lt;/div&gt;
  &lt;/OnboardingStep&gt;
  &lt;OnboardingStep slot=&quot;2&quot;&gt;
    &lt;div&gt;Slot Two&lt;/div&gt;
  &lt;/OnboardingStep&gt;
  &lt;OnboardingStep slot=&quot;3&quot;&gt;
    &lt;div&gt;Slot Three&lt;/div&gt;
  &lt;/OnboardingStep&gt;
&lt;/Onboarding&gt;


            </code>
          </pre>
          </div>
        </Accordion>
        <Onboarding
          :steps="stepsTest"
          :skippable="true"
          :currentStep="currentStep"
          :stepLocation="'top'"
          :skipHandler="skipFunc"
          :prevHandler="previousFunc"
          :continueHandler="continueFunc"
          :completeHandler="completeFunc"
        >
          <OnboardingStep slot="1">
            <template slot="title"
              >Getting Started</template
            >
            <template slot="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
              luctus nibh. Sed quis velit vitae leo sagittis rutrum. In hac
              habitasse platea dictumst. Fusce eget tempus risus, posuere
              tincidunt mauris. Mauris faucibus felis vitae.
            </template>
            <SSProSimulator
              :username="username"
              :domain="domain"
            ></SSProSimulator>
          </OnboardingStep>
          <OnboardingStep slot="2">
            <template slot="title"
              >A Few More Things</template
            >
            <template slot="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              tincidunt convallis felis non dapibus. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Morbi sit amet commodo neque. Aliquam et sem nec velit eleifend
              sollicitudin quis eget ligula.
            </template>
            <SSProSimulator
              :username="username"
              :domain="domain"
            ></SSProSimulator>
          </OnboardingStep>
          <OnboardingStep slot="3">
            <template slot="title"
              >Almost There</template
            >
            <template slot="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis purus id ligula dictum accumsan. Donec non posuere
              neque.
            </template>
            <SSProSimulator
              :username="username"
              :domain="domain"
            ></SSProSimulator>
          </OnboardingStep>
          <OnboardingStep slot="4">
            <template slot="title"
              >Getting Started</template
            >
            <template slot="desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
              luctus nibh. Sed quis velit vitae leo sagittis rutrum. In hac
              habitasse platea dictumst. Fusce eget tempus risus, posuere
              tincidunt mauris. Mauris faucibus felis vitae.
            </template>
            <SSProSimulator
              :username="username"
              :domain="domain"
            ></SSProSimulator>
          </OnboardingStep>
        </Onboarding>
      </div>
      <table class="docs-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>steps</td>
            <td>Object</td>
            <td>null</td>
            <td><code>[{name: "Step Name", complete: Boolean}]</code></td>
          </tr>
          <tr>
            <td>stepLocation</td>
            <td>string</td>
            <td>'left'</td>
            <td>
              Location of Progress Bar: <code>left</code> or <code>top</code>
            </td>
          </tr>
          <tr>
            <td>currentStep</td>
            <td>number</td>
            <td>null</td>
            <td>The number of the step you are on</td>
          </tr>
          <tr>
            <td>completeHandler</td>
            <td>Function</td>
            <td>null</td>
            <td>
              Function to perform when <code>complete</code> button is clicked
            </td>
          </tr>
          <tr>
            <td>continueHandler</td>
            <td>Function</td>
            <td>null</td>
            <td>
              Function to perform when <code>continue</code> button is clicked
            </td>
          </tr>
          <tr>
            <td>skipHandler</td>
            <td>Function</td>
            <td>null</td>
            <td>Function to perform when <code>skip</code> is clicked</td>
          </tr>
          <tr>
            <td>previousHandler</td>
            <td>Function</td>
            <td>null</td>
            <td>
              Function to perform when <code>previous</code> button is clicked
            </td>
          </tr>
          <tr>
            <td>skippable</td>
            <td>boolean</td>
            <td>null</td>
            <td>make steps skippable</td>
          </tr>
          <tr>
            <td>disableControls</td>
            <td>boolean</td>
            <td>false</td>
            <td>to disable controls</td>
          </tr>
        </tbody>
      </table>
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
    { name: "Donations", complete: false },
    { name: "Cloudbot", complete: false },
    { name: "Streamlabs OBS", complete: false },
    { name: "Alert Box", complete: false }
  ];

  stepsTest: Object = [
    { complete: false },
    { complete: false },
    { complete: false },
    { complete: false }
  ];

  continueFunc() {
    this.stepsTest[this.currentStep - 1].complete = true;
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
