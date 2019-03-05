<template>
  <div class="s-status-switch">
    <input class="s-status-switch__input" ref="switchInput" type="checkbox" :checked="current">
    <label @click="onLabelClick()" class="s-status-switch__paddle">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class StatusSwitch extends Vue {
  $refs!: {
    switchInput: HTMLInputElement;
  };

  @Prop()
  label!: string;

  @Prop()
  value!: boolean;

  current = this.value;

  onLabelClick(): void {
    this.$refs.switchInput.checked = !this.$refs.switchInput.checked;
    this.current = this.$refs.switchInput.checked;
    this.$emit("input", this.current);
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.s-status-switch {
  position: relative;
  margin: 0;
  outline: 0;
  user-select: none;

  &__input {
    position: absolute;
    margin-bottom: 0;
    opacity: 0;
  }

  &__paddle {
    position: relative;
    padding-left: 42px;
    .transition();

    &::before {
      content: "";
      position: absolute;
      top: 0;
      display: block;
      width: 28px;
      height: 16px;
      border-radius: 50px;
      background: @day-switch-bg;
      cursor: pointer;
      .transition();
    }

    &::after {
      content: "";
      position: absolute;
      top: 2px;
      left: 2px;
      transform: translateZ(0);
      display: block;
      height: 12px;
      width: 12px;
      border-radius: 50px;
      background: @white;
      cursor: pointer;
      .transition();
    }
  }

  input:checked ~ .s-status-switch__paddle {
    color: @dark-2;

    &::before {
      background: @teal;
    }

    &::after {
      left: 14px;
    }
  }
}
</style>
