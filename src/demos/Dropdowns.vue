<template>
  <div>
    <h1>Dropdowns</h1>

    <div class="section">
      <h2>Pane Dropdown</h2>
      <h3>With Dropdown Icon</h3>

      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
<code>&lt;pane-dropdown&gt;
  &lt;template slot=&quot;title&quot;&gt;Trending&lt;/template&gt;
  &lt;a href=&quot;#&quot;&gt;Add&lt;/a&gt;
  &lt;a href=&quot;#&quot;&gt;Update&lt;/a&gt;
  &lt;a href=&quot;#&quot;&gt;Remove&lt;/a&gt;
&lt;/pane-dropdown&gt;</code></pre>
        </div>
      </Accordion>

      <pane-dropdown>
        <template slot="title">Trending</template>
        <a href="#">Most Installed</a>
        <a href="#">Newly Added</a>
        <a href="#">Trending</a>
      </pane-dropdown>
    </div>

    <div class="section">
      <h3>Align Menu Right</h3>

      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content"></div>
      </Accordion>

      <pane-dropdown :alignMenuRight="true">
        <span slot="title">Dropdown Menu</span>
        <a href="#">Hey I'm a longer link here</a>
        <a href="#">Let's see how this looks</a>
        <a href="#">I'm in a pane dropdown aligned to the right</a>
      </pane-dropdown>
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
          <tr></tr>
          <tr>
            <td>dropdownIcon</td>
            <td>boolean</td>
            <td>true</td>
            <td>Show or hide dropdown icon.</td>
          </tr>
          <tr>
            <td>alignMenuRight</td>
            <td>boolean</td>
            <td>false</td>
            <td>Align the dropdown menu to the right side of its toggle.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accordion from "./../components/Accordion.vue";
import PaneDropdown from "./../components/PaneDropdown.vue";
import Tabs from "./../components/Tabs.vue";

@Component({
  components: {
    Accordion,
    PaneDropdown,
    Tabs
  }
})
export default class Dropdowns extends Vue {}
</script>
