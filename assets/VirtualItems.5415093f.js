var g=Object.defineProperty;var f=(e,t,n)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var a=(e,t,n)=>(f(e,typeof t!="symbol"?t+"":t,n),n);import{C as u,P as o,V as _,n as p}from"./index.4fb8a6cb.js";import{D as h}from"./DemoSection.79ee11c0.js";import"./Accordion.09c82396.js";var C=Object.defineProperty,I=Object.getOwnPropertyDescriptor,y=(e,t,n,r)=>{for(var i=r>1?void 0:r?I(t,n):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(i=(r?d(t,n,i):d(i))||i);return r&&i&&C(t,n,i),i};let c=class extends _{constructor(){super(...arguments);a(this,"items")}};y([o()],c.prototype,"items",2);c=y([u({})],c);var w=function(){var t=this,n=t._self._c;return t._self._setupProxy,n("div",{staticClass:"s-item-grid"},[t._t("default")],2)},b=[],V=p(c,w,b,!1,null,null,null,null);const G=V.exports;var k=Object.defineProperty,P=Object.getOwnPropertyDescriptor,m=(e,t,n,r)=>{for(var i=r>1?void 0:r?P(t,n):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(i=(r?d(t,n,i):d(i))||i);return r&&i&&k(t,n,i),i};let s=class extends _{constructor(){super(...arguments);a(this,"name");a(this,"value");a(this,"preview");a(this,"quantity");a(this,"rarity");a(this,"selected");a(this,"selectionCount");a(this,"remainingTime");a(this,"hasWarning");a(this,"isGiveaway");a(this,"type");a(this,"isClickable",!1)}mounted(){this.$listeners.click&&(this.isClickable=!0)}get virtualItemClasses(){const t=[];return this.rarity&&t.push(`s-virtual-item--${this.rarity}`),this.selected&&t.push("is-selected"),this.isClickable&&t.push("clickable"),t.join(" ")}};m([o(String)],s.prototype,"name",2);m([o(String)],s.prototype,"value",2);m([o(String)],s.prototype,"preview",2);m([o(Number)],s.prototype,"quantity",2);m([o(String)],s.prototype,"rarity",2);m([o({default:!1})],s.prototype,"selected",2);m([o(String)],s.prototype,"selectionCount",2);m([o(String)],s.prototype,"remainingTime",2);m([o({default:!1})],s.prototype,"hasWarning",2);m([o({default:!1})],s.prototype,"isGiveaway",2);m([o(String)],s.prototype,"type",2);s=m([u({})],s);var S=function(){var t=this,n=t._self._c;return t._self._setupProxy,n("div",{staticClass:"s-virtual-item",class:[t.virtualItemClasses],attrs:{rarity:t.rarity,selected:t.selected,quantity:t.quantity,value:t.value},on:{click:function(r){return t.$emit("click")}}},[t.selectionCount?n("span",{staticClass:"s-virtual-item__selection-count"},[t._v(" "+t._s(t.selectionCount)+" ")]):t._e(),t.remainingTime?n("span",{staticClass:"s-virtual-item__selection-remaining",class:{warning:t.hasWarning}},[t._v(t._s(t.remainingTime))]):t._e(),t.type?n("span",{staticClass:"s-virtual-item__label"},[t._v(t._s(t.type))]):t._e(),t.quantity?n("span",{staticClass:"s-virtual-item__label"},[t._v(t._s(t.quantity))]):t._e(),n("div",{staticClass:"s-virtual-item__img"},[n("img",{attrs:{src:t.preview}})]),n("h3",{staticClass:"s-virtual-item__name"},[t._v(t._s(t.name))]),n("span",{staticClass:"s-virtual-item__rarity",class:{entered:t.isGiveaway}},[t.isGiveaway?n("i",{staticClass:"icon-check-mark"}):t._e(),t._v(" "+t._s(t.rarity)+" ")])])},D=[],x=p(s,S,D,!1,null,null,null,null);const $=x.exports,R=`<template>
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
`;var T=Object.defineProperty,O=Object.getOwnPropertyDescriptor,W=(e,t,n,r)=>{for(var i=r>1?void 0:r?O(t,n):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(i=(r?d(t,n,i):d(i))||i);return r&&i&&T(t,n,i),i};let v=class extends _{constructor(){super(...arguments);a(this,"itemImage","https://www.pngmart.com/files/21/3D-Download-PNG-Image.png");a(this,"demoCode",R);a(this,"masks",[{preview:this.itemImage,name:"Robot",rarity:"Common",selectionCount:"1",selected:!0},{preview:this.itemImage,name:"Robot",rarity:"Common",selectionCount:"2",selected:!0},{preview:this.itemImage,name:"Robot",rarity:"Common",selectionCount:"3",selected:!0},{preview:this.itemImage,name:"Robot",rarity:"Common"},{preview:this.itemImage,name:"Robot",rarity:"Common"},{preview:this.itemImage,name:"Robot",rarity:"Common"},{preview:this.itemImage,name:"Robot",rarity:"Common"},{preview:this.itemImage,name:"Robot",rarity:"Common"}])}clickEvent(){console.log("Hey you clicked me!")}};v=W([u({components:{DemoSection:h,ItemGrid:G,VirtualItem:$}})],v);var q=function(){var t=this,n=t._self._c;return t._self._setupProxy,n("div",[n("div",{staticClass:"section"},[n("h1",[t._v("Virtual Items")]),n("p",[t._v("UI for face masks items and grid.")]),t._m(0),n("div",{staticClass:"section"},[n("h2",[t._v("Giveaway Items")]),n("DemoSection",{attrs:{title:"Giveaway Items",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("div",{staticClass:"container"},[n("VirtualItem",{attrs:{preview:t.itemImage,rarity:"Enter Giveaway",name:"4x VIP Tickets to PAX, TwitchCon and SXSW",remainingTime:"2h left",hasWarning:!0}}),n("VirtualItem",{attrs:{preview:t.itemImage,rarity:"Entered",name:"$5K Custom High-Spec Streaming Desktop PC",remainingTime:"5d left",isGiveaway:!0}})],1)]},proxy:!0}])})],1),n("h2",[t._v("Face Masks")]),n("DemoSection",{attrs:{title:"Face Masks",code:t.demoCode},scopedSlots:t._u([{key:"components",fn:function(){return[n("ItemGrid",t._l(t.masks,function(r,i){return n("VirtualItem",{key:i,attrs:{preview:r.preview,rarity:r.rarity,name:r.name,selectionCount:r.selectionCount,selected:r.selected},on:{click:t.clickEvent}})}),1)]},proxy:!0}])})],1),t._m(1)])},A=[function(){var e=this,t=e._self._c;return e._self._setupProxy,t("pre",[t("code",[e._v(`import { ItemGrid, VirtualItem } from "streamlabs-beaker"

components: {
  ItemGrid,
  VirtualItem
}`)])])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[e._v("Props")]),t("th",[e._v("Type")]),t("th",[e._v("Default")]),t("th",[e._v("Description")])])]),t("tbody",[t("tr",[t("td",[e._v("name")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Name of the item.")])]),t("tr",[t("td",[e._v("value")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Value you want to assign to the item.")])]),t("tr",[t("td",[e._v("preview")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Item preview image.")])]),t("tr",[t("td",[e._v("quantity")]),t("td",[e._v("number")]),t("td",[e._v("null")]),t("td",[e._v("Quantity of the particular item.")])]),t("tr",[t("td",[e._v("rarity")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v(" Gives item rarity class "),t("code",[e._v("s-virtual-item--${rarity}")]),e._v(" and adds rarity string to item. Use for giveaway text. ")])]),t("tr",[t("td",[e._v("selected")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Sets item to selected state.")])]),t("tr",[t("td",[e._v("selectionCount")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v(" Adds counter to top right of item. You have to set this functionality. ")])]),t("tr",[t("td",[e._v("remainingTime")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Remaining time for giveaways or special promotions")])]),t("tr",[t("td",[e._v("hasWarning")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Changes item background color to red.")])]),t("tr",[t("td",[e._v("isGiveaway")]),t("td",[e._v("boolean")]),t("td",[e._v("false")]),t("td",[e._v("Adds checkmark and set rarity color to teal.")])]),t("tr",[t("td",[e._v("type")]),t("td",[e._v("string")]),t("td",[e._v("null")]),t("td",[e._v("Add type text to top of item")])])])])}],E=p(v,q,A,!1,null,"b46ebb50",null,null);const M=E.exports;export{M as default};
//# sourceMappingURL=VirtualItems.5415093f.js.map
