<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">

            <div class="modal-body">
              <slot name="title">
                <slot name="mode"></slot>
              </slot>
              <slot name="sub-title">
              </slot>
              <slot name="text">
              </slot>
              <slot name="donate-done">
              </slot>
              <slot name="button-subscribe">
              </slot>
              <slot name="notes"></slot>
            </div>

            <div class="modal-footer">
              <div class="modal-footer-inner">
                <button
                  class="modal-default-button"
                  @click="$emit('close')"
                >
                  OK
                </button>
                <slot name="button-box">
                </slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class Modal extends Vue {
  @Prop()
  price!: {
    type: String
    default: null
  }
}
</script>

<style lang="less" scoped>
@import './../styles/Imports';

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  border-radius: 8px;
}

.modal-body {
  .padding(@spacing: 3);
}

.modal-footer {
  background: @light-2;
  border-radius: 0 0 8px 8px;
}

.modal-footer-inner {
  .padding-v-sides(@spacing: 2);
  .padding-h-sides(@spacing: 3);
}

.modal-default-button {
  float: right;
}
</style>
