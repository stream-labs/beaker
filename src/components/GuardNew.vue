<template>
  <div class="s-guard" :class="{'s-guard--hidden': !visible }" @click="showText">
    <div class="s-guard__placeholder">
      <i class="icon-lock"></i>
      {{ placeholder }}
    </div>

    <div class="s-guard__text">
      <TextInput :readonly="true" type="text" v-model="value" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TextInput from "./TextInput.vue";

@Component({
  components: {
    TextInput
  }
})
export default class GuardNew extends Vue {
  @Prop()
  value?: string;

  @Prop({ default: "Click to show" })
  placeholder!: string;

  visible = false;

  showText() {
    if (!this.visible) {
      this.visible = true;
    } else {
      this.$emit("click");
    }
  }
}
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-guard {
  position: relative;
  display: inline-flex;
  align-items: center;
  min-width: 150px;
  height: 40px;
  border: 1px solid @light-4;
  border-radius: 4px;
  overflow: hidden;
  cursor: unset;

  &__placeholder {
    position: absolute;
    width: 100%;
    text-align: center;
    opacity: 0;
    user-select: none;
    transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);

    .icon-lock {
      margin-right: 4px;
    }
  }

  &__text {
    color: @white;
    user-select: initial;
    filter: blur(0);
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
      filter 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &--hidden {
    cursor: pointer;
    .s-guard {
      &__placeholder {
        opacity: 1;
      }

      &__text {
        color: @dark-5;
        user-select: none;
        filter: blur(4px);
      }
    }
  }

  .s-form-field__input {
    border: none;

    &:focus {
      border: none;
    }
  }
}

.night {
  .s-guard {
    border-color: @dark-5;

    .s-form-field__input {
      border: none;

      &:focus {
        border: none;
      }
    }
  }
}
</style>
