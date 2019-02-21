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
                <slot name="title"></slot>
                <slot name="sub-title"> </slot>
                <slot name="text"> </slot>
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
  background-color: rgba(79, 94, 94, 0.4);
  display: table;
}

.modal-component {
  .transition();
  // .spin();
}

// .fade-enter-active {
//   transition: all 0.25s 0.15s cubic-bezier(0.4, 0, 0.2, 1);
//   opacity: 1;
// }

// .fade-leave-active {
//   transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
//   opacity: 0;
// }

// .fade-enter {
//   transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

//   opacity: 0;
// }

// .fade-leave-to {
//   transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
//   opacity: 0;
// }

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  z-index: 999;
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

.night,
.night-theme {
  .modal-container {
    background: @dark-3;
    box-shadow: 0px 4px 8px rgba(9, 22, 29, 0.24);
  }

  .modal-footer {
    background: @dark-2;
  }
}
</style>

<style lang="less">
@import './../styles/Imports';

.modal-title {
  color: @dark-2;
  .weight(@bold);
  .plan {
    color: @teal;
    font-size: 14px;
    background: #ffffff;
    .margin-left();
  }
}
.modal-sub-title {
  .weight(500);
}
.modal-text {
  font-size: 14px;
  line-height: 21px;
}
.donate-title-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
  .modal-title {
    margin: 0;
    margin-right: 8px;
  }
}
.button-subscribe {
  .margin-top(@spacing: 3);
}
.modal-text-donate {
  .margin-bottom(@spacing: 3);
}
.modal-notes {
  text-align: center;
  color: @light-5;
  .small-type();
  .padding-v-sides(@spacing: 2);
}
.redirect {
  text-align: center;
  .padding(@spacing: 3);
}
.night,
.night-theme {
  .title {
    color: @white;
  }
}
</style>