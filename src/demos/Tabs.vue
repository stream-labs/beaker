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

    <Tabs :tabs="testTabs" :tabSize="'small'"></Tabs>
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
  testTabs = [
    {
      tabLabel: "General",
      tabTo: "/tab1",
      tabId: "tab1",
      tabIcon: "/img/kevin-standard.464ab689.svg",
      isDisabled: false
    },
    {
      tabLabel: "Advanced",
      tabTo: "/tab2",
      tabId: "tab2",
      isDisabled: false
    },
    {
      tabLabel: "Account",
      tabTo: "/tab3",
      tabId: "tab3",
      isDisabled: false
    },
    {
      tabLabel: "Integrations",
      tabTo: "/tab4",
      tabId: "tab4",
      isDisabled: false
    },
    {
      tabLabel: "Payments",
      tabTo: "/tab5",
      tabId: "tab5",
      isDisabled: false
    },
    {

      tabLabel: "Donations",
      tabTo: "/tab6",
      tabId: "tab6",
      isDisabled: true
    },
  ];

}
</script>
