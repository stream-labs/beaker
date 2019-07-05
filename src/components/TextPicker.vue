<template>
  <div
    class="s-sitesearch"
    :class="[
      { 's-textpicker--phase-one': phaseOne },
      { 's-textpicker--phase-two': phaseTwo }
    ]"
    :style="calcHeight"
  >
    <div class="s-textpicker--searchbar__cont">
            <textarea
        :class="{
          's-form-area__input': true,
          's-form-area__input--error': !!error,
          's-form-area__input--count': !!maxLength
        }"
        ref="textArea"
        :name="name"
        :cols="cols"
        :rows="rows"
        :placeholder="placeholder"
        :maxlength="maxLength"
        v-model="value"
      />

<!--
      <input
        ref="search_input"
        type="text"
        v-model="value"
        placeholder="Search Streamlabs..."
        class="s-textpicker__input"
        @blur.stop.prevent="playClosingSequence"
        @keyup.stop.prevent="keyEvent"
      />

      -->
    </div>
    <transition-group name="s-textpicker--fadeY">
      <div
        class="s-textpicker-results__cont"
        :key="limitedResult.length"
        v-if="phaseTwo && limitedResult.length >= 1"
      >
        <transition-group name="s-textpicker--fadeX">
          <div
            class="s-textpicker-results"
            v-for="(searchResult, i) in limitedResult"
            :key="searchResult.item.variable"
            :class="{ 's-active-result': currentResult === i }"
            @mouseover="currentResult = i"
            @mouseup="blurSearch"
          >
            <div class="s-textpicker__result--title">{{ searchResult.item.variable }}</div>
            <div class="s-textpicker__result--desc">{{ searchResult.item.description }}</div>
          </div>








        </transition-group>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import Fuse from "fuse.js";

@Component({})
export default class TextPicker extends Vue {
  $refs!: {
    textArea: HTMLTextAreaElement;
  };

  result: any = [];
  private phaseOne: Boolean = false;
  private phaseTwo: Boolean = false;
  private resultLimit: Number = 7;
  private fuse: any = null;
  private value: String = "";
  private quickLinkLoc: any = [];
  private keyEvents: any = [];
  private currentResult: number = 0;

  @Prop()
  jsonSearch!: any;
  searchData = this.jsonSearch;

  @Prop({ default: "" })
  search!: String;

  @Prop({ default: "fuseResultsUpdated" })
  eventName!: string;

  @Prop({ default: "fuseInputChanged" })
  inputChangeEventName!: string;




// import these from textarea
  @Prop()
  name!: string;
  @Prop()
  label!: string;
  @Prop()
  placeholder!: string;
  @Prop()
  error!: string;
  @Prop()
  helpText!: string;
  @Prop({ default: 100 })
  cols!: number;
  @Prop({ default: 3 })
  rows!: number;
  @Prop()
  maxLength!: number;
  @Prop()
  autoResize!: boolean;
  @Prop()
  maxHeight!: number;


  get options() {
    let options = {
      caseSensitive: false,
      includeScore: true,
      includeMatches: false,
      tokenize: false,
      matchAllTokens: false,
      findAllMatches: true,
      shouldSort: true,
      threshold: 0.1,
      location: 0,
      distance: 10,
      maxPatternLength: 16,
      minMatchCharLength: 2,
      keys: ["variable", "example"]
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

  get fullSort() {
    return this.result.sort(this.sortWeight);
  }

  get limitedResult() {
    return this.resultLimit
      ? this.fullSort.slice(0, this.resultLimit)
      : this.fullSort;
  }

  get calcHeight() {
    if (this.phaseOne === false) {
      return "height: 40px;";
    }
    if (
      this.result.length >= 1 &&
      this.result.length <= 7 &&
      this.phaseOne == true
    ) {
      let x = parseInt(this.result.length) * 32 + 47;
      return "height: " + x + "px;";
    } else {
      return "height: 271px;";
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
    if (this.value.includes("{")) {
    this.fuseSearch();
  }
  }

  @Watch("result")
  watchResult(val: [], oldVal: []) {
    if (this.noResults || this.value == "" || val.length != oldVal.length) {
      this.currentResult = 0;
    }
    this.$emit(this.eventName, this.result);
    this.$parent.$emit(this.eventName, this.result);
    this.noResults ? this.playClosingSequence() : this.playOpeningSequence();
  }

  keyEvent(event) {
    // KEYPRESS UP
    if (event.keyCode === 38 && this.currentResult > 0) {
      this.currentResult--;
    }
    // KEYPRESS DOWN
    if (this.result.length === 0) {
      if (event.keyCode === 40 && this.currentResult < 5) {
        this.currentResult++;
      }
    } else {
      if (event.keyCode === 40 && this.currentResult < 6) {
        this.currentResult++;
      }
    }
    // KEYPRESS ENTER
    if (event.keyCode === 13 && this.phaseOne) {
      if (this.result <= 0) {
        window.location.href = this.searchData[
          this.quickLinkLoc[this.currentResult]
        ].route;
        this.blurSearch();
      } else {
        window.location.href = this.limitedResult[
          this.currentResult
        ].item.route;
        this.blurSearch();
      }
    }
    // KEYPRESS ESC
    if (event.keyCode === 27 && this.phaseOne) {
      this.blurSearch();
    }
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

  blurSearch() {
    this.value = "";
    this.$refs.textArea.blur();
    this.currentResult = 0;
  }

  fuseSearch() {
    if (this.value.trim() === "") {
      this.result = [];
    } else {
      this.result = this.fuse.search(this.value.trim());
    }
  }

  sortWeight(a, b) {
    let aResult: any = this.result.find(data => data.item.name === a.item.name);
    let bResult: any = this.result.find(data => data.item.name === b.item.name);
    return b.item.weight * bResult.score - a.item.weight * aResult.score;
  }

  mounted() {
    this.initFuse();
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";

.s-sitesearch {
  border: 1px solid @day-input-border;
  border-radius: @radius;
  height: 40px;
  min-width: 300px;
  max-width: 500px;
  position: relative;
  transform-origin: top;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &.s-textpicker--is-open {
    min-width: 300px;
    max-width: 500px;
  }

  &.s-textpicker--phase-one {
    background-color: @day-bg;
  }

  .s-textpicker__input {
    margin: 0;
    border: none;
    height: 39px;
    font-size: 14px;
    .padding--input();
    background: @day-input-bg;
    font-family: "Roboto";
    color: @day-title;
    width: 100%;
  }

  ::placeholder {
    color: #91979a;
    opacity: 1;
  }

  .s-textpicker__result--title {
    font-size: 12px;
    color: @dark-1;
    background-color: @teal;
    .radius(1);
    .margin-right(1);
    .padding-v-sides(.25);
    .padding-h-sides(.75);
    font-weight: @medium;
    word-wrap: none;
    white-space: nowrap;
  }

  .s-textpicker__result--desc {
    width: 100%;
    font-size: 12px;
    color: @dark-5;
  }

  .s-textpicker--searchbar__cont {
    display: flex;
    flex-direction: row;
    align-items: center;
    .input-padding();
  }

  .s-textpicker-results__cont {
    display: flex;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .s-textpicker-results {
    display: flex;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    height: 32px;
    flex-direction: row;
    align-items: center;
    align-content: center;
    .input-padding();
    .padding-v-sides();
    text-decoration: none;

    &.s-active-result {
      background-color: @day-dropdown-bg;
      .s-textpicker__result--image,
      .s-textpicker__result--title {
        color: @day-title;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  .s-textpicker--fadeX-enter-active {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 1;
  }

  .s-textpicker--fadeX-leave-active {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    opacity: 0;
  }

  .s-textpicker--fadeX-enter {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(10px);
    opacity: 0;
  }

  .s-textpicker--fadeX-leave-to {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    transform: translateX(10px);
  }

  .s-textpicker--fadeX-move {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .s-textpicker--fadeY-enter-active {
    transition: all 0.25s 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 1;
  }

  .s-textpicker--fadeY-leave-active {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    opacity: 0;
  }

  .s-textpicker--fadeY-enter {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateY(-10px);
    opacity: 0;
  }

  .s-textpicker--fadeY-leave-to {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    transform: translateY(-10px);
  }

  .s-textpicker--fadeY-move {
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.night {
  .s-sitesearch {
    border: 1px solid @night-input-border;

    &.s-textpicker--phase-one {
      background-color: @night-bg;
    }

    .s-textpicker__input {
      color: @night-title;
    }

    .s-textpicker__result--title {
      color: @night-paragraph;
    }

    .s-textpicker__result--image {
      color: @icon;
    }

    .s-textpicker-results {
      &.s-active-result {
        background-color: @night-dropdown-bg;
        .s-textpicker__result--image,
        .s-textpicker__result--title {
          color: @night-title;
        }
      }
    }

    .s-textpicker-results__cont {
      .s-textpicker-quicklinks {
        color: @label;
      }
    }

    .s-textpicker-status__cont {
      color: @icon;
    }
  }
}
</style>
