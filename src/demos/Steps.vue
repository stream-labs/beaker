<template>
  <div>
    <div class="section">
      <h1>Step</h1>
      <p>
        step component
      </p>

      <pre><code>import { Step } from 'streamlabs-beaker';

components: {
  Step
}</code></pre>
    </div>
    <div class="section">
      <h2></h2>
      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;step :title=&quot;'Enable Pro'&quot;&gt;
  &lt;div class=&quot;info&quot;&gt;
    &lt;p&gt;+20 CCV&lt;/p&gt;
    &lt;i class=&quot;icon-information&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
&lt;/step&gt;

&lt;step
  :title=&quot;'Enable Pro'&quot;
  :isCompleted=&quot;true&quot;
  :hasCheckmark=&quot;true&quot;
  :completedText=&quot;'Complete'&quot;&gt;
  &lt;div class=&quot;info&quot;&gt;
    &lt;p&gt;+20 CCV&lt;/p&gt;
    &lt;i class=&quot;icon-information&quot;&gt;&lt;/i&gt;
  &lt;/div&gt;
&lt;/step&gt;

&lt;step :icon=&quot;'icon-donation-settings'&quot; :title=&quot;'Tip'&quot; :hasPrime=&quot;true&quot;
  &gt;&lt;div&gt;0/1&lt;/div&gt;
&lt;/step&gt;

&lt;step
  :icon=&quot;'icon-donation-settings'&quot;
  :title=&quot;'Tip'&quot;
  :isCompleted=&quot;true&quot;
  :completedText=&quot;'1/1'&quot;&gt;
  &lt;div&gt;0/1&lt;/div&gt;
&lt;/step&gt;</code></pre>
        </div>
      </accordion>
      <div class="row">
        <step :title="'Enable Pro'">
          <div class="info">
            <p>+20 CCV</p>
            <i class="icon-information"></i>
          </div>
        </step>
        <br />
        <step
          :title="'Enable Pro'"
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
            <td>title</td>
            <td>String</td>
            <td>null</td>
            <td>title to display</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>String</td>
            <td>null</td>
            <td>icon to display</td>
          </tr>
          <tr>
            <td>isCompleted</td>
            <td>Boolean</td>
            <td>false</td>
            <td>
              background would be @dark-4, color would be @dark-5 when it is
              true
            </td>
          </tr>
          <tr>
            <td>completedText</td>
            <td>String</td>
            <td>null</td>
            <td>
              It shows instead of slot when isCompleted is true
            </td>
          </tr>
          <tr>
            <td>isChecked</td>
            <td>Boolean</td>
            <td>false</td>
            <td>
              add check mark icon and line through for title when it is true
            </td>
          </tr>
          <tr>
            <td>hasPrime</td>
            <td>Boolean</td>
            <td>false</td>
            <td>It shows prime alt badge when it is true</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Step from "./../components/Step.vue";
import Accordion from "./../components/Accordion.vue";
@Component({
  components: {
    Step,
    Accordion
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
