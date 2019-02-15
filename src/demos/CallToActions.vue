<template>
  <div>
    <div class="section">
      <h1>Call To Action</h1>
      <p>You can use our callout component if you need to display an important message.</p>

            <pre><code>import { CallToAction } from 'streamlabs-beaker';

components: {
  CallToAction
}</code></pre>
    </div>
    <div class="section">
      <h2>Default Call to Action</h2>
        <accordion
        :openedTitle="'Hide Code'"
        :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;call-to-action
  :thumbnail=&quot;'require('./../assets/imgs/logo.svg')'&quot;
  :title=&quot;'Call to Action Title'&quot;
  :description=&quot;'Call to Action Description&quot;
  :buttonVariation=&quot;'action'&quot;
  :buttonTitle=&quot;'Click Me'&quot;
  :buttonDescription=&quot;''&quot;&gt;
&lt;/call-to-action&gt;
          </code></pre>
        </div>
      </accordion>
      <div class="row">
        <call-to-action/>
      </div>
      <h2>Custom Call to Action</h2>
      <div class="row">
        <call-to-action
        :thumbnail="require('./../assets/imgs/logo.svg')"
        :title="'This is a Custom Call To Action'"
        :description="'A Custom Description'"
        :buttonVariation="'action'"
        :buttonTitle="'Click Me'"
        :buttonDescription="''"/>
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
            <td>thumbnail</td>
            <td>String</td>
            <td>require('./../assets/imgs/kevin-standard.svg'</td>
            <td>A Thumbnail image, background color is @teal (#31C3A2)</td>
          </tr>
          <tr>
            <td>title</td>
            <td>String</td>
            <td>Get started by downloading Streamlabs OBS</td>
            <td>Title for the call to action component</td>
          </tr>
          <tr>
            <td>description</td>
            <td>String</td>
            <td>Over 800k creators use Streamlabs OBS daily, delivering entertainment.</td>
            <td>A short description for the call the action component</td>
          </tr>
          <tr>
            <td>buttonVariation</td>
            <td>String</td>
            <td>slobs-download</td>
            <td>Takes any button variation, but 'action' is recomended</td>
          </tr>
          <tr>
            <td>buttonTitle</td>
            <td>String</td>
            <td>Download Streamlabs OBS</td>
            <td>The title for the button</td>
          </tr>
          <tr>
            <td>buttonDescription</td>
            <td>String</td>
            <td>Windows 7+ 245.8MB</td>
            <td>Description for 'slobs-download' button variation only, recomended left blank otherwise ( :buttonDescription="'" )</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CallToAction from "./../components/CallToAction.vue";
import Accordion from "./../components/Accordion.vue";
@Component({
  components: {
    CallToAction,
    Accordion
  }
})
export default class CallToActions extends Vue {
  value = 50;
}
</script>
