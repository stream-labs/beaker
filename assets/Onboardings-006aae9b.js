var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import { B as Button } from "./Button-8b9ecd72.js";
import { S as SSProSimulator } from "./SSProSimulator-25ae21d0.js";
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
let OnboardingStep$1 = class OnboardingStep extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "title");
    __publicField(this, "desc");
  }
};
__decorateClass$2([
  Prop()
], OnboardingStep$1.prototype, "title", 2);
__decorateClass$2([
  Prop()
], OnboardingStep$1.prototype, "desc", 2);
OnboardingStep$1 = __decorateClass$2([
  Component({
    components: {
      Button
    }
  })
], OnboardingStep$1);
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-onboarding-step"
  }, [_c("h1", [_vm._t("title")], 2), _c("p", [_vm._t("desc")], 2), _c("div", [_vm._t("default")], 2)]);
};
var staticRenderFns$2 = [];
const OnboardingStep_vue_vue_type_style_index_0_lang = "";
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(
  OnboardingStep$1,
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
const OnboardingStep2 = /* @__PURE__ */ function() {
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
let Onboarding$1 = class Onboarding extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "steps");
    __publicField(this, "stepLocation");
    __publicField(this, "currentStep");
    __publicField(this, "completeHandler");
    __publicField(this, "continueHandler");
    __publicField(this, "skipHandler");
    __publicField(this, "prevHandler");
    __publicField(this, "skippable");
    __publicField(this, "disableControls");
    __publicField(this, "hideSkip");
    __publicField(this, "hideBack");
    __publicField(this, "hideButton");
  }
  get location() {
    if (this.stepLocation === "left")
      return "s-onboarding__left";
    if (this.stepLocation === "top")
      return "s-onboarding__top";
  }
  get namedSteps() {
    return this.steps.every((step) => !!step.name);
  }
  get isCompleted() {
    return this.steps.every((step) => step.complete);
  }
  currentStepStyle(index) {
    return index + 1 === this.currentStep;
  }
  checkmarkStyle(index) {
    return this.steps[index].complete;
  }
};
__decorateClass$1([
  Prop()
], Onboarding$1.prototype, "steps", 2);
__decorateClass$1([
  Prop({ default: "left" })
], Onboarding$1.prototype, "stepLocation", 2);
__decorateClass$1([
  Prop()
], Onboarding$1.prototype, "currentStep", 2);
__decorateClass$1([
  Prop()
], Onboarding$1.prototype, "completeHandler", 2);
__decorateClass$1([
  Prop()
], Onboarding$1.prototype, "continueHandler", 2);
__decorateClass$1([
  Prop()
], Onboarding$1.prototype, "skipHandler", 2);
__decorateClass$1([
  Prop()
], Onboarding$1.prototype, "prevHandler", 2);
__decorateClass$1([
  Prop()
], Onboarding$1.prototype, "skippable", 2);
__decorateClass$1([
  Prop({ default: false })
], Onboarding$1.prototype, "disableControls", 2);
__decorateClass$1([
  Prop({ default: false })
], Onboarding$1.prototype, "hideSkip", 2);
__decorateClass$1([
  Prop({ default: false })
], Onboarding$1.prototype, "hideBack", 2);
__decorateClass$1([
  Prop({ default: false })
], Onboarding$1.prototype, "hideButton", 2);
Onboarding$1 = __decorateClass$1([
  Component({
    components: {
      OnboardingStep: OnboardingStep2,
      Button
    }
  })
], Onboarding$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-onboarding"
  }, [_c("div", {
    staticClass: "s-onboarding-main",
    class: _vm.location
  }, [_vm.namedSteps ? _c("div", {
    staticClass: "s-onboarding-progress s-onboarding__top s-step__cont"
  }, _vm._l(_vm.steps, function(step, idx) {
    return _c("div", {
      key: idx,
      staticClass: "s-step-name__cont"
    }, [idx > 0 ? _c("div", {
      staticClass: "s-name-caret"
    }, [_c("i", {
      staticClass: "icon-back"
    })]) : _vm._e(), _c("div", {
      staticClass: "s-name-step",
      class: {
        "current-step": _vm.currentStepStyle(idx)
      }
    }, [_vm._v(" " + _vm._s(step.name) + " ")])]);
  }), 0) : _c("div", {
    staticClass: "s-onboarding-progress",
    class: _vm.location
  }, [_c("div", {
    staticClass: "s-onboarding-progress__line",
    class: _vm.location
  }), _vm._l(_vm.steps, function(key, index) {
    return _c("div", {
      key: index,
      staticClass: "s-bullet",
      class: {
        "current-step": _vm.currentStepStyle(index)
      }
    }, [_c("i", {
      class: {
        "icon-check-mark": _vm.checkmarkStyle(index)
      }
    })]);
  })], 2), _c("div", {
    staticClass: "s-onboarding-body"
  }, [_vm._t(_vm.currentStep)], 2)]), !_vm.hideButton || !_vm.hideSkip || !_vm.hideBack ? _c("div", {
    staticClass: "s-onboarding-footer"
  }, [_c("div", {
    staticClass: "s-previousStep"
  }, [_c("p", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.currentStep !== 1 && !_vm.hideBack,
      expression: "currentStep !== 1 && !hideBack"
    }],
    on: {
      "click": _vm.prevHandler
    }
  }, [_vm._v("Back")])]), _c("div", {
    staticClass: "s-nextStep"
  }, [_vm.skippable && !_vm.hideSkip ? _c("p", {
    on: {
      "click": _vm.skipHandler
    }
  }, [_vm._v(" Skip ")]) : _vm._e(), _vm.skippable && _vm.currentStep === _vm.steps && !_vm.isCompleted ? _c("div", {
    staticClass: "s-onboarding-skip__warning"
  }, [_vm._v(" You skipped a step ")]) : _vm._e(), !_vm.hideButton ? _c("Button", {
    attrs: {
      "variation": "action",
      "title": _vm.currentStep === _vm.steps.length ? "Complete" : "Continue",
      "state": _vm.disableControls || _vm.currentStep === _vm.steps.length && !_vm.isCompleted ? "disabled" : null
    },
    on: {
      "click": function($event) {
        _vm.currentStep === _vm.steps.length ? _vm.completeHandler() : _vm.continueHandler();
      }
    }
  }) : _vm._e()], 1)]) : _vm._e()]);
};
var staticRenderFns$1 = [];
const Onboarding_vue_vue_type_style_index_0_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  Onboarding$1,
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
const Onboarding2 = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
const OnboardingsCode = `<template>
  <div>
    <div class="section">
      <h1>Onboarding</h1>
      <p>Onboarding component - now with all logic outside of component!</p>

      <pre><code>import { Onboarding, OnboardingStep } from "streamlabs-beaker"

@Component({
  components: {
    Onboarding,
    OnboardingStep,
  }
})</code></pre>
    </div>

    <div class="section">
      <h2>Onboarding - Named Steps</h2>
      <DemoSection title="Onboarding - Named Steps" :code="demoCode">
        <template #components>
          <Onboarding
            :steps="steps"
            :skippable="true"
            :currentStep="currentStep"
            :stepLocation="'top'"
            :skipHandler="skipFunc"
            :prevHandler="previousFunc"
            :continueHandler="continueFunc"
            :completeHandler="completeFunc"
          >
            <OnboardingStep slot="1">
              <span slot="title">Getting Started</span>
              <span slot="desc">Slot 1</span>
              <SSProSimulator :username="username" :domain="domain" :icon="icon"/>
            </OnboardingStep>
            <OnboardingStep slot="2">
              <span slot="title">A Few More Things</span>
              <span slot="desc">Slot 2</span>
              <SSProSimulator :username="username" :domain="domain" :icon="icon"/>
            </OnboardingStep>
            <OnboardingStep slot="3">
              <span slot="title">Almost There</span>
              <span slot="desc">Slot 3</span>
              <SSProSimulator :username="username" :domain="domain" :icon="icon"/>
            </OnboardingStep>
            <OnboardingStep slot="4">
              <span slot="title">Getting Started</span>
              <span slot="desc">Slot 4</span>
              <SSProSimulator :username="username" :domain="domain" :icon="icon"/>
            </OnboardingStep>
          </Onboarding>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <DemoSection title="Default" :code="demoCode">
        <template #components>
          <Onboarding
            :steps="stepsTest"
            :skippable="true"
            :currentStep="currentStep"
            :stepLocation="'top'"
            :skipHandler="skipFunc"
            :prevHandler="previousFunc"
            :continueHandler="continueFunc"
            :completeHandler="completeFunc"
          >
            <OnboardingStep slot="1">
              <span slot="title">Getting Started</span>
              <span slot="desc">Slot 1</span>
              <SSProSimulator :username="username" :domain="domain" :icon="icon"/>
            </OnboardingStep>
            <OnboardingStep slot="2">
              <span slot="title">A Few More Things</span>
              <span slot="desc">Slot 2</span>
              <SSProSimulator :username="username" :domain="domain" :icon="icon"/>
            </OnboardingStep>
            <OnboardingStep slot="3">
              <span slot="title">Almost There</span>
              <span slot="desc">Slot 3</span>
              <SSProSimulator :username="username" :domain="domain" :icon="icon"/>
            </OnboardingStep>
            <OnboardingStep slot="4">
              <span slot="title">Getting Started</span>
              <span slot="desc">Slot 4</span>
              <SSProSimulator :username="username" :domain="domain" :icon="icon"/>
            </OnboardingStep>
          </Onboarding>
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
          <td>steps</td>
          <td>Object</td>
          <td>null</td>
          <td><code>[{name: "Step Name", complete: Boolean}]</code></td>
        </tr>
        <tr>
          <td>stepLocation</td>
          <td>string</td>
          <td>'left'</td>
          <td>
            Location of Progress Bar: <code>left</code> or <code>top</code>
          </td>
        </tr>
        <tr>
          <td>currentStep</td>
          <td>number</td>
          <td>null</td>
          <td>The number of the step you are on</td>
        </tr>
        <tr>
          <td>completeHandler</td>
          <td>Function</td>
          <td>null</td>
          <td>
            Function to perform when <code>complete</code> button is clicked
          </td>
        </tr>
        <tr>
          <td>continueHandler</td>
          <td>Function</td>
          <td>null</td>
          <td>
            Function to perform when <code>continue</code> button is clicked
          </td>
        </tr>
        <tr>
          <td>skipHandler</td>
          <td>Function</td>
          <td>null</td>
          <td>Function to perform when <code>skip</code> is clicked</td>
        </tr>
        <tr>
          <td>previousHandler</td>
          <td>Function</td>
          <td>null</td>
          <td>
            Function to perform when <code>previous</code> button is clicked
          </td>
        </tr>
        <tr>
          <td>skippable</td>
          <td>boolean</td>
          <td>null</td>
          <td>make steps skippable</td>
        </tr>
        <tr>
          <td>disableControls</td>
          <td>boolean</td>
          <td>false</td>
          <td>to disable controls</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import DemoSection from "./../components/DemoSection.vue";
import Onboarding from "./../components/Onboarding.vue";
import OnboardingStep from "./../components/OnboardingStep.vue";
import OnboardingsCode from "./Onboardings.vue?raw";
import SSProSimulator from "./../components/SSProSimulator.vue";

@Component({
  components: {
    DemoSection,
    Onboarding,
    OnboardingStep,
    OnboardingsCode,
    SSProSimulator
  }
})
export default class Onboardings extends Vue {
  demoCode = OnboardingsCode;
  currentStep: number = 1;

  steps: Object = [
    { name: "Donations", complete: false },
    { name: "Cloudbot", complete: false },
    { name: "Streamlabs OBS", complete: false },
    { name: "Alert Box", complete: false }
  ];

  stepsTest: Object = [
    { complete: false },
    { complete: false },
    { complete: false },
    { complete: false }
  ];

  continueFunc() {
    this.stepsTest[this.currentStep - 1].complete = true;
    this.currentStep++;
  }

  skipFunc() {
    this.currentStep++;
  }

  previousFunc() {
    this.currentStep--;
  }

  completeFunc() {
    console.log("complete clicked");
  }

  username = "morganleee";
  icon =
    "https://static-cdn.jtvnw.net/jtv_user_pictures/9dfce03d-25cc-4737-96d2-2ecf6924bebe-profile_image-70x70.jpg";

  domain = "morganleeeeeeeeeee.com";
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
let Onboardings$1 = class Onboardings extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", OnboardingsCode);
    __publicField(this, "currentStep", 1);
    __publicField(this, "steps", [
      { name: "Donations", complete: false },
      { name: "Cloudbot", complete: false },
      { name: "Streamlabs OBS", complete: false },
      { name: "Alert Box", complete: false }
    ]);
    __publicField(this, "stepsTest", [
      { complete: false },
      { complete: false },
      { complete: false },
      { complete: false }
    ]);
    __publicField(this, "username", "morganleee");
    __publicField(this, "icon", "https://static-cdn.jtvnw.net/jtv_user_pictures/9dfce03d-25cc-4737-96d2-2ecf6924bebe-profile_image-70x70.jpg");
    __publicField(this, "domain", "morganleeeeeeeeeee.com");
  }
  continueFunc() {
    this.stepsTest[this.currentStep - 1].complete = true;
    this.currentStep++;
  }
  skipFunc() {
    this.currentStep++;
  }
  previousFunc() {
    this.currentStep--;
  }
  completeFunc() {
    console.log("complete clicked");
  }
};
Onboardings$1 = __decorateClass([
  Component({
    components: {
      DemoSection,
      Onboarding: Onboarding2,
      OnboardingStep: OnboardingStep2,
      OnboardingsCode,
      SSProSimulator
    }
  })
], Onboardings$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Onboarding - Named Steps")]), _c("DemoSection", {
    attrs: {
      "title": "Onboarding - Named Steps",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Onboarding", {
          attrs: {
            "steps": _vm.steps,
            "skippable": true,
            "currentStep": _vm.currentStep,
            "stepLocation": "top",
            "skipHandler": _vm.skipFunc,
            "prevHandler": _vm.previousFunc,
            "continueHandler": _vm.continueFunc,
            "completeHandler": _vm.completeFunc
          }
        }, [_c("OnboardingStep", {
          attrs: {
            "slot": "1"
          },
          slot: "1"
        }, [_c("span", {
          attrs: {
            "slot": "title"
          },
          slot: "title"
        }, [_vm._v("Getting Started")]), _c("span", {
          attrs: {
            "slot": "desc"
          },
          slot: "desc"
        }, [_vm._v("Slot 1")]), _c("SSProSimulator", {
          attrs: {
            "username": _vm.username,
            "domain": _vm.domain,
            "icon": _vm.icon
          }
        })], 1), _c("OnboardingStep", {
          attrs: {
            "slot": "2"
          },
          slot: "2"
        }, [_c("span", {
          attrs: {
            "slot": "title"
          },
          slot: "title"
        }, [_vm._v("A Few More Things")]), _c("span", {
          attrs: {
            "slot": "desc"
          },
          slot: "desc"
        }, [_vm._v("Slot 2")]), _c("SSProSimulator", {
          attrs: {
            "username": _vm.username,
            "domain": _vm.domain,
            "icon": _vm.icon
          }
        })], 1), _c("OnboardingStep", {
          attrs: {
            "slot": "3"
          },
          slot: "3"
        }, [_c("span", {
          attrs: {
            "slot": "title"
          },
          slot: "title"
        }, [_vm._v("Almost There")]), _c("span", {
          attrs: {
            "slot": "desc"
          },
          slot: "desc"
        }, [_vm._v("Slot 3")]), _c("SSProSimulator", {
          attrs: {
            "username": _vm.username,
            "domain": _vm.domain,
            "icon": _vm.icon
          }
        })], 1), _c("OnboardingStep", {
          attrs: {
            "slot": "4"
          },
          slot: "4"
        }, [_c("span", {
          attrs: {
            "slot": "title"
          },
          slot: "title"
        }, [_vm._v("Getting Started")]), _c("span", {
          attrs: {
            "slot": "desc"
          },
          slot: "desc"
        }, [_vm._v("Slot 4")]), _c("SSProSimulator", {
          attrs: {
            "username": _vm.username,
            "domain": _vm.domain,
            "icon": _vm.icon
          }
        })], 1)], 1)];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("DemoSection", {
    attrs: {
      "title": "Default",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Onboarding", {
          attrs: {
            "steps": _vm.stepsTest,
            "skippable": true,
            "currentStep": _vm.currentStep,
            "stepLocation": "top",
            "skipHandler": _vm.skipFunc,
            "prevHandler": _vm.previousFunc,
            "continueHandler": _vm.continueFunc,
            "completeHandler": _vm.completeFunc
          }
        }, [_c("OnboardingStep", {
          attrs: {
            "slot": "1"
          },
          slot: "1"
        }, [_c("span", {
          attrs: {
            "slot": "title"
          },
          slot: "title"
        }, [_vm._v("Getting Started")]), _c("span", {
          attrs: {
            "slot": "desc"
          },
          slot: "desc"
        }, [_vm._v("Slot 1")]), _c("SSProSimulator", {
          attrs: {
            "username": _vm.username,
            "domain": _vm.domain,
            "icon": _vm.icon
          }
        })], 1), _c("OnboardingStep", {
          attrs: {
            "slot": "2"
          },
          slot: "2"
        }, [_c("span", {
          attrs: {
            "slot": "title"
          },
          slot: "title"
        }, [_vm._v("A Few More Things")]), _c("span", {
          attrs: {
            "slot": "desc"
          },
          slot: "desc"
        }, [_vm._v("Slot 2")]), _c("SSProSimulator", {
          attrs: {
            "username": _vm.username,
            "domain": _vm.domain,
            "icon": _vm.icon
          }
        })], 1), _c("OnboardingStep", {
          attrs: {
            "slot": "3"
          },
          slot: "3"
        }, [_c("span", {
          attrs: {
            "slot": "title"
          },
          slot: "title"
        }, [_vm._v("Almost There")]), _c("span", {
          attrs: {
            "slot": "desc"
          },
          slot: "desc"
        }, [_vm._v("Slot 3")]), _c("SSProSimulator", {
          attrs: {
            "username": _vm.username,
            "domain": _vm.domain,
            "icon": _vm.icon
          }
        })], 1), _c("OnboardingStep", {
          attrs: {
            "slot": "4"
          },
          slot: "4"
        }, [_c("span", {
          attrs: {
            "slot": "title"
          },
          slot: "title"
        }, [_vm._v("Getting Started")]), _c("span", {
          attrs: {
            "slot": "desc"
          },
          slot: "desc"
        }, [_vm._v("Slot 4")]), _c("SSProSimulator", {
          attrs: {
            "username": _vm.username,
            "domain": _vm.domain,
            "icon": _vm.icon
          }
        })], 1)], 1)];
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
  }, [_c("h1", [_vm._v("Onboarding")]), _c("p", [_vm._v("Onboarding component - now with all logic outside of component!")]), _c("pre", [_c("code", [_vm._v('import { Onboarding, OnboardingStep } from "streamlabs-beaker"\n\n@Component({\n  components: {\n    Onboarding,\n    OnboardingStep,\n  }\n})')])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("steps")]), _c("td", [_vm._v("Object")]), _c("td", [_vm._v("null")]), _c("td", [_c("code", [_vm._v('[{name: "Step Name", complete: Boolean}]')])])]), _c("tr", [_c("td", [_vm._v("stepLocation")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("'left'")]), _c("td", [_vm._v(" Location of Progress Bar: "), _c("code", [_vm._v("left")]), _vm._v(" or "), _c("code", [_vm._v("top")])])]), _c("tr", [_c("td", [_vm._v("currentStep")]), _c("td", [_vm._v("number")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("The number of the step you are on")])]), _c("tr", [_c("td", [_vm._v("completeHandler")]), _c("td", [_vm._v("Function")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Function to perform when "), _c("code", [_vm._v("complete")]), _vm._v(" button is clicked ")])]), _c("tr", [_c("td", [_vm._v("continueHandler")]), _c("td", [_vm._v("Function")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Function to perform when "), _c("code", [_vm._v("continue")]), _vm._v(" button is clicked ")])]), _c("tr", [_c("td", [_vm._v("skipHandler")]), _c("td", [_vm._v("Function")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Function to perform when "), _c("code", [_vm._v("skip")]), _vm._v(" is clicked")])]), _c("tr", [_c("td", [_vm._v("previousHandler")]), _c("td", [_vm._v("Function")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Function to perform when "), _c("code", [_vm._v("previous")]), _vm._v(" button is clicked ")])]), _c("tr", [_c("td", [_vm._v("skippable")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("make steps skippable")])]), _c("tr", [_c("td", [_vm._v("disableControls")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("to disable controls")])])])]);
}];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Onboardings$1,
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
const Onboardings2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Onboardings2 as default
};
//# sourceMappingURL=Onboardings-006aae9b.js.map
