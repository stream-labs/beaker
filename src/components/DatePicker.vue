<template>
  <date-picker></date-picker>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Datepicker from 'vuejs-datepicker';

@Component({
  components: {
    DatePicker
  }
})
export default class DatePicker extends Vue {

}
</script>

<style lang="less">
@import "./../styles/Imports";
</style>