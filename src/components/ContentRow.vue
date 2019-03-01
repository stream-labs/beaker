<template>
  <div class="content-row">
    <div class="content-box">
      <div class="banner__icon" v-if="icon">
        <i :class="`icon-${icon}`"></i>
      </div>
      <h2 class="content__title">
        <slot name="title"></slot>
      </h2>
      <p class="content__text">
        <slot name="text"></slot>
      </p>
    </div>
    <div class="button-container button-container--left">
      <Button
        :size="'fixed-width'"
        :variation="btnVariation"
        :title="btnTitle"
        :onClick="'buttonClick'"
      ></Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Button from './../components/Button.vue'

@Component({
  components: {
    Button,
  },
})
export default class ContentRows extends Vue {
  @Prop()
  icon!: string

  @Prop({ default: 'default' })
  btnVariation!: string

  @Prop({ default: 'Default' })
  btnTitle!: string
}
</script>

<style lang="less" scoped>
@import './../styles/Imports';

.content-row {
  background: @light-2;
  .radius();
  .padding-v-sides();
  .padding-h-sides(2);
  .margin-bottom(2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.banner__icon {
  .margin-right();
}

.content__title {
  .margin(0);
  .margin-right(3);
}

.night,
.night-theme {
  .content-row {
    background: @dark-4;
  }
}
</style>
