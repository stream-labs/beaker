<template>
  <div class="checkbox">
    <input
      type="checkbox"
      :checked="value"
      :ref="label"
      @change="$emit('input', $event.target.checked)"
    >
    <label @click="onLabelClick()">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Checkbox extends Vue {
  @Prop()
  label!: String;

  @Prop()
  value!: Boolean;

  onLabelClick() {
    let input: any = this.$refs[`${this.label}`];
    input.checked = !input.checked;
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";
</style>
