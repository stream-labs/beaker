<template>
  <vue-date-picker
    class="picker"
    calendar-class="picker__calendar"
    placeholder="Select Date"
    :inline="true"
  ></vue-date-picker>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VueDatePicker from 'vuejs-datepicker';

@Component({
  components: {
    VueDatePicker
  }
})
export default class DatePicker extends Vue {}
</script>

<style lang="less">
@import "./../styles/Imports";

.picker {
  &__calendar {
    width: 280px;
    .padding(2);
    .radius(2);
    border: none;
    box-shadow: 0 4px 8px rgba(9, 22, 29, .08);

    header {
      display: grid;
      grid-template-columns: 32px 1fr 32px;
      grid-column-gap: 8px;
      line-height: 32px;

      span {
        width: initial;
        .radius();
        font-size: 16px;
        font-weight: 500;
        .transition();

        &:not(.disabled).prev,
        &:not(.disabled).next,
        &:not(.disabled).up {
          &:hover {
            background-color: @light-2;
          }
        }
      }

      .prev,
      .next {
        width: 32px;
      }

      .prev {
        &:after {
          margin-left: -3px;
        }
      }

      .next {
        &:after {
          margin-left: 4px;
        }
      }
    }

    & > div {
      display: grid;
      grid-template-columns: repeat(7, minmax(32px, 1fr));
      grid-template-rows: 24px repeat(5, auto);
      grid-gap: 4px;
      .margin-top();
    }
  }

  .cell {
    width: auto;
    height: 32px;
    .padding(0);
    border: none;
    .radius();
    font-weight: 500;
    line-height: 32px;
    .transition();

    &:not(.blank):not(.disabled):not(.selected).day {
      &:hover {
        border: none;
        background-color: @light-2;
        // color: @white;
      }
    }

    &.day-header {
      height: auto;
      line-height: normal;
    }

    &.selected {
      font-weight: 700;
      background-color: @teal;
      color: @white;

      &:hover {
        background-color: fade(@teal, 90%);
        border: none;
      }
    }
  }
}

.night {
  .picker {
    &__calendar {
      background: @dark-4;
      color: @light-4;
    }
  }
}
</style>