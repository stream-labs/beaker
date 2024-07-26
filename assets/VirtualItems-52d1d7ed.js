var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import "./Accordion-7aa9b24d.js";
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
let ItemGrid$1 = class ItemGrid extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "items");
  }
};
__decorateClass$2([
  Prop()
], ItemGrid$1.prototype, "items", 2);
ItemGrid$1 = __decorateClass$2([
  Component({})
], ItemGrid$1);
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-item-grid"
  }, [_vm._t("default")], 2);
};
var staticRenderFns$2 = [];
const ItemGrid_vue_vue_type_style_index_0_lang = "";
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(
  ItemGrid$1,
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
const ItemGrid2 = /* @__PURE__ */ function() {
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
let VitualItem = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "name");
    __publicField(this, "value");
    __publicField(this, "preview");
    __publicField(this, "quantity");
    __publicField(this, "rarity");
    __publicField(this, "selected");
    __publicField(this, "selectionCount");
    __publicField(this, "remainingTime");
    __publicField(this, "hasWarning");
    __publicField(this, "isGiveaway");
    __publicField(this, "type");
    __publicField(this, "isClickable", false);
  }
  mounted() {
    if (this.$listeners.click) {
      this.isClickable = true;
    }
  }
  get virtualItemClasses() {
    const classes = [];
    if (this.rarity) {
      classes.push(`s-virtual-item--${this.rarity}`);
    }
    if (this.selected) {
      classes.push("is-selected");
    }
    if (this.isClickable) {
      classes.push("clickable");
    }
    return classes.join(" ");
  }
};
__decorateClass$1([
  Prop(String)
], VitualItem.prototype, "name", 2);
__decorateClass$1([
  Prop(String)
], VitualItem.prototype, "value", 2);
__decorateClass$1([
  Prop(String)
], VitualItem.prototype, "preview", 2);
__decorateClass$1([
  Prop(Number)
], VitualItem.prototype, "quantity", 2);
__decorateClass$1([
  Prop(String)
], VitualItem.prototype, "rarity", 2);
__decorateClass$1([
  Prop({ default: false })
], VitualItem.prototype, "selected", 2);
__decorateClass$1([
  Prop(String)
], VitualItem.prototype, "selectionCount", 2);
__decorateClass$1([
  Prop(String)
], VitualItem.prototype, "remainingTime", 2);
__decorateClass$1([
  Prop({ default: false })
], VitualItem.prototype, "hasWarning", 2);
__decorateClass$1([
  Prop({ default: false })
], VitualItem.prototype, "isGiveaway", 2);
__decorateClass$1([
  Prop(String)
], VitualItem.prototype, "type", 2);
VitualItem = __decorateClass$1([
  Component({})
], VitualItem);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-virtual-item",
    class: [_vm.virtualItemClasses],
    attrs: {
      "rarity": _vm.rarity,
      "selected": _vm.selected,
      "quantity": _vm.quantity,
      "value": _vm.value
    },
    on: {
      "click": function($event) {
        return _vm.$emit("click");
      }
    }
  }, [_vm.selectionCount ? _c("span", {
    staticClass: "s-virtual-item__selection-count"
  }, [_vm._v(" " + _vm._s(_vm.selectionCount) + " ")]) : _vm._e(), _vm.remainingTime ? _c("span", {
    staticClass: "s-virtual-item__selection-remaining",
    class: {
      warning: _vm.hasWarning
    }
  }, [_vm._v(_vm._s(_vm.remainingTime))]) : _vm._e(), _vm.type ? _c("span", {
    staticClass: "s-virtual-item__label"
  }, [_vm._v(_vm._s(_vm.type))]) : _vm._e(), _vm.quantity ? _c("span", {
    staticClass: "s-virtual-item__label"
  }, [_vm._v(_vm._s(_vm.quantity))]) : _vm._e(), _c("div", {
    staticClass: "s-virtual-item__img"
  }, [_c("img", {
    attrs: {
      "src": _vm.preview
    }
  })]), _c("h3", {
    staticClass: "s-virtual-item__name"
  }, [_vm._v(_vm._s(_vm.name))]), _c("span", {
    staticClass: "s-virtual-item__rarity",
    class: {
      entered: _vm.isGiveaway
    }
  }, [_vm.isGiveaway ? _c("i", {
    staticClass: "icon-check-mark"
  }) : _vm._e(), _vm._v(" " + _vm._s(_vm.rarity) + " ")])]);
};
var staticRenderFns$1 = [];
const VirtualItem_vue_vue_type_style_index_0_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  VitualItem,
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
const VirtualItem = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
const VirtualItemsCode = `<template>
  <div>
    <div class="section">
      <h1>Virtual Items</h1>
      <p>UI for face masks items and grid.</p>

      <pre><code>import { ItemGrid, VirtualItem } from "streamlabs-beaker"

components: {
  ItemGrid,
  VirtualItem
}</code></pre>

      <div class="section">
        <h2>Giveaway Items</h2>
        <DemoSection title="Giveaway Items" :code="demoCode">
          <template #components>
            <div class="container">
              <VirtualItem
                :preview="itemImage"
                rarity="Enter Giveaway"
                name="4x VIP Tickets to PAX, TwitchCon and SXSW"
                remainingTime="2h left"
                :hasWarning="true"
              />

              <VirtualItem
                :preview="itemImage"
                rarity="Entered"
                name="$5K Custom High-Spec Streaming Desktop PC"
                remainingTime="5d left"
                :isGiveaway="true"
              />
            </div>
          </template>
        </DemoSection>
      </div>

      <h2>Face Masks</h2>
      <DemoSection title="Face Masks" :code="demoCode">
        <template #components>
          <ItemGrid>
            <VirtualItem
              v-for="(mask, id) in masks"
              :key="id"
              :preview="mask.preview"
              :rarity="mask.rarity"
              :name="mask.name"
              :selectionCount="mask.selectionCount"
              :selected="mask.selected"
              @click="clickEvent"
            />
          </ItemGrid>
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
          <td>name</td>
          <td>string</td>
          <td>null</td>
          <td>Name of the item.</td>
        </tr>
        <tr>
          <td>value</td>
          <td>string</td>
          <td>null</td>
          <td>Value you want to assign to the item.</td>
        </tr>
        <tr>
          <td>preview</td>
          <td>string</td>
          <td>null</td>
          <td>Item preview image.</td>
        </tr>
        <tr>
          <td>quantity</td>
          <td>number</td>
          <td>null</td>
          <td>Quantity of the particular item.</td>
        </tr>
        <tr>
          <td>rarity</td>
          <td>string</td>
          <td>null</td>
          <td>
            Gives item rarity class <code>s-virtual-item--\${rarity}</code> and
            adds rarity string to item. Use for giveaway text.
          </td>
        </tr>
        <tr>
          <td>selected</td>
          <td>boolean</td>
          <td>false</td>
          <td>Sets item to selected state.</td>
        </tr>
        <tr>
          <td>selectionCount</td>
          <td>string</td>
          <td>null</td>
          <td>
            Adds counter to top right of item. You have to set this
            functionality.
          </td>
        </tr>
        <tr>
          <td>remainingTime</td>
          <td>string</td>
          <td>null</td>
          <td>Remaining time for giveaways or special promotions</td>
        </tr>
        <tr>
          <td>hasWarning</td>
          <td>boolean</td>
          <td>false</td>
          <td>Changes item background color to red.</td>
        </tr>
        <tr>
          <td>isGiveaway</td>
          <td>boolean</td>
          <td>false</td>
          <td>Adds checkmark and set rarity color to teal.</td>
        </tr>
        <tr>
          <td>type</td>
          <td>string</td>
          <td>null</td>
          <td>Add type text to top of item</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import DemoSection from "./../components/DemoSection.vue";
import ItemGrid from "./../components/ItemGrid.vue";
import VirtualItem from "./../components/VirtualItem.vue";
import VirtualItemsCode from "./VirtualItems.vue?raw";

@Component({
  components: {
    DemoSection,
    ItemGrid,
    VirtualItem
  }
})
export default class VirtualItems extends Vue {
  itemImage = 'https://www.pngmart.com/files/21/3D-Download-PNG-Image.png';
  demoCode = VirtualItemsCode;
  masks = [
    {
      preview: this.itemImage,
      name: "Robot",
      rarity: "Common",
      selectionCount: "1",
      selected: true
    },
    {
      preview: this.itemImage,
      name: "Robot",
      rarity: "Common",
      selectionCount: "2",
      selected: true
    },
    {
      preview: this.itemImage,
      name: "Robot",
      rarity: "Common",
      selectionCount: "3",
      selected: true
    },
    {
      preview: this.itemImage,
      name: "Robot",
      rarity: "Common"
    },
    {
      preview: this.itemImage,
      name: "Robot",
      rarity: "Common"
    },
    {
      preview: this.itemImage,
      name: "Robot",
      rarity: "Common"
    },
    {
      preview: this.itemImage,
      name: "Robot",
      rarity: "Common"
    },
    {
      preview: this.itemImage,
      name: "Robot",
      rarity: "Common"
    }
  ];

  clickEvent() {
    console.log("Hey you clicked me!");
  }
}
<\/script>

<style lang="less" scoped>
.container {
  display: grid;
  grid-template-columns: 240px 1fr;
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
let VirtualItems$1 = class VirtualItems extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "itemImage", "https://www.pngmart.com/files/21/3D-Download-PNG-Image.png");
    __publicField(this, "demoCode", VirtualItemsCode);
    __publicField(this, "masks", [
      {
        preview: this.itemImage,
        name: "Robot",
        rarity: "Common",
        selectionCount: "1",
        selected: true
      },
      {
        preview: this.itemImage,
        name: "Robot",
        rarity: "Common",
        selectionCount: "2",
        selected: true
      },
      {
        preview: this.itemImage,
        name: "Robot",
        rarity: "Common",
        selectionCount: "3",
        selected: true
      },
      {
        preview: this.itemImage,
        name: "Robot",
        rarity: "Common"
      },
      {
        preview: this.itemImage,
        name: "Robot",
        rarity: "Common"
      },
      {
        preview: this.itemImage,
        name: "Robot",
        rarity: "Common"
      },
      {
        preview: this.itemImage,
        name: "Robot",
        rarity: "Common"
      },
      {
        preview: this.itemImage,
        name: "Robot",
        rarity: "Common"
      }
    ]);
  }
  clickEvent() {
    console.log("Hey you clicked me!");
  }
};
VirtualItems$1 = __decorateClass([
  Component({
    components: {
      DemoSection,
      ItemGrid: ItemGrid2,
      VirtualItem
    }
  })
], VirtualItems$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Virtual Items")]), _c("p", [_vm._v("UI for face masks items and grid.")]), _vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Giveaway Items")]), _c("DemoSection", {
    attrs: {
      "title": "Giveaway Items",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("div", {
          staticClass: "container"
        }, [_c("VirtualItem", {
          attrs: {
            "preview": _vm.itemImage,
            "rarity": "Enter Giveaway",
            "name": "4x VIP Tickets to PAX, TwitchCon and SXSW",
            "remainingTime": "2h left",
            "hasWarning": true
          }
        }), _c("VirtualItem", {
          attrs: {
            "preview": _vm.itemImage,
            "rarity": "Entered",
            "name": "$5K Custom High-Spec Streaming Desktop PC",
            "remainingTime": "5d left",
            "isGiveaway": true
          }
        })], 1)];
      },
      proxy: true
    }])
  })], 1), _c("h2", [_vm._v("Face Masks")]), _c("DemoSection", {
    attrs: {
      "title": "Face Masks",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("ItemGrid", _vm._l(_vm.masks, function(mask, id) {
          return _c("VirtualItem", {
            key: id,
            attrs: {
              "preview": mask.preview,
              "rarity": mask.rarity,
              "name": mask.name,
              "selectionCount": mask.selectionCount,
              "selected": mask.selected
            },
            on: {
              "click": _vm.clickEvent
            }
          });
        }), 1)];
      },
      proxy: true
    }])
  })], 1), _vm._m(1)]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("pre", [_c("code", [_vm._v('import { ItemGrid, VirtualItem } from "streamlabs-beaker"\n\ncomponents: {\n  ItemGrid,\n  VirtualItem\n}')])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Props")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("name")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Name of the item.")])]), _c("tr", [_c("td", [_vm._v("value")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Value you want to assign to the item.")])]), _c("tr", [_c("td", [_vm._v("preview")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Item preview image.")])]), _c("tr", [_c("td", [_vm._v("quantity")]), _c("td", [_vm._v("number")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Quantity of the particular item.")])]), _c("tr", [_c("td", [_vm._v("rarity")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Gives item rarity class "), _c("code", [_vm._v("s-virtual-item--${rarity}")]), _vm._v(" and adds rarity string to item. Use for giveaway text. ")])]), _c("tr", [_c("td", [_vm._v("selected")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("Sets item to selected state.")])]), _c("tr", [_c("td", [_vm._v("selectionCount")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Adds counter to top right of item. You have to set this functionality. ")])]), _c("tr", [_c("td", [_vm._v("remainingTime")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Remaining time for giveaways or special promotions")])]), _c("tr", [_c("td", [_vm._v("hasWarning")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("Changes item background color to red.")])]), _c("tr", [_c("td", [_vm._v("isGiveaway")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("Adds checkmark and set rarity color to teal.")])]), _c("tr", [_c("td", [_vm._v("type")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Add type text to top of item")])])])]);
}];
const VirtualItems_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  VirtualItems$1,
  render,
  staticRenderFns,
  false,
  __vue2_injectStyles,
  "628da7f4",
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
const VirtualItems2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  VirtualItems2 as default
};
//# sourceMappingURL=VirtualItems-52d1d7ed.js.map
