var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { V as Vue, C as Component, P as Prop, n as normalizeComponent } from "./index-158ccef1.js";
import { B as Button } from "./Button-8b9ecd72.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import { i as index } from "./vue-mq.es-228d853f.js";
import { V as VModal } from "./index-213b3b83.js";
import "./Accordion-7aa9b24d.js";
const AnnouncementsCode = `<template>
  <div>
    <div class="section">
      <h1>New Feature Overlay</h1>
      <p>
        You can trigger this with a button like
        <code>@click="$modal.show('new-feature')"</code> or call
        <code>this.$modal.show('new-feature')"</code> on mounted. You may need
        to set a few second delay on the trigger to prevent the modal closing
        when the page refreshes.
      </p>
      <pre><code>import { NewFeatureOverlay } from 'streamlabs-beaker';

components: {
  NewFeatureOverlay
}</code></pre>
    </div>

    <div class="section">
      <h2>New Feature Overlay</h2>
      <p>Used for new feature overlay.</p>
      <DemoSection title="New Feature Overlay" :code="demoCode">
        <template #components>
          <NewFeatureOverlay
            label="Introducing Merch Stores"
            title="Increase Your Revenue"
            media="
              https://cdn.streamlabs.com/cloudbot/prototype_cloudbot_800x300.webm
            "
            buttonTitle="Go To Store"
            :onOpen="trackingCodeComponent"
            :onAction="trackingCodeButton"
            buttonTag="a"
            buttonHref="
              https://www.twitch.tv/ext/xab8h6nj36fc2wtn71yikw9hqjd6v4-0.0.1
            "
            buttonTarget="_blank"
          >
            <p>
              We’ve worked with some of the best developers in the industry to
              bring you the tools to take your stream to the next level.
            </p>
            <p>
              We’ve automatically credited $15.00 to your account so you can
              start trying them out today.
            </p>
          </NewFeatureOverlay>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <div class="s-button-container s-button-container--left">
        <Button
          :variation="'default'"
          :title="'New Feature Overlay'"
          @click="$modal.show('new-feature')"
        ></Button>
      </div>
    </div>

    <table class="docs-table">
      <thead>
        <tr>
          <th>Props</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>label</td>
          <td>string</td>
          <td>null</td>
          <td>label to display</td>
        </tr>
        <tr>
          <td>title</td>
          <td>string</td>
          <td>null</td>
          <td>title to display</td>
        </tr>
        <tr>
          <td>media</td>
          <td>string</td>
          <td>null</td>
          <td>display image or video (you can select either of them)</td>
        </tr>
        <tr>
          <td>buttonTitle</td>
          <td>string</td>
          <td>null</td>
          <td>
            What type of element the button is,
            <code>button</code>, <code>a</code>,
            <code>router-link</code>
          </td>
        </tr>
        <tr>
          <td>buttonTag</td>
          <td>string</td>
          <td>null</td>
          <td>Text displayed in the action button</td>
        </tr>
        <tr>
          <td>buttonRoute</td>
          <td>string</td>
          <td>/</td>
          <td>
            Router link path for the action button if tag is
            <code>router-link</code>
          </td>
        </tr>
        <tr>
          <td>buttonHref</td>
          <td>string</td>
          <td>null</td>
          <td>
            href for the action button if tag is set to
            <code>a</code>
          </td>
        </tr>
        <tr>
          <td>buttonTarget</td>
          <td>string</td>
          <td>null</td>
          <td>
            Use to set different targets for button if set to
            <code>a</code>
            Options are:
            <code>_self</code>, <code>_blank</code>, <code>_parent</code>,
            <code>_top</code>
          </td>
        </tr>
        <tr>
          <td>dismissTitle</td>
          <td>string</td>
          <td>Go to Dashboard</td>
          <td>
            Text displayed in the link next to the action button to dismiss the
            announcement.
          </td>
        </tr>
        <tr>
          <td>dismissRoute</td>
          <td>string</td>
          <td>/</td>
          <td>Router link path to dismiss the annoucement.</td>
        </tr>
        <tr>
          <td>onOpen</td>
          <td>function</td>
          <td>null</td>
          <td>Function to call out the tracking code of modal component.</td>
        </tr>
        <tr>
          <td>onAction</td>
          <td>function</td>
          <td>null</td>
          <td>Function to call out the tracking code of modal button.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AnnouncementsCode from "./Announcements.vue?raw";
import Button from "./../components/Button.vue";
import DemoSection from "./../components/DemoSection.vue";
import NewFeatureOverlay from "./../components/NewFeatureOverlay.vue";

@Component({
  components: {
    Button,
    DemoSection,
    NewFeatureOverlay
  }
})
export default class AnnoucementsDemo extends Vue {
  demoCode = AnnouncementsCode;
  trackingCodeComponent() {
    console.log("componentEventTracking");
    // ga('send','event', 'newfeatureoverlay', 'modal_shown', 'component');
  }

  trackingCodeButton() {
    console.log("buttonEventTracking");
    // ga('send','event', 'newfeatureoverlay', 'modal_click', 'button');
  }
}
<\/script>
`;
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
Vue.use(VModal);
Vue.use(index, {
  breakpoints: {
    // default breakpoints - customize this
    sm: 900,
    md: 1250,
    lg: Infinity
  },
  defaultBreakpoint: "sm"
  // customize this for SSR
});
let NewFeatureOverlay$1 = class NewFeatureOverlay extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "width");
    __publicField(this, "height");
    __publicField(this, "label");
    __publicField(this, "title");
    __publicField(this, "media");
    __publicField(this, "buttonTitle");
    __publicField(this, "buttonRoute");
    __publicField(this, "buttonTag");
    __publicField(this, "buttonHref");
    __publicField(this, "buttonTarget");
    __publicField(this, "dismissRoute");
    __publicField(this, "dismissText");
    __publicField(this, "onOpen");
    __publicField(this, "onAction");
    __publicField(this, "videoControls");
    __publicField(this, "isImage", true);
    __publicField(this, "$mq");
  }
  get overlayImage() {
    return this.media;
  }
  get containerMq() {
    return this.$mq === "sm" ? "s-overlay__container--mq" : "";
  }
  get overlay__imageBlockMq() {
    return this.$mq === "sm" ? "s-overlay__image-block--mq" : "";
  }
  mounted() {
    if (this.media.includes("mp4") || this.media.includes("webm")) {
      this.isImage = false;
    } else {
      this.isImage = true;
    }
  }
  opened(event) {
    typeof this.onOpen === "function" && this.onOpen();
  }
  onPrimaryAction() {
    typeof this.onAction === "function" && this.onAction();
    this.onDismiss();
  }
  onDismiss() {
    this.$modal.hide("new-feature");
  }
};
__decorateClass$1([
  Prop({ default: "100%" })
], NewFeatureOverlay$1.prototype, "width", 2);
__decorateClass$1([
  Prop({ default: "auto" })
], NewFeatureOverlay$1.prototype, "height", 2);
__decorateClass$1([
  Prop()
], NewFeatureOverlay$1.prototype, "label", 2);
__decorateClass$1([
  Prop()
], NewFeatureOverlay$1.prototype, "title", 2);
__decorateClass$1([
  Prop()
], NewFeatureOverlay$1.prototype, "media", 2);
__decorateClass$1([
  Prop()
], NewFeatureOverlay$1.prototype, "buttonTitle", 2);
__decorateClass$1([
  Prop({ default: "/" })
], NewFeatureOverlay$1.prototype, "buttonRoute", 2);
__decorateClass$1([
  Prop({ default: "router-link" })
], NewFeatureOverlay$1.prototype, "buttonTag", 2);
__decorateClass$1([
  Prop()
], NewFeatureOverlay$1.prototype, "buttonHref", 2);
__decorateClass$1([
  Prop()
], NewFeatureOverlay$1.prototype, "buttonTarget", 2);
__decorateClass$1([
  Prop({ default: "/" })
], NewFeatureOverlay$1.prototype, "dismissRoute", 2);
__decorateClass$1([
  Prop({ default: "Go to Dashboard" })
], NewFeatureOverlay$1.prototype, "dismissText", 2);
__decorateClass$1([
  Prop()
], NewFeatureOverlay$1.prototype, "onOpen", 2);
__decorateClass$1([
  Prop()
], NewFeatureOverlay$1.prototype, "onAction", 2);
__decorateClass$1([
  Prop({ default: false })
], NewFeatureOverlay$1.prototype, "videoControls", 2);
NewFeatureOverlay$1 = __decorateClass$1([
  Component({
    components: {
      Button
    }
  })
], NewFeatureOverlay$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("modal", {
    attrs: {
      "name": "new-feature",
      "adaptive": true,
      "width": _vm.width,
      "height": _vm.height,
      "classes": "s-overlay__wrapper",
      "clickToClose": true
    },
    on: {
      "opened": _vm.opened
    }
  }, [_c("div", {
    staticClass: "s-overlay__icon",
    attrs: {
      "slot": "top-right"
    },
    slot: "top-right"
  }, [_c("span", {
    staticClass: "s-icon icon-close",
    on: {
      "click": _vm.onDismiss
    }
  })]), _c("div", {
    staticClass: "s-overlay__container",
    class: _vm.containerMq
  }, [_c("div", {
    staticClass: "s-overlay__body"
  }, [_c("p", {
    staticClass: "s-overlay__label"
  }, [_vm._v(_vm._s(_vm.label))]), _c("h1", {
    staticClass: "s-overlay__title"
  }, [_vm._v(_vm._s(_vm.title))]), _c("p", {
    staticClass: "s-overlay__text"
  }, [_vm._t("default")], 2), _c("div", {
    staticClass: "s-overlay-links"
  }, [_c("Button", {
    attrs: {
      "size": "large",
      "variation": "action",
      "tag": _vm.buttonTag,
      "to": _vm.buttonRoute,
      "href": _vm.buttonHref,
      "target": _vm.buttonTarget,
      "title": _vm.buttonTitle
    },
    nativeOn: {
      "click": function($event) {
        return _vm.onPrimaryAction.apply(null, arguments);
      }
    }
  }), _c("router-link", {
    staticClass: "s-overlay__link",
    attrs: {
      "to": _vm.dismissRoute
    },
    nativeOn: {
      "click": function($event) {
        return _vm.onDismiss.apply(null, arguments);
      }
    }
  }, [_vm._v(_vm._s(_vm.dismissText))])], 1)]), _c("div", {
    staticClass: "s-overlay__image-block",
    class: _vm.overlay__imageBlockMq
  }, [_vm.isImage ? _c("img", {
    staticClass: "s-overlay__image",
    attrs: {
      "src": _vm.overlayImage
    }
  }) : _vm._e(), !_vm.isImage ? _c("video", {
    staticClass: "s-overlay__image",
    attrs: {
      "controls": _vm.videoControls,
      "autoplay": "",
      "loop": ""
    }
  }, [_c("source", {
    attrs: {
      "src": _vm.overlayImage
    }
  }), _vm._v(" Environment does not support video playback ")]) : _vm._e()])])]);
};
var staticRenderFns$1 = [];
const NewFeatureOverlay_vue_vue_type_style_index_0_scoped_true_lang = "";
const NewFeatureOverlay_vue_vue_type_style_index_1_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  NewFeatureOverlay$1,
  render$1,
  staticRenderFns$1,
  false,
  __vue2_injectStyles$1,
  "484bf4ab",
  null,
  null
);
function __vue2_injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
const NewFeatureOverlay2 = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
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
let AnnoucementsDemo = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", AnnouncementsCode);
  }
  trackingCodeComponent() {
    console.log("componentEventTracking");
  }
  trackingCodeButton() {
    console.log("buttonEventTracking");
  }
};
AnnoucementsDemo = __decorateClass([
  Component({
    components: {
      Button,
      DemoSection,
      NewFeatureOverlay: NewFeatureOverlay2
    }
  })
], AnnoucementsDemo);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("New Feature Overlay")]), _c("p", [_vm._v("Used for new feature overlay.")]), _c("DemoSection", {
    attrs: {
      "title": "New Feature Overlay",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("NewFeatureOverlay", {
          attrs: {
            "label": "Introducing Merch Stores",
            "title": "Increase Your Revenue",
            "media": "\n              https://cdn.streamlabs.com/cloudbot/prototype_cloudbot_800x300.webm\n            ",
            "buttonTitle": "Go To Store",
            "onOpen": _vm.trackingCodeComponent,
            "onAction": _vm.trackingCodeButton,
            "buttonTag": "a",
            "buttonHref": "\n              https://www.twitch.tv/ext/xab8h6nj36fc2wtn71yikw9hqjd6v4-0.0.1\n            ",
            "buttonTarget": "_blank"
          }
        }, [_c("p", [_vm._v(" We’ve worked with some of the best developers in the industry to bring you the tools to take your stream to the next level. ")]), _c("p", [_vm._v(" We’ve automatically credited $15.00 to your account so you can start trying them out today. ")])])];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("div", {
    staticClass: "s-button-container s-button-container--left"
  }, [_c("Button", {
    attrs: {
      "variation": "default",
      "title": "New Feature Overlay"
    },
    on: {
      "click": function($event) {
        return _vm.$modal.show("new-feature");
      }
    }
  })], 1)]), _vm._m(1)]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("New Feature Overlay")]), _c("p", [_vm._v(" You can trigger this with a button like "), _c("code", [_vm._v(`@click="$modal.show('new-feature')"`)]), _vm._v(" or call "), _c("code", [_vm._v(`this.$modal.show('new-feature')"`)]), _vm._v(" on mounted. You may need to set a few second delay on the trigger to prevent the modal closing when the page refreshes. ")]), _c("pre", [_c("code", [_vm._v("import { NewFeatureOverlay } from 'streamlabs-beaker';\n\ncomponents: {\n  NewFeatureOverlay\n}")])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Props")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("label")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("label to display")])]), _c("tr", [_c("td", [_vm._v("title")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("title to display")])]), _c("tr", [_c("td", [_vm._v("media")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("display image or video (you can select either of them)")])]), _c("tr", [_c("td", [_vm._v("buttonTitle")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" What type of element the button is, "), _c("code", [_vm._v("button")]), _vm._v(", "), _c("code", [_vm._v("a")]), _vm._v(", "), _c("code", [_vm._v("router-link")])])]), _c("tr", [_c("td", [_vm._v("buttonTag")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Text displayed in the action button")])]), _c("tr", [_c("td", [_vm._v("buttonRoute")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("/")]), _c("td", [_vm._v(" Router link path for the action button if tag is "), _c("code", [_vm._v("router-link")])])]), _c("tr", [_c("td", [_vm._v("buttonHref")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" href for the action button if tag is set to "), _c("code", [_vm._v("a")])])]), _c("tr", [_c("td", [_vm._v("buttonTarget")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Use to set different targets for button if set to "), _c("code", [_vm._v("a")]), _vm._v(" Options are: "), _c("code", [_vm._v("_self")]), _vm._v(", "), _c("code", [_vm._v("_blank")]), _vm._v(", "), _c("code", [_vm._v("_parent")]), _vm._v(", "), _c("code", [_vm._v("_top")])])]), _c("tr", [_c("td", [_vm._v("dismissTitle")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("Go to Dashboard")]), _c("td", [_vm._v(" Text displayed in the link next to the action button to dismiss the announcement. ")])]), _c("tr", [_c("td", [_vm._v("dismissRoute")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("/")]), _c("td", [_vm._v("Router link path to dismiss the annoucement.")])]), _c("tr", [_c("td", [_vm._v("onOpen")]), _c("td", [_vm._v("function")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Function to call out the tracking code of modal component.")])]), _c("tr", [_c("td", [_vm._v("onAction")]), _c("td", [_vm._v("function")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Function to call out the tracking code of modal button.")])])])]);
}];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  AnnoucementsDemo,
  render,
  staticRenderFns,
  false,
  __vue2_injectStyles,
  null,
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
const Announcements = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Announcements as default
};
//# sourceMappingURL=Announcements-23ab25c0.js.map
