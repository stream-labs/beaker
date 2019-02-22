<template>
  <div class="radio checkbox">
    <input
      type="radio"
      :name="name"
      :checked="value"
      :ref="label"
      @change="$emit('input', $event.target.checked)"
    >
    <label @click="onLabelClick()">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class Radio extends Vue {
  @Prop()
  label!: String

  @Prop()
  name!: String

  @Prop()
  value!: Boolean

  onLabelClick(): void {
    let input: any = this.$refs[`${this.label}`]
    input.checked = true
  }
}
</script>

<style lang="less" scoped>
@import './../styles/Imports';
</style>
