<template>
  <div class="notice">
    <div class="notice__wrapper" :style="styleObject">
      <div class="notice__body">
        <div class="notice__icon">
          <i class="icon" :class="`icon-${icon}`"></i>
        </div>
        <div class="notice__detail">
          <h2 class="notice__title">{{title}}</h2>
          <p class="notice__desc">{{desc}}</p>
        </div>
      </div>
      <div class="notice__button">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class Notice extends Vue {
  @Prop()
  bg!: {
    type: string
    required: true
  }

  @Prop()
  title!: {
    type: string
    required: true
  }

  @Prop()
  desc!: {
    type: string
    required: true
  }

  @Prop()
  icon!: {
    type: string
    required: true
  }

  // mounted() {
  //   this.closed = this.bannerClosed
  //   this.updateBannerHeight()
  // }
}
</script>

<style lang="less" scoped>
@import './../styles/Imports';

.notice {
  .margin-bottom(3);
}

.notice__wrapper　 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: @light-2;
  .padding(3);
}

.notice__body　 {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .notice__detail {
    .padding-h-sides(2);
  }
}

// .btn {
//   padding-left: 32px;
//   position: relative;
// }
// .btn:before {
//   position: absolute;
//   font-family: 'FontAwesome';
//   top: 0;
//   left: 10px;
//   content: "\f005";
// }
</style>
