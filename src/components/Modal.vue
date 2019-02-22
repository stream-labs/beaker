<template>
  <transition name="fade">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div
            v-if="modalType==='modal'"
            class="modal-component"
          >
            <div class="modal-body">
              <div class="normal-upper">
                <h1 class="modal-title">
                  <slot name="title"></slot>
                </h1>
                <h2 class="modal-sub-title">
                  <slot name="sub-title"> </slot>
                </h2>
                <p class="modal-text">
                  <slot name="text"> </slot>
                </p>
              </div>
            </div>
            <div class="modal-footer">
              <div class="modal-footer-inner button-container">
                <Button
                  :variation="'default'"
                  :title="'Close'"
                  @click="$emit('close')"
                >
                </Button>
                <Button
                  :variation="'action'"
                  :title="'Confirm'"
                >
                </Button>
              </div>
            </div>
          </div>

          <div v-if="modalType==='subscribing'">
            <div class="subscribing-icon-box">
              <i
                class="icon-close"
                @click="$emit('close')"
              ></i>
            </div>
            <div class="subscribing-upper">
              <div class="subscribing-title-box">
                <h1 class="modal-title">
                  <slot name="title"></slot>
                </h1>
                <div>
                  <slot name="badge"></slot>
                </div>
              </div>
              <h2 class="modal-sub-title">
                <slot name="sub-title"></slot>
              </h2>
            </div>
            <div class="subscribing-bottom">
              <p class="modal-text modal-text-subscribing">
                <slot name="text"></slot>
              </p>
              <div class="button-subscribe">
                <slot name="button-subscribe"></slot>
              </div>
              <p class="modal-notes">
                <slot name="notes"></slot>
              </p>
            </div>
          </div>

          <div v-if="modalType==='redirect'">
            <div class="redirect">
              <h1 class="modal-title">
                <slot name="title"></slot>
              </h1>
              <p class="modal-text">
                <slot name="text"></slot>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Button from './../components/Button.vue'

@Component({
  components: {
    Button,
  },
})
export default class Modal extends Vue {
  @Prop()
  modalType!: {
    type: String
    default: null
  }
}
</script>

<style lang="less" scoped>
@import './../styles/Imports';

.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: @day-modal-mask;
  display: table;
}

.modal-component {
  .transition();
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  background-color: @white;
  box-shadow: 0 4px 8px @day-shadow;
  .radius (2);
}

.modal-body {
  .padding(3);
  .radius(2);
}

.modal-footer {
  background: @light-2;
  .radius(2);
  .radius-bottom();
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.modal-footer-inner {
  .padding-v-sides(2);
  .padding-h-sides(3);
}

.modal-default-button {
  float: right;
}

.subscribing-upper,
.subscribing-bottom {
  .padding-v-sides(2);
  .padding-h-sides(4);
}

.subscribing-icon-box {
  .padding-v-sides(3);
  .padding-h-sides(3);
  .padding-bottom(0);
  overflow: hidden;
  .icon-close {
    float: right;
  }
}

.subscribing-title-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .margin-bottom(1.5);
  .modal-title {
    margin: 0;
    .margin-right(1);
  }
}

.button-subscribe {
  .margin-top(3);
}

.modal-text-subscribing {
  .margin-bottom(3);
}

.modal-notes {
  text-align: center;
  color: @light-5;
  .small-type();
  .padding-v-sides(2);
}

.redirect {
  text-align: center;
  .padding(3);
}

.night,
.night-theme {
  .modal-mask {
    background-color: @night-modal-mask;
  }

  .modal-container {
    background: @dark-3;
    box-shadow: 0px 4px 8px @night-shadow;
  }

  .modal-footer {
    background: @dark-2;
  }
}
</style>
