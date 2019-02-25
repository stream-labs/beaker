<template>
  <div>
    <div class="section">
      <h1>Spinners</h1>
      <p>These are animated with pure SVG, they will not be animated in Microsoft Edge, or Opera.</p>
      <h2>Oscillating Bars</h2>
      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;loading-spinner :variation=&quot;bars&quot;&gt;&lt;/loading-spinner&gt;</code></pre>
        </div>
      </accordion>
      <div class="row">
        <Spinner :variation="'bars'"/>
      </div>

      <h2>Spinning Circles</h2>
      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;loading-spinner :variation=&quot;circles&quot;&gt;&lt;/loading-spinner&gt;</code></pre>
        </div>
      </accordion>
      <div class="row">
        <Spinner :variation="'circles'"/>
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
            <td>variation</td>
            <td>String</td>
            <td>'bars'</td>
            <td>'bars', 'circles'</td>
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
