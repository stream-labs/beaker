<template>
  <div class="s-accordion" :class="[accordionClasses]">
    <div
      class="s-accordion__head"
      :class="{ 'is-open': isOpen }"
      @click="openContent"
    >
      <div class="s-accordion__button">
        <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px">
          <path
            class="s-accordion__svg--back"
            d="M13 14H1a1 1 0 0 1-1-1V1c0-.6.5-1 1-1h12c.6 0 1 .5 1 1v12c0 .6-.4 1-1 1z"
            fill="#e3e8eb"
          ></path>
          <transition name="twist-h">
            <g v-if="!isOpen">
              <path
                class="s-accordion__svg--line"
                d="M10 8H4a1 1 0 0 1-1-1c0-.6.5-1 1-1h6c.6 0 1 .5 1 1s-.4 1-1 1z"
              ></path>
              <path
                class="s-accordion__svg--line"
                d="M8 4v6c0 .6-.5 1-1 1a1 1 0 0 1-1-1V4c0-.6.5-1 1-1s1 .5 1 1z"
              ></path>
            </g>
          </transition>
          <transition name="twist-v">
            <path
              class="s-accordion__svg--line"
              d="M10 8H4a1 1 0 0 1-1-1c0-.6.5-1 1-1h6c.6 0 1 .5 1 1s-.4 1-1 1z"
              v-if="isOpen"
            ></path>
          </transition>
        </svg>
      </div>
      <div class="s-accordion--title" v-if="hasTitleSlot">
        <slot name="title" />
      </div>
      <div class="s-accordion--title" v-else>{{ accordionTitle }}</div>
    </div>
    <transition
      name="expand"
      @enter="open"
      @after-enter="afterOpen"
      @leave="close"
    >
      <div
        class="s-accordion__content"
        :class="[{ 'is-open': isOpen }, { 'left-nav': leftNav }]"
        v-if="isOpen"
      >
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Accordian extends Vue {
  @Prop()
  openedTitle!: string;

  @Prop()
  closedTitle!: string;

  @Prop()
  title!: string;

  @Prop()
  isOpened!: boolean;

  @Prop()
  noBorder!: boolean;

  @Prop()
  leftNav!: boolean;

  private isOpen = false;
  private defaultBorder = false;

  get accordionTitle() {
    if (this.title !== undefined) {
      return this.title;
    } else {
      if (this.isOpen) {
        return this.openedTitle;
      } else {
        return this.closedTitle;
      }
    }
  }

  get hasTitleSlot() {
    return !!this.$slots.title;
  }

  get accordionClasses() {
    let classes: any = [];
    if (this.noBorder) {
      classes.push("no-border");
    }
    if (this.leftNav) {
      classes.push("left-nav");
    }
    return classes.join(" ");
  }

  openContent(event: any) {
    let blockedNodes = ["INPUT", "BUTTON", "LABEL"];
    if (
      blockedNodes.indexOf(event.target.nodeName) !== -1 ||
      blockedNodes.indexOf(event.target.parentNode.parentNode.nodeName) !== -1
    ) {
      return;
    }
    this.isOpen = !this.isOpen;
  }

  afterOpen(element) {
    element.style.height = "auto";
  }

  open(element) {
    let width = getComputedStyle(element).width;
    element.style.width = width;
    element.style.position = `absolute`;
    element.style.visibility = `hidden`;
    element.style.height = `auto`;
    let height = getComputedStyle(element).height;
    element.style.width = null;
    element.style.position = null;
    element.style.visibility = null;
    element.style.height = 0;
    getComputedStyle(element).height;
    setTimeout(() => {
      element.style.height = height;
    });
    this.$emit("content-opened", true);
  }

  close(element) {
    let height = getComputedStyle(element).height;
    element.style.height = height;
    getComputedStyle(element).height;
    setTimeout(() => {
      element.style.height = 0;
    });
    this.$emit("content-opened", false);
  }

  mounted() {
    if (this.isOpened) {
      this.isOpen = true;
    }
  }
}
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-accordion {
  .radius();
  background-color: @day-bg;
  border: 1px solid @day-input-border;
  .margin-bottom(3);

  .padding(2);

  text-align: left;

  &.no-border {
    border: 1px solid transparent;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &.left-nav {
    border: none;
    .padding(0);
    .margin-bottom(0);

    .s-accordion__content {
      .padding-left(0);
    }

    .s-accordion__head {
      &.is-open {
        .margin-bottom(0);
      }
    }

    .s-accordion__button {
      .margin-right(1.5);
    }
  }

  .s-accordion__head {
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

    &.is-open {
      .margin-bottom(2);
    }

    .s-accordion--title {
      width: 100%;
      color: @day-title;
      transform: translateY(1px); // for better visual alignment;
    }

    &:hover {
      cursor: default;
    }
  }

  .s-accordion__button {
    display: inline-flex;
    .margin-right(2);
  }

  svg,
  g,
  path {
    transform-origin: 7px 7px;
  }

  .s-accordion__svg--back {
    fill: @light-3;
  }

  .s-accordion__svg--line {
    fill: @light-5;
    transform-origin: 7px 7px;
  }

  .s-accordion--title {
    font-weight: @medium;
    font-size: 14px;
  }
}

.night,
.night-theme {
  .s-accordion {
    border-color: @night-input-border;
    background-color: @night-bg;

    &.no-border {
      border: 1px solid transparent;
    }
    .s-accordion__head {
      .s-accordion--title {
        color: @night-title;
      }
    }
    .s-accordion__svg--back {
      fill: @dark-5;
    }

    .s-accordion__svg--line {
      fill: @light-4;
    }
  }
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.expand-enter,
.expand-leave-to {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  height: 0;
  opacity: 0;
}

.twist-h-enter-active,
.twist-h-leave-active {
  transition: all 0.25s ease-in-out;
  transform: rotate(-90deg);
  opacity: 1;
}
.twist-h-enter,
.twist-h-leave-to {
  transition: all 0.25s ease-in-out;
  transform: rotate(-90deg);
  opacity: 0;
}

.twist-v-enter-active,
.twist-v-leave-active {
  transition: all 0.25s ease-in-out;
  transform: rotate(-180deg);
  opacity: 1;
}
.twist-v-enter,
.twist-v-leave-to {
  transition: all 0.25s ease-in-out;
  transform: rotate(-180deg);
  opacity: 0;
}
</style>
