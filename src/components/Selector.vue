<template>
  <v-select v-model="selected" :options="['foo','bar']" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import vSelect from "vue-select";
Vue.component("v-select", vSelect);

@Component({
  components: {
    vSelect
  }
})
export default class Selector extends Vue {
  selected = "foo";
}
</script>

<style lang="less">
@import "./../styles/App";

.v-select {
  font-family: "Roboto";

  &.open {
    .open-indicator:before {
      transform: none;
    }
  }

  .dropdown-toggle {
    border-color: @day-input-border;
    .padding-h-sides();
    .padding-v-sides(@0);
    height: 32px;
  }

  .open-indicator:before {
    border: 0;
    transform: none;
    content: "\e996";
    font-family: "icomoon";
    color: @icon;
    height: auto;
    width: auto;
  }

  .vs__selected-options {
    .padding(@0);
  }

  .selected-tag {
    .margin(@0);
    .margin-right();
    color: @day-paragraph;
    .padding(@0);
    line-height: 32px;
    border: 0;
    font-family: "Roboto";
  }

  input[type="search"],
  input[type="search"]:focus {
    .margin(@0);
    font-size: 14px;
    font-family: "Roboto";
  }

  .dropdown-menu {
    .padding(0);
  }
}
</style>
