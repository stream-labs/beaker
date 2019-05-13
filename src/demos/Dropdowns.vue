<template>
  <div>
    <h1>Dropdowns</h1>

    <div class="section">
      <h2>Pane Dropdown</h2>
      <h3>With Dropdown Icon</h3>

      <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
<code>import { Accordion } from 'streamlabs-beaker';

components: {
  Accordion
}

&lt;pane-dropdown&gt;
  &lt;template slot=&quot;title&quot;&gt;Trending&lt;/template&gt;
  &lt;a href=&quot;#&quot;&gt;Add&lt;/a&gt;
  &lt;a href=&quot;#&quot;&gt;Update&lt;/a&gt;
  &lt;a href=&quot;#&quot;&gt;Remove&lt;/a&gt;
&lt;/pane-dropdown&gt;</code></pre>
        </div>
      </Accordion>
      <pane-dropdown>
        <template slot="title"
          >Trending</template
        >
        <a href="#"> <i class="icon-check"></i>Most Installed </a>
        <a href="#"> <i class="icon-delete"></i>Newly Added </a>
        <a href="#">Trending</a>
      </pane-dropdown>
    </div>
    <div class="section">
      <h3>Menu Align</h3>
      <pane-dropdown :menuAlign="'right'">
        <span slot="title">Right Dropdown Menu</span>
        <a href="#">Hey I'm a longer link here</a>
        <a href="#">Let's see how this looks</a>
        <a href="#">I'm in a pane dropdown aligned to the right</a>
      </pane-dropdown>
      <br />
      <br />
      <pane-dropdown :menuAlign="'center'">
        <span slot="title">Center Dropdown Menu</span>
        <a href="#">Hey I'm a longer link here</a>
        <a href="#">Let's see how this looks</a>
        <a href="#">I'm in a pane dropdown aligned to the right</a>
      </pane-dropdown>
      <br />
      <br />
      <pane-dropdown :custom="true">
        <span slot="title">Custom Dropdown Menu</span>
        <div>
          hey
          <span>watsup</span>
          <br />
          <b>put whatever you want in here</b>
        </div>
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
            <td>menuAlign</td>
            <td>string</td>
            <td>null</td>
            <td>
              Default will align the menu to the left side of the toggle. Use
              <code>right</code> or <code>center</code> to align the dropdown
              menu to the right or center of its toggle.
            </td>
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
