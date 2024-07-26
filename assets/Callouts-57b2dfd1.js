var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { C as Callout } from "./Callout-1ea6582d.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import "./Badge-2f139b6a.js";
import "./Accordion-7aa9b24d.js";
const CalloutsCode = `<template>
  <div>
    <div class="section">
      <h1>Callouts</h1>
      <p>
        You can use our callout component if you need to display a message to
        users.
      </p>
      <h4>Rules</h4>
      <ul></ul>

      <pre><code>import { Callout } from 'streamlabs-beaker';

components: {
  Callout
}</code></pre>
    </div>

    <div class="section">
      <h2>Default Callouts</h2>
      <p>
        There are 3 basic callout variations: success, warning, and info. These
        can be used whenever necessary but please limit to 1 callout per page
        and limit the text to 1 line. You can link to more info in a modal or
        another page if needed.
      </p>

      <DemoSection title="Default Callouts" :code="demoCode">
        <template #components>
          <Callout variation="success">
            Success callout. <a href="#0">Link</a>
          </Callout>

          <Callout variation="warning">
            Warning callout. <a href="#0">Link</a>
          </Callout>

          <Callout variation="info">
            Info callout. <a href="#0">Link</a>
          </Callout>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Strong Callouts</h2>
      <p>
        These should be used
        <strong>very sparingly</strong>. These should be used in cases when
        something is going to be completed removed or something could become
        broken/lost if action is not taken.
      </p>

      <p>There are 3 strong callout variations: success, warning, and info.</p>

      <DemoSection title="Strong Callouts" :code="demoCode">
        <template #components>
          <Callout variation="success strong">
            Success callout. <a href="#0">Link</a>
          </Callout>

          <Callout variation="warning strong" icon="warning">
            Warning callout. <a href="#0">Link</a>
          </Callout>

          <Callout variation="info strong">
            Info callout. <a href="#0">Link</a>
          </Callout>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Cookies Callout</h2>
      <p>
        Used on landing page to warn users about use of cookies on our site.
      </p>

      <DemoSection title="Cookies Callouts" :code="demoCode">
        <template #components>
          <Callout
            variation="cookies"
            icon="info"
            :closeable="true"
            :onClose="cookieCalloutClosed"
          >
            Cookies callout. <a href="#0">Link</a>
          </Callout>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Prime Callout</h2>
      <p>
        Prime Callout.
      </p>

      <DemoSection title="Prime Callouts" :code="demoCode">
        <template #components>
          <Callout
            variation="prime"
            :closeable="true"
            @onClick="cookieCalloutClosed"
            :onClose="cookieCalloutClosed"
          >
            Themes, apps, website, merch and more. All included with Prime.
          </Callout>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Callout Options</h2>

      <div class="section">
        <h3>Closable</h3>
        <p>
          Use the <strong>closeable</strong> prop to give the callout the
          ability to close.
        </p>

        <DemoSection title="Closable Callouts" :code="demoCode">
          <template #components>
            <Callout variation="success" :closeable="true">
              Success callout. <a href="#0">Link</a>
            </Callout>
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h3>With Icon</h3>
        <p>
          You can use the
          <code>icon</code> prop to set it to 'success', 'warning', or 'info'
          for most common cases. If you need a different icon you can simply use
          it inline.
        </p>

        <DemoSection title="Icon Callouts" :code="demoCode">
          <template #components>
            <Callout icon="success" variation="success" :closeable="true">
              Success callout. <a href="#0">Link</a>
            </Callout>

            <Callout icon="warning" variation="warning" :closeable="true">
              Warning callout. <a href="#0">Link</a>
            </Callout>

            <Callout icon="info" variation="info" :closeable="true">
              Info callout. <a href="#0">Link</a>
            </Callout>

            <Callout variation="info" :closeable="true">
              <i class="icon-settings"></i> Settings have moved. Visit them
              <a href="#0">here</a>.
            </Callout>
          </template>
        </DemoSection>
      </div>
    </div>

    <div class="section">
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
            <td>variation</td>
            <td>string</td>
            <td>'success'</td>
            <td>
              Use
              <code>'success'</code>, <code>'warning'</code>,
              <code>'info'</code>, <code>'cookies'</code> or
              <code>'prime'</code>. Add <code>'strong'</code> when necessary.
            </td>
          </tr>
          <tr>
            <td>closeable</td>
            <td>boolean</td>
            <td>false</td>
            <td>Added an icon with a function that closes the callout.</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>boolean</td>
            <td>true</td>
            <td>
              Set to false if you don't want an icon before the callout content.
            </td>
          </tr>
          <tr>
            <td>onClose</td>
            <td>Function</td>
            <td>-</td>
            <td>on close callback</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Callout from "./../components/Callout.vue";
import CalloutsCode from "./Callouts.vue?raw";
import DemoSection from "./../components/DemoSection.vue";

@Component({
  components: {
    Callout,
    DemoSection
  }
})
export default class Callouts extends Vue {
  demoCode = CalloutsCode;
  cookieCalloutClosed() {
    console.log("cookie callout closed");
  }
}
<\/script>

<style lang="less" scoped></style>
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
let Callouts$1 = class Callouts extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", CalloutsCode);
  }
  cookieCalloutClosed() {
    console.log("cookie callout closed");
  }
};
Callouts$1 = __decorateClass([
  Component({
    components: {
      Callout,
      DemoSection
    }
  })
], Callouts$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Default Callouts")]), _c("p", [_vm._v(" There are 3 basic callout variations: success, warning, and info. These can be used whenever necessary but please limit to 1 callout per page and limit the text to 1 line. You can link to more info in a modal or another page if needed. ")]), _c("DemoSection", {
    attrs: {
      "title": "Default Callouts",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Callout", {
          attrs: {
            "variation": "success"
          }
        }, [_vm._v(" Success callout. "), _c("a", {
          attrs: {
            "href": "#0"
          }
        }, [_vm._v("Link")])]), _c("Callout", {
          attrs: {
            "variation": "warning"
          }
        }, [_vm._v(" Warning callout. "), _c("a", {
          attrs: {
            "href": "#0"
          }
        }, [_vm._v("Link")])]), _c("Callout", {
          attrs: {
            "variation": "info"
          }
        }, [_vm._v(" Info callout. "), _c("a", {
          attrs: {
            "href": "#0"
          }
        }, [_vm._v("Link")])])];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Strong Callouts")]), _vm._m(1), _c("p", [_vm._v("There are 3 strong callout variations: success, warning, and info.")]), _c("DemoSection", {
    attrs: {
      "title": "Strong Callouts",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Callout", {
          attrs: {
            "variation": "success strong"
          }
        }, [_vm._v(" Success callout. "), _c("a", {
          attrs: {
            "href": "#0"
          }
        }, [_vm._v("Link")])]), _c("Callout", {
          attrs: {
            "variation": "warning strong",
            "icon": "warning"
          }
        }, [_vm._v(" Warning callout. "), _c("a", {
          attrs: {
            "href": "#0"
          }
        }, [_vm._v("Link")])]), _c("Callout", {
          attrs: {
            "variation": "info strong"
          }
        }, [_vm._v(" Info callout. "), _c("a", {
          attrs: {
            "href": "#0"
          }
        }, [_vm._v("Link")])])];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Cookies Callout")]), _c("p", [_vm._v(" Used on landing page to warn users about use of cookies on our site. ")]), _c("DemoSection", {
    attrs: {
      "title": "Cookies Callouts",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Callout", {
          attrs: {
            "variation": "cookies",
            "icon": "info",
            "closeable": true,
            "onClose": _vm.cookieCalloutClosed
          }
        }, [_vm._v(" Cookies callout. "), _c("a", {
          attrs: {
            "href": "#0"
          }
        }, [_vm._v("Link")])])];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Prime Callout")]), _c("p", [_vm._v(" Prime Callout. ")]), _c("DemoSection", {
    attrs: {
      "title": "Prime Callouts",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Callout", {
          attrs: {
            "variation": "prime",
            "closeable": true,
            "onClose": _vm.cookieCalloutClosed
          },
          on: {
            "onClick": _vm.cookieCalloutClosed
          }
        }, [_vm._v(" Themes, apps, website, merch and more. All included with Prime. ")])];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Callout Options")]), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Closable")]), _vm._m(2), _c("DemoSection", {
    attrs: {
      "title": "Closable Callouts",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Callout", {
          attrs: {
            "variation": "success",
            "closeable": true
          }
        }, [_vm._v(" Success callout. "), _c("a", {
          attrs: {
            "href": "#0"
          }
        }, [_vm._v("Link")])])];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("With Icon")]), _vm._m(3), _c("DemoSection", {
    attrs: {
      "title": "Icon Callouts",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Callout", {
          attrs: {
            "icon": "success",
            "variation": "success",
            "closeable": true
          }
        }, [_vm._v(" Success callout. "), _c("a", {
          attrs: {
            "href": "#0"
          }
        }, [_vm._v("Link")])]), _c("Callout", {
          attrs: {
            "icon": "warning",
            "variation": "warning",
            "closeable": true
          }
        }, [_vm._v(" Warning callout. "), _c("a", {
          attrs: {
            "href": "#0"
          }
        }, [_vm._v("Link")])]), _c("Callout", {
          attrs: {
            "icon": "info",
            "variation": "info",
            "closeable": true
          }
        }, [_vm._v(" Info callout. "), _c("a", {
          attrs: {
            "href": "#0"
          }
        }, [_vm._v("Link")])]), _c("Callout", {
          attrs: {
            "variation": "info",
            "closeable": true
          }
        }, [_c("i", {
          staticClass: "icon-settings"
        }), _vm._v(" Settings have moved. Visit them "), _c("a", {
          attrs: {
            "href": "#0"
          }
        }, [_vm._v("here")]), _vm._v(". ")])];
      },
      proxy: true
    }])
  })], 1)]), _vm._m(4)]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Callouts")]), _c("p", [_vm._v(" You can use our callout component if you need to display a message to users. ")]), _c("h4", [_vm._v("Rules")]), _c("ul"), _c("pre", [_c("code", [_vm._v("import { Callout } from 'streamlabs-beaker';\n\ncomponents: {\n  Callout\n}")])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("p", [_vm._v(" These should be used "), _c("strong", [_vm._v("very sparingly")]), _vm._v(". These should be used in cases when something is going to be completed removed or something could become broken/lost if action is not taken. ")]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("p", [_vm._v(" Use the "), _c("strong", [_vm._v("closeable")]), _vm._v(" prop to give the callout the ability to close. ")]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("p", [_vm._v(" You can use the "), _c("code", [_vm._v("icon")]), _vm._v(" prop to set it to 'success', 'warning', or 'info' for most common cases. If you need a different icon you can simply use it inline. ")]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("variation")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("'success'")]), _c("td", [_vm._v(" Use "), _c("code", [_vm._v("'success'")]), _vm._v(", "), _c("code", [_vm._v("'warning'")]), _vm._v(", "), _c("code", [_vm._v("'info'")]), _vm._v(", "), _c("code", [_vm._v("'cookies'")]), _vm._v(" or "), _c("code", [_vm._v("'prime'")]), _vm._v(". Add "), _c("code", [_vm._v("'strong'")]), _vm._v(" when necessary. ")])]), _c("tr", [_c("td", [_vm._v("closeable")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("Added an icon with a function that closes the callout.")])]), _c("tr", [_c("td", [_vm._v("icon")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v(" Set to false if you don't want an icon before the callout content. ")])]), _c("tr", [_c("td", [_vm._v("onClose")]), _c("td", [_vm._v("Function")]), _c("td", [_vm._v("-")]), _c("td", [_vm._v("on close callback")])])])])]);
}];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Callouts$1,
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
const Callouts2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Callouts2 as default
};
//# sourceMappingURL=Callouts-57b2dfd1.js.map
