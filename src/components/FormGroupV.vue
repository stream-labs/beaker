<template>
  <div class="s-form-group-v">
    <!-- title -->
    <div
      :style="titleLayoutStyle"
      class="s-form-group-v__title"
    >
      <template v-if="!this.$slots.header">
        <label v-if="title">{{ title }}</label>
        <i
          v-if="tooltip"
          v-tooltip.auto="tooltip"
          class="tooltip icon-question"
        />
      </template>
      <slot name="header" />
    </div>

    <div class="s-form-group-v__input-wrapper">
      <slot name="input" />

      <div
        v-if="helpText"
        class="s-form-group-v__help-text"
      >
        {{ helpText }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    helpText: {
      type: String,
    },

    title: {
      type: String,
    },

    tooltip: {
      type: String,
      default: '',
    },

    titleLayout: {
      type: String,
      default: 'space-between',
    },
  },

  setup(props) {
    const titleLayoutStyle = computed(() => ({
      'justify-content': props.titleLayout,
    }));

    return {
      titleLayoutStyle,
    };
  },
});
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-form-group-v {
  .margin-bottom(2);

  .s-tooltip {
    .margin-left();
  }
}

.s-form-group-v__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .margin-bottom();
  font-size: 12px;

  &--hidden {
    margin-bottom: 0;
  }

  label {
    .margin-right();
  }
}

.s-form-group-v__input-wrapper {
  grid-column: col-start / span 12;
}

.s-form-group-v__help-text {
  color: @label;
  font-size: 13px;
  .margin-top();
}
</style>
