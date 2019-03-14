<template>
  <div class="s-site-search">
    <vue-fuse
      placeholder="search"
      event-name="results"
      :list="searchData"
      :keys="['name', 'keywords', 'description']"
      :defaultAll="false"
    />
      <transition name="fade">
      <div class="search-results-container" v-if="limitedResult.length >=  1">
        <transition-group name="fade">
        <div v-for="searchData in limitedResult" :key="searchData.name" class="search-results">
          <div>
            <i :class="'s-' + searchData.image" class="result-image"></i>
          </div>
          <div>{{ searchData.title }}</div>
        </div>
        </transition-group>
      </div>
    </transition>
    <div v-if="limitedResult.length >= 1">Maybe try {{ limitedResult[0].keymatch }} instead </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";
import VueFuse from 'vue-fuse';
import * as data from "./../components/sitesearchdata.json"

@Component({
  components: VueFuse
})
export default class SiteSearch extends Vue {
  results:any = [];
  searchData = (<any>data).data;
  private resultLimit: Number = 3

  @Prop()
  $search: any;

  get limitedResult() {
    return this.resultLimit ? this.results.slice(0,this.resultLimit) : this.results;
  }

  created() {
    this.$on('results', results => {
      this.results = results;
    })
  }

  // an example
  runSearch () {
    this.$search('ch', this.searchData, { keys: ['name', 'keywords', 'description']}).then(result => {
      this.results = result;
    });
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";


.result-image {
  color: black;
  font-size: 34px;
}

.search-results-container {
  display: flex;
  flex-direction: column;
  border: 1px solid red;
}

.search-results {
  display: flex;
  flex-direction: row;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>