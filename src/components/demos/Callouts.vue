<template>
  <div>
    <div class="section">
      <h1>Callouts</h1>
      <p>You can use our callout component if you need to display an important message.</p>
    </div>

    <div class="section">
      <h2>Callout Variations</h2>
      <p>There are 5 callout variations: success, success-alt, warning, warning-alt, and info.</p>
      <callout :variation="'success'">Success callout. <a href="#0">Link</a></callout>
      <callout :variation="'success-alt'">Success-alt callout. <a href="#0">Link</a></callout>
      <callout :variation="'warning'">Warning callout. <a href="#0">Link</a></callout>
      <callout :variation="'warning-alt'">Warning-alt callout. <a href="#0">Link</a></callout>
      <callout :variation="'info'">Info callout. <a href="#0">Link</a></callout>

      <accordion
        :openedTitle="'Hide Code'"
        :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;callout :variation=&quot;'success'&quot;&gt;Success callout. &lt;a href=&quot;#0&quot;&gt;Link&lt;/a&gt;&lt;/callout&gt;

&lt;callout :variation=&quot;'success-alt'&quot;&gt;Success-alt callout. &lt;a href=&quot;#0&quot;&gt;Link&lt;/a&gt;&lt;/callout&gt;

&lt;callout :variation=&quot;'warning'&quot;&gt;Warning callout. &lt;a href=&quot;#0&quot;&gt;Link&lt;/a&gt;&lt;/callout&gt;

&lt;callout :variation=&quot;'warning-alt'&quot;&gt;Warning-alt callout. &lt;a href=&quot;#0&quot;&gt;Link&lt;/a&gt;&lt;/callout&gt;

&lt;callout :variation=&quot;'info'&quot;&gt;Info callout. &lt;a href=&quot;#0&quot;&gt;Link&lt;/a&gt;&lt;/callout&gt;</code></pre>
        </div>
      </accordion>
    </div>

    <div class="section">
      <h2>Callout Options</h2>

      <div class="section">
        <h3>Closable</h3>
        <p>Use the <strong>closeable</strong> prop to give the callout the ability to close.</p>
        <callout :variation="'success'" :closeable="true">Success callout. <a href="#0">Link</a></callout>
        <accordion
          :openedTitle="'Hide Code'"
          :closedTitle="'Show Code'">
          <div slot="content">
            <pre><code>&lt;callout :variation=&quot;'success'&quot; :closeable=&quot;true&quot;&gt;Success-alt callout. &lt;a href=&quot;#0&quot;&gt;Link&lt;/a&gt;&lt;/callout&gt;</code></pre>
          </div>
        </accordion>
      </div>

      <div class="section">
        <h3>Icon</h3>
        <p>Set the <strong>icon</strong> prop to false if you would like to remove the callout icon</p>
        <callout :variation="'success-alt'" :icon="false">Success-alt callout. <a href="#0">Link</a></callout>
        <accordion
          :openedTitle="'Hide Code'"
          :closedTitle="'Show Code'">
          <div slot="content">
            <pre><code>&lt;callout :variation=&quot;'success-alt'&quot; :icon=&quot;false&quot;&gt;Success-alt callout. &lt;a href=&quot;#0&quot;&gt;Link&lt;/a&gt;&lt;/callout&gt;</code></pre>
          </div>
        </accordion>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accordion from "./../Accordion.vue";
import Callout from "./../Callout.vue";

@Component({
  components: {
    Accordion,
    Callout
  }
})
export default class Callouts extends Vue {}
</script>

<style lang="less" scoped>
</style>
