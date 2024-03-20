var A=Object.defineProperty;var P=(n,e,t)=>e in n?A(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var s=(n,e,t)=>(P(n,typeof e!="symbol"?e+"":e,t),t);import{C as v,P as a,V as m,n as g,W as N}from"./index-e8bb31bb.js";import{B as x}from"./Button-3cf72d47.js";import{D as M}from"./DemoSection-b2dfe451.js";import"./Accordion-79d22a9d.js";const j=`<template>
  <div>
    <h1>Banners</h1>
    <div class="section">
      <h2>Marketing Banner</h2>
      <DemoSection title="Marketing Banner" :code="demoCode">
        <template #components>
          <banner-marketing
            bg-image="
                https://cdn.streamlabs.com/static/imgs/pretzel_dashboard_banner_bg.png
              "
            bg-image-night="
                http://cdn.backgroundhost.com/backgrounds/subtlepatterns/cartographer.png
              "
            icon-name="themes"
            label="Introducing Streamlabs OBS"
            title="Largest library of free themes in the world."
            desc="
                To access over 700+ themes for free, download Streamlabs OBS.
              "
            link-desc="Win 7+  245.8 MB"
            :onToggle="test"
          >
            <Button
              slot="link"
              type="a"
              variation="action"
              size="standard"
              href="#"
              title="Download"
              icon="overview"
            />
          </banner-marketing>
        </template>
      </DemoSection>

      <banner-marketing
        bg-image="
            https://cdn.streamlabs.com/static/imgs/pretzel_dashboard_banner_bg.png
          "
        :icon-image="pretzelIcon"
        label="New Streamlabs OBS App"
        title="Introducing Pretzel Rocks Music Player"
        desc="
            Stream-safe music for broadcasters with an ever-growing catalog of music. Currently 5k+ tracks.
          "
        link-desc="$4.99/mo"
        :banner-closed="bannerClosed"
      >
        <Button
          slot="link"
          type="a"
          variation="action"
          size="standard"
          href="#"
          title="Try It Now"
        />
      </banner-marketing>

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
            <td>bgImage</td>
            <td>string</td>
            <td>true</td>
            <td>null</td>
            <td>Background image that will display in day mode.</td>
          </tr>
          <tr>
            <td>bgImageNight</td>
            <td>string</td>
            <td>false</td>
            <td>null</td>
            <td>Background image that will display in night mode.</td>
          </tr>
          <tr>
            <td>label</td>
            <td>string</td>
            <td>true</td>
            <td>null</td>
            <td>Label text in the upper left of the banner.</td>
          </tr>
          <tr>
            <td>iconImage</td>
            <td>string</td>
            <td>false</td>
            <td>null</td>
            <td>
              Icon image next to title. Use a url path. If using iconName - do
              not use iconImg. We will improve functionality in near future.
            </td>
          </tr>
          <tr>
            <td>iconName</td>
            <td>string</td>
            <td>false</td>
            <td>null</td>
            <td>
              Icon next to title. Use icon name from icon list. If using iconImg
              - do not use iconName. We will improve functionality in near
              future.
            </td>
          </tr>
          <tr>
            <td>title</td>
            <td>string</td>
            <td>true</td>
            <td>null</td>
            <td>Main banner title.</td>
          </tr>
          <tr>
            <td>desc</td>
            <td>string</td>
            <td>true</td>
            <td>null</td>
            <td>Description text below banner title.</td>
          </tr>
          <tr>
            <td>linkDesc</td>
            <td>string</td>
            <td>false</td>
            <td>null</td>
            <td>Description text below link.</td>
          </tr>
          <tr>
            <td>bannerClosed</td>
            <td>boolean</td>
            <td>false</td>
            <td>false</td>
            <td>Default state the banner is. Open by default.</td>
          </tr>
          <tr>
            <td>onToggle</td>
            <td>function</td>
            <td>null</td>
            <td>false</td>
            <td>Function which is called when you toggle the icon close.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section">
      <h2>Sale Banner</h2>
      <DemoSection title="Sale Banner" :code="demoCode">
        <template #components>
          <banner-sale
            title="Flash Sale! 25% off everything!"
            desc="All items are automatically discounted."
            days="00"
            hours="00"
            minutes="00"
            :seconds="secs"
            time-desc="Until flash sale ends. Hurry!"
          />
        </template>
      </DemoSection>

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
            <td>title</td>
            <td>string</td>
            <td>true</td>
            <td>null</td>
            <td>Banner main title.</td>
          </tr>
          <tr>
            <td>desc</td>
            <td>string</td>
            <td>true</td>
            <td>null</td>
            <td>Banner description text below main title.</td>
          </tr>
          <tr>
            <td>days</td>
            <td>string</td>
            <td>true</td>
            <td>"00"</td>
            <td>Days remaining value for countdown timer</td>
          </tr>
          <tr>
            <td>hours</td>
            <td>string</td>
            <td>true</td>
            <td>"00"</td>
            <td>Hours remaining value for countdown timer</td>
          </tr>
          <tr>
            <td>minutes</td>
            <td>string</td>
            <td>true</td>
            <td>"00"</td>
            <td>Minutes remaining value for countdown timer</td>
          </tr>
          <tr>
            <td>seconds</td>
            <td>string</td>
            <td>true</td>
            <td>"00"</td>
            <td>Seconds remaining value for countdown timer</td>
          </tr>
          <tr>
            <td>timeDesc</td>
            <td>string</td>
            <td>false</td>
            <td>null</td>
            <td>Description text below countdown timer.</td>
          </tr>
          <tr>
            <td>borderColor</td>
            <td>string</td>
            <td>false</td>
            <td>"rgba(248, 86, 64, 0.33)"</td>
            <td>Banner border color.</td>
          </tr>
          <tr>
            <td>backgroundColor</td>
            <td>boolean</td>
            <td>false</td>
            <td>"rgba(248, 86, 64, 0.08)"</td>
            <td>Banner background color.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section">
      <h2>Notice Banner</h2>
      <DemoSection title="Notice Banner" :code="demoCode">
        <template #components>
          <Notice
            title="
                Join affiliates and earn $1 for each Streamlabs OBS referral
              "
            desc="
                Share your unique referral link with friends and get paid directly into your PayPal each month.
              "
            icon="information"
          >
            <Button
              slot="button"
              type="button"
              size="fixed-width"
              variation="action"
              title="Join"
            />
          </Notice>
        </template>
      </DemoSection>

      <br />
      <br />

      <Notice
        variation="warning"
        title="Your donation link has expired"
        desc="Copy your new donation link and replace all instances containing twitchalerts.com."
      >
        <Button
          slot="button"
          type="button"
          size="fixed-width"
          variation="default"
          title="Copy Link"
        />
      </Notice>

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
            <td>variation</td>
            <td>string</td>
            <td>true</td>
            <td>default</td>
            <td>
              Variation style that will be displayed. Options are "default" and
              "warning".
            </td>
          </tr>
          <tr>
            <td>title</td>
            <td>string</td>
            <td>true</td>
            <td>null</td>
            <td>Banner title</td>
          </tr>
          <tr>
            <td>desc</td>
            <td>string</td>
            <td>true</td>
            <td>null</td>
            <td>Description text below banner title</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>string</td>
            <td>true</td>
            <td>null</td>
            <td>
              Icon next to title and in background. Will override selected
              variation icon. Use icon name from icon list.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section">
      <h2>Discord Banner</h2>
      <DemoSection title="Discord Banner" :code="demoCode">
        <template #components>
          <BannerDiscord />
        </template>
      </DemoSection>

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
            <td>title</td>
            <td>string</td>
            <td>
              Join the Streamlabs OBS Discussion on
              &lt;span&gt;Discord&lt;/span&gt;
            </td>
            <td>
              Set the title of the banner. You can wrap text in
              <code>&lt;span&gt;</code> tags to give them medium font weight.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section">
      <h2>Introduction Banner</h2>
      <DemoSection title="Introduction Banner" :code="demoCode">
        <template #components>
          <BannerIntroduction bgColor="#5e3bec">
            <img
              slot="bgImage"
              src="https://cdn.streamlabs.com/static/alert-box-sounds-banner-bg.png"
              alt=""
              class="banner-introduction-bgImage"
            />
            <template #title
              >Introducing<span class="banner-introduction-title"
                >Prime Alert Box Sounds</span
              ></template
            >
            <template #description
              >Modern, hype sounds you can add to your live alerts. All included
              with Prime.</template
            >
            <Button
              slot="button"
              title="Browse Sounds"
              :bgColor="'#000'"
              :textColor="'#fff'"
            ></Button>
          </BannerIntroduction>
        </template>
      </DemoSection>

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
            <td>bgColor</td>
            <td>string</td>
            <td>Null</td>
            <td>Set the background color of the banner.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BannersCode from "./Banners.vue?raw";
import BannerDiscord from "./../components/BannerDiscord.vue";
import BannerIntroduction from "./../components/BannerIntroduction.vue";
import BannerMarketing from "./../components/BannerMarketing.vue";
import BannerSale from "./../components/BannerSale.vue";
import Button from "./../components/Button.vue";
import DemoSection from "./../components/DemoSection.vue";
import Notice from "./../components/Notice.vue";
import pretzelIcon from '../assets/imgs/pretzel-icon.png';

@Component({
  components: {
    BannerDiscord,
    BannerIntroduction,
    BannerMarketing,
    BannerSale,
    Button,
    DemoSection,
    Notice
  }
})
export default class Banners extends Vue {
  demoCode = BannersCode;
  pretzelIcon = pretzelIcon;
  remainingSecs = 10;

  bannerClosed = false;

  mounted() {
    setInterval(() => {
      this.remainingSecs--;
      if (this.remainingSecs < 0) {
        this.remainingSecs = 10;
      }
    }, 1000);
  }

  get secs() {
    return this.remainingSecs < 10
      ? \`0\${this.remainingSecs}\`
      : \`\${this.remainingSecs}\`;
  }

  test() {
    console.log("test");
  }
}
<\/script>

<style lang="less" scoped>
.banner-introduction-title {
  font-weight: 500;
  padding: 0 8px;
}

.banner-introduction-bgImage {
  position: absolute;
  width: auto;
  height: 100%;
  right: 0px;
  border-radius: 8px;
}
</style>
`;var z=Object.defineProperty,T=Object.getOwnPropertyDescriptor,O=(n,e,t,r)=>{for(var o=r>1?void 0:r?T(e,t):e,i=n.length-1,d;i>=0;i--)(d=n[i])&&(o=(r?d(e,t,o):d(o))||o);return r&&o&&z(e,t,o),o};let b=class extends m{constructor(){super(...arguments);s(this,"title")}};O([a({default:"Join the Streamlabs OBS Discussion on <span>Discord</span>"})],b.prototype,"title",2);b=O([v({components:{Button:x}})],b);var Y=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"s-banner-discord"},[t("h2",{staticClass:"s-banner-discord__title",domProps:{innerHTML:n._s(n.title)}}),t("Button",n._g({attrs:{title:"Open Discord",icon:"discord",iconPosition:"right",variation:"custom",bgColor:"#FFFFFF",textColor:"#7289DA",tag:"a",href:"https://discord.gg/stream",target:"_blank"}},n.$listeners))],1)},q=[];const B={};var R=g(b,Y,q,!1,$,null,null,null);function $(n){for(let e in B)this[e]=B[e]}const V=function(){return R.exports}();var F=Object.defineProperty,H=Object.getOwnPropertyDescriptor,k=(n,e,t,r)=>{for(var o=r>1?void 0:r?H(e,t):e,i=n.length-1,d;i>=0;i--)(d=n[i])&&(o=(r?d(e,t,o):d(o))||o);return r&&o&&F(e,t,o),o};let f=class extends m{constructor(){super(...arguments);s(this,"bgColor")}};k([a(String)],f.prototype,"bgColor",2);f=k([v({})],f);var E=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"s-banner-introduction",style:{"background-color":n.bgColor}},[n._t("bgImage"),t("div",{staticClass:"s-banner-introduction__body"},[t("h2",{staticClass:"s-banner-introduction__title"},[n._t("title")],2),t("p",{staticClass:"s-banner-introduction__description"},[n._t("description")],2)]),t("div",{staticClass:"s-banner-introduction__button"},[n._t("button")],2)],2)},L=[];const C={};var G=g(f,E,L,!1,U,null,null,null);function U(n){for(let e in C)this[e]=C[e]}const W=function(){return G.exports}();var J=Object.defineProperty,X=Object.getOwnPropertyDescriptor,u=(n,e,t,r)=>{for(var o=r>1?void 0:r?X(e,t):e,i=n.length-1,d;i>=0;i--)(d=n[i])&&(o=(r?d(e,t,o):d(o))||o);return r&&o&&J(e,t,o),o};let l=class extends m{constructor(){super(...arguments);s(this,"$refs");s(this,"bgImageNight");s(this,"bgImage");s(this,"label");s(this,"iconName");s(this,"iconImage");s(this,"title");s(this,"desc");s(this,"linkDesc");s(this,"bannerClosed");s(this,"onToggle");s(this,"closed",!1)}onBannerCloseStateChanged(t,r){this.closed=t,this.updateBannerHeight()}mounted(){this.closed=this.bannerClosed,this.updateBannerHeight()}toggleBanner(){if(typeof this.onToggle=="function"&&this.onToggle(),this.closed=!this.closed,this.updateBannerHeight(),this.$whatInput.ask()==="keyboard"){const t=this.$refs.banner.querySelectorAll(".icon-down");let r;this.closed?r=t[1]:r=t[0],parseInt(r.getAttribute("tabindex")),this.$nextTick(()=>r.focus())}}updateBannerHeight(){let t=this.$refs.banner,r=this.$refs.bottomWrapper;this.closed?setTimeout(()=>{t.style.maxHeight=`${r.scrollHeight+32}px`},1):t.style.maxHeight="240px"}};u([a()],l.prototype,"bgImageNight",2);u([a()],l.prototype,"bgImage",2);u([a()],l.prototype,"label",2);u([a()],l.prototype,"iconName",2);u([a()],l.prototype,"iconImage",2);u([a()],l.prototype,"title",2);u([a()],l.prototype,"desc",2);u([a()],l.prototype,"linkDesc",2);u([a({default:!1})],l.prototype,"bannerClosed",2);u([a()],l.prototype,"onToggle",2);u([N("bannerClosed")],l.prototype,"onBannerCloseStateChanged",1);l=u([v({})],l);var Q=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"banner",staticClass:"s-banner"},[t("div",{staticClass:"s-banner__bg",style:{background:`linear-gradient(to bottom left, rgba(227, 232, 235, 0.72), rgba(227, 232, 235, 0.72)), url('${n.bgImage}') center center no-repeat`}}),t("div",{staticClass:"s-banner__bg s-banner__bg--night",style:{background:`linear-gradient(to bottom left, rgba(9, 22, 29, 0.72), rgba(9, 22, 29, 0.72)), url('${n.bgImageNight}') center center no-repeat`}}),t("div",{key:"banner-open",staticClass:"s-banner__body",class:{"s-banner__body--closed":n.closed}},[t("div",{staticClass:"s-banner__wrapper"},[t("div",{staticClass:"s-banner__label"},[n._v(n._s(n.label))]),t("i",{staticClass:"icon-down",attrs:{tabindex:"0"},on:{click:function(r){return n.toggleBanner()},keydown:function(r){return!r.type.indexOf("key")&&n._k(r.keyCode,"space",32,r.key,[" ","Spacebar"])?null:(r.preventDefault(),n.toggleBanner())}}})]),t("div",{ref:"bottomWrapper",staticClass:"s-banner__wrapper"},[t("div",{staticClass:"s-banner__title"},[n.iconName?t("div",{staticClass:"s-banner__icon"},[t("i",{class:`icon-${n.iconName}`})]):n._e(),n.iconImage?t("div",{staticClass:"s-banner__icon"},[t("img",{attrs:{src:n.iconImage}})]):n._e(),t("div",{staticClass:"s-banner__details"},[t("h2",{staticClass:"s-banner__name"},[n._v(n._s(n.title))]),t("p",{staticClass:"s-banner__desc"},[n._v(n._s(n.desc))])])]),t("div",{staticClass:"s-banner__download-wrapper",on:{click:function(r){r.stopPropagation()}}},[n._t("link"),t("i",{staticClass:"icon-down",attrs:{tabindex:"0"},on:{click:function(r){return n.toggleBanner()},keydown:function(r){return!r.type.indexOf("key")&&n._k(r.keyCode,"space",32,r.key,[" ","Spacebar"])?null:(r.preventDefault(),n.toggleBanner())}}}),t("div",{staticClass:"s-banner__link-desc"},[n._v(n._s(n.linkDesc))])],2)])])])},K=[];const w={};var Z=g(l,Q,K,!1,tt,null,null,null);function tt(n){for(let e in w)this[e]=w[e]}const nt=function(){return Z.exports}();var et=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,_=(n,e,t,r)=>{for(var o=r>1?void 0:r?rt(e,t):e,i=n.length-1,d;i>=0;i--)(d=n[i])&&(o=(r?d(e,t,o):d(o))||o);return r&&o&&et(e,t,o),o};let c=class extends m{constructor(){super(...arguments);s(this,"title");s(this,"desc");s(this,"days");s(this,"hours");s(this,"minutes");s(this,"seconds");s(this,"timeDesc");s(this,"borderColor");s(this,"backgroundColor")}get daysDone(){return this.days==="00"}get hoursDone(){return this.daysDone&&this.hours==="00"}get minutesDone(){return this.hoursDone&&this.minutes==="00"}get secondsDone(){return this.minutesDone&&this.seconds==="00"}};_([a({required:!0})],c.prototype,"title",2);_([a({required:!0})],c.prototype,"desc",2);_([a({default:"00",required:!0})],c.prototype,"days",2);_([a({default:"00",required:!0})],c.prototype,"hours",2);_([a({default:"00",required:!0})],c.prototype,"minutes",2);_([a({default:"00",required:!0})],c.prototype,"seconds",2);_([a()],c.prototype,"timeDesc",2);_([a({default:"rgba(248, 86, 64, 0.33)"})],c.prototype,"borderColor",2);_([a({default:"rgba(248, 86, 64, 0.08)"})],c.prototype,"backgroundColor",2);c=_([v({})],c);var ot=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"s-banner-sale",style:{"background-color":n.backgroundColor,"border-color":n.borderColor}},[t("div",{staticClass:"s-banner-sale__wrapper s-header"},[t("h1",[n._v(n._s(n.title))]),t("p",[n._v(n._s(n.desc))])]),t("div",{staticClass:"s-banner-sale__wrapper s-header"},[t("h1",{staticClass:"s-banner-sale__time"},[t("span",{class:{"s-banner-sale__time--done":n.daysDone}},[n._v(n._s(`${n.days}d`))]),t("span",{class:{"s-banner-sale__time--done":n.hoursDone}},[n._v(n._s(`${n.hours}h`))]),t("span",{class:{"s-banner-sale__time--done":n.minutesDone}},[n._v(n._s(`${n.minutes}m`))]),t("span",{class:{"s-banner-sale__time--done":n.secondsDone}},[n._v(n._s(`${n.seconds}s`))])]),t("p",[n._v(n._s(n.timeDesc))])])])},st=[];const D={};var at=g(c,ot,st,!1,it,null,null,null);function it(n){for(let e in D)this[e]=D[e]}const dt=function(){return at.exports}();var lt=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,h=(n,e,t,r)=>{for(var o=r>1?void 0:r?ct(e,t):e,i=n.length-1,d;i>=0;i--)(d=n[i])&&(o=(r?d(e,t,o):d(o))||o);return r&&o&&lt(e,t,o),o};let p=class extends m{constructor(){super(...arguments);s(this,"variation");s(this,"title");s(this,"desc");s(this,"icon")}get iconType(){switch(this.variation){case"default":return"information";case"warning":return"error"}}get iconClass(){return`icon-${this.icon?this.icon:this.iconType}`}};h([a({default:"default"})],p.prototype,"variation",2);h([a({required:!0})],p.prototype,"title",2);h([a({required:!0})],p.prototype,"desc",2);h([a()],p.prototype,"icon",2);p=h([v({})],p);var ut=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"s-notice",class:`s-notice--${n.iconType}`},[t("div",{staticClass:"s-notice__wrapper"},[t("i",{staticClass:"s-notice__icon-bg",class:[n.iconClass]}),t("div",{staticClass:"s-notice__body"},[t("i",{staticClass:"s-notice__icon",class:[n.iconClass]}),t("div",{staticClass:"s-notice__detail"},[t("h2",{staticClass:"s-notice__title"},[n._v(n._s(n.title))]),t("p",{staticClass:"s-notice__desc"},[n._v(n._s(n.desc))])])]),t("div",{staticClass:"s-notice__button"},[n._t("button")],2)])])},_t=[];const S={};var pt=g(p,ut,_t,!1,vt,null,null,null);function vt(n){for(let e in S)this[e]=S[e]}const mt=function(){return pt.exports}(),gt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAApESURBVHgB7Z0JUFXXGcf/D3gsAoIoCC4gKLKJgCtRUatJU2XidNoZ22g71dYxbao2jdpJTaxpdNqkmtg6ZmlSM82YOGbRVBuNjXaMAZGI7Pu+g4Ds+5p+505tMw7hXd59977LeefnODjOHQb4cc75lnPONXxFQMAtdhBwjRDMOUIw5wjBnCMEc44QzDlCMOcIwZwjBHOOEMw5QjDnCMGcIwRzjhDMOUIw5wjBnCMEc44QzDlCMOcIwVbgZnMD4hIuY9H1C1AbBwg0I7ezDX8uzcX5ukpotddRCNaAtsFBvFScib9VFGFY402sQrCKDJHMkzRiT5YVoGWwH9ZACFaBERJ7vr4CLxZlo6y7E9ZECLYwWR0t+E3OHdxubYIeEIItRGVPFw4VpOGf9dXQ01ERIVghrbS2vlFeiGMlOdDjKSAh2EwGRkbwYW05DuanU5RsnQBKDkLwOGFpzpWGWvyxKBN5lNfqHSF4HGS0t+BwQTqu37uLiYIQLIO7/X34XV4qPqqrwERDCB6DTqpAnSjLxZtUgeocGsRERAgehX4KoM7VVuBIYQaN3l5MZITgB2Dr6zM5KSju7gAPCMH/Ja2tWcplrzTUQAmOdnbYERACo50BfynNg7WxecHVvd1UqMjH61SsUIKDwYAN02fhQEgUQtw8pP8Tgq0Ia+G9U1WEl2nUdg0NQQlRk73w+7AYrJ7mC71hc4J7h4fwAQVQx4qzUdvXAyUETnLDwdAYfNfPH3rFpgQnNDfgYF6a1PFRgpu9EfuCF2B7QDDcHYzQMzYhOL29WRKb1NIIJThRAPVkYDh2Bs7HdCcXTAS4FnxvoA9Hi3NwuqoEfSPDUMJjfrOxb14kIidPwUSCa8F/LS/AWxXKomMm9IWwRVijwwBKDlwLVrLBbabzJBwOX4Rv+8zEJPuJ+2MShY4H8DQ6Ys/ccGzzn0f/dsJERwj+Gk8EhmJ3UBhm0OjlBSGYeJSm4RdoOg52nQzesHnBPwuYj6MLloJXbP5sku8EyWfNRRw+4xwhmHOEYM4RgjlHCOYcIZhzhGDOEYI5RwjmHCGYc4RgzuFa8OxJbrB1uBa83T8Yf18cBz8nfvq744X7KXqTrz9urY3HNpJtgO2hy35welszklubpO2u9X290tFNdjURO/fj5mCkEemCb3n7IcZzqqwm/WQHR7wSuQw/mj0XO9ITUdHTBVtBN4LZGaF3qkrwYV05qnu6TT7/fm259DHSYwq2zpqLx+mvu8PY384i+oVIWbsJJ0rz8KeiLPR/NQLeMVj7BdFsdB4tzsYb5QXSzXDm4uPkjD1BEfhpQDCc7e1NPs9G8ba0BDw2fTb2Bi+AGnhdes/kMy3xW6EmVhV8pbEGuzOT0TxguVtq2D7m16JXIMLdU9bzNb09mOWiThCmB8FWCbLYevpqWT62pNywqFxGdkcr1ideweHCDFq/TR8uU0uuXrCK4N/mpeJgfhrUYmBkGMdLcrHx1lVca6qHLaO5YHZsU+lxErmw6wW3pHyO3Vm3aCo2HbjxiKaCWeT7B4petWSIIuX3qssQT6P5VGWxru6R1ALNBNfRenhIxWnZFCwN259zGz9J/UIa2WozopN7KzXLg5/NTUVjf5/s513tjfjejADpVN9MCoSc7eylqxaqe7soV65A4r0GDJqRx35ytxrJLU3YMWc+dgWFqXawTM4F4HLSOaVoIri0uxMXG6plPWs02GELVZyeC4nCVMfRDn/54IezgqQ89kDeHeneyPHCzg2/SEvF5YYavBm9EvPdLH9k5Waz6cPm3o7OUBtNpuiXKbCSk2470Sh9d+kaHKey4uhy/88c6hSdWbIWpxevhp+Zh8Wy2lsQl3AJz+enK76I5UE+rq80+QyrrKmN6oJZpeqSjLun2Mh9d8lqPOI9A+Mh3nc2Pl+1Qaozm8PgyAhOlOVJos2ZDUajimaXz2R8rjA3ecUYJagumK15cu55fJrKhevHKfc+3lSmPLEwFhdjH0aQqzvMgQVeP069gX05KVJ1y1zYTLWL0jI5V0asoYaJ2qguOIcqS6bwc3bBrsAwKGXV1OlIjIvHgflRMAd2I8DblUXYkPQZTleXYLywRYgVcBJlrL+B9Iu4fMo0qI3qglPaTL+cgk2zrg6WifdYZMquOEqI24iHvHxgDrV93fhV1pfYTs2IcpkpVcfgIJ7O/hKvUdNEDjvnhEALVBdc2mX6B7TJNwCWJoKaDhdi1+NI2GJpfTeHC/VVeJjq2oeka/sHRn2mZ3iICjhlWJnwidTulAO7gulxygS0QPVukvflMyYvQ6l8dLOqF4qxNXUvFTmuNioLotgdlEs8p8HdaEQPRd1F3R1Ibb037nz8SPhiPBkYCi1QXbCcllnTxi2wN6i/oeZsTRmOFGZKVTVrwVKjayu/A61QfYo2yBA3oPCSMrmwAskXFISZm1IphQWTby+Kg5aoLthDxtRrqdqwnGKFl6OjlFJ9tGydFMlqhRsFkadiVsHfxRVaorpgOd+Qpd5iwqLYn2ckycpj11EOmrw6HnuCwlXfbclq6Wep6hZrZlSvBNUFR8sox71Vqbw/zF4CeY7Kgx9QS3I1VaXOVJdSXjp2eGGk0ujzYTFIJNH3L/G2NIGuVFJduhYrKEe3BqoLXuxpOpmv6O7C+xQAKeF4ae7/6t0spdmVlYyNSVdlbZENc/fETZL8UsRSuFiwu7STOlbXV21EpLv1LjBVPYpm+6IW/Ptjk412D6MjblBxwpw1im0k+AVNzaMxmVKap+ZG4Ik5oSTPdHuuhoocrxTn4uLdKrSYsV+MXTm8ZpofVdMWYqGHF6yNJrsqN9++jmtNdSafC6AO0bnl6xA0SX7w8yk1MpjcDhP17lCags/HroOvzGMsDX29+BflzWepiJHa2jxmrstSPDbFP+IzE9v958FfR2eiNBGc2NyATcnXZD071eiE50KjsZVSGYcxUiw2DbP3LbDdmXJgKQqbLtn+6fHCXgOQ0d4qzUZsVDPZTKorTees0bFsird0iake0WxfNBPMRMuFNeF/MDMIy728pdHBpnDWqL/d0iRtjT1FTYFvKh+OxsGQKPx6njob3PWMZoJZV2lN4qdWeccum/pZz9hDp6NMTTTbdLeAiv/PBC+E1rADa6zAYItyGZpum907L0LzV9DsD47UZGuMXtFUsB0FJiejHsIKjSo6+2nG2GuD6+7Xscrhs97hYfwyMwn/oH6rGhjoDwuqnqIZw9ax6unCYyXZeL2sEK2DljuA5uPoglejY83e38UbVj8fXNDVjmdz7yhuODjbOWDzrECqLUfD08E2A6rRsLrg+9xubZLetM1e78q2wchlOhUa2Eb578+Yg3B39behTjR0I/g+rFqU1NyIxJYG6a4Otumti4SzL9PRYCdtl2FFkGiPqdLrXGPoo6U27PGI7gQLLIu46Y5zhGDOEYI5RwjmHCGYc4RgzhGCOUcI5hwhmHOEYM4RgjlHCOYcIZhzhGDOEYI5RwjmHCGYc4RgzhGCOec/4yLB4u9CUiEAAAAASUVORK5CYII=";var ht=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,ft=(n,e,t,r)=>{for(var o=r>1?void 0:r?bt(e,t):e,i=n.length-1,d;i>=0;i--)(d=n[i])&&(o=(r?d(e,t,o):d(o))||o);return r&&o&&ht(e,t,o),o};let y=class extends m{constructor(){super(...arguments);s(this,"demoCode",j);s(this,"pretzelIcon",gt);s(this,"remainingSecs",10);s(this,"bannerClosed",!1)}mounted(){setInterval(()=>{this.remainingSecs--,this.remainingSecs<0&&(this.remainingSecs=10)},1e3)}get secs(){return this.remainingSecs<10?`0${this.remainingSecs}`:`${this.remainingSecs}`}test(){console.log("test")}};y=ft([v({components:{BannerDiscord:V,BannerIntroduction:W,BannerMarketing:nt,BannerSale:dt,Button:x,DemoSection:M,Notice:mt}})],y);var yt=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h1",[n._v("Banners")]),t("div",{staticClass:"section"},[t("h2",[n._v("Marketing Banner")]),t("DemoSection",{attrs:{title:"Marketing Banner",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[t("banner-marketing",{attrs:{"bg-image":`
              https://cdn.streamlabs.com/static/imgs/pretzel_dashboard_banner_bg.png
            `,"bg-image-night":`
              http://cdn.backgroundhost.com/backgrounds/subtlepatterns/cartographer.png
            `,"icon-name":"themes",label:"Introducing Streamlabs OBS",title:"Largest library of free themes in the world.",desc:`
              To access over 700+ themes for free, download Streamlabs OBS.
            `,"link-desc":"Win 7+  245.8 MB",onToggle:n.test}},[t("Button",{attrs:{slot:"link",type:"a",variation:"action",size:"standard",href:"#",title:"Download",icon:"overview"},slot:"link"})],1)]},proxy:!0}])}),t("banner-marketing",{attrs:{"bg-image":`
          https://cdn.streamlabs.com/static/imgs/pretzel_dashboard_banner_bg.png
        `,"icon-image":n.pretzelIcon,label:"New Streamlabs OBS App",title:"Introducing Pretzel Rocks Music Player",desc:`
          Stream-safe music for broadcasters with an ever-growing catalog of music. Currently 5k+ tracks.
        `,"link-desc":"$4.99/mo","banner-closed":n.bannerClosed}},[t("Button",{attrs:{slot:"link",type:"a",variation:"action",size:"standard",href:"#",title:"Try It Now"},slot:"link"})],1),n._m(0)],1),t("div",{staticClass:"section"},[t("h2",[n._v("Sale Banner")]),t("DemoSection",{attrs:{title:"Sale Banner",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[t("banner-sale",{attrs:{title:"Flash Sale! 25% off everything!",desc:"All items are automatically discounted.",days:"00",hours:"00",minutes:"00",seconds:n.secs,"time-desc":"Until flash sale ends. Hurry!"}})]},proxy:!0}])}),n._m(1)],1),t("div",{staticClass:"section"},[t("h2",[n._v("Notice Banner")]),t("DemoSection",{attrs:{title:"Notice Banner",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[t("Notice",{attrs:{title:`
              Join affiliates and earn $1 for each Streamlabs OBS referral
            `,desc:`
              Share your unique referral link with friends and get paid directly into your PayPal each month.
            `,icon:"information"}},[t("Button",{attrs:{slot:"button",type:"button",size:"fixed-width",variation:"action",title:"Join"},slot:"button"})],1)]},proxy:!0}])}),t("br"),t("br"),t("Notice",{attrs:{variation:"warning",title:"Your donation link has expired",desc:"Copy your new donation link and replace all instances containing twitchalerts.com."}},[t("Button",{attrs:{slot:"button",type:"button",size:"fixed-width",variation:"default",title:"Copy Link"},slot:"button"})],1),n._m(2)],1),t("div",{staticClass:"section"},[t("h2",[n._v("Discord Banner")]),t("DemoSection",{attrs:{title:"Discord Banner",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[t("BannerDiscord")]},proxy:!0}])}),n._m(3)],1),t("div",{staticClass:"section"},[t("h2",[n._v("Introduction Banner")]),t("DemoSection",{attrs:{title:"Introduction Banner",code:n.demoCode},scopedSlots:n._u([{key:"components",fn:function(){return[t("BannerIntroduction",{attrs:{bgColor:"#5e3bec"},scopedSlots:n._u([{key:"title",fn:function(){return[n._v("Introducing"),t("span",{staticClass:"banner-introduction-title"},[n._v("Prime Alert Box Sounds")])]},proxy:!0},{key:"description",fn:function(){return[n._v("Modern, hype sounds you can add to your live alerts. All included with Prime.")]},proxy:!0}])},[t("img",{staticClass:"banner-introduction-bgImage",attrs:{slot:"bgImage",src:"https://cdn.streamlabs.com/static/alert-box-sounds-banner-bg.png",alt:""},slot:"bgImage"}),t("Button",{attrs:{slot:"button",title:"Browse Sounds",bgColor:"#000",textColor:"#fff"},slot:"button"})],1)]},proxy:!0}])}),n._m(4)],1)])},Bt=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[n._v("Prop")]),t("th",[n._v("Type")]),t("th",[n._v("Required")]),t("th",[n._v("Default")]),t("th",[n._v("Description")])])]),t("tbody",[t("tr",[t("td",[n._v("bgImage")]),t("td",[n._v("string")]),t("td",[n._v("true")]),t("td",[n._v("null")]),t("td",[n._v("Background image that will display in day mode.")])]),t("tr",[t("td",[n._v("bgImageNight")]),t("td",[n._v("string")]),t("td",[n._v("false")]),t("td",[n._v("null")]),t("td",[n._v("Background image that will display in night mode.")])]),t("tr",[t("td",[n._v("label")]),t("td",[n._v("string")]),t("td",[n._v("true")]),t("td",[n._v("null")]),t("td",[n._v("Label text in the upper left of the banner.")])]),t("tr",[t("td",[n._v("iconImage")]),t("td",[n._v("string")]),t("td",[n._v("false")]),t("td",[n._v("null")]),t("td",[n._v(" Icon image next to title. Use a url path. If using iconName - do not use iconImg. We will improve functionality in near future. ")])]),t("tr",[t("td",[n._v("iconName")]),t("td",[n._v("string")]),t("td",[n._v("false")]),t("td",[n._v("null")]),t("td",[n._v(" Icon next to title. Use icon name from icon list. If using iconImg - do not use iconName. We will improve functionality in near future. ")])]),t("tr",[t("td",[n._v("title")]),t("td",[n._v("string")]),t("td",[n._v("true")]),t("td",[n._v("null")]),t("td",[n._v("Main banner title.")])]),t("tr",[t("td",[n._v("desc")]),t("td",[n._v("string")]),t("td",[n._v("true")]),t("td",[n._v("null")]),t("td",[n._v("Description text below banner title.")])]),t("tr",[t("td",[n._v("linkDesc")]),t("td",[n._v("string")]),t("td",[n._v("false")]),t("td",[n._v("null")]),t("td",[n._v("Description text below link.")])]),t("tr",[t("td",[n._v("bannerClosed")]),t("td",[n._v("boolean")]),t("td",[n._v("false")]),t("td",[n._v("false")]),t("td",[n._v("Default state the banner is. Open by default.")])]),t("tr",[t("td",[n._v("onToggle")]),t("td",[n._v("function")]),t("td",[n._v("null")]),t("td",[n._v("false")]),t("td",[n._v("Function which is called when you toggle the icon close.")])])])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[n._v("Prop")]),t("th",[n._v("Type")]),t("th",[n._v("Required")]),t("th",[n._v("Default")]),t("th",[n._v("Description")])])]),t("tbody",[t("tr",[t("td",[n._v("title")]),t("td",[n._v("string")]),t("td",[n._v("true")]),t("td",[n._v("null")]),t("td",[n._v("Banner main title.")])]),t("tr",[t("td",[n._v("desc")]),t("td",[n._v("string")]),t("td",[n._v("true")]),t("td",[n._v("null")]),t("td",[n._v("Banner description text below main title.")])]),t("tr",[t("td",[n._v("days")]),t("td",[n._v("string")]),t("td",[n._v("true")]),t("td",[n._v('"00"')]),t("td",[n._v("Days remaining value for countdown timer")])]),t("tr",[t("td",[n._v("hours")]),t("td",[n._v("string")]),t("td",[n._v("true")]),t("td",[n._v('"00"')]),t("td",[n._v("Hours remaining value for countdown timer")])]),t("tr",[t("td",[n._v("minutes")]),t("td",[n._v("string")]),t("td",[n._v("true")]),t("td",[n._v('"00"')]),t("td",[n._v("Minutes remaining value for countdown timer")])]),t("tr",[t("td",[n._v("seconds")]),t("td",[n._v("string")]),t("td",[n._v("true")]),t("td",[n._v('"00"')]),t("td",[n._v("Seconds remaining value for countdown timer")])]),t("tr",[t("td",[n._v("timeDesc")]),t("td",[n._v("string")]),t("td",[n._v("false")]),t("td",[n._v("null")]),t("td",[n._v("Description text below countdown timer.")])]),t("tr",[t("td",[n._v("borderColor")]),t("td",[n._v("string")]),t("td",[n._v("false")]),t("td",[n._v('"rgba(248, 86, 64, 0.33)"')]),t("td",[n._v("Banner border color.")])]),t("tr",[t("td",[n._v("backgroundColor")]),t("td",[n._v("boolean")]),t("td",[n._v("false")]),t("td",[n._v('"rgba(248, 86, 64, 0.08)"')]),t("td",[n._v("Banner background color.")])])])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[n._v("Prop")]),t("th",[n._v("Type")]),t("th",[n._v("Required")]),t("th",[n._v("Default")]),t("th",[n._v("Description")])])]),t("tbody",[t("tr",[t("td",[n._v("variation")]),t("td",[n._v("string")]),t("td",[n._v("true")]),t("td",[n._v("default")]),t("td",[n._v(' Variation style that will be displayed. Options are "default" and "warning". ')])]),t("tr",[t("td",[n._v("title")]),t("td",[n._v("string")]),t("td",[n._v("true")]),t("td",[n._v("null")]),t("td",[n._v("Banner title")])]),t("tr",[t("td",[n._v("desc")]),t("td",[n._v("string")]),t("td",[n._v("true")]),t("td",[n._v("null")]),t("td",[n._v("Description text below banner title")])]),t("tr",[t("td",[n._v("icon")]),t("td",[n._v("string")]),t("td",[n._v("true")]),t("td",[n._v("null")]),t("td",[n._v(" Icon next to title and in background. Will override selected variation icon. Use icon name from icon list. ")])])])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[n._v("Prop")]),t("th",[n._v("Type")]),t("th",[n._v("Default")]),t("th",[n._v("Description")])])]),t("tbody",[t("tr",[t("td",[n._v("title")]),t("td",[n._v("string")]),t("td",[n._v(" Join the Streamlabs OBS Discussion on <span>Discord</span> ")]),t("td",[n._v(" Set the title of the banner. You can wrap text in "),t("code",[n._v("<span>")]),n._v(" tags to give them medium font weight. ")])])])])},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("table",{staticClass:"docs-table"},[t("thead",[t("tr",[t("th",[n._v("Prop")]),t("th",[n._v("Type")]),t("th",[n._v("Default")]),t("th",[n._v("Description")])])]),t("tbody",[t("tr",[t("td",[n._v("bgColor")]),t("td",[n._v("string")]),t("td",[n._v("Null")]),t("td",[n._v("Set the background color of the banner.")])])])])}];const I={};var Ct=g(y,yt,Bt,!1,wt,"3076c3fc",null,null);function wt(n){for(let e in I)this[e]=I[e]}const zt=function(){return Ct.exports}();export{zt as default};
//# sourceMappingURL=Banners-75e2a9b6.js.map
