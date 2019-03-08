<template>
  <div>
    <div class="section">
      <h1>Empty Sections</h1>
      <pre><code>import { EmptySection } from 'streamlabs-beaker';

components: {
  EmptySection
}</code></pre>

      <h2>Search Variation</h2>

      <div class="row">
        <empty-section
          :variation="'search'"
          :title="'This is the title'"
          :subtitle="'This is a subtitle'"
        ></empty-section>
      </div>

      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
<code>&lt;empty-section
  :variation=&quot;'search'&quot;
  :title=&quot;'The title'&quot;
  :interval=&quot;'The Subtitle'&quot;&gt;
  &lt;div&gt;Anything within element will be slotted below&lt;/div&gt;
&lt;/empty-section&gt;</code></pre>
        </div>
      </accordion>

      <h2>Text Variation</h2>

      <div class="row">
        <empty-section
          :variation="'text'"
          :title="'This is the title'"
          :subtitle="'This is a subtitle'"
        ></empty-section>
      </div>

      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
<code>&lt;empty-section
  :variation=&quot;'search'&quot;
  :title=&quot;'The title'&quot;
  :interval=&quot;'The Subtitle'&quot;&gt;
  &lt;div&gt;Anything within element will be slotted below&lt;/div&gt;
&lt;/empty-section&gt;</code></pre>
        </div>
      </accordion>

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
            <td>variation</td>
            <td>String</td>
            <td>'text'</td>
            <td>The icon within the element</td>
          </tr>
          <tr>
            <td>title</td>
            <td>String</td>
            <td>'Streamlabs.com'</td>
            <td>The title for the empty section</td>
          </tr>
          <tr>
            <td>subtitle</td>
            <td>String</td>
            <td>''</td>
            <td>A subtitle for the empty section</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import EmptySection from "./../components/EmptySection.vue";
import Accordion from "./../components/Accordion.vue";

@Component({
  components: {
    EmptySection,
    Accordion
  }
})
export default class EmptySections extends Vue {
  value = "hi";
}
</script>
