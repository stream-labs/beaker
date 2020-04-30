<template>
  <div class="s-modal-prime-intro">
    <img
      class="modal-prime-intro__bg modal-prime-intro__bg--components"
      src="https://cdn.streamlabs.com/static/imgs/prime/prime-intro-modal-bg-components.png"
    />
    <img
      class="modal-prime-intro__bg modal-prime-intro__bg--star"
      src="https://cdn.streamlabs.com/static/imgs/prime/prime-intro-modal-bg-star.png"
    />
    <div class="modal-prime-intro">
      <div class="modal-prime-intro__heading">
        Join Prime
        <br />

        <slot v-if="hasTitleSlot" name="title"></slot>
        <span v-else>to publish your website!</span>

        <div class="modal-prime-intro__heading--subtitle">
          <slot v-if="hasSubtitleSlot" name="subtitle"></slot>
          <span v-else>You will get your domain along with</span>
        </div>
      </div>
      <div class="modal-prime-intro__list">
        <div class="modal-prime-intro__list__item">
          <i class="icon-themes" /> Overlay, widget & site themes
        </div>
        <div class="modal-prime-intro__list__item">
          <i class="icon-store" /> FREE apps
        </div>
        <div class="modal-prime-intro__list__item">
          <i class="icon-upperwear" /> Custom merch store
        </div>
        <div class="modal-prime-intro__list__item">
          <i class="icon-loyalty" /> Gold status + FREE t-shirt
        </div>
        <div class="modal-prime-intro__list__item">
          <i class="icon-phone" /> Stream on mobile
        </div>
        <span>...only from $12/month</span>
      </div>
      <div class="modal-prime-intro__button">
        <s-button
          size="large"
          variation="prime-white"
          :title="primeButtonText"
          @click="onPrimeButtonHandler"
        ></s-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "./../components/Button.vue";

@Component({
  components: {
    "s-button": Button
  }
})
export default class PrimeIntro extends Vue {
  @Prop({ default: "Join Prime" })
  primeButtonText!: string;

  isUserAgentEdge: boolean = false;

  onPrimeButtonHandler() {
    this.$emit("onClickPrime");
  }

  get hasTitleSlot() {
    return !(typeof this.$slots.title === "undefined");
  }

  get hasSubtitleSlot() {
    return !(typeof this.$slots.subtitle === "undefined");
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";
@import "./../styles/components/Modals";

.s-modal-prime-intro {
  background-color: @prime;
  .padding-h-sides(10);
  .padding-v-sides(8);
  .radius();
  position: relative;
  color: @dark-2;
}

.modal-prime-intro {
  position: relative;
  z-index: 1;
  &__bg {
    position: absolute;
    z-index: 0;

    &--star {
      width: 470px;
      top: 17px;
      left: 0;
    }

    &--components {
      width: 386px;
      bottom: 0;
      right: 0;

      @media (max-width: 680px) {
        width: 30%;
        bottom: 20%;
      }
    }
  }
  &__heading {
    font-size: 48px;
    font-weight: 800;
    line-height: 58px;
    .margin-bottom(3);

    &--subtitle {
      .margin-top(5);
      font-weight: bold;
      font-size: 20px;
    }
  }

  &__list {
    font-size: 12px;
    &__item {
      font-weight: 500;
      font-size: 20px;
      line-height: 23px;
      .margin-bottom(1.5);

      i {
        .margin-right(2);
      }
    }
  }

  &__button {
    .margin-top(5);
  }
}
</style>
