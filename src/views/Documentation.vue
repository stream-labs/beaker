<template>
  <div class="documentation">
    <left-navigation @update-section="changeSection" :active-section="activeSection"></left-navigation>

    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import LeftNavigation from "@/demos/LeftNavigation.vue"; // @ is an alias to /src

@Component({
  components: {
    LeftNavigation
  }
})
export default class Documentation extends Vue {
  activeSection = "installation";

  changeSection(activeSection: string) {
    this.activeSection = activeSection;
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";

.documentation {
  display: grid;
  grid-template-columns: 180px auto;
  grid-gap: 80px;

  code {
    background-color: @light-3;
    color: @dark-2;
    padding: 0 4px;
    margin: 0 2px;
  }

  pre {
    code {
      background-color: transparent;
      color: inherit;
      padding: 0;
      margin: 0;
    }
  }
}

.s-accordion {
  pre {
    .margin-bottom(@0);
  }
}

.docs-table {
  font-family: "Courier New", Courier, monospace;

  th {
    font-family: "Roboto";
  }

  tr {
    td {
      &:last-child {
        font-family: "Roboto";
      }
    }
  }
}

.night,
.night-theme {
  code {
    background-color: @dark-5;
    color: @light-1;
  }
}
</style>
