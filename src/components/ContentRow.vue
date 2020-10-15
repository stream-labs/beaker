<template>
  <div
    class="s-content-row"
    :class="contentRowMq"
  >
    <div
      class="s-content-box"
      :class="contentBoxMq"
    >
      <i
        class="s-banner__icon"
        :class="`icon-${icon}`"
        v-if="icon"
      />
      <h2
        class="s-content__title"
        :class="contentTitleMq"
      >
        <slot name="title" />
      </h2>
      <p
        class="s-content__text"
        :class="contentTextMq"
      >
        <slot name="text" />
      </p>
    </div>
    <div class="s-button-container">
      <Button
        :size="'fixed-width'"
        :variation="btnVariation"
        :title="btnTitle"
        :on-click="'buttonClick'"
        :href="buttonHref"
        :to="buttonTo"
        :tag="buttonTag"
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
    icon: {
      type: String,
    },

    btnVariation: {
      type: String,
      default: 'default',
    },

    btnTitle: {
      type: String,
      default: 'Default',
    },

    buttonHref: {
      type: String,
    },

    buttonTo: {
      type: String,
    },

    buttonTag: {
      type: String,
      default: 'button',
    },
  },

  setup() {
    let $mq: any;

    const contentRowMq = computed(() => ($mq === 'sm' ? 's-content-row-mq' : ''));
    const contentBoxMq = computed(() => ($mq === 'sm' ? 's-content-box-mq' : ''));
    const bannerIconMq = computed(() => ($mq === 'sm' ? 's-banner__icon-mq' : ''));
    const contentTitleMq = computed(() => ($mq === 'sm' ? 's-content__title-mq' : ''));
    const contentTextMq = computed(() => ($mq === 'sm' ? 's-content__text-mq' : ''));

    return {
      contentRowMq,
      contentBoxMq,
      bannerIconMq,
      contentTitleMq,
      contentTextMq,
    };
  },

});
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

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
