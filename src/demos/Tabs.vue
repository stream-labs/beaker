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
      <tab-develop :tabs="test" :tabSize="'small'"></tab-develop>
    </div>
    <tabs :tabs="tabs" :value="selectedTab" @input="onSelectTabHandler"></tabs>
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
          <td>tabs</td>
          <td>array</td>
          <td>null</td>
          <td>tabs information to display. you can make array like below
            <br>
            <code>
              test = [
              {
              tabLabel: "General",
              tabTo: "#",
              tabId: "tab1",
              tabIcon: "information"
              }
            </code>
          </td>
        </tr>
        <tr>
          <td>tabSize</td>
          <td>string</td>
          <td>small</td>
          <td>text size of tabs. Options are "small" and "large"</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accordion from "./../components/Accordion.vue";
import ScrollNav from "./../components/ScrollNav.vue";
import TabDevelop from "./../components/TabDevelop.vue";
import Tabs from "./../components/Tabs.vue";

@Component({
  components: {
    Accordion,
    ScrollNav,
    TabDevelop,
    Tabs
  }
})
export default class TabsDemo extends Vue {
  test = [
    {
      tabLabel: "General",
      tabTo: "#",
      tabId: "tab1",
      tabIcon: "information"
    },
    {
      tabLabel: "Advanced",
      tabTo: "#",
      tabId: "tab2",
      tabIcon: "information"
    },
    {
      tabLabel: "Account",
      tabTo: "#",
      tabId: "tab3",
      tabIcon: "information"
    },
    {
      tabLabel: "Integrations",
      tabTo: "#",
      tabId: "tab4",
      tabIcon: "information"
    },
    {
      tabLabel: "Payments",
      tabTo: "#",
      tabId: "tab5",
      tabIcon: "information"
    },
    {
      tabLabel: "Apps",
      tabTo: "#",
      tabId: "tab6",
      tabIcon: "information"
    }
  ];

  tabs = [
    {
      name: "General",
      value: "general"
    },
    {
      name: "Advanced",
      value: "advanced"
    },
    {
      name: "Account",
      value: "Account"
    },
    {
      name: "Integrations",
      value: "integrations"
    },
    {
      name: "Payments",
      value: "payments"
    },
    {
      name: "Donations",
      value: "donations"
    },
    {
      name: "Subscriptions",
      value: "subscriptions"
    },
    {
      name: "Preferences",
      value: "preferences"
    },
    {
      name: "Apps",
      value: "apps"
    },
    {
      name: "Merch",
      value: "merch"
    },
    {
      name: "API",
      value: "api"
    },
    {
      name: "Moderators",
      value: "moderators"
    },
    {
      name: "Themes",
      value: "themes"
    }
  ];

  selectedTab = "general";

  onSelectTabHandler(tab: string) {
    this.selectedTab = tab;
  }
}
</script>
