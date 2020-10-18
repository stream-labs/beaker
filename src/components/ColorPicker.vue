<template>
  <div
    ref="colorpicker"
    class="s-colorpicker-container"
  >
    <input
      type="text"
      :value="value"
      :placeholder="placeholder"
      :class="{ 's-colorpicker__input--error': error }"
      @click="showPicker()"
      @input="updateFromInput"
    >
    <div
      v-if="error"
      class="s-colorpicker__input-error"
    >
      <i class="icon-error" />
      {{ error }}
    </div>

    <div
      class="s-colorpicker__preview"
      :style="{ backgroundColor: value }"
      @click="showPicker()"
    />
    <div class="s-colorpicker__preview--alpha" />

    <transition name="fade">
      <picker
        v-if="displayPicker"
        class="s-colorpicker"
        :class="alphaClass"
        :value="colors"
        :disable-alpha="!hasAlpha"
        :disable-fields="!hasAlpha"
        @input="updateFromPicker"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { Chrome } from 'vue-color';

interface IColorValue {
  hex?: string;
  hex8?: string;
  hsl?: { h: number, s: number, l: number, a: number };
  hsv?: { h: number, s: number, v: number, a: number };
  rgba?: { r: number, g: number, b: number, a: number };
  a?: number;
}

export default defineComponent({
  components: {
    picker: Chrome,
  },

  props: {
    value: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
      default: '#31c3a2',
    },

    hasAlpha: {
      type: Boolean,
      default: false,
    },

    error: {
      type: String,
      default: '',
    },
  },

  emits: ['input'],

  setup(props, { emit }) {
    const colorpicker = ref<HTMLDivElement | null>(null);
    const displayPicker = ref(false);
    const backgroundColor = ref('');
    const colors = ref<IColorValue>({});

    const alphaClass = computed(() => {
      if (props.hasAlpha) {
        return colors.value.a === 1 ? 'nonAlpha' : 'alpha';
      }
      return false;
    });

    colors.value = { ...colors.value, hex: props.value };

    function updateFromPicker(value: IColorValue) {
      colors.value = value;
      if (alphaClass.value === 'alpha') {
        emit('input', value.hex8);
      } else {
        emit('input', value.hex);
      }
    }

    function updateFromInput(event: InputEvent) {
      const target = event?.target as HTMLInputElement;
      colors.value = target?.value as IColorValue;
      emit('input', target?.value);
    }

    function documentClick(e: MouseEvent) {
      const el = colorpicker.value;
      const { target } = e;
      if (el && el !== target && !el.contains(target as Node)) {
        // eslint-disable-next-line no-use-before-define
        hidePicker();
      }
    }

    function hidePicker() {
      document.removeEventListener('click', documentClick);
      displayPicker.value = false;
    }

    function showPicker() {
      document.addEventListener('click', documentClick);
      displayPicker.value = true;
    }

    return {
      displayPicker,
      backgroundColor,
      colors,
      alphaClass,
      updateFromPicker,
      updateFromInput,
      hidePicker,
      showPicker,
      documentClick,
    };
  },
});
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-colorpicker {
  &-container {
    position: relative;
    display: inline-block;
    width: 225px;
  }

  &__preview {
    box-sizing: border-box;
    position: absolute;
    top: 10px;
    right: 8px;
    width: 20px;
    height: 20px;
    border: 1px solid fade(@dark-2, 12%);
    .radius(0.5);
    z-index: 1;

    &--alpha {
      position: absolute;
      top: 11px;
      right: 9px;
      z-index: 0;
      width: 18px;
      height: 18px;
      .radius(0.5);
      /* eslint-disable-next-line max-len */
      background-image: url(
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/
        9hAAAAMElEQVQ4T2N89uzZfwY8QFJSEp80A+OoAcMiDP7//483HTx//hx/Ohg1gIFx
        6IcBALl+VXknOCvFAAAAAElFTkSuQmCC');
    }
  }

  &.vc-chrome {
    position: relative;
    left: 0;
    top: 0;
    border-radius: 4px 4px 5px 5px;
    .day-shadow();
  }

  .vc-chrome-active-color {
    border: 1px solid fade(@dark-2, 12%);
    .radius();
  }

  .vc-chrome-body {
    padding: 12px;
    border-radius: 0 0 4px 4px;
  }

  .vc-chrome-toggle-btn,
  .vc-chrome-fields-wrap {
    display: none;
  }

  &.alpha {
    .vc-chrome-fields:not(:nth-child(2)) {
      display: none;
    }

    .vc-chrome-fields:nth-child(2) {
      display: flex;
    }

    .vc-alpha-checkboard-wrap {
      border-radius: 2px 4px 4px 2px;
    }
  }

  &.alpha,
  &.nonAlpha {
    .vc-chrome-color-wrap {
      width: 42px;

      .vc-checkerboard {
        .radius();
      }
    }
  }
}

.night {
  .s-colorpicker {
    &__preview {
      border-color: fade(@white, 16%);
    }

    .vc-chrome-body {
      background-color: @dark-4;
    }

    .vc-chrome-active-color {
      border-color: fade(@white, 16%);
    }
  }
}
</style>
