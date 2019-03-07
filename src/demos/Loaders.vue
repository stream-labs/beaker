<template>
  <div>
    <div class="section">
      <h1>Loaders</h1>

      <pre><code>import { Loading } from 'streamlabs-beaker';
        
components: {
  Loading
}</code></pre>

      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;loading v-if=&quot;isLoading&quot; :spinnerSize=&quot;'large'&quot; @closeLoading=&quot;isLoading = false&quot;&gt;
    &lt;template slot&gt;Syncing all files to our cloud...&lt;/template&gt;
&lt;/loading&gt;</code></pre>
        </div>
      </accordion>

      <loading
        v-if="isLoading"
        :loadingStrs="strs"
        :spinnerSize="'large'"
        @closeLoading="isLoading = false"
      ></loading>

      <div class="row">
        <div class="button-container button-container--left">
          <Button :variation="'default'" :title="'loading'" @click="isLoading = true"></Button>
        </div>
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
            <td>spinnerSize</td>
            <td>String</td>
            <td>'small'</td>
            <td>'small', 'large'</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section">
      <h1>Spinners</h1>
      <p>These are animated with pure SVG, they will not be animated in Microsoft Edge, or Opera, and will look different in firefox.</p>

      <pre><code>import { Spinner } from 'streamlabs-beaker';
        
components: {
  Spinner
}</code></pre>

      <h2>Oscillating Bars</h2>

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
import { Component, Vue } from "vue-property-decorator"
import Spinner from "./../components/Spinner.vue"
import Loading from "./../components/Loading.vue"
import Accordion from "./../components/Accordion.vue"
import Button from "./../components/Button.vue"

@Component({
  components: {
    Spinner,
    Loading,
    Accordion,
    Button,
  },
})
export default class Loaders extends Vue {
  msg = "hi!"
  isLoading = false
  strs = ["Syncing all files to our cloud...", "Lorem ipsum dolor sit amet, consectetur adipiscing elit", "sed do eiusmod tempor incididunt ut labore et dolore magna"]
}
</script>
