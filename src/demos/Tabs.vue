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
<code>&lt;tabs 
  :tabs=&quot;tabs&quot; 
  :size=&quot;'small'&quot;
  :selected=&quot;advanced&quot;&gt;
  &lt;div slot=&quot;general&quot;&gt;general&lt;/div&gt;
  &lt;div slot=&quot;advanced&quot;&gt;advanced&lt;/div&gt;
  &lt;div slot=&quot;account&quot;&gt;account&lt;/div&gt;
  &lt;div slot=&quot;integrations&quot;&gt;integrations&lt;/div&gt;
  &lt;div slot=&quot;payments&quot;&gt;payments&lt;/div&gt;
  &lt;div slot=&quot;donations&quot;&gt;donations&lt;/div&gt;
  &lt;div slot=&quot;subscriptions&quot;&gt;subscriptions&lt;/div&gt;
  &lt;div slot=&quot;preferences&quot;&gt;preferences&lt;/div&gt;
  &lt;div slot=&quot;apps&quot;&gt;apps&lt;/div&gt;
  &lt;div slot=&quot;merch&quot;&gt;merch&lt;/div&gt;
  &lt;div slot=&quot;api&quot;&gt;api&lt;/div&gt;
  &lt;div slot=&quot;moderators&quot;&gt;moderators&lt;/div&gt;
  &lt;div slot=&quot;themes&quot;&gt;themes&lt;/div&gt;
&lt;/tabs&gt;
</code></pre>
      </div>
    </Accordion>

    <tabs :tabs="tabs" :size="'small'" :selected="'advanced'">
      <div slot="general">general</div>
      <div slot="advanced">advanced</div>
      <div slot="account">account</div>
      <div slot="integrations">integrations</div>
      <div slot="payments">payments</div>
      <div slot="donations">donations</div>
      <div slot="subscriptions">subscriptions</div>
      <div slot="preferences">preferences</div>
      <div slot="apps">apps</div>
      <div slot="merch">merch</div>
      <div slot="api">api</div>
      <div slot="moderators">moderators</div>
      <div slot="themes">themes</div>
    </tabs>
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
          <td>
            tabs information to display. you can make array like below
            <br>
            <code>
              tabs = [
              {
              name: "General",
              value: "general",
              icon: "information"
              }
            </code>
          </td>
        </tr>
        <tr>
          <td>size</td>
          <td>string</td>
          <td>small</td>
          <td>text size of tabs. Options are "small" and "large"</td>
        </tr>
        <tr>
          <td>value</td>
          <td>string</td>
          <td>null</td>
          <td>default selected tab</td>
        </tr>
        <tr>
          <td>@input</td>
          <td>function</td>
          <td>null</td>
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
import Tabs from "./../components/Tabs.vue";

@Component({
  components: {
    Accordion,
    ScrollNav,
    Tabs
  }
})
export default class TabsDemo extends Vue {
  // test = [
  //   {
  //     tabLabel: "General",
  //     tabTo: "#",
  //     tabId: "tab1",
  //     tabIcon: "information"
  //   },
  //   {
  //     tabLabel: "Advanced",
  //     tabTo: "#",
  //     tabId: "tab2",
  //     tabIcon: "information"
  //   },
  //   {
  //     tabLabel: "Account",
  //     tabTo: "#",
  //     tabId: "tab3",
  //     tabIcon: "information"
  //   },
  //   {
  //     tabLabel: "Integrations",
  //     tabTo: "#",
  //     tabId: "tab4",
  //     tabIcon: "information"
  //   },
  //   {
  //     tabLabel: "Payments",
  //     tabTo: "#",
  //     tabId: "tab5",
  //     tabIcon: "information"
  //   },
  //   {
  //     tabLabel: "Apps",
  //     tabTo: "#",
  //     tabId: "tab6",
  //     tabIcon: "information"
  //   }
  // ];

  tabs = [
    {
      name: "General",
      value: "general",
      icon: "information"
    },
    {
      name: "Advanced",
      value: "advanced",
      icon: ""
    },
    {
      name: "Account",
      value: "account",
      icon: ""
    },
    {
      name: "Integrations",
      value: "integrations",
      icon: ""
    },
    {
      name: "Payments",
      value: "payments",
      icon: ""
    },
    {
      name: "Donations",
      value: "donations",
      icon: ""
    },
    {
      name: "Subscriptions",
      value: "subscriptions",
      icon: ""
    },
    {
      name: "Preferences",
      value: "preferences",
      icon: ""
    },
    {
      name: "Apps",
      value: "apps",
      icon: ""
    },
    {
      name: "Merch",
      value: "merch",
      icon: ""
    },
    {
      name: "API",
      value: "api",
      icon: ""
    },
    {
      name: "Moderators",
      value: "moderators",
      icon: ""
    },
    {
      name: "Themes",
      value: "themes",
      icon: ""
    }
  ];
}
</script>
