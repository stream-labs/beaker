<template>
  <div
    class="s-status-switch"
    :class="{ enabled: !!value }"
    @click="$emit('input', !value)"
  >
    <div
      class="s-status-switch__paddle"
      :class="{ 's-status-switch__paddle--small': size === 'small' }"
    ></div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class StatusSwitch extends Vue {
  @Prop()
  label?: string;

  @Prop()
  size?: string;

  @Prop({ default: false })
  value?: boolean;
}
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-status-switch {
  user-select: none;
  display: inline-flex;
  align-items: center;

  label {
    .margin-left(1);
    color: @day-paragraph;
    transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .s-status-switch__paddle {
    position: relative;
    height: 24px;
    width: 40px;
    padding: 4px;
    border-radius: 20px;
    background: @day-switch-bg;
    cursor: pointer;
    transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    &:before {
      content: "";
      position: absolute;
      width: 16px;
      height: 16px;
      .radius(4);
      background: #fff;
      transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &--small {
      height: 16px;
      width: 28px;
      padding: 2px;
      .radius(3.5);

      &::before {
        width: 12px;
        height: 12px;
        .radius(3);
      }
    }
  }

  &.enabled {
    label {
      color: @day-title;
    }
    .s-status-switch__paddle {
      background: @dark-teal;

      &:before {
        transform: translateX(100%);
      }
    }
  }
}

.night {
  .s-status-switch {
    label {
      color: @night-paragraph;
    }

    .s-status-switch__paddle {
      background: @night-switch-bg;
    }

    &.enabled {
      label {
        color: @night-title;
      }

      .s-status-switch__paddle {
        background: @teal;
      }
    }
  }
}
</style>
