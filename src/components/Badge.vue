<template>
  <div
    class="s-badge"
    :class="badgeClasses"
    :style="badgeStyles"
  >
    <div
      v-if="variant === 'progress'"
      :style="{
        'background-image': `linear-gradient(
          to right,
          ${backgroundColor} ${parseInt((current / total) * 100)}%,
          rgba(0,0,0,0) 0%
        )`,
        color: textColor
      }"
    >
      {{ `${current}${separator}${total} ${suffix}` }}
    </div>
    <div v-if="variant === 'prime' || variant === 'prime-alt'">
      <i
        v-if="variant === 'prime'"
        class="icon-prime"
      />Prime
    </div>
    <slot v-else />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

interface IBadgeProRewrite {
  background: string;
  color: string;
}

export default defineComponent({
  props: {
    variant: {
      type: String,
      default: 'success',
    },

    alignLeft: {
      type: Boolean,
      default: false,
    },

    noMargin: {
      type: Boolean,
      default: false,
    },

    backgroundColor: {
      type: String,
      default: '',
    },

    textColor: {
      type: String,
      default: '#ffffff',
    },

    current: {
      type: Number,
    },

    total: {
      type: Number,
    },

    separator: {
      type: String,
      default: '/',
    },

    suffix: {
      type: String,
    },

    small: {
      type: Boolean,
    },
  },

  setup(props) {
    const badgeProRewrite = ref<IBadgeProRewrite>({
      background: props.backgroundColor,
      color: props.textColor,
    });

    const badgeStyles = computed(() => {
      const styles: IBadgeProRewrite[] = [];

      if (props.backgroundColor && props.variant !== 'progress') {
        styles.push(badgeProRewrite.value);
      }

      return styles;
    });

    const badgeClasses = computed(() => {
      const classes: string[] = [];

      classes.push(`s-badge--${props.variant}`);

      if (props.alignLeft) {
        classes.push('s-badge--left');
      }

      if (props.noMargin) {
        classes.push('s-badge--no-margin');
      }

      if (props.small) {
        classes.push('s-badge--small');
      }

      return classes;
    });

    return {
      badgeProRewrite,
      badgeStyles,
      badgeClasses,
    };
  },
});
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.badge-colors(@color, @bg: @color, @amount: 8%, @alt-color: @color) {
  background-color: fade(@bg, @amount);
  color: @color;

  &-alt {
    height: 14px;
    .padding-h-sides(@0);
    background-color: transparent;
    color: @alt-color;
  }
}

.night-badge-colors(@color: @dark-3, @bg, @amount: 100%, @alt-color: @bg) {
  .badge-colors(@color, @bg, @amount, @alt-color);
}

// Standout labels, used for 'New', 'Beta', 'Pro', etc
.s-badge {
  display: inline-flex;
  align-items: center;
  height: 24px;
  margin: 0 0 0 8px;
  padding: 0 5px;
  .radius();
  font-size: 14px;
  .weight(@medium);
  color: @white;
  line-height: 1;
  box-sizing: border-box;

  &--left {
    margin: 0 8px 0 0;
  }

  &--no-margin {
    margin: 0;
  }

  &--small {
    height: 16px;
    font-size: 12px;
  }

  &--teal,
  &--success {
    .badge-colors(@dark-teal);
  }

  &--tag {
    .badge-colors(@dark-5);
  }

  &--pro {
    .badge-colors(@white, @light-5, 100%, @light-5);
  }

  &--beta {
    .badge-colors(@dark-yellow);
  }

  &--warning {
    .badge-colors(@dark-red);
  }

  &--new {
    .badge-colors(@purple);
  }

  &--count {
    height: 13px;
    .margin(0);
    padding: 0 3.66px;
    border-radius: 7px;
    font-size: 10px;
    .weight(@medium);
    line-height: 13px;
    background-color: @dark-red;
  }

  &--mod {
    color: @dark-yellow;
    background-color: @white;
    .margin-h-sides();
  }

  &--progress {
    height: 18px;
    .padding(0);
    line-height: 18px;
    background-color: @light-4;

    > div {
      height: 18px;
      padding: 0 4px;
      .radius();
      line-height: 18px;
    }
  }

  &--prime {
    .badge-colors(@white, @dark-prime, 100%, @dark-prime);
    padding: 0 7px;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 900;

    .icon-prime {
      position: relative;
      top: 1px;
      display: inline-block;
      margin-right: 4px;
      font-size: 12px;
      line-height: 0.9;

      &::before {
        color: @white;
      }
    }
  }

  &--prime-alt {
    font-weight: 900;
    font-size: inherit;

    &::before {
      display: none;
    }
  }
}

.night,
.night-theme {
  .s-badge {
    &--teal,
    &--success {
      .night-badge-colors(@bg: @teal);
    }

    &--beta {
      .night-badge-colors(@bg: @yellow);
    }

    &--warning {
      .night-badge-colors(@bg: @red);
    }

    &--tag {
      .night-badge-colors(@white, @dark-5);
    }

    &--new {
      .night-badge-colors(@white, @purple);
    }

    &--pro {
      .night-badge-colors(@bg: @light-5);
    }

    &--count {
      .night-badge-colors(@bg: @red);
    }

    &--mod {
      .night-badge-colors(@yellow, @dark-3);
    }

    &--progress {
      background-color: @dark-5;
    }

    &--prime {
      .night-badge-colors(@bg: @prime);

      .icon-prime {
        &::before {
          color: @dark-3;
        }
      }
    }
  }
}
</style>
