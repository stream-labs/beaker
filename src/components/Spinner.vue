<template>
  <div class="s-spinner">
    <div class="s-bars" :variation="variation" v-if="variation === 'bars'">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="28px"
        height="40px"
        viewBox="0 0 28 40"
      >
        <rect width="4" height="40" x="0" y="0" ry="2" rx="2" class="s-spinner__bar">
          <animate
            attributeName="opacity"
            values=".24; .08; .24"
            begin="0s"
            dur="1.2s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="height"
            values="40; 32; 40"
            begin="0s"
            dur="1.2s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="y"
            values="0; 4; 0"
            begin="0s"
            dur="1.2s"
            repeatCount="indefinite"
          ></animate>
        </rect>
        <rect width="4" height="40" x="12" y="0" ry="2" rx="2" class="s-spinner__bar">
          <animate
            attributeName="opacity"
            values=".24; .08; .24"
            begin="0.4s"
            dur="1.2s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="height"
            values="40; 32; 40"
            begin="0.4s"
            dur="1.2s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="y"
            values="0; 4; 0"
            begin="0.4s"
            dur="1.2s"
            repeatCount="indefinite"
          ></animate>
        </rect>
        <rect width="4" height="40" x="24" y="0" ry="2" rx="2" class="s-spinner__bar">
          <animate
            attributeName="opacity"
            values=".24; .08; .24"
            begin="0.8s"
            dur="1.2s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="height"
            values="40; 32; 40"
            begin="0.8s"
            dur="1.2s"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="y"
            values="0; 4; 0"
            begin="0.8s"
            dur="1.2s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </svg>
    </div>
    <div class="s-circles" :variation="variation" v-if="variation === 'circles'">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
        <path
          class="s-spinner__circle"
          d="M34.89 21.81a15.01 15.01 0 0 1-15.61 13.17A15.13 15.13 0 0 1 5.01 20.71a15.02 15.02 0 0 1 13.18-15.6A2.03 2.03 0 0 0 20 3.12a1.98 1.98 0 0 0-2.17-1.99A19 19 0 0 0 1.12 22.17c.97 8.7 8 15.74 16.71 16.71a19.02 19.02 0 0 0 21.05-16.71A1.98 1.98 0 0 0 36.89 20c-1.04 0-1.87.79-2 1.81z"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            dur="1.5s"
            repeatCount="indefinite"
          ></animateTransform>
          <animate
            attributeName="opacity"
            values="0.16; 0.24; .16"
            begin="0.5s"
            dur="0.75s"
            repeatCount="indefinite"
          ></animate>
        </path>
        <path
          class="s-spinner__circle"
          d="M22.09 9.19a11.02 11.02 0 0 0-12.83 8.45c-.27 1.22.72 2.36 1.96 2.36h.01c.92 0 1.74-.63 1.94-1.53A7.01 7.01 0 0 1 20.11 13a7.1 7.1 0 0 1 6.9 6.9 7.02 7.02 0 0 1-5.47 6.94c-.9.2-1.53 1.02-1.53 1.94v.01c0 1.25 1.14 2.24 2.36 1.97a11.02 11.02 0 0 0-.28-21.57z"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="-360 20 20"
            dur="1.75s"
            repeatCount="indefinite"
          ></animateTransform>
          <animate
            attributeName="opacity"
            values="0.16; 0.24; .16"
            begin="0s"
            dur="0.75s"
            repeatCount="indefinite"
          ></animate>
        </path>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Spinner extends Vue {
  @Prop()
  variation!: String;
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.s-spinner {
  width: 100%;
  height: 100%;
  .padding();
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.s-spinner__bar,
.s-spinner__circle {
  opacity: 0.24;
  fill: @dark-2;
}

.night,
.night-theme {
  .s-spinner__bar,
  .s-spinner__circle {
    fill: @light-2;
  }
}
</style>
