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
        Join
        <span class="modal-prime-intro__heading--bold">Prime</span>
        <br />

        <slot v-if="hasSlot"></slot>
        <div v-else>
          <span>to customize your tip page!</span>

          <div class="modal-prime-intro__heading--subtitle">
            <slot v-if="hasSubtitleSlot" name="subtitle"></slot>
          </div>
        </div>
      </div>
      <ul class="modal-prime-intro__list">
        <li class="modal-prime-intro__list__item">
          <i class="icon-themes" /> Overlay, widget & tip page themes
        </li>
        <li class="modal-prime-intro__list__item">
          <i class="icon-store" /> FREE apps
        </li>
        <li class="modal-prime-intro__list__item">
          <i class="icon-upperwear" /> Custom merch store
        </li>
        <li class="modal-prime-intro__list__item">
          <i class="icon-loyalty" /> Gold status + FREE t-shirt
        </li>
        <li class="modal-prime-intro__list__item">
          <i class="icon-phone-case" /> Stream on mobile
        </li>
      </ul>
      <span class="modal-prime-intro__price">...only from $12/month</span>
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

  onPrimeButtonHandler() {
    this.$emit("onClickPrime");
  }

  get hasTitleSlot() {
    return !(typeof this.$slots.title === "undefined");
  }

  get hasSubtitleSlot() {
    return !(typeof this.$slots.subtitle === "undefined");
  }

  get hasSlot() {
    return !(typeof this.$slots.default === "undefined");
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

  @media (max-width: 680px) {
    .padding-h-sides(2);
  }
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
      bottom: 27px;
      right: 0;

      @media (max-width: 680px) {
        display: none;
      }
    }
  }
  &__heading {
    font-size: 48px;
    font-weight: 800;
    .margin-bottom(2.5);
    line-height: normal;

    &--subtitle {
      .margin-top(5);
      font-weight: bold;
      font-size: 20px;
    }

    &--bold {
      font-family: "Barlow";
      font-weight: 900;
    }
  }

  &__list {
    list-style: none;
    margin-block-start: 0;
    padding-inline-start: 0;

    &__item {
      font-weight: 500;
      font-size: 20px;
      .margin-bottom(1.5);
      color: @dark-6;
      .flex();
      align-items: center;
      line-height: normal;

      i {
        .margin-right(2);
      }
    }
  }

  &__price {
    font-size: 12px;
    font-weight: 500;
  }

  &__button {
    .margin-top(5);
  }
}

.s-button {
  width: 176px;
  @media (max-width: 680px) {
    width: 100%;
  }
}
</style>
