<template>
  <div>
    <h1>Sliders</h1>
    <div class="section">
      <div class="row">
      <slider
        :value="localValue"
        @input="value => updateLocalValue(value)"
        :min="0"
        :max="100"
        :interval="25"
        :marks="true"
        :labels="true"
        :units="'px'"
      />

    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SliderTwo from "./../components/SliderTwo.vue";
import Accordion from "./../components/Accordion.vue";
@Component({
  components: {
    "slider": SliderTwo,
    Accordion
  }
})
export default class Sliders extends Vue {



localValue: number | string = 6;

  updateLocalValue(value) {
    this.localValue = value;
  }
}
</script>
