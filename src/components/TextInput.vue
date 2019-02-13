<template>
  <div class="text-input-wrapper" :class="{ 'text-input-wrapper--with-label': label }">
    <input
      class="text-input"
      :type="type"
      :placeholder="placeholder"
      v-model="value"
      @input="emitInput($event.target.value)"
      :name="name"
      :disabled="disabled"
    />
    <label :class="{ 'text-input-label--top': value !== '' }" class="text-input-label" v-if="label">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

// text, password, email

@Component({})
export default class TextInput extends Vue {
  @Prop() name!: String;

  @Prop() value!: String;

  @Prop() type!: String;

  @Prop() placeholder!: String;

  @Prop() disabled!: Boolean;

  @Prop() label!: String;


  emitInput() {
    this.$emit("input");
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #91979A;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #91979A;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #91979A;
}
:-moz-placeholder { /* Firefox 18- */
  color: #91979A;
}

.text-input-label {
  position: absolute;
  color: #91979A;
  left: 8px;
  top: 12px;
}

.text-input-wrapper--with-label {
  position: relative;

  label {
    order: -1;
    transition: all 0.3s ease-in;
    transform: translateY(0px);
    pointer-events: none;
    background-color: @white;
    padding: 0 4px;
  }

  input:focus + label,
  .text-input-label--top {
    transform: translateY(-20px);
    font-size: 12px;
  }

  input:focus + label {
    color: @teal;
  }

  .text-input-label--top {
    color: @day-paragraph;
  }

  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: transparent;
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: transparent;
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: transparent;
  }
  :-moz-placeholder { /* Firefox 18- */
    color: transparent;
  }
}
</style>
