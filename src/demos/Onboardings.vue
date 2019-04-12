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
          <pre><code>&lt;Onboarding :steps=&quot;steps&quot; :current=&quot;1&quot; :isSkip=&quot;true&quot; :callback=&quot;test&quot;&gt;
  &lt;OnboardingStep slot=&quot;1&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;Setup Donations&lt;/template&gt;
    &lt;template slot=&quot;desc&quot;&gt;Connect your Paypal account&lt;/template&gt;
  &lt;/OnboardingStep&gt;
  &lt;OnboardingStep slot=&quot;2&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;Enable Cloudbot&lt;/template&gt;
    &lt;template
      slot=&quot;desc&quot;
    &gt;Streamlabs Cloudbot is a chatbot that provides entertainment and moderation features for your stream.&lt;/template&gt;
  &lt;/OnboardingStep&gt;
  &lt;OnboardingStep slot=&quot;3&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;Let’s setup your custom streamer website&lt;/template&gt;
    &lt;template slot=&quot;desc&quot;&gt;This is where your viewers will go to engage with you.&lt;/template&gt;
  &lt;/OnboardingStep&gt;
  &lt;OnboardingStep slot=&quot;4&quot;&gt;
    &lt;template slot=&quot;title&quot;&gt;Setup your custom Streamer Website&lt;/template&gt;
    &lt;template slot=&quot;desc&quot;&gt;1. Choose Your Layout&lt;/template&gt;
  &lt;/OnboardingStep&gt;
&lt;/Onboarding&gt;</code></pre>
        </div>
      </Accordion>

      <Onboarding :steps="steps" :current="1" :isSkip="true" :callback="test">
        <OnboardingStep slot="1">
          <template slot="title">Setup Donations</template>
          <template slot="desc">Connect your Paypal account</template>
        </OnboardingStep>
        <OnboardingStep slot="2">
          <template slot="title">Enable Cloudbot</template>
          <template
            slot="desc"
          >Streamlabs Cloudbot is a chatbot that provides entertainment and moderation features for your stream.</template>
        </OnboardingStep>
        <OnboardingStep slot="3">
          <template slot="title">Let’s setup your custom streamer website</template>
          <template slot="desc">This is where your viewers will go to engage with you.</template>
        </OnboardingStep>
        <OnboardingStep slot="4">
          <template slot="title">Setup your custom Streamer Website</template>
          <template slot="desc">1. Choose Your Layout</template>
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
          <td>array</td>
          <td>null</td>
          <td>
            steps information to display. you can make array like below
            <br>
            <code>
              steps = [
              {
              step: 1,
              isChecked: false
              },
              {
              step: 2,
              isChecked: false
              },
              {
              step: 3,
              isChecked: false
              },
              {
              step: 4,
              isChecked: false
              }
              ];
            </code>
          </td>
        </tr>
        <tr>
          <td>current</td>
          <td>number</td>
          <td>null</td>
          <td>current step to display</td>
        </tr>
        <tr>
          <td>isSkip</td>
          <td>boolean</td>
          <td>null</td>
          <td>choose if you display skip menu</td>
        </tr>
        <tr>
          <td>callback</td>
          <td>function</td>
          <td>null</td>
          <td>Function to call out callback</td>
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

@Component({
  components: {
    Accordion,
    Onboarding,
    OnboardingStep
  }
})
export default class Onboardings extends Vue {
  steps = [
    {
      step: 1,
      isChecked: false
    },
    {
      step: 2,
      isChecked: false
    },
    {
      step: 3,
      isChecked: false
    },
    {
      step: 4,
      isChecked: false
    }
  ];

  test() {
    console.log("test");
  }
}
</script>
