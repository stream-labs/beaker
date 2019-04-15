<template>
  <div
    class="s-status-switch"
    :class="{ enabled: !!value }"
    @click="$emit('input', !value)"
  >
    <div class="s-status-switch__paddle"></div>
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

  @Prop({ default: false })
  value?: boolean;
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.s-status-switch {
  user-select: none;
  display: inline-flex;
  align-items: center;

  label {
    .margin-left(1);
    color: @day-paragraph;
  }

  .s-status-switch__paddle {
    height: 1em;
    width: 2em;
    background: @day-switch-bg;
    border-radius: 1em;
    display: inline-flex;
    align-items: center;
    position: relative;
    padding: 2px;
    box-sizing: content-box;
    cursor: pointer;
    &:before {
      content: "";
      width: 1em;
      height: 1em;
      background: #fff;
      border-radius: 1em;
      position: absolute;
      transition: transform 125ms ease-out;
    }
  }

  &.enabled {
    label {
      color: @day-title;
    }
    .s-status-switch__paddle {
      background: @teal;

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
