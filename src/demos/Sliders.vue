<template>
  <div>
    <h1>Sliders</h1>
    <div class="section">
      <div class="row">
      <slider
        :value="localValue"
        @input="value => updateLocalValue(value)"
        :min="1"
        :max="100"
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





localValue: number | string = 35;

  updateLocalValue(value) {
    console.log(value);
  }
}
</script>
