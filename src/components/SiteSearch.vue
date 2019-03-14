<template>
  <div class="s-site-search">
    <vue-fuse
      placeholder="search"
      event-name="results"
      :list="searchData"
      :keys="['name', 'keywords', 'description']"
      :defaultAll="false"
    />
      <transition name="fadeY">
      <div class="search-results-container" v-if="limitedResult.length >=  1">
        <transition-group name="fadeX" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave">
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
  private resultLimit: Number = 3;

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
  background-color: @light-2;
  height: 230px;
  overflow: hidden;
  padding: 20px;
}

.search-results {
  display: flex;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  flex-direction: row;
}

.fadeX-enter-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
}

.fadeX-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  opacity: 0;
}

.fadeX-enter {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(10px);
  opacity: 0;
}

.fadeX-leave-to {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateX(10px);
}

.fadeX-move {
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}


.fadeY-enter-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
}

.fadeY-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
}

.fadeY-enter {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(-10px);
  opacity: 0;
}

.fadeY-leave-to {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(-10px);
}



</style>