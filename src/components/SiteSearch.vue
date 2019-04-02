<template>
  <div class="s-site-search" :class="[{ 'is-open' : isOpen }, {'phase-one' : phaseOne}, {'phase-two' : phaseTwo}]">
    <div class="search-bar-container">
      <div class="search-icon">
        <i class="s-icon-search"></i>
      </div>
      <input ref="search_input" type="text" v-model="value" placeholder="Search..." class="search-input" @focus="playOpeningSequence" @blur="playClosingSequence">
      <div class="search-bar-status-container">
        <div v-if="noResults">No Results</div>
      </div>
    </div>
    <transition-group name="fadeY">
      <div class="search-results-container suggested" :key="limitedResult.length" v-if="phaseTwo && limitedResult.length <= 0">
        <div class="quick-links">Quick Links</div>
        <div class="search-results" v-for="(suggested, i) in suggestedLinks" :key="suggested.name">
          <div class="result-image">
            <i :class="searchData[quickLinkLoc[i]].image" class="result-image"></i>
          </div>
          <div class="result-title">{{ suggested.name }}  </div>
        </div>
      </div>

      <div class="search-results-container found" :key="limitedResult.length" v-if="phaseTwo && limitedResult.length >= 1">
        <transition-group name="fadeX">
        <div v-for="searchResult in limitedResult" :key="searchResult.name" class="search-results">
          <div class="result-image">
            <i :class="searchResult.image" class="result-image"></i>
          </div>
          <div class="result-title">{{ searchResult.title }}</div>
        </div>
        </transition-group>
      </div>
    </transition-group>
  </div>

</template>

<script lang="ts">

import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import Fuse from 'fuse.js';
import * as data from "./../components/sitesearchdata.json"

@Component({})
export default class SiteSearch extends Vue {
  $refs!: {
    search_input: HTMLInputElement;
  }

  private searchInput: Number = 0;

  result:any = [];
  searchData = (<any>data).data;


  private isOpen: Boolean = false;
  private phaseOne: Boolean = false;
  private phaseTwo: Boolean = false;

  private searchOpen: Boolean = false;


  private resultLimit: Number = 5;

  private fuse:any = null;
  private value:String = '';

  private quickLinkLoc: any = [];



  private quickLinks: any = [
    { name: 'widgets' },
    { name: 'contact' },
    { name: 'faq' },
    { name: 'mobileapp' }
  ]

  @Prop({default: ''})
  search!: String;

  @Prop({default: 'fuseResultsUpdated'})
  eventName!: string;

  @Prop({default: 'fuseInputChanged'})
  inputChangeEventName!: string;

  get suggestedLinks() {
    return this.quickLinks.filter((i) => {
      let findResult: any = this.searchData.find(data => data.name === i.name);
      let suggestResult: any = this.searchData.indexOf(findResult);
      this.quickLinkLoc.push(suggestResult);
      return suggestResult;
    });
  }

  get options() {
    let options = {
      caseSensitive: false,
      includeScore: false,
      includeMatches: false,
      tokenize: false,
      matchAllTokens: false,
      findAllMatches: false,
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ['name']
    }
    return options
  }

  get noResults () {
    if (this.result.length === 0 && this.value != '') {
      return true;
    } else {
      return false;
    }

  }


  @Watch('searchData')
    watchSearchData() {
      this.fuse.searchData = this.searchData;
      this.fuseSearch();
    }

  @Watch('search')
    watchSearch() {
      this.value = this.search;
    }

  @Watch('value')
  watchValue () {
    this.$parent.$emit(this.inputChangeEventName, this.value);
    this.$emit(this.inputChangeEventName, this.value)
    this.fuseSearch();
  }

  @Watch('result')
  watchResult() {
    this.$emit(this.eventName, this.result);
    this.$parent.$emit(this.eventName, this.result);
  }

  playClosingSequence() {
    if (this.phaseTwo) {
      setTimeout(() => {
        this.phaseTwo = !this.phaseTwo;
      }, 100);
      setTimeout(() => {
        this.phaseOne = !this.phaseOne;
      }, 200);
    }
  }

  playOpeningSequence() {
    if (!this.phaseOne) {
      this.phaseOne = !this.phaseOne;
      setTimeout(() => {
        this.phaseTwo = !this.phaseTwo;
      }, 100);
    }
  }

  initFuse() {
    this.fuse = new Fuse(this.searchData, this.options)
    if (this.search) {
      this.value = this.search;
    }
  }

  fuseSearch () {
    if (this.value.trim() === '') {
      this.result = [];
    } else {
      this.result = this.fuse.search(this.value.trim());
    }
  }

  mounted () {
    this.initFuse();
  }

  get limitedResult() {


   return this.resultLimit ? this.result.slice(0,this.resultLimit).sort((a,b) => b.weight - a.weight) : this.result;



 //   let jjj = this.resultLimit ? this.result.slice(0,this.resultLimit) : this.result;
    //jjj.sort((a,b) => b.weight - a.weight)
    //return jjj;


  }

}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.search-input {
  border: none;
  padding: none;
}

.result-title {
  font-size: 14px;
  color: @dark-5;
  font-weight: @medium;
}

.result-image, .search-image {
  width: 14px;
  height: 100%;
  color: @light-5;
  .margin-right();
  >i {
    padding: 0;
    margin: 0;
  }
}

.s-site-search {
  border: 1px solid @light-5;
  border-radius: @radius;
  height: 40px;
  width: 500px;
  position: relative;

  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &.phase-one {
    background-color: @light-1;
    height: 215px;
  }

  >i {
    font-size: 14px;
  }

}

.search-bar-container {
  display: flex;
  flex-direction: row;
  align-items: center;
    .input-padding();
}

.search-results-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  .quick-links {
    font-size: 12px;
    color: @light-5;
    .margin-bottom();
    .input-padding();
  }
}

.search-bar-status-container {
  font-size: 14px;
  white-space: nowrap;
  color: @light-5;
  .margin-left();
}

.search-results {
  display: flex;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  flex-direction: row;
  align-items: center;
  align-content: center;
  .input-padding();
  .padding-v-sides();

  &:hover {
    background-color: @light-2;
    cursor: pointer;
    .result-image,
    .result-title {
      color: @dark-2;
    }
  }
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
  transition: all 0.25s 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
}

.fadeY-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
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

.fadeY-move {
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}


.open-enter-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  height: 220px;
}

.open-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

}

.open-enter {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  height: 30px;

}

.open-leave-to {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  height: 220px;
}

</style>