<template>
  <modal
    name="new-feature"
    :adaptive="true"
    :width="'100%'"
    :height="'auto'"
    classes="s-overlay__wrapper"
    :clickToClose="false"
  >
    <div slot="top-right" class="s-overlay__icon">
      <span class="s-icon s-icon-close" @click="$modal.hide('new-feature')"></span>
    </div>
    <div class="s-overlay__container" :class="containerMq">
      <div class="s-overlay__body">
        <p class="s-overlay__label">{{label}}</p>
        <h1 class="s-overlay__title">{{title}}</h1>
        <p class="s-overlay__text">
          <slot></slot>
        </p>
        <div class="s-overlay-links">
          <Button
            :type="'button'"
            :size="'large'"
            :variation="'action'"
            :tag="'router-link'"
            :to="buttonRoute"
            :title="buttonTitle"
          ></Button>
          <a class="s-overlay__link" href="/">Go to Dashboard</a>
        </div>
      </div>

      <div class="s-overlay__imageBlock" :class="overlay__imageBlockMq">
        <img v-if="isImage" :src="overlayImage" class="s-overlay__image">
        <video controls="false" autoplay loop v-if="!isImage" class="s-overlay__image">
          <source :src="overlayImage">Environment does not support video playback
        </video>
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "./../components/Button.vue";
import VueMq from "vue-mq";
import VModal from "vue-js-modal";

Vue.use(VModal);

Vue.use(VueMq, {
  breakpoints: {
    // default breakpoints - customize this
    sm: 0,
    md: 768,
    lg: Infinity
  },
  defaultBreakpoint: "md" // customize this for SSR
});

@Component({
  components: {
    Button
  }
})
export default class NewFeatureOverlay extends Vue {
  @Prop()
  label!: string;

  @Prop()
  title!: string;

  @Prop()
  media!: string;

  @Prop()
  buttonTitle!: string;

  @Prop({ default: "/" })
  buttonRoute!: string;

  isImage: boolean = true;

  get overlayImage() {
    return this.media;
  }

  $mq!: string | string[];

  get containerMq() {
    return this.$mq === "md" ? "s-overlay__container--mq" : "";
  }

  get overlay__imageBlockMq() {
    return this.$mq === "md" ? "s-overlay__imageBlock--mq" : "";
  }

  mounted() {
    if (this.media.includes("mp4") || this.media.includes("webm")) {
      this.isImage = false;
    } else {
      this.isImage = true;
    }
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";
::-webkit-media-controls {
  display: none !important;
}

.s-overlay__container--mq {
  display: block !important;
}

.s-overlay__imageBlock--mq {
  width: 100% !important;
  height: auto;
}

.v--modal-overlay {
  background: @day-overlay;
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
  .max-width();
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

.s-overlay__imageBlock {
  text-align: center;
  justify-self: center;
  .margin-top(2);
  .radius(2);
  overflow: hidden;
}

.s-overlay__image {
  max-width: 100%;
  width: auto;
}

.night,
.night-theme {
  .v--modal-overlay {
    background: @night-overlay;
  }

  .s-overlay__label {
    color: @white;
  }
}
</style>
