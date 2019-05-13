<template>
  <div>
    <s-date-picker @selected="logDate" :disabled-dates="state.disabledDates" :placeholder="'Select Comparison Date'"></s-date-picker>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import DatePicker from "./../components/DatePicker.vue";

@Component({
  components: {
    Accordion,
    "s-date-picker": DatePicker
  }
})
export default class Calendars extends Vue {
  state = {
    disabledDates: {
      dates: [new Date()]
    }
  }

  logDate(date) {
    console.log(date);
  }
}
</script>

<style lang="less" scoped></style>
