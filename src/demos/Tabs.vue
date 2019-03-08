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

    <TabDevelop :tabs="tabs" :tabSize="'small'"></TabDevelop>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accordion from "./../components/Accordion.vue";
import ScrollNav from "./../components/ScrollNav.vue";
import TabDevelop from "./../components/TabDevelop.vue";

@Component({
  components: {
    Accordion,
    ScrollNav,
    TabDevelop,
  }
})
export default class TabsDemo extends Vue {

  tabs = [
    {
      tabLabel: "General",
      tabTo: "#",
      tabId: "tab1",
    },
    {
      tabLabel: "Advanced",
      tabTo: "#",
      tabId: "tab2",
    },
    {
      tabLabel: "Account",
      tabTo: "#",
      tabId: "tab3",
    },
    {
      tabLabel: "Integrations",
      tabTo: "#",
      tabId: "tab4",
    },
    {
      tabLabel: "Payments",
      tabTo: "#",
      tabId: "tab5",
    },
    {
      tabLabel: "Donations",
      tabTo: "#",
      tabId: "tab6",
    },
  ];

}
</script>
