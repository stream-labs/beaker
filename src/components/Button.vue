<template>
  <component
    :icon="icon"
    :title="title"
    :price="price"
    :description="description"
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
    class="button"
    :class="buttonClasses"
    :disabled="state === 'disabled'"
    @click="$emit('click')"
  >
    <span>
      <span>
        <i v-if="iconClass" :class="iconClass"></i>{{ title }}
      </span>
      <span v-if="description" class="button__description">{{ description }}</span>
    </span>
    <i v-if="variation === 'slobs-download'" class="icon-windows"></i>
    <span v-if="price">{{ price }}</span>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Button extends Vue {
  @Prop()
  onClick!: {
    type: Function;
  };

  @Prop()
  icon!: {
    type: String;
    default: null;
  };

  @Prop()
  title!: {
    type: String;
    default: null;
  };

  @Prop()
  price!: {
    type: String;
    default: null;
  };

  @Prop()
  description!: {
    type: String;
    default: null;
  };

  @Prop()
  href!: {
    type: String;
    default: null;
  };

  // standard, medium, large, square
  @Prop()
  size!: {
    type: String;
    size: null;
  };

  // hover, focus, loading, disabled
  @Prop()
  state!: {
    type: String;
    default: null;
  };

  // set buttons type to "submit"
  @Prop()
  type!: {
    type: String;
    default: null;
  };

  @Prop()
  to!: {
    type: String;
    default: null;
  };

  // button, a, router-link
  @Prop({ default: "button" })
  tag!: String;

  @Prop()
  variation!: {
    type: String;
    default: "default";
  };

  get buttonClasses() {
    let classes = [];

    if (this.variation) {
      classes.push(`button--${this.variation}`);
    }

    if (this.variation) {
      classes.push(`button--${this.variation}`);
    }

    if (this.size) {
      classes.push(`button--${this.size}`);
    }

    if (this.state) {
      classes.push(`is-${this.state}`);
    }

    return classes.join(" ");
  }

  get iconClass() {
    let classes = [];

    if (this.icon) {
      classes.push(`icon-${this.icon}`);
    }

    return classes.join(" ");
  }
}
</script>

<style lang="less">
.button-container {
  display: flex;
  flex-wrap: wrap;
}
</style>

<style lang="less" scoped>
@import "./../styles/Imports";

.button {
  .padding-v-sides(@0);
  .padding-h-sides(2);
  font-size: 14px;
  text-transform: capitalize;
  background: @day-button;
  color: @day-paragraph;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -ms-user-select: none;
  white-space: nowrap;
  overflow: hidden;
  margin: 0;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  .transition();
  .weight(@medium);
  .radius();
  font-family: "Roboto";
  border: 1px solid transparent;
  text-decoration: none;
  position: relative;
  outline: transparent dotted 2px;

  i {
    .margin-right();
    color: inherit;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -1px;
    margin-bottom: -1px;
    opacity: 1;
    transition: opacity 275ms ease;
  }

  &:focus,
  &.is-focused,
  &:hover,
  &.is-hovered {
    background-color: darken(@day-button, 4%);
  }

  &[disabled],
  &.is-disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &.is-loading {
    &:before {
      display: block;
      content: "\f1ce";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      animation: fade-in 275ms ease, spin 1s ease infinite;
    }

    span {
      opacity: 0;
    }
  }

  img {
    width: 14px;
    height: auto;
  }
}

.button--small {
  height: 32px;
  padding: 0px 8px;
  line-height: 32px;

  .fas,
  .far,
  .fab {
    .margin-right();
  }
}

.button--large {
  height: 64px;
  padding: 0px 64px;
  border-radius: 32px;
  font-size: 16px;
  line-height: 64px;

  .fas,
  .far,
  .fab {
    .margin-right();
  }
}

.button--square {
  height: 32px;
  width: 32px;
  .padding(0);
  display: flex;
  align-items: center;
  justify-content: center;
  background: @day-button;
  color: @day-paragraph;

  i {
    .margin-right(0);
  }
}

.button--default {
  background-color: @day-button;
  color: @day-paragraph;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@day-button, 4%);
    color: @day-title;
  }
}

.button--action {
  background-color: @teal;
  color: @white;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@teal, 4%);
  }
}

.button--action-alt {
  background-color: @dark-2;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@dark-2, 4%);
  }
}

.button--twitch {
  background-color: @twitch;
  color: @white;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@twitch, 4%);
  }
}

.button--yt {
  background-color: @youtube;
  color: @white;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@youtube, 4%);
  }
}

.button--mixer {
  background-color: @mixer;
  color: @white;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@mixer, 4%);
  }
}

.button--facebook {
  background-color: @facebook;
  color: @white;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@facebook, 4%);
  }
}

.button--periscope {
  background-color: @periscope;
  color: @white;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@periscope, 4%);
  }
}

.button--picarto {
  background-color: @picarto;
  color: @white;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@picarto, 4%);
  }
}

.button--warning {
  color: @warning;
  background-color: rgba(251, 72, 76, 0.16);

  &:focus,
  &.is-focused,
  &:hover {
    background-color: rgba(251, 72, 76, 0.32);
  }
}

.button--slobs-download {
  display: flex;
  align-items: center;
  height: auto;
  .padding-h-sides(4);
  .line-height();
  border-radius: 100px;
  font-size: 16px;
  height: 72px;
  .button--action;

  > span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .icon-windows {
    font-size: 16px;
    color: @white;
    margin-left: 40px;
  }
}

.button--editor {
  display: flex;
  align-items: center;
  justify-content: center;

  .fas,
  .far,
  .fab {
    margin-right: 0;
  }

  @media screen and (max-width: 800px) {
    display: inline;
  }
}

.button--full-width {
  width: 100%;
}

.button--subscribe,
.button--paypal {
  display: flex;
  justify-content: space-between;
  text-transform: unset;
  .button--large;
  .button--full-width;
  .button--action;
  .padding-h-sides(4);
}

.button--paypal {
  background-color: @paypal-yellow;

  &:before {
    content: "\f1ed";
    position: absolute;
    font-family: "Font Awesome 5 Brands";
    font-size: 24px;
    color: @white;
  }

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@paypal-yellow, 5%);
  }

  & > span {
    &:first-child {
      margin-top: 0;

      span {
        &:first-child {
          margin-left: 30px;
        }
      }
    }
  }
}

.button--fixed-width {
  width: 96px;
}

.button--navigation {
  background: @day-section;
  color: @day-title;
  height: auto;
  line-height: 24px;
  height: 24px;

  &:hover {
    background: darken(@day-section, 4%);
    color: @day-title;
  }

  .icon-back {
    font-size: 12px;
  }
}

.button--allstars {
  background-color: @yellow;

  &:hover {
    background-color: @yellow;
  }
}

.login-button {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  margin: 6px 10px;
  width: 100%;

  img,
  .fas,
  .far,
  .fab {
    .margin-right();
  }

  img {
    width: 13px;
  }

  .fas,
  .far,
  .fab {
    font-size: 16px;
  }
}

.button-container {
  .button {
    .margin-left(2);
  }
}

.button-container--left {
  .button {
    .margin-right(2);
    .margin-left(@0);
  }
}

.button-group {
  margin-bottom: 0;
  width: 250px;

  .button {
    font-size: 14px;
    float: left;
    margin-left: -1px;
    width: 50%;

    &.active {
      background-color: @dark-2;
      border-color: transparent;
      color: @white;
    }

    &:first-child {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      margin-right: 0;
      border-right: none;
    }

    &:last-child {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }
}

.button--hidden {
  display: none;
}

.button--table {
  line-height: 14px;
}

.button__description {
  font-size: 12px;
  .weight(@normal);
}

.pagination {
  margin-bottom: 0;

  .button {
    display: inline-block;
    padding: 0px @spacing;
    .radius();
    margin-right: 0 !important;
    .button--fixed-width;
  }

  span {
    display: inline-block;
    margin: 0 10px;
  }
}

.inline-button {
  text-transform: capitalize;
  .weight(@medium);
  color: @day-paragraph;
  font-size: 14px;
  .margin-left(2);
  line-height: 22px;
  text-decoration: none;

  &.warn {
    color: @warning;
  }

  &:hover {
    cursor: pointer;
  }

  .fa-times-circle {
    color: @icon;
    font-size: 16px;

    &:hover {
      color: @warning;
    }
  }

  i {
    .margin-right();
  }
}

.inline-button--left {
  .margin-left(@0);
  .margin-right(2);
}

.button--reset-variations {
  margin-top: -36px;
  float: right;
}

.night {
  .button {
    &:focus,
    &.is-focused {
      background: lighten(@night-button, 4%);
    }
  }

  .button--default {
    color: @night-title;
    border-color: @night-button;
    background: @night-button;

    &:focus,
    &.is-focused,
    &:hover {
      background: lighten(@night-button, 4%);
    }
  }

  .button--action {
    &:focus,
    &.is-focused,
    &:hover {
      background: lighten(@teal, 4%);
    }
  }

  .button--warning {
    &:focus,
    &.is-focused,
    &:hover {
      background-color: rgba(251, 72, 76, 0.32);
    }
  }

  .button--navigation {
    background: @night-button;
    color: @night-title;

    &:focus,
    &.is-focused,
    &:hover {
      background: lighten(@night-button, 4%);
      color: @night-title;
    }
  }

  .button-group {
    .button {
      &.active {
        background-color: @dark-2;
        border-color: transparent;
        color: @teal;
      }
    }
  }

  .button--sqr {
    background: @night-button;
    color: @night-title;
  }

  .button--twitch {
    background-color: @twitch;
    color: @white;

    &:focus,
    &.is-focused,
    &:hover {
      background-color: lighten(@twitch, 4%);
    }
  }

  .button--yt {
    background-color: @youtube;
    color: @white;

    &:focus,
    &.is-focused,
    &:hover {
      background-color: lighten(@youtube, 4%);
    }
  }

  .button--mixer {
    background-color: @mixer;
    color: @white;

    &:focus,
    &.is-focused,
    &:hover {
      background-color: lighten(@mixer, 4%);
    }
  }

  .button--fb {
    background-color: @facebook;
    color: @white;

    &:focus,
    &.is-focused,
    &:hover {
      background-color: lighten(@facebook, 4%);
    }
  }

  .button--periscope {
    background-color: @periscope;
    color: @white;

    &:focus,
    &.is-focused,
    &:hover {
      background-color: lighten(@periscope, 4%);
    }
  }

  .button--picarto {
    background-color: @picarto;
    color: @white;

    &:focus,
    &.is-focused,
    &:hover {
      background-color: lighten(@picarto, 4%);
    }
  }

  .inline-button {
    color: @white;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
</style>
