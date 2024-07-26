var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { A as Accordion } from "./Accordion-7aa9b24d.js";
import { B as Button } from "./Button-8b9ecd72.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import { S as Spinner } from "./Spinner-e272b66e.js";
const LoadersCode = `<template>
  <div>
    <div class="section">
      <h1>Loaders</h1>
      <p>
        These are animated with pure SVG, they will not be animated in Microsoft
        Edge, or Opera, and will look different in firefox.
      </p>

      <div class="section">
        <h2>Full Page Loading</h2>

        <pre><code>import { Loading } from 'streamlabs-beaker';

components: {
  Loading
}</code></pre>

        <div class="section">
          <h2>Standard</h2>

          <div class="section">
            <DemoSection title="Standard" :code="demoCode">
              <template #components>
                <Loading
                  v-if="isLoading"
                  :loadingStrs="string"
                  @closeLoading="isLoading = false"
                />
              </template>
            </DemoSection>
          </div>

          <div class="s-button-container s-button-container--left">
            <Button
              variation="default"
              title="loading default"
              @click="isLoading = true"
            />
          </div>
        </div>

        <div class="section">
          <h2>Semi-Opaque Background</h2>

          <div class="section">
            <DemoSection title="Semi-Opaque Background" :code="demoCode">
              <template #components>
                <Loading
                  v-if="isLoadingSemi"
                  :semiOpaque="true"
                  :loadingStrs="array"
                  :isRandom="true"
                  @closeLoading="isLoadingSemi = false"
                />
              </template>
            </DemoSection>
          </div>

          <div class="s-button-container s-button-container--left">
            <Button
              variation="default"
              title="loading semi opaque"
              @click="isLoadingSemi = true"
            />
          </div>
        </div>

        <div class="section">
          <h2>Full Page Loading - Swapped</h2>

          <div class="section">
            <DemoSection title="Full Page Loading - Swapped" :code="demoCode">
              <template #components>
                <Loading
                  v-if="isLoadingSwapped"
                  :loadingStrs="array"
                  :isRandom="true"
                  :swapMode="true"
                  @closeLoading="isLoadingSwapped = false"
                />
              </template>
            </DemoSection>
          </div>

          <div class="s-button-container s-button-container--left">
            <Button
              variation="default"
              title="loading swapped option"
              @click="isLoadingSwapped = true"
            />
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
              <td>loadingStrs</td>
              <td>any[] | string</td>
              <td>-</td>
              <td>
                Pass an array of stings into the loader. We recommend 3-4. Each
                shows for 4 seconds before it rotates.
              </td>
            </tr>
            <tr>
              <td>isRandom</td>
              <td>boolean</td>
              <td>false</td>
              <td>
                Randomize the strings if you set
                <code>loadingStrs</code>as an array
              </td>
            </tr>
            <tr>
              <td>semiOpaque</td>
              <td>boolean</td>
              <td>false</td>
              <td>
                Sets the background overlay to semi-opacity rather than full
                opacity.
              </td>
            </tr>
            <tr>
              <td>swapMode</td>
              <td>boolean</td>
              <td>false</td>
              <td>
                In case you need to swap day/night mode - used for Creator
                Sites.
              </td>
            </tr>
            <tr>
              <td>fixedBackground</td>
              <td>boolean</td>
              <td>true</td>
              <td>
                Allows loader to take dimensions of parent if set to
                <code>false</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section">
      <h2>Section Loading Spinners</h2>

      <pre><code>import { Spinner } from 'streamlabs-beaker';

components: {
  Spinner
}</code></pre>

      <h3>Loading Spinner</h3>
      <p>This is the standard size for sections within a page layout.</p>

      <div class="section">
        <DemoSection title="Loading Spinner" :code="demoCode">
          <template #components>
            <Spinner size="small" />
          </template>
        </DemoSection>
      </div>

      <h3>Loading Spinner Large</h3>
      <p>
        This is the large size spinner. It should only be used in large sections
        or full page transitions.
      </p>

      <div class="section">
        <DemoSection title="Loading Spinner Large" :code="demoCode">
          <template #components>
            <Spinner size="large" />
          </template>
        </DemoSection>
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
            <td>size</td>
            <td>String</td>
            <td>'small'</td>
            <td>'small', 'large'</td>
          </tr>
          <tr>
            <td>swap</td>
            <td>Boolean</td>
            <td>false</td>
            <td>
              If you need to swap day/night mode [ true ], default: [ false ]
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import Button from "./../components/Button.vue";
import LoadersCode from "./Loaders.vue?raw";
import DemoSection from "./../components/DemoSection.vue";
import Loading from "./../components/Loading.vue";
import Spinner from "./../components/Spinner.vue";

@Component({
  components: {
    Accordion,
    Button,
    DemoSection,
    Loading,
    Spinner
  }
})
export default class Loaders extends Vue {
  demoCode = LoadersCode;
  isLoading = false;
  isLoadingSemi = false;
  isLoadingSwapped = false;

  array = [
    "This loader is using an array of strings...",
    "Syncing all files to our cloud...",
    "Lorem ipsum dolor sit amet, consectetur...",
    "Sed do eiusmod tempor incididunt ut labore..."
  ];
  string = "This loader is using a single string...";
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
let Loading$1 = class Loading extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "loadingStrs");
    __publicField(this, "semiOpaque");
    __publicField(this, "isRandom");
    __publicField(this, "swapMode");
    __publicField(this, "fixedBackground");
    __publicField(this, "loaderText", "");
    __publicField(this, "index", 0);
  }
  mounted() {
    if (typeof this.loadingStrs === "string") {
      this.loaderText = this.loadingStrs;
    } else {
      this.distinguishNumberOfArrays();
    }
  }
  distinguishNumberOfArrays() {
    if (this.loadingStrs.length > 1) {
      if (this.isRandom) {
        this.loopRandomText();
      } else {
        this.loopText();
      }
    } else {
      this.loaderText = this.loadingStrs[0];
    }
  }
  loopText() {
    this.loaderText = this.loadingStrs[this.index];
    this.index++;
    if (this.index === this.loadingStrs.length) {
      this.index = 0;
    }
    setTimeout(this.loopText, 4e3);
  }
  loopRandomText() {
    const randomIndex = Math.floor(Math.random() * this.loadingStrs.length);
    if (this.loaderText === this.loadingStrs[randomIndex]) {
      this.loopRandomText();
    } else {
      this.loaderText = this.loadingStrs[randomIndex];
      setTimeout(this.loopRandomText, 4e3);
    }
  }
};
__decorateClass$1([
  Prop({ default: [] })
], Loading$1.prototype, "loadingStrs", 2);
__decorateClass$1([
  Prop({ default: false })
], Loading$1.prototype, "semiOpaque", 2);
__decorateClass$1([
  Prop({ default: false })
], Loading$1.prototype, "isRandom", 2);
__decorateClass$1([
  Prop({ default: false })
], Loading$1.prototype, "swapMode", 2);
__decorateClass$1([
  Prop({ default: true })
], Loading$1.prototype, "fixedBackground", 2);
Loading$1 = __decorateClass$1([
  Component({
    components: { Spinner, Button }
  })
], Loading$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-loader",
    attrs: {
      "swapMode": _vm.swapMode
    }
  }, [_c("div", {
    staticClass: "s-loader__bg",
    class: {
      "s-loader__bg--semi": _vm.semiOpaque,
      "s-loader--modeswap": _vm.swapMode,
      "s-loader--fixed": _vm.fixedBackground
    }
  }, [_c("div", {
    staticClass: "s-loader__inner"
  }, [_c("Spinner", {
    staticClass: "s-spinner__overlay",
    attrs: {
      "swap": _vm.swapMode,
      "size": "large"
    }
  }), _c("div", {
    staticClass: "s-loader__text"
  }, [_vm._v(_vm._s(_vm.loaderText))])], 1)])]);
};
var staticRenderFns$1 = [];
const Loading_vue_vue_type_style_index_0_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  Loading$1,
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
const Loading2 = /* @__PURE__ */ function() {
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
let Loaders$1 = class Loaders extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", LoadersCode);
    __publicField(this, "isLoading", false);
    __publicField(this, "isLoadingSemi", false);
    __publicField(this, "isLoadingSwapped", false);
    __publicField(this, "array", [
      "This loader is using an array of strings...",
      "Syncing all files to our cloud...",
      "Lorem ipsum dolor sit amet, consectetur...",
      "Sed do eiusmod tempor incididunt ut labore..."
    ]);
    __publicField(this, "string", "This loader is using a single string...");
  }
};
Loaders$1 = __decorateClass([
  Component({
    components: {
      Accordion,
      Button,
      DemoSection,
      Loading: Loading2,
      Spinner
    }
  })
], Loaders$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Loaders")]), _c("p", [_vm._v(" These are animated with pure SVG, they will not be animated in Microsoft Edge, or Opera, and will look different in firefox. ")]), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Full Page Loading")]), _vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Standard")]), _c("div", {
    staticClass: "section"
  }, [_c("DemoSection", {
    attrs: {
      "title": "Standard",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_vm.isLoading ? _c("Loading", {
          attrs: {
            "loadingStrs": _vm.string
          },
          on: {
            "closeLoading": function($event) {
              _vm.isLoading = false;
            }
          }
        }) : _vm._e()];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "s-button-container s-button-container--left"
  }, [_c("Button", {
    attrs: {
      "variation": "default",
      "title": "loading default"
    },
    on: {
      "click": function($event) {
        _vm.isLoading = true;
      }
    }
  })], 1)]), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Semi-Opaque Background")]), _c("div", {
    staticClass: "section"
  }, [_c("DemoSection", {
    attrs: {
      "title": "Semi-Opaque Background",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_vm.isLoadingSemi ? _c("Loading", {
          attrs: {
            "semiOpaque": true,
            "loadingStrs": _vm.array,
            "isRandom": true
          },
          on: {
            "closeLoading": function($event) {
              _vm.isLoadingSemi = false;
            }
          }
        }) : _vm._e()];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "s-button-container s-button-container--left"
  }, [_c("Button", {
    attrs: {
      "variation": "default",
      "title": "loading semi opaque"
    },
    on: {
      "click": function($event) {
        _vm.isLoadingSemi = true;
      }
    }
  })], 1)]), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Full Page Loading - Swapped")]), _c("div", {
    staticClass: "section"
  }, [_c("DemoSection", {
    attrs: {
      "title": "Full Page Loading - Swapped",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_vm.isLoadingSwapped ? _c("Loading", {
          attrs: {
            "loadingStrs": _vm.array,
            "isRandom": true,
            "swapMode": true
          },
          on: {
            "closeLoading": function($event) {
              _vm.isLoadingSwapped = false;
            }
          }
        }) : _vm._e()];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "s-button-container s-button-container--left"
  }, [_c("Button", {
    attrs: {
      "variation": "default",
      "title": "loading swapped option"
    },
    on: {
      "click": function($event) {
        _vm.isLoadingSwapped = true;
      }
    }
  })], 1)]), _vm._m(1)])]), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Section Loading Spinners")]), _vm._m(2), _c("h3", [_vm._v("Loading Spinner")]), _c("p", [_vm._v("This is the standard size for sections within a page layout.")]), _c("div", {
    staticClass: "section"
  }, [_c("DemoSection", {
    attrs: {
      "title": "Loading Spinner",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Spinner", {
          attrs: {
            "size": "small"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("h3", [_vm._v("Loading Spinner Large")]), _c("p", [_vm._v(" This is the large size spinner. It should only be used in large sections or full page transitions. ")]), _c("div", {
    staticClass: "section"
  }, [_c("DemoSection", {
    attrs: {
      "title": "Loading Spinner Large",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Spinner", {
          attrs: {
            "size": "large"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _vm._m(3)])]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("pre", [_c("code", [_vm._v("import { Loading } from 'streamlabs-beaker';\n\ncomponents: {\n  Loading\n}")])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Props")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("loadingStrs")]), _c("td", [_vm._v("any[] | string")]), _c("td", [_vm._v("-")]), _c("td", [_vm._v(" Pass an array of stings into the loader. We recommend 3-4. Each shows for 4 seconds before it rotates. ")])]), _c("tr", [_c("td", [_vm._v("isRandom")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v(" Randomize the strings if you set "), _c("code", [_vm._v("loadingStrs")]), _vm._v("as an array ")])]), _c("tr", [_c("td", [_vm._v("semiOpaque")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v(" Sets the background overlay to semi-opacity rather than full opacity. ")])]), _c("tr", [_c("td", [_vm._v("swapMode")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v(" In case you need to swap day/night mode - used for Creator Sites. ")])]), _c("tr", [_c("td", [_vm._v("fixedBackground")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v(" Allows loader to take dimensions of parent if set to "), _c("code", [_vm._v("false")])])])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("pre", [_c("code", [_vm._v("import { Spinner } from 'streamlabs-beaker';\n\ncomponents: {\n  Spinner\n}")])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Props")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("size")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("'small'")]), _c("td", [_vm._v("'small', 'large'")])]), _c("tr", [_c("td", [_vm._v("swap")]), _c("td", [_vm._v("Boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v(" If you need to swap day/night mode [ true ], default: [ false ] ")])])])]);
}];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Loaders$1,
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
const Loaders2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Loaders2 as default
};
//# sourceMappingURL=Loaders-198d9444.js.map
