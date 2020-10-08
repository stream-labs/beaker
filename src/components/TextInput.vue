<template>
  <div
    class="s-form-field"
    :class="{
      's-form-field--with-label': label,
      's-form-field--disabled': disabled
    }"
  >
    <div
      v-if="type === 'number'"
      class="s-arrows"
    >
      <div
        :class="{
          's-arrow arrow-up': true,
          's-arrow--disabled': isMaxReached
        }"
        @click="increment"
      >
        <i class="fas fa-caret-up" />
      </div>
      <div
        :class="{
          's-arrow arrow-down': true,
          's-arrow--disabled': isMinReached
        }"
        @click="decrement"
      >
        <i class="fas fa-caret-down" />
      </div>
    </div>
    <input
      ref="input"
      :type="type"
      :placeholder="placeholder"
      @input="handleInput"
      :name="name"
      :disabled="disabled"
      :readonly="readonly"
      @blur="$emit('blur')"
      @focus="onFocus"
      @click="onClick"
      @keyup="onKeyUp"
      :autocomplete="autoComplete"
      :autofocus="autofocus"
      v-model="content"
      :class="{
        's-form-field__input': true,
        's-form-field__input--error': !!error,
        's-form-field__input--disabled': disabled
      }"
      v-on="filteredListeners"
      @mousewheel="mouseWheel"
    >
    <label
      :class="{
        's-form-field__label--top': value !== '' && !disabled
      }"
      class="s-form-field__label"
      v-if="label"
    >{{ label }}</label>

    <div
      v-show="error"
      class="s-form-field__input-error"
    >
      <i class="icon-error" />
      {{ error }}
    </div>

    <p
      v-show="helpText"
      class="s-form-field__help-text"
    >
      {{ helpText }}
    </p>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';

import { computed, defineComponent, ref, watch, watchEffect } from 'vue';
import { omit, isNil } from 'lodash';

export default defineComponent({
  $refs!: {
    input: HTMLInputElement;
  };

  props: {
    name: {
      type: String
    },

    value: {
      type: [ String, Number ]
    },

    error: {
      type: String
    },

    min: {
      type: Number
    },

    max: {
      type: Number
    },

    step: {
      type: Number,
      default: 1
    },

    helpText: {
      type: String
    },

    type: {
      type: String,
      default: 'text'
    },

    placeholder: {
      type: String
    },

    disabled: {
      type: Boolean
    },

    label: {
      type: String
    },

    readonly: {
      type: Boolean
    },

    autoComplete: {
      type: String,
      default: 'off'
    },

    autofocus: {
      type: Boolean
    },
  },

  setup(props, { attrs, emit }) {
    const input = ref<HTMLInputElement | null>(null);
    let content = '';

    content = props.value !== undefined && props.value !== null
      ? props.value.toString()
      : '';
    ///////   Update to work in Vue 3 Compostion API   ///////
    this.$parent.$on('update', updateValue);
    //////////////////////////////////////////////////////////

    function focus() {
      if (input.value) {
        input.value.focus();
      }
    }

    const filteredListeners = computed(() => {
      return omit(attrs, ['input']);
    });

    const isMaxReached = computed(() => {
      return (
        props.type === 'number'
        && !isNil(props.max)
        && Number(props.value) >= props.max
      );
    });

    const isMinReached = computed(() => {
      return (
        props.type === 'number'
        && !isNil(props.min)
        && Number(props.value) <= props.min
      );
    });

    watchEffect(() => {
      if (props.value) {
        content = props.value.toString();
        emit('onChange', props.value);
      }
    });

    function handleInput(event: { target: HTMLInputElement }) {
      update(
        props.type === 'number' ? Number(event.target.value) : event.target.value,
      );
    }

    function updateValue(val: string) {
      if (input.value) input.value.value = val;
    }

    function onKeyUp(event: { target: HTMLTextAreaElement }) {
      emit('keyup', event);
    }

    function onFocus(event: { target: HTMLTextAreaElement }) {
      emit('focus', event);
    }

    function onClick(event: { target: HTMLTextAreaElement }) {
      emit('click', event);
    }

    function increment() {
      if (this.isMaxReached) return;

      this.update(Number(this.content) + this.step);
    }

    function decrement() {
      if (this.isMinReached) return;

      this.update(Number(this.content) - this.step);
    }

    function mouseWheel(event: WheelEvent) {
      if (this.type === 'number') {
        if (event.deltaY > 0) this.decrement();
        else this.increment();

        event.preventDefault();
      }
    }

    function update(value: string | number) {
      emit('input', value);
    }
  }
})
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-form-field {
  position: relative;

  &--disabled {
    user-select: none;
    cursor: not-allowed;

    & + label {
      border-color: @light-3;
      background-color: @light-3;
    }
  }

  .s-form-field__input {
    &--disabled {
      & + label {
        background-color: @light-3;
        color: @light-5;
      }
    }
  }

  .s-form-field__input::-webkit-outer-spin-button,
  .s-form-field__input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type="number"] {
    -moz-appearance: textfield; /* Firefox */
    padding-right: 30px;
  }

  .s-arrows {
    height: 40px;
    .absolute(0, 8px, 0, auto);
    .transition();
    z-index: 2;
    width: 30px;
    opacity: 0.7;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }

    .s-arrow {
      display: flex !important;
      .fas {
        position: relative;
        font-size: 12px;
      }
      &:active {
        color: black;
      }
      &.arrow-up {
        .absolute(6px, 3px, auto, auto);
      }
      &.arrow-down {
        .absolute(auto, 3px, 6px, auto);
      }
    }
  }

  .s-arrow--disabled {
    color: @light-3;
    cursor: default;
  }
}

.s-form-field__label {
  position: absolute;
  color: @dark-5;
  left: 8px;
  top: 12px;
  .radius();
}

.s-form-field__error-text,
.s-form-field__help-text {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  .margin-bottom(0);
  .margin-top(0);

  .icon-error {
    .margin-left();
  }
}

.s-form-field--with-label {
  position: relative;

  label {
    order: -1;
    .transition();
    transform: translateY(0px);
    pointer-events: none;
    background-color: @white;
    padding: 0 4px;
    line-height: 130%;
  }

  .s-form-field__input:focus + label,
  .s-form-field__label--top {
    transform: translateY(-20px);
    font-size: 12px;
    font-weight: 500;
  }

  .s-form-field__input:not(".s-form-field__input--error"):focus + label {
    color: @day-title;
  }

  .s-form-field--top {
    color: @day-paragraph;
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: transparent;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: transparent;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: transparent;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: transparent;
  }
}

::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: @dark-5;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: @dark-5;
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: @dark-5;
}
:-moz-placeholder {
  /* Firefox 18- */
  color: @dark-5;
}

.night,
.night-theme {
  .s-form-field {
    .s-form-field__input {
      &--disabled {
        & + label {
          background-color: @dark-4;
        }
      }
    }
  }

  .s-form-field--with-label {
    position: relative;

    .s-form-field__input:not("[class*=__input--error]"):focus + label {
      color: @night-title;
    }
  }

  .s-form-field__label {
    background-color: @night-bg;
    color: @night-paragraph;
  }

  .s-form-field__label--error,
  .s-form-field__error-text {
    color: @red;
  }

  .s-arrow--disabled {
    color: @dark-4;
  }
}
</style>
