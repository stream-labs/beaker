<template>
  <div
    v-if="type === 'text'"
    :class="visible ? 'beaker-text-guard' : 'beaker-text-guard--readable'"
    @click="showText"
  >
    <div v-if="visible" class="beaker-text-guard__text">
      <i class="fas fa-lock"></i>
      {{ placeholder }}
    </div>
    <div
      :class="
        visible
          ? 'beaker-text-wrapper'
          : 'beaker-text-wrapper beaker-text-wrapper--readable'
      "
    >
      <slot v-if="$slots.content" name="content" />
      <div v-else>{{ value }}</div>
    </div>
  </div>
  <div
    v-else
    :class="visible ? 'beaker-input-guard' : 'beaker-input-guard--readable'"
    @click="showText"
  >
    <div v-if="visible" class="beaker-input-guard__text">
      <i class="fas fa-lock"></i>
      {{ placeholder }}
    </div>
    <div
      :class="
        visible
          ? 'beaker-input-wrapper'
          : 'beaker-input-wrapper beaker-input-wrapper--readable'
      "
    >
      <slot name="content" />
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

  @Prop({ default: "text" })
  type!: string;

  visible: boolean = true;

  showText() {
    if (this.showOnClick) {
      this.visible = false;
    } else {
      this.$emit("click");
    }
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";
//  Input Guard Css
.beaker-input-guard {
  position: relative;
  flex: 1;
  margin-right: 10px;
  .radius();

  .beaker-input-wrapper {
    input {
      color: transparent;
      text-shadow: 0 0 5px rgba(55, 71, 79, 0.5);
    }
  }
}

//  Text Guard Css
.beaker-text-guard {
  width: auto;
  min-width: 150px;
  border: 1px solid @day-border;
  display: inline-block;
  position: relative;
  .radius();
  padding: 0 8px;

  .beaker-text-wrapper {
    color: transparent;
    text-shadow: 0 0 5px rgba(55, 71, 79, 0.5);
  }
}

.beaker-text-wrapper--readable,
.beaker-input-wrapper--readable {
  color: inherit;
  text-shadow: none;
}

.beaker-text-guard--readable {
  border: 0px;
}

.night,
.night-theme {
  .beaker-text-guard {
    border: 1px solid @night-border;
    .beaker-ext-wrapper {
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    }
  }
}

.night,
.night-theme {
  .beaker-input-guard {
    .beaker-input-wrapper {
      input {
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        color: transparent;
      }
    }
  }
}

.beaker-text-guard__text,
.beaker-input-guard__text {
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
