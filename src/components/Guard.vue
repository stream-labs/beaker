<template>
  <div
    :class="guardClasses"
    @click="showText"
  >
    <div
      v-if="visible"
      :class="`${prefix}__text`"
    >
      <i class="fas fa-lock" />
      {{ placeholder }}
    </div>
    <div
      :class="
        visible
          ? `${prefix}-wrapper`
          : `${prefix}-wrapper ${prefix}-wrapper--readable`
      "
    >
      <slot
        v-if="$slots.content"
        name="content"
      />
      <div v-else>
        {{ value }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: String,
    },

    placeholder: {
      type: String,
      default: 'Click to show',
    },

    showOnClick: {
      type: Boolean,
      default: true,
    },

    variation: {
      type: String,
      default: 'normal',
    },

    type: {
      type: String,
      default: 'text',
    },
  },

  setup(props, { emit }) {
    const visible = ref(true);

    const prefix = computed(() => (props.type === 'input' ? 's-input-guard' : 's-text-guard'));

    function showText() {
      if (props.showOnClick) {
        visible.value = false;
      } else {
        emit('click');
      }
    }

    const guardClasses = computed(() => {
      const classes: string[] = [];
      if (visible.value) {
        classes.push(prefix.value);
      } else {
        classes.push(`${prefix.value}--readable`);
      }

      if (props.variation === 'alt') {
        classes.push(`${prefix.value}--alt`);
      }

      return classes;
    });

    return {
      visible,
      prefix,
      showText,
      guardClasses,
    };
  },

});
</script>

<style lang="less">
@import (reference) "./../styles/Imports";
//  Input Guard Css
.s-input-guard {
  position: relative;
  flex: 1;
  margin-right: 10px;
  .radius();

  .s-input-guard-wrapper {
    input {
      color: transparent;
      text-shadow: 0 0 5px rgba(55, 71, 79, 0.5);
    }
  }
}

//  Text Guard Css
.s-text-guard {
  width: auto;
  min-width: 150px;
  border: 1px solid @day-border;
  display: inline-block;
  position: relative;
  .radius();
  padding: 0 8px;

  .s-text-guard-wrapper {
    color: transparent;
    text-shadow: 0 0 5px rgba(55, 71, 79, 0.5);
  }
}

.s-text-guard-wrapper--readable,
.s-input-guard-wrapper--readable {
  color: inherit;
  text-shadow: none;
  border: 0px;
}

.night,
.night-theme {
  .s-text-guard {
    border: 1px solid @night-border;
    .s-text-guard-wrapper {
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    }
  }

  .s-text-guard--alt {
    border-color: @night-border-alt;
  }

  .s-input-guard {
    .s-input-guard-wrapper {
      input {
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        color: transparent;
      }
    }
  }
}

.s-text-guard__text,
.s-input-guard__text {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  .fab,
  .far,
  .fas {
    .margin();
  }
}
</style>
