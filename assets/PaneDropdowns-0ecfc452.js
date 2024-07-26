var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import { P as PaneDropdown } from "./PaneDropdown-1ff494dd.js";
import "./Accordion-7aa9b24d.js";
import "./vue-focus.common-28b20e5f.js";
const PaneDropdownsCode = `<template>
  <div>
    <div class="section">
      <h1>Pane Dropdowns</h1>
      <p>Dropdown menu used on Streamlabs.com</p>

      <pre><code>import { PaneDropdown } from 'streamlabs-beaker';

components: {
  PaneDropdown
}</code></pre>
    </div>

    <div class="section">
      <h2>Using Slots</h2>
      <DemoSection title="With Dropdown Icon" :code="demoCode">
        <template #components>
          <PaneDropdown :close-on-select="false">
            <span slot="title">Trending</span>
            <PaneDropdown :menuAlign="'center'">
              <span slot="title">Inner Dropdown</span>
              <a href="#">Item 1</a>
              <a href="#">Item 2</a>
              <a href="#">Item 3</a>
            </PaneDropdown>
            <hr />
            <a href="#"> <i class="icon-leaderboard-4"></i>Most Installed </a>
            <a href="#"> <i class="icon-loyalty"></i>Newly Added </a>
            <a href="#"> <i class="icon-graph"></i>Trending </a>
          </PaneDropdown>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Menu Align</h2>

      <DemoSection title="Menu Align" :code="demoCode">
        <template #components>
          <div class="row">
            <PaneDropdown menu-align="right" :hover-option="true">
              <span slot="title">Right Dropdown Menu</span>
              <a href="#">Hey I'm a longer link here</a>
              <a href="#">Let's see how this looks</a>
              <a href="#">I'm in a pane dropdown aligned to the right</a>
            </PaneDropdown>
          </div>

          <div class="row">
            <PaneDropdown menu-align="center">
              <span slot="title">Center Dropdown Menu</span>
              <a href="#">Hey I'm a longer link here</a>
              <a href="#">Let's see how this looks</a>
              <a href="#">I'm in a pane dropdown aligned to the right</a>
            </PaneDropdown>
          </div>

          <div class="row">
            <PaneDropdown open-above="top">
              <span slot="title">Top Dropdown Menu</span>
              <a href="#">Hey I'm a longer link here</a>
              <a href="#">Let's see how this looks</a>
              <a href="#">I'm in a pane dropdown aligned to the right</a>
            </PaneDropdown>
          </div>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Custom Dropdown</h2>

      <DemoSection title="Custom Dropdown" :code="demoCode">
        <template #components>
          <PaneDropdown :custom="true">
            <span slot="title">Custom Dropdown Menu</span>
            <div>
              hey watsup
              <br />
              <strong>put whatever you want in here</strong>
            </div>
          </PaneDropdown>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Relative Menu</h2>

      <DemoSection title="Relative Menu" :code="demoCode">
        <template #components>
          <PaneDropdown :relativeMenu="true">
            <span slot="title">Relative Menu</span>
            <a href="#">Hey I'm a longer link here</a>
            <a href="#">Let's see how this looks</a>
            <a href="#">I'm in a pane dropdown aligned to the right</a>
          </PaneDropdown>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Simple Menu</h2>

      <DemoSection title="Simple Menu" :code="demoCode">
        <template #components>
          <PaneDropdown :relativeMenu="true" :simpleMenu="true">
            <span slot="title">Simple Menu</span>
            <a href="#">Hey I'm a longer link here</a>
            <a href="#">Let's see how this looks</a>
            <a href="#">I'm in a pane dropdown aligned to the right</a>
          </PaneDropdown>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <table class="docs-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Required</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>dropdownIcon</td>
            <td>boolean</td>
            <td>false</td>
            <td>true</td>
            <td>Show or hide dropdown icon.</td>
          </tr>
          <tr>
            <td>menuAlign</td>
            <td>string</td>
            <td>false</td>
            <td>null</td>
            <td>
              Default will align the menu to the left side of the toggle. Use
              <code>right</code> or <code>center</code> to align the dropdown
              menu to the right or center of its toggle.
            </td>
          </tr>
          <tr>
            <td>openAbove</td>
            <td>boolean</td>
            <td>false</td>
            <td>false</td>
            <td>
              Set to true if you want menu to open above. Default is to open
              below title.
            </td>
          </tr>
          <tr>
            <td>closeOnSelect</td>
            <td>boolean</td>
            <td>false</td>
            <td>true</td>
            <td>Close the dropdown when a link is clicked.</td>
          </tr>
          <tr>
            <td>autoHeight</td>
            <td>boolean</td>
            <td>false</td>
            <td>false</td>
            <td>No max height</td>
          </tr>
          <tr>
            <td>relativeMenu</td>
            <td>boolean</td>
            <td>false</td>
            <td>false</td>
            <td>
              Change the menu from position absolute to relative so it pushes
              the content below it down.
            </td>
          </tr>
          <tr>
            <td>simpleMenu</td>
            <td>boolean</td>
            <td>false</td>
            <td>false</td>
            <td>Removes menues bg colors, box shadow and paddinga.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DemoSection from "./../components/DemoSection.vue";
import PaneDropdown from "./../components/PaneDropdown.vue";
import PaneDropdownsCode from "./PaneDropdowns.vue?raw";

@Component({
  components: {
    DemoSection,
    PaneDropdown
  }
})
export default class Dropdowns extends Vue {
  demoCode = PaneDropdownsCode;
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
let Dropdowns = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", PaneDropdownsCode);
  }
};
Dropdowns = __decorateClass([
  Component({
    components: {
      DemoSection,
      PaneDropdown
    }
  })
], Dropdowns);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Using Slots")]), _c("DemoSection", {
    attrs: {
      "title": "With Dropdown Icon",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("PaneDropdown", {
          attrs: {
            "close-on-select": false
          }
        }, [_c("span", {
          attrs: {
            "slot": "title"
          },
          slot: "title"
        }, [_vm._v("Trending")]), _c("PaneDropdown", {
          attrs: {
            "menuAlign": "center"
          }
        }, [_c("span", {
          attrs: {
            "slot": "title"
          },
          slot: "title"
        }, [_vm._v("Inner Dropdown")]), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_vm._v("Item 1")]), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_vm._v("Item 2")]), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_vm._v("Item 3")])]), _c("hr"), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_c("i", {
          staticClass: "icon-leaderboard-4"
        }), _vm._v("Most Installed ")]), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_c("i", {
          staticClass: "icon-loyalty"
        }), _vm._v("Newly Added ")]), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_c("i", {
          staticClass: "icon-graph"
        }), _vm._v("Trending ")])], 1)];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Menu Align")]), _c("DemoSection", {
    attrs: {
      "title": "Menu Align",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("div", {
          staticClass: "row"
        }, [_c("PaneDropdown", {
          attrs: {
            "menu-align": "right",
            "hover-option": true
          }
        }, [_c("span", {
          attrs: {
            "slot": "title"
          },
          slot: "title"
        }, [_vm._v("Right Dropdown Menu")]), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_vm._v("Hey I'm a longer link here")]), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_vm._v("Let's see how this looks")]), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_vm._v("I'm in a pane dropdown aligned to the right")])])], 1), _c("div", {
          staticClass: "row"
        }, [_c("PaneDropdown", {
          attrs: {
            "menu-align": "center"
          }
        }, [_c("span", {
          attrs: {
            "slot": "title"
          },
          slot: "title"
        }, [_vm._v("Center Dropdown Menu")]), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_vm._v("Hey I'm a longer link here")]), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_vm._v("Let's see how this looks")]), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_vm._v("I'm in a pane dropdown aligned to the right")])])], 1), _c("div", {
          staticClass: "row"
        }, [_c("PaneDropdown", {
          attrs: {
            "open-above": "top"
          }
        }, [_c("span", {
          attrs: {
            "slot": "title"
          },
          slot: "title"
        }, [_vm._v("Top Dropdown Menu")]), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_vm._v("Hey I'm a longer link here")]), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_vm._v("Let's see how this looks")]), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_vm._v("I'm in a pane dropdown aligned to the right")])])], 1)];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Custom Dropdown")]), _c("DemoSection", {
    attrs: {
      "title": "Custom Dropdown",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("PaneDropdown", {
          attrs: {
            "custom": true
          }
        }, [_c("span", {
          attrs: {
            "slot": "title"
          },
          slot: "title"
        }, [_vm._v("Custom Dropdown Menu")]), _c("div", [_vm._v(" hey watsup "), _c("br"), _c("strong", [_vm._v("put whatever you want in here")])])])];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Relative Menu")]), _c("DemoSection", {
    attrs: {
      "title": "Relative Menu",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("PaneDropdown", {
          attrs: {
            "relativeMenu": true
          }
        }, [_c("span", {
          attrs: {
            "slot": "title"
          },
          slot: "title"
        }, [_vm._v("Relative Menu")]), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_vm._v("Hey I'm a longer link here")]), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_vm._v("Let's see how this looks")]), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_vm._v("I'm in a pane dropdown aligned to the right")])])];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Simple Menu")]), _c("DemoSection", {
    attrs: {
      "title": "Simple Menu",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("PaneDropdown", {
          attrs: {
            "relativeMenu": true,
            "simpleMenu": true
          }
        }, [_c("span", {
          attrs: {
            "slot": "title"
          },
          slot: "title"
        }, [_vm._v("Simple Menu")]), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_vm._v("Hey I'm a longer link here")]), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_vm._v("Let's see how this looks")]), _c("a", {
          attrs: {
            "href": "#"
          }
        }, [_vm._v("I'm in a pane dropdown aligned to the right")])])];
      },
      proxy: true
    }])
  })], 1), _vm._m(1)]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Pane Dropdowns")]), _c("p", [_vm._v("Dropdown menu used on Streamlabs.com")]), _c("pre", [_c("code", [_vm._v("import { PaneDropdown } from 'streamlabs-beaker';\n\ncomponents: {\n  PaneDropdown\n}")])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Required")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("dropdownIcon")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v("Show or hide dropdown icon.")])]), _c("tr", [_c("td", [_vm._v("menuAlign")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Default will align the menu to the left side of the toggle. Use "), _c("code", [_vm._v("right")]), _vm._v(" or "), _c("code", [_vm._v("center")]), _vm._v(" to align the dropdown menu to the right or center of its toggle. ")])]), _c("tr", [_c("td", [_vm._v("openAbove")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v(" Set to true if you want menu to open above. Default is to open below title. ")])]), _c("tr", [_c("td", [_vm._v("closeOnSelect")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v("Close the dropdown when a link is clicked.")])]), _c("tr", [_c("td", [_vm._v("autoHeight")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("No max height")])]), _c("tr", [_c("td", [_vm._v("relativeMenu")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v(" Change the menu from position absolute to relative so it pushes the content below it down. ")])]), _c("tr", [_c("td", [_vm._v("simpleMenu")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("Removes menues bg colors, box shadow and paddinga.")])])])])]);
}];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Dropdowns,
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
const PaneDropdowns = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  PaneDropdowns as default
};
//# sourceMappingURL=PaneDropdowns-0ecfc452.js.map
