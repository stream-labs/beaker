var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index.4fb8a6cb.js";
import { B as Button } from "./Button.b26dacc2.js";
import { B as Badge } from "./Badge.2c39dd0d.js";
import { S as Spinner } from "./Spinner.2fef2c20.js";
import { V as VModal } from "./index.3042f557.js";
var __defProp$8 = Object.defineProperty;
var __getOwnPropDesc$8 = Object.getOwnPropertyDescriptor;
var __decorateClass$8 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$8(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$8(target, key, result);
  return result;
};
let ModalBasic$1 = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "name");
    __publicField(this, "width");
    __publicField(this, "minWidth");
    __publicField(this, "title");
    __publicField(this, "subTitle");
    __publicField(this, "text");
    __publicField(this, "hideActionButtons");
    __publicField(this, "confirmButtonText");
    __publicField(this, "clickToClose");
  }
};
__decorateClass$8([
  Prop()
], ModalBasic$1.prototype, "name", 2);
__decorateClass$8([
  Prop({ default: 600 })
], ModalBasic$1.prototype, "width", 2);
__decorateClass$8([
  Prop({ default: 600 })
], ModalBasic$1.prototype, "minWidth", 2);
__decorateClass$8([
  Prop()
], ModalBasic$1.prototype, "title", 2);
__decorateClass$8([
  Prop()
], ModalBasic$1.prototype, "subTitle", 2);
__decorateClass$8([
  Prop()
], ModalBasic$1.prototype, "text", 2);
__decorateClass$8([
  Prop()
], ModalBasic$1.prototype, "hideActionButtons", 2);
__decorateClass$8([
  Prop({ default: "Confirm" })
], ModalBasic$1.prototype, "confirmButtonText", 2);
__decorateClass$8([
  Prop({ default: true })
], ModalBasic$1.prototype, "clickToClose", 2);
ModalBasic$1 = __decorateClass$8([
  Component({
    components: {
      Button
    }
  })
], ModalBasic$1);
const ModalBasic_vue_vue_type_style_index_0_scoped_afd2da20_lang = "";
var _sfc_render$8 = function render() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("modal", _vm._g({ attrs: { "name": _vm.name, "classes": "s-modal-wrapper", "maxWidth": _vm.width, "minWidth": _vm.minWidth, "height": "auto", "adaptive": true, "clickToClose": _vm.clickToClose } }, _vm.$listeners), [_c("div", { staticClass: "s-modal-container" }, [_c("div", { staticClass: "s-modal-body" }, [_c("div", { staticClass: "s-normal-upper" }, [!!_vm.title ? _c("h1", { staticClass: "s-modal-title" }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), !!_vm.subTitle ? _c("h2", { staticClass: "s-modal-sub-title" }, [_vm._v(_vm._s(_vm.subTitle))]) : _vm._e(), !!_vm.text ? _c("p", { staticClass: "s-modal-text" }, [_vm._v(_vm._s(_vm.text))]) : _vm._e(), _vm._t("default")], 2)]), !_vm.hideActionButtons && _vm.hideActionButtons !== "" ? _c("div", { staticClass: "s-modal-footer" }, [_c("div", { staticClass: "s-modal-footer-inner s-button-container" }, [_c("Button", { attrs: { "variation": "default", "title": "Close", "size": "fixed-width" }, on: { "click": function($event) {
    return _vm.$modal.hide(_vm.name);
  } } }), _c("Button", { attrs: { "variation": "action", "title": _vm.confirmButtonText, "size": "fixed-width" }, on: { "click": function($event) {
    return _vm.$emit("confirm");
  } } })], 1)]) : _vm._e()])]);
};
var _sfc_staticRenderFns$8 = [];
var __component__$8 = /* @__PURE__ */ normalizeComponent(
  ModalBasic$1,
  _sfc_render$8,
  _sfc_staticRenderFns$8,
  false,
  null,
  "afd2da20",
  null,
  null
);
const ModalBasic = __component__$8.exports;
var __defProp$7 = Object.defineProperty;
var __getOwnPropDesc$7 = Object.getOwnPropertyDescriptor;
var __decorateClass$7 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$7(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$7(target, key, result);
  return result;
};
let ModalSubscribe$1 = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "name");
    __publicField(this, "width");
    __publicField(this, "minWidth");
    __publicField(this, "scrollable");
    __publicField(this, "title");
    __publicField(this, "subTitle");
    __publicField(this, "text");
    __publicField(this, "notes");
    __publicField(this, "subscribeText");
    __publicField(this, "subscribeMessage");
    __publicField(this, "proBadge");
    __publicField(this, "customPreview");
    __publicField(this, "buttonTitle");
    __publicField(this, "buttonPrice");
    __publicField(this, "buttonVariation");
    __publicField(this, "cancelTitle");
  }
};
__decorateClass$7([
  Prop()
], ModalSubscribe$1.prototype, "name", 2);
__decorateClass$7([
  Prop({ default: 600 })
], ModalSubscribe$1.prototype, "width", 2);
__decorateClass$7([
  Prop({ default: 600 })
], ModalSubscribe$1.prototype, "minWidth", 2);
__decorateClass$7([
  Prop({ default: false })
], ModalSubscribe$1.prototype, "scrollable", 2);
__decorateClass$7([
  Prop()
], ModalSubscribe$1.prototype, "title", 2);
__decorateClass$7([
  Prop()
], ModalSubscribe$1.prototype, "subTitle", 2);
__decorateClass$7([
  Prop()
], ModalSubscribe$1.prototype, "text", 2);
__decorateClass$7([
  Prop()
], ModalSubscribe$1.prototype, "notes", 2);
__decorateClass$7([
  Prop()
], ModalSubscribe$1.prototype, "subscribeText", 2);
__decorateClass$7([
  Prop()
], ModalSubscribe$1.prototype, "subscribeMessage", 2);
__decorateClass$7([
  Prop({ default: true })
], ModalSubscribe$1.prototype, "proBadge", 2);
__decorateClass$7([
  Prop({ default: false })
], ModalSubscribe$1.prototype, "customPreview", 2);
__decorateClass$7([
  Prop({ default: "Subscribe with PayPal" })
], ModalSubscribe$1.prototype, "buttonTitle", 2);
__decorateClass$7([
  Prop({ default: "$5.99/mo" })
], ModalSubscribe$1.prototype, "buttonPrice", 2);
__decorateClass$7([
  Prop({ default: "subscribe" })
], ModalSubscribe$1.prototype, "buttonVariation", 2);
__decorateClass$7([
  Prop({ default: "Cancel" })
], ModalSubscribe$1.prototype, "cancelTitle", 2);
ModalSubscribe$1 = __decorateClass$7([
  Component({
    components: {
      Button,
      Badge
    }
  })
], ModalSubscribe$1);
const __$_require_2eac600c__ = "/beaker/assets/girl.35b949c7.svg";
const ModalSubscribe_vue_vue_type_style_index_0_scoped_a4f72685_lang = "";
var _sfc_render$7 = function render2() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("modal", _vm._g({ attrs: { "name": _vm.name, "classes": "s-modal-wrapper", "maxWidth": _vm.width, "minWidth": _vm.minWidth, "height": "auto", "adaptive": true, "scrollable": _vm.scrollable } }, _vm.$listeners), [_c("div", { staticClass: "s-modal-container" }, [_c("div", { staticClass: "s-subscribe-icon-box" }, [_c("i", { staticClass: "icon-close", on: { "click": function($event) {
    return _vm.$modal.hide(_vm.name);
  } } })]), _c("div", { staticClass: "s-subscribe-upper" }, [_c("div", { staticClass: "s-subscribe-title-box" }, [_c("h1", { staticClass: "s-modal-title" }, [_vm._v(_vm._s(_vm.title))]), _vm.proBadge ? _c("badge", { attrs: { "align-left": true } }, [_vm._v("Pro")]) : _vm._e()], 1), _c("h2", { staticClass: "s-modal-sub-title" }, [_vm._v(_vm._s(_vm.subTitle))])]), _c("div", { staticClass: "s-subscribe-body" }, [_vm.customPreview ? _c("div", { staticClass: "s-subscribe-box" }, [_vm._t("preview")], 2) : _c("div", { staticClass: "s-subscribe-box" }, [_c("p", { staticClass: "s-subscribe-text" }, [_vm._v(_vm._s(_vm.subscribeText))]), _c("p", { staticClass: "s-subscribe-message" }, [_vm._v(" " + _vm._s(_vm.subscribeMessage) + " "), _c("span", { staticClass: "s-subscribe-icon" }, [_c("img", { attrs: { "src": __$_require_2eac600c__ } })])])])]), _c("div", { staticClass: "s-subscribe-bottom" }, [_vm.text ? _c("p", { staticClass: "s-modal-text s-modal-text-subscribe" }, [_vm._v(" " + _vm._s(_vm.text) + " ")]) : _vm._t("default"), _c("div", { staticClass: "s-button-subscribe" }, [_c("Button", { attrs: { "variation": _vm.buttonVariation, "title": _vm.buttonTitle, "price": _vm.buttonPrice }, on: { "click": function($event) {
    return _vm.$emit("subscribe-click");
  } } }), _c("span", { staticClass: "s-button-cancel", on: { "click": function($event) {
    return _vm.$emit("cancel-click");
  } } }, [_vm._v(_vm._s(_vm.cancelTitle))])], 1), _c("p", { staticClass: "s-modal-notes" }, [_vm._v(_vm._s(_vm.notes))])], 2)])]);
};
var _sfc_staticRenderFns$7 = [];
var __component__$7 = /* @__PURE__ */ normalizeComponent(
  ModalSubscribe$1,
  _sfc_render$7,
  _sfc_staticRenderFns$7,
  false,
  null,
  "a4f72685",
  null,
  null
);
const ModalSubscribe = __component__$7.exports;
var __defProp$6 = Object.defineProperty;
var __getOwnPropDesc$6 = Object.getOwnPropertyDescriptor;
var __decorateClass$6 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$6(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$6(target, key, result);
  return result;
};
let ModalRedirect$1 = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "name");
    __publicField(this, "width");
    __publicField(this, "minWidth");
    __publicField(this, "title");
    __publicField(this, "text");
  }
};
__decorateClass$6([
  Prop()
], ModalRedirect$1.prototype, "name", 2);
__decorateClass$6([
  Prop({ default: 600 })
], ModalRedirect$1.prototype, "width", 2);
__decorateClass$6([
  Prop({ default: 600 })
], ModalRedirect$1.prototype, "minWidth", 2);
__decorateClass$6([
  Prop()
], ModalRedirect$1.prototype, "title", 2);
__decorateClass$6([
  Prop()
], ModalRedirect$1.prototype, "text", 2);
ModalRedirect$1 = __decorateClass$6([
  Component({
    components: {
      Button,
      Spinner
    }
  })
], ModalRedirect$1);
const ModalRedirect_vue_vue_type_style_index_0_scoped_394d1a8e_lang = "";
var _sfc_render$6 = function render3() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("modal", _vm._g({ attrs: { "name": _vm.name, "classes": "s-modal-wrapper", "maxWidth": _vm.width, "minWidth": _vm.minWidth, "height": "auto", "adaptive": true } }, _vm.$listeners), [_c("div", { staticClass: "s-modal-container" }, [_c("div", { staticClass: "s-redirect" }, [_c("div", { staticClass: "s-spinner" }, [_c("Spinner", { attrs: { "variation": "bars" } })], 1), _c("h1", { staticClass: "s-modal-title" }, [_vm._v(_vm._s(_vm.title))]), _c("p", { staticClass: "s-modal-text" }, [_vm._v(_vm._s(_vm.text))])])])]);
};
var _sfc_staticRenderFns$6 = [];
var __component__$6 = /* @__PURE__ */ normalizeComponent(
  ModalRedirect$1,
  _sfc_render$6,
  _sfc_staticRenderFns$6,
  false,
  null,
  "394d1a8e",
  null,
  null
);
const ModalRedirect = __component__$6.exports;
var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __decorateClass$5 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$5(target, key, result);
  return result;
};
let ModalConfirmation$1 = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "name");
    __publicField(this, "width");
    __publicField(this, "minWidth");
    __publicField(this, "subTitle");
    __publicField(this, "text");
    __publicField(this, "confirmButtonText");
    __publicField(this, "buttonVariation");
  }
  onConfirmHandler() {
    this.$emit("confirm");
    this.$modal.hide(this.name);
  }
};
__decorateClass$5([
  Prop({ default: "modal-confirmation" })
], ModalConfirmation$1.prototype, "name", 2);
__decorateClass$5([
  Prop({ default: 600 })
], ModalConfirmation$1.prototype, "width", 2);
__decorateClass$5([
  Prop({ default: 600 })
], ModalConfirmation$1.prototype, "minWidth", 2);
__decorateClass$5([
  Prop()
], ModalConfirmation$1.prototype, "subTitle", 2);
__decorateClass$5([
  Prop()
], ModalConfirmation$1.prototype, "text", 2);
__decorateClass$5([
  Prop({ default: "Confirm" })
], ModalConfirmation$1.prototype, "confirmButtonText", 2);
__decorateClass$5([
  Prop({ default: "warning" })
], ModalConfirmation$1.prototype, "buttonVariation", 2);
ModalConfirmation$1 = __decorateClass$5([
  Component({
    components: {
      Button
    }
  })
], ModalConfirmation$1);
const ModalConfirmation_vue_vue_type_style_index_0_scoped_02dc9da2_lang = "";
var _sfc_render$5 = function render4() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("modal", _vm._g({ attrs: { "name": _vm.name, "classes": "s-modal-wrapper", "maxWidth": _vm.width, "minWidth": _vm.minWidth, "height": "auto", "adaptive": true } }, _vm.$listeners), [_c("div", { staticClass: "s-modal-container" }, [_c("div", { staticClass: "s-confirmation" }, [_c("h2", { staticClass: "s-modal-sub-title" }, [_vm._v(_vm._s(_vm.subTitle))]), _c("p", { staticClass: "s-modal-text" }, [_vm._v(_vm._s(_vm.text))]), _c("div", { staticClass: "s-button-container" }, [_c("Button", { attrs: { "variation": "default", "title": "Cancel", "size": "fixed-width" }, on: { "click": function($event) {
    return _vm.$modal.hide(_vm.name);
  } } }), _c("Button", { attrs: { "variation": _vm.buttonVariation, "title": _vm.confirmButtonText, "size": "fixed-width" }, on: { "click": _vm.onConfirmHandler } })], 1)])])]);
};
var _sfc_staticRenderFns$5 = [];
var __component__$5 = /* @__PURE__ */ normalizeComponent(
  ModalConfirmation$1,
  _sfc_render$5,
  _sfc_staticRenderFns$5,
  false,
  null,
  "02dc9da2",
  null,
  null
);
const ModalConfirmation = __component__$5.exports;
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$4(target, key, result);
  return result;
};
let WelcomePrime$1 = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "primeButtonText");
    __publicField(this, "primeFeatureListDefault", [
      "100s of Stunning Themes",
      "Every App is FREE",
      "Merch Store with Wholesale Pricing",
      "Custom Web Domain and Email Address",
      "Automatic Gold All-Star Status"
    ]);
    __publicField(this, "isUserAgentEdge", false);
  }
  onPrimeButtonHandler() {
    this.$emit("onClickPrime");
  }
  mounted() {
    navigator.userAgent.indexOf("Edge") !== -1 ? this.isUserAgentEdge = true : this.isUserAgentEdge = false;
  }
  get hasSlot() {
    return !(typeof this.$slots.default === "undefined");
  }
};
__decorateClass$4([
  Prop({ default: "Continue" })
], WelcomePrime$1.prototype, "primeButtonText", 2);
WelcomePrime$1 = __decorateClass$4([
  Component({
    components: {
      "s-button": Button
    }
  })
], WelcomePrime$1);
const WelcomePrime_vue_vue_type_style_index_0_scoped_bebc36e1_lang = "";
var _sfc_render$4 = function render5() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("div", { staticClass: "s-modal-welcome-prime" }, [_c("div", { staticClass: "modal-prime" }, [!_vm.isUserAgentEdge ? _c("div", [_c("video", { staticClass: "modal-prime__video", attrs: { "loop": "", "muted": "", "autoplay": "" }, domProps: { "muted": true } }, [_c("source", { attrs: { "src": "https://cdn.streamlabs.com/videos/Welcome_Confetti_Gold_1.webm", "type": "video/webm" } })])]) : _vm._e(), _vm._m(0), _c("p", { staticClass: "modal-prime__desc" }, [_vm._v("You just unlocked a TON of benefits")]), _c("div", { staticClass: "modal-prime__images" }), _c("div", { staticClass: "modal-prime__features" }, [_c("p", [_vm._v("Just a few of your exclusive features and services:")]), _c("ul", _vm._l(_vm.primeFeatureListDefault, function(feature, index) {
    return _c("li", { key: index }, [_vm._v(" " + _vm._s(feature) + " ")]);
  }), 0)]), _c("div", { staticClass: "modal-prime__button" }, [_vm.hasSlot ? _vm._t("default") : _c("s-button", { attrs: { "size": "large", "variation": "prime", "icon": "prime", "title": _vm.primeButtonText }, on: { "click": _vm.onPrimeButtonHandler } })], 2)])]);
};
var _sfc_staticRenderFns$4 = [function() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("div", { staticClass: "modal-prime__heading" }, [_vm._v(" Welcome to "), _c("span", [_vm._v("Prime")]), _vm._v(" ! ")]);
}];
var __component__$4 = /* @__PURE__ */ normalizeComponent(
  WelcomePrime$1,
  _sfc_render$4,
  _sfc_staticRenderFns$4,
  false,
  null,
  "bebc36e1",
  null,
  null
);
const WelcomePrime = __component__$4.exports;
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$3(target, key, result);
  return result;
};
let ModalPrime$1 = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "name");
    __publicField(this, "width");
    __publicField(this, "minWidth");
    __publicField(this, "hasPrimeCloseButton");
    __publicField(this, "primeButtonText");
  }
};
__decorateClass$3([
  Prop({ default: "modal-welcome-prime" })
], ModalPrime$1.prototype, "name", 2);
__decorateClass$3([
  Prop()
], ModalPrime$1.prototype, "width", 2);
__decorateClass$3([
  Prop()
], ModalPrime$1.prototype, "minWidth", 2);
__decorateClass$3([
  Prop({ default: false })
], ModalPrime$1.prototype, "hasPrimeCloseButton", 2);
__decorateClass$3([
  Prop({ default: "Continue" })
], ModalPrime$1.prototype, "primeButtonText", 2);
ModalPrime$1 = __decorateClass$3([
  Component({
    components: {
      WelcomePrime
    }
  })
], ModalPrime$1);
const ModalPrime_vue_vue_type_style_index_0_scoped_77ae9e88_lang = "";
var _sfc_render$3 = function render6() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("modal", _vm._g({ attrs: { "name": _vm.name, "classes": "s-modal-wrapper", "width": _vm.width, "minWidth": _vm.minWidth, "height": "auto", "adaptive": true } }, _vm.$listeners), [_vm.hasPrimeCloseButton ? _c("div", { staticClass: "modal-prime__close" }, [_c("i", { staticClass: "icon-close", on: { "click": function($event) {
    return _vm.$modal.hide(_vm.name);
  } } })]) : _vm._e(), _c("welcome-prime", _vm._g({ attrs: { "primeButtonText": _vm.primeButtonText } }, _vm.$listeners), [_vm._t("default")], 2)], 1);
};
var _sfc_staticRenderFns$3 = [];
var __component__$3 = /* @__PURE__ */ normalizeComponent(
  ModalPrime$1,
  _sfc_render$3,
  _sfc_staticRenderFns$3,
  false,
  null,
  "77ae9e88",
  null,
  null
);
const ModalPrime = __component__$3.exports;
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$2(target, key, result);
  return result;
};
let PrimeIntro$1 = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "primeButtonText");
  }
  onPrimeButtonHandler() {
    this.$emit("onClickPrime");
  }
  get hasTitleSlot() {
    return !(typeof this.$slots.title === "undefined");
  }
  get hasSubtitleSlot() {
    return !(typeof this.$slots.subtitle === "undefined");
  }
  get hasSlot() {
    return !(typeof this.$slots.default === "undefined");
  }
};
__decorateClass$2([
  Prop({ default: "Join Prime" })
], PrimeIntro$1.prototype, "primeButtonText", 2);
PrimeIntro$1 = __decorateClass$2([
  Component({
    components: {
      "s-button": Button
    }
  })
], PrimeIntro$1);
const PrimeIntro_vue_vue_type_style_index_0_scoped_a352e48b_lang = "";
var _sfc_render$2 = function render7() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("div", { staticClass: "s-modal-prime-intro" }, [_c("img", { staticClass: "modal-prime-intro__bg modal-prime-intro__bg--components", attrs: { "src": "https://cdn.streamlabs.com/static/imgs/prime/prime-intro-modal-bg-components.png" } }), _c("img", { staticClass: "modal-prime-intro__bg modal-prime-intro__bg--star", attrs: { "src": "https://cdn.streamlabs.com/static/imgs/prime/prime-intro-modal-bg-star.png" } }), _c("div", { staticClass: "modal-prime-intro" }, [_c("div", { staticClass: "modal-prime-intro__heading" }, [_vm._v(" Join "), _c("span", { staticClass: "modal-prime-intro__heading--bold" }, [_vm._v("Prime")]), _c("br"), _vm.hasSlot ? _vm._t("default") : _c("div", [_c("span", [_vm._v("to customize your tip page!")]), _c("div", { staticClass: "modal-prime-intro__heading--subtitle" }, [_vm.hasSubtitleSlot ? _vm._t("subtitle") : _vm._e()], 2)])], 2), _vm._m(0), _c("span", { staticClass: "modal-prime-intro__price" }, [_vm._v("...only from $12/month")]), _c("div", { staticClass: "modal-prime-intro__button" }, [_c("s-button", { attrs: { "size": "large", "variation": "prime-white", "title": _vm.primeButtonText }, on: { "click": _vm.onPrimeButtonHandler } })], 1)])]);
};
var _sfc_staticRenderFns$2 = [function() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("ul", { staticClass: "modal-prime-intro__list" }, [_c("li", { staticClass: "modal-prime-intro__list__item" }, [_c("i", { staticClass: "icon-themes" }), _vm._v(" Overlay, widget & tip page themes ")]), _c("li", { staticClass: "modal-prime-intro__list__item" }, [_c("i", { staticClass: "icon-store" }), _vm._v(" FREE apps ")]), _c("li", { staticClass: "modal-prime-intro__list__item" }, [_c("i", { staticClass: "icon-upperwear" }), _vm._v(" Custom merch store ")]), _c("li", { staticClass: "modal-prime-intro__list__item" }, [_c("i", { staticClass: "icon-loyalty" }), _vm._v(" Gold status + FREE t-shirt ")]), _c("li", { staticClass: "modal-prime-intro__list__item" }, [_c("i", { staticClass: "icon-phone-case" }), _vm._v(" Stream on mobile ")])]);
}];
var __component__$2 = /* @__PURE__ */ normalizeComponent(
  PrimeIntro$1,
  _sfc_render$2,
  _sfc_staticRenderFns$2,
  false,
  null,
  "a352e48b",
  null,
  null
);
const PrimeIntro = __component__$2.exports;
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target, key, result);
  return result;
};
let ModalPrimeIntro$1 = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "name");
    __publicField(this, "width");
    __publicField(this, "minWidth");
    __publicField(this, "hasPrimeCloseButton");
    __publicField(this, "primeButtonText");
  }
};
__decorateClass$1([
  Prop({ default: "modal-prime-intro" })
], ModalPrimeIntro$1.prototype, "name", 2);
__decorateClass$1([
  Prop()
], ModalPrimeIntro$1.prototype, "width", 2);
__decorateClass$1([
  Prop()
], ModalPrimeIntro$1.prototype, "minWidth", 2);
__decorateClass$1([
  Prop({ default: false })
], ModalPrimeIntro$1.prototype, "hasPrimeCloseButton", 2);
__decorateClass$1([
  Prop({ default: "Join Ultra" })
], ModalPrimeIntro$1.prototype, "primeButtonText", 2);
ModalPrimeIntro$1 = __decorateClass$1([
  Component({
    components: { PrimeIntro }
  })
], ModalPrimeIntro$1);
const ModalPrimeIntro_vue_vue_type_style_index_0_scoped_9f9cfbae_lang = "";
var _sfc_render$1 = function render8() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("modal", _vm._g({ attrs: { "name": _vm.name, "classes": "s-modal-wrapper", "width": _vm.width, "minWidth": _vm.minWidth, "height": "auto", "adaptive": true, "scrollable": true } }, _vm.$listeners), [_vm.hasPrimeCloseButton ? _c("div", { staticClass: "modal-prime__close" }, [_c("i", { staticClass: "icon-close", on: { "click": function($event) {
    return _vm.$modal.hide(_vm.name);
  } } })]) : _vm._e(), _c("PrimeIntro", _vm._g({ attrs: { "primeButtonText": _vm.primeButtonText } }, _vm.$listeners), [_vm._t("default")], 2)], 1);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  ModalPrimeIntro$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  "9f9cfbae",
  null,
  null
);
const ModalPrimeIntro = __component__$1.exports;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp2(target, key, result);
  return result;
};
Vue.use(VModal);
let ModalComp$1 = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "name");
    __publicField(this, "width");
    __publicField(this, "minWidth");
    __publicField(this, "scrollable");
    __publicField(this, "type");
    __publicField(this, "title");
    __publicField(this, "subTitle");
    __publicField(this, "text");
    __publicField(this, "subscribeText");
    __publicField(this, "subscribeMessage");
    __publicField(this, "notes");
    __publicField(this, "proBadge");
    __publicField(this, "customPreview");
    __publicField(this, "confirmButtonText");
    __publicField(this, "buttonVariation");
    __publicField(this, "buttonTitle");
    __publicField(this, "buttonPrice");
    __publicField(this, "cancelTitle");
    __publicField(this, "primeButtonText");
    __publicField(this, "hasPrimeCloseButton");
    __publicField(this, "hideActionButtons");
    __publicField(this, "clickToClose");
    __publicField(this, "modalName", "");
  }
  mounted() {
    this.selectName();
  }
  selectName() {
    switch (this.type) {
      case "basic":
        if (this.name) {
          this.modalName = this.name;
        } else {
          this.modalName = "modal-basic";
        }
        break;
      case "subscribe":
        if (this.name) {
          this.modalName = this.name;
        } else {
          this.modalName = "modal-subscribe";
        }
        break;
      case "redirect":
        if (this.name) {
          this.modalName = this.name;
        } else {
          this.modalName = "modal-redirect";
        }
        break;
      case "confirmation":
        if (this.name) {
          this.modalName = this.name;
        } else {
          this.modalName = "modal-confirmation";
        }
        break;
      case "welcome-prime":
        if (this.name) {
          this.modalName = this.name;
        } else {
          this.modalName = "modal-welcome-prime";
        }
        break;
      case "prime-intro":
        if (this.name) {
          this.modalName = this.name;
        } else {
          this.modalName = "modal-prime-intro";
        }
        break;
    }
  }
};
__decorateClass([
  Prop()
], ModalComp$1.prototype, "name", 2);
__decorateClass([
  Prop({ default: 600 })
], ModalComp$1.prototype, "width", 2);
__decorateClass([
  Prop({ default: 600 })
], ModalComp$1.prototype, "minWidth", 2);
__decorateClass([
  Prop()
], ModalComp$1.prototype, "scrollable", 2);
__decorateClass([
  Prop()
], ModalComp$1.prototype, "type", 2);
__decorateClass([
  Prop()
], ModalComp$1.prototype, "title", 2);
__decorateClass([
  Prop()
], ModalComp$1.prototype, "subTitle", 2);
__decorateClass([
  Prop()
], ModalComp$1.prototype, "text", 2);
__decorateClass([
  Prop()
], ModalComp$1.prototype, "subscribeText", 2);
__decorateClass([
  Prop()
], ModalComp$1.prototype, "subscribeMessage", 2);
__decorateClass([
  Prop()
], ModalComp$1.prototype, "notes", 2);
__decorateClass([
  Prop()
], ModalComp$1.prototype, "proBadge", 2);
__decorateClass([
  Prop()
], ModalComp$1.prototype, "customPreview", 2);
__decorateClass([
  Prop()
], ModalComp$1.prototype, "confirmButtonText", 2);
__decorateClass([
  Prop()
], ModalComp$1.prototype, "buttonVariation", 2);
__decorateClass([
  Prop()
], ModalComp$1.prototype, "buttonTitle", 2);
__decorateClass([
  Prop()
], ModalComp$1.prototype, "buttonPrice", 2);
__decorateClass([
  Prop()
], ModalComp$1.prototype, "cancelTitle", 2);
__decorateClass([
  Prop()
], ModalComp$1.prototype, "primeButtonText", 2);
__decorateClass([
  Prop()
], ModalComp$1.prototype, "hasPrimeCloseButton", 2);
__decorateClass([
  Prop()
], ModalComp$1.prototype, "hideActionButtons", 2);
__decorateClass([
  Prop()
], ModalComp$1.prototype, "clickToClose", 2);
ModalComp$1 = __decorateClass([
  Component({
    components: {
      Button,
      ModalBasic,
      ModalSubscribe,
      ModalRedirect,
      ModalConfirmation,
      ModalPrime,
      ModalPrimeIntro
    }
  })
], ModalComp$1);
var _sfc_render = function render9() {
  var _vm = this, _c = _vm._self._c;
  _vm._self._setupProxy;
  return _c("div", [_vm.type === "basic" ? _c("div", [_c("ModalBasic", _vm._g({ attrs: { "name": _vm.modalName, "title": _vm.title, "subTitle": _vm.subTitle, "text": _vm.text, "width": _vm.width, "minWidth": _vm.minWidth, "hideActionButtons": _vm.hideActionButtons, "confirmButtonText": _vm.confirmButtonText, "clickToClose": _vm.clickToClose } }, _vm.$listeners), [_vm._t("default")], 2)], 1) : _vm._e(), _vm.type === "subscribe" ? _c("div", [_c("ModalSubscribe", _vm._g({ attrs: { "name": _vm.modalName, "title": _vm.title, "subTitle": _vm.subTitle, "text": _vm.text, "subscribeText": _vm.subscribeText, "subscribeMessage": _vm.subscribeMessage, "notes": _vm.notes, "width": _vm.width, "minWidth": _vm.minWidth, "scrollable": _vm.scrollable, "proBadge": _vm.proBadge, "customPreview": _vm.customPreview, "buttonTitle": _vm.buttonTitle, "buttonPrice": _vm.buttonPrice, "buttonVariation": _vm.buttonVariation, "cancelTitle": _vm.cancelTitle }, scopedSlots: _vm._u([{ key: "preview", fn: function() {
    return [_vm._t("preview")];
  }, proxy: true }], null, true) }, _vm.$listeners), [_vm._t("default")], 2)], 1) : _vm._e(), _vm.type === "redirect" ? _c("div", [_c("ModalRedirect", _vm._g({ attrs: { "name": _vm.modalName, "title": _vm.title, "text": _vm.text, "width": _vm.width, "minWidth": _vm.minWidth } }, _vm.$listeners))], 1) : _vm._e(), _vm.type === "confirmation" ? _c("div", [_c("ModalConfirmation", _vm._g({ attrs: { "name": _vm.modalName, "subTitle": _vm.subTitle, "text": _vm.text, "width": _vm.width, "minWidth": _vm.minWidth, "confirmButtonText": _vm.confirmButtonText, "buttonVariation": _vm.buttonVariation } }, _vm.$listeners))], 1) : _vm._e(), _vm.type === "welcome-prime" ? _c("div", [_c("ModalPrime", _vm._g({ attrs: { "name": _vm.modalName, "width": _vm.width, "minWidth": _vm.minWidth, "primeButtonText": _vm.primeButtonText, "hasPrimeCloseButton": _vm.hasPrimeCloseButton } }, _vm.$listeners), [_vm._t("default")], 2)], 1) : _vm._e(), _vm.type === "prime-intro" ? _c("div", [_c("ModalPrimeIntro", _vm._g({ attrs: { "name": _vm.modalName, "width": 680, "minWidth": _vm.minWidth, "primeButtonText": _vm.primeButtonText, "hasPrimeCloseButton": _vm.hasPrimeCloseButton } }, _vm.$listeners), [_vm._t("default")], 2)], 1) : _vm._e()]);
};
var _sfc_staticRenderFns = [];
var __component__ = /* @__PURE__ */ normalizeComponent(
  ModalComp$1,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  null,
  null,
  null
);
const ModalComp = __component__.exports;
export {
  ModalComp as M,
  WelcomePrime as W
};
//# sourceMappingURL=ModalComp.12fcb69e.js.map
