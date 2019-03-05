<template>
  <transition name="fade">
    <div class="s-loader">
      <div class="s-loader__bg">
        <div class="s-loader__inner">
          <Spinner :variation="spinnerType"/>
          <p class="s-loader__text">
            <slot></slot>
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Spinner from './../components/Spinner.vue'
import Button from './../components/Button.vue'

@Component({
  components: { Spinner, Button },
})
export default class Loading extends Vue {
  @Prop()
  spinnerType!: string

  mounted() {
    setTimeout(() => {
      this.$emit('closeLoading')
    }, 4000)
  }
}
</script>

<style lang="less" scoped>
@import './../styles/Imports';

.s-loader {
  .transition();
}

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
