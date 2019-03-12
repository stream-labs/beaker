<template>
  <div>
    <h1>Tabs</h1>

    <pre><code>import { Tabs } from 'streamlabs-beaker';

components: {
  Tabs
}</code></pre>

    <h3>Standard</h3>
    <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
      <div slot="content">
        <pre>
<code>&lt;Tabs
  :tabs=&quot;tabs&quot;
  :value=&quot;selectedTab&quot;
  @input=&quot;onSelectTabHandler&quot;&gt;
  &lt;div slot=&quot;general&quot;&gt;
    General slot content
  &lt;/div&gt;
  &lt;div slot=&quot;advanced&quot;&gt;
    Advanced slot content
  &lt;/div&gt;
&lt;/Tabs&gt;</code></pre>
      </div>
    </Accordion>

    <tab-develop :tabs="test" :tabSize="'small'" @input="onSelectTabHandler"></tab-develop>
    <!-- <tabs :tabs="tabs" :value="selectedTab" @input="onSelectTabHandler"></tabs> -->
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
      tabLabel: "General",
      tabTo: "#",
      tabId: "tab2",
      tabIcon: "information"
    },
    {
      tabLabel: "General",
      tabTo: "#",
      tabId: "tab3",
      tabIcon: "information"
    },
    {
      tabLabel: "General",
      tabTo: "#",
      tabId: "tab4",
      tabIcon: "information"
    },
    {
      tabLabel: "General",
      tabTo: "#",
      tabId: "tab5",
      tabIcon: "information"
    },
    {
      tabLabel: "General",
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
