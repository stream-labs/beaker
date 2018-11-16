<template>
  <div
    class="banner"
    ref="banner">
    <div
      class="banner__bg banner__bg--day"
      :style="{ 'background-image': `url('${dayBg}')`}">
    </div>
    <div
      class="banner__bg banner__bg--night"
      :style="{ 'background-image': `url('${nightBg}')`}">
    </div>

    <div class="banner__body" :class="{'banner__body--closed': closed}" key="banner-open">
      <div class="banner__wrapper">
        <div class="banner__label">{{ label }}</div>
        <i @click="toggleBanner()" class="icon-down"></i>
      </div>

      <div class="banner__wrapper" ref="bottomWrapper">
        <div class="banner__title">
          <div class="banner__icon">
            <i :class="`icon-${icon}`"></i>
          </div>

          <div class="banner__details">
            <h2 class="banner__name">{{ title }}</h2>
            <p class="banner__desc">{{ desc }}</p>
          </div>
        </div>

        <div @click.stop="" class="banner__download-wrapper">
          <i @click="toggleBanner()" class="icon-down"></i>
          <slot name="link"></slot>
          <div class="banner__link-desc">{{ linkDesc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class BannerMarketing extends Vue {
  @Prop()
  dayBg!: string;

  @Prop()
  nightBg!: string;

  @Prop()
  label!: string;

  @Prop()
  icon!: string;

  @Prop()
  title!: string;

  @Prop()
  desc!: string;

  @Prop()
  linkDesc!: string;

  @Prop({ default: false })
  bannerClosed!: boolean;

  closed: boolean = false;

  mounted() {
    this.closed = this.bannerClosed;
    this.updateBannerHeight();
  }

  toggleBanner() {
    this.closed = !this.closed;
    this.updateBannerHeight();

    // LocalForage.setItem('slobsAd', this.infoBannerClosed);
  }

  updateBannerHeight() {
    let banner: any = this.$refs.banner;
    let bannerWrapper: any = this.$refs.bottomWrapper;

    if (!this.closed) {
      banner.style.maxHeight = "240px";
    } else {
      setTimeout(() => {
        banner.style.maxHeight = `${bannerWrapper.scrollHeight + 32}px`;
      }, 1);
    }
  }
  // mounted() {
  //   LocalForage.getItem('slobsAd', (err, value) => {
  //     if (value !== null && !parseInt(value)) {
  //       this.infoBannerClosed = value;
  //     }
  //   });

  //   LocalForage.getItem('uiMode', (err, value) => {
  //     if (value !== null && !parseInt(value)) {
  //       this.hidden = true;
  //     }
  //   });
  // },
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.banner {
  position: relative;
  .margin-bottom(3);
  .padding(2);
  .radius();
  overflow: hidden;
  .transition();
}

.banner__bg {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}

.banner__bg--night {
  display: none;
}

.banner__body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 208px;
}

.banner__wrapper {
  z-index: 0;
  display: flex;
  justify-content: space-between;

  &:first-child {
    align-items: center;

    .icon-down {
      transform: rotate(180deg);
    }
  }

  &:last-child {
    align-items: flex-end;

    .icon-down {
      display: none;
    }
  }

  .icon-down {
    font-size: 10px;
    line-height: 32px;
  }
}

.banner__label {
  background: rgba(0, 0, 0, 0.16);
  padding: 2px 8px;
  .radius();
  .weight(@medium);
  font-size: 16px;
}

.banner__icon {
  .radius();
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  .margin-right(2);
  background-color: @white;

  img {
    width: 44px;
  }

  i {
    font-size: 22px;
  }
}

.banner__title {
  display: flex;
}

.banner__details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}

.banner__name {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 0;
}

.banner__desc {
  margin: 0;
}

.banner__desc,
.banner__download-label {
  .weight(@medium);
}

.banner__download-label {
  margin-top: 4px;
}

.banner__download-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.banner__body--closed {
  .banner__wrapper {
    &:first-child {
      display: none;
    }

    &:last-child {
      align-items: center;

      .icon-down,
      .fa-chevron-up {
        .margin-left(2);
        align-items: center;
        display: flex;
      }
    }
  }

  .banner__download-wrapper {
    flex-direction: row-reverse;
  }

  .banner__desc,
  .banner__label {
    display: none;
  }

  .banner__icon {
    width: 32px;
    height: 32px;

    img {
      width: 26px;
    }

    i {
      font-size: 18px;
    }
  }

  .banner__download-label {
    margin-top: 0px;
    .margin-right(2);
  }

  .banner__link-desc {
    margin-top: 0px;
    .margin-right();
  }
}

.banner__link-desc {
  font-size: 13px;
  margin-top: 4px;
}

.night {
  .banner__icon {
    .radius();
    background: @day-title;

    i {
      color: @white;
    }
  }

  .banner__label {
    background: rgba(255, 255, 255, 0.26);
  }

  .banner__bg--night {
    display: block;
  }

  .banner__bg--day {
    display: none;
  }
}
</style>
