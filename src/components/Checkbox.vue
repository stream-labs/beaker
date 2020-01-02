<template>
  <div class="s-checkbox">
    <input
      type="checkbox"
      :id="id"
      :name="name"
      :checked="value"
      @change="$emit('input', $event.target.checked)"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Checkbox extends Vue {
  @Prop({ type: String, required: true })
  label!: string;

  @Prop({ type: String, required: true })
  id!: string;

  @Prop({ type: String })
  name!: string;

  @Prop({ type: Boolean, required: true })
  value!: boolean;
}
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-checkbox {
  position: relative;
  display: inline-block;
  width: 100%;
  backface-visibility: hidden;
  outline: 0;
  vertical-align: baseline;
  font-style: normal;
  min-height: 16px;
  line-height: 16px;
  min-width: 16px;

  label {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    width: auto;
    min-height: 16px;
    .padding-left(3);
    margin: 0;
    .weight(@normal);
    line-height: 16px;
    color: @day-paragraph;
    cursor: default;
    outline: 0;
    .transition(border, background-color);

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      width: 16px;
      height: 16px;
      content: "";
      background: transparent;
      .radius();
      -webkit-transition: border 0.1s ease, opacity 0.1s ease,
        box-shadow 0.1s ease, -webkit-transform 0.1s ease;
      transition: border 0.1s ease, opacity 0.1s ease, box-shadow 0.1s ease,
        -webkit-transform 0.1s ease;
      transition: border 0.1s ease, opacity 0.1s ease, transform 0.1s ease,
        box-shadow 0.1s ease;
      transition: border 0.1s ease, opacity 0.1s ease, transform 0.1s ease,
        box-shadow 0.1s ease, -webkit-transform 0.1s ease;
      border: 1px solid @light-4;
      box-sizing: border-box;
    }
  }

  input[type="checkbox"],
  input[type="radio"] {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0 !important;
    outline: 0;
    z-index: 3;
    width: 16px;
    height: 16px;
    margin: 0;

    &:focus + label {
      outline: 2px solid @dark-2;
      outline-offset: 1.5px;
    }
  }

  input:checked ~ label {
    color: @day-title;

    &:before {
      border-color: @teal;
      background-color: @teal;
    }
  }

  input:checked ~ label:after {
    position: absolute;
    left: 3px;
    top: 0px;
    opacity: 1;
    color: @white;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    content: "\f00c";
    font-size: 10px;
  }
}

.s-radio.checkbox {
  label:before {
    content: "";
    transform: none;
    width: 16px;
    height: 16px;
    border-radius: 500rem;
    top: 0;
    left: 0;
  }

  input:checked ~ label:after {
    content: "";
    width: 8px;
    height: 8px;
    background-color: @white;
    border-radius: 20px;
    left: 4px;
    top: 4px;
  }
}

.s-radio-button-group,
.s-checkbox-group {
  .s-checkbox,
  .s-radio-button {
    .margin-bottom();

    &:last-child {
      .margin-bottom(@0);
    }
  }
}

.night {
  .s-checkbox {
    input[type="checkbox"],
    input[type="radio"] {
      &:focus + label {
        outline-color: @white;
        outline-offset: 1.5px;
      }
    }

    label {
      color: @night-paragraph;

      &:before {
        border-color: @night-input-border;
      }
    }

    input:checked ~ label {
      color: @night-title;
    }
  }
}
</style>
