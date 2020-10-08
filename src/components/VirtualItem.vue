<template>
  <div
    class="s-virtual-item"
    :class="[virtualItemClasses]"
    :rarity="rarity"
    :selected="selected"
    :quantity="quantity"
    :value="value"
    @click="$emit('click')"
  >
    <span
      v-if="selectionCount"
      class="s-virtual-item__selection-count"
    >
      {{ selectionCount }}
    </span>
    <span
      v-if="remainingTime"
      class="s-virtual-item__selection-remaining"
      :class="{ warning: hasWarning }"
    >{{ remainingTime }}</span>
    <span
      v-if="type"
      class="s-virtual-item__label"
    >{{ type }}</span>
    <span
      v-if="quantity"
      class="s-virtual-item__label"
    >{{ quantity }}</span>
    <div class="s-virtual-item__img">
      <img :src="preview">
    </div>
    <h3 class="s-virtual-item__name">
      {{ name }}
    </h3>
    <span
      class="s-virtual-item__rarity"
      :class="{ entered: isGiveaway }"
    >
      <i
        class="icon-check-mark"
        v-if="isGiveaway"
      />
      {{ rarity }}
    </span>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, onMounted, computed,
} from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    preview: {
      type: String,
      default: '',
    },
    quantity: {
      type: Number,
      default: 0,
    },
    rarity: {
      type: String,
      default: '',
    },
    selected: {
      type: Boolean,
      default: false,
    },
    selectionCount: {
      type: String,
      default: '',
    },
    remainingTime: {
      type: String,
      default: '',
    },
    hasWarning: {
      type: Boolean,
      default: false,
    },
    isGiveaway: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
  },

  setup(props, { attrs }) {
    const isClickable = ref(false);

    const virtualItemClasses = computed(() => {
      const classes: string[] = [];

      if (props.rarity) {
        classes.push(`s-virtual-item--${props.rarity}`);
      }

      if (props.selected) {
        classes.push('is-selected');
      }

      if (isClickable.value) {
        classes.push('clickable');
      }

      return classes.join(' ');
    });

    onMounted(() => {
      if (attrs.click) {
        isClickable.value = true;
      }
    });

    return {
      isClickable,
      virtualItemClasses,
    };
  },
});
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-virtual-item {
  background-color: @day-section;
  position: relative;
  display: grid;
  justify-content: center;
  text-align: center;
  .padding(2);
  .radius(2);
  .transition();
  min-width: 160px;
  max-width: 220px;

  &.is-selected {
    background-color: @selected;
    .s-virtual-item__name {
      color: @white;
    }

    .s-virtual-item__rarity {
      color: @night-paragraph;
    }
  }

  .clickable&:hover {
    cursor: pointer;
  }
}

.s-virtual-item__name {
  .weight(@medium);
  font-size: 16px;
  .margin-bottom(0);
}

.s-virtual-item__rarity {
  .margin-top();

  .icon-check-mark {
    .margin-right();
  }

  &.entered {
    color: @teal;
  }
}

.s-virtual-item__selection-count {
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  background-color: @white;
  color: @dark-2;
  .small-type();
  .weight(@medium);
  .radius(4);
  width: 16px;
  height: 16px;
  .flex-centered();
}

.s-virtual-item__selection-remaining {
  position: absolute;
  top: 16px;
  right: 12px;
  background: @dark-5;
  color: @white;
  .radius();
  .padding(0.5);

  &.warning {
    background: @red;
  }
}

.s-virtual-item__img {
  margin: 0 auto;
  .margin-bottom(2);
  width: 96px;
}

.night,
.night-theme {
  .s-virtual-item {
    background-color: @night-section-alt;

    &.is-selected {
      background-color: @selected;
    }
  }
}
</style>
