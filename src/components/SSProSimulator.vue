<template>
  <div class="s-sp-simulator">
    <div class="s-sp-simulator__web-bar">
      <div class="s-sp-simulator__web-bar-dots">
        <div class="s-sp-simulator__web-bar-dot"></div>
        <div class="s-sp-simulator__web-bar-dot"></div>
        <div class="s-sp-simulator__web-bar-dot"></div>
      </div>
      <div class="s-sp-simulator__url-container">{{ username }}.tv</div>
    </div>
    <div class="s-sp-simulator__web-page" :class="themeClass">
      <div class="s-sp-simulator__heading">
        <img class="s-sp-simulator__icon" :src="icon">
        <div class="s-sp-simulator__header-text">
          <h1 class="s-sp-simulator__username">{{ username }}</h1>
          <div class="s-sp-simulator__desc"></div>
        </div>
      </div>

      <div class="s-sp-simulator__section">
        <div class="s-sp-simulator__video">
          <i class="icon-media-share-2"></i>
        </div>
      </div>

      <div class="s-sp-simulator__section">
        <div class="s-ss-simulator__fake-input"></div>
        <div class="s-ss-simulator__fake-input"></div>
        <div class="s-ss-simulator__fake-input"></div>
        <div class="s-ss-simulator__fake-button"></div>
      </div>

      <div class="s-sp-simulator__section"></div>
      <div class="s-sp-simulator__section"></div>
      <div class="s-sp-simulator__section"></div>
      <div class="s-sp-simulator__section"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class SSProSimulator extends Vue {
  @Prop()
  username!: string

  @Prop()
  icon!: String

  themeClasses = ['teal', 'orange', 'purple', 'electric-blue', 'red', 'lime']
  themeClass = ''
  myInt!: number

  rotateClasses() {
    let it = this.themeClasses[Symbol.iterator]()
    this.myInt = setInterval(() => {
      // time interval
      const next = it.next()
      if (!next.done) {
        this.themeClass = 's-sp-simulator__web-page--' + next.value
      } else {
        it = this.themeClasses[Symbol.iterator]()
      }
    }, 2000)
  }

  beforeDestroy() {
    clearInterval(this.myInt)
  }

  mounted() {
    this.rotateClasses()
  }
}
</script>

<style lang="less" scoped>
@import './../styles/Imports';
@import './../styles/components/CustomFonts';

.s-sp-simulator {
  .radius(2);
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  color: @night-paragraph;

  p {
    color: inherit;
  }
}

.s-sp-simulator__web-bar {
  height: 40px;
  display: grid;
  background-color: @day-section;
  align-items: center;
  position: relative;
  .padding-h-sides();
}

.s-sp-simulator__web-bar-dots {
  display: flex;
}

.s-sp-simulator__web-bar-dot {
  width: 12px;
  height: 12px;
  .radius(10);
  .margin-right();
  background-color: @light-3;
}

.s-sp-simulator__url-container {
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

.s-sp-simulator__web-page {
  background-color: @night-bg;
  .padding(2);
  display: grid;
  grid-template-areas:
    'header header header header'
    'video video video tip'
    'merch social countdown lb';
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;

  .s-sp-simulator__section {
    &:nth-child(2) {
      grid-area: video;
    }

    &:nth-child(3) {
      grid-area: tip;
    }

    &:nth-child(4) {
      grid-area: merch;
    }

    &:nth-child(5) {
      grid-area: social;
    }

    &:nth-child(6) {
      grid-area: lb;
    }

    &:nth-child(7) {
      grid-area: countdown;
    }
  }
}

.s-sp-simulator__heading {
  display: flex;
  grid-area: header;
  align-items: center;

  h1 {
    color: @white;
    .margin-bottom();
    font-size: 16px;
    font-weight: inherit;
  }
}

.s-sp-simulator__header-text {
  width: 72%;
}

.s-sp-simulator__desc {
  .margin(@0);
  width: 100%;
  height: @spacing;
  .radius(2);
  background-color: lighten(@night-bg, 4%);
}

.s-sp-simulator__video {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  i {
    color: lighten(@night-bg, 4%);
    font-size: 48px;
  }
}

.s-sp-simulator__icon {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  .margin-right(2);
}

.s-sp-simulator__section {
  .padding(2);
  .radius(2);
  min-height: 100px;
  background-color: darken(@night-bg, 8%);
}

.s-ss-simulator__fake-input {
  height: 24px;
  .radius();
  border: 1px solid rgba(255, 255, 255, 0.24);
  .margin-bottom();
  .padding-h-sides();
}

.s-ss-simulator__fake-button {
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
.s-sp-simulator__web-page--teal {
  background-color: @teal;
  .custom-font--bubble;
  color: #303030;
  grid-template-areas:
    'header header header header'
    'tip video video video'
    'merch merch social social';

  .s-sp-simulator__section {
    &:nth-child(6),
    &:nth-child(7) {
      display: none;
    }
  }

  .s-sp-simulator__desc,
  .s-ss-simulator__fake-button {
    background-color: lighten(@teal, 8%);
  }

  .s-sp-simulator__video i {
    color: darken(@teal, 16%);
  }

  .s-sp-simulator__section {
    background-color: darken(@teal, 8%);
  }
}

.s-sp-simulator__web-page--orange {
  background-color: #d84e24;
  .custom-font--knock;
  grid-template-areas:
    'header header header header'
    'tip video video video'
    'merch social lb countdown';
  .s-sp-simulator__desc,
  .s-ss-simulator__fake-button {
    background-color: lighten(#d84e24, 4%);
  }

  .s-sp-simulator__video i {
    color: lighten(#d84e24, 4%);
  }

  .s-sp-simulator__section {
    background-color: darken(#d84e24, 8%);
  }
}

.s-sp-simulator__web-page--electric-blue {
  background-color: #0f83c6;
  .custom-font--smooth-talker();
  color: #202020;
  grid-template-areas:
    'header header header header'
    'tip video video video'
    'merch merch social lb';

  .s-sp-simulator__section {
    &:nth-child(7) {
      display: none;
    }
  }

  h1 {
    color: rgb(25, 32, 43);
  }

  .s-sp-simulator__video i {
    color: lighten(#0f83c6, 4%);
  }

  .s-sp-simulator__desc,
  .s-ss-simulator__fake-button {
    background-color: lighten(#0f83c6, 4%);
  }

  .s-sp-simulator__fake-input {
    border-color: rgba(0, 0, 0, 0.24);
  }

  .s-sp-simulator__section {
    background-color: darken(#0f83c6, 8%);
  }
}

.s-sp-simulator__web-page--purple {
  background-color: @purple;
  .custom-font--bubble;
  color: #303030;

  .s-sp-simulator__desc,
  .s-ss-simulator__fake-button {
    background-color: lighten(@purple, 8%);
  }

  .s-sp-simulator__video i {
    color: darken(@purple, 16%);
  }

  .s-sp-simulator__section {
    background-color: darken(@purple, 8%);
  }
}

.s-sp-simulator__web-page--red {
  background-color: #af1108;
  .custom-font--straight-facts;
  color: #808080;
  grid-template-areas:
    'header header header header'
    'video video video tip'
    'merch merch merch social';

  .s-sp-simulator__section {
    &:nth-child(6),
    &:nth-child(7) {
      display: none;
    }
  }

  h1 {
    color: @white;
  }

  .s-sp-simulator__video i {
    color: lighten(#af1108, 4%);
  }

  .s-sp-simulator__desc,
  .s-ss-simulator__fake-button {
    background-color: lighten(#af1108, 4%);
  }

  .s-sp-simulator__section {
    background-color: darken(#af1108, 8%);
  }
}

.s-sp-simulator__web-page--lime {
  background-color: #78e236;
  .custom-font--listen-up;
  color: #63695d;
  grid-template-areas:
    'header header header header'
    'video video video tip'
    'merch merch merch merch';

  .s-sp-simulator__section {
    &:nth-child(5),
    &:nth-child(6),
    &:nth-child(7) {
      display: none;
    }
  }

  .s-sp-simulator__desc,
  .s-ss-simulator__fake-button {
    background-color: lighten(#78e236, 8%);
  }

  .s-sp-simulator__video i {
    color: darken(#78e236, 16%);
  }

  h1 {
    color: #1e4804;
  }

  .s-sp-simulator__section {
    background-color: darken(#78e236, 8%);
  }
}

.night,
.night-theme {
  .s-sp-simulator__web-bar {
    background-color: @night-section;
  }

  .s-sp-simulator__web-bar-dots {
    display: flex;
  }

  .s-sp-simulator__web-bar-dot {
    background-color: @dark-4;
  }

  .s-sp-simulator__url-container {
    background-color: @night-bg;
  }
}
</style>
