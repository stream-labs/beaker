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
import { computed, defineComponent } from 'vue';
import VueMq from 'vue-mq';
import Button from './Button.vue';

// Vue.use(VueMq, {
//   breakpoints: {
//     // default breakpoints - customize this
//     sm: 900,
//     md: 1250,
//     lg: Infinity,
//   },
//   defaultBreakpoint: 'sm', // customize this for SSR
// });

export default defineComponent({
  components: {
    Button,
  },

  props: {
    bgColor: {
      type: String,
    },

    titleColor: {
      type: String,
    },

    subTitleColor: {
      type: String,
    },

    thumbnail: {
      type: String,
      default: 'https://cdn.streamlabs.com/static/kevin-standard.svg',
    },

    hasThumbnail: {
      type: Boolean,
      default: true,
    },

    thumbnailWidth: {
      type: Number || String,
      default: 80,
    },

    thumbnailHeight: {
      type: Number || String,
      default: 80,
    },

    thumbnailBg: {
      type: String,
    },

    thumbnailAlt: {
      type: String,
      default: 'Get started by downloading Streamlabs OBS',
    },

    title: {
      type: String,
      default: 'Get started by downloading Streamlabs OBS',
    },

    description: {
      type: String,
      default:
        'Over 800k creators use Streamlabs OBS daily, delivering entertainment.',
    },

    buttonVariation: {
      type: String,
      default: 'slobs-download',
    },

    buttonTitle: {
      type: String,
      default: 'Download Streamlabs OBS',
    },

    buttonDescription: {
      type: String,
    },

    buttonHref: {
      type: String,
    },

    buttonTo: {
      type: String,
    },

    buttonTag: {
      type: String,
    },

    buttonClick: {
      type: Function,
    },

    buttonBg: {
      type: String,
    },

    buttonTextColor: {
      type: String,
    },

    customButtonSlot: {
      type: Boolean,
      default: false,
    },

    bgPrime: {
      type: Boolean,
      default: false,
    },

    buttonIcon: {
      type: String,
    },
  },

  setup(props) {
    let $mq: string;

    const callToActiontitleColor = {
      color: props.titleColor,
    };

    const callToActionSubTitleColor = {
      color: props.subTitleColor,
    };

    const callToActionBg = {
      backgroundColor: props.bgColor,
    };

    const callToActionThumb = {
      width: `${props.thumbnailWidth}px`,
      height: `${props.thumbnailHeight}px`,
      backgroundColor: props.thumbnailBg,
    };

    const callToActionMq = computed(() => ($mq === 'sm' ? 's-call-to-action-mq' : ''));
    const callToActionThumbMq = computed(() => ($mq === 'sm' ? 's-call-to-action__thumb-mq' : ''));
    const callToActionDescMq = computed(() => ($mq === 'sm' ? 's-call-to-action__description-mq' : ''));
    const titleMq = computed(() => ($mq === 'sm' ? 's-title-mq' : ''));

    return {
      callToActiontitleColor,
      callToActionSubTitleColor,
      callToActionBg,
      callToActionThumb,
      callToActionMq,
      callToActionThumbMq,
      callToActionDescMq,
      titleMq,
    };
  },

});
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
