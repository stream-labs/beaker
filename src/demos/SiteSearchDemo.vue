<template>
  <div>
    <div class="section">
      <h1>Site Search</h1>
      <p>This site search is in very early beta stages</p>
      <site-search :jsonSearch="jsonSearch" :quickLinks="[{name: 'faq'}, {name: 'contact'}, {name: 'privacy'}, {name: 'allstars'}]"></site-search>
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
