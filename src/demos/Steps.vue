<template>
  <div>
    <div class="section">
      <h1>Step</h1>
      <p>
        You can use our callout component if you need to display an important
        message.
      </p>

      <pre><code>import { Step } from 'streamlabs-beaker';

components: {
  Step
}</code></pre>
    </div>
    <div class="section">
      <h2>Default Call to Action</h2>
      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;call-to-action
  :buttonClick=&quot;test&quot;&gt;
&lt;/call-to-action&gt;</code></pre>
        </div>
      </accordion>
      <div class="row">
        <step :title="'Enable Pro'" :point="'+20 CCV'">
          <div class="info">
            <p>+20 CCV</p>
            <i class="icon-information"></i>
          </div>
        </step>
        <br />
        <step
          :title="'Enable Pro'"
          :point="'+20 CCV'"
          :isCompleted="true"
          :hasCheckmark="true"
          :completedText="'Complete'"
        >
          <div class="info">
            <p>+20 CCV</p>
            <i class="icon-information"></i>
          </div>
        </step>
        <br />
        <step :icon="'icon-donation-settings'" :title="'Tip'" :hasPrime="true"
          ><div>0/1</div></step
        >
        <br />
        <step
          :icon="'icon-donation-settings'"
          :title="'Tip'"
          :isCompleted="true"
          :completedText="'1/1'"
          ><div>0/1</div></step
        >
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
            <td>bgColor</td>
            <td>String</td>
            <td>#f5f8fa</td>
            <td>Background color, default color is @day-section (#f5f8fa)</td>
          </tr>

          <tr>
            <td>titleColor</td>
            <td>String</td>
            <td>#09161d</td>
            <td>Title color, default color is @day-title (#09161d)</td>
          </tr>

          <tr>
            <td>subTitleColor</td>
            <td>String</td>
            <td>#4f5e65</td>
            <td>Sub title color, default color is @day-paragraph (#4f5e65)</td>
          </tr>

          <tr>
            <td>thumbnail</td>
            <td>String</td>
            <td>'https://cdn.streamlabs.com/static/kevin-standard.svg'</td>
            <td>A Thumbnail image</td>
          </tr>
          <tr>
            <td>thumbnailBg</td>
            <td>String</td>
            <td>#31C3A2</td>
            <td>
              A Thumbnail background color, default color is @teal (#31C3A2)
            </td>
          </tr>

          <tr>
            <td>thumbnailWidth</td>
            <td>Number</td>
            <td>80</td>
            <td>A Thumbnail width</td>
          </tr>

          <tr>
            <td>thumbnailHeight</td>
            <td>Number</td>
            <td>80</td>
            <td>A Thumbnail height</td>
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
            <td>
              Over 800k creators use Streamlabs OBS daily, delivering
              entertainment.
            </td>
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
            <td>
              Description for 'slobs-download' button variation only, recomended
              left blank otherwise ( :buttonDescription="'" )
            </td>
          </tr>
          <tr>
            <td>buttonBg</td>
            <td>String</td>
            <td>null</td>
            <td>Button background is forced to be changed</td>
          </tr>
          <tr>
            <td>buttonTextColor</td>
            <td>String</td>
            <td>null</td>
            <td>Button text color is forced to be changed</td>
          </tr>

          <tr>
            <td>buttonHref</td>
            <td>String</td>
            <td>null</td>
            <td>
              Used if the the
              <code>type</code> is an <code>a</code> element (links).
            </td>
          </tr>
          <tr>
            <td>buttonTo</td>
            <td>String</td>
            <td>null</td>
            <td>
              Used if the the
              <code>type</code> is a <code>router-link</code>. Define the path.
            </td>
          </tr>
          <tr>
            <td>buttonTag</td>
            <td>String</td>
            <td>null</td>
            <td>
              What type of element the component is. Options are
              <code>button</code>, <code>a</code>,
              <code>router-link</code>
            </td>
          </tr>
          <tr>
            <td>buttonClick</td>
            <td>Function</td>
            <td>null</td>
            <td>Emits a click function.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CallToAction from "./../components/CallToAction.vue";
import Step from "./../components/Step.vue";
import Accordion from "./../components/Accordion.vue";
import Button from "./../components/Button.vue";
@Component({
  components: {
    CallToAction,
    Step,
    Accordion,
    Button
  }
})
export default class Steps extends Vue {}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    .margin(0);
    margin-right: 15px;
    color: @dark-5;
    background: @light-blue;
    .weight(@medium);
    .radius();
    .padding();
  }
}
</style>

