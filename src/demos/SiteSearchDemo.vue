<template>
  <div>
    <div class="section">
      <h1>Site Search</h1>
      <p>This site search is in very early beta stages, it is not ready for prod</p>

      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>
  &lt;site-search
    :jsonSearch=&quot;jsonSearch&quot;
    :quickLinks=&quot;[
      {name: 'faq'},
      {name: 'terms'},
      {name: 'privacy'},
      {name: 'allstars'}
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
      <div class="row">
        <site-search
          :jsonSearch="jsonSearch"
          :quickLinks="[{name: 'faq'}, {name: 'terms'}, {name: 'privacy'}, {name: 'allstars'}]"
        ></site-search>
      </div>

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
            <td>max of 4 links, each must match name of entry in search json</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SiteSearch from "./../components/SiteSearch.vue";
import Accordion from "./../components/Accordion.vue";
import * as searchData from "./../components/sitesearchdata.json";

@Component({
  components: {
    SiteSearch,
    Accordion
  }
})
export default class SiteSearchDemo extends Vue {
  jsonSearch = (searchData as any).data;
}
</script>


<style lang="less">
@import "./../styles/Imports";

.topnav {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;

  .logo {
    display: inline-flex;
    width: 40px;
    height: 40px;
    flex-grow: 0;
    background-color: @teal;
  }

  .spacer {
    display: inline-flex;
    height: 40px;
    flex-grow: 1;
    background-color: #ff99ff;
  }

  .search-holder {
    display: inline-flex;
    height: 40px;
    flex-grow: 0;
  }

  .buttons {
    display: inline-flex;
    height: 40px;
    width: 200px;
    flex-grow: 0;
    background-color: @teal;
  }
}
</style>
