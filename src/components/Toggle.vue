<template>
  <div :class="['s-toggle', toggleClass]">
    <button
      v-for="(val, key) in values"
      :key="key"
      type="button"
      :title="capitalize(key)"
      :class="[
        's-toggle__option',
        { 's-toggle__option--active': localValue === val }
      ]"
      @click="setValue(val)"
    >
      {{ key }}
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import filters from '../utilities/filters';

export default defineComponent({
  props: {
    values: {
      type: Object,
      required: true,
    },

    variation: {
      type: String,
      default: '',
    },
  },

  emits: ['input'],

  setup(props, { emit }) {
    const localValue = ref<string | number | boolean>('');

    const [initValue] = Object.values(props.values);
    localValue.value = initValue;

    function setValue(val: string | number | boolean) {
      localValue.value = val;
      emit('input', val);
    }

    function capitalize(val: string) {
      return filters.capitalize(val);
    }

    const toggleClass = computed(() => (props.variation ? `s-toggle--${props.variation}` : ''));

    return {
      localValue,
      setValue,
      capitalize,
      toggleClass,
    };
  },
});
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-toggle {
  display: inline-flex;
  .radius();
  .transition();
  overflow: hidden;
  .weight(@medium);

  &__option {
    .padding();
    border: none;
    font-size: 14px;
    background-color: @day-section;
    color: @icon;
    .transition();
    outline: none;
    display: flex;
    font-family: "Roboto", sans-serif;

    &--active {
      background-color: @dark-2;
      color: @white;
    }
  }

  &--text {
    .s-toggle__option {
      padding: 8px 6px;
      line-height: 1.2;
      font-weight: 400;

      &:first-child {
        padding-left: 8px;
      }

      &:last-child {
        padding-right: 8px;
      }

      &--active {
        background-color: @day-section;
        color: @dark-2;
        font-weight: 500;
      }
    }
  }
}

.night,
.night-theme {
  .s-toggle {
    &__option {
      background-color: @dark-4;

      &--active {
        background-color: @dark-2;
      }
    }

    &--text {
      .s-toggle__option {
        &--active {
          background-color: @dark-4;
          color: @white;
        }
      }
    }
  }
}
</style>
