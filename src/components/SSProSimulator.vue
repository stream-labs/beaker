<template>
  <div class="sp-simulator">
    <div class="sp-simulator__web-bar">
      <div class="sp-simulator__web-bar-dots">
        <div class="sp-simulator__web-bar-dot"></div>
        <div class="sp-simulator__web-bar-dot"></div>
        <div class="sp-simulator__web-bar-dot"></div>
      </div>
      <div class="sp-simulator__url-container">{{ username }}.tv</div>
    </div>
    <div class="sp-simulator__web-page" :class="themeClass">
      <div class="sp-simulator__heading">
        <img class="sp-simulator__icon" :src="icon">
        <div class="sp-simulator__header-text">
          <h1 class="sp-simulator__username">{{ username }}</h1>
          <div class="sp-simulator__desc"></div>
        </div>
      </div>

      <div class="sp-simulator__section">
        <div class="sp-simulator__video"><i class="icon-media-share-2"></i></div>
      </div>

      <div class="sp-simulator__section">
        <div class="ss-simulator__fake-input"></div>
        <div class="ss-simulator__fake-input"></div>
        <div class="ss-simulator__fake-input"></div>
        <div class="ss-simulator__fake-button"></div>
      </div>

      <div class="sp-simulator__section"></div>

      <div class="sp-simulator__section"></div>

      <div class="sp-simulator__section"></div>

      <div class="sp-simulator__section"></div>

      <div class="sp-simulator__section"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TextInput from "./../components/TextInput.vue";

@Component({
  components: {
    TextInput
  }
})
export default class SSProSimulator extends Vue {
  @Prop()
  username!: string;

  @Prop()
  icon!: String;

  themeClasses = ["teal", "orange", "electric-blue", "red", "lime"];
  themeClass = "";

  rotateClasses() {
    const it = this.themeClasses[Symbol.iterator](); // convenient for yeilding values
    const int = setInterval(() => {
      // time interval
      const next = it.next(); // next value
      if (!next.done) {
        // done = true when the end of array reached
        this.themeClass = "sp-simulator--" + next.value; // concatenate word to the string
      } else {
        clearInterval(int); // when done - clear interval
        this.themeClass = "sp-simulator--" + next.value;
      }
    }, 3000); // interval duration
  }

  mounted() {
    this.rotateClasses();
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";
@import "./../styles/components/CustomFonts";

.sp-simulator {
  .radius(2);
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  color: @night-paragraph;

  p {
    color: inherit;
  }
}

.sp-simulator__web-bar {
  height: 40px;
  display: grid;
  background-color: @day-section;
  align-items: center;
  position: relative;
  .padding-h-sides();
}

.sp-simulator__web-bar-dots {
  display: flex;
}

.sp-simulator__web-bar-dot {
  width: 12px;
  height: 12px;
  .radius(10);
  .margin-right();
  background-color: @light-3;
}

.sp-simulator__url-container {
  height: 24px;
  width: 248px;
  background-color: @white;
  color: @day-paragraph;
  text-align: center;
  .radius();
  position: absolute;
  right: 0%;
  left: 0%;
  margin: 0 auto;
  top: 8px;
  line-height: 24px;
  text-transform: lowercase;
  .weight(@medium);
}

.sp-simulator__web-page {
  background-color: @night-bg;
  .padding(3);
  display: grid;
  grid-template-areas:
    "header header header header"
    "video video video tip"
    "merch merch merch merch";
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 24px;

  .sp-simulator__section {
    &:nth-child(2) {
      grid-area: video;
    }

    &:nth-child(3) {
      grid-area: tip;
    }

    &:nth-child(4) {
      grid-area: merch;
    }
  }
}

.sp-simulator__heading {
  display: flex;
  grid-area: header;
  align-items: center;

  h1 {
    color: @white;
    .margin-bottom();
  }
}

.sp-simulator__header-text {
  width: 72%;
}

.sp-simulator__desc {
  .margin(@0);
  width: 100%;
  height: @spacing;
  .radius(2);
  background-color: lighten(@night-bg, 4%);
}

.sp-simulator__video {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  i {
    color: lighten(@night-bg, 4%);
    font-size: 48px;
  }
}

.sp-simulator__icon {
  width: 56px;
  height: 56px;
  border-radius: 100%;
  .margin-right(2);
}

.sp-simulator__section {
  .padding(2);
  .radius(2);
  min-height: 100px;
  background-color: darken(@night-bg, 8%);
}

.ss-simulator__fake-input {
  height: 30px;
  .radius();
  border: 1px solid rgba(255, 255, 255, 0.24);
  .margin-bottom(2);
  line-height: 30px;
  .padding-h-sides();
}

.ss-simulator__fake-button {
  height: 40px;
  .radius();
  background-color: lighten(@night-bg, 16%);
  color: @white;
  border-radius: 100px;
  text-align: center;
  .weight(@medium);
  line-height: 40px;
}

// Themes
.sp-simulator--teal {
  background-color: @teal;
  .custom-font--bubble;
  color: #303030;

  .ss-simulator__fake-input {
    border-color: rgba(0, 0, 0, 0.24);
  }

  .ss-simulator__fake-button {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .sp-simulator__section {
    background-color: darken(@teal, 8%);
  }
}

.sp-simulator--orange {
  background-color: #d84e24;
  .custom-font--knock;

  .sp-simulator__desc,
  .ss-simulator__fake-button {
    background-color: lighten(#d84e24, 4%);
  }

  .sp-simulator__video i {
    color: lighten(#d84e24, 4%);
  }

  .sp-simulator__section {
    background-color: darken(#d84e24, 8%);
  }
}

.sp-simulator--electric-blue {
  background-color: #0f83c6;
  .custom-font--killshot;
  color: #202020;

  h1 {
    color: black;
  }

  .sp-simulator__video i {
    color: lighten(#0f83c6, 4%);
  }

  .sp-simulator__desc,
  .ss-simulator__fake-button {
    background-color: lighten(#0f83c6, 4%);
  }

  .sp-simulator__fake-input {
    border-color: rgba(0, 0, 0, 0.24);
  }

  .sp-simulator__section {
    background-color: darken(#0f83c6, 8%);
  }
}

.sp-simulator--red {
  background-color: #af1108;
  .custom-font--straight-facts;
  color: #808080;

  h1 {
    color: @white;
  }

  .sp-simulator__section {
    background-color: darken(#af1108, 8%);
  }
}

.sp-simulator--lime {
  background-color: #78e236;
  .custom-font--listen-up;
  color: #63695d;

  h1 {
    color: black;
  }

  .ss-simulator__fake-input {
    border-color: rgba(0, 0, 0, 0.24);
  }

  .sp-simulator__section {
    background-color: darken(#78e236, 8%);
  }
}

.night,
.night-theme {
  .sp-simulator__web-bar {
    background-color: @night-section;
  }

  .sp-simulator__web-bar-dots {
    display: flex;
  }

  .sp-simulator__web-bar-dot {
    background-color: @dark-4;
  }

  .sp-simulator__url-container {
    background-color: @night-bg;
  }
}
</style>
