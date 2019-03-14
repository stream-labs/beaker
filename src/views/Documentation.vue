<template>
  <div class="documentation">
    <left-navigation @update-section="changeSection" :active-section="activeSection"></left-navigation>

    <div class="content">
      <installation v-if="activeSection === 'installation'"/>
      <assets v-if="activeSection === 'assets'"/>
      <accordions v-if="activeSection === 'accordions'"/>
      <announcements v-if="activeSection === 'announcements'"/>
      <badges v-if="activeSection === 'badges'"/>
      <banners v-if="activeSection === 'banners'"/>
      <buttons-demo v-if="activeSection === 'buttons'"/>
      <callouts v-if="activeSection === 'callouts'"/>
      <call-to-actions v-if="activeSection === 'call-to-actions'"/>
      <color-pickers v-if="activeSection === 'color-pickers'"/>
      <creator-sites v-if="activeSection === 'creator-sites'"/>
      <dropdowns v-if="activeSection === 'dropdowns'"/>
      <empty-sections v-if="activeSection === 'empty-sections'"/>
      <extras v-if="activeSection === 'extras'"/>
      <forms v-if="activeSection === 'forms'"/>
      <icons v-if="activeSection === 'icons'"/>
      <image-pickers v-if="activeSection === 'image-pickers'"/>
      <inputs v-if="activeSection === 'inputs'"/>
      <layouts v-if="activeSection === 'layouts'"/>
      <loaders v-if="activeSection === 'loaders'"/>
      <modals v-if="activeSection === 'modals'"/>
      <notices v-if="activeSection === 'notices'"/>
      <progress-bars v-if="activeSection === 'progress-bars'"/>
      <paginations v-if="activeSection === 'paginations'"/>
      <sliders v-if="activeSection === 'sliders'"/>
      <tables v-if="activeSection === 'tables'"/>
      <tabs v-if="activeSection === 'tabs'"/>
      <toggles v-if="activeSection === 'toggles'"/>
      <virtual-items v-if="activeSection === 'virtual-items'"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import LeftNavigation from "@/demos/LeftNavigation.vue"; // @ is an alias to /src
import Installation from "@/demos/Installation.vue";
import Assets from "@/demos/Assets.vue";
import Colors from "@/demos/Colors.vue";
import Typography from "@/demos/Typography.vue";
import Accordions from "@/demos/Accordions.vue";
import Announcements from "@/demos/Announcements.vue";
import Badges from "@/demos/Badges.vue";
import Banners from "@/demos/Banners.vue";
import ButtonsDemo from "@/demos/Buttons.vue";
import CallToActions from "@/demos/CallToActions.vue";
import Callouts from "@/demos/Callouts.vue";
import ColorPickers from "@/demos/ColorPickers.vue";
import CreatorSites from "@/demos/CreatorSites.vue";
import Dropdowns from "@/demos/Dropdowns.vue";
import EmptySections from "@/demos/EmptySections.vue";
import Extras from "@/demos/Extras.vue";
import Forms from "@/demos/Forms.vue";
import Icons from "@/demos/Icons.vue";
import ImagePickers from "@/demos/ImagePickers.vue";
import Inputs from "@/demos/Inputs.vue";
import Layouts from "@/demos/Layouts.vue";
import Loaders from "@/demos/Loaders.vue";
import Modals from "@/demos/Modals.vue";
import Navigations from "@/demos/Navigations.vue";
import Notices from "@/demos/Notices.vue";
import ProgressBars from "@/demos/ProgressBars.vue";
import Paginations from "@/demos/Paginations.vue";
import Sliders from "@/demos/Sliders.vue";
import Tables from "@/demos/Tables.vue";
import Tabs from "@/demos/Tabs.vue";
import Toggles from "@/demos/Toggles.vue";
import VirtualItems from "@/demos/VirtualItems.vue";

@Component({
  components: {
    LeftNavigation,
    Installation,
    Assets,
    Colors,
    Typography,
    Accordions,
    Announcements,
    Badges,
    Banners,
    ButtonsDemo,
    Callouts,
    CallToActions,
    ColorPickers,
    CreatorSites,
    Dropdowns,
    EmptySections,
    Extras,
    Forms,
    Icons,
    ImagePickers,
    Inputs,
    Layouts,
    Loaders,
    Modals,
    Navigations,
    Notices,
    ProgressBars,
    Paginations,
    Sliders,
    Tables,
    Tabs,
    Toggles,
    VirtualItems
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
