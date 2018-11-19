<template>
  <div class="documentation">
    <left-navigation @update-section="changeSection" :active-section="activeSection"></left-navigation>

    <div class="content">
      <accordions v-if="activeSection === 'accordions'"/>
      <badges v-if="activeSection === 'badges'"/>
      <banners v-if="activeSection === 'banners'"/>
      <callouts v-if="activeSection === 'callouts'"/>
      <buttons-demo v-if="activeSection === 'buttons'"/>
      <forms v-if="activeSection === 'forms'"/>
      <icons v-if="activeSection === 'icons'"/>
      <inputs v-if="activeSection === 'inputs'"/>
      <sliders v-if="activeSection === 'sliders'"/>
      <tables v-if="activeSection === 'tables'"/>
      <tabs v-if="activeSection === 'tabs'"/>
      <toggles v-if="activeSection === 'toggles'"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import LeftNavigation from "@/components/LeftNavigation.vue"; // @ is an alias to /src
import Accordions from "@/demos/Accordions.vue";
import Badges from "@/demos/Badges.vue";
import Banners from "@/demos/Banners.vue";
import ButtonsDemo from "@/demos/Buttons.vue";
import Callouts from "@/demos/Callouts.vue";
import Forms from "@/demos/Forms.vue";
import Icons from "@/demos/Icons.vue";
import Inputs from "@/demos/Inputs.vue";
import Sliders from "@/demos/Sliders.vue";
import Tables from "@/demos/Tables.vue";
import Tabs from "@/demos/Tabs.vue";
import Toggles from "@/demos/Toggles.vue";

@Component({
  components: {
    LeftNavigation,
    Accordions,
    Badges,
    Banners,
    ButtonsDemo,
    Callouts,
    Forms,
    Icons,
    Inputs,
    Sliders,
    Tables,
    Tabs,
    Toggles
  }
})
export default class Documentation extends Vue {
  activeSection = "buttons";

  changeSection(activeSection: string) {
    this.activeSection = activeSection;
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";

.documentation {
  display: grid;
  grid-template-columns: 260px auto;

  code {
    background-color: #e3e8eb;
    color: #09161d;
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
</style>
