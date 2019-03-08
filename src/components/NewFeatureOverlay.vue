<template>
  <modal name="new-feature" :adaptive="true" width="100%" height="auto" classes="s-overlay-wrapper">
    <div slot="top-right" class="s-overlay-icon">
      <span class="s-icon s-icon-close" @click="$modal.hide('new-feature')"></span>
    </div>
    <div class="s-overlay-container" :class="containerMq">
      <div class="s-overlay-body">
        <p class="s-overlay__label">{{label}}</p>
        <h1 class="s-overlay__title">{{title}}</h1>
        <p class="s-overlay__text">
          <slot></slot>
        </p>
        <div class="s-overlay-links">
          <Button :type="'button'" :size="'large'" :variation="'action'" :title="'Set Up Store'"></Button>
          <p class="s-overlay__link">
            <a href="#">Go to Dashboard</a>
          </p>
        </div>
      </div>

      <div class="s-overlay-image-block">
        <img :src="overlayImage" class="s-overlay-image">
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "./../components/Button.vue";
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    sm: 0,
    md: 1134,
    lg: Infinity,
  },
  defaultBreakpoint: 'md' // customize this for SSR
})

@Component({
  components: {
    Button
  }
})
export default class ModalBasic extends Vue {
  @Prop()
  label!: string;

  @Prop()
  title!: string;

  @Prop()
  image!: string;

  get overlayImage() {
    return this.image;
  }

  $mq: string = "";

  get containerMq() {
    return this.$mq === "md" ? "s-overlay-container-mq" : "";
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.s-overlay-container-mq {
  display: block !important;
}

.v--modal-overlay {
  background: @day-overlay;
}

.s-overlay-wrapper {
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

.s-overlay-icon {
  .padding(4);
}

.s-icon {
  cursor: pointer;
}

.s-overlay-container {
  width: 80%;
  .max-width();
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.s-overlay-body {
  flex-basis: 50%;
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

.s-overlay-image-block {
  text-align: center;
}

.s-overlay-image {
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
