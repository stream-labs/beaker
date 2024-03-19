var b=Object.defineProperty;var y=(s,e,t)=>e in s?b(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var n=(s,e,t)=>(y(s,typeof e!="symbol"?e+"":e,t),t);import{W as u,C as d,P as h,V as p,n as g}from"./index.4fb8a6cb.js";import{A as f}from"./Accordion.09c82396.js";import{D as w}from"./DemoSection.79ee11c0.js";import{F as v}from"./fuse.esm.249bd5bb.js";var S=Object.defineProperty,k=Object.getOwnPropertyDescriptor,l=(s,e,t,a)=>{for(var i=a>1?void 0:a?k(e,t):e,r=s.length-1,c;r>=0;r--)(c=s[r])&&(i=(a?c(e,t,i):c(i))||i);return a&&i&&S(e,t,i),i};let o=class extends p{constructor(){super(...arguments);n(this,"$refs");n(this,"result",[]);n(this,"isOpen",!1);n(this,"phaseOne",!1);n(this,"phaseTwo",!1);n(this,"resultLimit",7);n(this,"fuse",null);n(this,"value","");n(this,"quickLinkLoc",[]);n(this,"keyEvents",[]);n(this,"currentResult",0);n(this,"jsonSearch");n(this,"searchData",this.jsonSearch);n(this,"search");n(this,"eventName");n(this,"inputChangeEventName");n(this,"quickLinks")}get suggestedLinks(){return this.quickLinks.filter(e=>{let t=this.searchData.find(i=>i.name===e.item.name),a=this.searchData.indexOf(t);return this.quickLinkLoc.push(a),a})}get options(){return{isCaseSensitive:!1,includeMatches:!0,includeScore:!0,findAllMatches:!0,shouldSort:!0,threshold:.3,location:0,distance:35,maxPatternLength:16,minMatchCharLength:1,keys:[{name:"keywords",weight:.3},{name:"title",weight:.7}]}}get noResults(){return this.result.length===0&&this.value!=""}get limitedResult(){return this.resultLimit?this.result.slice(0,this.resultLimit):this.result}get calcHeight(){return this.phaseOne===!1?"height: 40px;":this.result.length>=1&&this.result.length<=7&&this.phaseOne==!0?"height: "+(parseInt(this.result.length)*32+47)+"px;":"height: 271px;"}watchSearchData(){this.fuse.searchData=this.searchData,this.fuseSearch()}watchSearch(){this.value=this.search}watchValue(){this.$parent.$emit(this.inputChangeEventName,this.value),this.$emit(this.inputChangeEventName,this.value),this.fuseSearch()}watchResult(e,t){(this.noResults||this.value==""||e.length!=t.length)&&(this.currentResult=0),this.$emit(this.eventName,this.result),this.$parent.$emit(this.eventName,this.result)}keyEvent(e){e.keyCode===38&&this.currentResult>0&&this.currentResult--,this.result.length===0?e.keyCode===40&&this.currentResult<5&&this.currentResult++:e.keyCode===40&&this.currentResult<6&&this.currentResult++,e.keyCode===13&&this.phaseOne&&(this.result<=0?(this.trackEvent(this.currentResult),window.location.href=this.searchData[this.quickLinkLoc[this.currentResult]].route,this.blurSearch()):(this.trackEvent(this.currentResult),window.location.href=this.limitedResult[this.currentResult].item.route,this.blurSearch())),e.keyCode===27&&this.phaseOne&&this.blurSearch()}trackEvent(e){this.$emit("trackSearchNav",e)}playClosingSequence(){this.phaseTwo&&(setTimeout(()=>{this.phaseTwo=!this.phaseTwo},100),setTimeout(()=>{this.phaseOne=!this.phaseOne},200))}playOpeningSequence(){this.phaseOne||(this.phaseOne=!this.phaseOne,setTimeout(()=>{this.phaseTwo=!this.phaseTwo},100))}initFuse(){this.fuse=new v(this.searchData,this.options),this.search&&(this.value=this.search)}blurSearch(){this.value="",this.$refs.search_input.blur(),this.currentResult=0}fuseSearch(){this.value.trim()===""?this.result=[]:this.result=this.fuse.search(this.value.trim())}mounted(){this.searchData=this.jsonSearch,this.initFuse()}};l([h()],o.prototype,"jsonSearch",2);l([h({default:""})],o.prototype,"search",2);l([h({default:"fuseResultsUpdated"})],o.prototype,"eventName",2);l([h({default:"fuseInputChanged"})],o.prototype,"inputChangeEventName",2);l([h()],o.prototype,"quickLinks",2);l([u("searchData")],o.prototype,"watchSearchData",1);l([u("search")],o.prototype,"watchSearch",1);l([u("value")],o.prototype,"watchValue",1);l([u("result")],o.prototype,"watchResult",1);o=l([d({})],o);var _=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"s-sitesearch",class:[{"s-sitesearch--is-open":e.isOpen},{"s-sitesearch--phase-one":e.phaseOne},{"s-sitesearch--phase-two":e.phaseTwo}],style:e.calcHeight},[t("div",{staticClass:"s-sitesearch--searchbar__cont"},[e._m(0),t("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],ref:"search_input",staticClass:"s-sitesearch__input",attrs:{type:"text",placeholder:"Search Streamlabs..."},domProps:{value:e.value},on:{focus:function(a){return a.stopPropagation(),a.preventDefault(),e.playOpeningSequence.apply(null,arguments)},blur:function(a){return a.stopPropagation(),a.preventDefault(),e.playClosingSequence.apply(null,arguments)},keyup:function(a){return a.stopPropagation(),a.preventDefault(),e.keyEvent.apply(null,arguments)},input:function(a){a.target.composing||(e.value=a.target.value)}}})]),t("transition-group",{attrs:{name:"s-sitesearch--fadeY"}},[e.phaseTwo&&e.limitedResult.length<=0?t("div",{key:e.limitedResult.length,staticClass:"s-sitesearch-results__cont"},[t("div",{staticClass:"s-sitesearch-quicklinks"},[e._v("Quick Links")]),e._l(e.suggestedLinks,function(a,i){return t("a",{key:a.item.name,staticClass:"s-sitesearch-results",class:{"s-active-result":e.currentResult===i},attrs:{href:e.searchData[e.quickLinkLoc[i]].route},on:{mouseover:function(r){e.currentResult=i},mousedown:function(r){return e.trackEvent(e.searchData[e.quickLinkLoc[i]].route)},mouseup:e.blurSearch}},[t("div",{staticClass:"s-sitesearch__result--image"},[t("i",{staticClass:"s-sitesearch__result--image",class:e.searchData[e.quickLinkLoc[i]].image})]),t("div",{staticClass:"s-sitesearch__result--title"},[e._v(" "+e._s(e.searchData[e.quickLinkLoc[i]].title)+" ")])])})],2):e._e(),e.phaseTwo&&e.limitedResult.length>=1?t("div",{key:e.limitedResult.length,staticClass:"s-sitesearch-results__cont"},[t("transition-group",{attrs:{name:"s-sitesearch--fadeX"}},e._l(e.limitedResult,function(a,i){return t("a",{key:a.item.name,staticClass:"s-sitesearch-results",class:{"s-active-result":e.currentResult===i},attrs:{href:a.item.route},on:{mouseover:function(r){e.currentResult=i},mousedown:function(r){return e.trackEvent(e.searchData[e.quickLinkLoc[i]].route)},mouseup:e.blurSearch}},[t("div",{staticClass:"s-sitesearch__result--image"},[t("i",{staticClass:"s-sitesearch__result--image",class:a.item.image})]),t("div",{staticClass:"s-sitesearch__result--title"},[e._v(" "+e._s(a.item.title)+" ")])])}),0)],1):e._e()])],1)},C=[function(){var s=this,e=s._self._c;return s._self._setupProxy,e("div",{staticClass:"s-sitesearch--icon"},[e("i",{staticClass:"icon-search"})])}],D=g(o,_,C,!1,null,null,null,null);const x=D.exports,q=`<template>
  <div>
    <div class="section">
      <h1>Site Search</h1>
      <p>
        This site search is live on core. It can be used with other json files,
        JSON structure example below.
      </p>

      <pre><code>import { SiteSearch } from &quot;streamlabs-beaker&quot;;

components: {
  SiteSearch
}</code></pre>

      <Accordion title="JSON Site Search Structure">
        <div slot="content">
          <p>
            <code>keymatches</code> and <code>howto</code> are not used right
            now, but will be used in the future.
          </p>
          <div class="section">
            <pre><code>{
  "data": [
    {
      "name": "contact",
      "title": "Contact Us",
      "route": "/contact",
      "keywords": [
        "contact",
        "business",
        "inquiries",
        "social",
        "media"
      ],
      "image": "icon-phone-case"
    },
  ]
}</code></pre>
          </div>

          <p>The JSON data and component can be imported normally</p>
          <pre><code>import * as searchData from &quot;./../location&quot;;

export default {
  data() {
    return {
      jsonSearch = searchData.data
    };
  }
}</code></pre>
        </div>
      </Accordion>
    </div>

    <div class="section">
      <h2>Seach Demo</h2>
      <DemoSection title="Default" :code="demoCode">
        <template #components>
          <SiteSearch
            :json-search="jsonSearch"
            :quick-links="[
              { item: { name: 'donationsettings' } },
              { item: { name: 'd-alertbox' } },
              { item: { name: 'creatorsites' } },
              { item: { name: 'merchsetup' } },
              { item: { name: 'd-chatbox' } },
              { item: { name: 'streamlabs-obs' } }
            ]"
          />
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
          <td>jsonSearch</td>
          <td>String</td>
          <td>null</td>
          <td>Name of the imported json (must be imported in parent)</td>
        </tr>
        <tr>
          <td>quickLinks</td>
          <td>Array</td>
          <td>null</td>
          <td>
            max of 6 links, each must match name of entry in search json
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import DemoSection from "./../components/DemoSection.vue";
import SiteSearch from "./../components/SiteSearch.vue";
import SiteSearchDemoCode from "./SiteSearchDemo.vue?raw";

import searchData from "./../components/sitesearchdata.json";

@Component({
  components: {
    Accordion,
    DemoSection,
    SiteSearch
  }
})
export default class SiteSearchDemo extends Vue {
  demoCode = SiteSearchDemoCode;
  jsonSearch = (searchData as any).data;
}
<\/script>
`,L=[{name:"contact",title:"Contact Us",route:"/contact",keywords:["contact information","business inquiries","social media"],image:"icon-phone-case"},{name:"dashboard",title:"Your Dashboard",route:"dashboard#/stats",keywords:["dashboard","your stats","recent events","stream stats"],image:"icon-link"},{name:"faq",title:"FAQ - Frequently Asked Questions",route:"/faq",keywords:["faq","frequently asked questions","answers"],image:"icon-question"},{name:"allstars",title:"Streamlabs All Stars",route:"/allstars",keywords:["all stars","loyalty program","rewards","giveaways","sponsorships","partnerships"],image:"icon-loyalty"},{name:"d-allstars",title:"Streamlabs All Star Dashboard",route:"/dashboard#/streamlabs-rewards",keywords:["allstars","all-stars","loyalty program","rewards","giveaways","sponsorships","partnerships","streamlabs rewards"],image:"icon-loyalty"},{name:"careers",title:"Careers at Streamlabs",route:"/careers",keywords:["careers","job opportunities"],image:"icon-link"},{name:"terms",title:"Terms of Service",route:"/terms",keywords:["terms of service","legal"],image:"icon-link"},{name:"privacy",title:"Privacy Policy",route:"/privacy",keywords:["privacy policies"],image:"icon-link"},{name:"mobileapp",title:"Mobile App",route:"/mobileapp",keywords:["mobile app store","apple store","android","google play","phone","tablet","cell","modular"],image:"icon-phone-case"},{name:"changelog",title:"Streamlabs Changelog",route:"/changelog",keywords:["change log","bug fixes","updates","improvement","version"],image:"icon-notifications"},{name:"about",title:"About Streamlabs",route:"/about",keywords:["about streamlabs","information","who"],image:"icon-information"},{name:"streamlabs-obs",title:"Streamlabs OBS",route:"/streamlabs-obs",keywords:["streamlabs OBS","slobs","software","open broadcase software","stream to youtube","stream to twitch","slobs","recording","record video","stream","obs live","xsplit","caffeine"],image:"icon-windows"},{name:"affiliates",title:"Affiliate Program",route:"/affiliates",keywords:["affiliate program","reward program"],image:"icon-team-2"},{name:"d-streamlabels",title:"Stream Labels",route:"/dashboard#/streamlabels",keywords:["stream labels","labels"],image:"icon-link"},{name:"d-widgets",title:"Widget Gallery",route:"/dashboard#/widgets",keywords:["widget gallery","alert box","show donations on screen","goals","spin wheel","stream elements","muxy","tipeeestream","tips"],image:"icon-link"},{name:"d-alertbox",title:"Alert Box Settings",route:"/dashboard#/alertbox",keywords:["alert box","alert","tips","donations","bits","superchats","follows","subs","membrs","subscriptions"],image:"icon-desktop"},{name:"d-tipjar",title:"Tip Jar Settings",route:"/dashboard#/jar",keywords:["tip jar","alert","tips","donations","bits","superchats","follows","subs","membrs","subscriptions"],image:"icon-jar"},{name:"d-donationticker",title:"Donation Ticker Settings",route:"/dashboard#/donationticker",keywords:["donation ticker","alert","tips","donations","bits","superchats","follows","subs","membrs","subscriptions"],image:"icon-donation-ticker"},{name:"d-spinwheel",title:"Spin Wheel Settings",route:"/dashboard#/wheel",keywords:["spin wheel","spin to win"],image:"icon-link"},{name:"d-streamboss",title:"Stream Boss Settings",route:"/dashboard#/streamboss",keywords:["stream boss","bit boss","donation fight"],image:"icon-link"},{name:"d-sponsorbanner",title:"Sponsor Banner Settings",route:"/dashboard#/sponsorbanner",keywords:["rotating sponsor banner"],image:"icon-link"},{name:"d-mediashare",title:"Media Share Settings",route:"/dashboard#/mediashare",keywords:["media share","play youtube videos on stream"],image:"icon-media-share-2"},{name:"d-donationgoal",title:"Donation Goal Settings",route:"/dashboard#/donationgoal",keywords:["donation goal"],image:"icon-link"},{name:"d-followergoal",title:"Follower Goal Settings",route:"dashboard#/followergoal",keywords:["follower goal"],image:"icon-link"},{name:"d-subscriptiongoal",title:"Subscription Goal Settings",route:"/dashboard#/subgoal",keywords:["subscription goal"],image:"icon-link"},{name:"d-bitgoal",title:"Bit Goal Settings",route:"/dashboard#/bitgoal",keywords:["bit goal"],image:"icon-link"},{name:"d-tiltifygoal",title:"Tiltify Donation Goal Settings",route:"/dashboard#/tiltifydonationgoal",keywords:["tilify goal","charity goal"],image:"icon-link"},{name:"d-chatbox",title:"Chat Box Widget Settings",route:"/dashboard#/chatbox",keywords:["chat box","irc"],image:"icon-chat-box"},{name:"d-emote-wall",title:"Emote Wall Widget Settings",route:"/dashboard#/widgets/emote-wall",keywords:["emote wall","kappagenn","pogchamp"],image:"fas fa-laugh-squint"},{name:"merchsetup",title:"Merch Store",route:"dashboard#/merchadmin",keywords:["merch store","t-shirts","merchandise"],image:"icon-upperwear"},{name:"d-eventlist",title:"Event List Settings ",route:"/dashboard#/eventlist",keywords:["event list","recent events"],image:"icon-event-list"},{name:"d-viewercount",title:"Viewer Counter Settings",route:"/dashboard#/viewercount",keywords:["viewer count","show twitch viewers","show facebook viewers","show youtube viewers"],image:"icon-view"},{name:"d-credits",title:"End Credits Settings ",route:"/dashboard#/credits",keywords:["end credits"],image:"icon-link"},{name:"pricing",title:"Streamlabs Pricing",route:"/pricing",keywords:["pricing policy"],image:"icon-earnings"},{name:"blog",title:"Streamlabs Blog",route:"/blog",keywords:["streamlabs news","whats new","stream elements","muxy"],image:"icon-link"},{name:"library",title:"Themes & Overlays",route:"/library",keywords:["stream overlays","collection","overlay library","nerd or die","vbi","visuals by impulse","graphics","branding","themes"],image:"icon-link"},{name:"recentevents",title:"Your Recent Events",route:"/dashboard#/twitch",keywords:["recent events","twitch"],image:"icon-live-dashboard"},{name:"d-chatbot",title:"Chatbot Dashboard (Legacy)",route:"/chatbot",keywords:["chatbot","cloudbot","ankhbot","moobot","nightbot"],image:"icon-community"},{name:"cloudbot",title:"Cloudbot",route:"/dashboard#/cloudbot",keywords:["cloudbot","chatbot","moderator","stream elements","anhkbot","nightbot","moobot","streambot","streamlabs","rutonychat","irc","scripts","commands","polls","voting","betting","loyalty","queue","quotes","timers","modules","mods","mod tools","minigame","heist","gamble","chat","bot"],image:"icon-cloud"},{name:"creatorsites",title:"Creator Sites",route:"/dashboard#/editor",keywords:["wordpress","websites","stream","streampress","wix","domain","godaddy","your web page","my site"],image:"icon-creator-site"},{name:"donationsettings",title:"Donation Settings",route:"/dashboard#/settings/donation-settings",keywords:["donation settings","dashboard","configuration","paypal","skrill","unitpay","cc","credit card"],image:"icon-settings"},{name:"accountsettings",title:"Account Settings",route:"/dashboard#/settings/account-settings",keywords:["account settings","cancel","connect","dashboard","settings","configuration","import","email","preferences"],image:"icon-settings"},{name:"sharedaccess",title:"Shared Access",route:"/dashboard#/settings/shared-access",keywords:["shared access","account settings","moderator","team","leader","boss","manager","configuration"],image:"icon-settings"},{name:"integrations",title:"Platform Integrations",route:"/dashboard#/settings/integrations",keywords:["platform integrations","patreon","extra life","tiltify","razer chroma","discord","tipeeestream","treatstream","charity streaming","justgiving","charity","partnership","connections"],image:"icon-settings"},{name:"apisettings",title:"API settings",route:"/dashboard#/settings/api-settings",keywords:["api","developer","application","integration"],image:"icon-settings"},{name:"d-affiliates",title:"Affiliates Dashboard",route:"/dashboard#/affiliates",keywords:["affiliates","affiliate program"],image:"icon-earnings"},{name:"d-donations",title:"Donation History",route:"/dashboard#/donations",keywords:["donation history","donation list","my donations"],image:"icon-earnings"},{name:"d-subscribers",title:"Subscriber History",route:"/dashboard#/subscribers",keywords:["subscriber list","my subscribers","subscriber history","subscriptions"],image:"icon-loyalty"},{name:"d-widgetthemes",title:"Your Widget Themes",route:"/dashboard#/widgetthemes",keywords:["widget themes","overlays"],image:"icon-widgets"},{name:"loyaltyextension",title:"Streamlabs Loyalty Extension",route:"/dashboard#/loyalty",keywords:["loyalty extension","twitch"],image:"icon-loyalty"},{name:"howto",title:"Streamlabs Help Center",route:"https://howto.streamlabs.com/",keywords:["help","support","learn","streamlabs","questions","answers"],image:"icon-question"},{name:"charity",title:"Charity Campaigns",route:"/dashboard#/charity",keywords:["giving","charity","charities"],image:"fas fa-heart"},{name:"multistream",title:"Multistream",route:"/dashboard#/restream/settings",keywords:["restream.io","multistream","stream to multiple platforms at once"],image:"fas fa-globe"},{name:"university",title:"University",route:"/dashboard#/university",keywords:["universtiy","learning","help","tutorials","how to grow"],image:"fas fa-graduation-cap"},{name:"app-store",title:"Apps Store",route:"https://platform.streamlabs.com/app-store",keywords:["slobs app store","streamlabs obs app store","add-ons","nerd or die","install","platform","monstercat"],image:"icon-store"},{name:"panels",title:"Panels",route:"/dashboard#/prime/panels",keywords:["panel maker","twitch panels"],image:"icon-one-column"},{name:"content-hub",title:"Content Hub",route:"https://streamlabs.com/content-hub",keywords:["content hub","hub","resources","learn","how to","tutorials"],image:"icon-education"},{name:"extensions",title:"Twitch Extensions",route:"/dashboard#/extensions",keywords:["twitch extensions","leaderboard","loyalty","panel"],image:"icon-twitch"}],O={data:L};var j=Object.defineProperty,R=Object.getOwnPropertyDescriptor,P=(s,e,t,a)=>{for(var i=a>1?void 0:a?R(e,t):e,r=s.length-1,c;r>=0;r--)(c=s[r])&&(i=(a?c(e,t,i):c(i))||i);return a&&i&&j(e,t,i),i};let m=class extends p{constructor(){super(...arguments);n(this,"demoCode",q);n(this,"jsonSearch",O.data)}};m=P([d({components:{Accordion:f,DemoSection:w,SiteSearch:x}})],m);var T=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",[t("div",{staticClass:"section"},[t("h1",[e._v("Site Search")]),t("p",[e._v(" This site search is live on core. It can be used with other json files, JSON structure example below. ")]),e._m(0),t("Accordion",{attrs:{title:"JSON Site Search Structure"}},[t("div",{attrs:{slot:"content"},slot:"content"},[t("p",[t("code",[e._v("keymatches")]),e._v(" and "),t("code",[e._v("howto")]),e._v(" are not used right now, but will be used in the future. ")]),t("div",{staticClass:"section"},[t("pre",[t("code",[e._v(`{
  "data": [
    {
      "name": "contact",
      "title": "Contact Us",
      "route": "/contact",
      "keywords": [
        "contact",
        "business",
        "inquiries",
        "social",
        "media"
      ],
      "image": "icon-phone-case"
    },
  ]
}`)])])]),t("p",[e._v("The JSON data and component can be imported normally")]),t("pre",[t("code",[e._v(`import * as searchData from "./../location";

export default {
  data() {
    return {
      jsonSearch = searchData.data
    };
  }
}`)])])])])],1),t("div",{staticClass:"section"},[t("h2",[e._v("Seach Demo")]),t("DemoSection",{attrs:{title:"Default",code:e.demoCode},scopedSlots:e._u([{key:"components",fn:function(){return[t("SiteSearch",{attrs:{"json-search":e.jsonSearch,"quick-links":[{item:{name:"donationsettings"}},{item:{name:"d-alertbox"}},{item:{name:"creatorsites"}},{item:{name:"merchsetup"}},{item:{name:"d-chatbox"}},{item:{name:"streamlabs-obs"}}]}})]},proxy:!0}])})],1),e._m(1)])},A=[function(){var s=this,e=s._self._c;return s._self._setupProxy,e("pre",[e("code",[s._v(`import { SiteSearch } from "streamlabs-beaker";

components: {
  SiteSearch
}`)])])},function(){var s=this,e=s._self._c;return s._self._setupProxy,e("table",{staticClass:"docs-table"},[e("thead",[e("tr",[e("th",[s._v("Props")]),e("th",[s._v("Type")]),e("th",[s._v("Default")]),e("th",[s._v("Description")])])]),e("tbody",[e("tr",[e("td",[s._v("jsonSearch")]),e("td",[s._v("String")]),e("td",[s._v("null")]),e("td",[s._v("Name of the imported json (must be imported in parent)")])]),e("tr",[e("td",[s._v("quickLinks")]),e("td",[s._v("Array")]),e("td",[s._v("null")]),e("td",[s._v(" max of 6 links, each must match name of entry in search json ")])])])])}],E=g(m,T,A,!1,null,null,null,null);const J=E.exports;export{J as default};
//# sourceMappingURL=SiteSearchDemo.c6bba48e.js.map
