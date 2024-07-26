var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { B as Badge } from "./Badge-2f139b6a.js";
import { B as Button } from "./Button-8b9ecd72.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import { M as ModalComp, W as WelcomePrime } from "./ModalComp-0ba07c9c.js";
import { E as EmptySection } from "./EmptySection-2a9711f8.js";
import "./Accordion-7aa9b24d.js";
import "./Spinner-e272b66e.js";
import "./index-213b3b83.js";
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
let NavCallToAction$1 = class NavCallToAction extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "bgColor");
    __publicField(this, "description");
    __publicField(this, "buttonVariation");
    __publicField(this, "buttonTitle");
    __publicField(this, "buttonHref");
    __publicField(this, "buttonTo");
    __publicField(this, "buttonTag");
    __publicField(this, "onClick");
    __publicField(this, "callToActionBg", {
      backgroundColor: this.bgColor
    });
  }
};
__decorateClass$2([
  Prop()
], NavCallToAction$1.prototype, "bgColor", 2);
__decorateClass$2([
  Prop({
    default: "Over 800k creators use Streamlabs OBS daily, delivering entertainment."
  })
], NavCallToAction$1.prototype, "description", 2);
__decorateClass$2([
  Prop({ default: "slobs-download" })
], NavCallToAction$1.prototype, "buttonVariation", 2);
__decorateClass$2([
  Prop({ default: "Download Streamlabs OBS" })
], NavCallToAction$1.prototype, "buttonTitle", 2);
__decorateClass$2([
  Prop()
], NavCallToAction$1.prototype, "buttonHref", 2);
__decorateClass$2([
  Prop()
], NavCallToAction$1.prototype, "buttonTo", 2);
__decorateClass$2([
  Prop()
], NavCallToAction$1.prototype, "buttonTag", 2);
__decorateClass$2([
  Prop()
], NavCallToAction$1.prototype, "onClick", 2);
NavCallToAction$1 = __decorateClass$2([
  Component({
    components: {
      Button
    }
  })
], NavCallToAction$1);
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-call-to-action s-call-to-action--nav",
    style: _vm.callToActionBg
  }, [_c("div", {
    staticClass: "s-title"
  }, [_vm._t("title")], 2), _c("div", [_vm._v(_vm._s(_vm.description))]), _c("div", {
    staticClass: "s-call-to-action__extras"
  }, [_vm._t("extras")], 2), _c("Button", {
    attrs: {
      "variation": _vm.buttonVariation,
      "size": "small",
      "title": _vm.buttonTitle,
      "href": _vm.buttonHref,
      "to": _vm.buttonTo,
      "tag": _vm.buttonTag
    },
    on: {
      "click": function($event) {
        return _vm.$emit("click");
      }
    }
  })], 1);
};
var staticRenderFns$2 = [];
const NavCallToAction_vue_vue_type_style_index_0_lang = "";
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(
  NavCallToAction$1,
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
const NavCallToAction2 = /* @__PURE__ */ function() {
  return __component__$2.exports;
}();
const PrimeCode = `<template>
  <div>
    <div class="section">
      <h1>Prime Components</h1>
    </div>

    <div class="section">
      <h2>Standard Badges & Alt Badges</h2>
      <pre><code>import { Badge } from "streamlabs-beaker"

@Component({
  components: {
    Badge
  }
})</code></pre>

      <DemoSection title="Badges" :code="demoCode">
        <template #components>
          <Badge variant="prime" />
          <Badge variant="prime-alt" />
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Prime Feature Overlay</h2>
      <pre><code>import { PrimeSection } from "streamlabs-beaker"

@Component({
  components: {
    PrimeSection
  }
})</code></pre>

      <DemoSection title="Prime Lock Overlay" :code="demoCode">
        <template #components>
          <div class="cs-section">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi
            magna, venenatis quis lobortis vel, mollis eu diam. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet
            egestas tellus quis pretium. Fusce sit amet sem sapien. Vestibulum
            congue euismod enim non venenatis. Sed sed varius neque. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nullam nisi magna,
            venenatis quis lobortis vel, mollis eu diam. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Pellentesque aliquet egestas
            tellus quis pretium. Fusce sit amet sem sapien. Vestibulum congue
            euismod enim non venenatis. Sed sed varius neque.
            <PrimeSection
              subtitle="77% trust custom email addresses over regular."
              @click="testClick"
            />
          </div>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Prime Call to Action</h2>
      <pre><code>import { NavCallToAction } from "streamlabs-beaker"

@Component({
  components: {
    NavCallToAction
  }
})</code></pre>

      <DemoSection title="Prime Call to Action" :code="demoCode">
        <template #components>
          <NavCallToAction
            description="Forward email from your custom domain name to your current mailbox.
            "
            buttonTitle="Join Prime"
            buttonVariation="prime"
            @click="testNavClick"
          >
            <div slot="title">
              Unlock unlimited themes with
              <Badge variant="prime-alt" />
            </div>
            <div slot="extras">
              <div>Prime also includes:</div>
              <div>Custom Domain Name</div>
              <div>30+ Professional Themes</div>
              <div>Advanced SEO & Analytics</div>
            </div>
          </NavCallToAction>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Modal Welcome Prime</h2>
      <pre><code>import { ModalComp } from "streamlabs-beaker"

@Component({
  components: {
    ModalComp
  }
})</code></pre>

      <DemoSection title="Welcome Prime Modal" :code="demoCode">
        <template #components>
          <ModalComp
            type="welcome-prime"
            :width="600"
            @onClickPrime="testWelcomePrime"
            :hasPrimeCloseButton="true"
          />

          <div class="button-container button-container--left">
            <Button
              variation="default"
              title="modal welcome prime"
              @click="$modal.show('modal-welcome-prime')"
            />
          </div>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Welcome Prime</h2>
      <pre><code>import { WelcomePrime } from "streamlabs-beaker"

@Component({
  components: {
    WelcomePrime
  }
})</code></pre>

      <DemoSection title="Welcome Prime" :code="demoCode">
        <template #components>
          <WelcomePrime class="welcome-prime" @onClickPrime="testClick" />
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Modal Prime Intro</h2>
      <pre><code>import { ModalComp } from "streamlabs-beaker"

@Component({
  components: {
    ModalComp
  }
})</code></pre>

      <DemoSection title="Prime Intro Modal" :code="demoCode">
        <template #components>
          <ModalComp
            type="prime-intro"
            :width="680"
            @onClickPrime="testPrimeIntro"
            :hasPrimeCloseButton="true"
          />

          <div class="button-container button-container--left">
            <Button
              variation="default"
              title="Modal Prime Intro"
              @click="$modal.show('modal-prime-intro')"
            />
          </div>
        </template>
      </DemoSection>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Badge from "./../components/Badge.vue";
import Button from "./../components/Button.vue";
import DemoSection from "./../components/DemoSection.vue";
import ModalComp from "./../components/ModalComp.vue";
import NavCallToAction from "./../components/NavCallToAction.vue";
import PrimeCode from "./Prime.vue?raw";
import PrimeSection from "./../components/PrimeSection.vue";
import WelcomePrime from "./../components/WelcomePrime.vue";

@Component({
  components: {
    Badge,
    Button,
    DemoSection,
    ModalComp,
    NavCallToAction,
    PrimeSection,
    WelcomePrime
  }
})
export default class PrimeComponents extends Vue {
  demoCode = PrimeCode;

  testClick() {
    console.log("test prime section click");
  }

  testNavClick() {
    console.log("test prime nav click");
  }

  testWelcomePrime() {
    console.log("test welcome prime click");
  }

  testPrimeIntro() {
    console.log("test prime info click");
  }
}
<\/script>

<style lang="less" scoped>
@import (reference) "./../styles/Imports";

.cs-section {
  position: relative;
  width: 260px;
}

.welcome-prime {
  width: 600px;
}
</style>
`;
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
let PrimeSection$1 = class PrimeSection extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "subtitle");
    __publicField(this, "href");
    __publicField(this, "onClick");
  }
};
__decorateClass$1([
  Prop({})
], PrimeSection$1.prototype, "subtitle", 2);
__decorateClass$1([
  Prop({})
], PrimeSection$1.prototype, "href", 2);
__decorateClass$1([
  Prop()
], PrimeSection$1.prototype, "onClick", 2);
PrimeSection$1 = __decorateClass$1([
  Component({
    components: {
      Badge,
      Button,
      EmptySection
    }
  })
], PrimeSection$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "prime-section"
  }, [_c("empty-section", {
    attrs: {
      "variation": "prime",
      "titleSlot": true,
      "subtitle": _vm.subtitle,
      "hasLink": true
    }
  }, [_c("div", {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_c("Badge", {
    attrs: {
      "align-left": true,
      "variant": "prime-alt"
    }
  }), _vm._v("Feature ")], 1), _c("div", {
    attrs: {
      "slot": "link"
    },
    slot: "link"
  }, [_c("Button", {
    attrs: {
      "tag": "a",
      "variation": "link",
      "href": _vm.href,
      "title": "Try Prime Now"
    },
    on: {
      "click": function($event) {
        return _vm.$emit("click");
      }
    }
  })], 1)])], 1);
};
var staticRenderFns$1 = [];
const PrimeSection_vue_vue_type_style_index_0_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  PrimeSection$1,
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
const PrimeSection2 = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
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
let PrimeComponents = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", PrimeCode);
  }
  testClick() {
    console.log("test prime section click");
  }
  testNavClick() {
    console.log("test prime nav click");
  }
  testWelcomePrime() {
    console.log("test welcome prime click");
  }
  testPrimeIntro() {
    console.log("test prime info click");
  }
};
PrimeComponents = __decorateClass([
  Component({
    components: {
      Badge,
      Button,
      DemoSection,
      ModalComp,
      NavCallToAction: NavCallToAction2,
      PrimeSection: PrimeSection2,
      WelcomePrime
    }
  })
], PrimeComponents);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Standard Badges & Alt Badges")]), _vm._m(1), _c("DemoSection", {
    attrs: {
      "title": "Badges",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Badge", {
          attrs: {
            "variant": "prime"
          }
        }), _c("Badge", {
          attrs: {
            "variant": "prime-alt"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Prime Feature Overlay")]), _vm._m(2), _c("DemoSection", {
    attrs: {
      "title": "Prime Lock Overlay",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("div", {
          staticClass: "cs-section"
        }, [_vm._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi magna, venenatis quis lobortis vel, mollis eu diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet egestas tellus quis pretium. Fusce sit amet sem sapien. Vestibulum congue euismod enim non venenatis. Sed sed varius neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi magna, venenatis quis lobortis vel, mollis eu diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet egestas tellus quis pretium. Fusce sit amet sem sapien. Vestibulum congue euismod enim non venenatis. Sed sed varius neque. "), _c("PrimeSection", {
          attrs: {
            "subtitle": "77% trust custom email addresses over regular."
          },
          on: {
            "click": _vm.testClick
          }
        })], 1)];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Prime Call to Action")]), _vm._m(3), _c("DemoSection", {
    attrs: {
      "title": "Prime Call to Action",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("NavCallToAction", {
          attrs: {
            "description": "Forward email from your custom domain name to your current mailbox.\n            ",
            "buttonTitle": "Join Prime",
            "buttonVariation": "prime"
          },
          on: {
            "click": _vm.testNavClick
          }
        }, [_c("div", {
          attrs: {
            "slot": "title"
          },
          slot: "title"
        }, [_vm._v(" Unlock unlimited themes with "), _c("Badge", {
          attrs: {
            "variant": "prime-alt"
          }
        })], 1), _c("div", {
          attrs: {
            "slot": "extras"
          },
          slot: "extras"
        }, [_c("div", [_vm._v("Prime also includes:")]), _c("div", [_vm._v("Custom Domain Name")]), _c("div", [_vm._v("30+ Professional Themes")]), _c("div", [_vm._v("Advanced SEO & Analytics")])])])];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Modal Welcome Prime")]), _vm._m(4), _c("DemoSection", {
    attrs: {
      "title": "Welcome Prime Modal",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("ModalComp", {
          attrs: {
            "type": "welcome-prime",
            "width": 600,
            "hasPrimeCloseButton": true
          },
          on: {
            "onClickPrime": _vm.testWelcomePrime
          }
        }), _c("div", {
          staticClass: "button-container button-container--left"
        }, [_c("Button", {
          attrs: {
            "variation": "default",
            "title": "modal welcome prime"
          },
          on: {
            "click": function($event) {
              return _vm.$modal.show("modal-welcome-prime");
            }
          }
        })], 1)];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Welcome Prime")]), _vm._m(5), _c("DemoSection", {
    attrs: {
      "title": "Welcome Prime",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("WelcomePrime", {
          staticClass: "welcome-prime",
          on: {
            "onClickPrime": _vm.testClick
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Modal Prime Intro")]), _vm._m(6), _c("DemoSection", {
    attrs: {
      "title": "Prime Intro Modal",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("ModalComp", {
          attrs: {
            "type": "prime-intro",
            "width": 680,
            "hasPrimeCloseButton": true
          },
          on: {
            "onClickPrime": _vm.testPrimeIntro
          }
        }), _c("div", {
          staticClass: "button-container button-container--left"
        }, [_c("Button", {
          attrs: {
            "variation": "default",
            "title": "Modal Prime Intro"
          },
          on: {
            "click": function($event) {
              return _vm.$modal.show("modal-prime-intro");
            }
          }
        })], 1)];
      },
      proxy: true
    }])
  })], 1)]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Prime Components")])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("pre", [_c("code", [_vm._v('import { Badge } from "streamlabs-beaker"\n\n@Component({\n  components: {\n    Badge\n  }\n})')])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("pre", [_c("code", [_vm._v('import { PrimeSection } from "streamlabs-beaker"\n\n@Component({\n  components: {\n    PrimeSection\n  }\n})')])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("pre", [_c("code", [_vm._v('import { NavCallToAction } from "streamlabs-beaker"\n\n@Component({\n  components: {\n    NavCallToAction\n  }\n})')])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("pre", [_c("code", [_vm._v('import { ModalComp } from "streamlabs-beaker"\n\n@Component({\n  components: {\n    ModalComp\n  }\n})')])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("pre", [_c("code", [_vm._v('import { WelcomePrime } from "streamlabs-beaker"\n\n@Component({\n  components: {\n    WelcomePrime\n  }\n})')])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("pre", [_c("code", [_vm._v('import { ModalComp } from "streamlabs-beaker"\n\n@Component({\n  components: {\n    ModalComp\n  }\n})')])]);
}];
const Prime_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  PrimeComponents,
  render,
  staticRenderFns,
  false,
  __vue2_injectStyles,
  "68a5afb8",
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
const Prime = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Prime as default
};
//# sourceMappingURL=Prime-4e8cc763.js.map
