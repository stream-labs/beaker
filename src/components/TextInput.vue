<template>
  <div class="form-field" :class="{ 'form-field--with-label': label }">
    <input
      class="text-input"
      :type="type"
      :placeholder="placeholder"
      @input="handleInput"
      :name="name"
      :disabled="disabled"
      @blur="$emit('blur')"
      v-model="content"
      :class="{ 'form-field__input': true, 'form-field__input--error': !!error }"
    >
    <label
      :class="{ 'form-field__label--top': value !== '', 'form-field__label--error': !!error }"
      class="form-field__label"
      v-if="label"
    >{{ label }}</label>

    <transition name="slide">
      <p v-show="error" class="form-field__error-text">{{ error }}</p>
    </transition>

    <p v-show="helpText" class="form-field__help-text">{{ helpText }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

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

  @Prop()
  type!: {
    type: String;
    default: "text";
  };

  @Prop()
  placeholder!: String;

  @Prop()
  disabled!: Boolean;

  @Prop()
  label!: String;

  content: String = this.value;

  handleInput(e: String) {
    this.$emit("input", this.content);
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.form-field__input--error {
  border-color: @red;
}

.form-field__label {
  position: absolute;
  color: @light-5;
  left: 8px;
  top: 12px;
  .radius();
}

.form-field__error-text,
.form-field__help-text {
  .small-type();
  .margin-bottom(0);
  .margin-top();
}

.form-field--with-label {
  position: relative;

  label {
    order: -1;
    transition: all 0.275s ease-in-out;
    transform: translateY(0px);
    pointer-events: none;
    background-color: @white;
    padding: 0 4px;
  }

  input:focus + label,
  .form-field__label--top {
    transform: translateY(-20px);
    font-size: 12px;
    color: @day-paragraph;
  }

  .form-field__label--error,
  .form-field__error-text {
    color: @red;
  }

  input:focus + label {
    color: @teal;
  }

  .form-field--top {
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
  .form-field--with-label {
    position: relative;

    input:focus + label {
      color: @teal;
    }
  }

  .form-field__input--error {
    border-color: @red;

    &:focus,
    &:active {
      border-color: @red;
    }

    &:focus + .form-field__label {
      color: @red;
    }
  }

  .form-field__label {
    background-color: @night-bg;
  }

  input:focus + label,
  .form-field__label--top {
    color: @night-paragraph;
  }

  .form-field__label--error,
  .form-field__error-text {
    color: @red;
  }
}
</style>
