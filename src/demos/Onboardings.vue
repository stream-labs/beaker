  <template>
  <div>
    <div class="section">
      <h1>Onboarding</h1>
      <p>
        Onboarding component
      </p>
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
          <pre><code>&lt;NewFeatureOverlay
  :label=&quot;'Introducing Merch Stores'&quot;
  :title=&quot;'Increase Your Revenue'&quot;
  :media=&quot;'https://cdn.streamlabs.com/cloudbot/prototype_cloudbot_800x300.webm'&quot;
  :buttonTitle=&quot;'Go To Store'&quot;
  :onOpen=&quot;trackingCodeComponent&quot;
  :onAction=&quot;trackingCodeButton&quot;&gt;
  &lt;p&gt;We’ve worked with some of the best developers in the industry to bring you the tools to take your stream to the next level.&lt;/p&gt;
  &lt;p&gt;We’ve automatically credited $15.00 to your account so you can start trying them out today.&lt;/p&gt;
&lt;/NewFeatureOverlay&gt;</code></pre>
        </div>
      </Accordion>
      
      <Onboarding :steps="steps">
        <OnboardingStep slot="1" :title="'Setup Donations'" :desc="''" isDone="test1">
          <template>
          </template>
        </OnboardingStep> 
        <OnboardingStep slot="2" :title="'Choose Creator Website Theme'" :desc="'Select theme from below. More customizations will be available within the editor.'" isDone="test2">
          <template>
          </template>
        </OnboardingStep>  
        <OnboardingStep slot="3" :title="'Choose Your Domain Name'" :desc="'We’ll get you started by scanning all available domains relating to your username and suggesting the best option for your landing page. You can also click more and browse other suggestions or search for a domain name of your choice. '" isDone="test1">
          <template>
          </template>
        </OnboardingStep>   
      </Onboarding>

      <!-- <NewFeatureOverlay
        :label="'Introducing Merch Stores'"
        :title="'Increase Your Revenue'"
        :media="'https://cdn.streamlabs.com/cloudbot/prototype_cloudbot_800x300.webm'"
        :buttonTitle="'Go To Store'"
        :onOpen="trackingCodeComponent"
        :onAction="trackingCodeButton"
        :buttonTag="'a'"
        :buttonHref="'https://www.twitch.tv/ext/xab8h6nj36fc2wtn71yikw9hqjd6v4-0.0.1'"
        :buttonTarget="'_blank'"
      >
        <p>We’ve worked with some of the best developers in the industry to bring you the tools to take your stream to the next level.</p>
        <p>We’ve automatically credited $15.00 to your account so you can start trying them out today.</p>
      </NewFeatureOverlay>

      <div class="s-button-container s-button-container--left">
        <Button
          :variation="'default'"
          :title="'New Feature Overlay'"
          @click="$modal.show('new-feature')"
        ></Button>
      </div> -->
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
          <td>label</td>
          <td>string</td>
          <td>null</td>
          <td>label to display</td>
        </tr>
        <tr>
          <td>title</td>
          <td>string</td>
          <td>null</td>
          <td>title to display</td>
        </tr>
        <tr>
          <td>media</td>
          <td>string</td>
          <td>null</td>
          <td>display image or video (you can select either of them)</td>
        </tr>
        <tr>
          <td>buttonTitle</td>
          <td>string</td>
          <td>null</td>
          <td>
            What type of element the button is,
            <code>button</code>,
            <code>a</code>,
            <code>router-link</code>
          </td>
        </tr>
        <tr>
          <td>buttonTag</td>
          <td>string</td>
          <td>null</td>
          <td>Text displayed in the action button</td>
        </tr>
        <tr>
          <td>buttonRoute</td>
          <td>string</td>
          <td>/</td>
          <td>
            Router link path for the action button if tag is
            <code>router-link</code>
          </td>
        </tr>
        <tr>
          <td>buttonHref</td>
          <td>string</td>
          <td>null</td>
          <td>
            href for the action button if tag is set to
            <code>a</code>
          </td>
        </tr>
        <tr>
          <td>buttonTarget</td>
          <td>string</td>
          <td>null</td>
          <td>
            Use to set different targets for button if set to
            <code>a</code>
            Options are:
            <code>_self</code>,
            <code>_blank</code>,
            <code>_parent</code>,
            <code>_top</code>
          </td>
        </tr>
        <tr>
          <td>dismissTitle</td>
          <td>string</td>
          <td>Go to Dashboard</td>
          <td>Text displayed in the link next to the action button to dismiss the announcement.</td>
        </tr>
        <tr>
          <td>dismissRoute</td>
          <td>string</td>
          <td>/</td>
          <td>Router link path to dismiss the annoucement.</td>
        </tr>
        <tr>
          <td>onOpen</td>
          <td>function</td>
          <td>null</td>
          <td>Function to call out the tracking code of modal component.</td>
        </tr>
        <tr>
          <td>onAction</td>
          <td>function</td>
          <td>null</td>
          <td>Function to call out the tracking code of modal button.</td>
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
// import Button from "./../components/Button.vue";

@Component({
  components: {
    Accordion,
    Onboarding,
    OnboardingStep
    // Button
  }
})
export default class Onboardings extends Vue {
  steps = 4;

  test1() {
    return true;
  }

  test2() {
    return false;
  }

  trackingCodeComponent() {
    console.log("componentEventTracking");
    // ga('send','event', 'newfeatureoverlay', 'modal_shown', 'component');
  }

  trackingCodeButton() {
    console.log("buttonEventTracking");
    // ga('send','event', 'newfeatureoverlay', 'modal_click', 'button');
  }
}
</script>
