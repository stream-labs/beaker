<template>
  <div class="section">
    <div class="row bottom-space">
      <h2>FONTS</h2>
      <div class="font-style barlow">Barlow</div>
      <div class="side-by-side">
        <div class="subtitle">Marketing Headings</div>
        <p>Bold, ExtraBold</p>
      </div>
      <div class="font-style roboto">Roboto</div>
      <div class="side-by-side">
        <div class="subtitle">UI &amp; Content</div>
        <p>Regular, Medium, Bold</p>
      </div>
    </div>

    <div class="row bottom-space">
      <h2>TYPOGRAPHY</h2>
      <div class="side-by-side">
        <div class="subtitle">Letter Spacing</div>
        <p>0%</p>
      </div>
      <div class="side-by-side">
        <div class="subtitle">Line Height</div>
        <p>h1, h2: 110% -- everything else: 150%</p>
      </div>
      <div class="side-by-side">
        <div class="subtitle">Paragraph Spacing</div>
        <p>8px</p>
      </div>
    </div>

    <div class="row bottom-space">
      <h2>TYPE SCALE</h2>
      <div class="type-scale barlow extrabold s48">
        head1: Barlow ExtraBold 48px
      </div>
      <div class="type-scale barlow bold s32">head2: Barlow Bold 32px</div>
      <div class="type-scale bold s22">Marketing Title: Roboto Bold 22px</div>
      <div class="type-scale bold s20">Title: Roboto Bold 20px</div>
      <div class="type-scale medium s18">
        Marketing Subtitle: Roboto Medium 18px
      </div>
      <div class="type-scale medium s16">Subtitle: Roboto Medium 16px</div>
      <div class="type-scale gray s16">
        Marketing Paragraph: Roboto Regular 16px
      </div>
      <div class="type-scale gray s14">Subtitle: Roboto Regular 14px</div>
      <div class="type-scale gray medium underline s16">
        Marketing Link: Roboto Medium 16px
      </div>
      <div class="type-scale gray medium underline s14">
        Link: Roboto Medium 14px
      </div>
      <div class="type-scale teal medium s16">
        Marketing Label: Roboto Medium 16px
      </div>
      <div class="type-scale teal medium s14">Label: Roboto Medium 14px</div>
      <div class="type-scale gray s14">
        Marketing Caption: Roboto Regular 14px
      </div>
      <div class="type-scale gray s12">Caption: Roboto Regular 12px</div>
    </div>

    <div class="row bottom-space">
      <h2>COLORS</h2>
      <div v-for="color in colors" :key="color.color">
        <div class="side-by-side">
          <div class="nospace-flex">
            <div
              class="color-square"
              :style="'background-color:' + color.hex + ';'"
            ></div>
            <div class="subtitle>">{{ color.color }}</div>
          </div>
          <p>{{ color.hex }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Typography extends Vue {
  private colors: object = [
    { color: "Teal (primary)", hex: "#31C3A2" },
    { color: "Red (count badges, warnings, errors", hex: "#F85640" },
    { color: "Yellow (info)", hex: "#E3973E" },
    { color: "Dark 1 (app store icons, bg", hex: "#000000" },
    { color: "Dark 2 (day title, subtitle, selected)", hex: "#09161D" },
    { color: "Dark 3 (night bg)", hex: "#17242D" },
    { color: "Dark 4 (night cards/sections bg", hex: "#2B383F" },
    { color: "Dark 5 (day p, night button, night cards", hex: "#4F5E65" },
    { color: "Light 1 (day title, bg", hex: "#FFFFFF" },
    { color: "Light 2 (day tip page bg, cards", hex: "#F5F8FA" },
    { color: "Light 3 (day button)", hex: "#E3E8EB" },
    { color: "Light 4 (night paragraph)", hex: "#BDC2C4" },
    { color: "Light 5 (day/night icons, captions", hex: "#91979A" },
    { color: "Blue", hex: "#36ADE0" },
    { color: "Pink", hex: "#EB7777" },
    { color: "Purple", hex: "#5E3BEC" },
    { color: "Streamlabs Prime", hex: "#42C9D2" }
  ];
}
</script>

<style lang="less">
@import "./../styles/Imports";

.row {
  width: 700px;

  &.bottom-space {
    .margin-bottom(8);
  }
}

.side-by-side {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.type-scale {
  color: @dark-1;
  line-height: 150%;
}

.gray {
  color: @dark-4;
}

.teal {
  color: @teal;
}

.underline {
  text-decoration: underline;
}

.font-style {
  color: @dark-1;
  font-size: 28px;
  font-weight: @medium;
  line-height: 150%;
}

.subtitle {
  color: @dark-1;
}

.s48 {
  font-size: 48px;
}

.s32 {
  font-size: 32px;
}

.s22 {
  font-size: 22px;
}

.s20 {
  font-size: 20px;
}

.s18 {
  font-size: 18px;
}

.s16 {
  font-size: 16px;
}

.s14 {
  font-size: 14px;
}

.s12 {
  font-size: 12px;
}

.extra-bold {
  font-weight: 800;
}

.bold {
  font-weight: 700;
}

.medium {
  font-weight: 500;
}

.barlow {
  font-family: "Barlow";
}

.roboto {
  font-family: "Roboto";
}

.nospace-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.color-square {
  width: 20px;
  height: 20px;
  .radius();
  .margin-right(2);
}

.night,
.night-theme {
  .type-scale {
    color: @light-1;
  }

  .gray {
    color: @light-4;
  }

  .font-style {
    color: @light-1;
  }

  .subtitle {
    color: @light-1;
  }
}
</style>
