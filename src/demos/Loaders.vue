<template>
  <div>
    <div class="section">
      <h1>Loaders</h1>
      <p>
        These are animated with pure SVG, they will not be animated in Microsoft
        Edge, or Opera, and will look different in firefox.
      </p>

      <div class="section">
        <h2>Full Page Loading</h2>

        <pre><code>import { Loading } from 'streamlabs-beaker';

components: {
  Loading
}</code></pre>

        <div class="section">
          <h4>Full Page Loading - Standard</h4>

          <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
            <div slot="content">
              <pre><code>&lt;Loading v-if=&quot;isLoading&quot; :loadingStrs=&quot;string&quot; @closeLoading=&quot;isLoading = false&quot;&gt;&lt;/Loading&gt;</code></pre>
            </div>
          </accordion>

          <Loading
            v-if="isLoading"
            :loadingStrs="string"
            @closeLoading="isLoading = false"
          ></Loading>

          <div class="row">
            <div class="s-button-container s-button-container--left">
              <Button
                :variation="'default'"
                :title="'loading default'"
                @click="isLoading = true"
              ></Button>
            </div>
          </div>
        </div>

        <div class="section">
          <h4>Full Page Loading - Semi-Opaque Background</h4>
          <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
            <div slot="content">
              <pre><code>&lt;Loading
  v-if=&quot;isLoadingSemi&quot;
  :semiOpaque=&quot;true&quot;
  :loadingStrs=&quot;array&quot;
  :isRandom=&quot;true&quot;
  @closeLoading=&quot;isLoadingSemi = false&quot;&gt;
&lt;/Loading&gt;
</code></pre>
            </div>
          </accordion>

          <Loading
            v-if="isLoadingSemi"
            :semiOpaque="true"
            :loadingStrs="array"
            :isRandom="true"
            @closeLoading="isLoadingSemi = false"
          ></Loading>

          <div class="row">
            <div class="s-button-container s-button-container--left">
              <Button
                :variation="'default'"
                :title="'loading semi opaque'"
                @click="isLoadingSemi = true"
              ></Button>
            </div>
          </div>
        </div>

        <div class="section">
          <h4>Full Page Loading - Semi-Opaque Background</h4>

          <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
            <div slot="content">
              <pre><code>&lt;Loading
      v-if=&quot;isLoadingSwapped&quot;
      :semiOpaque=&quot;true&quot;
      :loadingStrs=&quot;array&quot;
      :isRandom=&quot;true&quot;
      @closeLoading=&quot;isLoadingSwapped = false&quot;&gt;
    &lt;/Loading&gt;
    </code></pre>
            </div>
          </accordion>

          <Loading
            v-if="isLoadingSwapped"
            :loadingStrs="array"
            :isRandom="true"
            :swapMode="true"
            @closeLoading="isLoadingSwapped = false"
          ></Loading>

          <div class="row">
            <div class="s-button-container s-button-container--left">
              <Button
                :variation="'default'"
                :title="'loading swapped option'"
                @click="isLoadingSwapped = true"
              ></Button>
            </div>
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
              <td>loadingStrs</td>
              <td>any[] | string</td>
              <td>-</td>
              <td>
                Pass an array of stings into the loader. We recommend 3-4. Each
                shows for 4 seconds before it rotates.
              </td>
            </tr>
            <tr>
              <td>isRandom</td>
              <td>boolean</td>
              <td>false</td>
              <td>
                Randomize the strings if you set
                <code>loadingStrs</code>as an array
              </td>
            </tr>
            <tr>
              <td>semiOpaque</td>
              <td>boolean</td>
              <td>false</td>
              <td>
                Sets the background overlay to semi-opacity rather than full
                opacity.
              </td>
            </tr>
            <tr>
              <td>swapMode</td>
              <td>boolean</td>
              <td>false</td>
              <td>
                In case you need to swap day/night mode - used for Creator
                Sites.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section">
      <h2>Section Loading Spinners</h2>

      <pre><code>import { Spinner } from 'streamlabs-beaker';

components: {
  Spinner
}</code></pre>

      <h3>Loading Spinner</h3>
      <p>This is the standard size for sections within a page layout.</p>

      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;Spinner>&lt;/Spinner&gt;</code></pre>
        </div>
      </accordion>
      <div class="row">
        <Spinner :size="'small'" />
      </div>

      <h3>Loading Spinner Large</h3>
      <p>
        This is the large size spinner. It should only be used in large sections
        or full page transitions.
      </p>

      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;Spinner :size=&quot;'large'&quot;&gt;&lt;/Spinner&gt;</code></pre>
        </div>
      </accordion>
      <div class="row">
        <Spinner :size="'large'" />
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
          <tr>
            <td>swap</td>
            <td>Boolean</td>
            <td>false</td>
            <td>
              If you need to swap day/night mode [ true ], default: [ false ]
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Spinner from "./../components/Spinner.vue";
import Loading from "./../components/Loading.vue";
import Accordion from "./../components/Accordion.vue";
import Button from "./../components/Button.vue";

@Component({
  components: {
    Spinner,
    Loading,
    Accordion,
    Button
  }
})
export default class Loaders extends Vue {
  isLoading = false;
  isLoadingSemi = false;
  isLoadingSwapped = false;

  array = [
    "This loader is using an array of strings...",
    "Syncing all files to our cloud...",
    "Lorem ipsum dolor sit amet, consectetur...",
    "Sed do eiusmod tempor incididunt ut labore..."
  ];
  string = "This loader is using a single string...";
}
</script>
