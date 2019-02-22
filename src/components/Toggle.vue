<template>
  <div class="toggle">
    <button
      type="button"
      v-for="(val, key) in values"
      :key="val.id"
      :title="key | capitalize"
      @click="$emit('update:selected', key)"
      :class="['toggle__option', { 'toggle__option--active': selected === key }]"
      v-html="val"
    >{{ val }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  filters: {
    capitalize(value: string) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
})
export default class Toggle extends Vue {
  @Prop()
  values!: object

  @Prop()
  selected!: string

  @Prop()
  default!: string

  created() {
    this.$emit('update:selected', this.default)
  }
}
</script>

<style lang="less" scoped>
@import './../styles/Imports';

.toggle {
  display: inline-flex;
  .radius();
  .transition();
  overflow: hidden;
  .weight(@medium);

  &__option {
    .padding();
    border: none;
    background-color: @day-section;
    color: @icon;
    .transition();
    outline: none;

    &--active {
      background-color: @dark-2;
      color: @white;
    }
  }
}

.night,
.night-theme {
  .toggle {
    &__option {
      background-color: @dark-4;

      &--active {
        background-color: @dark-2;
      }
    }
  }
}
</style>
