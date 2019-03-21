<template>
  <div class="s-content-row" :class="contentRowMq">
    <div class="s-content-box" :class="contentBoxMq">
      <i class="s-banner__icon" :class="`s-icon-${icon}`" v-if="icon"></i>
      <h2 class="s-content__title" :class="contentTitleMq">
        <slot name="title"></slot>
      </h2>
      <p class="s-content__text" :class="contentTextMq">
        <slot name="text"></slot>
      </p>
    </div>
    <div class="s-button-container">
      <Button
        :size="'fixed-width'"
        :variation="btnVariation"
        :title="btnTitle"
        :onClick="'buttonClick'"
        :href="buttonHref"
        :to="buttonTo"
        :tag="buttonTag"
      ></Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "./../components/Button.vue";
import VueMq from "vue-mq";

Vue.use(VueMq, {
  breakpoints: {
    // default breakpoints - customize this
    sm: 900,
    md: 1250,
    lg: Infinity
  },
  defaultBreakpoint: "sm" // customize this for SSR
});

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

  @Prop()
  buttonHref!: String;

  @Prop()
  buttonTo!: String;

  @Prop({ default: "button" })
  buttonTag!: String;

  $mq: any;

  get contentRowMq() {
    return this.$mq === "sm" ? "s-content-row-mq" : "";
  }

  get contentBoxMq() {
    return this.$mq === "sm" ? "s-content-box-mq" : "";
  }

  get bannerIconMq() {
    return this.$mq === "sm" ? "s-banner__icon-mq" : "";
  }

  get contentTitleMq() {
    return this.$mq === "sm" ? "s-content__title-mq" : "";
  }

  get contentTextMq() {
    return this.$mq === "sm" ? "s-content__text-mq" : "";
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.s-content-row-mq {
  flex-direction: column;
  .padding(3) !important;
  .s-button {
    .margin-right(0);
  }
}

.s-content-box-mq {
  flex-direction: column;
}

.s-banner__icon-mq {
  .margin-right(0) !important;
}

.s-content__title-mq {
  .margin-right(0) !important;
  .margin-top(0.5);
}

.s-content__text-mq {
  .margin-top(2);
}

.s-content-row {
  background: @light-2;
  .radius();
  .padding(2);
  .margin-bottom(2);
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    .margin-bottom(0);
  }
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
