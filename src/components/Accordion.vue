<template>
  <div class="accordion" :class="[ accordionClasses ]">
    <div class="accordion__toggle" @click.capture="toggleAccordion">
      <slot name="toggle">
        <span v-show="defaultOpen">{{ title || openedTitle }}</span>
        <span v-show="!defaultOpen">{{ title || closedTitle }}</span>
      </slot>
    </div>

    <div class="accordion__menu" ref="menu">
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

    let parent: any = this.$parent,
      parentMenu: any = this.$parent.$refs.menu,
      menu = this.$refs.menu;

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
    let newHeight = element.children[0].scrollHeight;
    let padding =
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
    let classes = [];

    if (this.defaultBorder) {
      classes.push("accordion--no-border");
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

.accordions {
  .accordion {
    &:last-child {
      .margin-bottom(@0);
    }

    .accordion__menu {
      .transition();
    }
  }
}

.accordion {
  .radius();
  background-color: @day-bg;
  border: 1px solid @day-input-border;
  .margin-bottom(3);
  text-align: left;

  &:last-child {
    margin-bottom: 0;
  }

  &.is-closed {
    .accordion__menu {
      max-height: 0;
      .padding-v-sides(@0);
      opacity: 0;
    }

    & > .accordion__toggle {
      &:before {
        content: "\e957";
      }
    }
  }

  &:not(.is-closed) {
    & > .accordion__menu {
      overflow: visible;
      opacity: 1;
    }
  }
}

.accordion--no-border {
  border: 0;
  background-color: transparent;

  .accordion__toggle {
    .padding(@0);
    padding-left: 24px;

    &:before {
      left: 0;
      top: 2px;
    }
  }

  .accordion__menu {
    .padding(@0);
    .padding-top();
  }
}

.accordion__toggle,
.accordion__menu {
  width: 100%;
}

.accordion__toggle {
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

.accordion__menu {
  .transition();
  overflow: hidden;
  .padding(2);
  .padding-top(@0);
}

.accordions {
  .accordion {
    &:last-child {
      margin-bottom: 0px;
    }
  }
}

.night,
.night-theme {
  .accordion {
    border-color: @night-input-border;
    background-color: @night-bg;
  }

  .accordion--no-border {
    background-color: transparent;
  }

  .accordion__toggle {
    color: @night-title;

    &:before {
      background-color: @dark-4;
    }
  }
}
</style>
