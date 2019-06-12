<template>
  <div>
    <div class="section">
      <h1>Onboarding</h1>
      <p>Onboarding component</p>
      <pre><code>import { Onboarding } from 'streamlabs-beaker';

components: {
  NewFeatureOverlay
}</code></pre>
    </div>

    <div class="section">
      <h2>Onboarding</h2>
      <p>Used for onboarding.</p>
      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;Onboarding :steps=&quot;4&quot; :current=&quot;1&quot; :skip=&quot;true&quot; :continueFunc=&quot;continue&quot; :completeFunc=&quot;complete&quot;&gt;
  &lt;OnboardingStep slot=&quot;1&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;Setup Donations&lt;/template&gt;
    &lt;template slot=&quot;desc&quot;&gt;Connect your Paypal account&lt;/template&gt;
    &lt;SSProSimulator :username=&quot;username&quot; :domain=&quot;domain&quot;&gt;&lt;/SSProSimulator&gt;
  &lt;/OnboardingStep&gt;
  &lt;OnboardingStep slot=&quot;2&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;Enable Cloudbot&lt;/template&gt;
    &lt;template
      slot=&quot;desc&quot;
    &gt;Streamlabs Cloudbot is a chatbot that provides entertainment and moderation features for your stream.&lt;/template&gt;
    &lt;SSProSimulator :username=&quot;username&quot; :domain=&quot;domain&quot;&gt;&lt;/SSProSimulator&gt;
  &lt;/OnboardingStep&gt;
  &lt;OnboardingStep slot=&quot;3&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;Let’s setup your custom streamer website&lt;/template&gt;
    &lt;template slot=&quot;desc&quot;&gt;This is where your viewers will go to engage with you.&lt;/template&gt;
    &lt;SSProSimulator :username=&quot;username&quot; :domain=&quot;domain&quot;&gt;&lt;/SSProSimulator&gt;
  &lt;/OnboardingStep&gt;
  &lt;OnboardingStep slot=&quot;4&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;Setup your custom Streamer Website&lt;/template&gt;
    &lt;template slot=&quot;desc&quot;&gt;1. Choose Your Layout&lt;/template&gt;
    &lt;SSProSimulator :username=&quot;username&quot; :domain=&quot;domain&quot;&gt;&lt;/SSProSimulator&gt;
  &lt;/OnboardingStep&gt;
&lt;/Onboarding&gt;</code></pre>
        </div>
      </Accordion>

      <Onboarding
        :steps="4"
        :stepLocation="'top'"
        :current="1"
        :skip="true"
        :continueFunc="continueFunc"
        :completeFunc="completeFunc"
      >
        <OnboardingStep slot="1">
          <template slot="title"
            >Review setup 1</template
          >
          <template slot="desc"
            >Your custom Creator Website is almost ready. To use this custom
            theme and domain, finish subscribing to pro and your new website
            will be live within 1 hour.</template
          >
          <SSProSimulator
            :username="username"
            :domain="domain"
          ></SSProSimulator>
        </OnboardingStep>
        <OnboardingStep slot="2">
          <template slot="title"
            >Review setup 2</template
          >
          <template slot="desc"
            >Your custom Creator Website is almost ready. To use this custom
            theme and domain, finish subscribing to pro and your new website
            will be live within 1 hour.</template
          >
          <SSProSimulator
            :username="username"
            :domain="domain"
          ></SSProSimulator>
        </OnboardingStep>
        <OnboardingStep slot="3">
          <template slot="title"
            >Review setup 3</template
          >
          <template slot="desc"
            >Your custom Creator Website is almost ready. To use this custom
            theme and domain, finish subscribing to pro and your new website
            will be live within 1 hour.</template
          >
          <SSProSimulator
            :username="username"
            :domain="domain"
          ></SSProSimulator>
        </OnboardingStep>
        <OnboardingStep slot="4">
          <template slot="title"
            >Review setup 4</template
          >
          <template slot="desc"
            >Your custom Creator Website is almost ready. To use this custom
            theme and domain, finish subscribing to pro and your new website
            will be live within 1 hour.</template
          >
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
          <th>Props</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>steps</td>
          <td>number</td>
          <td>null</td>
          <td>total number of steps to display</td>
        </tr>
        <tr>
          <td>current</td>
          <td>number</td>
          <td>null</td>
          <td>current step to display</td>
        </tr>
        <tr>
          <td>skip</td>
          <td>boolean</td>
          <td>null</td>
          <td>choose if you display skip menu</td>
        </tr>
        <tr>
          <td>continueFunc</td>
          <td>function</td>
          <td>null</td>
          <td>Function to call out when you click continue button</td>
        </tr>
        <tr>
          <td>completeFunc</td>
          <td>function</td>
          <td>null</td>
          <td>Function to call out when you click complete button</td>
        </tr>
      </tbody>
    </table>
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
  continueFunc() {
    console.log("continue");
  }

  completeFunc() {
    console.log("complete");
  }

  username = "morganleee";
  icon =
    "https://static-cdn.jtvnw.net/jtv_user_pictures/9dfce03d-25cc-4737-96d2-2ecf6924bebe-profile_image-70x70.jpg";

  domain = "morganleeeeeeeeeee.com";
}
</script>
