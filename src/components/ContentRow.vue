<template>
  <div class="s-content-row">
    <div class="s-content-box">
      <div class="s-banner__icon" v-if="icon">
        <i :class="`s-icon-${icon}`"></i>
      </div>
      <h2 class="s-content__title">
        <slot name="title"></slot>
      </h2>
      <p class="s-content__text">
        <slot name="text"></slot>
      </p>
    </div>
    <div class="s-button-container s-button-container--left">
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
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "./../components/Button.vue";

@Component({
  components: {
    Button
  }
})
export default class ContentRow extends Vue {
  @Prop()
  icon!: string;

  @Prop({ default: "default" })
  btnVariation!: string;

  @Prop({ default: "Default" })
  btnTitle!: string;
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.s-content-row {
  background: @light-2;
  .radius();
  .padding-v-sides();
  .padding-h-sides(2);
  .margin-bottom(2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.s-content-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.s-banner__icon {
  .margin-right();
}

.s-content__title {
  .margin(0);
  .margin-right(3);
}

.night,
.night-theme {
  .s-content-row {
    background: @dark-4;
  }
}
</style>
