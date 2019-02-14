<template>
  <v-select
    :value="value"
    :options="options"
    :disabled="disabled"
    :clearable="false"
    :searchable="searchable"
    :multiple="multiple"
    :placeholder="placeholder"
    @input="val => emitInput(val)"
  ></v-select>
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
  }

  .vs__selected-options {
    .padding(@0);
  }

  .selected-tag {
    .margin(@0);
    .margin-right();
    color: @day-paragraph;
    .padding(@0);
    line-height: 40px;
    border: 0;
    font-family: "Roboto";
  }

  input[type="search"],
  input[type="search"]:focus {
    .margin(@0);
    font-size: 14px;
    font-family: "Roboto";
    .padding-h-sides(0);
  }

  .dropdown-menu {
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

.night,
.night-theme {
  .v-select {
    background-color: @night-dropdown-bg;
    border-color: @night-dropdown-border;

    .selected-tag {
      color: @night-paragraph;
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
</style>
