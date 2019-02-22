<template>
  <div>
    <div class="section">
      <h1>Accordions</h1>
      <pre><code>import { Accordion } from 'streamlabs-beaker';

components: {
  Accordion
}</code></pre>
      <h3>Default settings</h3>
      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'" class="docs-code">
        <div slot="content">
          <pre>
<code>&lt;Accordion :opened-title=&quot;'Close Accordion'&quot; :closed-title=&quot;'Open Accordion'&quot;&gt;
  &lt;div slot=&quot;content&quot;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  &lt;/div&gt;
&lt;/Accordion&gt;</code></pre>
        </div>
      </Accordion>

      <Accordion :opened-title="'Close Accordion'" :closed-title="'Open Accordion'">
        <div slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      </Accordion>

      <h3>Set to be open</h3>
      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'" class="docs-code">
        <div slot="content">
          <pre>
<code>&lt;Accordion :opened-title=&quot;'Hide Content'&quot; :closed-title=&quot;'Show Content'&quot; :isOpen=&quot;true&quot;&gt;
  &lt;div slot=&quot;content&quot;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  &lt;/div&gt;
&lt;/Accordion&gt;</code></pre>
        </div>
      </Accordion>
      <Accordion :opened-title="'Hide Content'" :closed-title="'Show Content'" :isOpen="true">
        <div slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      </Accordion>

      <h3>Alternative no border style</h3>
      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'" class="docs-code">
        <div slot="content">
          <pre>
<code>&lt;Accordion :opened-title=&quot;'Hide Content'&quot; :closed-title=&quot;'Show Content'&quot; :no-border=&quot;true&quot;&gt;
  &lt;div slot=&quot;content&quot;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  &lt;/div&gt;
&lt;/Accordion&gt;</code></pre>
        </div>
      </Accordion>
      <Accordion :opened-title="'Hide Content'" :closed-title="'Show Content'" :no-border="true">
        <div slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      </Accordion>

      <h3>Accordion within Accordion</h3>
      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'" class="docs-code">
        <div slot="content">
          <pre>
<code>&lt;Accordion :opened-title=&quot;'Hide Inner Accordion'&quot; :closed-title=&quot;'Show Inner Accordion'&quot;&gt;
  &lt;div slot=&quot;content&quot;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;Accordion :opened-title=&quot;'Hide Content'&quot; :closed-title=&quot;'Show Content'&quot;&gt;
      &lt;div slot=&quot;content&quot;&gt;
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      &lt;/div&gt;
    &lt;/Accordion&gt;
  &lt;/div&gt;
&lt;/Accordion&gt;</code></pre>
        </div>
      </Accordion>

      <Accordion :opened-title="'Hide Inner Accordion'" :closed-title="'Show Inner Accordion'">
        <div
          slot="content"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <Accordion :opened-title="'Hide Content'" :closed-title="'Show Content'">
            <div
              slot="content"
            >Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum distinctio architecto unde, iste adipisci earum odit saepe incidunt possimus. Autem modi et enim veritatis qui impedit perferendis architecto iure sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta assumenda optio consequuntur necessitatibus, eum qui placeat praesentium itaque ipsum dolorum. Rem nobis blanditiis id, eligendi rerum quisquam non ipsum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias et nesciunt ratione! Nihil eum rem ex consectetur amet, tempore natus laborum ad quod provident autem voluptatibus distinctio earum magni facere?</div>
          </Accordion>
        </div>
      </Accordion>

      <h3>Alternative toggle slot</h3>
      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'" class="docs-code">
        <div slot="content">
          <pre>
<code>&lt;Accordion :opened-title=&quot;'Hide Content'&quot; :closed-title=&quot;'Show Content'&quot; :no-border=&quot;true&quot;&gt;
  &lt;div slot=&quot;content&quot;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  &lt;/div&gt;
&lt;/Accordion&gt;</code></pre>
        </div>
      </Accordion>
      <Accordion>
        <div slot="toggle">
          <img class="logo" alt="Vue logo" src="../assets/imgs/beaker-round.svg">
        </div>
        <div slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      </Accordion>

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
            <td>openedTitle</td>
            <td>string</td>
            <td>null</td>
            <td>Title to display when accordion is open</td>
          </tr>
          <tr>
            <td>closedTitle</td>
            <td>string</td>
            <td>null</td>
            <td>Title to display when accordion is closed</td>
          </tr>
          <tr>
            <td>title</td>
            <td>string</td>
            <td>null</td>
            <td>(Optional) Overrides both open and closed titles</td>
          </tr>
          <tr>
            <td>isOpened</td>
            <td>boolean</td>
            <td>false</td>
            <td>Have the accordion open by default</td>
          </tr>
          <tr>
            <td>noBorder</td>
            <td>boolean</td>
            <td>false</td>
            <td>Alternative style with no border or padding</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Accordion from './../components/Accordion.vue'
import ColorPicker from './../components/ColorPicker.vue'

@Component({
  components: {
    Accordion,
    ColorPicker,
  },
})
export default class Accordions extends Vue {
  colors = {
    hex: '#194d33',
    hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
    hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
    rgba: { r: 25, g: 77, b: 51, a: 1 },
    a: 1,
  }

  colors2 = {
    hex: '#ff0000',
    rgba: { r: 255, g: 0, b: 0, a: 1 },
  }
}
</script>
