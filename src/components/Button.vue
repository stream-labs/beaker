<template>
  <component
    :icon="icon"
    :icon-img="iconImg"
    :title="title"
    :price="price"
    :description="description"
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
    class="s-button ripple"
    :class="[buttonClasses, { 'ripple-animate': rippleAnimate }]"
    :disabled="state === 'disabled' || state === 'loading'"
    @click="$emit('click')"
    :target="target"
    @mousedown="pressDown"
    :style="buttonStyle"
  >
    <span>
      <span>
        <span v-if="variation === 'prime-simple' && this.primeTitle">{{primeTitle}}</span>
        <span v-else-if="variation === 'prime-simple'" class="prime-simple">
          Free with
          <span class="prime-simple__italic">Prime</span>
        </span>
        <i v-if="iconClass && iconPosition === 'left'" :class="iconClass"></i>
        <i v-if="iconImg" class="icon-img">
          <img :src="iconImg" :alt="`${title} Icon Image`" />
        </i>
        {{ title }}
      </span>
      <span v-if="description" class="s-button__description">{{ description }}</span>
      <i v-if="iconClass && iconPosition === 'right'" :class="['icon--right', iconClass]"></i>
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
  bgColor!: {
    type: string;
  };

  @Prop()
  textColor!: {
    type: string;
  };

  @Prop(String)
  icon!: string;

  @Prop({ default: "left" })
  iconPosition!: {
    type: String;
  };

  @Prop()
  iconImg!: {
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

  @Prop({ default: "_self" })
  target!: String;

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

  @Prop()
  primeBgColor!: {
    type: String;
    default: null;
  };

  @Prop()
  primeTitle!: {
    type: String;
    default: null;
  };

  private rippleStartX = 0;
  private rippleStartY = 0;
  private rippleSize = 0;
  private rippleColor = "#000000";
  private rippleOpacity = 0.075;
  private rippleDuration = "";
  private rippleAnimate = false;

  get buttonClasses() {
    const classes: any = [];

    if (this.variation) {
      classes.push(`s-button--${this.variation}`);
    }

    if (this.size) {
      classes.push(`s-button--${this.size}`);
    }

    if (this.state) {
      classes.push(`is-${this.state}`);
    }

    if (this.primeBgColor) {
      classes.push(`prime--${this.primeBgColor}`);
    }

    return classes.join(" ");
  }

  get iconClass() {
    const classes: any = [];

    if (this.icon) {
      if (this.icon.indexOf("fa-") !== -1) {
        classes.push(this.icon);
      } else {
        classes.push(`icon-${this.icon}`);
      }
    }

    return classes.join(" ");
  }

  get buttonStyle() {
    let s =
      "--ripple-x:" +
      this.rippleStartX +
      "px; --ripple-y:" +
      this.rippleStartY +
      "px; --ripple-size:" +
      this.rippleSize +
      "px; --ripple-color:" +
      this.rippleColor +
      "; --ripple-opacity:" +
      this.rippleOpacity +
      "; --ripple-duration:" +
      this.rippleDuration +
      "; background-color:" +
      this.bgColor +
      "; color:" +
      this.textColor;
    ";";
    return s;
  }

  rippleAnimation() {
    return new Promise(resolve => {
      this.rippleAnimate = true;
      let animationEnded = e => {
        this.$el.removeEventListener("animationnend", animationEnded);
        resolve();
      };
      this.$el.addEventListener("animationend", animationEnded);
    });
  }

  pressDown(e) {
    let buttonRect = this.$el.getBoundingClientRect();
    let clickLoc = { x: e.pageX, y: e.pageY };
    let buttonVar = JSON.stringify(this.variation);
    let buttonSize = JSON.stringify(this.size);
    this.rippleSize = Math.floor(buttonRect.width * 2);
    this.rippleStartX = Math.floor(
      Math.abs(buttonRect.left - clickLoc.x) - this.rippleSize / 2
    );
    this.rippleStartY = Math.floor(
      Math.abs(buttonRect.top - clickLoc.y) - this.rippleSize / 2
    );

    if (buttonVar === '"paypal"') {
      this.rippleColor = "#e3b63b";
      this.rippleDuration = "800ms";
      this.rippleOpacity = 0.5;
    }
    if (buttonVar === '"warning"') {
      this.rippleColor = "#ce4a38";
    }
    if (
      buttonVar === '"subscribe"' ||
      buttonSize === '"full-width"' ||
      buttonVar === '"paypal"'
    ) {
      this.rippleDuration = "800ms";
    } else {
      this.rippleDuration = "400ms";
    }

    if (!this.rippleAnimate) {
      this.rippleAnimation().then(() => (this.rippleAnimate = false));
    }
  }
}
</script>

<style lang="less">
.s-button-container {
  display: flex;
  flex-wrap: wrap;
}
</style>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-button {
  position: relative;
  display: inline-block;
  height: 40px;
  .input-padding();
  border: 1px solid transparent;
  .radius();
  font-family: "Roboto";
  font-size: 14px;
  .weight(@medium);
  text-align: center;
  line-height: 38px;
  text-decoration: none !important;
  text-transform: capitalize;
  background: @day-button;
  color: @day-paragraph;
  vertical-align: middle;
  -webkit-user-select: none;
  -ms-user-select: none;
  white-space: nowrap;
  overflow: hidden;
  .transition();
  outline: none !important;

  * {
    z-index: 5;
  }

  i {
    .margin-right();
    color: inherit;
  }

  .icon-img {
    display: flex;
    align-items: center;
    width: 14px;
  }

  .icon--right {
    .margin-right(0);
    .margin-left(3);
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: opacity 275ms ease;
  }

  &:focus,
  &.is-focused {
    outline: transparent dotted 2px;
  }

  &[disabled]:not(.is-loading),
  &.is-disabled {
    background-color: @day-button!important;
    color: @light-4!important;
    cursor: not-allowed;
  }

  &.is-loading {
    cursor: not-allowed;

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

  &.ripple {
    &.ripple-animate {
      &:after {
        animation: s-ripple var(--ripple-duration, 400);
      }
    }
    &:after {
      content: "";
      position: absolute;
      top: var(--ripple-y, 0);
      left: var(--ripple-x, 0);
      width: var(--ripple-size, 0);
      height: var(--ripple-size, 0);
      border-radius: var(--ripple-size, 0);
      background-color: var(--ripple-color, #000000);
      opacity: 0;
      z-index: 2;
    }
  }
}

.s-button--small {
  height: 32px;
  .padding-h-sides();
  line-height: 30px;

  .fas,
  .far,
  .fab {
    .margin-right();
  }
}

.s-button--large {
  height: 64px;
  padding: 0px 64px;
  border-radius: 32px;
  font-size: 16px;
  line-height: 62px;

  .fas,
  .far,
  .fab {
    .margin-right();
  }
}

.s-button--square {
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

.s-button--default {
  background-color: @day-button;
  color: @day-paragraph;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@day-button, 4%);
    color: @day-title;
  }
}

.s-button--action {
  background-color: @teal;
  color: @white;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@teal, 4%);
    color: @white;
  }
}

.s-button--action-alt {
  background-color: @dark-2;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@dark-2, 4%);
  }
}

.s-button--twitch {
  background-color: @twitch;
  color: @white;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@twitch, 4%);
  }
}

.s-button--youtube {
  background-color: @youtube;
  color: @white;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@youtube, 4%);
  }
}

.s-button--mixer {
  background-color: @mixer;
  color: @white;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@mixer, 4%);
  }
}

.s-button--facebook {
  background-color: @facebook;
  color: @white;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@facebook, 4%);
  }
}

.s-button--periscope {
  background-color: @periscope;
  color: @white;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@periscope, 4%);
  }
}

.s-button--picarto {
  background-color: @picarto;
  color: @white;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@picarto, 4%);
  }
}

.s-button--warning {
  color: @warning;
  background-color: rgba(251, 72, 76, 0.16);

  &:focus,
  &.is-focused,
  &:hover {
    background-color: rgba(251, 72, 76, 0.32);
  }
}

.s-button--slobs-download {
  display: flex;
  align-items: center;
  height: auto;
  .padding-h-sides(4);
  .line-height();
  border-radius: 100px;
  font-size: 16px;
  height: 72px;
  .s-button--action;

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

.s-button--editor {
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

.s-button--full-width {
  width: 100%;
}

.s-button--subscribe,
.s-button--paypal,
.s-button--paypal-blue {
  display: flex;
  justify-content: space-between;
  text-transform: unset;
  .s-button--large;
  .s-button--full-width;
  .s-button--action;
  .padding-h-sides(4);
}

.s-button--paypal,
.s-button--paypal-blue {
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

.s-button--paypal-blue {
  background-color: @paypal;
  color: @white;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@paypal, 4%);
  }
}

.s-button--fixed-width {
  width: 96px;
}

.s-button--navigation {
  background: @day-section;
  color: @day-title;
  height: auto;
  line-height: 22px;
  height: 24px;

  &:hover {
    background: darken(@day-section, 4%);
    color: @day-title;
  }

  .icon-back {
    font-size: 12px;
  }
}

.s-button--allstars {
  background-color: @yellow;

  &:hover {
    background-color: @yellow;
  }
}

.s-login-button {
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

.s-button-container {
  .s-button {
    .margin-left(2);
  }
}

.s-button-container--left {
  .s-button {
    .margin-right(2);
    .margin-left(@0);
  }
}

.s-button-group {
  margin-bottom: 0;
  width: 250px;

  .s-button {
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

.s-button--link {
  background-color: transparent;
  padding: 0;
  text-decoration: underline !important;
  height: auto;
  line-height: inherit;

  &:hover,
  &:focus {
    background-color: transparent;
    outline: none;
  }
}

.s-button--hidden {
  display: none;
}

.s-button--table {
  line-height: 14px;
}

.s-button__description {
  font-size: 12px;
  .weight(@normal);
  .margin-top(0.5);
}

.s-pagination {
  margin-bottom: 0;

  .s-button {
    display: inline-block;
    padding: 0px @spacing;
    .radius();
    margin-right: 0 !important;
    .s-button--fixed-width;
  }

  span {
    display: inline-block;
    margin: 0 10px;
  }
}

.s-button--reset-variations {
  margin-top: -36px;
  float: right;
}

.s-button--prime {
  background-color: @prime;
  color: @white;
  border-radius: 100px;
  .padding-h-sides(3);
  border: 0;
  font-weight: 900;
  font-style: italic;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@prime, 4%);
  }

  .icon-prime {
    font-size: 20px;
    position: absolute;
    left: 0;
    bottom: -4px;

    &::before {
      color: @white;
    }
  }
}

.prime--white {
  background: @white;
  color: @prime;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@white, 4%);
  }

  .icon-prime {
    &::before {
      color: @prime;
    }
  }
}

.s-button--prime-simple {
  background: @prime;
  color: @white;

  &:focus,
  &.is-focused,
  &:hover {
    background-color: darken(@prime, 4%);
  }

  .prime-simple {
    text-transform: none;
  }

  .prime-simple__italic {
    font-weight: 900;
    font-style: italic;
    .margin-left(0.5);
  }
}

.s-button--prime.s-button--large {
  padding: 0px 64px;

  .icon-prime {
    font-size: 41px;
    position: absolute;
    left: -6px;
    bottom: -9px;
  }
}

.s-button--rewards-standard,
.s-button--rewards-silver,
.s-button--rewards-gold,
.s-button--rewards-platinum,
.s-button--rewards-diamond,
.s-button--rewards-legend {
  background-color: transparent;
  border: 1px solid @day-all-stars-gold;
  color: @day-all-stars-gold !important;
}

.s-button--rewards-silver {
  border-color: @day-all-stars-silver;
  color: @dark-5 !important;
}

.s-button--rewards-platinum {
  border-color: @day-all-stars-platinum;
  color: @dark-4 !important;
}

.s-button--rewards-diamond {
  border-color: @day-all-stars-diamond;
  color: @day-all-stars-diamond !important;
}

.s-button--rewards-legend {
  border-color: @day-all-stars-legend;
  color: @day-all-stars-legend !important;
}

.night {
  .s-button {
    &:focus,
    &.is-focused {
      background: lighten(@night-button, 4%);
    }

    &[disabled]:not(.is-loading),
    &.is-disabled {
      background-color: @dark-4!important;
      color: @dark-5!important;
      border-color: @dark-4;
    }
  }

  .s-button--default {
    color: @night-title;
    background: @night-button;

    &:focus,
    &.is-focused,
    &:hover {
      background: lighten(@night-button, 4%);
      color: @night-title;
    }
  }

  .s-button--action,
  .s-button--slobs-download {
    color: @night-title;

    &:focus,
    &.is-focused,
    &:hover {
      background: lighten(@teal, 4%);
      color: @night-title;
    }
  }

  .s-button--warning {
    color: @warning;

    &:focus,
    &.is-focused,
    &:hover {
      background-color: rgba(251, 72, 76, 0.32);
      color: @warning;
    }
  }

  .s-button--navigation {
    background: @night-button;
    color: @night-title;

    &:focus,
    &.is-focused,
    &:hover {
      background: lighten(@night-button, 4%);
      color: @night-title;
    }
  }

  .s-button-group {
    .s-button {
      &.active {
        background-color: @dark-2;
        border-color: transparent;
        color: @teal;
      }
    }
  }

  .s-button--sqr {
    background: @night-button;
    color: @night-title;
  }

  .s-button--twitch {
    background-color: @twitch;
    color: @night-title;

    &:focus,
    &.is-focused,
    &:hover {
      background-color: lighten(@twitch, 4%);
      color: @night-title;
    }
  }

  .s-button--youtube {
    background-color: @youtube;
    color: @night-title;

    &:focus,
    &.is-focused,
    &:hover {
      background-color: lighten(@youtube, 4%);
      color: @night-title;
    }
  }

  .s-button--mixer {
    background-color: @mixer;
    color: @night-title;

    &:focus,
    &.is-focused,
    &:hover {
      background-color: lighten(@mixer, 4%);
      color: @night-title;
    }
  }

  .s-button--fb {
    background-color: @facebook;
    color: @night-title;

    &:focus,
    &.is-focused,
    &:hover {
      background-color: lighten(@facebook, 4%);
      color: @night-title;
    }
  }

  .s-button--periscope {
    background-color: @periscope;
    color: @night-title;

    &:focus,
    &.is-focused,
    &:hover {
      background-color: lighten(@periscope, 4%);
      color: @night-title;
    }
  }

  .s-button--picarto {
    background-color: @picarto;
    color: @night-title;

    &:focus,
    &.is-focused,
    &:hover {
      background-color: lighten(@picarto, 4%);
      color: @night-title;
    }
  }

  .s-button--prime {
    &:focus,
    &.is-focused,
    &:hover {
      background-color: lighten(@prime, 4%);
    }
  }

  .s-button--prime-simple {
    &:focus,
    &.is-focused,
    &:hover {
      background-color: lighten(@prime, 4%);
    }
  }

  .prime--white {
    &:focus,
    &.is-focused,
    &:hover {
      background-color: lighten(@white, 4%);
    }
  }

  .s-button--link {
    color: @night-paragraph;
  }

  .s-button--rewards-standard,
  .s-button--rewards-silver,
  .s-button--rewards-gold,
  .s-button--rewards-platinum,
  .s-button--rewards-diamond,
  .s-button--rewards-legend {
    &:focus {
      background-color: transparent;
    }
  }

  .s-button--rewards-silver {
    border-color: @night-all-stars-silver;
    color: @night-all-stars-silver !important;
  }

  .s-button--rewards-platinum {
    border-color: @night-all-stars-platinum;
    color: @night-all-stars-platinum !important;
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

@keyframes s-ripple {
  0% {
    animation-timing-function: linear;
    transform: scale(0.15);
    opacity: 0;
  }
  15% {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    opacity: var(--ripple-opacity, 0.3);
  }
  70% {
    transform: scale(1);
  }
  80% {
    animation-timing-function: linear;
  }
  100% {
    opacity: 0;
  }
}
</style>
