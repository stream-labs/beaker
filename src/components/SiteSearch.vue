<template>
  <div class="s-site-search">


            <vue-fuse
          placeholder="search"
          event-name="results"
          :list="SearchData"
          :keys="['name']"
          class="w-64 text-center h-8 border rounded-lg center"
        />





  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Fuse from 'fuse.js';
import VueFuse from 'vue-fuse';
Vue.use(VueFuse);
import { onsiteSearchData } from "./../components/sitesearchdata.js";


@Component({
  components: VueFuse
})
export default class SiteSearch extends Vue {

  private results = [];

  @Prop()
  SearchData = onsiteSearchData.getOnsiteSearchData();




  @Prop()
  label!: String;

  @Prop()
  value!: Boolean;

  created() {
    this.$on('results', results => {
      this.results = results
    })
  }

  runSearch() {
    this.$search('J', this.SearchData, { keys: ['name']}).then(result => {
      this.results = result
    })
  }







}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";
</style>