<template>
  <div class="footer-cta">
    <div class="footer-cta__container">
      <div class="footer-cta__inner">
        <Badge
          variant="prime"
          :align-left="true"
          background-color="#8F6F3F"
          text-color="#fff"
          class="footer-cta__badge"
        />
        <p class="footer-cta__copy">
          Themes, apps, website, merch and more. All included with Prime.
        </p>
        <a class="footer-cta__button" @click="$emit('onClick')">Learn more</a>
      </div>
      <i
        v-show="closeable"
        class="icon-close footer-cta__close-icon"
        @click="$emit('onClose')"
      ></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Badge from "./../components/Badge.vue";

@Component({
  components: { Badge }
})
export default class PrimeFooterCallToAction extends Vue {
  @Prop({ default: true })
  closeable!: boolean;
}
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.footer-cta {
  background: @prime;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 900;

  &__container {
    position: relative;
  }

  &__inner {
    display: grid;
    grid-template-columns: auto;
    grid-row-gap: 12px;
    .padding(3);

    @media screen and (min-width: 768px) {
      padding: 12px 0;
      display: grid;
      grid-template-columns: repeat(3, auto);
      justify-content: center;
      align-items: center;
      grid-column-gap: 12px;
    }
  }

  &__badge {
    width: fit-content;
  }

  &__copy {
    .margin-bottom(0);
    color: #000;
    font-weight: 500;
    line-height: 16px;
  }

  &__button {
    background: rgba(9, 22, 29, 0.08);
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    .padding();
    cursor: pointer;
    text-decoration: none;
    .btn-variant(rgba(9, 22, 29, 0.08), @dark-2);
  }

  &__close-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    opacity: 0.6;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    @media screen and (min-width: 768px) {
      top: 22px;
    }
  }
}

.night {
  .footer-cta {
    &__copy,
    &__button,
    &__close-icon {
      color: #000;
    }

    &__button {
      .night-btn-variant(rgba(9, 22, 29, 0.08));
    }

    .icon-prime {
      &::before {
        color: @white;
      }
    }
  }
}
</style>
