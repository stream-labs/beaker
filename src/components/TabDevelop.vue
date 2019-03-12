<template>
  <div class="s-md-wrapper" :class="getTabSize">
    <md-tabs @md-changed="checkNewPosts">
      <template slot="md-tab" slot-scope="{ tab }">
        {{ tab.label }}
        <i :class="`s-icon-${tab.data}`"></i>
      </template>
      <div v-for="(tab, index) in tabs" :key="index">
        <md-tab
          :id="tab.tabId"
          :md-label="tab.tabLabel"
          :to="tab.tabTo"
          :md-template-data="tab.tabIcon"
        ></md-tab>
      </div>
    </md-tabs>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import ViewMaterial from "vue-material"
import "vue-material/dist/vue-material.min.css"
// import VueMq from "vue-mq"

// Vue.use(VueMq, {
//   breakpoints: {
//     // default breakpoints - customize this
//     sm: 0,
//     md: 768,
//     lg: Infinity,
//   },
//   defaultBreakpoint: "md", // customize this for SSR
// })

Vue.use(ViewMaterial)

@Component({
})
export default class TabDevelop extends Vue {

  @Prop()
  tabs!: [
    {
      tabLabel: string
      tabTo: string
      tabId: string
      tabIcon: string
    }
  ]

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

// @media screen and (max-width:768px) { 
//   .md-tabs-navigation .md-button{
//     min-width: 112px;
//   }
// }

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
    border-bottom: 1px solid #f0f2f2;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .md-button {
    height: auto;
  }

  .md-button:hover {
    color: @dark-2;
    outline: none;
  }

  .md-button:not([disabled]).md-focused:before, .md-button:not([disabled]):active:before, .md-button:not([disabled]):hover:before{
    background: none;
  }

  .md-button.md-active {
    color: @dark-2;
  }

  .md-ripple {
    .padding(0);
    .padding-bottom(1.75);
    .margin-right(2);
    border-bottom: 2px solid transparent;
  }

  .md-tabs-indicator {
    background: @dark-2;
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
    color: @white;
    outline: none;
  }

  .md-ripple {
      color:  @light-4;
    }

  .md-button.md-active {
    .md-ripple {
      color: @white;
    }
  }

   .md-tabs-indicator {
    background: @white;
  }
}
</style>


<style lang="less" scoped>
@import "./../styles/Imports";
</style>
