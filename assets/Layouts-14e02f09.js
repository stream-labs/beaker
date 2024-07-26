var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { V as Vue, C as Component, P as Prop, n as normalizeComponent } from "./index-158ccef1.js";
import { B as Button } from "./Button-8b9ecd72.js";
import { i as index } from "./vue-mq.es-228d853f.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import "./Accordion-7aa9b24d.js";
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
let ContentRow$1 = class ContentRow extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "icon");
    __publicField(this, "btnVariation");
    __publicField(this, "btnTitle");
    __publicField(this, "buttonHref");
    __publicField(this, "buttonTo");
    __publicField(this, "buttonTag");
    __publicField(this, "$mq");
  }
  get contentRowMq() {
    return this.$mq === "sm" ? "s-content-row-mq" : "";
  }
  get contentBoxMq() {
    return this.$mq === "sm" ? "s-content-box-mq" : "";
  }
  get bannerIconMq() {
    return this.$mq === "sm" ? "s-banner__icon-mq" : "";
  }
  get contentTitleMq() {
    return this.$mq === "sm" ? "s-content__title-mq" : "";
  }
  get contentTextMq() {
    return this.$mq === "sm" ? "s-content__text-mq" : "";
  }
};
__decorateClass$1([
  Prop()
], ContentRow$1.prototype, "icon", 2);
__decorateClass$1([
  Prop({ default: "default" })
], ContentRow$1.prototype, "btnVariation", 2);
__decorateClass$1([
  Prop({ default: "Default" })
], ContentRow$1.prototype, "btnTitle", 2);
__decorateClass$1([
  Prop()
], ContentRow$1.prototype, "buttonHref", 2);
__decorateClass$1([
  Prop()
], ContentRow$1.prototype, "buttonTo", 2);
__decorateClass$1([
  Prop({ default: "button" })
], ContentRow$1.prototype, "buttonTag", 2);
ContentRow$1 = __decorateClass$1([
  Component({
    components: {
      Button
    }
  })
], ContentRow$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-content-row",
    class: _vm.contentRowMq
  }, [_c("div", {
    staticClass: "s-content-box",
    class: _vm.contentBoxMq
  }, [_vm.icon ? _c("i", {
    staticClass: "s-banner__icon",
    class: `icon-${_vm.icon}`
  }) : _vm._e(), _c("h2", {
    staticClass: "s-content__title",
    class: _vm.contentTitleMq
  }, [_vm._t("title")], 2), _c("p", {
    staticClass: "s-content__text",
    class: _vm.contentTextMq
  }, [_vm._t("text")], 2)]), _c("div", {
    staticClass: "s-button-container"
  }, [_c("Button", {
    attrs: {
      "size": "fixed-width",
      "variation": _vm.btnVariation,
      "title": _vm.btnTitle,
      "onClick": "buttonClick",
      "href": _vm.buttonHref,
      "to": _vm.buttonTo,
      "tag": _vm.buttonTag
    }
  })], 1)]);
};
var staticRenderFns$1 = [];
const ContentRow_vue_vue_type_style_index_0_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  ContentRow$1,
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
const ContentRow2 = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
const LayoutsCode = `<template>
  <div>
    <div class="section">
      <h1>Content Row</h1>
      <pre><code>import { ContentRow } from 'streamlabs-beaker';

components: {
  ContentRow
}</code></pre>
    </div>

    <div class="section">
      <h2>Content Row</h2>
      <p>Used for content row.</p>

      <DemoSection title="Content Row" :code="demoCode">
        <template #components>
          <ContentRow
            :icon="'desktop'"
            :btnVariation="'default'"
            :btnTitle="'Default'"
          >
            <span slot="title">Tiltify</span>
            <span slot="text">
              Link your account and visit Alert Box to configure your Tiltify
              Events.
            </span>
          </ContentRow>
        </template>
      </DemoSection>

      <ContentRow
        :icon="'education'"
        :btnVariation="'action'"
        :btnTitle="'Action'"
      >
        <template slot="title"
          >Tiltify</template
        >
        <template slot="text"
          >Link your account and visit Alert Box to configure your Tiltify
          Events.</template
        >
      </ContentRow>
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
          <td>icon</td>
          <td>string</td>
          <td>null</td>
          <td>icon to display. Options are listed in Icons page.</td>
        </tr>

        <tr>
          <td>btnVariation</td>
          <td>string</td>
          <td>default</td>
          <td>
            The variation style of a button. Primary options are
            <code>default</code>, <code>action</code> and <code>warning</code>.
            Other options are <code>subscribe</code>, <code>paypal</code>,
            <code>download</code> and <code>navigation</code>. Platform options
            are <code>facebook</code>, <code>mixer</code>, <code>twitch</code>,
            <code>yt</code>, <code>periscope</code> and <code>picarto</code>.
          </td>
        </tr>

        <tr>
          <td>btnTitle</td>
          <td>string</td>
          <td>null</td>
          <td>button title to display</td>
        </tr>

        <tr>
          <td>buttonHref</td>
          <td>String</td>
          <td>null</td>
          <td>
            Used if the the
            <code>type</code> is an <code>a</code> element (links).
          </td>
        </tr>
        <tr>
          <td>buttonTo</td>
          <td>String</td>
          <td>null</td>
          <td>
            Used if the the
            <code>type</code> is a <code>router-link</code>. Define the path.
          </td>
        </tr>
        <tr>
          <td>buttonTag</td>
          <td>String</td>
          <td>button</td>
          <td>
            What type of element the component is. Options are
            <code>button</code>, <code>a</code>,
            <code>router-link</code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContentRow from "./../components/ContentRow.vue";
import DemoSection from "./../components/DemoSection.vue";
import LayoutsCode from "./Layouts.vue?raw";

@Component({
  components: {
    ContentRow,
    DemoSection
  }
})
export default class Layouts extends Vue {
  demoCode = LayoutsCode;
}
<\/script>
`;
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
let Layouts$1 = class Layouts extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", LayoutsCode);
  }
};
Layouts$1 = __decorateClass([
  Component({
    components: {
      ContentRow: ContentRow2,
      DemoSection
    }
  })
], Layouts$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Content Row")]), _c("p", [_vm._v("Used for content row.")]), _c("DemoSection", {
    attrs: {
      "title": "Content Row",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("ContentRow", {
          attrs: {
            "icon": "desktop",
            "btnVariation": "default",
            "btnTitle": "Default"
          }
        }, [_c("span", {
          attrs: {
            "slot": "title"
          },
          slot: "title"
        }, [_vm._v("Tiltify")]), _c("span", {
          attrs: {
            "slot": "text"
          },
          slot: "text"
        }, [_vm._v(" Link your account and visit Alert Box to configure your Tiltify Events. ")])])];
      },
      proxy: true
    }])
  }), _c("ContentRow", {
    attrs: {
      "icon": "education",
      "btnVariation": "action",
      "btnTitle": "Action"
    }
  }, [_c("template", {
    slot: "title"
  }, [_vm._v("Tiltify")]), _c("template", {
    slot: "text"
  }, [_vm._v("Link your account and visit Alert Box to configure your Tiltify Events.")])], 2)], 1), _vm._m(1)]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Content Row")]), _c("pre", [_c("code", [_vm._v("import { ContentRow } from 'streamlabs-beaker';\n\ncomponents: {\n  ContentRow\n}")])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Props")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("icon")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("icon to display. Options are listed in Icons page.")])]), _c("tr", [_c("td", [_vm._v("btnVariation")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("default")]), _c("td", [_vm._v(" The variation style of a button. Primary options are "), _c("code", [_vm._v("default")]), _vm._v(", "), _c("code", [_vm._v("action")]), _vm._v(" and "), _c("code", [_vm._v("warning")]), _vm._v(". Other options are "), _c("code", [_vm._v("subscribe")]), _vm._v(", "), _c("code", [_vm._v("paypal")]), _vm._v(", "), _c("code", [_vm._v("download")]), _vm._v(" and "), _c("code", [_vm._v("navigation")]), _vm._v(". Platform options are "), _c("code", [_vm._v("facebook")]), _vm._v(", "), _c("code", [_vm._v("mixer")]), _vm._v(", "), _c("code", [_vm._v("twitch")]), _vm._v(", "), _c("code", [_vm._v("yt")]), _vm._v(", "), _c("code", [_vm._v("periscope")]), _vm._v(" and "), _c("code", [_vm._v("picarto")]), _vm._v(". ")])]), _c("tr", [_c("td", [_vm._v("btnTitle")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("button title to display")])]), _c("tr", [_c("td", [_vm._v("buttonHref")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Used if the the "), _c("code", [_vm._v("type")]), _vm._v(" is an "), _c("code", [_vm._v("a")]), _vm._v(" element (links). ")])]), _c("tr", [_c("td", [_vm._v("buttonTo")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Used if the the "), _c("code", [_vm._v("type")]), _vm._v(" is a "), _c("code", [_vm._v("router-link")]), _vm._v(". Define the path. ")])]), _c("tr", [_c("td", [_vm._v("buttonTag")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("button")]), _c("td", [_vm._v(" What type of element the component is. Options are "), _c("code", [_vm._v("button")]), _vm._v(", "), _c("code", [_vm._v("a")]), _vm._v(", "), _c("code", [_vm._v("router-link")])])])])]);
}];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Layouts$1,
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
const Layouts2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Layouts2 as default
};
//# sourceMappingURL=Layouts-14e02f09.js.map
