<template>
  <div class="s-form-field" :class="{ 's-form-field--with-label': label }">
    <div v-if="type === 'number'" class="s-arrows">
      <div class="s-arrow arrow-up" @click="increment">
        <i class="fa fa-chevron-up"></i>
      </div>
      <div class="s-arrow arrow-down" @click="decrement">
        <i class="fa fa-chevron-down"></i>
      </div>
    </div>
    <input
      :type="type"
      :placeholder="placeholder"
      @input="handleInput"
      :name="name"
      :disabled="disabled"
      :readonly="readonly"
      @blur="$emit('blur')"
      v-model="content"
      :class="{
        's-form-field__input': true,
        's-form-field__input--error': !!error
      }"
      v-on="filteredListeners"
      @mousewheel="mouseWheel"
    >
    <label
      :class="{
        's-form-field__label--top': value !== '',
        's-form-field__label--error': !!error
      }"
      class="s-form-field__label"
      v-if="label"
    >{{ label }}</label>

    <transition name="slide">
      <p v-show="error" class="s-form-field__error-text">{{ error }}</p>
    </transition>

    <p v-show="helpText" class="s-form-field__help-text">{{ helpText }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { omit } from "lodash";

@Component({})
export default class TextInput extends Vue {
  @Prop()
  name!: String;

  @Prop()
  value!: String;

  @Prop()
  error!: String;

  @Prop()
  helpText!: String;

  @Prop({ default: "text" })
  type!: String;

  @Prop()
  placeholder!: String;

  @Prop()
  disabled!: Boolean;

  @Prop()
  label!: String;

  @Prop()
  readonly!: Boolean;

  content!: String;

  created() {
    this.content =
      this.value !== undefined || this.value !== null
        ? this.value.toString()
        : "";
  }

  get filteredListeners() {
    return omit(this.$listeners, ["input"]);
  }

  @Watch("value")
  valueChanged(newValue: string) {
    this.content = newValue.toString();
  }

  handleInput(event: { target: HTMLInputElement }) { 
    this.update(this.type ==='number' ?  Number(event.target.value) : event.target.value);
  }

  increment() {
    this.update(Number(this.content) + 1);
  }

  decrement() {
    this.update(Number(this.content) - 1);
  }

  mouseWheel(event: WheelEvent) {
    if (this.type === "number") {
      if (event.deltaY > 0) this.decrement();
      else this.increment();

      event.preventDefault();
    }
  }

  update(value) {
    this.$emit("input", value);

  }
}
</script>

<style lang="less">
@import "./../styles/Imports";

.s-form-field {
  .s-form-field__input {
    border: 1px solid @light-4;
  }

  input {
    height: 40px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
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
      .fa {
        position: relative;
        font-size: 9px;
      }
      &:active {
        color: black;
      }
      &.arrow-up {
        .absolute(6px, 3px, auto, auto);
      }
      &.arrow-down {
        .absolute(24px, 3px, auto, auto);
      }
    }
  }
}

.s-form-field__input--error {
  border-color: @red;
}

.s-form-field__label {
  position: absolute;
  color: @dark-5;
  left: 8px;
  top: 12px;
  .radius();
}

.s-form-field__label--error,
.s-form-field__error-text {
  color: @red;
}

.s-form-field__error-text,
.s-form-field__help-text {
  .small-type();
  .margin-bottom(0);
  .margin-top();
}

.s-form-field--with-label {
  position: relative;

  label {
    order: -1;
    transition: all 0.275s ease-in-out;
    transform: translateY(0px);
    pointer-events: none;
    background-color: @white;
    padding: 0 4px;
    line-height: 130%;
  }

  input:focus + label,
  .s-form-field__label--top {
    transform: translateY(-20px);
    font-size: 12px;
  }

  input:focus + label {
    color: @day-title;
  }

  input:focus + .s-form-field__label--error {
    color: green;
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
  .s-form-field--with-label {
    position: relative;

    input:focus + label {
      color: @night-title;
    }
  }

  .s-form-field__input--error {
    border-color: @red;

    &:focus,
    &:active {
      border-color: @red;
    }

    &:focus + .s-form-field__label {
      color: @red;
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
}
</style>
