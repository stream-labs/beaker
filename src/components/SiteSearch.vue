<template>
  <div
    class="s-sitesearch"
    :class="[{ 's-sitesearch--is-open' : isOpen }, {'s-sitesearch--phase-one' : phaseOne}, {'s-sitesearch--phase-two' : phaseTwo}]"
  >
    <div class="s-sitesearch--searchbar__cont">
      <div class="s-sitesearch--icon">
        <i class="s-icon-search"></i>
      </div>
      <input
        ref="search_input"
        type="text"
        v-model="value"
        placeholder="Search..."
        class="s-sitesearch__input"
        @focus="playOpeningSequence"
        @blur="playClosingSequence"
      >
      <div class="s-sitesearch-status__cont">
        <div v-if="noResults">No Results</div>
      </div>
    </div>
    <transition-group name="s-sitesearch--fadeY">
      <div
        class="s-sitesearch-results__cont"
        :key="limitedResult.length"
        v-if="phaseTwo && limitedResult.length <= 0"
      >
        <div class="s-sitesearch-quicklinks">Quick Links</div>
        <router-link
          :to="searchData[quickLinkLoc[i]].route"
          tag="div"
          class="s-sitesearch-results"
          v-for="(suggested, i) in suggestedLinks"
          :key="suggested.name"
        >
          <div class="s-sitesearch__result--image">
            <i :class="searchData[quickLinkLoc[i]].image" class="s-sitesearch__result--image"></i>
          </div>
          <div class="s-sitesearch__result--title">{{ searchData[quickLinkLoc[i]].title }}</div>
        </router-link>
      </div>
      <div
        class="s-sitesearch-results__cont"
        :key="limitedResult.length"
        v-if="phaseTwo && limitedResult.length >= 1"
      >
        <transition-group name="s-sitesearch--fadeX">
          <router-link
            :to="searchResult.route"
            tag="div"
            v-for="searchResult in limitedResult"
            :key="searchResult.name"
            class="s-sitesearch-results"
          >
            <div class="s-sitesearch__result--image">
              <i :class="searchResult.image" class="s-sitesearch__result--image"></i>
            </div>
            <div class="s-sitesearch__result--title">{{ searchResult.title }}</div>
          </router-link>
        </transition-group>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import Fuse from "fuse.js";
//import * as dummy from "./../components/sitesearchdata.json"

@Component({})
export default class SiteSearch extends Vue {
  $refs!: {
    search_input: HTMLInputElement;
  };

  private searchInput: Number = 0;
  result: any = [];
  //searchData = (<any>data).data;
  private isOpen: Boolean = false;
  private phaseOne: Boolean = false;
  private phaseTwo: Boolean = false;
  private searchOpen: Boolean = false;
  private resultLimit: Number = 5;
  private fuse: any = null;
  private value: String = "";
  private quickLinkLoc: any = [];
  private quickLinks: any = [
    { name: "accountsettings" },
    { name: "stats" },
    { name: "faq" },
    { name: "w-alertbox" }
  ];

  @Prop()
  jsonSearch!: any;
  searchData = this.jsonSearch;

  @Prop({ default: "beaker-dummy" })
  searchLib!: string;

  @Prop({ default: "" })
  search!: String;

  @Prop({ default: "fuseResultsUpdated" })
  eventName!: string;

  @Prop({ default: "fuseInputChanged" })
  inputChangeEventName!: string;

  get suggestedLinks() {
    return this.quickLinks.filter(i => {
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
      keys: ["name"]
    };
    return options;
  }

  get noResults() {
    if (this.result.length === 0 && this.value != "") {
      return true;
    } else {
      return false;
    }
  }

  @Watch("searchData")
  watchSearchData() {
    this.fuse.searchData = this.searchData;
    this.fuseSearch();
  }

  @Watch("search")
  watchSearch() {
    this.value = this.search;
  }

  @Watch("value")
  watchValue() {
    this.$parent.$emit(this.inputChangeEventName, this.value);
    this.$emit(this.inputChangeEventName, this.value);
    this.fuseSearch();
  }

  @Watch("result")
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
    this.fuse = new Fuse(this.searchData, this.options);
    if (this.search) {
      this.value = this.search;
    }
  }

  fuseSearch() {
    if (this.value.trim() === "") {
      this.result = [];
    } else {
      this.result = this.fuse.search(this.value.trim());
    }
  }

  mounted() {
    this.initFuse();
  }

  get limitedResult() {
    return this.resultLimit
      ? this.result
          .slice(0, this.resultLimit)
          .sort((a, b) => b.weight - a.weight)
      : this.result;
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.s-sitesearch__input {
  border: none;
  padding: none;
}

.s-sitesearch__result--title {
  font-size: 14px;
  color: @dark-5;
  font-weight: @medium;
}

.s-sitesearch__result--image {
  width: 14px;
  height: 100%;
  color: @light-5;
  .margin-right();
  > i {
    padding: 0;
    margin: 0;
  }
}

.s-sitesearch {
  border: 1px solid @light-5;
  border-radius: @radius;
  height: 40px;
  width: 500px;
  position: relative;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &.s-sitesearch--phase-one {
    background-color: @light-1;
    height: 215px;
  }

  > i {
    font-size: 14px;
  }
}

.s-sitesearch--searchbar__cont {
  display: flex;
  flex-direction: row;
  align-items: center;
  .input-padding();
}

.s-sitesearch-results__cont {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  .s-sitesearch-quicklinks {
    font-size: 12px;
    color: @light-5;
    .margin-bottom();
    .input-padding();
  }
}

.s-sitesearch-status__cont {
  font-size: 14px;
  white-space: nowrap;
  color: @light-5;
  .margin-left();
}

.s-sitesearch-results {
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
    .s-sitesearch__result--image,
    .s-sitesearch__result--title {
      color: @dark-2;
    }
  }
}

.s-sitesearch--fadeX-enter-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
}

.s-sitesearch--fadeX-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  opacity: 0;
}

.s-sitesearch--fadeX-enter {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(10px);
  opacity: 0;
}

.s-sitesearch--fadeX-leave-to {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateX(10px);
}

.s-sitesearch--fadeX-move {
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.s-sitesearch--fadeY-enter-active {
  transition: all 0.25s 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
}

.s-sitesearch--fadeY-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  opacity: 0;
}

.s-sitesearch--fadeY-enter {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(-10px);
  opacity: 0;
}

.s-sitesearch--fadeY-leave-to {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(-10px);
}

.s-sitesearch--fadeY-move {
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>