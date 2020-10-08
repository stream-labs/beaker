<template>
  <div class="s-radio s-checkbox">
    <input
      type="radio"
      :id="id"
      :name="name"
      :checked="val == value"
      :value="val"
      @input="$emit('input', val)"
      @click="$emit('onClick')"
    >
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { defineComponent } from 'vue';

@Component({})
export default defineComponent({
  @Prop(String)
  label!: string;

  @Prop(String)
  id!: string;

  @Prop(String)
  name!: string;

  @Prop([String, Boolean])
  value!: string | boolean;

  @Prop([String, Boolean])
  val!: string | boolean;
})
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-checkbox {
  input:checked ~ label {
    color: @day-title;

    &:before {
      border-color: @dark-teal;
      background-color: @dark-teal;
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

.s-radio.s-checkbox {
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
    label {
      color: @night-paragraph;

      &:before {
        border-color: @night-input-border;
      }
    }

    input:checked ~ label {
      color: @night-title;

      &:before {
        border-color: @teal;
        background-color: @teal;
      }
    }
  }
}
</style>
