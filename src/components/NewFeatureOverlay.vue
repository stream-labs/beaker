<template>
  <modal
    name="new-feature"
    :adaptive="true"
    :width="width"
    :height="height"
    classes="s-overlay__wrapper"
    :click-to-close="true"
    @opened="opened"
  >
    <template #top-right>
      <div class="s-overlay__icon">
        <span
          class="s-icon icon-close"
          @click="onDismiss"
        />
      </div>
    </template>
    <div
      class="s-overlay__container"
      :class="containerMq"
    >
      <div class="s-overlay__body">
        <p class="s-overlay__label">
          {{ label }}
        </p>
        <h1 class="s-overlay__title">
          {{ title }}
        </h1>
        <p class="s-overlay__text">
          <slot />
        </p>
        <div class="s-overlay-links">
          <Button
            :size="'large'"
            :variation="'action'"
            :tag="buttonTag"
            :to="buttonRoute"
            :href="buttonHref"
            :target="buttonTarget"
            :title="buttonTitle"
            @click="onPrimaryAction"
          />
          <router-link
            class="s-overlay__link"
            :to="dismissRoute"
            @click="onDismiss"
          >
            {{ dismissText }}
          </router-link>
        </div>
      </div>

      <div
        class="s-overlay__image-block"
        :class="overlayImageBlockMq"
      >
        <img
          v-if="isImage"
          :src="overlayImage"
          class="s-overlay__image"
        >
        <video
          v-if="!isImage"
          :controls="videoControls"
          autoplay
          loop
          class="s-overlay__image"
        >
          <source :src="overlayImage">
          Environment does not support video playback
        </video>
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import {
  computed, defineComponent, onMounted, ref,
} from 'vue';
// import VueMq from 'vue-mq';
// import VModal from 'vue-js-modal';
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
    width: {
      type: String || Number,
      default: '100%',
    },

    height: {
      type: String || Number,
      default: 'auto',
    },

    label: {
      type: String,
    },

    title: {
      type: String,
    },

    media: {
      type: String,
      default: 'example-file-name.png',
    },

    buttonTitle: {
      type: String,
    },

    buttonRoute: {
      type: String,
      default: '/',
    },

    buttonTag: {
      type: String,
      default: 'router-link',
    },

    buttonHref: {
      type: String,
    },

    buttonTarget: {
      type: String,
    },

    dismissRoute: {
      type: String,
      default: '/',
    },

    dismissText: {
      type: String,
      default: 'Go to Dashboard',
    },

    onOpen: {
      type: Function,
    },

    onAction: {
      type: Function,
    },

    videoControls: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const isImage = ref(true);
    const $mq = ref<string | string[]>('');

    function opened() {
      if (typeof props.onOpen === 'function') props.onOpen();
    }

    // Need to make custom vue 3 modal component.
    function onDismiss() {
      // this.$modal.hide('new-feature');
    }

    function onPrimaryAction() {
      if (typeof props.onAction === 'function') props.onAction();
      onDismiss();
    }

    const overlayImage = computed(() => props.media);
    const containerMq = computed(() => ($mq.value === 'sm' ? 's-overlay__container--mq' : ''));
    const overlayImageBlockMq = computed(() => ($mq.value === 'sm' ? 's-overlay__image-block--mq' : ''));

    onMounted(() => {
      if (props.media.includes('mp4') || props.media.includes('webm')) {
        isImage.value = false;
      } else {
        isImage.value = true;
      }
    });

    return {
      opened,
      onPrimaryAction,
      overlayImage,
      containerMq,
      overlayImageBlockMq,
    };
  },

});
</script>

<style lang="less" scoped>
@import (reference) "./../styles/Imports";
.s-overlay__container--mq {
  display: block !important;
}

.s-overlay__image-block--mq {
  width: 100% !important;
  height: auto;
}

.v--modal-overlay {
  background: @day-new-feature-overlay !important;
}

.s-overlay__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}

.s-overlay__icon {
  .padding(4);
}

.s-icon {
  cursor: pointer;
}

.s-overlay__container {
  width: 80%;
  max-width: 1400px;
  height: auto;
  margin: 0 auto;
  display: flex;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
}

.s-overlay__body {
  flex-basis: 50%;
  text-align: left;
}

.s-overlay__label {
  font-size: 16px;
  .weight(@medium);
  color: @dark-2;
}

.s-overlay__title {
  font-size: 36px;
  font-weight: 900;
}

.s-overlay__text {
  line-height: 21px;
  .margin-bottom(3);
  font-size: 16px;
}

.s-overlay-links {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .margin-top(4);
}

.s-overlay__link {
  .margin-left(2);
}

.s-overlay__image-block {
  text-align: center;
  justify-self: center;
  .margin-top(2);
  overflow: hidden;
}

.s-overlay__image {
  max-width: 100%;
  width: auto;
  .radius(2);
}

.night,
.night-theme {
  .v--modal-overlay {
    background: @night-new-feature-overlay !important;
  }

  .s-overlay__label {
    color: @white;
  }
}
</style>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-overlay__text {
  line-height: 21px;
  .margin-bottom(3);
  font-size: 16px;

  p,
  * {
    font-size: 16px;
    line-height: 21px;
    .margin-bottom(2);
  }
}
</style>
