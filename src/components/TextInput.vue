<template>
  <input
    class="text-input"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    @input="emitInput($event.target.value)"
    :name="name"
    :disabled="disabled"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

// text, password, email

@Component({})
export default class TextInput extends Vue {
  @Prop() name!: String;

  @Prop() value!: String;

  @Prop() type!: String;

  @Prop() placeholder!: String;

  @Prop() disabled!: Boolean;
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.text-input {
  .margin-bottom(2);

  &:last-child {
    .margin-bottom(2);
  }
}
</style>
