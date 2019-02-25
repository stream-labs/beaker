<template>
  <div>
    <div class="tooltip-notice">
      <div class="tooltip-notice-content">
        <i class="icon-dropdown tooltip-notice__arrow"></i>
        <h3>{{ title }}</h3>
        <p>{{ desc }}</p>
        <Button
          @click="clickHandler"
          :title="'Got It'"
          :variation="'action'"
          :size="'small'"></Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "./Button.vue";

@Component({
  components: {
    Button
  }
})
export default class TooltipNotice extends Vue {
  @Prop({ required: true })
  title!: string;

  @Prop({ required: true })
  desc!: string;

  clickHandler() {
    this.$emit("handle-tooltip");
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.tooltip-notice {
  .day-shadow();
  background-color: @white;
  .padding(2);
  width: 200px;
  .radius();

  .button {
    .margin-top();
  }
}

.tooltip-notice-content {
  position: relative;
}

.tooltip-notice__arrow {
  transform: rotate(90deg);
  font-size: 40px;
  position: absolute;
  top: 8px;
  left: -36px;
  color: @white;
}

.night,
.night-theme {
  .tooltip-notice {
    background-color: @night-section-alt;
  }

  .tooltip-notice__arrow {
    color: @night-section-alt;
  }
}
</style>
