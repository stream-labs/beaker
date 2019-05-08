<template>
  <vue-date-picker
    class="picker"
    calendar-class="picker__calendar"
    input-class="picker__input"
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
    .padding(2);
    .radius(2);
    border: none;
    box-shadow: 0 4px 8px rgba(9, 22, 29, .08);

    header {
      display: grid;
      grid-template-columns: 32px 1fr 32px;
      grid-column-gap: 8px;
      line-height: 40px;

      span {
        width: initial;
        .radius();
        font-size: 16px;
        font-weight: 500;
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
  }

  .cell {
    .padding-h-sides(.5);
    .radius();
    font-weight: 500;
    .transition();

    &:not(.blank):not(.disabled).day {
      &:hover {
        border-color: transparent;
        // background-color: fade(@teal, 10%);
        // color: @white;
      }
    }

    &.selected {
      font-weight: 700;
      background-color: @teal;
      color: @white;

      &:hover {
        background-color: fade(@teal, 90%);
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