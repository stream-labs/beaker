  <template>
  <div>
    <div class="section">
      <h1>New Feature Overlay</h1>
      <p>
        You can trigger this with a button like
        <code>@click="$modal.show('new-feature')"</code> or call
        <code>this.$modal.show('new-feature')"</code> on mounted. You may need to set a few second delay on the trigger to prevent the modal closing when the page refreshes.
      </p>
      <pre><code>import { NewFeatureOverlay } from 'streamlabs-beaker';

components: {
  NewFeatureOverlay
}</code></pre>
    </div>

    <div class="section">
      <h2>New Feature Overlay</h2>
      <p>Used for new feature overlay.</p>
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

      <NewFeatureOverlay
        :label="'Introducing Merch Stores'"
        :title="'Increase Your Revenue'"
        :media="'https://cdn.streamlabs.com/cloudbot/prototype_cloudbot_800x300.webm'"
        :buttonTitle="'Go To Store'"
        :onOpen="trackingCodeComponent"
        :onAction="trackingCodeButton"
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
      </div>
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
          <td>Text displayed in the action button</td>
        </tr>
        <tr>
          <td>buttonRoute</td>
          <td>string</td>
          <td>/</td>
          <td>Router link path for the action button</td>
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
import NewFeatureOverlay from "./../components/NewFeatureOverlay.vue";
import Button from "./../components/Button.vue";

@Component({
  components: {
    Accordion,
    NewFeatureOverlay,
    Button
  }
})
export default class AnnoucementsDemo extends Vue {
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
