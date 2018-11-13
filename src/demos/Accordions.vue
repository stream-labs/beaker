<template>
  <div>
    <div class="section">
      <h2>Accordions</h2>
      <h3>Default settings</h3>
      <Accordion
        :openedTitle="'Hide Code'"
        :closedTitle="'Show Code'"
        class="docs-code">
        <div slot="content">
          <pre>
<code>&lt;Accordion :opened-title=&quot;'Close Accordion'&quot; :closed-title=&quot;'Open Accordion'&quot;&gt;
  &lt;div slot=&quot;content&quot;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.
  &lt;/div&gt;
&lt;/Accordion&gt;</code></pre>
        </div>
      </Accordion>

      <Accordion :opened-title="'Close Accordion'" :closed-title="'Open Accordion'">
        <div slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.
        </div>
      </Accordion>

      <h3>Set to be open</h3>
      <Accordion
        :openedTitle="'Hide Code'"
        :closedTitle="'Show Code'"
        class="docs-code">
        <div slot="content">
          <pre>
<code>&lt;Accordion :opened-title=&quot;'Hide Content'&quot; :closed-title=&quot;'Show Content'&quot; :isOpen=&quot;true&quot;&gt;
  &lt;div slot=&quot;content&quot;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.
  &lt;/div&gt;
&lt;/Accordion&gt;</code></pre>
        </div>
      </Accordion>
      <Accordion :opened-title="'Hide Content'" :closed-title="'Show Content'" :isOpen="true">
        <div slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.
        </div>
      </Accordion>

      <h3>Alternative no border style</h3>
      <Accordion
        :openedTitle="'Hide Code'"
        :closedTitle="'Show Code'"
        class="docs-code">
        <div slot="content">
          <pre>
<code>&lt;Accordion :opened-title=&quot;'Hide Content'&quot; :closed-title=&quot;'Show Content'&quot; :no-border=&quot;true&quot;&gt;
  &lt;div slot=&quot;content&quot;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.
  &lt;/div&gt;
&lt;/Accordion&gt;</code></pre>
        </div>
      </Accordion>
      <Accordion :opened-title="'Hide Content'" :closed-title="'Show Content'" :no-border="true">
        <div slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.
        </div>
      </Accordion>

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
            <td>openedTitle</td>
            <td>string</td>
            <td>null</td>
            <td>The maximum numerical value that can be selected</td>
          </tr>
          <tr>
            <td>closedTitle</td>
            <td>string</td>
            <td>null</td>
            <td>The minimum numerical value that can be selected</td>
          </tr>
          <tr>
            <td>isOpened</td>
            <td>boolean</td>
            <td>false</td>
            <td>Have the accordion open by default</td>
          </tr>
          <tr>
            <td>noBorder</td>
            <td>boolean</td>
            <td>false</td>
            <td>Alternative style with no border or padding</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";

@Component({
  components: {
    Accordion
  }
})
export default class Accordions extends Vue {}
</script>
