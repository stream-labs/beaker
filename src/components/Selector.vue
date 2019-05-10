<template>
  <div class="s-selector">
    <v-select
      :value="value"
      :options="options"
      :disabled="disabled"
      :clearable="false"
      :searchable="searchable"
      :multiple="multiple"
      :placeholder="placeholder"
      @input="val => emitInput(val)"
      :label="label"
    >
      <template v-if="label" slot="option" slot-scope="option">{{
        option[label]
      }}</template>
    </v-select>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import vSelect from "vue-select";
Vue.component("v-select", vSelect);

export default {
  name: "Selector",
  extends: vSelect,

  components: {
    vSelect
  },

  props: ["label"],

  created() {
    this.$on("input", this.setValue);
  },

  destroyed() {
    this.$off("input", this.setValue);
  },

  methods: {
    emitInput(val) {
      this.$emit("input", val);
    },

    setValue(val) {
      this.mutableValue = val;
    }
  }
};
</script>

<style lang="less">
@import "./../styles/Imports";

.s-selector {
  .v-select {
    font-family: "Roboto";
    background-color: @day-dropdown-bg;
    border-color: @day-dropdown-border;
    .radius();

    &.open {
      .open-indicator:before {
        transform: none;
      }
    }

    &.disabled {
      .dropdown-toggle {
        background-color: @day-input-disabled;
        color: @light-5;

        input {
          background: transparent;
        }
      }

      .open-indicator {
        background: transparent;
      }

      .selected-tag {
        color: @light-5;

        .close {
          background-color: transparent;
        }
      }
    }

    .open-indicator {
      font-style: normal;
    }

    .dropdown-toggle {
      border: 0;
      .padding-h-sides();
      .padding-v-sides(@0);
      height: 40px;
    }

    .open-indicator:before {
      border: 0;
      transform: none;
      content: "\e996";
      font-family: "icomoon";
      color: @icon;
      height: auto;
      width: auto;
    }

    .form-control {
      padding: 0;
      border: none !important;
    }

    .vs__selected-options {
      .padding(@0);
      align-items: center;
    }

    .selected-tag {
      .margin(@0);
      .padding-h-sides();
      .margin-right();
      color: @day-paragraph;
      line-height: 24px;
      border: 0;
      font-family: "Roboto";
      background-color: @white;

      .close {
        opacity: 1;
        text-shadow: none;

        &:hover {
          &:after {
            color: @day-title;
            .transition();
          }
        }

        &:after {
          font-family: "icomoon";
          content: "\e956";
          font-size: 12px;
          .margin-left();
          color: @icon;
          .weight(@normal);
          line-height: 24px;
        }

        span {
          display: none;
        }
      }
    }

    &.single {
      .selected-tag {
        .padding(@0);
        background-color: transparent;
      }
    }

    input[type="search"],
    input[type="search"]:focus {
      .margin(@0);
      font-size: 14px;
      font-family: "Roboto";
      .padding-h-sides(0);
    }

    .dropdown-menu {
      max-height: 200px !important;
      .padding(0);
      background-color: @day-dropdown-bg;
      border-color: @day-dropdown-border;
      .day-shadow();

      li {
        line-height: 40px;

        a {
          color: @day-paragraph;
          .padding-h-sides();
          .padding-v-sides(0);
          text-decoration: none;

          &:hover,
          &.active,
          &.highlight {
            background-color: @light-3;
            color: @day-title;
          }
        }
      }

      .active {
        a {
          background-color: @light-3;
        }
      }

      .highlight {
        a {
          background-color: @light-3;
          color: @day-title;
        }
      }
    }
  }
}

.night,
.night-theme {
  .s-selector {
    .v-select {
      background-color: @night-dropdown-bg;
      border-color: @night-dropdown-border;

      &.disabled {
        .dropdown-toggle {
          background-color: @night-input-disabled;
          color: @dark-5;

          input {
            background: transparent;
          }
        }

        .open-indicator {
          background: transparent;
        }

        .selected-tag {
          color: @dark-5;
        }
      }

      &.single {
        .selected-tag {
          background-color: transparent;
        }
      }

      .selected-tag {
        color: @night-paragraph;
        background-color: @dark-3;

        .close {
          &:hover {
            &:after {
              color: @night-title;
            }
          }
        }
      }

      .dropdown-menu {
        background-color: @night-dropdown-bg;
        border-color: @night-dropdown-border;
        .night-shadow();

        li {
          a {
            color: @night-paragraph;

            &:hover,
            &.active,
            &.highlight {
              background-color: @night-hover;
              color: @night-title;
            }
          }
        }

        .active {
          a {
            background-color: @night-hover;
          }
        }

        .highlight {
          a {
            background-color: @night-hover;
            color: @night-title;
          }
        }
      }
    }
  }
}
</style>
