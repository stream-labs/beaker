<template>
  <transition name="fade">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div v-if="modalType==='modal'" class="modal-container">
          <div class="modal-body">
            <div class="normal-upper">
              <h1 class="modal-title">
                <slot name="title"></slot>
              </h1>
              <h2 class="modal-sub-title">
                <slot name="sub-title"></slot>
              </h2>
              <p class="modal-text">
                <slot name="text"></slot>
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <div class="modal-footer-inner button-container">
              <Button
                :variation="'default'"
                :title="'Close'"
                :size="'fixed-width'"
                @click="$emit('close')"
              ></Button>
              <Button :variation="'action'" :title="'Confirm'" :size="'fixed-width'"></Button>
            </div>
          </div>
        </div>

        <div v-if="modalType==='subscribe'">
          <div class="modal-container">
            <div class="subscribe-icon-box">
              <i class="icon-close" @click="$emit('close')"></i>
            </div>
            <div class="subscribe-upper">
              <div class="subscribe-title-box">
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

            <div class="subscribe-body">
              <div class="subscribe-box">
                <p class="subscribe-text">
                  <slot name="subscribe-text"></slot>
                </p>
                <p class="subscribe-message">
                  <slot name="subscribe-message"></slot>
                  <span class="subscribe-icon">
                    <slot name="subscribe-icon"></slot>
                  </span>
                </p>
              </div>
            </div>

            <div class="subscribe-bottom">
              <p class="modal-text modal-text-subscribe">
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
        </div>

        <div v-if="modalType==='redirect'">
          <div class="modal-container">
            <div class="redirect">
              <div class="spinner">
                <Spinner :variation="'bars'"/>
              </div>
              <h1 class="modal-title">
                <slot name="title"></slot>
              </h1>
              <p class="modal-text">
                <slot name="text"></slot>
              </p>
            </div>
          </div>
        </div>

        <div v-if="modalType==='confirmation'">
          <div class="modal-container modal-container-small">
            <div class="confirmation">
              <h2 class="modal-sub-title">
                <slot name="sub-title"></slot>
              </h2>
              <p class="modal-text">
                <slot name="text"></slot>
              </p>
              <div class="button-container">
                <Button
                  :variation="'default'"
                  :title="'Cancel'"
                  :size="'fixed-width'"
                  @click="$emit('close')"
                ></Button>
                <Button :variation="'warning'" :title="'Delete'" :size="'fixed-width'"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "./../components/Button.vue";
import Spinner from "./../components/Spinner.vue";

@Component({
  components: {
    Button,
    Spinner
  }
})
export default class Modal extends Vue {
  @Prop()
  modalType!: {
    type: string
    default: null
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: @day-modal-mask;
  display: table;
  z-index: 10000;
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

.modal-title,
.modal-sub-title {
  color: @day-title;
  .margin-bottom(3);
}

.modal-title {
  .margin-bottom(3);
}

.modal-sub-title {
  .margin-bottom(2);
  .weight(@medium);
}

.modal-footer {
  background: @light-2;
  .radius-bottom(2, 2);
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.modal-footer-inner {
  .padding-v-sides(2);
  .padding-h-sides(3);
}

.modal-container-small {
  width: 400px;
  .button-container {
    display: block;
    .padding-top (1);
  }
}

.modal-body {
  .padding(3);
  .radius(2);
}

.modal-default-button {
  float: right;
}

.subscribe-upper,
.subscribe-bottom {
  .padding-v-sides(2);
  .padding-h-sides(4);
}

.subscribe-icon-box {
  .padding-v-sides(3);
  .padding-h-sides(3);
  .padding-bottom(0);
  overflow: hidden;
  .icon-close {
    float: right;
  }
}

.subscribe-title-box {
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

.modal-text-subscribe {
  .margin-bottom(3);
}

.subscribe-body {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #efefef;
  height: 146px;
  .subscribe-box {
    text-align: center;
    .subscribe-text {
      font-size: 16px;
      font-weight: @medium;
      .margin-v-sides(0);
    }
    .subscribe-message {
      font-size: 16px;
      display: inline-block;
      .margin-v-sides(0);
      .subscribe-icon {
        display: inline-block;
        vertical-align: middle;
        .padding-left(1);
      }
    }
  }
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
  .modal-text {
    .padding-h-sides(8);
  }
}

.spinner {
  .padding-bottom(1.8);
}

.confirmation {
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

  .modal-title,
  .modal-sub-title {
    color: @night-title;
  }

  .modal-footer {
    background: @dark-2;
  }

  .subscribe-text {
    color: @white;
  }

  .subscribe-message {
    color: @light-4;
  }
}
</style>
