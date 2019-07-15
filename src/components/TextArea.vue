<template>
  <div class="s-form-area" :class="{ 's-form-area--with-label': label }">
    <div class="s-form-area__container">
      <p v-if="maxLength" class="s-form-area__characters">
        {{ currentLength }}/{{ maxLength }}
      </p>
      <textarea
        :class="{
          's-form-area__input': true,
          's-form-area__input--error': !!error,
          's-form-area__input--count': !!maxLength
        }"
        ref="textArea"
        :name="name"
        :cols="cols"
        :rows="rows"
        :placeholder="placeholder"
        :maxlength="maxLength"
        :value="value"
        @input="onValueChange"
        @focus="onFocus"
        @click="onClick"
        @keyup="onKeyUp"
        v-on="filteredListeners"
      />
      <label
        :class="{
          's-form-area__label--top': value !== '',
          's-form-area__label--error': !!error
        }"
        class="s-form-area__label"
        v-if="label"
        >{{ label }}</label
      >
    </div>

    <transition name="fadeX-from-left">
      <p v-show="error" class="s-form-area__error-text">{{ error }}</p>
    </transition>

    <p v-show="helpText" class="s-form-area__help-text">{{ helpText }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { omit } from "lodash";

@Component({})
export default class TextArea extends Vue {
  $refs!: {
    textArea: HTMLTextAreaElement;
  };

  @Prop()
  name!: string;

  @Prop()
  label!: string;

  @Prop()
  placeholder!: string;

  @Prop()
  value!: string;

  @Prop()
  error!: string;

  @Prop()
  helpText!: string;

  @Prop({ default: 100 })
  cols!: number;

  @Prop({ default: 3 })
  rows!: number;

  @Prop()
  maxLength!: number;

  @Prop()
  autoResize!: boolean;

  @Prop()
  maxHeight!: number;

  private localValue: string = "";

  created() {
    this.$parent.$on("update", this.updateValue);
  }

  mounted() {
    this.updateSize();
  }

  focus() {
    this.$refs.textArea.focus();
  }

  get filteredListeners() {
    return omit(this.$listeners, ["input"]);
  }

  get currentLength() {
    return this.value.length;
  }

  onValueChange(event: { target: HTMLTextAreaElement }) {
    this.$emit("input", event.target.value);
    this.updateSize();
  }

  onKeyUp(event: { target: HTMLTextAreaElement }) {
    this.$emit("keyup", event.target.selectionStart);
  }
  onFocus(event: { target: HTMLTextAreaElement }) {
    this.$emit("focus", event.target.selectionStart);
  }
  onClick(event: { target: HTMLTextAreaElement }) {
    this.$emit("click", event.target.selectionStart);
  }

  updateValue(val) {
    this.$refs.textArea.value = val;
  }

  updateSize() {
    if (this.autoResize) {
      this.$refs.textArea.style.cssText = "height:auto;";
      const newHeight =
        this.$refs.textArea.scrollHeight > this.maxHeight && this.maxHeight
          ? this.maxHeight + 2
          : this.$refs.textArea.scrollHeight + 2;
      this.$refs.textArea.style.cssText = "height:" + newHeight + "px";
    }
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";

.s-form-area {
  .s-form-area__container {
    position: relative;
  }

  .s-form-area__input {
    .area-padding();
    resize: vertical;
  }

  .s-form-area__input::-webkit-scrollbar-corner {
    background-color: rgba(0, 0, 0, 0.04);
    background-image: none;
  }

  .s-form-area__input::-webkit-scrollbar {
    width: 1em;
    background-color: rgba(0, 0, 0, 0.04);
  }

  .s-form-area__input::-webkit-scrollbar {
    width: 16px;
    height: 9px;
  }

  .s-form-area__input::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-border-radius: 10px;
    height: 10px;
    background-color: @dark-5;
    border: 4px solid rgba(0, 0, 0, 0.04);
    background-clip: padding-box;
    -webkit-box-shadow: inset -1px -1px 0px @dark-5, inset 1px 1px 0px @dark-5;
    box-shadow: inset -1px -1px 0px @dark-5, inset 1px 1px 0px @dark-5;
  }
}

.s-form-area__characters {
  .absolute(auto, 20px, 15px, auto);
  margin: 0;
}
.s-form-area__input--error {
  border-color: @red;
}

.s-form-area__input--count {
  .padding-bottom(4) !important;
}

.s-form-area__label {
  position: absolute;
  color: @dark-5;
  left: 8px;
  top: 12px;
  .radius();
}

.s-form-area__label--error,
.s-form-area__error-text {
  color: @red;
}

.s-form-area__error-text,
.s-form-area__help-text {
  .small-type();
  .margin-bottom(0);
  .margin-top();
}

.s-form-area--with-label {
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

  .s-form-area__input:focus::-webkit-input-placeholder {
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: @light-5;
  }
  .s-form-area__input:focus:-moz-placeholder {
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: @light-5;
  } /* FF 4-18 */
  .s-form-area__input:focus::-moz-placeholder {
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: @light-5;
  } /* FF 19+ */
  .s-form-area__input:focus:-ms-input-placeholder {
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: @light-5;
  } /* IE 10+ */

  .s-form-area__input:focus + label,
  .s-form-area__label--top {
    transform: translateY(-20px);
    font-size: 12px;
  }

  .s-form-area__input:focus + label {
    color: @day-title;
  }

  .s-form-area__input:focus + .s-form-area__label--error {
    color: green;
  }

  .s-form-area--top {
    color: @day-paragraph;
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: transparent;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: transparent;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: transparent;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: transparent;
  }
}

.night,
.night-theme {
  .s-form-area--with-label {
    position: relative;

    .s-form-area__input:focus + label {
      color: @night-title;
    }
  }

  .s-form-area__input--error {
    border-color: @red;

    &:focus,
    &:active {
      border-color: @red;
    }

    &:focus + .s-form-area__label {
      color: @red;
    }
  }

  .s-form-area__label {
    background-color: @night-bg;
    color: @night-paragraph;
  }

  .s-form-area__label--error,
  .s-form-area__error-text {
    color: @red;
  }

  .s-arrow--disabled {
    color: @dark-4;
  }
}
</style>
