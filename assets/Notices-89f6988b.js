var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import { B as Button } from "./Button-8b9ecd72.js";
import "./Accordion-7aa9b24d.js";
const NoticesCode = `<template>
  <div>
    <div class="section">
      <h1>Notices</h1>
      <p>This is used to point out new locations or features</p>
    </div>
    <div class="section">
      <h2>Tooltip Notice</h2>

      <DemoSection title="Default" :code="demoCode">
        <template #components>
          <TooltipNotice
            v-if="showTooltipNotice"
            title="Defaults"
            desc="All your favorite widgets, just with a new view."
            @handle-tooltip="closeTooltip"
          />

          <TooltipNotice
            v-if="showTooltipNotice"
            title="Top arrow"
            desc="All your favorite widgets, just with a new view."
            :arrowPosition="'top'"
            :hasButton="false"
            @handle-tooltip="closeTooltip"
          />

          <TooltipNotice
            v-if="showTooltipNotice"
            title="Custom button title"
            desc="All your favorite widgets, just with a new view."
            :buttonTitle="'Get started'"
            @handle-tooltip="closeTooltip"
          />

          <TooltipNotice
            v-if="showTooltipNotice"
            title="Custom width"
            desc="All your favorite widgets, just with a new view."
            :width="300"
            @handle-tooltip="closeTooltip"
          />

          <TooltipNotice
            v-if="showTooltipNotice"
            title="Secondary Action"
            desc="All your favorite widgets, just with a new view."
            :hasSecondaryAction="true"
            secondaryActionTitle="No thanks"
            @handle-tooltip="alertTooltip"
            @handle-tooltip-secondary="closeTooltip"
          />
        </template>
      </DemoSection>

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
            <td>arrowPosition</td>
            <td>string</td>
            <td>'left'</td>
            <td>
              Side to put the arrow on. Options are
              <code>left</code> and
              <code>top</code>
            </td>
          </tr>

          <tr>
            <td>buttonTitle</td>
            <td>string</td>
            <td>'Got It'</td>
            <td>Button text</td>
          </tr>

          <tr>
            <td>hasButton</td>
            <td>boolean</td>
            <td>true</td>
            <td>Having a button is optional</td>
          </tr>

          <tr>
            <td>hasSecondaryAction</td>
            <td>boolean</td>
            <td>false</td>
            <td>Have a second action option</td>
          </tr>

          <tr>
            <td>secondaryActionTitle</td>
            <td>string</td>
            <td>'Learn more'</td>
            <td>Title for secondary action</td>
          </tr>

          <tr>
            <td>width</td>
            <td>number</td>
            <td>200</td>
            <td>Change the width of the tooltip</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import DemoSection from "./../components/DemoSection.vue";
import NoticesCode from "./Notices.vue?raw";
import TooltipNotice from "./../components/TooltipNotice.vue";

@Component({
  components: {
    DemoSection,
    TooltipNotice
  }
})
export default class Notices extends Vue {
  demoCode = NoticesCode;
  showTooltipNotice = true;

  alertTooltip() {
    window.alert("tooltip clicked");
  }

  closeTooltip() {
    this.showTooltipNotice = false;
  }
}
<\/script>

<style lang="less" scoped>
::v-deep .s-demo-section__content {
  height: 330px;

  .s-tooltip-notice {
    &:nth-child(1) {
      top: 0px;
      left: 0px;
    }

    &:nth-child(2) {
      top: 0;
      left: 250px;
    }

    &:nth-child(3) {
      top: 0;
      left: 500px;
    }

    &:nth-child(4) {
      top: 169px;
      left: 0;
    }

    &:nth-child(5) {
      top: 169px;
      left: 350px;
    }
  }
}
</style>
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
let TooltipNotice$1 = class TooltipNotice extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "title");
    __publicField(this, "buttonTitle");
    __publicField(this, "secondaryActionTitle");
    __publicField(this, "desc");
    __publicField(this, "arrowPosition");
    __publicField(this, "hasButton");
    __publicField(this, "hasSecondaryAction");
    __publicField(this, "width");
  }
  clickHandler() {
    this.$emit("handle-tooltip");
  }
  secondaryClickHandler() {
    this.$emit("handle-tooltip-secondary");
  }
  get arrowClasses() {
    let classes = [];
    if (this.arrowPosition) {
      classes.push(`s-tooltip-notice__arrow--${this.arrowPosition}`);
    }
    return classes;
  }
};
__decorateClass$1([
  Prop({ required: true })
], TooltipNotice$1.prototype, "title", 2);
__decorateClass$1([
  Prop({ default: "Got it" })
], TooltipNotice$1.prototype, "buttonTitle", 2);
__decorateClass$1([
  Prop({ default: "Learn More" })
], TooltipNotice$1.prototype, "secondaryActionTitle", 2);
__decorateClass$1([
  Prop({ required: true })
], TooltipNotice$1.prototype, "desc", 2);
__decorateClass$1([
  Prop({ default: "left" })
], TooltipNotice$1.prototype, "arrowPosition", 2);
__decorateClass$1([
  Prop({ default: true })
], TooltipNotice$1.prototype, "hasButton", 2);
__decorateClass$1([
  Prop({ default: false })
], TooltipNotice$1.prototype, "hasSecondaryAction", 2);
__decorateClass$1([
  Prop({ default: 200 })
], TooltipNotice$1.prototype, "width", 2);
TooltipNotice$1 = __decorateClass$1([
  Component({
    components: {
      Button
    }
  })
], TooltipNotice$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-tooltip-notice",
    style: {
      width: _vm.width + "px"
    }
  }, [_c("div", {
    staticClass: "s-tooltip-notice-content"
  }, [_c("i", {
    staticClass: "icon-dropdown s-tooltip-notice__arrow",
    class: _vm.arrowClasses
  }), _c("h3", [_vm._v(_vm._s(_vm.title))]), _c("p", [_vm._v(_vm._s(_vm.desc))]), _vm.hasButton ? _c("Button", {
    attrs: {
      "title": _vm.buttonTitle,
      "variation": "action",
      "size": "small"
    },
    on: {
      "click": _vm.clickHandler
    }
  }) : _vm._e(), _vm.hasSecondaryAction ? _c("Button", {
    staticClass: "s-tooltip-notice__secondary-action",
    attrs: {
      "title": _vm.secondaryActionTitle,
      "variation": "link",
      "size": "small"
    },
    on: {
      "click": _vm.secondaryClickHandler
    }
  }) : _vm._e()], 1)]);
};
var staticRenderFns$1 = [];
const TooltipNotice_vue_vue_type_style_index_0_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  TooltipNotice$1,
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
const TooltipNotice2 = /* @__PURE__ */ function() {
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
let Notices$1 = class Notices extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", NoticesCode);
    __publicField(this, "showTooltipNotice", true);
  }
  alertTooltip() {
    window.alert("tooltip clicked");
  }
  closeTooltip() {
    this.showTooltipNotice = false;
  }
};
Notices$1 = __decorateClass([
  Component({
    components: {
      DemoSection,
      TooltipNotice: TooltipNotice2
    }
  })
], Notices$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Tooltip Notice")]), _c("DemoSection", {
    attrs: {
      "title": "Default",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_vm.showTooltipNotice ? _c("TooltipNotice", {
          attrs: {
            "title": "Defaults",
            "desc": "All your favorite widgets, just with a new view."
          },
          on: {
            "handle-tooltip": _vm.closeTooltip
          }
        }) : _vm._e(), _vm.showTooltipNotice ? _c("TooltipNotice", {
          attrs: {
            "title": "Top arrow",
            "desc": "All your favorite widgets, just with a new view.",
            "arrowPosition": "top",
            "hasButton": false
          },
          on: {
            "handle-tooltip": _vm.closeTooltip
          }
        }) : _vm._e(), _vm.showTooltipNotice ? _c("TooltipNotice", {
          attrs: {
            "title": "Custom button title",
            "desc": "All your favorite widgets, just with a new view.",
            "buttonTitle": "Get started"
          },
          on: {
            "handle-tooltip": _vm.closeTooltip
          }
        }) : _vm._e(), _vm.showTooltipNotice ? _c("TooltipNotice", {
          attrs: {
            "title": "Custom width",
            "desc": "All your favorite widgets, just with a new view.",
            "width": 300
          },
          on: {
            "handle-tooltip": _vm.closeTooltip
          }
        }) : _vm._e(), _vm.showTooltipNotice ? _c("TooltipNotice", {
          attrs: {
            "title": "Secondary Action",
            "desc": "All your favorite widgets, just with a new view.",
            "hasSecondaryAction": true,
            "secondaryActionTitle": "No thanks"
          },
          on: {
            "handle-tooltip": _vm.alertTooltip,
            "handle-tooltip-secondary": _vm.closeTooltip
          }
        }) : _vm._e()];
      },
      proxy: true
    }])
  }), _vm._m(1)], 1)]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Notices")]), _c("p", [_vm._v("This is used to point out new locations or features")])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Props")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("arrowPosition")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("'left'")]), _c("td", [_vm._v(" Side to put the arrow on. Options are "), _c("code", [_vm._v("left")]), _vm._v(" and "), _c("code", [_vm._v("top")])])]), _c("tr", [_c("td", [_vm._v("buttonTitle")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("'Got It'")]), _c("td", [_vm._v("Button text")])]), _c("tr", [_c("td", [_vm._v("hasButton")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v("Having a button is optional")])]), _c("tr", [_c("td", [_vm._v("hasSecondaryAction")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("Have a second action option")])]), _c("tr", [_c("td", [_vm._v("secondaryActionTitle")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("'Learn more'")]), _c("td", [_vm._v("Title for secondary action")])]), _c("tr", [_c("td", [_vm._v("width")]), _c("td", [_vm._v("number")]), _c("td", [_vm._v("200")]), _c("td", [_vm._v("Change the width of the tooltip")])])])]);
}];
const Notices_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Notices$1,
  render,
  staticRenderFns,
  false,
  __vue2_injectStyles,
  "1e8a3ca9",
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
const Notices2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Notices2 as default
};
//# sourceMappingURL=Notices-89f6988b.js.map
