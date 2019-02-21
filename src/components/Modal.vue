<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div v-if="modalType==='modal'">
              <div class="modal-body">
                <slot name="normal-upper"></slot>
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

            <div v-if="modalType==='donate'">
              <div class="donate-icon-box">
                <i
                  class="icon-close"
                  @click="$emit('close')"
                ></i>
              </div>
              <div class="donate-upper">
                <slot name="donate-upper"> </slot>
              </div>
              <div class="donate-bottom">
                <slot name="donate-bottom"></slot>
              </div>
            </div>

            <div v-if="modalType==='redirect'">
              <slot name="redirect"> </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>

  </div>
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.modal-footer-inner {
  .padding-v-sides(@spacing: 2);
  .padding-h-sides(@spacing: 3);
}

.modal-default-button {
  float: right;
}

.donate-upper,
.donate-bottom {
  .padding-v-sides(@spacing: 2);
  .padding-h-sides(@spacing: 4);
}

.donate-icon-box {
  .padding-v-sides(@spacing: 3);
  .padding-h-sides(@spacing: 3);
  .padding-bottom(@spacing: 0);
  overflow: hidden;
  .icon-close {
    float: right;
  }
}
</style>
