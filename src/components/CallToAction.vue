<template>
  <div class="s-call-to-action" :class="callToActionMq" :style="callToActionBg">
    <div class="s-call-to-action__thumb" :class="callToActionThumbMq" :style="callToActionThumb">
      <img :src="thumbnail">
    </div>
    <div class="s-call-to-action__description" :class="callToActionDescMq">
      <div class="s-title" :class="titleMq" :style="callToActiontitleColor">{{ title }}</div>
      <div class="s-subtitle" :style="callToActionSubTitleColor">{{ description }}</div>
    </div>
    <div class="s-button-container s-button-container--right">
      <Button
        v-if="buttonClick"
        :variation="buttonVariation"
        :size="'large'"
        :title="buttonTitle"
        :description="buttonDescription"
        :href="buttonHref"
        :to="buttonTo"
        :tag="buttonTag"
        :bgColor="buttonBg"
        :textColor="buttonTextColor"
        @click="buttonClick"
      ></Button>

      <Button
        v-else
        :variation="buttonVariation"
        :size="'large'"
        :title="buttonTitle"
        :description="buttonDescription"
        :href="buttonHref"
        :to="buttonTo"
        :tag="buttonTag"
        :bgColor="buttonBg"
        :textColor="buttonTextColor"
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
export default class CallToAction extends Vue {
  @Prop()
  bgColor!: String;

  @Prop()
  titleColor!: String;

  @Prop()
  subTitleColor!: String;

  @Prop({ default: "https://cdn.streamlabs.com/static/kevin-standard.svg" })
  thumbnail!: String;

  @Prop({ default: 80 })
  thumbnailWidth!: number | string;

  @Prop({ default: 80 })
  thumbnailHeight!: number | string;

  @Prop()
  thumbnailBg!: String;

  @Prop({ default: "Get started by downloading Streamlabs OBS" })
  title!: String;

  @Prop({
    default:
      "Over 800k creators use Streamlabs OBS daily, delivering entertainment."
  })
  description!: String;

  @Prop({ default: "slobs-download" })
  buttonVariation!: String;

  @Prop({ default: "Download Streamlabs OBS" })
  buttonTitle!: String;

  @Prop({ default: "Windows 7+ 245.8MB" })
  buttonDescription!: String;

  @Prop()
  buttonHref!: String;

  @Prop()
  buttonTo!: String;

  @Prop()
  buttonTag!: String;

  @Prop()
  buttonClick!: Function;

  @Prop()
  buttonBg!: String;

  @Prop()
  buttonTextColor!: String;

  $mq: any;

  callToActiontitleColor: object = {
    color: this.titleColor
  };

  callToActionSubTitleColor: object = {
    color: this.subTitleColor
  };

  callToActionBg: object = {
    backgroundColor: this.bgColor
  };

  callToActionThumb: object = {
    width: `${this.thumbnailWidth}px`,
    height: `${this.thumbnailHeight}px`,
    backgroundColor: this.thumbnailBg
  };

  get callToActionMq() {
    return this.$mq === "sm" ? "s-call-to-action-mq" : "";
  }

  get callToActionThumbMq() {
    return this.$mq === "sm" ? "s-call-to-action__thumb-mq" : "";
  }

  get callToActionDescMq() {
    return this.$mq === "sm" ? "s-call-to-action__description-mq" : "";
  }

  get titleMq() {
    return this.$mq === "sm" ? "s-title-mq" : "";
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";

.s-call-to-action-mq {
  flex-direction: column !important;

  .s-button {
    .margin-left(0);
  }
}

.s-call-to-action__thumb-mq {
  .margin-right(0) !important;
  .margin-bottom(3.75);
}

.s-call-to-action__description-mq {
  text-align: center;
  .margin-bottom(3.75);
}

.s-title-mq {
  .margin-bottom(0.625) !important;
}

.s-call-to-action {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: @day-section;
  .padding(3);
  .radius(2);
}

.s-call-to-action__thumb {
  display: inline-flex;
  flex-grow: 0;
  flex-shrink: 0;
  background-color: @teal;
  .radius();
  .margin-right(3);
  .padding(2);

  img {
    width: 100%;
    height: 100%;
  }
}

.s-call-to-action__description {
  display: inline-flex;
  flex-direction: column;
  flex-grow: 3;
}

.s-title {
  font-size: 20px;
  .weight(@bold);
  .margin-bottom(2);
  color: @day-title;
  line-height: 130%;
}

.s-subtitle {
  font-size: 14px;
  color: @day-paragraph;
}

.night,
.night-theme {
  .s-call-to-action {
    background-color: @night-section-alt;
  }
  .s-title {
    color: @night-title;
  }

  .s-subtitle {
    color: @night-paragraph;
  }
}
</style>
