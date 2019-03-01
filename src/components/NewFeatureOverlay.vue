<template>
  <modal name="new-feature" :adaptive="true" width="100%" height="auto" classes="overlay-wrapper">
    <div slot="top-right" class="overlay-icon">
      <span class="icon icon-close" @click="$modal.hide('new-feature')"></span>
    </div>
    <div class="overlay-container">
      <div class="overlay-body">
        <p class="overlay__label">{{label}}</p>
        <h1 class="overlay__title">{{title}}</h1>
        <p class="overlay__text">
          <slot></slot>
        </p>
        <div class="overlay-links">
          <Button :type="'button'" :size="'large'" :variation="'action'" :title="'Set Up Store'"></Button>
          <p class="overlay__link">
            <a href="#">Go to Dashboard</a>
          </p>
        </div>
      </div>

      <div class="overlay-image">
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

.overlay-wrapper {
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

.overlay-icon {
  .padding(4);
}

.icon {
  cursor: pointer;
}

.overlay-container {
  width: 65%;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.overlay-body {
  flex-basis: 50%;
}

.overlay__label {
  font-size: 16px;
  .weight(@medium);
  color: @dark-2;
}

.overlay__title {
  font-size: 36px;
  font-weight: 900;
}

.overlay__text {
  line-height: 21px;
  .margin-bottom(3);
}

.overlay-links {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .margin-top(4);
}

.overlay__link {
  .margin-left(2);
}

.night,
.night-theme {
  .v--modal-overlay {
    background: @night-overlay;
  }

  .overlay__label {
    color: @white;
  }
}
</style>
