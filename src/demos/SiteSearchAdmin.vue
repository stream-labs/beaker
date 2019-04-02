<template>
  <div>
    <div class="section">
      <h1>Site Search Admin</h1>
      <p>Modify or view the search Json</p>
    </div>
    <div class="section">
      <h2>Modify A Search Dataum</h2>
      <vue-fuse
        placeholder="search"
        event-name="results"
        :list="searchData"
        :keys="['name', 'keywords', 'description']"
        :defaultAll="false"
      />
      <div class="search-list-container">
        <div
          v-for="searchData in limitedResult"
          :key="searchData.name"
          class="search-list-result"
        >{{ searchData.name }}</div>
      </div>
      <div @click="toggleListSearch" class="switch-link">
        <i class="s-icon-link icon"></i>Or search by list
      </div>
      <div v-show="listSearch" class="search-list-container">
        <div
          v-for="datum in jsonData"
          :key="datum.name"
          class="search-list-result"
          @click="selectCurrent(datum)"
        >{{ datum.name }}</div>
      </div>
    </div>
    <div class="section">
      <div
        class="edit-grid-container"
        v-for="modify in jsonData"
        :key="modify.name"
        v-show="modify.name === currentSelection"
      >
        <div class="left">Name:</div>
        <div class="right">
          <input type="text" :placeholder="modify.name">
        </div>
        <!-- -->
        <div class="left">Title:</div>
        <div class="right">
          <input type="text" :placeholder="modify.title">
        </div>
        <!-- -->
        <div class="left">Route:</div>
        <div class="right">
          <input type="text" :placeholder="modify.route">
        </div>
        <!-- -->
        <div class="left">Keywords:</div>
        <div class="right">
          <input type="text" :placeholder="modify.keywords">
        </div>
        <!-- -->
        <div class="left">Description:</div>
        <div class="right">
          <input type="text" :placeholder="modify.description">
        </div>
        <!-- -->
        <div class="left">Image</div>
        <div class="right">
          <input type="text" :placeholder="modify.image">
        </div>
        <!-- -->
        <div class="left">Howto</div>
        <div class="right">
          <input type="text" :placeholder="modify.howto">
        </div>
        <!-- -->
        <div class="left">keymatch:</div>
        <div class="right">
          <input type="text" :placeholder="modify.keymatch">
        </div>
        <!-- -->
        <div class="left">weight:</div>
        <div class="right">
          <input type="text" :placeholder="modify.weight">
        </div>
        <!-- -->
      </div>
      <Button :variation="'action'" :title="'A Button'" @click="modifyJson"></Button>
    </div>

    <div class="section">
      <h2>Add A Search Dataum</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { VueFuse } from "vue-fuse";
import Button from "./../components/Button.vue";
import * as data from "./../components/sitesearchdata.json";
import * as fs from "fs-extra";

@Component({
  components: { VueFuse, Button }
})
export default class SiteSearchAdmin extends Vue {
  results: any = [];
  jsonData = (<any>data).data;
  searchData = (<any>data).data;
  private listSearch: Boolean = false;
  private resultLimit: Number = 3;
  private currentSelection: String = "";
  //private dataObjectLocation: Number;

  @Prop()
  $search: any;

  @Prop()
  name: any;

  get limitedResult() {
    return this.resultLimit
      ? this.results.slice(0, this.resultLimit)
      : this.results;
  }

  created() {
    this.$on("results", results => {
      this.results = results;
    });
  }

  toggleListSearch() {
    this.listSearch = !this.listSearch;
  }

  selectCurrent(modify: any) {
    //console.log(modify);
    this.currentSelection = modify.name;
  }

  modifyJson() {
    let insertObject: any = this.jsonData.find(
      data => data.name === this.currentSelection
    );
    let loc = this.jsonData.indexOf(insertObject);

    // object is the whole data object from the json
    //console.log(loc.name);
    //console.log(loc);

    let tempObj = new Array();

    let firstBit = this.jsonData.slice(0, loc);
    let secondBit = this.jsonData.slice(loc + 1, this.jsonData.length);

    //console.log(secondBit);

    let insertObjectTest = {
      name: "xxx",
      title: "xxx",
      route: "xxx",
      keywords: "xxx",
      description: "xxx",
      image: "xxx",
      howto: "xxx",
      weight: 5
    };

    firstBit.forEach(function(data) {
      tempObj.push(data);
    });
    tempObj.push(insertObjectTest);
    secondBit.forEach(function(data) {
      tempObj.push(data);
    });

    let stringedJson = JSON.stringify(tempObj);

    fs.writeFileSync("./../components/sitesearchdata.json", stringedJson, {
      encoding: "utf8"
    });

    console.log(tempObj);
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";

.edit-grid-container {
  display: grid;
  grid-template-columns: 150px auto;

  > div {
    .padding();
  }

  > .left {
    grid-column: 1;
    background-color: @light-1;
    border-bottom: 1px solid @light-3;
    font-weight: @bold;
  }

  > .right {
    grid-column: 2;
    border-bottom: 1px solid @light-3;
  }
}

.switch-link {
  .padding();
  font-weight: @bold;
}

.icon {
  .margin-right();
}

.search-list-container {
  display: flex;
  flex-flow: row wrap;
}

.search-list-result {
  .padding();
  background-color: @light-3;
  border: 1px solid @light-4;
  border-radius: @radius;
  font-weight: @bold;
  .margin(0.5);
}
</style>
