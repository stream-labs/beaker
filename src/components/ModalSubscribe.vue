<template>
  <modal
    :width="modalWidth"
    :minWidth="modalMinWidth"
    :minHeight="modalMinHeight"
    height="auto"
    :adaptive="true"
    name="modal-subscribe"
  >
    <div class="modal-container">
      <div class="subscribe-icon-box">
        <i class="icon-close" @click="$modal.hide('modal-subscribe')"></i>
      </div>
      <div class="subscribe-upper">
        <div class="subscribe-title-box">
          <h1 class="modal-title">{{title}}</h1>
          <badge :align-left="true">Pro</badge>
        </div>
        <h2 class="modal-sub-title">{{subTitle}}</h2>
      </div>

      <div class="subscribe-body">
        <div class="subscribe-box">
          <p class="subscribe-text">{{subscribeText}}</p>
          <p class="subscribe-message">
            {{subscribeMessage}}
            <span class="subscribe-icon">
              <img src="../assets/imgs/girl.svg">
            </span>
          </p>
        </div>
      </div>

      <div class="subscribe-bottom">
        <p class="modal-text modal-text-subscribe">{{text}}</p>
        <div class="button-subscribe">
          <Button :variation="'subscribe'" :title="'Subscribe with PayPal'" :price="'$5.99/mo'"></Button>
        </div>
        <p class="modal-notes">{{notes}}</p>
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Button from './../components/Button.vue'
import Badge from './../components/Badge.vue'

@Component({
  components: {
    Button,
    Badge,
  },
})
export default class ModalBasic extends Vue {
  @Prop({ default: 600 })
  width!: number

  modalWidth: number = this.width

  @Prop({ default: 600 })
  minWidth!: number

  modalMinWidth: number = this.minWidth

  @Prop({ default: null })
  minHeight!: number

  modalMinHeight: number = this.minHeight

  @Prop({ default: null })
  title!: string

  @Prop({ default: null })
  subTitle!: string

  @Prop({ default: null })
  text!: string

  @Prop({ default: null })
  subscribeText!: string

  @Prop({ default: null })
  subscribeMessage!: string

  @Prop({ default: null })
  notes!: string
}
</script>


<style lang="less" scoped>
@import './../styles/Imports';

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

.night,
.night-theme {
  .v--modal-overlay {
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

  .subscribe-text {
    color: @white;
  }

  .subscribe-message {
    color: @light-4;
  }
}
</style>
