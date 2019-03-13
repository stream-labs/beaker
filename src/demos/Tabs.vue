<template>
  <div>
    <h1>Tabs</h1>
    <p>Used for Tabs.</p>

    <pre><code>import { Tabs } from 'streamlabs-beaker';

components: {
  Tabs
}</code></pre>

    <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
      <div slot="content">
        <pre>
<code>&lt;tab-develop 
  :tabs=&quot;test&quot; 
  :tabSize=&quot;'large'&quot;&gt;
&lt;/tab-develop&gt;
</code></pre>
      </div>
    </Accordion>

    <div class="section section__components">
      <tab-develop :tabs="test" :tabSize="'large'"></tab-develop>
    </div>
    <!-- <tabs :tabs="tabs" :value="selectedTab" @input="onSelectTabHandler"></tabs> -->
    <!-- <table class="docs-table">
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
          <td>variant</td>
          <td>string</td>
          <td>"success"</td>
          <td>
            How the badge will look or funciton. Variants:
            <code>success</code>,
            <code>tag</code>,
            <code>new</code>,
            <code>beta</code>,
            <code>warning</code>,
            <code>pro</code>,
            <code>progress</code>,
            <code>mod</code>, and
            <code>count</code>.
          </td>
        </tr>
        <tr>
          <td>alignLeft</td>
          <td>boolean</td>
          <td>false</td>
          <td>Moves 8px of margin from the left to the right.</td>
        </tr>
        <tr>
          <td>noMargin</td>
          <td>boolean</td>
          <td>false</td>
          <td>Removes margin from left and right.</td>
        </tr>
        <tr>
          <td>barColor</td>
          <td>string</td>
          <td>"#31c3a2"</td>
          <td>
            Background color of progress bar.
            <code>variant</code> prop must be set to
            <code>progress</code>.
          </td>
        </tr>
        <tr>
          <td>textColor</td>
          <td>string</td>
          <td>"#ffffff"</td>
          <td>
            Text color of progress bar.
            <code>variant</code> prop must be set to
            <code>progress</code>.
          </td>
        </tr>
        <tr>
          <td>current</td>
          <td>number</td>
          <td>null</td>
          <td>
            Current progress amount.
            <code>variant</code> prop must be set to
            <code>progress</code>.
          </td>
        </tr>
        <tr>
          <td>total</td>
          <td>number</td>
          <td>null</td>
          <td>
            Total progross amount.
            <code>variant</code> prop must be set to
            <code>progress</code>.
          </td>
        </tr>
        <tr>
          <td>separator</td>
          <td>string</td>
          <td>"/"</td>
          <td>
            Separator between current and total amounts is displayed.
            <code>variant</code> prop must be set to
            <code>progress</code>.
          </td>
        </tr>
        <tr>
          <td>suffix</td>
          <td>string</td>
          <td>null</td>
          <td>
            String to the right of the total amount.
            <code>variant</code> prop must be set to
            <code>progress</code>.
          </td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Accordion from "./../components/Accordion.vue"
import ScrollNav from "./../components/ScrollNav.vue"
import TabDevelop from "./../components/TabDevelop.vue"
import Tabs from "./../components/Tabs.vue"

@Component({
  components: {
    Accordion,
    ScrollNav,
    TabDevelop,
    Tabs,
  },
})
export default class TabsDemo extends Vue {
  test = [
    {
      tabLabel: "General",
      tabTo: "#",
      tabId: "tab1",
      tabIcon: "information",
    },
    {
      tabLabel: "Advanced",
      tabTo: "#",
      tabId: "tab2",
      tabIcon: "information",
    },
    {
      tabLabel: "Account",
      tabTo: "#",
      tabId: "tab3",
      tabIcon: "information",
    },
    {
      tabLabel: "Integrations",
      tabTo: "#",
      tabId: "tab4",
      tabIcon: "information",
    },
    {
      tabLabel: "Payments",
      tabTo: "#",
      tabId: "tab5",
      tabIcon: "information",
    },
    {
      tabLabel: "Apps",
      tabTo: "#",
      tabId: "tab6",
      tabIcon: "information",
    },
  ]

  tabs = [
    {
      name: "General",
      value: "general",
    },
    {
      name: "Advanced",
      value: "advanced",
    },
    {
      name: "Account",
      value: "Account",
    },
    {
      name: "Integrations",
      value: "integrations",
    },
    {
      name: "Payments",
      value: "payments",
    },
    {
      name: "Donations",
      value: "donations",
    },
    {
      name: "Subscriptions",
      value: "subscriptions",
    },
    {
      name: "Preferences",
      value: "preferences",
    },
    {
      name: "Apps",
      value: "apps",
    },
    {
      name: "Merch",
      value: "merch",
    },
    {
      name: "API",
      value: "api",
    },
    {
      name: "Moderators",
      value: "moderators",
    },
    {
      name: "Themes",
      value: "themes",
    },
  ]

  selectedTab = "general"

  onSelectTabHandler(tab: string) {
    this.selectedTab = tab
  }
}
</script>
