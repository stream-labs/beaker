<template>
  <div class="documentation">
    <left-navigation @update-section="changeSection" :active-section="activeSection"></left-navigation>

    <div class="content">
      <installation v-if="activeSection === 'installation'"/>
      <accordions v-if="activeSection === 'accordions'"/>
      <badges v-if="activeSection === 'badges'"/>
      <banners v-if="activeSection === 'banners'"/>
      <buttons-demo v-if="activeSection === 'buttons'"/>
      <callouts v-if="activeSection === 'callouts'"/>
      <call-to-actions v-if="activeSection === 'call-to-actions'"/>
      <color-pickers v-if="activeSection === 'color-pickers'"/>
      <dropdowns v-if="activeSection === 'dropdowns'"/>
      <forms v-if="activeSection === 'forms'"/>
      <icons v-if="activeSection === 'icons'"/>
      <inputs v-if="activeSection === 'inputs'"/>
      <progress-bars v-if="activeSection === 'progress-bars'"/>
      <paginations v-if="activeSection === 'paginations'"/>
      <sliders v-if="activeSection === 'sliders'"/>
      <tables v-if="activeSection === 'tables'"/>
      <tabs v-if="activeSection === 'tabs'"/>
      <toggles v-if="activeSection === 'toggles'"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import LeftNavigation from "@/demos/LeftNavigation.vue"; // @ is an alias to /src
import Installation from "@/demos/Installation.vue"; // @ is an alias to /src
import Accordions from "@/demos/Accordions.vue";
import Badges from "@/demos/Badges.vue";
import Banners from "@/demos/Banners.vue";
import ButtonsDemo from "@/demos/Buttons.vue";
import CallToActions from "@/demos/CallToActions.vue";
import Callouts from "@/demos/Callouts.vue";
import ColorPickers from "@/demos/ColorPickers.vue";
import Dropdowns from "@/demos/Dropdowns.vue";
import Forms from "@/demos/Forms.vue";
import Icons from "@/demos/Icons.vue";
import Inputs from "@/demos/Inputs.vue";
import Navigations from "@/demos/Navigations.vue";
import ProgressBars from "@/demos/ProgressBars.vue";
import Paginations from "@/demos/Paginations.vue";
import Sliders from "@/demos/Sliders.vue";
import Tables from "@/demos/Tables.vue";
import Tabs from "@/demos/Tabs.vue";
import Toggles from "@/demos/Toggles.vue";

@Component({
  components: {
    LeftNavigation,
    Installation,
    Accordions,
    Badges,
    Banners,
    ButtonsDemo,
    Callouts,
    CallToActions,
    ColorPickers,
    Dropdowns,
    Forms,
    Icons,
    Inputs,
    Navigations,
    ProgressBars,
    Paginations,
    Sliders,
    Tables,
    Tabs,
    Toggles
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

.accordion {
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
