var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, P as Prop, V as Vue, n as normalizeComponent, W as Watch } from "./index-158ccef1.js";
import { B as Button } from "./Button-8b9ecd72.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import "./Accordion-7aa9b24d.js";
const BannersCode = '<template>\n  <div>\n    <h1>Banners</h1>\n    <div class="section">\n      <h2>Marketing Banner</h2>\n      <DemoSection title="Marketing Banner" :code="demoCode">\n        <template #components>\n          <banner-marketing\n            bg-image="\n                https://cdn.streamlabs.com/static/imgs/pretzel_dashboard_banner_bg.png\n              "\n            bg-image-night="\n                http://cdn.backgroundhost.com/backgrounds/subtlepatterns/cartographer.png\n              "\n            icon-name="themes"\n            label="Introducing Streamlabs OBS"\n            title="Largest library of free themes in the world."\n            desc="\n                To access over 700+ themes for free, download Streamlabs OBS.\n              "\n            link-desc="Win 7+  245.8 MB"\n            :onToggle="test"\n          >\n            <Button\n              slot="link"\n              type="a"\n              variation="action"\n              size="standard"\n              href="#"\n              title="Download"\n              icon="overview"\n            />\n          </banner-marketing>\n        </template>\n      </DemoSection>\n\n      <banner-marketing\n        bg-image="\n            https://cdn.streamlabs.com/static/imgs/pretzel_dashboard_banner_bg.png\n          "\n        :icon-image="pretzelIcon"\n        label="New Streamlabs OBS App"\n        title="Introducing Pretzel Rocks Music Player"\n        desc="\n            Stream-safe music for broadcasters with an ever-growing catalog of music. Currently 5k+ tracks.\n          "\n        link-desc="$4.99/mo"\n        :banner-closed="bannerClosed"\n      >\n        <Button\n          slot="link"\n          type="a"\n          variation="action"\n          size="standard"\n          href="#"\n          title="Try It Now"\n        />\n      </banner-marketing>\n\n      <table class="docs-table">\n        <thead>\n          <tr>\n            <th>Prop</th>\n            <th>Type</th>\n            <th>Required</th>\n            <th>Default</th>\n            <th>Description</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>bgImage</td>\n            <td>string</td>\n            <td>true</td>\n            <td>null</td>\n            <td>Background image that will display in day mode.</td>\n          </tr>\n          <tr>\n            <td>bgImageNight</td>\n            <td>string</td>\n            <td>false</td>\n            <td>null</td>\n            <td>Background image that will display in night mode.</td>\n          </tr>\n          <tr>\n            <td>label</td>\n            <td>string</td>\n            <td>true</td>\n            <td>null</td>\n            <td>Label text in the upper left of the banner.</td>\n          </tr>\n          <tr>\n            <td>iconImage</td>\n            <td>string</td>\n            <td>false</td>\n            <td>null</td>\n            <td>\n              Icon image next to title. Use a url path. If using iconName - do\n              not use iconImg. We will improve functionality in near future.\n            </td>\n          </tr>\n          <tr>\n            <td>iconName</td>\n            <td>string</td>\n            <td>false</td>\n            <td>null</td>\n            <td>\n              Icon next to title. Use icon name from icon list. If using iconImg\n              - do not use iconName. We will improve functionality in near\n              future.\n            </td>\n          </tr>\n          <tr>\n            <td>title</td>\n            <td>string</td>\n            <td>true</td>\n            <td>null</td>\n            <td>Main banner title.</td>\n          </tr>\n          <tr>\n            <td>desc</td>\n            <td>string</td>\n            <td>true</td>\n            <td>null</td>\n            <td>Description text below banner title.</td>\n          </tr>\n          <tr>\n            <td>linkDesc</td>\n            <td>string</td>\n            <td>false</td>\n            <td>null</td>\n            <td>Description text below link.</td>\n          </tr>\n          <tr>\n            <td>bannerClosed</td>\n            <td>boolean</td>\n            <td>false</td>\n            <td>false</td>\n            <td>Default state the banner is. Open by default.</td>\n          </tr>\n          <tr>\n            <td>onToggle</td>\n            <td>function</td>\n            <td>null</td>\n            <td>false</td>\n            <td>Function which is called when you toggle the icon close.</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class="section">\n      <h2>Sale Banner</h2>\n      <DemoSection title="Sale Banner" :code="demoCode">\n        <template #components>\n          <banner-sale\n            title="Flash Sale! 25% off everything!"\n            desc="All items are automatically discounted."\n            days="00"\n            hours="00"\n            minutes="00"\n            :seconds="secs"\n            time-desc="Until flash sale ends. Hurry!"\n          />\n        </template>\n      </DemoSection>\n\n      <table class="docs-table">\n        <thead>\n          <tr>\n            <th>Prop</th>\n            <th>Type</th>\n            <th>Required</th>\n            <th>Default</th>\n            <th>Description</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>title</td>\n            <td>string</td>\n            <td>true</td>\n            <td>null</td>\n            <td>Banner main title.</td>\n          </tr>\n          <tr>\n            <td>desc</td>\n            <td>string</td>\n            <td>true</td>\n            <td>null</td>\n            <td>Banner description text below main title.</td>\n          </tr>\n          <tr>\n            <td>days</td>\n            <td>string</td>\n            <td>true</td>\n            <td>"00"</td>\n            <td>Days remaining value for countdown timer</td>\n          </tr>\n          <tr>\n            <td>hours</td>\n            <td>string</td>\n            <td>true</td>\n            <td>"00"</td>\n            <td>Hours remaining value for countdown timer</td>\n          </tr>\n          <tr>\n            <td>minutes</td>\n            <td>string</td>\n            <td>true</td>\n            <td>"00"</td>\n            <td>Minutes remaining value for countdown timer</td>\n          </tr>\n          <tr>\n            <td>seconds</td>\n            <td>string</td>\n            <td>true</td>\n            <td>"00"</td>\n            <td>Seconds remaining value for countdown timer</td>\n          </tr>\n          <tr>\n            <td>timeDesc</td>\n            <td>string</td>\n            <td>false</td>\n            <td>null</td>\n            <td>Description text below countdown timer.</td>\n          </tr>\n          <tr>\n            <td>borderColor</td>\n            <td>string</td>\n            <td>false</td>\n            <td>"rgba(248, 86, 64, 0.33)"</td>\n            <td>Banner border color.</td>\n          </tr>\n          <tr>\n            <td>backgroundColor</td>\n            <td>boolean</td>\n            <td>false</td>\n            <td>"rgba(248, 86, 64, 0.08)"</td>\n            <td>Banner background color.</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class="section">\n      <h2>Notice Banner</h2>\n      <DemoSection title="Notice Banner" :code="demoCode">\n        <template #components>\n          <Notice\n            title="\n                Join affiliates and earn $1 for each Streamlabs OBS referral\n              "\n            desc="\n                Share your unique referral link with friends and get paid directly into your PayPal each month.\n              "\n            icon="information"\n          >\n            <Button\n              slot="button"\n              type="button"\n              size="fixed-width"\n              variation="action"\n              title="Join"\n            />\n          </Notice>\n        </template>\n      </DemoSection>\n\n      <br />\n      <br />\n\n      <Notice\n        variation="warning"\n        title="Your donation link has expired"\n        desc="Copy your new donation link and replace all instances containing twitchalerts.com."\n      >\n        <Button\n          slot="button"\n          type="button"\n          size="fixed-width"\n          variation="default"\n          title="Copy Link"\n        />\n      </Notice>\n\n      <table class="docs-table">\n        <thead>\n          <tr>\n            <th>Prop</th>\n            <th>Type</th>\n            <th>Required</th>\n            <th>Default</th>\n            <th>Description</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>variation</td>\n            <td>string</td>\n            <td>true</td>\n            <td>default</td>\n            <td>\n              Variation style that will be displayed. Options are "default" and\n              "warning".\n            </td>\n          </tr>\n          <tr>\n            <td>title</td>\n            <td>string</td>\n            <td>true</td>\n            <td>null</td>\n            <td>Banner title</td>\n          </tr>\n          <tr>\n            <td>desc</td>\n            <td>string</td>\n            <td>true</td>\n            <td>null</td>\n            <td>Description text below banner title</td>\n          </tr>\n          <tr>\n            <td>icon</td>\n            <td>string</td>\n            <td>true</td>\n            <td>null</td>\n            <td>\n              Icon next to title and in background. Will override selected\n              variation icon. Use icon name from icon list.\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class="section">\n      <h2>Discord Banner</h2>\n      <DemoSection title="Discord Banner" :code="demoCode">\n        <template #components>\n          <BannerDiscord />\n        </template>\n      </DemoSection>\n\n      <table class="docs-table">\n        <thead>\n          <tr>\n            <th>Prop</th>\n            <th>Type</th>\n            <th>Default</th>\n            <th>Description</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>title</td>\n            <td>string</td>\n            <td>\n              Join the Streamlabs OBS Discussion on\n              &lt;span&gt;Discord&lt;/span&gt;\n            </td>\n            <td>\n              Set the title of the banner. You can wrap text in\n              <code>&lt;span&gt;</code> tags to give them medium font weight.\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class="section">\n      <h2>Introduction Banner</h2>\n      <DemoSection title="Introduction Banner" :code="demoCode">\n        <template #components>\n          <BannerIntroduction bgColor="#5e3bec">\n            <img\n              slot="bgImage"\n              src="https://cdn.streamlabs.com/static/alert-box-sounds-banner-bg.png"\n              alt=""\n              class="banner-introduction-bgImage"\n            />\n            <template #title\n              >Introducing<span class="banner-introduction-title"\n                >Prime Alert Box Sounds</span\n              ></template\n            >\n            <template #description\n              >Modern, hype sounds you can add to your live alerts. All included\n              with Prime.</template\n            >\n            <Button\n              slot="button"\n              title="Browse Sounds"\n              :bgColor="\'#000\'"\n              :textColor="\'#fff\'"\n            ></Button>\n          </BannerIntroduction>\n        </template>\n      </DemoSection>\n\n      <table class="docs-table">\n        <thead>\n          <tr>\n            <th>Prop</th>\n            <th>Type</th>\n            <th>Default</th>\n            <th>Description</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>bgColor</td>\n            <td>string</td>\n            <td>Null</td>\n            <td>Set the background color of the banner.</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</template>\n\n<script lang="ts">\nimport { Component, Vue } from "vue-property-decorator";\nimport BannersCode from "./Banners.vue?raw";\nimport BannerDiscord from "./../components/BannerDiscord.vue";\nimport BannerIntroduction from "./../components/BannerIntroduction.vue";\nimport BannerMarketing from "./../components/BannerMarketing.vue";\nimport BannerSale from "./../components/BannerSale.vue";\nimport Button from "./../components/Button.vue";\nimport DemoSection from "./../components/DemoSection.vue";\nimport Notice from "./../components/Notice.vue";\nimport pretzelIcon from \'../assets/imgs/pretzel-icon.png\';\n\n@Component({\n  components: {\n    BannerDiscord,\n    BannerIntroduction,\n    BannerMarketing,\n    BannerSale,\n    Button,\n    DemoSection,\n    Notice\n  }\n})\nexport default class Banners extends Vue {\n  demoCode = BannersCode;\n  pretzelIcon = pretzelIcon;\n  remainingSecs = 10;\n\n  bannerClosed = false;\n\n  mounted() {\n    setInterval(() => {\n      this.remainingSecs--;\n      if (this.remainingSecs < 0) {\n        this.remainingSecs = 10;\n      }\n    }, 1000);\n  }\n\n  get secs() {\n    return this.remainingSecs < 10\n      ? `0${this.remainingSecs}`\n      : `${this.remainingSecs}`;\n  }\n\n  test() {\n    console.log("test");\n  }\n}\n<\/script>\n\n<style lang="less" scoped>\n.banner-introduction-title {\n  font-weight: 500;\n  padding: 0 8px;\n}\n\n.banner-introduction-bgImage {\n  position: absolute;\n  width: auto;\n  height: 100%;\n  right: 0px;\n  border-radius: 8px;\n}\n</style>\n';
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
let BannerDiscord$1 = class BannerDiscord extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "title");
  }
};
__decorateClass$5([
  Prop({
    default: "Join the Streamlabs OBS Discussion on <span>Discord</span>"
  })
], BannerDiscord$1.prototype, "title", 2);
BannerDiscord$1 = __decorateClass$5([
  Component({
    components: {
      Button
    }
  })
], BannerDiscord$1);
var render$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-banner-discord"
  }, [_c("h2", {
    staticClass: "s-banner-discord__title",
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  }), _c("Button", _vm._g({
    attrs: {
      "title": "Open Discord",
      "icon": "discord",
      "iconPosition": "right",
      "variation": "custom",
      "bgColor": "#FFFFFF",
      "textColor": "#7289DA",
      "tag": "a",
      "href": "https://discord.gg/stream",
      "target": "_blank"
    }
  }, _vm.$listeners))], 1);
};
var staticRenderFns$5 = [];
const BannerDiscord_vue_vue_type_style_index_0_lang = "";
const __cssModules$5 = {};
var __component__$5 = /* @__PURE__ */ normalizeComponent(
  BannerDiscord$1,
  render$5,
  staticRenderFns$5,
  false,
  __vue2_injectStyles$5,
  null,
  null,
  null
);
function __vue2_injectStyles$5(context) {
  for (let o in __cssModules$5) {
    this[o] = __cssModules$5[o];
  }
}
const BannerDiscord2 = /* @__PURE__ */ function() {
  return __component__$5.exports;
}();
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
let BannerIntroduction$1 = class BannerIntroduction extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "bgColor");
  }
};
__decorateClass$4([
  Prop(String)
], BannerIntroduction$1.prototype, "bgColor", 2);
BannerIntroduction$1 = __decorateClass$4([
  Component({})
], BannerIntroduction$1);
var render$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-banner-introduction",
    style: {
      "background-color": _vm.bgColor
    }
  }, [_vm._t("bgImage"), _c("div", {
    staticClass: "s-banner-introduction__body"
  }, [_c("h2", {
    staticClass: "s-banner-introduction__title"
  }, [_vm._t("title")], 2), _c("p", {
    staticClass: "s-banner-introduction__description"
  }, [_vm._t("description")], 2)]), _c("div", {
    staticClass: "s-banner-introduction__button"
  }, [_vm._t("button")], 2)], 2);
};
var staticRenderFns$4 = [];
const BannerIntroduction_vue_vue_type_style_index_0_lang = "";
const __cssModules$4 = {};
var __component__$4 = /* @__PURE__ */ normalizeComponent(
  BannerIntroduction$1,
  render$4,
  staticRenderFns$4,
  false,
  __vue2_injectStyles$4,
  null,
  null,
  null
);
function __vue2_injectStyles$4(context) {
  for (let o in __cssModules$4) {
    this[o] = __cssModules$4[o];
  }
}
const BannerIntroduction2 = /* @__PURE__ */ function() {
  return __component__$4.exports;
}();
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
let BannerMarketing$1 = class BannerMarketing extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "$refs");
    __publicField(this, "bgImageNight");
    __publicField(this, "bgImage");
    __publicField(this, "label");
    __publicField(this, "iconName");
    __publicField(this, "iconImage");
    __publicField(this, "title");
    __publicField(this, "desc");
    __publicField(this, "linkDesc");
    __publicField(this, "bannerClosed");
    __publicField(this, "onToggle");
    __publicField(this, "closed", false);
  }
  onBannerCloseStateChanged(val, oldVal) {
    this.closed = val;
    this.updateBannerHeight();
  }
  mounted() {
    this.closed = this.bannerClosed;
    this.updateBannerHeight();
  }
  toggleBanner() {
    typeof this.onToggle === "function" && this.onToggle();
    this.closed = !this.closed;
    this.updateBannerHeight();
    if (this.$whatInput.ask() === "keyboard") {
      const icons = this.$refs.banner.querySelectorAll(".icon-down");
      let icon;
      if (this.closed) {
        icon = icons[1];
      } else {
        icon = icons[0];
      }
      parseInt(icon.getAttribute("tabindex"));
      this.$nextTick(() => icon.focus());
    }
  }
  updateBannerHeight() {
    let banner = this.$refs.banner;
    let bannerWrapper = this.$refs.bottomWrapper;
    if (!this.closed) {
      banner.style.maxHeight = "240px";
    } else {
      setTimeout(() => {
        banner.style.maxHeight = `${bannerWrapper.scrollHeight + 32}px`;
      }, 1);
    }
  }
};
__decorateClass$3([
  Prop()
], BannerMarketing$1.prototype, "bgImageNight", 2);
__decorateClass$3([
  Prop()
], BannerMarketing$1.prototype, "bgImage", 2);
__decorateClass$3([
  Prop()
], BannerMarketing$1.prototype, "label", 2);
__decorateClass$3([
  Prop()
], BannerMarketing$1.prototype, "iconName", 2);
__decorateClass$3([
  Prop()
], BannerMarketing$1.prototype, "iconImage", 2);
__decorateClass$3([
  Prop()
], BannerMarketing$1.prototype, "title", 2);
__decorateClass$3([
  Prop()
], BannerMarketing$1.prototype, "desc", 2);
__decorateClass$3([
  Prop()
], BannerMarketing$1.prototype, "linkDesc", 2);
__decorateClass$3([
  Prop({ default: false })
], BannerMarketing$1.prototype, "bannerClosed", 2);
__decorateClass$3([
  Prop()
], BannerMarketing$1.prototype, "onToggle", 2);
__decorateClass$3([
  Watch("bannerClosed")
], BannerMarketing$1.prototype, "onBannerCloseStateChanged", 1);
BannerMarketing$1 = __decorateClass$3([
  Component({})
], BannerMarketing$1);
var render$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    ref: "banner",
    staticClass: "s-banner"
  }, [_c("div", {
    staticClass: "s-banner__bg",
    style: {
      background: `linear-gradient(to bottom left, rgba(227, 232, 235, 0.72), rgba(227, 232, 235, 0.72)), url('${_vm.bgImage}') center center no-repeat`
    }
  }), _c("div", {
    staticClass: "s-banner__bg s-banner__bg--night",
    style: {
      background: `linear-gradient(to bottom left, rgba(9, 22, 29, 0.72), rgba(9, 22, 29, 0.72)), url('${_vm.bgImageNight}') center center no-repeat`
    }
  }), _c("div", {
    key: "banner-open",
    staticClass: "s-banner__body",
    class: {
      "s-banner__body--closed": _vm.closed
    }
  }, [_c("div", {
    staticClass: "s-banner__wrapper"
  }, [_c("div", {
    staticClass: "s-banner__label"
  }, [_vm._v(_vm._s(_vm.label))]), _c("i", {
    staticClass: "icon-down",
    attrs: {
      "tabindex": "0"
    },
    on: {
      "click": function($event) {
        return _vm.toggleBanner();
      },
      "keydown": function($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"]))
          return null;
        $event.preventDefault();
        return _vm.toggleBanner();
      }
    }
  })]), _c("div", {
    ref: "bottomWrapper",
    staticClass: "s-banner__wrapper"
  }, [_c("div", {
    staticClass: "s-banner__title"
  }, [_vm.iconName ? _c("div", {
    staticClass: "s-banner__icon"
  }, [_c("i", {
    class: `icon-${_vm.iconName}`
  })]) : _vm._e(), _vm.iconImage ? _c("div", {
    staticClass: "s-banner__icon"
  }, [_c("img", {
    attrs: {
      "src": _vm.iconImage
    }
  })]) : _vm._e(), _c("div", {
    staticClass: "s-banner__details"
  }, [_c("h2", {
    staticClass: "s-banner__name"
  }, [_vm._v(_vm._s(_vm.title))]), _c("p", {
    staticClass: "s-banner__desc"
  }, [_vm._v(_vm._s(_vm.desc))])])]), _c("div", {
    staticClass: "s-banner__download-wrapper",
    on: {
      "click": function($event) {
        $event.stopPropagation();
      }
    }
  }, [_vm._t("link"), _c("i", {
    staticClass: "icon-down",
    attrs: {
      "tabindex": "0"
    },
    on: {
      "click": function($event) {
        return _vm.toggleBanner();
      },
      "keydown": function($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"]))
          return null;
        $event.preventDefault();
        return _vm.toggleBanner();
      }
    }
  }), _c("div", {
    staticClass: "s-banner__link-desc"
  }, [_vm._v(_vm._s(_vm.linkDesc))])], 2)])])]);
};
var staticRenderFns$3 = [];
const BannerMarketing_vue_vue_type_style_index_0_lang = "";
const __cssModules$3 = {};
var __component__$3 = /* @__PURE__ */ normalizeComponent(
  BannerMarketing$1,
  render$3,
  staticRenderFns$3,
  false,
  __vue2_injectStyles$3,
  null,
  null,
  null
);
function __vue2_injectStyles$3(context) {
  for (let o in __cssModules$3) {
    this[o] = __cssModules$3[o];
  }
}
const BannerMarketing2 = /* @__PURE__ */ function() {
  return __component__$3.exports;
}();
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
let BannerSale$1 = class BannerSale extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "title");
    __publicField(this, "desc");
    __publicField(this, "days");
    __publicField(this, "hours");
    __publicField(this, "minutes");
    __publicField(this, "seconds");
    __publicField(this, "timeDesc");
    __publicField(this, "borderColor");
    __publicField(this, "backgroundColor");
  }
  get daysDone() {
    return this.days === "00";
  }
  get hoursDone() {
    return this.daysDone && this.hours === "00";
  }
  get minutesDone() {
    return this.hoursDone && this.minutes === "00";
  }
  get secondsDone() {
    return this.minutesDone && this.seconds === "00";
  }
};
__decorateClass$2([
  Prop({ required: true })
], BannerSale$1.prototype, "title", 2);
__decorateClass$2([
  Prop({ required: true })
], BannerSale$1.prototype, "desc", 2);
__decorateClass$2([
  Prop({ default: "00", required: true })
], BannerSale$1.prototype, "days", 2);
__decorateClass$2([
  Prop({ default: "00", required: true })
], BannerSale$1.prototype, "hours", 2);
__decorateClass$2([
  Prop({ default: "00", required: true })
], BannerSale$1.prototype, "minutes", 2);
__decorateClass$2([
  Prop({ default: "00", required: true })
], BannerSale$1.prototype, "seconds", 2);
__decorateClass$2([
  Prop()
], BannerSale$1.prototype, "timeDesc", 2);
__decorateClass$2([
  Prop({ default: "rgba(248, 86, 64, 0.33)" })
], BannerSale$1.prototype, "borderColor", 2);
__decorateClass$2([
  Prop({ default: "rgba(248, 86, 64, 0.08)" })
], BannerSale$1.prototype, "backgroundColor", 2);
BannerSale$1 = __decorateClass$2([
  Component({})
], BannerSale$1);
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-banner-sale",
    style: {
      "background-color": _vm.backgroundColor,
      "border-color": _vm.borderColor
    }
  }, [_c("div", {
    staticClass: "s-banner-sale__wrapper s-header"
  }, [_c("h1", [_vm._v(_vm._s(_vm.title))]), _c("p", [_vm._v(_vm._s(_vm.desc))])]), _c("div", {
    staticClass: "s-banner-sale__wrapper s-header"
  }, [_c("h1", {
    staticClass: "s-banner-sale__time"
  }, [_c("span", {
    class: {
      "s-banner-sale__time--done": _vm.daysDone
    }
  }, [_vm._v(_vm._s(`${_vm.days}d`))]), _c("span", {
    class: {
      "s-banner-sale__time--done": _vm.hoursDone
    }
  }, [_vm._v(_vm._s(`${_vm.hours}h`))]), _c("span", {
    class: {
      "s-banner-sale__time--done": _vm.minutesDone
    }
  }, [_vm._v(_vm._s(`${_vm.minutes}m`))]), _c("span", {
    class: {
      "s-banner-sale__time--done": _vm.secondsDone
    }
  }, [_vm._v(_vm._s(`${_vm.seconds}s`))])]), _c("p", [_vm._v(_vm._s(_vm.timeDesc))])])]);
};
var staticRenderFns$2 = [];
const BannerSale_vue_vue_type_style_index_0_lang = "";
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(
  BannerSale$1,
  render$2,
  staticRenderFns$2,
  false,
  __vue2_injectStyles$2,
  null,
  null,
  null
);
function __vue2_injectStyles$2(context) {
  for (let o in __cssModules$2) {
    this[o] = __cssModules$2[o];
  }
}
const BannerSale2 = /* @__PURE__ */ function() {
  return __component__$2.exports;
}();
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
let Notice$1 = class Notice extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "variation");
    __publicField(this, "title");
    __publicField(this, "desc");
    __publicField(this, "icon");
  }
  get iconType() {
    switch (this.variation) {
      case "default":
        return "information";
      case "warning":
        return "error";
    }
  }
  get iconClass() {
    const iconSrc = this.icon ? this.icon : this.iconType;
    return `icon-${iconSrc}`;
  }
};
__decorateClass$1([
  Prop({ default: "default" })
], Notice$1.prototype, "variation", 2);
__decorateClass$1([
  Prop({ required: true })
], Notice$1.prototype, "title", 2);
__decorateClass$1([
  Prop({ required: true })
], Notice$1.prototype, "desc", 2);
__decorateClass$1([
  Prop()
], Notice$1.prototype, "icon", 2);
Notice$1 = __decorateClass$1([
  Component({})
], Notice$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-notice",
    class: `s-notice--${_vm.iconType}`
  }, [_c("div", {
    staticClass: "s-notice__wrapper"
  }, [_c("i", {
    staticClass: "s-notice__icon-bg",
    class: [_vm.iconClass]
  }), _c("div", {
    staticClass: "s-notice__body"
  }, [_c("i", {
    staticClass: "s-notice__icon",
    class: [_vm.iconClass]
  }), _c("div", {
    staticClass: "s-notice__detail"
  }, [_c("h2", {
    staticClass: "s-notice__title"
  }, [_vm._v(_vm._s(_vm.title))]), _c("p", {
    staticClass: "s-notice__desc"
  }, [_vm._v(_vm._s(_vm.desc))])])]), _c("div", {
    staticClass: "s-notice__button"
  }, [_vm._t("button")], 2)])]);
};
var staticRenderFns$1 = [];
const Notice_vue_vue_type_style_index_0_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  Notice$1,
  render$1,
  staticRenderFns$1,
  false,
  __vue2_injectStyles$1,
  null,
  null,
  null
);
function __vue2_injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
const Notice2 = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
const pretzelIcon = "data:image/png;base64,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";
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
let Banners$1 = class Banners extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", BannersCode);
    __publicField(this, "pretzelIcon", pretzelIcon);
    __publicField(this, "remainingSecs", 10);
    __publicField(this, "bannerClosed", false);
  }
  mounted() {
    setInterval(() => {
      this.remainingSecs--;
      if (this.remainingSecs < 0) {
        this.remainingSecs = 10;
      }
    }, 1e3);
  }
  get secs() {
    return this.remainingSecs < 10 ? `0${this.remainingSecs}` : `${this.remainingSecs}`;
  }
  test() {
    console.log("test");
  }
};
Banners$1 = __decorateClass([
  Component({
    components: {
      BannerDiscord: BannerDiscord2,
      BannerIntroduction: BannerIntroduction2,
      BannerMarketing: BannerMarketing2,
      BannerSale: BannerSale2,
      Button,
      DemoSection,
      Notice: Notice2
    }
  })
], Banners$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("h1", [_vm._v("Banners")]), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Marketing Banner")]), _c("DemoSection", {
    attrs: {
      "title": "Marketing Banner",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("banner-marketing", {
          attrs: {
            "bg-image": "\n              https://cdn.streamlabs.com/static/imgs/pretzel_dashboard_banner_bg.png\n            ",
            "bg-image-night": "\n              http://cdn.backgroundhost.com/backgrounds/subtlepatterns/cartographer.png\n            ",
            "icon-name": "themes",
            "label": "Introducing Streamlabs OBS",
            "title": "Largest library of free themes in the world.",
            "desc": "\n              To access over 700+ themes for free, download Streamlabs OBS.\n            ",
            "link-desc": "Win 7+  245.8 MB",
            "onToggle": _vm.test
          }
        }, [_c("Button", {
          attrs: {
            "slot": "link",
            "type": "a",
            "variation": "action",
            "size": "standard",
            "href": "#",
            "title": "Download",
            "icon": "overview"
          },
          slot: "link"
        })], 1)];
      },
      proxy: true
    }])
  }), _c("banner-marketing", {
    attrs: {
      "bg-image": "\n          https://cdn.streamlabs.com/static/imgs/pretzel_dashboard_banner_bg.png\n        ",
      "icon-image": _vm.pretzelIcon,
      "label": "New Streamlabs OBS App",
      "title": "Introducing Pretzel Rocks Music Player",
      "desc": "\n          Stream-safe music for broadcasters with an ever-growing catalog of music. Currently 5k+ tracks.\n        ",
      "link-desc": "$4.99/mo",
      "banner-closed": _vm.bannerClosed
    }
  }, [_c("Button", {
    attrs: {
      "slot": "link",
      "type": "a",
      "variation": "action",
      "size": "standard",
      "href": "#",
      "title": "Try It Now"
    },
    slot: "link"
  })], 1), _vm._m(0)], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Sale Banner")]), _c("DemoSection", {
    attrs: {
      "title": "Sale Banner",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("banner-sale", {
          attrs: {
            "title": "Flash Sale! 25% off everything!",
            "desc": "All items are automatically discounted.",
            "days": "00",
            "hours": "00",
            "minutes": "00",
            "seconds": _vm.secs,
            "time-desc": "Until flash sale ends. Hurry!"
          }
        })];
      },
      proxy: true
    }])
  }), _vm._m(1)], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Notice Banner")]), _c("DemoSection", {
    attrs: {
      "title": "Notice Banner",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Notice", {
          attrs: {
            "title": "\n              Join affiliates and earn $1 for each Streamlabs OBS referral\n            ",
            "desc": "\n              Share your unique referral link with friends and get paid directly into your PayPal each month.\n            ",
            "icon": "information"
          }
        }, [_c("Button", {
          attrs: {
            "slot": "button",
            "type": "button",
            "size": "fixed-width",
            "variation": "action",
            "title": "Join"
          },
          slot: "button"
        })], 1)];
      },
      proxy: true
    }])
  }), _c("br"), _c("br"), _c("Notice", {
    attrs: {
      "variation": "warning",
      "title": "Your donation link has expired",
      "desc": "Copy your new donation link and replace all instances containing twitchalerts.com."
    }
  }, [_c("Button", {
    attrs: {
      "slot": "button",
      "type": "button",
      "size": "fixed-width",
      "variation": "default",
      "title": "Copy Link"
    },
    slot: "button"
  })], 1), _vm._m(2)], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Discord Banner")]), _c("DemoSection", {
    attrs: {
      "title": "Discord Banner",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("BannerDiscord")];
      },
      proxy: true
    }])
  }), _vm._m(3)], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Introduction Banner")]), _c("DemoSection", {
    attrs: {
      "title": "Introduction Banner",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("BannerIntroduction", {
          attrs: {
            "bgColor": "#5e3bec"
          },
          scopedSlots: _vm._u([{
            key: "title",
            fn: function() {
              return [_vm._v("Introducing"), _c("span", {
                staticClass: "banner-introduction-title"
              }, [_vm._v("Prime Alert Box Sounds")])];
            },
            proxy: true
          }, {
            key: "description",
            fn: function() {
              return [_vm._v("Modern, hype sounds you can add to your live alerts. All included with Prime.")];
            },
            proxy: true
          }])
        }, [_c("img", {
          staticClass: "banner-introduction-bgImage",
          attrs: {
            "slot": "bgImage",
            "src": "https://cdn.streamlabs.com/static/alert-box-sounds-banner-bg.png",
            "alt": ""
          },
          slot: "bgImage"
        }), _c("Button", {
          attrs: {
            "slot": "button",
            "title": "Browse Sounds",
            "bgColor": "#000",
            "textColor": "#fff"
          },
          slot: "button"
        })], 1)];
      },
      proxy: true
    }])
  }), _vm._m(4)], 1)]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Required")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("bgImage")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Background image that will display in day mode.")])]), _c("tr", [_c("td", [_vm._v("bgImageNight")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Background image that will display in night mode.")])]), _c("tr", [_c("td", [_vm._v("label")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Label text in the upper left of the banner.")])]), _c("tr", [_c("td", [_vm._v("iconImage")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Icon image next to title. Use a url path. If using iconName - do not use iconImg. We will improve functionality in near future. ")])]), _c("tr", [_c("td", [_vm._v("iconName")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Icon next to title. Use icon name from icon list. If using iconImg - do not use iconName. We will improve functionality in near future. ")])]), _c("tr", [_c("td", [_vm._v("title")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Main banner title.")])]), _c("tr", [_c("td", [_vm._v("desc")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Description text below banner title.")])]), _c("tr", [_c("td", [_vm._v("linkDesc")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Description text below link.")])]), _c("tr", [_c("td", [_vm._v("bannerClosed")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("Default state the banner is. Open by default.")])]), _c("tr", [_c("td", [_vm._v("onToggle")]), _c("td", [_vm._v("function")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("Function which is called when you toggle the icon close.")])])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Required")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("title")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Banner main title.")])]), _c("tr", [_c("td", [_vm._v("desc")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Banner description text below main title.")])]), _c("tr", [_c("td", [_vm._v("days")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v('"00"')]), _c("td", [_vm._v("Days remaining value for countdown timer")])]), _c("tr", [_c("td", [_vm._v("hours")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v('"00"')]), _c("td", [_vm._v("Hours remaining value for countdown timer")])]), _c("tr", [_c("td", [_vm._v("minutes")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v('"00"')]), _c("td", [_vm._v("Minutes remaining value for countdown timer")])]), _c("tr", [_c("td", [_vm._v("seconds")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v('"00"')]), _c("td", [_vm._v("Seconds remaining value for countdown timer")])]), _c("tr", [_c("td", [_vm._v("timeDesc")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Description text below countdown timer.")])]), _c("tr", [_c("td", [_vm._v("borderColor")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v('"rgba(248, 86, 64, 0.33)"')]), _c("td", [_vm._v("Banner border color.")])]), _c("tr", [_c("td", [_vm._v("backgroundColor")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v('"rgba(248, 86, 64, 0.08)"')]), _c("td", [_vm._v("Banner background color.")])])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Required")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("variation")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v("default")]), _c("td", [_vm._v(' Variation style that will be displayed. Options are "default" and "warning". ')])]), _c("tr", [_c("td", [_vm._v("title")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Banner title")])]), _c("tr", [_c("td", [_vm._v("desc")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Description text below banner title")])]), _c("tr", [_c("td", [_vm._v("icon")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Icon next to title and in background. Will override selected variation icon. Use icon name from icon list. ")])])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("title")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v(" Join the Streamlabs OBS Discussion on <span>Discord</span> ")]), _c("td", [_vm._v(" Set the title of the banner. You can wrap text in "), _c("code", [_vm._v("<span>")]), _vm._v(" tags to give them medium font weight. ")])])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("bgColor")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("Null")]), _c("td", [_vm._v("Set the background color of the banner.")])])])]);
}];
const Banners_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Banners$1,
  render,
  staticRenderFns,
  false,
  __vue2_injectStyles,
  "3076c3fc",
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
const Banners2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Banners2 as default
};
//# sourceMappingURL=Banners-eaee77a2.js.map
