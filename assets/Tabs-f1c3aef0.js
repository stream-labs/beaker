var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { W as Watch, C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import { S as ScrollNav } from "./ScrollNav-9b449aba.js";
import { i as index } from "./ResizeObserver.es-25312764.js";
import { P as PaneDropdown } from "./PaneDropdown-1ff494dd.js";
import { e as baseClone } from "./_baseClone-bc178edd.js";
import "./Accordion-7aa9b24d.js";
import "./vue-focus.common-28b20e5f.js";
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
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
let Tabs$2 = class Tabs extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "tabs");
    __publicField(this, "size");
    __publicField(this, "selected");
    __publicField(this, "className");
    __publicField(this, "hideContent");
    __publicField(this, "updateRoute");
    __publicField(this, "$refs");
    __publicField(this, "isMounted", false);
    __publicField(this, "tabsContainer", null);
    __publicField(this, "canScroll", false);
    __publicField(this, "hasNext", false);
    __publicField(this, "hasPrev", false);
    __publicField(this, "scrollIncrement", 100);
    __publicField(this, "selectedTab", "");
    __publicField(this, "selectTabSize", {
      fontSize: this.tabSize
    });
  }
  onTabsChange() {
    this.$nextTick(() => this.calculateScrolls());
  }
  get tabSize() {
    if (this.size === "small") {
      return "14px";
    } else if (this.size === "large") {
      return "16px";
    } else {
      return "14px";
    }
  }
  created() {
    window.addEventListener("resize", this.calculateScrolls);
  }
  destroyed() {
    window.removeEventListener("resize", this.calculateScrolls);
  }
  mounted() {
    this.isMounted = true;
    this.tabsContainer = this.$refs.scrollable_tabs;
    this.calculateScrolls();
    if (this.selected) {
      this.selectedTab = this.selected;
    } else {
      this.selectedTab = this.tabs[0].value;
    }
  }
  scrollLeft() {
    this.tabsContainer.scrollLeft = this.tabsContainer.scrollLeft - this.scrollIncrement;
  }
  scrollRight() {
    this.tabsContainer.scrollLeft = this.tabsContainer.scrollLeft + this.scrollIncrement;
  }
  calculateScrolls() {
    if (!this.isMounted)
      return false;
    this.canScroll = this.tabsContainer.scrollWidth > this.tabsContainer.clientWidth;
    this.hasPrev = this.tabsContainer.scrollLeft > 0;
    const scrollRight = this.tabsContainer.scrollWidth - (this.tabsContainer.scrollLeft + this.tabsContainer.clientWidth);
    this.hasNext = scrollRight > 0;
  }
  showTab(tab) {
    this.selectedTab = tab;
    this.$emit("tab-selected", tab);
  }
};
__decorateClass$2([
  Prop()
], Tabs$2.prototype, "tabs", 2);
__decorateClass$2([
  Watch("tabs", { deep: true })
], Tabs$2.prototype, "onTabsChange", 1);
__decorateClass$2([
  Prop()
], Tabs$2.prototype, "size", 2);
__decorateClass$2([
  Prop()
], Tabs$2.prototype, "selected", 2);
__decorateClass$2([
  Prop()
], Tabs$2.prototype, "className", 2);
__decorateClass$2([
  Prop()
], Tabs$2.prototype, "hideContent", 2);
__decorateClass$2([
  Prop({ default: true })
], Tabs$2.prototype, "updateRoute", 2);
Tabs$2 = __decorateClass$2([
  Component({})
], Tabs$2);
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-tabs-wrapper"
  }, [_c("div", {
    staticClass: "s-tabs-nav-wrapper"
  }, [_c("div", {
    staticClass: "s-tabs-nav",
    class: _vm.className
  }, [_vm.hasPrev ? _c("div", {
    staticClass: "s-tabs-nav__control s-has-prev",
    on: {
      "click": _vm.scrollLeft
    }
  }, [_c("i", {
    staticClass: "icon-back"
  })]) : _vm._e(), _c("div", {
    ref: "scrollable_tabs",
    staticClass: "s-tabs",
    class: {
      "s-has-next": _vm.hasNext,
      "s-has-prev": _vm.hasPrev
    },
    on: {
      "scroll": _vm.calculateScrolls
    }
  }, _vm._l(_vm.tabs, function(tab) {
    return _c("div", {
      key: tab.value,
      staticClass: "s-tab",
      class: {
        "is-active": tab.value === _vm.selectedTab
      },
      style: _vm.selectTabSize,
      on: {
        "click": function($event) {
          return _vm.showTab(tab.value);
        }
      }
    }, [_vm.updateRoute ? _c("router-link", {
      staticClass: "s-tab-link",
      attrs: {
        "to": `#/${tab.value}`
      }
    }, [tab.icon ? _c("i", {
      class: `icon-${tab.icon}`
    }) : _vm._e(), _vm._v(" " + _vm._s(tab.name) + " ")]) : _c("div", {
      staticClass: "s-tab-link"
    }, [tab.icon ? _c("i", {
      class: `icon-${tab.icon}`
    }) : _vm._e(), _vm._v(" " + _vm._s(tab.name) + " ")])], 1);
  }), 0), _vm.hasNext ? _c("div", {
    staticClass: "s-tabs-nav__control s-has-next",
    on: {
      "click": _vm.scrollRight
    }
  }, [_c("i", {
    staticClass: "icon-back"
  })]) : _vm._e()])]), !_vm.hideContent ? _c("div", {
    staticClass: "s-tab-content"
  }, _vm._l(_vm.tabs, function(tab, index2) {
    return _c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: tab.value === _vm.selectedTab,
        expression: "tab.value === selectedTab"
      }],
      key: index2
    }, [_vm._t(tab.value)], 2);
  }), 0) : _vm._e()]);
};
var staticRenderFns$2 = [];
const Tabs_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(
  Tabs$2,
  render$2,
  staticRenderFns$2,
  false,
  __vue2_injectStyles$2,
  "7f74148e",
  null,
  null
);
function __vue2_injectStyles$2(context) {
  for (let o in __cssModules$2) {
    this[o] = __cssModules$2[o];
  }
}
const Tabs$1 = /* @__PURE__ */ function() {
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
let TabsNew$1 = class TabsNew extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "tabs");
    __publicField(this, "size");
    __publicField(this, "selected");
    __publicField(this, "className");
    __publicField(this, "hideContent");
    __publicField(this, "updateRoute");
    __publicField(this, "$refs");
    __publicField(this, "isMounted", false);
    __publicField(this, "hasHiddenTabs", true);
    __publicField(this, "hiddenTabFocused", false);
    __publicField(this, "modifiedTabs", []);
    __publicField(this, "dropdownIsActive", false);
    __publicField(this, "selectTabSize", { fontSize: this.tabSize });
    __publicField(this, "prevWidth", 0);
    __publicField(this, "tabWidthsSet", false);
    __publicField(this, "tabsNav", null);
    __publicField(this, "allTabElements", null);
  }
  get tabLinkTag() {
    return this.updateRoute ? "router-link" : "button";
  }
  get tabSize() {
    return this.size === "large" ? "16px" : "14px";
  }
  get hiddenTabs() {
    return this.modifiedTabs.filter((tab) => tab.hidden);
  }
  get activeTab() {
    if (this.modifiedTabs.every((tab) => !tab.active)) {
      return this.selected || this.modifiedTabs[0].value;
    }
    return this.modifiedTabs.find((tab) => tab.active);
  }
  get hiddenActiveTab() {
    return this.hiddenTabs.find((tab) => tab.active);
  }
  mounted() {
    this.$refs.hiddenTabsDropdown.$el.addEventListener(
      "focus",
      this.focusActiveTab
    );
    this.loadTabProperties();
    this.isMounted = true;
    this.tabsNav = this.$refs.tabsNav;
    this.$nextTick(() => {
      if (this.selected) {
        const activeTab = this.modifiedTabs.find((tab) => this.selected === tab.value) || this.modifiedTabs[0];
        activeTab.active = true;
      }
      this.allTabElements = this.tabsNav.querySelectorAll(".s-tabs__tab");
      this.setTabWidths();
    });
    this.$nextTick(() => {
      this.setTabWidths();
      this.loadResizeObserver();
    });
  }
  destroyed() {
    this.$refs.hiddenTabsDropdown.$el.removeEventListener(
      "focus",
      this.focusActiveTab
    );
  }
  loadTabProperties() {
    this.modifiedTabs = cloneDeep(this.tabs).map((tab) => {
      return {
        ...tab,
        active: false,
        hidden: false,
        width: 0
      };
    });
  }
  setTabWidths() {
    Array.from(this.tabsNav.querySelectorAll(".s-tabs__tab")).forEach(
      (tab, idx) => {
        this.$nextTick(() => {
          let tabLink = tab.querySelector(".s-tabs__link");
          this.modifiedTabs[idx].width = idx !== this.modifiedTabs.length - 1 ? tabLink.offsetWidth + 16 : tabLink.offsetWidth;
        });
      }
    );
  }
  loadResizeObserver() {
    const ro = new index((entries) => {
      entries.forEach((entry) => {
        const { width, height } = entry.contentRect;
        if (this.prevWidth !== width) {
          this.$nextTick(() => this.setHiddenTabs());
          this.prevWidth = width;
        }
      });
    });
    ro.observe(this.tabsNav);
  }
  setHiddenTabs() {
    if (!this.isMounted)
      return false;
    this.hasHiddenTabs = true;
    this.$nextTick(() => {
      const moreTab = Array.from(this.tabsNav.children).pop();
      let totalTabsWidth = moreTab.offsetWidth;
      const tabsNavWidth = this.tabsNav.offsetWidth;
      this.hasHiddenTabs = false;
      this.modifiedTabs.forEach((tab, index2) => {
        tab.hidden = false;
        if (tabsNavWidth >= totalTabsWidth + tab.width && !this.hasHiddenTabs) {
          totalTabsWidth += tab.width;
        } else {
          this.modifiedTabs[index2].hidden = true;
          if (!this.hasHiddenTabs)
            this.hasHiddenTabs = true;
        }
      });
      if (this.modifiedTabs.some((tab) => tab.hidden))
        this.hasHiddenTabs = true;
    });
  }
  setTabOnKeyDown(event, current, direction = "RIGHT") {
    const paneDropdown = this.$refs.hiddenTabsDropdown;
    const currentIndex = this.modifiedTabs.findIndex(
      (tab) => current === tab.value
    );
    let newIndex = 0;
    if (direction === "LEFT") {
      newIndex = currentIndex === 0 ? this.modifiedTabs.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === this.modifiedTabs.length - 1 ? 0 : currentIndex + 1;
    }
    this.togglePaneDropdown(
      this.modifiedTabs[currentIndex].hidden,
      this.modifiedTabs[newIndex].hidden
    );
    let newTab = null;
    if (this.modifiedTabs[newIndex].hidden) {
      const newHiddenIndex = this.hiddenTabs.findIndex(
        (tab) => this.modifiedTabs[newIndex].value === tab.value
      );
      let newHiddenList = null;
      this.$nextTick(() => {
        newHiddenList = paneDropdown.$el.querySelectorAll(
          ".s-pane-dropdown__list .s-tabs__link"
        );
        newTab = newHiddenList[newHiddenIndex];
      });
      this.hiddenTabs[newHiddenIndex];
    } else {
      newTab = this.allTabElements[newIndex].querySelector(".s-tabs__link");
    }
    this.$nextTick(() => {
      newTab.focus();
      this.showTab(this.modifiedTabs[newIndex]);
    });
  }
  togglePaneDropdown(currentHidden, newHidden) {
    this.$refs.hiddenTabsDropdown;
    if (newHidden && this.dropdownIsActive)
      return;
    if (newHidden) {
      this.$refs.hiddenTabsDropdown.show();
      this.openPaneDropdown();
    } else {
      this.closePaneDropdown();
    }
  }
  openPaneDropdown() {
    this.dropdownIsActive = true;
  }
  closePaneDropdown() {
    this.$refs.hiddenTabsDropdown.hide();
    this.dropdownIsActive = false;
  }
  showHiddenTabs(val) {
    this.dropdownIsActive = val;
  }
  tabLinkOptions(tabValue) {
    return {
      to: this.updateRoute ? `#/${tabValue}` : void 0
    };
  }
  blurPaneDropDown() {
    this.$nextTick(() => {
      const paneDropdown = this.$refs.hiddenTabsDropdown;
      const currnetHiddenList = paneDropdown.$el.querySelectorAll(
        ".s-pane-dropdown__list .s-tabs__link"
      );
      if ([...currnetHiddenList].some(
        (tabElement) => document.activeElement === tabElement
      )) {
        return;
      }
      this.hiddenTabFocused = false;
      this.closePaneDropdown();
    });
  }
  focusActiveTab() {
    this.openPaneDropdown();
    if (this.$whatInput.ask("intent") === "keyboard") {
      const activeTabIndex = this.hiddenTabs.findIndex((tab) => tab.active);
      const paneDropdown = this.$refs.hiddenTabsDropdown;
      this.$nextTick(() => {
        const currnetHiddenList = paneDropdown.$el.querySelectorAll(
          ".s-pane-dropdown__list .s-tabs__link"
        );
        const activeTab = currnetHiddenList[activeTabIndex];
        activeTab.focus();
      });
    }
  }
  showTab(tab) {
    this.modifiedTabs.forEach((tab2) => tab2.active = false);
    tab.active = true;
    this.$emit("tab-selected", tab.value);
  }
};
__decorateClass$1([
  Prop()
], TabsNew$1.prototype, "tabs", 2);
__decorateClass$1([
  Prop()
], TabsNew$1.prototype, "size", 2);
__decorateClass$1([
  Prop()
], TabsNew$1.prototype, "selected", 2);
__decorateClass$1([
  Prop()
], TabsNew$1.prototype, "className", 2);
__decorateClass$1([
  Prop()
], TabsNew$1.prototype, "hideContent", 2);
__decorateClass$1([
  Prop({ default: true })
], TabsNew$1.prototype, "updateRoute", 2);
TabsNew$1 = __decorateClass$1([
  Component({
    components: {
      PaneDropdown
    }
  })
], TabsNew$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    ref: "tabsWrapper",
    staticClass: "s-tabs"
  }, [_c("div", {
    ref: "tabsNav",
    staticClass: "s-tabs__nav",
    class: _vm.className
  }, [_vm._l(_vm.modifiedTabs, function(tab) {
    return _c("div", {
      key: tab.value,
      staticClass: "s-tabs__tab",
      class: {
        "is-active": tab.active,
        "is-hidden": tab.hidden
      },
      style: _vm.selectTabSize,
      attrs: {
        "aria-controls": `${tab.value}-tab`
      },
      on: {
        "click": function($event) {
          return _vm.showTab(tab);
        },
        "keydown": [function($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "left", 37, $event.key, ["Left", "ArrowLeft"]))
            return null;
          if ("button" in $event && $event.button !== 0)
            return null;
          $event.preventDefault();
          return _vm.setTabOnKeyDown($event, tab.value, "LEFT");
        }, function($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"]))
            return null;
          $event.preventDefault();
          return _vm.setTabOnKeyDown($event, tab.value, "LEFT");
        }, function($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "right", 39, $event.key, ["Right", "ArrowRight"]))
            return null;
          if ("button" in $event && $event.button !== 2)
            return null;
          $event.preventDefault();
          return _vm.setTabOnKeyDown($event, tab.value);
        }, function($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"]))
            return null;
          $event.preventDefault();
          return _vm.setTabOnKeyDown($event, tab.value);
        }]
      }
    }, [_c(_vm.tabLinkTag, _vm._b({
      tag: "component",
      staticClass: "s-tabs__link",
      attrs: {
        "to": `#/${tab.value}`,
        "tag": "button",
        "tabindex": !tab.active ? "-1" : void 0
      }
    }, "component", _vm.tabLinkOptions(tab.value), false), [tab.icon ? _c("i", {
      class: `icon-${tab.icon}`
    }) : _vm._e(), _c("span", {
      staticClass: "s-tabs__title"
    }, [_vm._v(_vm._s(tab.name))])])], 1);
  }), _c("PaneDropdown", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.hasHiddenTabs,
      expression: "hasHiddenTabs"
    }],
    ref: "hiddenTabsDropdown",
    attrs: {
      "menuAlign": "right",
      "tabindex": _vm.hiddenActiveTab && !_vm.hiddenTabFocused ? 0 : -1
    }
  }, [_c("template", {
    slot: "title"
  }, [_vm._v("More")]), _vm._l(_vm.hiddenTabs, function(tab) {
    return _c("div", {
      key: `hidden-${tab.value}`,
      class: {
        "is-active": tab.active
      },
      on: {
        "click": function($event) {
          return _vm.showTab(tab);
        },
        "blur": _vm.blurPaneDropDown,
        "focus": function($event) {
          _vm.hiddenTabFocused = true;
        },
        "keydown": [function($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "left", 37, $event.key, ["Left", "ArrowLeft"]))
            return null;
          if ("button" in $event && $event.button !== 0)
            return null;
          $event.preventDefault();
          return _vm.setTabOnKeyDown($event, tab.value, "LEFT");
        }, function($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"]))
            return null;
          $event.preventDefault();
          return _vm.setTabOnKeyDown($event, tab.value, "LEFT");
        }, function($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "right", 39, $event.key, ["Right", "ArrowRight"]))
            return null;
          if ("button" in $event && $event.button !== 2)
            return null;
          $event.preventDefault();
          return _vm.setTabOnKeyDown($event, tab.value);
        }, function($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"]))
            return null;
          $event.preventDefault();
          return _vm.setTabOnKeyDown($event, tab.value);
        }]
      }
    }, [_c(_vm.tabLinkTag, {
      tag: "component",
      staticClass: "s-tabs__link",
      attrs: {
        "to": `#/${tab.value}`,
        "tag": "button",
        "tabindex": !tab.active ? "-1" : void 0
      }
    }, [_vm._v(_vm._s(tab.name))])], 1);
  })], 2)], 2), !_vm.hideContent ? _c("div", {
    staticClass: "s-tab-content"
  }, _vm._l(_vm.modifiedTabs, function(tab, index2) {
    return _c("div", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: tab.active,
        expression: "tab.active"
      }],
      key: index2
    }, [_vm._t(tab.value)], 2);
  }), 0) : _vm._e()]);
};
var staticRenderFns$1 = [];
const TabsNew_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  TabsNew$1,
  render$1,
  staticRenderFns$1,
  false,
  __vue2_injectStyles$1,
  "20741582",
  null,
  null
);
function __vue2_injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
const TabsNew2 = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
const TabsCode = `<template>
  <div>
    <h1>Tabs</h1>
    <p>Used for Tabs.</p>

    <pre><code>import { Tabs } from 'streamlabs-beaker';

components: {
  Tabs
}</code></pre>

    <div class="section">
      <DemoSection title="Default" :code="demoCode">
        <template #components>
          <Tabs
            :tabs="tabs"
            size="small"
            :update-route="false"
            selected="advanced"
          >
            <div :slot="tab.value" v-for="tab in tabs" :key="tab.value">
              {{ tab.name }}
            </div>
          </Tabs>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <DemoSection title="New Tabs" :code="demoCode">
        <template #components>
          <TabsNew :tabs="tabs" size="small" selected="advanced">
            <div :slot="tab.value" v-for="tab in tabs" :key="tab.value">
              {{ tab.name }}
            </div>
          </TabsNew>
        </template>
      </DemoSection>
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
          <td>tabs</td>
          <td>array</td>
          <td>null</td>
          <td>
            tabs information to display. you can make array like below
            <br />
            <code
              >tabs = [ { name: "General", value: "general", icon: "information"
              }, ... ];</code
            >
          </td>
        </tr>
        <tr>
          <td>size</td>
          <td>string</td>
          <td>small</td>
          <td>text size of tabs. Options are "small" and "large"</td>
        </tr>
        <tr>
          <td>selected</td>
          <td>string</td>
          <td>null</td>
          <td>default selected tab</td>
        </tr>
        <tr>
          <td>updateRoute</td>
          <td>boolean</td>
          <td>true</td>
          <td>
            Updates current URL with "#/{selected Tab}". Set to false if you
            don't want to update the URL.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import DemoSection from "./../components/DemoSection.vue";
import ScrollNav from "./../components/ScrollNav.vue";
import Tabs from "./../components/Tabs.vue";
import TabsNew from "./../components/TabsNew.vue";
import TabsCode from "./Tabs.vue?raw";

@Component({
  components: {
    DemoSection,
    ScrollNav,
    Tabs,
    TabsNew
  }
})
export default class TabsDemo extends Vue {
  demoCode = TabsCode;
  tabs = [
    {
      name: "General",
      value: "general",
      icon: "information"
    },
    {
      name: "Advanced",
      value: "advanced",
      icon: ""
    },
    {
      name: "Account",
      value: "account",
      icon: ""
    },
    {
      name: "Integrations",
      value: "integrations",
      icon: ""
    },
    {
      name: "Payments",
      value: "payments",
      icon: ""
    },
    {
      name: "Donations",
      value: "donations",
      icon: ""
    },
    {
      name: "Subscriptions",
      value: "subscriptions",
      icon: ""
    },
    {
      name: "Preferences",
      value: "preferences",
      icon: ""
    },
    {
      name: "Apps",
      value: "apps",
      icon: ""
    },
    {
      name: "Merch",
      value: "merch",
      icon: ""
    },
    {
      name: "API",
      value: "api",
      icon: ""
    },
    {
      name: "Moderators",
      value: "moderators",
      icon: ""
    },
    {
      name: "Themes",
      value: "themes",
      icon: ""
    }
  ];
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
let TabsDemo = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", TabsCode);
    __publicField(this, "tabs", [
      {
        name: "General",
        value: "general",
        icon: "information"
      },
      {
        name: "Advanced",
        value: "advanced",
        icon: ""
      },
      {
        name: "Account",
        value: "account",
        icon: ""
      },
      {
        name: "Integrations",
        value: "integrations",
        icon: ""
      },
      {
        name: "Payments",
        value: "payments",
        icon: ""
      },
      {
        name: "Donations",
        value: "donations",
        icon: ""
      },
      {
        name: "Subscriptions",
        value: "subscriptions",
        icon: ""
      },
      {
        name: "Preferences",
        value: "preferences",
        icon: ""
      },
      {
        name: "Apps",
        value: "apps",
        icon: ""
      },
      {
        name: "Merch",
        value: "merch",
        icon: ""
      },
      {
        name: "API",
        value: "api",
        icon: ""
      },
      {
        name: "Moderators",
        value: "moderators",
        icon: ""
      },
      {
        name: "Themes",
        value: "themes",
        icon: ""
      }
    ]);
  }
};
TabsDemo = __decorateClass([
  Component({
    components: {
      DemoSection,
      ScrollNav,
      Tabs: Tabs$1,
      TabsNew: TabsNew2
    }
  })
], TabsDemo);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("h1", [_vm._v("Tabs")]), _c("p", [_vm._v("Used for Tabs.")]), _vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("DemoSection", {
    attrs: {
      "title": "Default",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Tabs", {
          attrs: {
            "tabs": _vm.tabs,
            "size": "small",
            "update-route": false,
            "selected": "advanced"
          }
        }, _vm._l(_vm.tabs, function(tab) {
          return _c("div", {
            key: tab.value,
            attrs: {
              "slot": tab.value
            },
            slot: tab.value
          }, [_vm._v(" " + _vm._s(tab.name) + " ")]);
        }), 0)];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("DemoSection", {
    attrs: {
      "title": "New Tabs",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("TabsNew", {
          attrs: {
            "tabs": _vm.tabs,
            "size": "small",
            "selected": "advanced"
          }
        }, _vm._l(_vm.tabs, function(tab) {
          return _c("div", {
            key: tab.value,
            attrs: {
              "slot": tab.value
            },
            slot: tab.value
          }, [_vm._v(" " + _vm._s(tab.name) + " ")]);
        }), 0)];
      },
      proxy: true
    }])
  })], 1), _vm._m(1)]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("pre", [_c("code", [_vm._v("import { Tabs } from 'streamlabs-beaker';\n\ncomponents: {\n  Tabs\n}")])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("tabs")]), _c("td", [_vm._v("array")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" tabs information to display. you can make array like below "), _c("br"), _c("code", [_vm._v('tabs = [ { name: "General", value: "general", icon: "information" }, ... ];')])])]), _c("tr", [_c("td", [_vm._v("size")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("small")]), _c("td", [_vm._v('text size of tabs. Options are "small" and "large"')])]), _c("tr", [_c("td", [_vm._v("selected")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("default selected tab")])]), _c("tr", [_c("td", [_vm._v("updateRoute")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v(` Updates current URL with "#/{selected Tab}". Set to false if you don't want to update the URL. `)])])])]);
}];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  TabsDemo,
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
const Tabs2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Tabs2 as default
};
//# sourceMappingURL=Tabs-f1c3aef0.js.map
