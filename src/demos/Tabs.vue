<template>
  <div>
    <h2>Tabs</h2>
    <h3>Standard</h3>
    <Accordion
      :openedTitle="'Hide Code'"
      :closedTitle="'Show Code'">
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

    <Tabs
      :tabs="tabs"
      :value="selectedTab"
      @input="onSelectTabHandler">
      <div slot="general">
        General slot content
      </div>
      <div slot="advanced">
        Advanced slot content
      </div>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accordion from "./../components/Accordion.vue";
import ScrollNav from "./../components/ScrollNav.vue";
import Tabs from "./../components/Tabs.vue";

@Component({
  components: {
    Accordion,
    ScrollNav,
    Tabs
  }
})
export default class TabsDemo extends Vue {
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
    }
  ];

  selectedTab = "general";

  onSelectTabHandler(tab: string) {
    this.selectedTab = tab;
  }
}
</script>
