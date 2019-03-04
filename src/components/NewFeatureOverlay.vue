<template>
  <modal name="new-feature" :adaptive="true" width="100%" height="auto" classes="s-overlay-wrapper">
    <div slot="top-right" class="s-overlay-icon">
      <span class="s-icon icon-close" @click="$modal.hide('new-feature')"></span>
    </div>
    <div class="s-overlay-container">
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

      <div class="s-overlay-image">
        <img :src="overlayImage">
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Button from './../components/Button.vue'

@Component({
  components: {
    Button,
  },
})
export default class ModalBasic extends Vue {
  @Prop()
  label!: string

  @Prop()
  title!: string

  @Prop()
  image!: string

  get overlayImage() {
    return this.image
  }
}
</script>

<style lang="less" scoped>
@import './../styles/Imports';

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
  width: 65%;
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
