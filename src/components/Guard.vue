<template>
  <div :class="guardClasses" @click="showText">
    <div v-if="visible" :class="`${prefix}__text`">
      <i class="fas fa-lock"></i>
      {{ placeholder }}
    </div>
    <div
      :class="
        visible
          ? `${prefix}-wrapper`
          : `${prefix}-wrapper ${prefix}-wrapper--readable`
      "
    >
      <slot v-if="$slots.content" name="content" />
      <div v-else>{{ value }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Guard extends Vue {
  @Prop()
  value?: string;

  @Prop({ default: "Click to show" })
  placeholder!: string;

  @Prop({ default: true })
  showOnClick!: boolean;

  @Prop({ default: "normal" })
  variation!: string;

  @Prop({ default: "text" })
  type!: string;

  visible: boolean = true;

  get prefix() {
    return this.type === "input" ? "s-input-guard" : "s-text-guard";
  }

  showText() {
    if (this.showOnClick) {
      this.visible = false;
    } else {
      this.$emit("click");
    }
  }

  get guardClasses() {
    const classes: string[] = [];
    if (this.visible) {
      classes.push(this.prefix);
    } else {
      classes.push(`${this.prefix}--readable`);
    }

    if (this.type === "alt") {
      classes.push(`${this.prefix}--alt`);
    }

    return classes;
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";
//  Input Guard Css
.s-input-guard {
  position: relative;
  flex: 1;
  margin-right: 10px;
  .radius();

  .s-input-guard-wrapper {
    input {
      color: transparent;
      text-shadow: 0 0 5px rgba(55, 71, 79, 0.5);
    }
  }
}

//  Text Guard Css
.s-text-guard {
  width: auto;
  min-width: 150px;
  border: 1px solid @day-border;
  display: inline-block;
  position: relative;
  .radius();
  padding: 0 8px;

  .s-text-guard-wrapper {
    color: transparent;
    text-shadow: 0 0 5px rgba(55, 71, 79, 0.5);
  }
}

.s-text-guard-wrapper--readable,
.s-input-guard-wrapper--readable {
  color: inherit;
  text-shadow: none;
  border: 0px;
}

.night,
.night-theme {
  .s-text-guard {
    border: 1px solid @night-border;
    .s-text-guard-wrapper {
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    }
  }

  .s-text-guard--alt {
    border-color: @night-border-alt;
  }

  .s-input-guard {
    .s-input-guard-wrapper {
      input {
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        color: transparent;
      }
    }
  }
}

.s-text-guard__text,
.s-input-guard__text {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  cursor: pointer;

  .fab,
  .far,
  .fas {
    .margin();
  }
}
</style>
