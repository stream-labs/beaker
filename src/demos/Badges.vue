<template>
  <div>
    <div class="section">
      <h1>Badges</h1>
      <p>
        By default, our Badges are designed to be on the right side of elements
        with 8px of margin on the left. If you would like to use a Badge on the
        left side of an element, set prop
        <code>align-left="true"</code> and it will switch the margin to be on
        the right side.
      </p>

      <pre><code>import { Badge } from 'streamlabs-beaker';

components: {
  Badge
}</code></pre>

      <div class="section">
        <h2>Standard Badges</h2>
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
<code>&lt;Badge
  :variant=&quot;new&quot;
  :align-left=&quot;true&quot;
&gt;New&lt;/Badge&gt;

&lt;Badge
  :variant=&quot;new-alt&quot;
  :align-left=&quot;true&quot;
&gt;New Alt&lt;/Badge&gt;

&lt;Badge
  :variant=&quot;tag&quot;
  :align-left=&quot;true&quot;
&gt;Tag&lt;/Badge&gt;

&lt;Badge
  :variant=&quot;beta&quot;
  :align-left=&quot;true&quot;
&gt;Beta&lt;/Badge&gt;

&lt;Badge
  :variant=&quot;warning&quot;
  :align-left=&quot;true&quot;
&gt;Warn&lt;/Badge&gt;

&lt;Badge
  :variant=&quot;pro&quot;
  :align-left=&quot;true&quot;
&gt;Pro&lt;/Badge&gt;

&lt;Badge
  :align-left=&quot;true&quot;
  :backgroundColor=&quot;'pink'&quot;
&gt;Pro&lt;/Badge&gt;</code></pre>
          </div>
        </Accordion>
        <Badge :variant="'new'" :align-left="true">New</Badge>
        <Badge :variant="'new-alt'" :align-left="true">New Alt</Badge>
        <Badge :variant="'tag'" :align-left="true">Tag</Badge>
        <Badge :variant="'beta'" :align-left="true">Beta</Badge>
        <Badge :variant="'warning'" :align-left="true">Warning</Badge>
        <Badge :variant="'pro'" :align-left="true">Pro</Badge>
        <Badge :align-left="true" :backgroundColor="'pink'" :textColor="'#fff'"
          >Custom</Badge
        >
      </div>

      <div class="section">
        <h2>Small Badges</h2>
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
<code>&lt;Badge
  :small=&quot;true&quot;
  :variant=&quot;tag&quot;
  :align-left=&quot;true&quot;
&gt;Tag&lt;/Badge&gt;

&lt;Badge
  :small=&quot;true&quot;
  :variant=&quot;beta&quot;
  :align-left=&quot;true&quot;
&gt;Beta&lt;/Badge&gt;

&lt;Badge
  :small=&quot;true&quot;
  :variant=&quot;warning&quot;
  :align-left=&quot;true&quot;
&gt;Warn&lt;/Badge&gt;

&lt;Badge
  :small=&quot;true&quot;
  :variant=&quot;pro&quot;
  :align-left=&quot;true&quot;
&gt;Pro&lt;/Badge&gt;</code></pre>
          </div>
        </Accordion>
        <Badge :small="true" :variant="'tag'" :align-left="true">Tag</Badge>
        <Badge :small="true" :variant="'beta'" :align-left="true">Beta</Badge>
        <Badge :small="true" :variant="'warning'" :align-left="true"
          >Warning</Badge
        >
        <Badge :small="true" :variant="'pro'" :align-left="true">Pro</Badge>
      </div>

      <div class="section">
        <h2>Progress Badge</h2>
        <p>Used to show amount of items sold in merch.</p>
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
<code>&lt;Badge
  :variant=&quot;'progress'&quot;
  :bar-color=&quot;'#8736e0'&quot;
  :current=&quot;17&quot;
  :total=&quot;25&quot;
  :suffix=&quot;'Sold'&quot;&gt;
&lt;/Badge&gt;</code></pre>
          </div>
        </Accordion>
        <Badge
          :align-left="true"
          :variant="'progress'"
          :backgroundColor="'#8736e0'"
          :current="17"
          :total="25"
          :suffix="'Sold'"
        ></Badge>
      </div>

      <div class="section">
        <h2>Count Badge</h2>
        <p>Used to show amount of items sold in merch.</p>
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
<code>&lt;Badge :variant=&quot;count&quot;&gt;3&lt;/Badge&gt;</code></pre>
          </div>
        </Accordion>
        <Badge :variant="'count'">3</Badge>
      </div>

      <div class="section">
        <h2>Mod Badge</h2>
        <p>Used in an info callout.</p>
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
<code>&lt;Badge :variant=&quot;mod&quot;&gt;/mod Streamlabs&lt;/Badge&gt;</code></pre>
          </div>
        </Accordion>
        <Callout :variation="'info'">
          Remember to
          <Badge :variant="'mod'">/mod Streamlabs</Badge>to initiate Cloudbot.
        </Callout>
      </div>
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
          <td>variant</td>
          <td>string</td>
          <td>"success"</td>
          <td>
            How the Badge will look or funciton. Variants:
            <code>success</code>, <code>tag</code>, <code>new</code>,
            <code>beta</code>, <code>warning</code>, <code>pro</code>,
            <code>progress</code>, <code>mod</code>, and <code>count</code>.
          </td>
        </tr>
        <tr>
          <td>alignLeft</td>
          <td>boolean</td>
          <td>false</td>
          <td>Moves 8px of margin from the left to the right.</td>
        </tr>
        <tr>
          <td>noMargin</td>
          <td>boolean</td>
          <td>false</td>
          <td>Removes margin from left and right.</td>
        </tr>
        <tr>
          <td>backgroundColor</td>
          <td>string</td>
          <td>"#31c3a2"</td>
          <td>
            Use this prop to change the background color only if you need an
            option that's not one of the provided variants.
          </td>
        </tr>
        <tr>
          <td>textColor</td>
          <td>string</td>
          <td>"#ffffff"</td>
          <td>
            Use this prop to change the text color only if you need an option
            that's not one of the provided variants.
          </td>
        </tr>
        <tr>
          <td>current</td>
          <td>number</td>
          <td>null</td>
          <td>
            Current progress amount.
            <code>variant</code> prop must be set to <code>progress</code>.
          </td>
        </tr>
        <tr>
          <td>total</td>
          <td>number</td>
          <td>null</td>
          <td>
            Total progross amount.
            <code>variant</code> prop must be set to <code>progress</code>.
          </td>
        </tr>
        <tr>
          <td>separator</td>
          <td>string</td>
          <td>"/"</td>
          <td>
            Separator between current and total amounts is displayed.
            <code>variant</code> prop must be set to <code>progress</code>.
          </td>
        </tr>
        <tr>
          <td>suffix</td>
          <td>string</td>
          <td>null</td>
          <td>
            String to the right of the total amount.
            <code>variant</code> prop must be set to <code>progress</code>.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import Badge from "./../components/Badge.vue";
import Callout from "./../components/Callout.vue";

@Component({
  components: {
    Accordion,
    Badge,
    Callout
  }
})
export default class Badges extends Vue {}
</script>

<style lang="less" scoped>
.section__components {
  display: flex;
  align-items: center;
}
</style>
