<template>
  <pane-dropdown ref="dropdown" :auto-height="true">
    <div slot="title" class="picker__title">{{ dateTitle }}</div>
    <vue-date-picker
      class="picker"
      calendar-class="picker__calendar"
      v-bind="{ ...datePickerProps }"
      :inline="true"
      @selected="updateDate"
    ></vue-date-picker>
  </pane-dropdown>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PaneDropdown from "./PaneDropdown.vue";
import VueDatePicker from "vuejs-datepicker";

interface selectedDate {
  date: Date;
  selected: boolean;
}

@Component({
  components: {
    VueDatePicker,
    PaneDropdown
  },
  props: { ...VueDatePicker.props }
})
export default class DatePicker extends Vue {
  $refs!: {
    dropdown: Vue;
  };

  @Prop({ default: "Select Date", type: String })
  placeholder!: string;

  today = new Date();
  selectedDate: selectedDate = {
    date: new Date(),
    selected: false
  };

  get datePickerProps() {
    return { ...this.$props };
  }

  get dateTitle() {
    if (this.selectedDate.selected) {
      const selectedDate = new Date(this.selectedDate.date.toString());
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      const day = selectedDate.getDate();
      const month = selectedDate.getMonth();
      const year = selectedDate.getFullYear();

      if (
        day === this.today.getDate() - 1 &&
        month === this.today.getMonth() &&
        year === this.today.getFullYear()
      ) {
        return "Yesterday";
      }

      return `${day} ${months[month]} ${year}`;
    }

    return this.placeholder;
  }

  updateDate(date) {
    this.selectedDate = {
      date,
      selected: true
    };

    this.$emit("selected", date);
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";

.picker {
  &__title {
    font-size: 16px;
  }

  &__calendar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "header header header"
      "dates dates dates"
      "dates dates dates"
      "dates dates dates";
    grid-gap: 8px;
    width: 272px;
    // .padding(2);
    .radius(2);
    border: none;
    // box-shadow: 0 4px 8px rgba(9, 22, 29, 0.08);

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

    &.disabled {
      color: @dark-5;
      opacity: 0.5;
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

      &.disabled {
        color: @white;
      }
    }
  }
}
</style>
