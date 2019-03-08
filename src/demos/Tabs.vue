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

    <TabDevelop :tabs="tabs1" :tabSize="'small'"></TabDevelop>
    <TabDevelop :tabs="tabs2" :tabSize="'large'"></TabDevelop>
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
    TabDevelop
  }
})
export default class TabsDemo extends Vue {
  tabs1 = [
    {
      tabLabel: "General",
      tabTo: "/tab1",
      tabId: "tab1",
    },
    {
      tabLabel: "Advanced",
      tabTo: "/tab2",
      tabId: "tab2",
    },
    {
      tabLabel: "Account",
      tabTo: "/tab3",
      tabId: "tab3",
    },
    {
      tabLabel: "Integrations",
      tabTo: "/tab4",
      tabId: "tab4",
    },
    {
      tabLabel: "Payments",
      tabTo: "/tab5",
      tabId: "tab5",
    },
    {
      tabLabel: "Donations",
      tabTo: "/tab6",
      tabId: "tab6",
    },
  ];


  tabs2 = [
    {
      tabLabel: "General",
      tabTo: "/tab7",
      tabId: "tab7",
      tabIcon: "https://picsum.photos/1920/300/?image=926",
    },
    {
      tabLabel: "Advanced",
      tabTo: "/tab8",
      tabId: "tab8",
      tabIcon: "",
    },
    {
      tabLabel: "Account",
      tabTo: "/tab9",
      tabId: "tab9",
      tabIcon: "",
    },
    {
      tabLabel: "Integrations",
      tabTo: "/tab10",
      tabId: "tab10",
      tabIcon: "",
    },
    {
      tabLabel: "Payments",
      tabTo: "/tab11",
      tabId: "tab11",
      tabIcon: "",
    },
    {
      tabLabel: "Donations",
      tabTo: "/tab12",
      tabId: "tab12",
      tabIcon: "",
    },
  ];


}
</script>
