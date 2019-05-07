<template>
  <div>
    <div class="section">
      <h1>Callouts</h1>
      <p>
        You can use our callout component if you need to display a message to
        users.
      </p>
      <h4>Rules</h4>
      <ul></ul>

      <pre><code>import { Callout } from 'streamlabs-beaker';

components: {
  Callout
}</code></pre>
    </div>

    <div class="section">
      <h2>Default Callouts</h2>
      <p>
        There are 3 basic callout variations: success, warning, and info. These
        can be used whenever necessary but please limit to 1 callout per page
        and limit the text to 1 line. You can link to more info in a modal or
        another page if needed.
      </p>
      <callout :variation="'success'">
        Success callout.
        <a href="#0">Link</a>
      </callout>
      <callout :variation="'warning'">
        Warning callout.
        <a href="#0">Link</a>
      </callout>
      <callout :variation="'info'">
        Info callout.
        <a href="#0">Link</a>
      </callout>

      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;callout :variation=&quot;'success'&quot;&gt;Success callout. &lt;a href=&quot;#0&quot;&gt;Link&lt;/a&gt;&lt;/callout&gt;

&lt;callout :variation=&quot;'warning' :icon=&quot;'warning'&quot;&gt;Warning callout. &lt;a href=&quot;#0&quot;&gt;Link&lt;/a&gt;&lt;/callout&gt;

&lt;callout :variation=&quot;'info'&quot;&gt;Info callout. &lt;a href=&quot;#0&quot;&gt;Link&lt;/a&gt;&lt;/callout&gt;</code></pre>
        </div>
      </accordion>
    </div>

    <div class="section">
      <h2>Strong Callouts</h2>
      <p>
        These should be used
        <strong>very sparingly</strong>. These should be used in cases when
        something is going to be completed removed or something could become
        broken/lost if action is not taken.
      </p>

      <p>There are 3 strong callout variations: success, warning, and info.</p>
      <callout :variation="'success strong'">
        Success callout.
        <a href="#0">Link</a>
      </callout>
      <callout :variation="'warning strong'" :icon="'warning'">
        Warning callout.
        <a href="#0">Link</a>
      </callout>
      <callout :variation="'info strong'">
        Info callout.
        <a href="#0">Link</a>
      </callout>

      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;callout :variation=&quot;'success strong'&quot;&gt;Success callout. &lt;a href=&quot;#0&quot;&gt;Link&lt;/a&gt;&lt;/callout&gt;

&lt;callout :variation=&quot;'warning' :icon=&quot;'warning strong'&quot;&gt;Warning callout. &lt;a href=&quot;#0&quot;&gt;Link&lt;/a&gt;&lt;/callout&gt;

&lt;callout :variation=&quot;'info strong'&quot;&gt;Info callout. &lt;a href=&quot;#0&quot;&gt;Link&lt;/a&gt;&lt;/callout&gt;</code></pre>
        </div>
      </accordion>
    </div>

    <div class="section">
      <h2>Cookies Callout</h2>
      <p>
        Used on landing page to warn users about use of cookies on our site.
      </p>
      <callout
        :variation="'cookies'"
        :icon="'info'"
        :closeable="true"
        :onClose="cookieCalloutClosed"
      >
        Cookies callout.
        <a href="#0">Link</a>
      </callout>
      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;callout :variation=&quot;'success'&quot;&gt;Success callout. &lt;a href=&quot;#0&quot;&gt;Link&lt;/a&gt;&lt;/callout&gt;

&lt;callout :variation=&quot;'warning' :icon=&quot;'warning'&quot;&gt;Warning callout. &lt;a href=&quot;#0&quot;&gt;Link&lt;/a&gt;&lt;/callout&gt;

&lt;callout :variation=&quot;'info'&quot;&gt;Info callout. &lt;a href=&quot;#0&quot;&gt;Link&lt;/a&gt;&lt;/callout&gt;</code></pre>
        </div>
      </accordion>
    </div>

    <div class="section">
      <h2>Callout Options</h2>

      <div class="section">
        <h3>Closable</h3>
        <p>
          Use the
          <strong>closeable</strong> prop to give the callout the ability to
          close.
        </p>
        <callout :variation="'success'" :closeable="true">
          Success callout.
          <a href="#0">Link</a>
        </callout>
        <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
          <div slot="content">
            <pre><code>&lt;callout :variation=&quot;'success'&quot; :closeable=&quot;true&quot;&gt;Success-alt callout. &lt;a href=&quot;#0&quot;&gt;Link&lt;/a&gt;&lt;/callout&gt;</code></pre>
          </div>
        </accordion>
      </div>
      <div class="section">
        <h3>With Icon</h3>
        <p>
          You can use the
          <code>icon</code> prop to set it to 'success', 'warning', or 'info'
          for most common cases. If you need a different icon you can simply use
          it inline.
        </p>
        <callout :icon="'success'" :variation="'success'" :closeable="true">
          Success callout.
          <a href="#0">Link</a>
        </callout>

        <callout :icon="'warning'" :variation="'warning'" :closeable="true">
          Warning callout.
          <a href="#0">Link</a>
        </callout>

        <callout :icon="'info'" :variation="'info'" :closeable="true">
          Info callout.
          <a href="#0">Link</a>
        </callout>

        <callout :variation="'info'" :closeable="true">
          <i class="icon-settings"></i> Settings have moved. Visit them
          <a href="#0">here</a>.
        </callout>

        <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
          <div slot="content">
            <pre><code>&lt;callout :variation=&quot;'success'&quot; :closeable=&quot;true&quot;&gt;Success-alt callout. &lt;a href=&quot;#0&quot;&gt;Link&lt;/a&gt;&lt;/callout&gt;</code></pre>
          </div>
        </accordion>
      </div>
    </div>

    <div class="section">
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
            <td>variation</td>
            <td>string</td>
            <td>'success'</td>
            <td>
              Use
              <code>'success'</code>, <code>'warning'</code> or
              <code>'info'</code>. Add <code>'strong'</code> when necessary.
            </td>
          </tr>
          <tr>
            <td>closeable</td>
            <td>boolean</td>
            <td>false</td>
            <td>Added an icon with a function that closes the callout.</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>string</td>
            <td>-</td>
            <td>
              Use
              <code>'success'</code>, <code>'warning'</code> or
              <code>'info'</code>.
            </td>
          </tr>
          <tr>
            <td>onClose</td>
            <td>Function</td>
            <td>-</td>
            <td>on close callback</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accordion from "./../components/Accordion.vue";
import Callout from "./../components/Callout.vue";

@Component({
  components: {
    Accordion,
    Callout
  }
})
export default class Callouts extends Vue {
  cookieCalloutClosed() {
    console.log("cookie callout closed");
  }
}
</script>

<style lang="less" scoped>
</style>
