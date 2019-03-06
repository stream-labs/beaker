<template>
  <div>
    <div class="section">
      <h1>Progress Bars</h1>
      <h2>Default Progress Bar</h2>
      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;progress-bar :progressComplete=&quot;50&quot;&gt;&lt;/progress-bar&gt;</code></pre>
        </div>
      </accordion>
      <div class="row">
        <progress-bar :progressComplete="50"/>
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
            <td>progressComplete</td>
            <td>Number</td>
            <td>null</td>
            <td>Progress complete in percentage</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProgressBar from "./../components/ProgressBar.vue";
import Accordion from "./../components/Accordion.vue";
@Component({
  components: {
    ProgressBar,
    Accordion
  }
})
export default class ProgressBars extends Vue {
  value = 50;
}
</script>
