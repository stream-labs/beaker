  <template>
  <div>
    <div class="section">
      <h1>New Feature Overlay</h1>
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
          <!-- <pre><code>&lt;ModalComp
  :type=&quot;'basic'&quot;
  :title=&quot;'UI Modal'&quot;
  :subTitle=&quot;'Subtitle'&quot;
  :text=&quot;'Save combining multiple windows like Streamlabels, Twitch Chat, Twitch Dashboard, Video, Streamlabs Dashboard, OBS etc into a live view.'&quot;&gt;
&lt;/ModalComp&gt;

&lt;Button 
:variation=&quot;'default'&quot; 
:title=&quot;'modal'&quot;
 @click=&quot;$modal.show('modal-basic')&quot;&gt;
&lt;/Button&gt;
          </code></pre>-->
        </div>
      </Accordion>
      <NewFeatureOverlay
        :label="'Introducing Merch Stores'"
        :title="'Increase Your Revenue'"
        :image="require('../assets/imgs/items.svg')"
      >
        <slot>We’ve worked with some of the best developers in the industry to bring you the tools to take your stream to the next level.
          <br>
          <br>We’ve automatically credited $15.00 to your account so you can start trying them out today.
        </slot>
      </NewFeatureOverlay>

      <div class="button-container button-container--left">
        <Button
          :variation="'default'"
          :title="'New Feature Overlay'"
          @click="$modal.show('new-feature')"
        ></Button>
      </div>
    </div>

    <!-- <table class="docs-table">
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
          <td>width</td>
          <td>number</td>
          <td>600</td>
          <td>modal width</td>
        </tr>
        <tr>
          <td>minWidth</td>
          <td>number</td>
          <td>600</td>
          <td>modal minimum width</td>
        </tr>
        <tr>
          <td>type</td>
          <td>string</td>
          <td>null</td>
          <td>Type of the modal. Options are basic, subscribe, redirect, and confirmation</td>
        </tr>
        <tr>
          <td>title</td>
          <td>string</td>
          <td>null</td>
          <td>title to display</td>
        </tr>
        <tr>
          <td>subTitle</td>
          <td>string</td>
          <td>null</td>
          <td>sub title to display</td>
        </tr>
        <tr>
          <td>text</td>
          <td>string</td>
          <td>null</td>
          <td>text to display</td>
        </tr>
        <tr>
          <td>subscribeText</td>
          <td>string</td>
          <td>null</td>
          <td>
            subscribe text only used for
            <code>subscribe</code>
          </td>
        </tr>
        <tr>
          <td>subscribeMessage</td>
          <td>string</td>
          <td>null</td>
          <td>
            subscribe message only used for
            <code>subscribe</code>
          </td>
        </tr>
        <tr>
          <td>notes</td>
          <td>string</td>
          <td>null</td>
          <td>
            the note of the bottom only used for
            <code>subscribe</code>
          </td>
        </tr>
      </tbody>
    </table>-->
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
export default class Modals extends Vue { }
</script>
