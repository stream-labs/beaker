<template>
  <div
    class="s-tooltip-notice"
    :style="{ width: width + 'px' }"
  >
    <div class="s-tooltip-notice-content">
      <i
        :class="arrowClasses"
        class="icon-dropdown s-tooltip-notice__arrow"
      />
      <h3>{{ title }}</h3>
      <p>{{ desc }}</p>
      <Button
        v-if="hasButton"
        :title="buttonTitle"
        :variation="'action'"
        :size="'small'"
        @click="clickHandler"
      />

      <Button
        v-if="hasSecondaryAction"
        class="s-tooltip-notice__secondary-action"
        :title="secondaryActionTitle"
        :variation="'link'"
        :size="'small'"
        @click="secondaryClickHandler"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Button from './Button.vue';

export default defineComponent({
  components: {
    Button,
  },

  props: {
    title: {
      type: String,
      required: true,
    },

    buttonTitle: {
      type: String,
      default: 'Got it',
    },

    secondaryActionTitle: {
      type: String,
      default: 'Learn More',
    },

    desc: {
      type: String,
      required: true,
    },

    arrowPosition: {
      type: String,
      default: 'left',
    },

    hasButton: {
      type: Boolean,
      default: true,
    },

    hasSecondaryAction: {
      type: Boolean,
      default: false,
    },

    width: {
      type: Number,
      default: 200,
    },
  },

  setup(props, { emit }) {
    function clickHandler() {
      emit('handle-tooltip');
    }

    function secondaryClickHandler() {
      emit('handle-tooltip-secondary');
    }

    const arrowClasses = computed(() => {
      const classes: string[] = [];

      if (props.arrowPosition) {
        classes.push(`s-tooltip-notice__arrow--${props.arrowPosition}`);
      }

      return classes;
    });

    return {
      clickHandler,
      secondaryClickHandler,
      arrowClasses,
    };
  },
});
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-tooltip-notice {
  .day-shadow();
  background-color: @white;
  .padding(2);
  width: 200px;
  .radius();
  z-index: 100;
  position: absolute;

  .s-button {
    .margin-top(2);
  }

  p {
    .margin-bottom(0);
  }

  h3 {
    font-size: 16px;
    .margin-bottom();
    .weight(@medium);
    color: @day-title;
  }
}

.s-tooltip-notice-content {
  position: relative;
}

.s-tooltip-notice__arrow {
  transform: rotate(90deg);
  font-size: 40px;
  position: absolute;
  top: 8px;
  left: -36px;
  color: @white;
}

.s-tooltip-notice__arrow--top {
  top: -38px;
  left: 126px;
  transform: rotate(180deg);
}

.s-tooltip-notice__arrow--bottom {
  top: 8px;
  left: -36px;
  transform: rotate(0deg);
}

.s-tooltip-notice__arrow--right {
  top: 8px;
  left: -36px;
  transform: rotate(-90deg);
}

.s-tooltip-notice__secondary-action {
  .margin-left(2);
}

.night,
.night-theme {
  .s-tooltip-notice {
    background-color: @night-section-alt;

    h3 {
      color: @night-title;
    }
  }

  .s-tooltip-notice__arrow {
    color: @night-section-alt;
  }
}
</style>
