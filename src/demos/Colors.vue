<template>
  <div class="section">
    <h1>Welcome to Beaker</h1>
    <h4>To install Beaker, run:</h4>
    <pre><code>yarn add streamlabs-beaker</code></pre>
    <p>or</p>
    <pre><code>npm install streamlabs-beaker --save</code></pre>
    <br />
    <h4>To use a component, add:</h4>
    <pre><code>import { Accordion } from 'streamlabs-beaker';

components: {
  Accordion
}</code></pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Colors extends Vue {}
</script>
