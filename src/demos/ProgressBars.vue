<template>
  <div>
    <div class="section">
      <h2>Default Progress Bar</h2>
      <p>
        Our progress bar component is extended from
        <a
          target="_blank"
          href="https://github.com/dzwillia/vue-simple-progress"
        >Vue Simple Progress</a>
      </p>
      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
<code>&lt;progress-bar
  :progressComplete=&quot;%&quot;&gt;
&lt;/progress-bar&gt;</code></pre>
        </div>
      </accordion>

      <div class="row">
        <progress-bar :progressComplete="50"/>
      </div>
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
export default class Sliders extends Vue {
  value = 50;
}
</script>
