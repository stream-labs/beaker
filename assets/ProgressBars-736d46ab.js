var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
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
let ProgressBar$1 = class ProgressBar extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "progressComplete");
  }
  get getProgress() {
    return "width:" + this.progressComplete + "%";
  }
};
__decorateClass$1([
  Prop()
], ProgressBar$1.prototype, "progressComplete", 2);
ProgressBar$1 = __decorateClass$1([
  Component({})
], ProgressBar$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-progress"
  }, [_c("div", {
    staticClass: "s-progress-bar",
    style: _vm.getProgress
  })]);
};
var staticRenderFns$1 = [];
const ProgressBar_vue_vue_type_style_index_0_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  ProgressBar$1,
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
const ProgressBar2 = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
const ProgressBarsCode = '<template>\n  <div>\n    <div class="section">\n      <h1>Progress Bars</h1>\n\n      <pre><code>import { ProgressBar } from "streamlabs-beaker"\n\ncomponents: {\n  ProgressBar\n}</code></pre>\n\n      <DemoSection title="Default" :code="demoCode">\n        <template #components>\n          <ProgressBar :progressComplete="50" />\n        </template>\n      </DemoSection>\n    </div>\n\n    <table class="docs-table">\n      <thead>\n        <tr>\n          <th>Props</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>progressComplete</td>\n          <td>Number</td>\n          <td>null</td>\n          <td>Progress complete in percentage</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</template>\n\n<script lang="ts">\nimport { Component, Vue } from "vue-property-decorator";\nimport ProgressBar from "./../components/ProgressBar.vue";\nimport ProgressBarsCode from "./ProgressBars.vue?raw";\nimport DemoSection from "./../components/DemoSection.vue";\n@Component({\n  components: {\n    DemoSection,\n    ProgressBar\n  }\n})\nexport default class ProgressBars extends Vue {\n  demoCode = ProgressBarsCode;\n  value = 50;\n}\n<\/script>\n';
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
let ProgressBars$1 = class ProgressBars extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", ProgressBarsCode);
    __publicField(this, "value", 50);
  }
};
ProgressBars$1 = __decorateClass([
  Component({
    components: {
      DemoSection,
      ProgressBar: ProgressBar2
    }
  })
], ProgressBars$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Progress Bars")]), _vm._m(0), _c("DemoSection", {
    attrs: {
      "title": "Default",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("ProgressBar", {
          attrs: {
            "progressComplete": 50
          }
        })];
      },
      proxy: true
    }])
  })], 1), _vm._m(1)]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("pre", [_c("code", [_vm._v('import { ProgressBar } from "streamlabs-beaker"\n\ncomponents: {\n  ProgressBar\n}')])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Props")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("progressComplete")]), _c("td", [_vm._v("Number")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Progress complete in percentage")])])])]);
}];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  ProgressBars$1,
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
const ProgressBars2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  ProgressBars2 as default
};
//# sourceMappingURL=ProgressBars-736d46ab.js.map
