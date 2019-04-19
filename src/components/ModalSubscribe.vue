<template>
  <modal
    name="modal-subscribe"
    :classes="'s-modal-wrapper'"
    :maxWidth="width"
    :minWidth="minWidth"
    height="auto"
    :adaptive="true"
  >
    <div class="s-modal-container">
      <div class="s-subscribe-icon-box">
        <i class="s-subscribe-icon icon-close" @click="$modal.hide('modal-subscribe')"></i>
      </div>
      <div class="s-subscribe-upper">
        <div class="s-subscribe-title-box">
          <h1 class="s-modal-title">{{title}}</h1>
          <badge :align-left="true">Pro</badge>
        </div>
        <h2 class="s-modal-sub-title">{{subTitle}}</h2>
      </div>

      <div class="s-subscribe-body">
        <div class="s-subscribe-box">
          <p class="s-subscribe-text">{{subscribeText}}</p>
          <p class="s-subscribe-message">
            {{subscribeMessage}}
            <span class="s-subscribe-icon">
              <img src="../assets/imgs/girl.svg">
            </span>
          </p>
        </div>
      </div>

      <div class="s-subscribe-bottom">
        <p class="s-modal-text s-modal-text-subscribe">{{text}}</p>
        <div class="s-button-subscribe">
          <Button :variation="'subscribe'" :title="'Subscribe with PayPal'" :price="'$5.99/mo'"></Button>
        </div>
        <p class="s-modal-notes">{{notes}}</p>
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "./../components/Button.vue";
import Badge from "./../components/Badge.vue";

@Component({
  components: {
    Button,
    Badge
  }
})
export default class ModalSubscribe extends Vue {
  @Prop({ default: 600 })
  width!: number;

  @Prop({ default: 600 })
  minWidth!: number;

  @Prop()
  title!: string;

  @Prop()
  subTitle!: string;

  @Prop()
  text!: string;

  @Prop()
  notes!: string;

  @Prop()
  subscribeText!: string;

  @Prop()
  subscribeMessage!: string;
}
</script>


<style lang="less">
@import "./../styles/Imports";
@import "./../styles/components/Modals";

.s-subscribe-upper,
.s-subscribe-bottom {
  .padding-v-sides();
  .padding-h-sides(4);
}

.s-subscribe-icon-box {
  .padding-v-sides(3);
  .padding-h-sides(3);
  .padding-bottom(0);
  overflow: hidden;
}

.s-subscribe-icon {
  float: right;
  cursor: pointer;
}

.s-subscribe-title-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .margin-bottom(1.5);
}

.s-modal-title {
  .margin(0);
  .margin-right();
}

.s-button-subscribe {
  .margin-top(3);
}

.s-modal-text-subscribe {
  .margin-bottom(3);
}

.s-subscribe-body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 136px;
}

.s-subscribe-box {
  text-align: center;
}

.s-subscribe-text {
  font-size: 16px;
  .weight(@medium);
  .margin-v-sides(0);
}

.s-subscribe-message {
  font-size: 16px;
  display: inline-block;
  .margin-v-sides(0);
}

.s-subscribe-icon {
  display: inline-block;
  vertical-align: middle;
  .padding-left();
}

.s-modal-notes {
  text-align: center;
  color: @light-5;
  .small-type();
  .padding-v-sides(2);
}
</style>
