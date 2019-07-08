<template>
  <div>
    <div class="section">
      <h1>Site Search</h1>
      <p>
        This site search is ready to go and on live, it can also be used with other json files. as long as they are structured properly.
      </p>
      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>
  &lt;site-search
    :jsonSearch=&quot;jsonSearch&quot;
    :quickLinks=&quot;[
      {item:{name:'donationsettings'}},
      {item:{name: 'd-alertbox'}},
      {item:{name: 'creatorsites'}},
      {item:{name: 'merchsetup'}},
      {item:{name:'d-facemasks'}},
      {item:{name:'streamlabs-obs'}}
    ]&gt;
  &lt;/site-search&gt;

  &lt;script&gt;

    import * as searchData from &quot;./../location&quot;;


    data() {
      return {
        jsonSearch: [] = (searchData).data
      };
    }

  &lt;/script&gt;


  </code></pre>
        </div>
      </accordion>

      <h2>Seach Demo</h2>
      <div class="row topnav">
        <site-search
          :jsonSearch="jsonSearch"
          :quickLinks="[
            { item: { name: 'donationsettings' } },
            { item: { name: 'd-alertbox' } },
            { item: { name: 'creatorsites' } },
            { item: { name: 'merchsetup' } },
            { item: { name: 'd-facemasks' } },
            { item: { name: 'streamlabs-obs' } }
          ]"
        ></site-search>
      </div>
      <div class="row">
        <accordion :title="'How to use a custom .json'">
          <div slot="content">
          <p>The .json file must be structured as below</p>
          <pre>
            <code>
{
  "data": [
    {
      "name": "contact",
      "title": "Contact Us",
      "route": "/contact",
      "keywords": [
        "contact",
        "business",
        "inquiries",
        "social",
        "media"
      ],
      "description": "Need to get a hold of Streamlabs?",
      "keymatches": [
        "howto",
        "faq"
      ],
      "image": "icon-phone-case",
      "howto": "null",
      "weight": 4
    },
  ]
}
            </code>
          </pre>
          <p><code>keymatches</code> and <code>howto</code> are not used right now, but will be used in the future</p>
          <p>import the json and component as normal above</p>
        </div>
      </accordion>
      <table class="docs-table">
        <thead>
          <tr>
            <th>Props</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>jsonSearch</td>
            <td>String</td>
            <td>null</td>
            <td>Name of the imported json (must be imported in parent)</td>
          </tr>
          <tr>
            <td>quickLinks</td>
            <td>Array</td>
            <td>null</td>
            <td>
              max of 6 links, each must match name of entry in search json
            </td>
          </tr>
        </tbody>
      </table>

      <div class="row">
        <text-picker :jsonSearch="varData" :rows="1">
        </text-picker>
        </div>


    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SiteSearch from "./../components/SiteSearch.vue";
import TextPicker from "./../components/TextPicker.vue";
import Accordion from "./../components/Accordion.vue";
import * as searchData from "./../components/sitesearchdata.json";
import varSearch from "./../components/cloudbotvariables.json";

@Component({
  components: {
    SiteSearch,
    TextPicker,
    Accordion
  }
})
export default class SiteSearchDemo extends Vue {
  jsonSearch = (searchData as any).data;
  varData = varSearch;
}
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.topnav {
  height: 40px;
}
</style>
