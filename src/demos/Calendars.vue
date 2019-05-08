<template>
  <div>
    <s-date-picker></s-date-picker>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import DatePicker from "./../components/DatePicker.vue";

@Component({
  components: {
    Accordion,
    's-date-picker': DatePicker
  }
})
export default class Calendars extends Vue {}
</script>

<style lang="less" scoped></style>