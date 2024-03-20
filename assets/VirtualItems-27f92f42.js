var I=Object.defineProperty;var C=(t,n,e)=>n in t?I(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var a=(t,n,e)=>(C(t,typeof n!="symbol"?n+"":n,e),e);import{C as u,P as o,V as _,n as p}from"./index-e8bb31bb.js";import{D as w}from"./DemoSection-b2dfe451.js";import"./Accordion-79d22a9d.js";var b=Object.defineProperty,V=Object.getOwnPropertyDescriptor,h=(t,n,e,r)=>{for(var i=r>1?void 0:r?V(n,e):n,l=t.length-1,d;l>=0;l--)(d=t[l])&&(i=(r?d(n,e,i):d(i))||i);return r&&i&&b(n,e,i),i};let c=class extends _{constructor(){super(...arguments);a(this,"items")}};h([o()],c.prototype,"items",2);c=h([u({})],c);var G=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"s-item-grid"},[t._t("default")],2)},S=[];const y={};var $=p(c,G,S,!1,k,null,null,null);function k(t){for(let n in y)this[n]=y[n]}const D=function(){return $.exports}();var x=Object.defineProperty,P=Object.getOwnPropertyDescriptor,m=(t,n,e,r)=>{for(var i=r>1?void 0:r?P(n,e):n,l=t.length-1,d;l>=0;l--)(d=t[l])&&(i=(r?d(n,e,i):d(i))||i);return r&&i&&x(n,e,i),i};let s=class extends _{constructor(){super(...arguments);a(this,"name");a(this,"value");a(this,"preview");a(this,"quantity");a(this,"rarity");a(this,"selected");a(this,"selectionCount");a(this,"remainingTime");a(this,"hasWarning");a(this,"isGiveaway");a(this,"type");a(this,"isClickable",!1)}mounted(){this.$listeners.click&&(this.isClickable=!0)}get virtualItemClasses(){const n=[];return this.rarity&&n.push(`s-virtual-item--${this.rarity}`),this.selected&&n.push("is-selected"),this.isClickable&&n.push("clickable"),n.join(" ")}};m([o(String)],s.prototype,"name",2);m([o(String)],s.prototype,"value",2);m([o(String)],s.prototype,"preview",2);m([o(Number)],s.prototype,"quantity",2);m([o(String)],s.prototype,"rarity",2);m([o({default:!1})],s.prototype,"selected",2);m([o(String)],s.prototype,"selectionCount",2);m([o(String)],s.prototype,"remainingTime",2);m([o({default:!1})],s.prototype,"hasWarning",2);m([o({default:!1})],s.prototype,"isGiveaway",2);m([o(String)],s.prototype,"type",2);s=m([u({})],s);var R=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"s-virtual-item",class:[t.virtualItemClasses],attrs:{rarity:t.rarity,selected:t.selected,quantity:t.quantity,value:t.value},on:{click:function(r){return t.$emit("click")}}},[t.selectionCount?e("span",{staticClass:"s-virtual-item__selection-count"},[t._v(" "+t._s(t.selectionCount)+" ")]):t._e(),t.remainingTime?e("span",{staticClass:"s-virtual-item__selection-remaining",class:{warning:t.hasWarning}},[t._v(t._s(t.remainingTime))]):t._e(),t.type?e("span",{staticClass:"s-virtual-item__label"},[t._v(t._s(t.type))]):t._e(),t.quantity?e("span",{staticClass:"s-virtual-item__label"},[t._v(t._s(t.quantity))]):t._e(),e("div",{staticClass:"s-virtual-item__img"},[e("img",{attrs:{src:t.preview}})]),e("h3",{staticClass:"s-virtual-item__name"},[t._v(t._s(t.name))]),e("span",{staticClass:"s-virtual-item__rarity",class:{entered:t.isGiveaway}},[t.isGiveaway?e("i",{staticClass:"icon-check-mark"}):t._e(),t._v(" "+t._s(t.rarity)+" ")])])},T=[];const g={};var E=p(s,R,T,!1,O,null,null,null);function O(t){for(let n in g)this[n]=g[n]}const j=function(){return E.exports}(),W=`<template>
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
`;var q=Object.defineProperty,A=Object.getOwnPropertyDescriptor,F=(t,n,e,r)=>{for(var i=r>1?void 0:r?A(n,e):n,l=t.length-1,d;l>=0;l--)(d=t[l])&&(i=(r?d(n,e,i):d(i))||i);return r&&i&&q(n,e,i),i};let v=class extends _{constructor(){super(...arguments);a(this,"itemImage","https://www.pngmart.com/files/21/3D-Download-PNG-Image.png");a(this,"demoCode",W);a(this,"masks",[{preview:this.itemImage,name:"Robot",rarity:"Common",selectionCount:"1",selected:!0},{preview:this.itemImage,name:"Robot",rarity:"Common",selectionCount:"2",selected:!0},{preview:this.itemImage,name:"Robot",rarity:"Common",selectionCount:"3",selected:!0},{preview:this.itemImage,name:"Robot",rarity:"Common"},{preview:this.itemImage,name:"Robot",rarity:"Common"},{preview:this.itemImage,name:"Robot",rarity:"Common"},{preview:this.itemImage,name:"Robot",rarity:"Common"},{preview:this.itemImage,name:"Robot",rarity:"Common"}])}clickEvent(){console.log("Hey you clicked me!")}};v=F([u({components:{DemoSection:w,ItemGrid:D,VirtualItem:j}})],v);var M=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"section"},[e("h1",[t._v("Virtual Items")]),e("p",[t._v("UI for face masks items and grid.")]),t._m(0),e("div",{staticClass:"section"},[e("h2",[t._v("Giveaway Items")]),e("DemoSection",{attrs:{title:"Giveaway Items",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("div",{staticClass:"container"},[e("VirtualItem",{attrs:{preview:t.itemImage,rarity:"Enter Giveaway",name:"4x VIP Tickets to PAX, TwitchCon and SXSW",remainingTime:"2h left",hasWarning:!0}}),e("VirtualItem",{attrs:{preview:t.itemImage,rarity:"Entered",name:"$5K Custom High-Spec Streaming Desktop PC",remainingTime:"5d left",isGiveaway:!0}})],1)]},proxy:!0}])})],1),e("h2",[t._v("Face Masks")]),e("DemoSection",{attrs:{title:"Face Masks",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[e("ItemGrid",t._l(t.masks,function(r,i){return e("VirtualItem",{key:i,attrs:{preview:r.preview,rarity:r.rarity,name:r.name,selectionCount:r.selectionCount,selected:r.selected},on:{click:t.clickEvent}})}),1)]},proxy:!0}])})],1),t._m(1)])},N=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",[e("code",[t._v(`import { ItemGrid, VirtualItem } from "streamlabs-beaker"

components: {
  ItemGrid,
  VirtualItem
}`)])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("table",{staticClass:"docs-table"},[e("thead",[e("tr",[e("th",[t._v("Props")]),e("th",[t._v("Type")]),e("th",[t._v("Default")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[t._v("name")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Name of the item.")])]),e("tr",[e("td",[t._v("value")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Value you want to assign to the item.")])]),e("tr",[e("td",[t._v("preview")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Item preview image.")])]),e("tr",[e("td",[t._v("quantity")]),e("td",[t._v("number")]),e("td",[t._v("null")]),e("td",[t._v("Quantity of the particular item.")])]),e("tr",[e("td",[t._v("rarity")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v(" Gives item rarity class "),e("code",[t._v("s-virtual-item--${rarity}")]),t._v(" and adds rarity string to item. Use for giveaway text. ")])]),e("tr",[e("td",[t._v("selected")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("Sets item to selected state.")])]),e("tr",[e("td",[t._v("selectionCount")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v(" Adds counter to top right of item. You have to set this functionality. ")])]),e("tr",[e("td",[t._v("remainingTime")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Remaining time for giveaways or special promotions")])]),e("tr",[e("td",[t._v("hasWarning")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("Changes item background color to red.")])]),e("tr",[e("td",[t._v("isGiveaway")]),e("td",[t._v("boolean")]),e("td",[t._v("false")]),e("td",[t._v("Adds checkmark and set rarity color to teal.")])]),e("tr",[e("td",[t._v("type")]),e("td",[t._v("string")]),e("td",[t._v("null")]),e("td",[t._v("Add type text to top of item")])])])])}];const f={};var H=p(v,M,N,!1,U,"628da7f4",null,null);function U(t){for(let n in f)this[n]=f[n]}const J=function(){return H.exports}();export{J as default};
//# sourceMappingURL=VirtualItems-27f92f42.js.map
