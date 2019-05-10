<template>
  <vue-date-picker
    class="picker"
    calendar-class="picker__calendar"
    v-bind="{ ...datePickerProps }"
    @selected="updateDate"
  ></vue-date-picker>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VueDatePicker from "vuejs-datepicker";

@Component({
  components: {
    VueDatePicker
  },
  props: { ...VueDatePicker.props }
})
export default class DatePicker extends Vue {
  get datePickerProps() {
    return {...this.$props};
  }

  updateDate(date) {
    console.log(date);
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";

.picker {
  &__calendar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "header header header"
      "dates dates dates"
      "dates dates dates"
      "dates dates dates";
    grid-gap: 8px;
    width: 304px;
    .padding(2);
    .radius(2);
    border: none;
    box-shadow: 0 4px 8px rgba(9, 22, 29, 0.08);

    header {
      grid-area: header;
      display: grid;
      grid-template-columns: 40px 1fr 40px;
      grid-column-gap: 16px;
      .margin-bottom(2);
      line-height: 40px;

      span {
        width: initial;
        .radius();
        font-size: 16px;
        font-weight: 500;
        .transition();
        background-color: @light-2;

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
        width: 40px;
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
      grid-area: dates;
      display: grid;
      grid-template-columns: repeat(7, minmax(32px, 1fr));
      grid-template-rows: 16px repeat(5, auto);
      grid-gap: 8px;
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

    &:not(.blank):not(.disabled):not(.selected) {
      &.day,
      &.month,
      &.year {
        background-color: @light-2;

        &:hover {
          border: none;
          background-color: @light-2;
        }
      }
    }

    &.day-header {
      align-self: center;
      height: auto;
      line-height: normal;
    }

    &.selected {
      font-weight: 700;
      background-color: @dark-2;
      color: @white;

      &:hover {
        background-color: @dark-2;
        border: none !important;
      }
    }
  }
}

.night {
  .picker {
    &__calendar {
      background: @dark-4;
      color: @white;

      header {
        span {
          background-color: @dark-5;

          &:not(.disabled).prev,
          &:not(.disabled).next,
          &:not(.disabled).up {
            background-color: @dark-5;

            &:hover {
              background-color: lighten(@dark-5, 5%);
            }
          }
        }

        .next {
          &::after {
            border-left-color: @light-4;
          }
        }

        .prev {
          &::after {
            border-right-color: @light-4;
          }
        }
      }
    }

    .cell {
      &:not(.blank):not(.disabled):not(.selected) {
        &.day,
        &.month,
        &.year {
          background-color: @dark-5;

          &:hover {
            background-color: lighten(@dark-5, 5%);
            border: none;
          }
        }
      }
    }
  }
}
</style>
