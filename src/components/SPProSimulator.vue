<template>
  <div class="sp-simulator">
    <div class="sp-simulator__web-bar">
      <div class="sp-simulator__web-bar-dots">
        <div class="sp-simulator__web-bar-dot">
        </div>
        <div class="sp-simulator__web-bar-dot">
        </div>
        <div class="sp-simulator__web-bar-dot">
        </div>
      </div>
      <div class="sp-simulator__url-container">{{ username }}.tv</div>
    </div>
    <div class="sp-simulator__web-page" :class="themeClass">
      <div class="sp-simulator__heading">
        <img class="sp-simulator__icon" :src="icon">
        <div>
          <h1 class="sp-simulator__username">{{ username }}</h1>
          <p class="sp-simulator__desc">Welcome to my site! Everything donated goes directly to my stream. Thanks for your support!</p>
        </div>
      </div>

      <div class="sp-simulator__section">
        <div class="sp-simulator__video"></div>
      </div>

      <div class="sp-simulator__section">
        <TextInput :title="'Username'"></TextInput>
      </div>

      <div class="sp-simulator__section">

      </div>

      <div class="sp-simulator__section">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TextInput from "./TextInput.vue";

@Component({
  components: {
    TextInput
  }
})
export default class SPProSimulator extends Vue {
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
  width: 600px;
  overflow: hidden;
}

.sp-simulator__web-bar {
  height: 40px;
  display: grid;
  background-color: @day-section;
  align-items: center;
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
  text-align: center;
  .radius();
}

.sp-simulator__web-page {
  background-color: @night-bg;
  .padding(3);
  display: grid;
  grid-template-areas:
    "header header header header"
    "video video video tip";
  grid-gap: 24px;

  .sp-simulator__section {
    &:nth-child(2) {
      grid-area: video;
    }

    &:nth-child(3) {
      grid-area: tip;
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

.sp-simulator__desc {
  .margin(@0);
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
  min-height: 200px;
  background-color: darken(@night-bg, 8%);
}

// Themes
.sp-simulator--teal {
  background-color: @teal;
  .custom-font--bubble;

  .sp-simulator__section {
    background-color: darken(@teal, 8%);
  }
}

.sp-simulator--orange {
  background-color: #d84e24;
  .custom-font--knock;

  .sp-simulator__section {
    background-color: darken(#d84e24, 8%);
  }
}

.sp-simulator--electric-blue {
  background-color: #0f83c6;
  .custom-font--killshot;

  .sp-simulator__section {
    background-color: darken(#0f83c6, 8%);
  }
}

.sp-simulator--red {
  background-color: #af1108;
  .custom-font--straight-facts;

  .sp-simulator__section {
    background-color: darken(#af1108, 8%);
  }
}

.sp-simulator--lime {
  background-color: #78e236;
  .custom-font--listen-up;

  .sp-simulator__section {
    background-color: darken(#78e236, 8%);
  }
}

.night,
.night-theme {
}
</style>
