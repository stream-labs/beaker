<template>
  <div>
    <div class="s-onboarding-main">
      <div class="s-bullets">
        <span v-for="(key,index) in 5" :key="index"></span>
      </div>
      <div class="s-body">
        <slot :name="current"></slot>
      </div>
    </div>
    <div class="s-onboarding-footer">
      <p @click="nextStep">Skip</p>
      <Button :variation="'default'" :title="'Continue'" @click="nextStep"></Button>
    </div>
  </div>
  <!-- <modal
    name="new-feature"
    :adaptive="true"
    :width="'100%'"
    :height="'auto'"
    classes="s-overlay__wrapper"
    :clickToClose="true"
    @opened="opened"
  >
    <div slot="top-right" class="s-overlay__icon">
      <span class="s-icon icon-close" @click="onDismiss"></span>
    </div>
    <div class="s-overlay__container" :class="containerMq">
      <div class="s-overlay__body">
        <p class="s-overlay__label">{{ label }}</p>
        <h1 class="s-overlay__title">{{ title }}</h1>
        <p class="s-overlay__text">
          <slot></slot>
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
            @click.native="onPrimaryAction"
          ></Button>
          <router-link
            class="s-overlay__link"
            :to="dismissRoute"
            @click.native="onDismiss"
          >{{ dismissText }}</router-link>
        </div>
      </div>

      <div class="s-overlay__image-block" :class="overlay__imageBlockMq">
        <img v-if="isImage" :src="overlayImage" class="s-overlay__image">
        <video controls="false" autoplay loop v-if="!isImage" class="s-overlay__image">
          <source :src="overlayImage">Environment does not support video playback
        </video>
      </div>
    </div>
  </modal>-->
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import OnboardingStep from "./../components/OnboardingStep.vue";
import Button from "./../components/Button.vue";
// import VueMq from "vue-mq";
// import VModal from "vue-js-modal";

// Vue.use(VModal);

// Vue.use(VueMq, {
//   breakpoints: {
//     // default breakpoints - customize this
//     sm: 900,
//     md: 1250,
//     lg: Infinity
//   },
//   defaultBreakpoint: "sm" // customize this for SSR
// });

@Component({
  components: {
    OnboardingStep,
    Button
  }
})
export default class Onboarding extends Vue {
  @Prop()
  steps!: number;

  current: number = 1;

  nextStep() {
    if (this.current < this.steps - 1) {
      this.current = this.current + 1;
    } else {
      return;
    }
  }

  //   @Prop()
  //   label!: string;
  //   @Prop()
  //   title!: string;
  //   @Prop()
  //   media!: string;
  //   @Prop()
  //   buttonTitle!: string;
  //   @Prop({ default: "/" })
  //   buttonRoute!: string;
  //   @Prop({ default: "router-link" })
  //   buttonTag!: String;
  //   @Prop()
  //   buttonHref!: String;
  //   @Prop()
  //   buttonTarget!: String;
  //   @Prop({ default: "/" })
  //   dismissRoute!: string;
  //   @Prop({ default: "Go to Dashboard" })
  //   dismissText!: string;
  //   @Prop()
  //   onOpen!: Function;
  //   @Prop()
  //   onAction!: Function;
  //   isImage: boolean = true;
  //   get overlayImage() {
  //     return this.media;
  //   }
  //   $mq!: string | string[];
  //   get containerMq() {
  //     return this.$mq === "sm" ? "s-overlay__container--mq" : "";
  //   }
  //   get overlay__imageBlockMq() {
  //     return this.$mq === "sm" ? "s-overlay__image-block--mq" : "";
  //   }
  //   mounted() {
  //     if (this.media.includes("mp4") || this.media.includes("webm")) {
  //       this.isImage = false;
  //     } else {
  //       this.isImage = true;
  //     }
  //   }
  //   opened(event) {
  //     typeof this.onOpen === "function" && this.onOpen();
  //   }
  //   onPrimaryAction() {
  //     typeof this.onAction === "function" && this.onAction();
  //     this.onDismiss();
  //   }
  //   onDismiss() {
  //     this.$modal.hide("new-feature");
  //   }
  // }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.s-onboarding-main {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.s-bullets {
  display: flex;
  flex-direction: column;
  background: #fff;
  position: relative;
  .margin-right(6);
  span {
    display: inline-block;
    width: 24px;
    height: 24px;
    background: @dark-2;
    border-radius: 50%;
    .margin-bottom(4);
  }
  span:first-child {
    background: @red;
  }
}

.s-bullets::before {
  content: "";
  width: 2px;
  height: 260px;
  background: @dark-2;
  position: absolute;
  left: 11px;
}

.s-onboarding-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  p {
    .margin(0);
    .margin-right(2);
    text-decoration: underline;
  }
}
</style>
