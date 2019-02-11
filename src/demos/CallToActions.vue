<template>
  <div>
    <div class="section">
      <h2>Default Call to Action</h2>
      <div class="row">
        <call-to-action/>
      </div>
      <h2>Custom Call to Action</h2>
      <div class="row">
        <call-to-action
        :thumbnail="require('./../assets/imgs/logo.svg')"
        :title="'This is a Custom Call To Action'"
        :description="'A Custom Description'"
        :buttonVariation="'action'"
        :buttonTitle="'Click Me'"
        :buttonDescription="''"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CallToAction from "./../components/CallToAction.vue";
import Accordion from "./../components/Accordion.vue";
@Component({
  components: {
    CallToAction,
    Accordion
  }
})
export default class CallToActions extends Vue {
  value = 50;
}
</script>