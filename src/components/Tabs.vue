<template>
  <div class="s-md-wrapper" :class="getTabSize">
    <md-tabs md-sync-route>
      <div v-for="(tab, index) in tabs" :key="index">
        <md-tab :id="tab.tabId" :md-label="tab.tabLabel" :to="tab.tabTo" :md-icon="tab.tabIcon"></md-tab>
      </div>
    </md-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { MdButton, MdTabs } from "vue-material/dist/components";

Vue.use(MdButton);
Vue.use(MdTabs);

@Component({})
export default class Tabs extends Vue {
  @Prop()
  tabs!: [
    {
      tabLabel: string;
      tabTo: string;
      tabId: string
      tabIcon: string
    }
  ];

  @Prop({ default: "small" })
  tabSize!: string

  get getTabSize() {
    return this.tabSize === "small" ? "font-small" : "font-large"
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";
// md does not have support for scoped styles
.font-small {
  .md-button-content {
    font-size: 14px;
  }
}

.font-large {
  .md-button-content {
    font-size: 16px;
  }
}

.s-md-wrapper {
  .md-tabs-navigation {
    display: flex;
    .margin-bottom(3);
    .padding(0);
    border: 0;
    border-radius: 4px 4px 0 0;
    background-color: @day-input-bg;
    border-bottom: 1px solid #f0f2f2;
    width: 100%;
  }

  .md-button {
    color: @dark-5;
    text-decoration: none;
    .transition();
  }

  .md-button:hover {
    color: @dark-2;
    outline: none;
  }

  .md-button.md-active {
    color: @dark-2;
    .md-ripple {
      border-color: @dark-2;
    }
  }

  .md-ripple {
    .padding-bottom(1.75);
    .margin-right(2);
    border-bottom: 2px solid @day-input-bg;
  }
}

.night,
.night-theme {
  .md-tabs-navigation {
    border-bottom-color: @dark-4;
  }

  .md-button {
    color: @light-4;
  }

  .md-button:hover {
    color: @light-4;
    outline: none;
  }

  .md-button.md-active {
    .md-ripple {
      border-color: @white;
      color: @white;
    }
  }
}
</style>


<style lang="less" scoped>
@import "./../styles/Imports";
</style>
