<template>
  <div>
    <div class="s-tooltip-notice">
      <div class="s-tooltip-notice-content">
        <i class="s-icon-dropdown s-tooltip-notice__arrow"></i>
        <h3>{{ title }}</h3>
        <p>{{ desc }}</p>
        <Button @click="clickHandler" :title="'Got It'" :variation="'action'" :size="'small'"></Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Button from './Button.vue'

@Component({
  components: {
    Button,
  },
})
export default class TooltipNotice extends Vue {
  @Prop({ required: true })
  title!: string

  @Prop({ required: true })
  desc!: string

  clickHandler() {
    this.$emit('handle-tooltip')
  }
}
</script>

<style lang="less" scoped>
@import './../styles/Imports';

.s-tooltip-notice {
  .day-shadow();
  background-color: @white;
  .padding(2);
  width: 200px;
  .radius();
  z-index: 1000;
  position: absolute;

  .button {
    .margin-top();
  }

  h3 {
    font-size: 16px;
    .margin-bottom();
    .weight(@medium);
    color: @day-title;
  }
}

.s-tooltip-notice-content {
  position: relative;
}

.s-tooltip-notice__arrow {
  transform: rotate(90deg);
  font-size: 40px;
  position: absolute;
  top: 8px;
  left: -36px;
  color: @white;
}

.night,
.night-theme {
  .s-tooltip-notice {
    background-color: @night-section-alt;

    h3 {
      color: @night-title;
    }
  }

  .s-tooltip-notice__arrow {
    color: @night-section-alt;
  }
}
</style>
