<template>
  <div>
    <div class="section">
      <h1>Badges</h1>
      <p>By default, our badges are designed to be on the right side of elements with 8px of margin on the left. If you would like to use a badge on the left side of an element, add <code>.badge--left</code> and it will switch the margin to be on the right side.</p>
      <Accordion
        :openedTitle="'Hide Code'"
        :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
<code>&lt;badge
  :variant=&quot;success&quot;
  :align-left=&quot;true&quot;&gt;
  Success
&lt;/badge&gt;

&lt;badge
  :variant=&quot;tag&quot;
  :align-left=&quot;true&quot;&gt;
  Tag
&lt;/badge&gt;

&lt;badge
  :variant=&quot;new&quot;
  :align-left=&quot;true&quot;&gt;
  New
&lt;/badge&gt;

&lt;badge
  :variant=&quot;beta&quot;
  :align-left=&quot;true&quot;&gt;
  Beta
&lt;/badge&gt;

&lt;badge
  :variant=&quot;warning&quot;
  :align-left=&quot;true&quot;&gt;
  Warn
&lt;/badge&gt;

&lt;badge
  :variant=&quot;pro&quot;
  :align-left=&quot;true&quot;&gt;
  Pro
&lt;/badge&gt;

&lt;progress-badge
  :bar-color=&quot;'#8736e0'&quot;
  :current=&quot;17&quot;
  :total=&quot;25&quot;
  :suffix=&quot;'Sold'&quot;&gt;
&lt;/progress-badge&gt;</code></pre>
        </div>
      </Accordion>

      <badge
        :variant="'success'"
        :align-left="true">
        Success
      </badge>
      <badge
        :variant="'tag'"
        :align-left="true">
        Tag
      </badge>
      <badge
        :variant="'new'"
        :align-left="true">
        New
      </badge>
      <badge
        :variant="'beta'"
        :align-left="true">
        Beta
      </badge>
      <badge
        :variant="'warning'"
        :align-left="true">
        Warning
      </badge>
      <badge
        :variant="'pro'"
        :align-left="true">
        Pro
      </badge>
      <badge
        :variant="'progress'"
        :bar-color="'#8736e0'"
        :current="17"
        :total="25"
        :suffix="'Sold'">
      </badge>
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
          <td>How the badge will look or funciton. Variant options: success, tag, new, beta, warning, pro, and progress.</td>
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
          <td>barColor</td>
          <td>string</td>
          <td>"#31c3a2"</td>
          <td>Background color of progress bar. Variant must be set to "progress".</td>
        </tr>
        <tr>
          <td>textColor</td>
          <td>string</td>
          <td>"#ffffff"</td>
          <td>Text color of progress bar. Variant must be set to "progress".</td>
        </tr>
        <tr>
          <td>current</td>
          <td>number</td>
          <td>null</td>
          <td>Current progress amount. Variant must be set to "progress".</td>
        </tr>
        <tr>
          <td>total</td>
          <td>number</td>
          <td>null</td>
          <td>Total progross amount. Variant must be set to "progress".</td>
        </tr>
        <tr>
          <td>separator</td>
          <td>string</td>
          <td>"/"</td>
          <td>Separator between current and total amounts is displayed. Variant must be set to "progress".</td>
        </tr>
        <tr>
          <td>suffix</td>
          <td>string</td>
          <td>null</td>
          <td>String to the right of the total amount. Variant must be set to "progress".</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import Badge from "./../components/Badge.vue";

@Component({
  components: {
    Accordion,
    Badge
  }
})
export default class Badges extends Vue {}
</script>
