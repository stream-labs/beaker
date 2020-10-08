<template>
  <div
    class="s-call-to-action"
    :class="callToActionMq"
    :style="callToActionBg"
  >
    <i
      v-if="(buttonVariation === 'prime') | (buttonVariation === 'prime-white')"
      class="icon-prime prime-bg"
    />
    <div
      v-if="hasThumbnail"
      class="s-call-to-action__thumb"
      :class="callToActionThumbMq"
      :style="callToActionThumb"
    >
      <img
        :src="thumbnail"
        :alt="thumbnailAlt"
      >
    </div>
    <div
      class="s-call-to-action__description"
      :class="callToActionDescMq"
    >
      <div
        class="s-title"
        :class="titleMq"
        :style="callToActiontitleColor"
      >
        {{ title }}
      </div>
      <div
        class="s-subtitle"
        :style="callToActionSubTitleColor"
      >
        {{ description }}
      </div>
    </div>
    <slot v-if="customButtonSlot" />
    <div
      v-else
      class="s-button-container s-button-container--right"
    >
      <Button
        v-if="buttonClick"
        :variation="buttonVariation"
        :size="'large'"
        :title="buttonTitle"
        :description="buttonDescription"
        :href="buttonHref"
        :to="buttonTo"
        :tag="buttonTag"
        :bg-color="buttonBg"
        :icon="buttonIcon"
        :text-color="buttonTextColor"
        @click="buttonClick"
      />

      <Button
        v-else
        :variation="buttonVariation"
        :size="'large'"
        :title="buttonTitle"
        :description="buttonDescription"
        :href="buttonHref"
        :to="buttonTo"
        :tag="buttonTag"
        :icon="buttonIcon"
        :bg-color="buttonBg"
        :text-color="buttonTextColor"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { defineComponent } from 'vue';
import VueMq from 'vue-mq';
import Button from './Button.vue';

Vue.use(VueMq, {
  breakpoints: {
    // default breakpoints - customize this
    sm: 900,
    md: 1250,
    lg: Infinity,
  },
  defaultBreakpoint: 'sm', // customize this for SSR
});

@Component({
  components: {
    Button,
  },
})
export default defineComponent({
  @Prop()
  bgColor!: string;

  @Prop()
  titleColor!: string;

  @Prop()
  subTitleColor!: string;

  @Prop({ default: 'https://cdn.streamlabs.com/static/kevin-standard.svg' })
  thumbnail!: string;

  @Prop({ default: true })
  hasThumbnail!: boolean;

  @Prop({ default: 80 })
  thumbnailWidth!: number | string;

  @Prop({ default: 80 })
  thumbnailHeight!: number | string;

  @Prop()
  thumbnailBg!: string;

  @Prop({ default: 'Get started by downloading Streamlabs OBS' })
  thumbnailAlt!: string;

  @Prop({ default: 'Get started by downloading Streamlabs OBS' })
  title!: string;

  @Prop({
    default:
      'Over 800k creators use Streamlabs OBS daily, delivering entertainment.',
  })
  description!: string;

  @Prop({ default: 'slobs-download' })
  buttonVariation!: string;

  @Prop({ default: 'Download Streamlabs OBS' })
  buttonTitle!: string;

  @Prop()
  buttonDescription!: string;

  @Prop()
  buttonHref!: string;

  @Prop()
  buttonTo!: string;

  @Prop()
  buttonTag!: string;

  @Prop()
  buttonClick!: Function;

  @Prop()
  buttonBg!: string;

  @Prop()
  buttonTextColor!: string;

  @Prop({ default: false })
  customButtonSlot!: boolean;

  @Prop({ default: false })
  bgPrime!: boolean;

  @Prop()
  buttonIcon!: string;

  $mq: any;

  callToActiontitleColor: object = {
    color: this.titleColor,
  };

  callToActionSubTitleColor: object = {
    color: this.subTitleColor,
  };

  callToActionBg: object = {
    backgroundColor: this.bgColor,
  };

  callToActionThumb: object = {
    width: `${this.thumbnailWidth}px`,
    height: `${this.thumbnailHeight}px`,
    backgroundColor: this.thumbnailBg,
  };

  get callToActionMq() {
    return this.$mq === 'sm' ? 's-call-to-action-mq' : '';
  }

  get callToActionThumbMq() {
    return this.$mq === 'sm' ? 's-call-to-action__thumb-mq' : '';
  }

  get callToActionDescMq() {
    return this.$mq === 'sm' ? 's-call-to-action__description-mq' : '';
  }

  get titleMq() {
    return this.$mq === 'sm' ? 's-title-mq' : '';
  }
})
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

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
  position: relative;
  overflow: hidden;

  .prime-bg {
    position: absolute;
    font-size: 144px;
    color: @white;
    left: -51px;
    bottom: -69px;
    opacity: 0.16;
  }
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
