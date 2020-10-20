<template>
  <div>
    <div class="section">
      <h1>Call To Action</h1>
      <p>
        You can use our callout component if you need to display an important
        message.
      </p>

      <pre><code>import { CallToAction } from 'streamlabs-beaker';

components: {
  CallToAction
}</code></pre>
    </div>
    <div class="section">
      <h2>Default Call to Action</h2>
      <DemoSection
        title="Default"
        :code="demoCode"
      >
        <template #components>
          <CallToAction :button-click="test" />
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Custom Call to Action</h2>

      <div class="section">
        <DemoSection
          title="Custom"
          :code="demoCode"
        >
          <template #components>
            <CallToAction
              bgcolor="#31c3a2"
              title-color="#ffffff"
              sub-title-color="#ffffff"
              :thumbnail="require('./../assets/imgs/logo.svg')"
              :thumbnail-width="120"
              :thumbnail-height="80"
              thumbnail-bg="#ffffff"
              title="This is a Custom Call To Action"
              description="A Custom Description"
              button-variation="default"
              button-title="Click Me"
              button-description
              button-tag="a"
              button-href="https://google.com"
              button-bg="#ffffff"
              button-text-color="#000000"
            />
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <CallToAction
          :bg-color="'#31c3a2'"
          :title-color="'#fff'"
          :sub-title-color="'#fff'"
          :title="'This is a Custom Call To Action'"
          :description="'A Custom Description'"
          :has-thumbnail="false"
          :custom-button-slot="true"
        >
          <div class="s-button-container">
            <Button :title="'Using slot'" />
            <Button :title="'Using slot'" />
          </div>
        </CallToAction>
      </div>

      <div class="section">
        <CallToAction
          :bg-color="'#CAA368'"
          :title-color="'#fff'"
          :sub-title-color="'#fff'"
          :has-thumbnail="false"
          :title="'Join Prime today!'"
          :description="
            'Our premium tool-set for professional content creators.'
          "
          :button-variation="'prime-white'"
          :button-title="'Sign Up'"
          :button-description="''"
          :button-icon="'prime'"
          :bg-prime="true"
        />
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
            <td>thumbnailAlt</td>
            <td>String</td>
            <td>Get started by downloading Streamlabs OBS</td>
            <td>A Thumbnail alt</td>
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
import { defineComponent } from 'vue';
import Button from '../components/Button.vue';
import CallToAction from '../components/CallToAction.vue';
import CallToActionCode from '!!raw-loader!./CallToActions.vue';
import DemoSection from '../components/DemoSection.vue';

export default defineComponent({
  components: {
    Button,
    CallToAction,
    DemoSection,
  },

  setup() {
    const demoCode: string = CallToActionCode;
    function test() {
      alert('test');
    }

    return {
      demoCode,
      test,
    };
  },
});
</script>
