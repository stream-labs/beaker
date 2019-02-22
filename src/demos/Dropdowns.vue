<template>
  <div>
    <h1>Dropdowns</h1>

    <div class="section">
      <h2>Pane Dropdown</h2>
      <h3>With Dropdown Icon</h3>

      <Accordion
        :openedTitle="'Hide Code'"
        :closedTitle="'Show Code'">
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
      <h3>Without Dropdown Icon</h3>

      <Accordion
        :openedTitle="'Hide Code'"
        :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
<code>&lt;pane-dropdown :dropdown-icon=&quot;false&quot;&gt;
  &lt;i slot=&quot;title&quot; class=&quot;icon-settings&quot;&gt;&lt;/i&gt;
  &lt;a href=&quot;#&quot;&gt;Add&lt;/a&gt;
  &lt;a href=&quot;#&quot;&gt;Update&lt;/a&gt;
  &lt;a href=&quot;#&quot;&gt;Remove&lt;/a&gt;
&lt;/pane-dropdown&gt;</code></pre>
        </div>
      </Accordion>

      <pane-dropdown :dropdown-icon="false">
        <i slot="title" class="icon-settings"></i>
        <a href="#">Add</a>
        <a href="#">Update</a>
        <a href="#">Remove</a>
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
          <tr>
          <tr>
            <td>dropdownIcon</td>
            <td>boolean</td>
            <td>true</td>
            <td>Show or hide dropdown icon.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Accordion from './../components/Accordion.vue'
import PaneDropdown from './../components/PaneDropdown.vue'
import Tabs from './../components/Tabs.vue'

@Component({
  components: {
    Accordion,
    PaneDropdown,
    Tabs,
  },
})
export default class Dropdowns extends Vue {}
</script>

<style lang="less" scoped>
.pane-dropdown {
  display: inline-block !important;
}
</style>
