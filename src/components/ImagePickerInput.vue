<template>
  <div class="s-image-picker-input">
    <div
      v-for="option in options"
      :key="option.value"
      ref="imagePickerItem"
      :value="option.value"
      :title="option.title"
      :image="option.image"
      class="s-image-picker-input__option"
      :class="[value === option.value ? 'active' : '']"
      :style="{ width: width, height: height }"
      :tabindex="value === option.value ? '0' : '-1'"
      @click="emitInput(option.value)"
      @keydown.up.prevent="setValueByKeyPress('UP')"
      @keydown.down.prevent="setValueByKeyPress('DOWN')"
      @keydown.left.prevent="setValueByKeyPress('LEFT')"
      @keydown.right.prevent="setValueByKeyPress('RIGHT')"
    >
      <img :src="option.image">
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, nextTick, onMounted, PropType, ref,
} from 'vue';
import ResizeObserver from 'resize-observer-polyfill';

interface IOption {
  value: string;
  title: string;
  image: string;
}

export default defineComponent({
  props: {
    value: {
      type: String,
      default: 'above',
    },

    width: {
      type: String,
      default: '',
    },

    height: {
      type: String,
      default: '',
    },

    options: {
      type: Array as PropType<IOption[]>,
      default: () => [
        {
          value: 'above',
          title: 'Above',
          image: 'https://cdn.streamlabs.com/layouts/img/above.png',
        },
        {
          value: 'banner',
          title: 'Banner',
          image: 'https://cdn.streamlabs.com/layouts/img/banner.png',
        },
        {
          value: 'side',
          title: 'Side',
          image: 'https://cdn.streamlabs.com/layouts/img/side.png',
        },
      ],
    },
  },

  emits: ['input'],

  setup(props, { emit }) {
    const imagePickerItem = props.options.map(() => ref<HTMLDivElement | null>(null));
    const containerWidth = ref(0);

    const selectedItemIndex = computed(
      (): number => props.options.findIndex((option) => option.value === props.value),
    );

    const totalRows = computed((): number => {
      const items = props.options.length;
      const itemsWidth = (parseInt(props.width, 10) || 64) + 8;
      const total = items * itemsWidth;
      return Math.ceil(total / containerWidth.value);
    });

    const itemsPerRow = computed((): number => {
      const itemsWidth = (parseInt(props.width, 10) || 64) + 8;
      return Math.floor(containerWidth.value / itemsWidth);
    });

    const itemsInFinalRow = computed((): number => props.options.length % itemsPerRow.value);

    const itemPosMatrix = computed(() => {
      const itemMap: Array<number[]> = [];
      let currentRow = 1;
      let currentColumn = 1;
      const totalItems = props.options.length;
      let count = 0;

      while (count < totalItems) {
        itemMap.push([currentRow, currentColumn]);
        currentColumn += 1;

        if (currentColumn > itemsPerRow.value) {
          currentColumn = 1;
          currentRow += 1;
        }

        count += 1;
      }

      return itemMap;
    });

    onMounted(() => {
      nextTick(() => {
        const imagePickerInput = document.querySelector(
          '.s-image-picker-input',
        ) as Element;

        const ro = new ResizeObserver((entries) => {
          entries.forEach((entry) => {
            const { width } = entry.contentRect;
            containerWidth.value = width;
          });
        });

        ro.observe(imagePickerInput);
        containerWidth.value = imagePickerInput.clientWidth;
      });
    });

    function emitInput(val: string) {
      emit('input', val);
    }

    function setValueByKeyPress(direction: string) {
      const currentPosition = [...itemPosMatrix.value[selectedItemIndex.value]];
      let posIndex = selectedItemIndex.value;

      if (direction === 'UP') {
        if (currentPosition[0] <= 1) {
          currentPosition[0] = 1;
        } else {
          currentPosition[0] -= 1;
        }
      }

      if (direction === 'DOWN') {
        if (currentPosition[0] >= totalRows.value) {
          currentPosition[0] = totalRows.value;
        } else {
          currentPosition[0] += 1;

          if (currentPosition[1] > itemsInFinalRow.value) {
            currentPosition[1] = itemsInFinalRow.value;
          }
        }
      }

      if (direction === 'LEFT') {
        if (currentPosition[0] <= 1 && currentPosition[1] <= 1) {
          currentPosition[1] = 1;
        } else if (currentPosition[0] > 1 && currentPosition[1] === 1) {
          currentPosition[0] -= 1;
          currentPosition[1] = itemsPerRow.value;
        } else {
          currentPosition[1] -= 1;
        }
      }

      if (direction === 'RIGHT') {
        if (
          props.options.length < itemsPerRow.value
          && currentPosition[1] >= props.options.length
        ) {
          currentPosition[1] = props.options.length;
        } else if (
          currentPosition[1] >= itemsInFinalRow.value
          && currentPosition[0] === totalRows.value
        ) {
          currentPosition[1] = itemsInFinalRow.value;
        } else if (
          currentPosition[1] === itemsPerRow.value
          && currentPosition[0] < totalRows.value
        ) {
          currentPosition[0] += 1;
          currentPosition[1] = 1;
        } else {
          currentPosition[1] += 1;
        }
      }

      posIndex = itemPosMatrix.value.findIndex(
        (pos) => pos[0] === currentPosition[0] && pos[1] === currentPosition[1],
      );

      if (posIndex > -1 && imagePickerItem.length && imagePickerItem[posIndex].value) {
        imagePickerItem[posIndex].value.focus();
      }
      emitInput(props.options[posIndex].value);
    }

    return {
      containerWidth,
      selectedItemIndex,
      totalRows,
      itemsPerRow,
      itemsInFinalRow,
      itemPosMatrix,
      emitInput,
      setValueByKeyPress,
    };
  },
});
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-image-picker-input {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.s-image-picker-input__option {
  margin: 0 8px 8px 0;
  width: 64px;
  height: 64px;
  border: 1px solid @day-solid-input;
  background-color: @day-solid-input;
  .transition(background-color);
  position: relative;
  .radius();
  cursor: pointer;

  img {
    width: auto;
    height: auto;
    max-width: 80%;
    max-height: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.active {
    background-color: @dark-2;
    border-color: @dark-2;
  }
}

.night,
.night-theme {
  .s-image-picker-input__option {
    border-color: @night-border;
    background-color: @night-solid-input;

    &.active {
      background-color: @dark-2;
      border-color: @dark-2;
    }
  }
}
</style>
