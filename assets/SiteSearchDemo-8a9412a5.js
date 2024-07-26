var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { W as Watch, C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { A as Accordion } from "./Accordion-7aa9b24d.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import { F as Fuse } from "./fuse.esm-aec42c40.js";
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
let SiteSearch$1 = class SiteSearch extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "$refs");
    __publicField(this, "result", []);
    __publicField(this, "isOpen", false);
    __publicField(this, "phaseOne", false);
    __publicField(this, "phaseTwo", false);
    __publicField(this, "resultLimit", 7);
    __publicField(this, "fuse", null);
    __publicField(this, "value", "");
    __publicField(this, "keyEvents", []);
    __publicField(this, "currentResult", 0);
    __publicField(this, "jsonSearch");
    __publicField(this, "search");
    __publicField(this, "eventName");
    __publicField(this, "inputChangeEventName");
    __publicField(this, "quickLinks");
  }
  get suggestedLinks() {
    return this.quickLinks.reduce((acc, i) => {
      let jsonSearchIndex = this.jsonSearch.findIndex(
        (data2) => data2.name === i.item.name
      );
      if (jsonSearchIndex > -1) {
        acc.push({ ...i, jsonSearchIndex });
      }
      return acc;
    }, []);
  }
  get options() {
    let options = {
      isCaseSensitive: false,
      includeMatches: true,
      includeScore: true,
      findAllMatches: true,
      shouldSort: true,
      threshold: 0.3,
      location: 0,
      distance: 35,
      maxPatternLength: 16,
      minMatchCharLength: 1,
      keys: [
        {
          name: "keywords",
          weight: 0.3
        },
        {
          name: "title",
          weight: 0.7
        }
      ]
    };
    return options;
  }
  get noResults() {
    if (this.result.length === 0 && this.value != "") {
      return true;
    } else {
      return false;
    }
  }
  get limitedResult() {
    return this.resultLimit ? this.result.slice(0, this.resultLimit) : this.result;
  }
  get calcHeight() {
    if (this.phaseOne === false) {
      return "height: 40px;";
    }
    if (this.result.length >= 1 && this.result.length <= 7 && this.phaseOne == true) {
      let x = parseInt(this.result.length) * 32 + 47;
      return "height: " + x + "px;";
    } else {
      return "height: 271px;";
    }
  }
  watchJsonSearch() {
    this.fuse.searchData = this.jsonSearch;
    this.fuseSearch();
  }
  watchSearch() {
    this.value = this.search;
  }
  watchValue() {
    this.$parent.$emit(this.inputChangeEventName, this.value);
    this.$emit(this.inputChangeEventName, this.value);
    this.fuseSearch();
  }
  watchResult(val, oldVal) {
    if (this.noResults || this.value == "" || val.length != oldVal.length) {
      this.currentResult = 0;
    }
    this.$emit(this.eventName, this.result);
    this.$parent.$emit(this.eventName, this.result);
  }
  keyEvent(event) {
    if (event.keyCode === 38 && this.currentResult > 0) {
      this.currentResult--;
    }
    if (this.result.length === 0) {
      if (event.keyCode === 40 && this.currentResult < 5) {
        this.currentResult++;
      }
    } else {
      if (event.keyCode === 40 && this.currentResult < 6) {
        this.currentResult++;
      }
    }
    if (event.keyCode === 13 && this.phaseOne) {
      if (this.result <= 0) {
        this.trackEvent(this.currentResult);
        window.location.href = this.jsonSearch[this.suggestedLinks[this.currentResult].jsonSearchIndex].route;
        this.blurSearch();
      } else {
        this.trackEvent(this.currentResult);
        window.location.href = this.limitedResult[this.currentResult].item.route;
        this.blurSearch();
      }
    }
    if (event.keyCode === 27 && this.phaseOne) {
      this.blurSearch();
    }
  }
  trackEvent(result) {
    this.$emit("trackSearchNav", result);
  }
  playClosingSequence() {
    if (this.phaseTwo) {
      setTimeout(() => {
        this.phaseTwo = !this.phaseTwo;
      }, 100);
      setTimeout(() => {
        this.phaseOne = !this.phaseOne;
      }, 200);
    }
  }
  playOpeningSequence() {
    if (!this.phaseOne) {
      this.phaseOne = !this.phaseOne;
      setTimeout(() => {
        this.phaseTwo = !this.phaseTwo;
      }, 100);
    }
  }
  initFuse() {
    this.fuse = new Fuse(this.jsonSearch, this.options);
    if (this.search) {
      this.value = this.search;
    }
  }
  blurSearch() {
    this.value = "";
    this.$refs.search_input.blur();
    this.currentResult = 0;
  }
  fuseSearch() {
    if (this.value.trim() === "") {
      this.result = [];
    } else {
      this.result = this.fuse.search(this.value.trim());
    }
  }
  mounted() {
    this.initFuse();
  }
};
__decorateClass$1([
  Prop()
], SiteSearch$1.prototype, "jsonSearch", 2);
__decorateClass$1([
  Prop({ default: "" })
], SiteSearch$1.prototype, "search", 2);
__decorateClass$1([
  Prop({ default: "fuseResultsUpdated" })
], SiteSearch$1.prototype, "eventName", 2);
__decorateClass$1([
  Prop({ default: "fuseInputChanged" })
], SiteSearch$1.prototype, "inputChangeEventName", 2);
__decorateClass$1([
  Prop()
], SiteSearch$1.prototype, "quickLinks", 2);
__decorateClass$1([
  Watch("jsonSearch")
], SiteSearch$1.prototype, "watchJsonSearch", 1);
__decorateClass$1([
  Watch("search")
], SiteSearch$1.prototype, "watchSearch", 1);
__decorateClass$1([
  Watch("value")
], SiteSearch$1.prototype, "watchValue", 1);
__decorateClass$1([
  Watch("result")
], SiteSearch$1.prototype, "watchResult", 1);
SiteSearch$1 = __decorateClass$1([
  Component({})
], SiteSearch$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-sitesearch",
    class: [{
      "s-sitesearch--is-open": _vm.isOpen
    }, {
      "s-sitesearch--phase-one": _vm.phaseOne
    }, {
      "s-sitesearch--phase-two": _vm.phaseTwo
    }],
    style: _vm.calcHeight
  }, [_c("div", {
    staticClass: "s-sitesearch--searchbar__cont"
  }, [_vm._m(0), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.value,
      expression: "value"
    }],
    ref: "search_input",
    staticClass: "s-sitesearch__input",
    attrs: {
      "type": "text",
      "placeholder": "Search Streamlabs..."
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "focus": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.playOpeningSequence.apply(null, arguments);
      },
      "blur": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.playClosingSequence.apply(null, arguments);
      },
      "keyup": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        return _vm.keyEvent.apply(null, arguments);
      },
      "input": function($event) {
        if ($event.target.composing)
          return;
        _vm.value = $event.target.value;
      }
    }
  })]), _c("transition-group", {
    attrs: {
      "name": "s-sitesearch--fadeY"
    }
  }, [_vm.phaseTwo && _vm.limitedResult.length <= 0 ? _c("div", {
    key: _vm.limitedResult.length,
    staticClass: "s-sitesearch-results__cont"
  }, [_c("div", {
    staticClass: "s-sitesearch-quicklinks"
  }, [_vm._v("Quick Links")]), _vm._l(_vm.suggestedLinks, function(suggested, i) {
    return _c("a", {
      key: suggested.item.name,
      staticClass: "s-sitesearch-results",
      class: {
        "s-active-result": _vm.currentResult === i
      },
      attrs: {
        "href": _vm.jsonSearch[suggested.jsonSearchIndex].route
      },
      on: {
        "mouseover": function($event) {
          _vm.currentResult = i;
        },
        "mousedown": function($event) {
          return _vm.trackEvent(_vm.jsonSearch[suggested.jsonSearchIndex].route);
        },
        "mouseup": _vm.blurSearch
      }
    }, [_c("div", {
      staticClass: "s-sitesearch__result--image"
    }, [_c("i", {
      staticClass: "s-sitesearch__result--image",
      class: _vm.jsonSearch[suggested.jsonSearchIndex].image
    })]), _c("div", {
      staticClass: "s-sitesearch__result--title"
    }, [_vm._v(" " + _vm._s(_vm.jsonSearch[suggested.jsonSearchIndex].title) + " ")])]);
  })], 2) : _vm._e(), _vm.phaseTwo && _vm.limitedResult.length >= 1 ? _c("div", {
    key: _vm.limitedResult.length,
    staticClass: "s-sitesearch-results__cont"
  }, [_c("transition-group", {
    attrs: {
      "name": "s-sitesearch--fadeX"
    }
  }, _vm._l(_vm.limitedResult, function(searchResult, i) {
    return _c("a", {
      key: searchResult.item.name,
      staticClass: "s-sitesearch-results",
      class: {
        "s-active-result": _vm.currentResult === i
      },
      attrs: {
        "href": searchResult.item.route
      },
      on: {
        "mouseover": function($event) {
          _vm.currentResult = i;
        },
        "mousedown": function($event) {
          return _vm.trackEvent(_vm.jsonSearch[searchResult.refIndex].route);
        },
        "mouseup": _vm.blurSearch
      }
    }, [_c("div", {
      staticClass: "s-sitesearch__result--image"
    }, [_c("i", {
      staticClass: "s-sitesearch__result--image",
      class: searchResult.item.image
    })]), _c("div", {
      staticClass: "s-sitesearch__result--title"
    }, [_vm._v(" " + _vm._s(searchResult.item.title) + " ")])]);
  }), 0)], 1) : _vm._e()])], 1);
};
var staticRenderFns$1 = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-sitesearch--icon"
  }, [_c("i", {
    staticClass: "icon-search"
  })]);
}];
const SiteSearch_vue_vue_type_style_index_0_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  SiteSearch$1,
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
const SiteSearch2 = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
const SiteSearchDemoCode = `<template>
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
`;
const data = [
  {
    name: "contact",
    title: "Contact Us",
    route: "/contact",
    keywords: [
      "contact information",
      "business inquiries",
      "social media"
    ],
    image: "icon-phone-case"
  },
  {
    name: "dashboard",
    title: "Your Dashboard",
    route: "dashboard#/stats",
    keywords: [
      "dashboard",
      "your stats",
      "recent events",
      "stream stats"
    ],
    image: "icon-link"
  },
  {
    name: "faq",
    title: "FAQ - Frequently Asked Questions",
    route: "/faq",
    keywords: [
      "faq",
      "frequently asked questions",
      "answers"
    ],
    image: "icon-question"
  },
  {
    name: "allstars",
    title: "Streamlabs All Stars",
    route: "/allstars",
    keywords: [
      "all stars",
      "loyalty program",
      "rewards",
      "giveaways",
      "sponsorships",
      "partnerships"
    ],
    image: "icon-loyalty"
  },
  {
    name: "d-allstars",
    title: "Streamlabs All Star Dashboard",
    route: "/dashboard#/streamlabs-rewards",
    keywords: [
      "allstars",
      "all-stars",
      "loyalty program",
      "rewards",
      "giveaways",
      "sponsorships",
      "partnerships",
      "streamlabs rewards"
    ],
    image: "icon-loyalty"
  },
  {
    name: "careers",
    title: "Careers at Streamlabs",
    route: "/careers",
    keywords: [
      "careers",
      "job opportunities"
    ],
    image: "icon-link"
  },
  {
    name: "terms",
    title: "Terms of Service",
    route: "/terms",
    keywords: [
      "terms of service",
      "legal"
    ],
    image: "icon-link"
  },
  {
    name: "privacy",
    title: "Privacy Policy",
    route: "/privacy",
    keywords: [
      "privacy policies"
    ],
    image: "icon-link"
  },
  {
    name: "mobileapp",
    title: "Mobile App",
    route: "/mobileapp",
    keywords: [
      "mobile app store",
      "apple store",
      "android",
      "google play",
      "phone",
      "tablet",
      "cell",
      "modular"
    ],
    image: "icon-phone-case"
  },
  {
    name: "changelog",
    title: "Streamlabs Changelog",
    route: "/changelog",
    keywords: [
      "change log",
      "bug fixes",
      "updates",
      "improvement",
      "version"
    ],
    image: "icon-notifications"
  },
  {
    name: "about",
    title: "About Streamlabs",
    route: "/about",
    keywords: [
      "about streamlabs",
      "information",
      "who"
    ],
    image: "icon-information"
  },
  {
    name: "streamlabs-obs",
    title: "Streamlabs OBS",
    route: "/streamlabs-obs",
    keywords: [
      "streamlabs OBS",
      "slobs",
      "software",
      "open broadcase software",
      "stream to youtube",
      "stream to twitch",
      "slobs",
      "recording",
      "record video",
      "stream",
      "obs live",
      "xsplit",
      "caffeine"
    ],
    image: "icon-windows"
  },
  {
    name: "affiliates",
    title: "Affiliate Program",
    route: "/affiliates",
    keywords: [
      "affiliate program",
      "reward program"
    ],
    image: "icon-team-2"
  },
  {
    name: "d-streamlabels",
    title: "Stream Labels",
    route: "/dashboard#/streamlabels",
    keywords: [
      "stream labels",
      "labels"
    ],
    image: "icon-link"
  },
  {
    name: "d-widgets",
    title: "Widget Gallery",
    route: "/dashboard#/widgets",
    keywords: [
      "widget gallery",
      "alert box",
      "show donations on screen",
      "goals",
      "spin wheel",
      "stream elements",
      "muxy",
      "tipeeestream",
      "tips"
    ],
    image: "icon-link"
  },
  {
    name: "d-alertbox",
    title: "Alert Box Settings",
    route: "/dashboard#/alertbox",
    keywords: [
      "alert box",
      "alert",
      "tips",
      "donations",
      "bits",
      "superchats",
      "follows",
      "subs",
      "membrs",
      "subscriptions"
    ],
    image: "icon-desktop"
  },
  {
    name: "d-tipjar",
    title: "Tip Jar Settings",
    route: "/dashboard#/jar",
    keywords: [
      "tip jar",
      "alert",
      "tips",
      "donations",
      "bits",
      "superchats",
      "follows",
      "subs",
      "membrs",
      "subscriptions"
    ],
    image: "icon-jar"
  },
  {
    name: "d-donationticker",
    title: "Donation Ticker Settings",
    route: "/dashboard#/donationticker",
    keywords: [
      "donation ticker",
      "alert",
      "tips",
      "donations",
      "bits",
      "superchats",
      "follows",
      "subs",
      "membrs",
      "subscriptions"
    ],
    image: "icon-donation-ticker"
  },
  {
    name: "d-spinwheel",
    title: "Spin Wheel Settings",
    route: "/dashboard#/wheel",
    keywords: [
      "spin wheel",
      "spin to win"
    ],
    image: "icon-link"
  },
  {
    name: "d-streamboss",
    title: "Stream Boss Settings",
    route: "/dashboard#/streamboss",
    keywords: [
      "stream boss",
      "bit boss",
      "donation fight"
    ],
    image: "icon-link"
  },
  {
    name: "d-sponsorbanner",
    title: "Sponsor Banner Settings",
    route: "/dashboard#/sponsorbanner",
    keywords: [
      "rotating sponsor banner"
    ],
    image: "icon-link"
  },
  {
    name: "d-mediashare",
    title: "Media Share Settings",
    route: "/dashboard#/mediashare",
    keywords: [
      "media share",
      "play youtube videos on stream"
    ],
    image: "icon-media-share-2"
  },
  {
    name: "d-donationgoal",
    title: "Donation Goal Settings",
    route: "/dashboard#/donationgoal",
    keywords: [
      "donation goal"
    ],
    image: "icon-link"
  },
  {
    name: "d-followergoal",
    title: "Follower Goal Settings",
    route: "dashboard#/followergoal",
    keywords: [
      "follower goal"
    ],
    image: "icon-link"
  },
  {
    name: "d-subscriptiongoal",
    title: "Subscription Goal Settings",
    route: "/dashboard#/subgoal",
    keywords: [
      "subscription goal"
    ],
    image: "icon-link"
  },
  {
    name: "d-bitgoal",
    title: "Bit Goal Settings",
    route: "/dashboard#/bitgoal",
    keywords: [
      "bit goal"
    ],
    image: "icon-link"
  },
  {
    name: "d-tiltifygoal",
    title: "Tiltify Donation Goal Settings",
    route: "/dashboard#/tiltifydonationgoal",
    keywords: [
      "tilify goal",
      "charity goal"
    ],
    image: "icon-link"
  },
  {
    name: "d-chatbox",
    title: "Chat Box Widget Settings",
    route: "/dashboard#/chatbox",
    keywords: [
      "chat box",
      "irc"
    ],
    image: "icon-chat-box"
  },
  {
    name: "d-emote-wall",
    title: "Emote Wall Widget Settings",
    route: "/dashboard#/widgets/emote-wall",
    keywords: [
      "emote wall",
      "kappagenn",
      "pogchamp"
    ],
    image: "fas fa-laugh-squint"
  },
  {
    name: "merchsetup",
    title: "Merch Store",
    route: "dashboard#/merchadmin",
    keywords: [
      "merch store",
      "t-shirts",
      "merchandise"
    ],
    image: "icon-upperwear"
  },
  {
    name: "d-eventlist",
    title: "Event List Settings ",
    route: "/dashboard#/eventlist",
    keywords: [
      "event list",
      "recent events"
    ],
    image: "icon-event-list"
  },
  {
    name: "d-viewercount",
    title: "Viewer Counter Settings",
    route: "/dashboard#/viewercount",
    keywords: [
      "viewer count",
      "show twitch viewers",
      "show facebook viewers",
      "show youtube viewers"
    ],
    image: "icon-view"
  },
  {
    name: "d-credits",
    title: "End Credits Settings ",
    route: "/dashboard#/credits",
    keywords: [
      "end credits"
    ],
    image: "icon-link"
  },
  {
    name: "pricing",
    title: "Streamlabs Pricing",
    route: "/pricing",
    keywords: [
      "pricing policy"
    ],
    image: "icon-earnings"
  },
  {
    name: "blog",
    title: "Streamlabs Blog",
    route: "/blog",
    keywords: [
      "streamlabs news",
      "whats new",
      "stream elements",
      "muxy"
    ],
    image: "icon-link"
  },
  {
    name: "library",
    title: "Themes & Overlays",
    route: "/library",
    keywords: [
      "stream overlays",
      "collection",
      "overlay library",
      "nerd or die",
      "vbi",
      "visuals by impulse",
      "graphics",
      "branding",
      "themes"
    ],
    image: "icon-link"
  },
  {
    name: "recentevents",
    title: "Your Recent Events",
    route: "/dashboard#/twitch",
    keywords: [
      "recent events",
      "twitch"
    ],
    image: "icon-live-dashboard"
  },
  {
    name: "d-chatbot",
    title: "Chatbot Dashboard (Legacy)",
    route: "/chatbot",
    keywords: [
      "chatbot",
      "cloudbot",
      "ankhbot",
      "moobot",
      "nightbot"
    ],
    image: "icon-community"
  },
  {
    name: "cloudbot",
    title: "Cloudbot",
    route: "/dashboard#/cloudbot",
    keywords: [
      "cloudbot",
      "chatbot",
      "moderator",
      "stream elements",
      "anhkbot",
      "nightbot",
      "moobot",
      "streambot",
      "streamlabs",
      "rutonychat",
      "irc",
      "scripts",
      "commands",
      "polls",
      "voting",
      "betting",
      "loyalty",
      "queue",
      "quotes",
      "timers",
      "modules",
      "mods",
      "mod tools",
      "minigame",
      "heist",
      "gamble",
      "chat",
      "bot"
    ],
    image: "icon-cloud"
  },
  {
    name: "creatorsites",
    title: "Creator Sites",
    route: "/dashboard#/editor",
    keywords: [
      "wordpress",
      "websites",
      "stream",
      "streampress",
      "wix",
      "domain",
      "godaddy",
      "your web page",
      "my site"
    ],
    image: "icon-creator-site"
  },
  {
    name: "donationsettings",
    title: "Donation Settings",
    route: "/dashboard#/settings/donation-settings",
    keywords: [
      "donation settings",
      "dashboard",
      "configuration",
      "paypal",
      "skrill",
      "unitpay",
      "cc",
      "credit card"
    ],
    image: "icon-settings"
  },
  {
    name: "accountsettings",
    title: "Account Settings",
    route: "/dashboard#/settings/account-settings",
    keywords: [
      "account settings",
      "cancel",
      "connect",
      "dashboard",
      "settings",
      "configuration",
      "import",
      "email",
      "preferences"
    ],
    image: "icon-settings"
  },
  {
    name: "sharedaccess",
    title: "Shared Access",
    route: "/dashboard#/settings/shared-access",
    keywords: [
      "shared access",
      "account settings",
      "moderator",
      "team",
      "leader",
      "boss",
      "manager",
      "configuration"
    ],
    image: "icon-settings"
  },
  {
    name: "integrations",
    title: "Platform Integrations",
    route: "/dashboard#/settings/integrations",
    keywords: [
      "platform integrations",
      "patreon",
      "extra life",
      "tiltify",
      "razer chroma",
      "discord",
      "tipeeestream",
      "treatstream",
      "charity streaming",
      "justgiving",
      "charity",
      "partnership",
      "connections"
    ],
    image: "icon-settings"
  },
  {
    name: "apisettings",
    title: "API settings",
    route: "/dashboard#/settings/api-settings",
    keywords: [
      "api",
      "developer",
      "application",
      "integration"
    ],
    image: "icon-settings"
  },
  {
    name: "d-affiliates",
    title: "Affiliates Dashboard",
    route: "/dashboard#/affiliates",
    keywords: [
      "affiliates",
      "affiliate program"
    ],
    image: "icon-earnings"
  },
  {
    name: "d-donations",
    title: "Donation History",
    route: "/dashboard#/donations",
    keywords: [
      "donation history",
      "donation list",
      "my donations"
    ],
    image: "icon-earnings"
  },
  {
    name: "d-subscribers",
    title: "Subscriber History",
    route: "/dashboard#/subscribers",
    keywords: [
      "subscriber list",
      "my subscribers",
      "subscriber history",
      "subscriptions"
    ],
    image: "icon-loyalty"
  },
  {
    name: "d-widgetthemes",
    title: "Your Widget Themes",
    route: "/dashboard#/widgetthemes",
    keywords: [
      "widget themes",
      "overlays"
    ],
    image: "icon-widgets"
  },
  {
    name: "loyaltyextension",
    title: "Streamlabs Loyalty Extension",
    route: "/dashboard#/loyalty",
    keywords: [
      "loyalty extension",
      "twitch"
    ],
    image: "icon-loyalty"
  },
  {
    name: "howto",
    title: "Streamlabs Help Center",
    route: "https://howto.streamlabs.com/",
    keywords: [
      "help",
      "support",
      "learn",
      "streamlabs",
      "questions",
      "answers"
    ],
    image: "icon-question"
  },
  {
    name: "charity",
    title: "Charity Campaigns",
    route: "/dashboard#/charity",
    keywords: [
      "giving",
      "charity",
      "charities"
    ],
    image: "fas fa-heart"
  },
  {
    name: "multistream",
    title: "Multistream",
    route: "/dashboard#/restream/settings",
    keywords: [
      "restream.io",
      "multistream",
      "stream to multiple platforms at once"
    ],
    image: "fas fa-globe"
  },
  {
    name: "university",
    title: "University",
    route: "/dashboard#/university",
    keywords: [
      "universtiy",
      "learning",
      "help",
      "tutorials",
      "how to grow"
    ],
    image: "fas fa-graduation-cap"
  },
  {
    name: "app-store",
    title: "Apps Store",
    route: "https://platform.streamlabs.com/app-store",
    keywords: [
      "slobs app store",
      "streamlabs obs app store",
      "add-ons",
      "nerd or die",
      "install",
      "platform",
      "monstercat"
    ],
    image: "icon-store"
  },
  {
    name: "panels",
    title: "Panels",
    route: "/dashboard#/prime/panels",
    keywords: [
      "panel maker",
      "twitch panels"
    ],
    image: "icon-one-column"
  },
  {
    name: "content-hub",
    title: "Content Hub",
    route: "https://streamlabs.com/content-hub",
    keywords: [
      "content hub",
      "hub",
      "resources",
      "learn",
      "how to",
      "tutorials"
    ],
    image: "icon-education"
  },
  {
    name: "extensions",
    title: "Twitch Extensions",
    route: "/dashboard#/extensions",
    keywords: [
      "twitch extensions",
      "leaderboard",
      "loyalty",
      "panel"
    ],
    image: "icon-twitch"
  }
];
const searchData = {
  data
};
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
let SiteSearchDemo$1 = class SiteSearchDemo extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", SiteSearchDemoCode);
    __publicField(this, "jsonSearch", searchData.data);
  }
};
SiteSearchDemo$1 = __decorateClass([
  Component({
    components: {
      Accordion,
      DemoSection,
      SiteSearch: SiteSearch2
    }
  })
], SiteSearchDemo$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Site Search")]), _c("p", [_vm._v(" This site search is live on core. It can be used with other json files, JSON structure example below. ")]), _vm._m(0), _c("Accordion", {
    attrs: {
      "title": "JSON Site Search Structure"
    }
  }, [_c("div", {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c("p", [_c("code", [_vm._v("keymatches")]), _vm._v(" and "), _c("code", [_vm._v("howto")]), _vm._v(" are not used right now, but will be used in the future. ")]), _c("div", {
    staticClass: "section"
  }, [_c("pre", [_c("code", [_vm._v('{\n  "data": [\n    {\n      "name": "contact",\n      "title": "Contact Us",\n      "route": "/contact",\n      "keywords": [\n        "contact",\n        "business",\n        "inquiries",\n        "social",\n        "media"\n      ],\n      "image": "icon-phone-case"\n    },\n  ]\n}')])])]), _c("p", [_vm._v("The JSON data and component can be imported normally")]), _c("pre", [_c("code", [_vm._v('import * as searchData from "./../location";\n\nexport default {\n  data() {\n    return {\n      jsonSearch = searchData.data\n    };\n  }\n}')])])])])], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Seach Demo")]), _c("DemoSection", {
    attrs: {
      "title": "Default",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("SiteSearch", {
          attrs: {
            "json-search": _vm.jsonSearch,
            "quick-links": [{
              item: {
                name: "donationsettings"
              }
            }, {
              item: {
                name: "d-alertbox"
              }
            }, {
              item: {
                name: "creatorsites"
              }
            }, {
              item: {
                name: "merchsetup"
              }
            }, {
              item: {
                name: "d-chatbox"
              }
            }, {
              item: {
                name: "streamlabs-obs"
              }
            }]
          }
        })];
      },
      proxy: true
    }])
  })], 1), _vm._m(1)]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("pre", [_c("code", [_vm._v('import { SiteSearch } from "streamlabs-beaker";\n\ncomponents: {\n  SiteSearch\n}')])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Props")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("jsonSearch")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Name of the imported json (must be imported in parent)")])]), _c("tr", [_c("td", [_vm._v("quickLinks")]), _c("td", [_vm._v("Array")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" max of 6 links, each must match name of entry in search json ")])])])]);
}];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  SiteSearchDemo$1,
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
const SiteSearchDemo2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  SiteSearchDemo2 as default
};
//# sourceMappingURL=SiteSearchDemo-8a9412a5.js.map
