<template>
  <div class="fake-alert">
    <p class="fake-alert__text">{{ alertText }}</p>
    <div class="fake-alert__message">
      {{ alertMessage }}
      <span class="fake-alert__icon">
        <img :src="alertImage">
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class FakeAlert extends Vue {
  @Prop({ default: "galazy83 donated $50.00" })
  alertText!: string;

  @Prop({ default: "Thanks for the stream. Go CivRyan!" })
  alertMessage!: string;

  @Prop({
    default: "https://thumbs.gfycat.com/PleasedIcyCod-size_restricted.gif"
  })
  alertImage!: string;
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.fake-alert {
  height: 146px;
  background-color: @light-3;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.fake-alert__text {
  font-size: 16px;
  .weight(@medium);
  .margin-v-sides(0);
  color: @day-title;
}

.fake-alert__message {
  font-size: 16px;
  display: inline-block;
  .margin-top();
}

.fake-alert__icon {
  display: inline-block;
  vertical-align: middle;
  .padding-left();
  width: 40px;
  margin-top: -20px;
}

.night,
.night-theme {
  .fake-alert {
    background-color: @dark-4;
  }

  .fake-alert__text {
    color: @night-title;
  }
}
</style>
