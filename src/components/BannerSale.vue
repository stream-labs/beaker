<template>
  <div
    class="s-banner-sale"
    :style="{
      'background-color': backgroundColor,
      'border-color': borderColor
    }"
  >
    <div class="s-banner-sale__wrapper s-header">
      <h1>{{ title }}</h1>
      <p>{{ desc }}</p>
    </div>
    <div class="s-banner-sale__wrapper s-header">
      <h1 class="s-banner-sale__time">
        <span :class="{ 's-banner-sale__time--done': daysDone }">{{
          `${days}d`
        }}</span>
        <span :class="{ 's-banner-sale__time--done': hoursDone }">{{
          `${hours}h`
        }}</span>
        <span :class="{ 's-banner-sale__time--done': minutesDone }">{{
          `${minutes}m`
        }}</span>
        <span :class="{ 's-banner-sale__time--done': secondsDone }">{{
          `${seconds}s`
        }}</span>
      </h1>
      <p>{{ timeDesc }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { defineComponent } from 'vue';

@Component({})
export default defineComponent({
  @Prop({ required: true })
  title!: string;

  @Prop({ required: true })
  desc!: string;

  @Prop({ default: '00', required: true })
  days!: string;

  @Prop({ default: '00', required: true })
  hours!: string;

  @Prop({ default: '00', required: true })
  minutes!: string;

  @Prop({ default: '00', required: true })
  seconds!: string;

  @Prop()
  timeDesc!: string;

  @Prop({ default: 'rgba(248, 86, 64, 0.33)' })
  borderColor!: string;

  @Prop({ default: 'rgba(248, 86, 64, 0.08)' })
  backgroundColor!: string;

  get daysDone() {
    return this.days === '00';
  }

  get hoursDone() {
    return this.daysDone && this.hours === '00';
  }

  get minutesDone() {
    return this.hoursDone && this.minutes === '00';
  }

  get secondsDone() {
    return this.minutesDone && this.seconds === '00';
  }
})
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-banner-sale {
  display: flex;
  justify-content: space-between;
  .margin-bottom(3);
  .padding(2);
  border-width: 1px;
  border-style: solid;
  .radius();

  h1,
  p {
    margin-bottom: 0;
  }

  p {
    .margin-top();
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__time {
    text-align: right;
    color: @warning;

    &--done {
      opacity: 0.4;
    }

    span {
      .margin-right();
      .transition();

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
