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
<code>&lt;div class=&quot;badge badge--left badge--success&quot;&gt;Success&lt;/div&gt;
&lt;div class=&quot;badge badge--left badge--tag&quot;&gt;Tag&lt;/div&gt;
&lt;div class=&quot;badge badge--left badge--new&quot;&gt;New&lt;/div&gt;
&lt;div class=&quot;badge badge--left badge--beta&quot;&gt;Beta&lt;/div&gt;
&lt;div class=&quot;badge badge--left badge--warning&quot;&gt;Warn&lt;/div&gt;
&lt;div class=&quot;badge badge--left badge--pro&quot;&gt;Pro&lt;/div&gt;
&lt;progress-badge
  :bar-color=&quot;'#8736e0'&quot;
  :current=&quot;17&quot;
  :total=&quot;25&quot;
  :suffix=&quot;'Sold'&quot;&gt;
&lt;/progress-badge&gt;</code></pre>
        </div>
      </Accordion>
      <div class="badge badge--left badge--success">Success</div>
      <div class="badge badge--left badge--tag">Tag</div>
      <div class="badge badge--left badge--new">New</div>
      <div class="badge badge--left badge--beta">Beta</div>
      <div class="badge badge--left badge--warning">Warn</div>
      <div class="badge badge--left badge--pro">Pro</div>
      <progress-badge
        :bar-color="'#8736e0'"
        :current="17"
        :total="25"
        :suffix="'Sold'">
      </progress-badge>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import ProgressBadge from "./../components/ProgressBadge.vue";

@Component({
  components: {
    Accordion,
    ProgressBadge
  }
})
export default class Badges extends Vue {}
</script>
