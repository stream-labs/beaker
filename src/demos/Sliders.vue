<template>
  <div>
    <h1>Sliders</h1>
    <div class="section">
      <div class="row">
      <slider
        :value="localValue"
        @input="value => updateLocalValue(value)"
        :min="1"
        :max="20"
        :data="datarange"
        :range="rangedata"
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


datarange: number[] = [
  0,5,10,15,20

]

rangedata: any[] = [
  {label: '0p'},
  {label: '5p'},
  {label: '10p'},
  {label: '15p'},
  {label: '20p'}
]




localValue: number | string = 5;

  updateLocalValue(value) {
    this.localValue = value;
  }
}
</script>
