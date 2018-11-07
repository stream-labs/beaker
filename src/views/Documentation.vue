<template>
  <div class="documentation">
    <left-navigation @update-section="changeSection" :active-section="activeSection"></left-navigation>

    <div class="content">
      <accordions v-if="activeSection === 'accordions'"/>
      <badges v-if="activeSection === 'badges'"/>
      <callouts v-if="activeSection === 'callouts'"/>
      <buttons-demo v-if="activeSection === 'buttons'"/>
      <forms v-if="activeSection === 'forms'"/>
      <inputs v-if="activeSection === 'inputs'"/>
      <sliders v-if="activeSection === 'sliders'"/>
      <tables v-if="activeSection === 'tables'"/>
      <tabs v-if="activeSection === 'tabs'"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import LeftNavigation from "@/components/LeftNavigation.vue"; // @ is an alias to /src
import Accordions from "@/components/demos/Accordions.vue";
import Badges from "@/components/demos/Badges.vue";
import ButtonsDemo from "@/components/demos/Buttons.vue";
import Callouts from "@/components/demos/Callouts.vue";
import Forms from "@/components/demos/Forms.vue";
import Inputs from "@/components/demos/Inputs.vue";
import Sliders from "@/components/demos/Sliders.vue";
import Tables from "@/components/demos/Tables.vue";
import Tabs from "@/components/demos/Tabs.vue";

@Component({
  components: {
    LeftNavigation,
    Accordions,
    Badges,
    ButtonsDemo,
    Callouts,
    Forms,
    Inputs,
    Sliders,
    Tables,
    Tabs
  }
})
export default class Documentation extends Vue {
  activeSection = "buttons";

  changeSection(activeSection: string) {
    this.activeSection = activeSection;
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.documentation {
  display: grid;
  grid-template-columns: 260px auto;
}
</style>
