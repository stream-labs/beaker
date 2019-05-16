<template>
  <div
    class="s-step"
    :class="{ completed: isCompleted, checked: hasCheckmark }"
  >
    <div class="s-step__title">
      <span class="s-step__icon" :class="icon" v-if="icon"></span>
      <span class="s-step__icon icon-check-mark" v-if="hasCheckmark"></span>
      <p class="s-step__title-text">{{ title }}</p>
      <Badge
        class="s-step__badge"
        v-if="hasPrime"
        :variant="'prime-alt'"
        :align-left="true"
      ></Badge>
    </div>
    <slot v-if="!isCompleted"> </slot>
    <div v-if="isCompleted">{{ completedText }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Badge from "./../components/Badge.vue";

@Component({
  components: {
    Badge
  }
})
export default class Step extends Vue {
  @Prop(String)
  icon!: string;

  @Prop(String)
  title!: string;

  @Prop(String)
  point!: string;

  @Prop({ default: false })
  hasPrime!: boolean;

  @Prop({ default: false })
  isCompleted!: boolean;

  @Prop({ default: false })
  hasCheckmark!: boolean;

  @Prop(String)
  completedText!: string;
}
</script>

<style lang="less">
@import "./../styles/Imports";

.s-step {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: @dark-5;
  .radius();
  .padding-v-sides(1.5);
  .padding-h-sides(1.5);
}

.s-step__title {
  color: @white;
  line-height: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.s-step__title-text {
  .margin(0);
}

.s-step__icon {
  margin-right: 8px;
}

.s-step__badge {
  margin-left: 8px;
}

.completed {
  color: @dark-5;
  background: @dark-4;
  .s-step__icon,
  .s-step__title-text,
  .s-step__badge {
    color: @dark-5;
  }
}

.checked {
  .s-step__title-text {
    text-decoration: line-through;
  }
}
</style>
