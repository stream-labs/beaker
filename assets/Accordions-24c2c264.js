var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { A as Accordion } from "./Accordion-7aa9b24d.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
const AccordionCode = `<template>
  <div>
    <div class="section">
      <h1>Accordions</h1>

      <pre><code>Import { Accordion } from 'streamlabs-beaker';

components: {
  Accordion
}</code></pre>
    </div>

    <!-- Default Settings -->
    <div class="section">
      <h3>Default Settings</h3>
      <DemoSection title="Default Settings" :code="demoCode">
        <template #components>
          <div @click="openAccordion(true)">Open Accordion</div>
          <div @click="openAccordion(false)">Close Accordion</div>

          <Accordion
            opened-title="Hide Content"
            closed-title="Show Content"
            v-model="isOpened"
          >
            <div slot="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </Accordion>
        </template>
      </DemoSection>
    </div>

    <!-- Set to be open -->
    <div class="section">
      <h3>Set to be open</h3>
      <DemoSection title="Set to be open" :code="demoCode">
        <template #components>
          <Accordion
            opened-title="Hide Content"
            closed-title="Show Content"
            :isOpened="true"
          >
            <div slot="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </Accordion>
        </template>
      </DemoSection>
    </div>

    <!-- Alternative - No Border -->
    <div class="section">
      <h3>Alternative - No Border</h3>
      <DemoSection title="Alternative - No Border" :code="demoCode">
        <template #components>
          <Accordion
            opened-title="Hide Content"
            closed-title="Show Content"
            :noBorder="true"
          >
            <div slot="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </Accordion>
        </template>
      </DemoSection>
    </div>

    <!-- Accordion within an Accordion -->
    <div class="section">
      <h3>Accordion within an Accordion</h3>
      <DemoSection title="Accordion within an Accordion" :code="demoCode">
        <template #components>
          <Accordion
            opened-title="Hide Inner Accordion"
            closed-title="Show Inner Accordion"
          >
            <div slot="content">
              <div class="section">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>

              <Accordion
                opened-title="Hide Content"
                closed-title="Show Content"
                v-model="isOpened"
              >
                <div slot="content">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div>
              </Accordion>
            </div>
          </Accordion>
        </template>
      </DemoSection>
    </div>

    <!-- Variant - Left Navigation -->
    <div class="section">
      <h3>Variant - Left Navigation</h3>
      <DemoSection title="Left Navigation" :code="demoCode">
        <template #components>
          <Accordion :leftNav="true">
            <div slot="title">Left Navigation</div>
            <div slot="content">
              <div class="fake-nav">
                <a href="#" class="fake-nav-item">
                  <div class="fake-nav-icon">
                    <i class="icon-community"></i>
                  </div>
                  <div class="fake-nav-title">Nav Item</div>
                </a>
                <a href="#" class="fake-nav-item">
                  <div class="fake-nav-icon">
                    <i class="icon-dashboard"></i>
                  </div>
                  <div class="fake-nav-title">Styling Handled By</div>
                </a>
                <a href="#" class="fake-nav-item">
                  <div class="fake-nav-icon">
                    <i class="icon-earnings"></i>
                  </div>
                  <div class="fake-nav-title">Slot and navigation.less</div>
                </a>
              </div>
            </div>
          </Accordion>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h3>Open/Close Icon</h3>
      <DemoSection title="Open/Close Settings" :code="demoCode">
        <template #components>
          <Accordion opened-title="Hide Content" closed-title="Show Content">
            <template #open-close-icon="{isOpen}">
              <transition name="fadeFast" mode="out-in">
                <i v-if="!isOpen" key="open" class="icon-down" />
                <i v-else key="close" class="icon-back" />
              </transition>
            </template>
            <div slot="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </Accordion>
        </template>
      </DemoSection>
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
            <td>v-model</td>
            <td>boolean</td>
            <td>null</td>
            <td>Use to sync accordion being open/closed</td>
          </tr>
          <tr>
            <td>openedTitle</td>
            <td>string</td>
            <td>null</td>
            <td>Title to display when accordion is open</td>
          </tr>
          <tr>
            <td>closedTitle</td>
            <td>string</td>
            <td>null</td>
            <td>Title to display when accordion is closed</td>
          </tr>
          <tr>
            <td>title</td>
            <td>string</td>
            <td>null</td>
            <td>(Optional) Overrides both open and closed titles</td>
          </tr>
          <tr>
            <td>isOpened</td>
            <td>boolean</td>
            <td>false</td>
            <td>Have the accordion open by default</td>
          </tr>
          <tr>
            <td>noBorder</td>
            <td>boolean</td>
            <td>false</td>
            <td>Alternative style with no border or padding</td>
          </tr>
          <tr>
            <td>leftNav</td>
            <td>boolean</td>
            <td>false</td>
            <td>Alternative style for use in Left Navigation</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import AccordionCode from "./Accordions.vue?raw";
import DemoSection from "./../components/DemoSection.vue";

@Component({
  components: {
    Accordion,
    DemoSection
  }
})
export default class Accordions extends Vue {
  demoCode = AccordionCode;
  isOpened: boolean | null = true;

  openAccordion(bool) {
    this.isOpened = bool;
  }
}
<\/script>

<style lang="less">
@import (reference) "./../styles/Imports";

.fake-nav {
  width: 300px;
  display: flex;
  flex-direction: column;

  &-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 32px;
    text-decoration: none;
  }

  &-icon {
    color: @dark-2;
    .margin-right(1);
  }

  &-title {
    color: @dark-2;
    font-weight: @medium;
    font-size: 14px;
  }
}

.night {
  .fake-nav {
    &-icon,
    &-title {
      color: @white;
    }
  }
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
let Accordions$1 = class Accordions extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", AccordionCode);
    __publicField(this, "isOpened", true);
  }
  openAccordion(bool) {
    this.isOpened = bool;
  }
};
Accordions$1 = __decorateClass([
  Component({
    components: {
      Accordion,
      DemoSection
    }
  })
], Accordions$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Default Settings")]), _c("DemoSection", {
    attrs: {
      "title": "Default Settings",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("div", {
          on: {
            "click": function($event) {
              return _vm.openAccordion(true);
            }
          }
        }, [_vm._v("Open Accordion")]), _c("div", {
          on: {
            "click": function($event) {
              return _vm.openAccordion(false);
            }
          }
        }, [_vm._v("Close Accordion")]), _c("Accordion", {
          attrs: {
            "opened-title": "Hide Content",
            "closed-title": "Show Content"
          },
          model: {
            value: _vm.isOpened,
            callback: function($$v) {
              _vm.isOpened = $$v;
            },
            expression: "isOpened"
          }
        }, [_c("div", {
          attrs: {
            "slot": "content"
          },
          slot: "content"
        }, [_vm._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. ")])])];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Set to be open")]), _c("DemoSection", {
    attrs: {
      "title": "Set to be open",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Accordion", {
          attrs: {
            "opened-title": "Hide Content",
            "closed-title": "Show Content",
            "isOpened": true
          }
        }, [_c("div", {
          attrs: {
            "slot": "content"
          },
          slot: "content"
        }, [_vm._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. ")])])];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Alternative - No Border")]), _c("DemoSection", {
    attrs: {
      "title": "Alternative - No Border",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Accordion", {
          attrs: {
            "opened-title": "Hide Content",
            "closed-title": "Show Content",
            "noBorder": true
          }
        }, [_c("div", {
          attrs: {
            "slot": "content"
          },
          slot: "content"
        }, [_vm._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. ")])])];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Accordion within an Accordion")]), _c("DemoSection", {
    attrs: {
      "title": "Accordion within an Accordion",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Accordion", {
          attrs: {
            "opened-title": "Hide Inner Accordion",
            "closed-title": "Show Inner Accordion"
          }
        }, [_c("div", {
          attrs: {
            "slot": "content"
          },
          slot: "content"
        }, [_c("div", {
          staticClass: "section"
        }, [_vm._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")]), _c("Accordion", {
          attrs: {
            "opened-title": "Hide Content",
            "closed-title": "Show Content"
          },
          model: {
            value: _vm.isOpened,
            callback: function($$v) {
              _vm.isOpened = $$v;
            },
            expression: "isOpened"
          }
        }, [_c("div", {
          attrs: {
            "slot": "content"
          },
          slot: "content"
        }, [_vm._v(" Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ")])])], 1)])];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Variant - Left Navigation")]), _c("DemoSection", {
    attrs: {
      "title": "Left Navigation",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Accordion", {
          attrs: {
            "leftNav": true
          }
        }, [_c("div", {
          attrs: {
            "slot": "title"
          },
          slot: "title"
        }, [_vm._v("Left Navigation")]), _c("div", {
          attrs: {
            "slot": "content"
          },
          slot: "content"
        }, [_c("div", {
          staticClass: "fake-nav"
        }, [_c("a", {
          staticClass: "fake-nav-item",
          attrs: {
            "href": "#"
          }
        }, [_c("div", {
          staticClass: "fake-nav-icon"
        }, [_c("i", {
          staticClass: "icon-community"
        })]), _c("div", {
          staticClass: "fake-nav-title"
        }, [_vm._v("Nav Item")])]), _c("a", {
          staticClass: "fake-nav-item",
          attrs: {
            "href": "#"
          }
        }, [_c("div", {
          staticClass: "fake-nav-icon"
        }, [_c("i", {
          staticClass: "icon-dashboard"
        })]), _c("div", {
          staticClass: "fake-nav-title"
        }, [_vm._v("Styling Handled By")])]), _c("a", {
          staticClass: "fake-nav-item",
          attrs: {
            "href": "#"
          }
        }, [_c("div", {
          staticClass: "fake-nav-icon"
        }, [_c("i", {
          staticClass: "icon-earnings"
        })]), _c("div", {
          staticClass: "fake-nav-title"
        }, [_vm._v("Slot and navigation.less")])])])])])];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Open/Close Icon")]), _c("DemoSection", {
    attrs: {
      "title": "Open/Close Settings",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Accordion", {
          attrs: {
            "opened-title": "Hide Content",
            "closed-title": "Show Content"
          },
          scopedSlots: _vm._u([{
            key: "open-close-icon",
            fn: function(_ref) {
              var isOpen = _ref.isOpen;
              return [_c("transition", {
                attrs: {
                  "name": "fadeFast",
                  "mode": "out-in"
                }
              }, [!isOpen ? _c("i", {
                key: "open",
                staticClass: "icon-down"
              }) : _c("i", {
                key: "close",
                staticClass: "icon-back"
              })])];
            }
          }])
        }, [_c("div", {
          attrs: {
            "slot": "content"
          },
          slot: "content"
        }, [_vm._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. ")])])];
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
  }, [_c("h1", [_vm._v("Accordions")]), _c("pre", [_c("code", [_vm._v("Import { Accordion } from 'streamlabs-beaker';\n\ncomponents: {\n  Accordion\n}")])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("v-model")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Use to sync accordion being open/closed")])]), _c("tr", [_c("td", [_vm._v("openedTitle")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Title to display when accordion is open")])]), _c("tr", [_c("td", [_vm._v("closedTitle")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Title to display when accordion is closed")])]), _c("tr", [_c("td", [_vm._v("title")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("(Optional) Overrides both open and closed titles")])]), _c("tr", [_c("td", [_vm._v("isOpened")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("Have the accordion open by default")])]), _c("tr", [_c("td", [_vm._v("noBorder")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("Alternative style with no border or padding")])]), _c("tr", [_c("td", [_vm._v("leftNav")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("Alternative style for use in Left Navigation")])])])])]);
}];
const Accordions_vue_vue_type_style_index_0_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Accordions$1,
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
const Accordions2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Accordions2 as default
};
//# sourceMappingURL=Accordions-24c2c264.js.map
