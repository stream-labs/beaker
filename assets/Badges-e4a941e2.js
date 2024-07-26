var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { A as Accordion } from "./Accordion-7aa9b24d.js";
import { B as Badge } from "./Badge-2f139b6a.js";
import { C as Callout } from "./Callout-1ea6582d.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
const BadgesCode = `<template>
  <div>
    <div class="section">
      <h1>Badges</h1>
      <p>
        By default, our Badges are designed to be on the right side of elements
        with 8px of margin on the left. If you would like to use a Badge on the
        left side of an element, set prop
        <code>align-left="true"</code> and it will switch the margin to be on
        the right side.
      </p>

      <pre><code>import { Badge } from 'streamlabs-beaker';

components: {
  Badge
}</code></pre>

      <div class="section">
        <h2>Standard Badges</h2>
        <DemoSection title="Standard Badges" :code="demoCode">
          <template #components>
            <Badge variant="beta" :align-left="true">Beta</Badge>
            <Badge variant="new" :align-left="true">New</Badge>
            <Badge variant="warning" :align-left="true">Error</Badge>
            <Badge variant="tag" :align-left="true">Tag</Badge>
            <Badge variant="pro" :align-left="true">Pro</Badge>
            <Badge
              :align-left="true"
              background-color="pink"
              text-color="#ffffff"
              >Custom</Badge
            >
            <Badge variant="prime" :align-left="true" />
            <Badge variant="ultra" :align-left="true" />
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h2>Alt Badges</h2>
        <DemoSection title="Alt Badges" :code="demoCode">
          <template #components>
            <Badge variant="beta-alt" :align-left="true">Beta</Badge>
            <Badge variant="new-alt" :align-left="true">New</Badge>
            <Badge variant="warning-alt" :align-left="true">Error</Badge>
            <Badge variant="tag-alt" :align-left="true">Tag</Badge>
            <Badge variant="pro-alt" :align-left="true">Pro</Badge>
            <Badge variant="prime-alt" :align-left="true"></Badge>
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h2>Small Badges</h2>
        <DemoSection title="Small Badges" :code="demoCode">
          <template #components>
            <Badge :small="true" variant="beta" :align-left="true">Beta</Badge>
            <Badge :small="true" variant="new" :align-left="true">New</Badge>
            <Badge :small="true" variant="warning" :align-left="true">
              Error
            </Badge>
            <Badge :small="true" variant="tag" :align-left="true">Tag</Badge>
            <Badge :small="true" variant="pro" :align-left="true">Pro</Badge>
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h2>Progress Badge</h2>
        <p>Used to show amount of items sold in merch.</p>
        <DemoSection title="Progress Badge" :code="demoCode">
          <template #components>
            <Badge
              :align-left="true"
              variant="progress"
              backgroundColor="#8736e0"
              :current="17"
              :total="25"
              suffix="Sold"
            />
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h2>Count Badge</h2>
        <p>Used to show amount of items sold in merch.</p>
        <DemoSection title="Count Badge" :code="demoCode">
          <template #components>
            <Badge variant="count">3</Badge>
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h2>Mod Badge</h2>
        <p>Used in an info callout.</p>
        <DemoSection title="Mod Badge" :code="demoCode">
          <template #components>
            <Callout variation="info">
              Remember to
              <Badge variant="mod">/mod Streamlabs</Badge>
              to initiate Cloudbot.
            </Callout>
          </template>
        </DemoSection>
      </div>
    </div>

    <table class="docs-table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>variant</td>
          <td>string</td>
          <td>"success"</td>
          <td>
            How the Badge will look or funciton. Variants:
            <code>success</code>, <code>tag</code>*, <code>new</code>*,
            <code>beta</code>*, <code>warning</code>*, <code>pro</code>*,
            <code>progress</code>, <code>mod</code>, and <code>count</code>.
            <br />
            <small>
              *Alternate style available by adding
              <code>-alt</code> to variant string.
            </small>
          </td>
        </tr>
        <tr>
          <td>alignLeft</td>
          <td>boolean</td>
          <td>false</td>
          <td>Moves 8px of margin from the left to the right.</td>
        </tr>
        <tr>
          <td>noMargin</td>
          <td>boolean</td>
          <td>false</td>
          <td>Removes margin from left and right.</td>
        </tr>
        <tr>
          <td>backgroundColor</td>
          <td>string</td>
          <td>"#31c3a2"</td>
          <td>
            Use this prop to change the background color only if you need an
            option that's not one of the provided variants.
          </td>
        </tr>
        <tr>
          <td>textColor</td>
          <td>string</td>
          <td>"#ffffff"</td>
          <td>
            Use this prop to change the text color only if you need an option
            that's not one of the provided variants.
          </td>
        </tr>
        <tr>
          <td>current</td>
          <td>number</td>
          <td>null</td>
          <td>
            Current progress amount.
            <code>variant</code> prop must be set to <code>progress</code>.
          </td>
        </tr>
        <tr>
          <td>total</td>
          <td>number</td>
          <td>null</td>
          <td>
            Total progross amount.
            <code>variant</code> prop must be set to <code>progress</code>.
          </td>
        </tr>
        <tr>
          <td>separator</td>
          <td>string</td>
          <td>"/"</td>
          <td>
            Separator between current and total amounts is displayed.
            <code>variant</code> prop must be set to <code>progress</code>.
          </td>
        </tr>
        <tr>
          <td>suffix</td>
          <td>string</td>
          <td>null</td>
          <td>
            String to the right of the total amount.
            <code>variant</code> prop must be set to <code>progress</code>.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import Badge from "./../components/Badge.vue";
import BadgesCode from "./Badges.vue?raw";
import Callout from "./../components/Callout.vue";
import DemoSection from "./../components/DemoSection.vue";

@Component({
  components: {
    Accordion,
    Badge,
    Callout,
    DemoSection
  }
})
export default class Badges extends Vue {
  demoCode = BadgesCode;
}
<\/script>

<style lang="less" scoped>
.section__components {
  display: flex;
  align-items: center;
}
</style>
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
let Badges$1 = class Badges extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", BadgesCode);
  }
};
Badges$1 = __decorateClass([
  Component({
    components: {
      Accordion,
      Badge,
      Callout,
      DemoSection
    }
  })
], Badges$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Badges")]), _vm._m(0), _vm._m(1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Standard Badges")]), _c("DemoSection", {
    attrs: {
      "title": "Standard Badges",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Badge", {
          attrs: {
            "variant": "beta",
            "align-left": true
          }
        }, [_vm._v("Beta")]), _c("Badge", {
          attrs: {
            "variant": "new",
            "align-left": true
          }
        }, [_vm._v("New")]), _c("Badge", {
          attrs: {
            "variant": "warning",
            "align-left": true
          }
        }, [_vm._v("Error")]), _c("Badge", {
          attrs: {
            "variant": "tag",
            "align-left": true
          }
        }, [_vm._v("Tag")]), _c("Badge", {
          attrs: {
            "variant": "pro",
            "align-left": true
          }
        }, [_vm._v("Pro")]), _c("Badge", {
          attrs: {
            "align-left": true,
            "background-color": "pink",
            "text-color": "#ffffff"
          }
        }, [_vm._v("Custom")]), _c("Badge", {
          attrs: {
            "variant": "prime",
            "align-left": true
          }
        }), _c("Badge", {
          attrs: {
            "variant": "ultra",
            "align-left": true
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Alt Badges")]), _c("DemoSection", {
    attrs: {
      "title": "Alt Badges",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Badge", {
          attrs: {
            "variant": "beta-alt",
            "align-left": true
          }
        }, [_vm._v("Beta")]), _c("Badge", {
          attrs: {
            "variant": "new-alt",
            "align-left": true
          }
        }, [_vm._v("New")]), _c("Badge", {
          attrs: {
            "variant": "warning-alt",
            "align-left": true
          }
        }, [_vm._v("Error")]), _c("Badge", {
          attrs: {
            "variant": "tag-alt",
            "align-left": true
          }
        }, [_vm._v("Tag")]), _c("Badge", {
          attrs: {
            "variant": "pro-alt",
            "align-left": true
          }
        }, [_vm._v("Pro")]), _c("Badge", {
          attrs: {
            "variant": "prime-alt",
            "align-left": true
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Small Badges")]), _c("DemoSection", {
    attrs: {
      "title": "Small Badges",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Badge", {
          attrs: {
            "small": true,
            "variant": "beta",
            "align-left": true
          }
        }, [_vm._v("Beta")]), _c("Badge", {
          attrs: {
            "small": true,
            "variant": "new",
            "align-left": true
          }
        }, [_vm._v("New")]), _c("Badge", {
          attrs: {
            "small": true,
            "variant": "warning",
            "align-left": true
          }
        }, [_vm._v(" Error ")]), _c("Badge", {
          attrs: {
            "small": true,
            "variant": "tag",
            "align-left": true
          }
        }, [_vm._v("Tag")]), _c("Badge", {
          attrs: {
            "small": true,
            "variant": "pro",
            "align-left": true
          }
        }, [_vm._v("Pro")])];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Progress Badge")]), _c("p", [_vm._v("Used to show amount of items sold in merch.")]), _c("DemoSection", {
    attrs: {
      "title": "Progress Badge",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Badge", {
          attrs: {
            "align-left": true,
            "variant": "progress",
            "backgroundColor": "#8736e0",
            "current": 17,
            "total": 25,
            "suffix": "Sold"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Count Badge")]), _c("p", [_vm._v("Used to show amount of items sold in merch.")]), _c("DemoSection", {
    attrs: {
      "title": "Count Badge",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Badge", {
          attrs: {
            "variant": "count"
          }
        }, [_vm._v("3")])];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Mod Badge")]), _c("p", [_vm._v("Used in an info callout.")]), _c("DemoSection", {
    attrs: {
      "title": "Mod Badge",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Callout", {
          attrs: {
            "variation": "info"
          }
        }, [_vm._v(" Remember to "), _c("Badge", {
          attrs: {
            "variant": "mod"
          }
        }, [_vm._v("/mod Streamlabs")]), _vm._v(" to initiate Cloudbot. ")], 1)];
      },
      proxy: true
    }])
  })], 1)]), _vm._m(2)]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("p", [_vm._v(" By default, our Badges are designed to be on the right side of elements with 8px of margin on the left. If you would like to use a Badge on the left side of an element, set prop "), _c("code", [_vm._v('align-left="true"')]), _vm._v(" and it will switch the margin to be on the right side. ")]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("pre", [_c("code", [_vm._v("import { Badge } from 'streamlabs-beaker';\n\ncomponents: {\n  Badge\n}")])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("variant")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v('"success"')]), _c("td", [_vm._v(" How the Badge will look or funciton. Variants: "), _c("code", [_vm._v("success")]), _vm._v(", "), _c("code", [_vm._v("tag")]), _vm._v("*, "), _c("code", [_vm._v("new")]), _vm._v("*, "), _c("code", [_vm._v("beta")]), _vm._v("*, "), _c("code", [_vm._v("warning")]), _vm._v("*, "), _c("code", [_vm._v("pro")]), _vm._v("*, "), _c("code", [_vm._v("progress")]), _vm._v(", "), _c("code", [_vm._v("mod")]), _vm._v(", and "), _c("code", [_vm._v("count")]), _vm._v(". "), _c("br"), _c("small", [_vm._v(" *Alternate style available by adding "), _c("code", [_vm._v("-alt")]), _vm._v(" to variant string. ")])])]), _c("tr", [_c("td", [_vm._v("alignLeft")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("Moves 8px of margin from the left to the right.")])]), _c("tr", [_c("td", [_vm._v("noMargin")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("Removes margin from left and right.")])]), _c("tr", [_c("td", [_vm._v("backgroundColor")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v('"#31c3a2"')]), _c("td", [_vm._v(" Use this prop to change the background color only if you need an option that's not one of the provided variants. ")])]), _c("tr", [_c("td", [_vm._v("textColor")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v('"#ffffff"')]), _c("td", [_vm._v(" Use this prop to change the text color only if you need an option that's not one of the provided variants. ")])]), _c("tr", [_c("td", [_vm._v("current")]), _c("td", [_vm._v("number")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Current progress amount. "), _c("code", [_vm._v("variant")]), _vm._v(" prop must be set to "), _c("code", [_vm._v("progress")]), _vm._v(". ")])]), _c("tr", [_c("td", [_vm._v("total")]), _c("td", [_vm._v("number")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Total progross amount. "), _c("code", [_vm._v("variant")]), _vm._v(" prop must be set to "), _c("code", [_vm._v("progress")]), _vm._v(". ")])]), _c("tr", [_c("td", [_vm._v("separator")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v('"/"')]), _c("td", [_vm._v(" Separator between current and total amounts is displayed. "), _c("code", [_vm._v("variant")]), _vm._v(" prop must be set to "), _c("code", [_vm._v("progress")]), _vm._v(". ")])]), _c("tr", [_c("td", [_vm._v("suffix")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" String to the right of the total amount. "), _c("code", [_vm._v("variant")]), _vm._v(" prop must be set to "), _c("code", [_vm._v("progress")]), _vm._v(". ")])])])]);
}];
const Badges_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Badges$1,
  render,
  staticRenderFns,
  false,
  __vue2_injectStyles,
  "0c9dfa1c",
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
const Badges2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Badges2 as default
};
//# sourceMappingURL=Badges-e4a941e2.js.map
