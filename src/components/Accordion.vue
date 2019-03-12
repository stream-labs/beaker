<template>
  <div class="s-accordion" :class="[ accordionClasses ]">
    <div class="s-accordion__toggle" @click.capture="toggleAccordion">
      <slot name="toggle">
        <span v-show="defaultOpen">{{ title || openedTitle }}</span>
        <span v-show="!defaultOpen">{{ title || closedTitle }}</span>
      </slot>
    </div>

    <div class="s-accordion__menu" ref="menu">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ResizeObserver from "resize-observer-polyfill";

@Component({})
export default class Accordion extends Vue {
  $refs!: {
    menu: HTMLDivElement;
  };

  @Prop()
  isOpen!: boolean;

  @Prop()
  noBorder!: boolean;

  @Prop()
  openedTitle!: string;

  @Prop()
  closedTitle!: string;

  @Prop()
  title!: string;

  defaultOpen = false;
  defaultBorder = false;

  created() {
    this.defaultOpen = this.isOpen;
    this.defaultBorder = this.noBorder;
  }

  toggleAccordion(event: any) {
    const blockedNodes = ["INPUT", "BUTTON", "LABEL"];
    if (blockedNodes.indexOf(event.target.nodeName) !== -1) {
      return;
    }

    const parent: any = this.$parent;
    const parentMenu: any = this.$parent.$refs.menu;
    const menu = this.$refs.menu;

    this.defaultOpen = !this.defaultOpen;
    menu.style.transition = "all .275s";

    if (parent.$el.classList.contains("accordion") && parent.defaultOpen) {
      parentMenu.style.maxHeight = "none";
    }

    if (menu.style.maxHeight === "none" && !this.defaultOpen) {
      menu.style.maxHeight = `${menu.children[0].scrollHeight + 16}px`;
    }

    menu.style.maxHeight = this.calculateHeight(menu);
  }

  calculateHeight(element: Element) {
    const newHeight = element.children[0].scrollHeight;
    const padding =
      (this.$refs.menu.querySelectorAll(".accordion").length + 1) * 16;
    if (!this.defaultOpen) {
      return "0";
    } else {
      return `${newHeight + padding}px`;
    }
  }

  mounted() {
    const menu = this.$refs.menu;
    const ro = new ResizeObserver((entries, observer) => {
      menu.style.maxHeight = this.calculateHeight(menu);
    });

    ro.observe(menu);
  }

  updated() {
    this.$nextTick(() => {
      const menu = this.$refs.menu;
      menu.style.maxHeight = this.calculateHeight(menu);
    });
  }

  get accordionClasses() {
    const classes: any = [];

    if (this.defaultBorder) {
      classes.push("s-accordion--no-border");
    }

    if (!this.defaultOpen) {
      classes.push("is-closed");
    }

    return classes.join(" ");
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.s-accordions {
  .s-accordion {
    &:last-child {
      .margin-bottom(@0);
    }

    .s-accordion__menu {
      .transition();
    }
  }
}

.s-accordion {
  .radius();
  background-color: @day-bg;
  border: 1px solid @day-input-border;
  .margin-bottom(3);
  text-align: left;

  &:last-child {
    margin-bottom: 0;
  }

  &.is-closed {
    .s-accordion__menu {
      max-height: 0;
      .padding-v-sides(@0);
      opacity: 0;
    }

    & > .s-accordion__toggle {
      &:before {
        content: "\e957";
      }
    }
  }

  &:not(.is-closed) {
    & > .s-accordion__menu {
      overflow: visible;
      opacity: 1;
    }
  }
}

.s-accordion--no-border {
  border: 0;
  background-color: transparent;

  .s-accordion__toggle {
    .padding(@0);
    padding-left: 24px;

    &:before {
      left: 0;
      top: 2px;
    }
  }

  .s-accordion__menu {
    .padding(@0);
    .padding-top();
  }
}

.s-accordion__toggle,
.s-accordion__menu {
  width: 100%;
}

.s-accordion__toggle {
  .weight(@medium);
  color: @day-title;
  position: relative;
  .padding(2);
  .padding-left(5);
  cursor: default;
  user-select: none;

  &:before {
    content: "\e958";
    color: @icon;
    border: none;
    position: absolute;
    left: 16px;
    height: 15px;
    width: 15px;
    line-height: 16px;
    background-color: @light-3;
    border-radius: 2px;
    text-align: center;
    top: 18px;
    font-size: 10px;
    font-family: "icomoon";
    font-weight: 900;
  }
}

.s-accordion__menu {
  .transition();
  overflow: hidden;
  .padding(2);
  .padding-top(@0);
}

.s-accordions {
  .s-accordion {
    &:last-child {
      margin-bottom: 0px;
    }
  }
}

.night,
.night-theme {
  .s-accordion {
    border-color: @night-input-border;
    background-color: @night-bg;
  }

  .s-accordion--no-border {
    background-color: transparent;
  }

  .s-accordion__toggle {
    color: @night-title;

    &:before {
      background-color: @dark-4;
    }
  }
}
</style>
