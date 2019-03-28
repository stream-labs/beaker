<template>
  <transition name="fade">
    <div class="s-loader">
      <div :class="{ 's-loader__bg--semi': semiOpaque }" class="s-loader__bg">
        <div class="s-loader__inner">
          <Spinner class="s-spinner__overlay" :size="'large'"/>
          <div class="s-loader__text">{{ loaderText }}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Spinner from "./../components/Spinner.vue";
import Button from "./../components/Button.vue";

@Component({
  components: { Spinner, Button }
})
export default class Loading extends Vue {
  @Prop()
  loadingStrs!: any[] | string;

  @Prop({ default: false })
  semiOpaque!: boolean;
  
  @Prop()
  randomize!: boolean;

  strings: any = JSON.parse(JSON.stringify(this.loadingStrs));
  loaderText: string = "";

  randomStrings() {
    console.log("test");
  }

  loopStr() {
    if (this.strings.length > 1) {
      if (this.randomize) {
        this.randomStrings();
      }
      const str = this.strings.shift();
      this.strings.push(str);
      this.loaderText = str;
      setTimeout(this.loopStr, 4000);
    } else {
      this.loaderText = this.strings[0];
    }
  }

  mounted() {
    if (typeof this.loadingStrs === "string") {
      this.loaderText = this.loadingStrs;
    } else {
      this.loopStr();
    }
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

.s-loader__bg--semi {
  background: @day-overlay;
}

.s-loader__inner {
  width: 100%;
  height: auto;
}

.s-loader__text {
  text-align: center;
  color: @dark-2;
  .weight(@medium);
  .margin-top(3);
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

  .s-loader__bg--semi {
    background: @night-overlay;
  }

  .s-loader__text {
    color: @white;
  }
}
</style>
