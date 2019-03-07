<template>
  <transition name="fade">
    <div class="s-loader">
      <div class="s-loader__bg">
        <div class="s-loader__inner">
          <Spinner class="s-spinner__overlay" :size="spinnerSize"/>
          <p class="s-loader__text">{{ loaderText }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import Spinner from "./../components/Spinner.vue"
import Button from "./../components/Button.vue"

@Component({
  components: { Spinner, Button },
})
export default class Loading extends Vue {
  @Prop({ default: "small" })
  spinnerSize!: string

  @Prop()
  loadingStrs!: any

  strings: any = JSON.parse(JSON.stringify(this.loadingStrs));

  loaderText: string = "";

  mounted() {
    this.loaderText = this.strings[0];
    this.strings.shift();

    const id = setInterval(() => {
      const str = this.strings.shift();
      console.log(str);
      this.loaderText = str;
      if (str === undefined) {
        this.$emit("closeLoading");
        clearInterval(id);
      }    }, 4500);
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.s-loader__bg {
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: @white;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.s-loader__inner {
  width: 100%;
  height: auto;
}

.s-loader__text {
  text-align: center;
  color: @dark-2;
  .weight(@medium);
  .margin-top(2);
  .margin-bottom(0);
}

.s-spinner__overlay {
  .padding-top(0);
}

.night,
.night-theme {
  .s-loader__bg {
    background: @dark-3;
  }

  .s-loader__text {
    color: @white;
  }
}
</style>
