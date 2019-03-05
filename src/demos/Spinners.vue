<template>
  <div>
    <div class="section">
      <h1>Spinners</h1>
      <p>These are animated with pure SVG, they will not be animated in Microsoft Edge, or Opera, and will look different in firefox.</p>
      <h2>Oscillating Bars Small</h2>
      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;Spinner :size=&quot;'small'&quot;&gt;&lt;/Spinner&gt;</code></pre>
        </div>
      </accordion>
      <div class="row">
        <Spinner :size="'small'"/>
      </div>

      <h2>Oscillating Bars Large</h2>
      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;Spinner :size=&quot;'large'&quot;&gt;&lt;/Spinner&gt;</code></pre>
        </div>
      </accordion>
      <div class="row">
        <Spinner :size="'large'"/>
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
            <td>size</td>
            <td>String</td>
            <td>'small'</td>
            <td>'small', 'large'</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Spinner from "./../components/Spinner.vue";
import Accordion from "./../components/Accordion.vue";
@Component({
  components: {
    Spinner,
    Accordion
  }
})
export default class Spinners extends Vue {
  msg = "hi!";
}
</script>
