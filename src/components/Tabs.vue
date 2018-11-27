<template>
  <div class="tabs-wrapper">
    <transition-group tag="div" :name="tabSlider" class="tabs">
      <div v-for="(tab, id) in tabs" :key="tab.value" class="tab slide" :class="{ 'slide-active': tab.value === value }" @click="showTab(tab.value, id)" v-bind:id="tab.value">
        {{ tab.name }}
      </div>
    </transition-group>
    <div id="underline-wrapper">
      <div id="underline"></div>
    </div>
    <transition-group tag="div" class="tab-content-wrapper" :name="tabDirection">
      <div id="tab-content-id" v-if="tab.value === value" v-for="(tab, id) in tabs" :key="id" class="tab-content">
        <slot :name="tab.value"></slot>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Watch, Vue } from "vue-property-decorator";
  
  @Component({})
  export default class Tabs extends Vue {
    @Prop()
      tabs!: [
        {
          name: string,
          value: string;
        }
      ];
  
    @Prop()
    value!: string;
  
    @Prop()
    id!: number;
  
    @Prop()
    tabSlider!: string;

    @Prop()
    hideContent!: boolean;
  
    @Prop()
    direction!: number;
  

    tabFrom:number = null;
    tabTo:number = null;
    document: HTMLDocument;
    
  @Watch('value')
    onPropertyChanged(value: string, oldValue: string) {
      document.getElementById('underline').style.width = this.underLineWidth + 2 + 'px';
      document.getElementById('underline').style.transform = 'translateX(' + this.underLineX + 'px)';
      let oldTab = this.tabs.find((tab) => tab.value === oldValue);
      this.tabFrom = this.tabs.indexOf(oldTab);
      let newTab = this.tabs.find((tab) => tab.value === value);
      this.tabTo = this.tabs.indexOf(newTab);
      

 
      
      
    }
  

  
    get underLineWidth() {
      let el  = document.getElementById(this.value);
      let underLineWidth = el.offsetWidth;
      return underLineWidth;
    }
    
    get underLineX() {
      let el  = document.getElementById(this.value);
      let underLineX = el.offsetLeft;
      return underLineX;
    }
  
    get tabDirection() {
      let from = this.tabFrom;
      let to = this.tabTo;
      
      if(to > from) { return 'right'; };
      if(from > to) { return 'left'; };
      
    }

      
      

  

  
    showTab(tab: string, id: number) {
      this.$emit("input", tab);
      this.tabTo = id;
    }

  

    mounted() {
      if (!this.value) this.showTab(this.tabs[0].value);
      document.getElementById('underline').style.width = this.underLineWidth + 2 + 'px';
      document.getElementById('underline').style.transform = 'translateX(' + this.underLineX + 'px)';
      this.tabLength = this.tabs.length;
    }
  }
</script>

<style lang="less" scoped>
  @import "./../styles/Imports";
  
  #underline-wrapper {
    height: 1px;
    background-color: @day-border;
    width: 100%;
  }
  
  #underline {
    height:  100%;
    background-color: @night-border;
    transition: all .45s cubic-bezier(0.4, 0.0, 0.2, 1);
  }  

  .right-enter-active {
    transition: all .25s .2s cubic-bezier(0.4, 0.0, 0.2, 1);
  }
  
  .right-leave-active {
    transition: all .2s cubic-bezier(0.4, 0.0, 0.2, 1);
  }
  
  .right-enter {
    opacity: 0;
    transform: translateX(-25%);
  }
  
  .right-leave {
    opacity: 1;
    transform: scale(1);
  }
  
  .right-leave-to {
    opacity: 0;
    transform: translateX(25%);
  }
  
  .left-enter-active {
    transition: all .25s .2s cubic-bezier(0.4, 0.0, 0.2, 1);
  }
  
  .left-leave-active {
    transition: all .2s cubic-bezier(0.4, 0.0, 0.2, 1);
  }
  
  .left-enter {
    opacity: 0;
    transform: translateX(25%);
  }
  
  .left-leave {
    opacity: 1;
    transform: scale(1);
  }
  
  .left-leave-to {
    opacity: 0;
    transform: translateX(-25%);
  }
  
  

  .tabs-wrapper {
    height: 100%;
  }

  .tab-content-wrapper {
    padding: 10px;
    display: flex;
    flex-direction: row;
  }
    
  .tab-content {
    position: relative;
    overflow-y: auto;
    display: flex;
    transform-origin: top left;
    .padding-v-sides(3);

  }

  .tabs {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    background: transparent;
    position: relative;
    background: transparent;
    margin: 0;
  }

  .tab {
    color: @day-paragraph;
    .margin-right(2);
    cursor: default;
    display: flex;
  }

  .night-theme {
    .tabs {
      border-color: @night-border;
    }
  }
</style>
