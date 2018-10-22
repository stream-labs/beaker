<template>
  <div class="documentation">
    <left-navigation></left-navigation>

    <div class="content">
      <forms></forms>
      <inputs></inputs>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LeftNavigation from "@/components/LeftNavigation.vue"; // @ is an alias to /src
import Forms from "@/components/demos/Forms.vue";
import Inputs from "@/components/demos/Inputs.vue";

@Component({
  components: {
    LeftNavigation,
    Forms,
    Inputs
  }
})
export default class Home extends Vue {}
</script>
