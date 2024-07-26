var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { B as Button } from "./Button-8b9ecd72.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import { M as ModalComp } from "./ModalComp-0ba07c9c.js";
import "./Accordion-7aa9b24d.js";
import "./Badge-2f139b6a.js";
import "./Spinner-e272b66e.js";
import "./index-213b3b83.js";
const ModalsCode = `<template>
  <div>
    <div class="section">
      <h1>Modal</h1>
      <pre><code>import { ModalComp } from 'streamlabs-beaker';

components: {
  ModalComp
}</code></pre>
    </div>

    <div class="section">
      <h2>Modal Basic</h2>
      <DemoSection title="Modal Basic" :code="demoCode">
        <template #components>
          <ModalComp
            name="modal-basic"
            type="basic"
            title="UI Modal"
            subTitle="Subtitle"
            :clickToClose="false"
            text="
              Save combining multiple windows like Streamlabels, Twitch Chat,
              Twitch Dashboard, Video, Streamlabs Dashboard, OBS etc into a
              live view.
            "
            >Slots Available!</ModalComp
          >
        </template>
      </DemoSection>

      <div class="s-button-container--left">
        <Button
          variation="default"
          title="modal basic"
          @click="$modal.show('modal-basic')"
        />
      </div>
    </div>

    <div class="section">
      <h2>Modal Subscribe</h2>
      <p>Used once subscribe.</p>

      <DemoSection title="Modal Subscribe" :code="demoCode">
        <template #components>
          <ModalComp
            type="subscribe"
            :scrollable="true"
            title="Streamlabs"
            subTitle="Never pay for GIFs and effects again!"
            text="
              Get unlimited free GIFs and effects that will show up on all
              alerts on all channels! You’ll also get a fancy ‘Pro’ badge next
              to your username on your donations.
            "
            subscribe-text="galazy83 donated $50.00!"
            subscribe-message="Thanks for the stream. Go CivRyan!"
            notes="You may cancel your subscription at any time."
          />
        </template>
      </DemoSection>

      <div class="button-container button-container--left">
        <Button
          variation="default"
          title="modal subscribe"
          @click="$modal.show('modal-subscribe')"
        />
      </div>
    </div>

    <div class="section">
      <h2>Modal Redirect</h2>
      <p>Used for redirect.</p>

      <DemoSection title="Modal Redirect" :code="demoCode">
        <template #components>
          <ModalComp
            type="redirect"
            title="Redirecting..."
            text="
              Redirecting you to PayPal to update your method of payment.
              Click here if you have been waiting longer than 5 seconds.
            "
          />
        </template>
      </DemoSection>

      <div class="button-container button-container--left">
        <Button
          variation="default"
          title="modal redirect"
          @click="$modal.show('modal-redirect')"
        />
      </div>
    </div>

    <div class="section">
      <h2>Modal Confirm</h2>
      <p>Used when needed to let the user confirm.</p>

      <DemoSection title="Modal Confirm" :code="demoCode">
        <template #components>
          <ModalComp
            type="confirmation"
            :width="400"
            subTitle="Delete ‘Streamlabs Pillow'"
            text="
              Are you sure you want to delete the merch item ‘Streamlabs
              Pillow’? This action cannot be undone.
            "
            @confirm="() => {}"
            confirmButtonText="Delete"
          />
        </template>
      </DemoSection>

      <div class="button-container button-container--left">
        <Button
          :variation="'warning'"
          :title="'modal confirmation'"
          @click="$modal.show('modal-confirmation')"
        ></Button>
      </div>
    </div>

    <div class="section">
      <h2>Modal Welcome Prime</h2>
      <p>Used for welcome prime</p>

      <DemoSection title="Modal Welcome Prime" :code="demoCode">
        <template #components>
          <ModalComp
            type="welcome-prime"
            :width="600"
            :hasPrimeCloseButton="true"
            @onClickPrime="test"
          />
        </template>
      </DemoSection>

      <div class="button-container button-container--left">
        <Button
          variation="default"
          title="modal welcome prime"
          @click="$modal.show('modal-welcome-prime')"
        />
      </div>
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
          <td>
            name is optional. if you need specific name for the modal, use name
            prop. Also don't forget to change $modal.show() to the name you set
            as prop.
            <br />ex.
            <code>:name="'modal-basic2'"</code>
            <code>$modal.show('modal-basic2')</code>
          </td>
        </tr>
        <tr>
          <td>width</td>
          <td>number</td>
          <td>600</td>
          <td>modal width</td>
        </tr>
        <tr>
          <td>minWidth</td>
          <td>number</td>
          <td>600</td>
          <td>modal minimum width</td>
        </tr>
        <tr>
          <td>type</td>
          <td>string</td>
          <td>null</td>
          <td>
            Type of the modal. Options are basic, subscribe, redirect, and
            confirmation
          </td>
        </tr>
        <tr>
          <td>title</td>
          <td>string</td>
          <td>null</td>
          <td>title to display</td>
        </tr>
        <tr>
          <td>subTitle</td>
          <td>string</td>
          <td>null</td>
          <td>sub title to display</td>
        </tr>
        <tr>
          <td>text</td>
          <td>string</td>
          <td>null</td>
          <td>text to display</td>
        </tr>
        <tr>
          <td>subscribeText</td>
          <td>string</td>
          <td>null</td>
          <td>
            subscribe text only used for
            <code>subscribe</code>
          </td>
        </tr>
        <tr>
          <td>subscribeMessage</td>
          <td>string</td>
          <td>null</td>
          <td>
            subscribe message only used for
            <code>subscribe</code>
          </td>
        </tr>
        <tr>
          <td>notes</td>
          <td>string</td>
          <td>null</td>
          <td>
            the note of the bottom only used for
            <code>subscribe</code>
          </td>
        </tr>
        <tr>
          <td>@confirm</td>
          <td>Function</td>
          <td>null</td>
          <td>
            Callback function when confirmed (in Modal Basic, Modal
            Confirmation)
          </td>
        </tr>
        <tr>
          <td>confirmButtonText</td>
          <td>string</td>
          <td>Confirm</td>
          <td>Confirm button text (in Modal Basic, Modal Confirmation)</td>
        </tr>
        <tr>
          <td>buttonVariation</td>
          <td>string</td>
          <td>warning</td>
          <td>
            Pass in
            <code>action</code> if it's a confirmation that doesn't warrant a
            warning (only in Modal Confirmation). In Modal Subscribe default is
            <code>subscribe</code>. Can be set to <code>paypal</code> and
            <code>paypal-blue</code> variations.
          </td>
        </tr>
        <tr>
          <td>buttonTitle</td>
          <td>string</td>
          <td>Subscribe with PayPal</td>
          <td>Set subscribe button title (only in Modal Subscribe).</td>
        </tr>
        <tr>
          <td>buttonPrice</td>
          <td>string</td>
          <td>$5.99</td>
          <td>Set subscribe button title (only in Modal Subscribe).</td>
        </tr>
        <tr>
          <td>proBadge</td>
          <td>boolean</td>
          <td>true</td>
          <td>
            Displays
            <code>Pro</code> badge in modal header (only in Modal Subscribe).
          </td>
        </tr>
        <tr>
          <td>customPreview</td>
          <td>boolean</td>
          <td>false</td>
          <td>
            Allows for custom preview above modal text. Uses
            <code>preview</code> slot.
            <code>
              &lt;template #preview&gt;Custom Preview HTML&lt;template&gt;
            </code>
            (only in Modal Subscribe).
          </td>
        </tr>
        <tr>
          <td>buttonTitle</td>
          <td>string</td>
          <td>Subscribe with PayPal</td>
          <td>Set subscribe button title (only in Modal Subscribe).</td>
        </tr>
        <tr>
          <td>buttonTitle</td>
          <td>string</td>
          <td>$5.99</td>
          <td>Set subscribe button title (only in Modal Subscribe).</td>
        </tr>
        <tr>
          <td>primeButtonText</td>
          <td>string</td>
          <td>Continue</td>
          <td>Set button text below (only in Modal Welcom Prime).</td>
        </tr>
        <tr>
          <td>hasPrimeCloseButton</td>
          <td>boolean</td>
          <td>false</td>
          <td>Set the close button right top (only in Modal Welcom Prime).</td>
        </tr>
        <tr>
          <td>@onClickPrime</td>
          <td>Function</td>
          <td>null</td>
          <td>
            Callback function when click the button below (only in Modal Welcom
            Prime).
          </td>
        </tr>
        <tr>
          <td>clickToClose</td>
          <td>Boolean</td>
          <td>true</td>
          <td>
            If set to false, it will not be possible to close modal by clicking
            on the background or by pressing Esc key. (only in Modal Basic).
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "./../components/Button.vue";
import DemoSection from "./../components/DemoSection.vue";
import ModalComp from "./../components/ModalComp.vue";
import ModalsCode from "./Modals.vue?raw";

@Component({
  components: {
    Button,
    DemoSection,
    ModalComp,
  },
})
export default class Modals extends Vue {
  demoCode = ModalsCode;
  test() {
    console.log("test");
  }
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
let Modals$1 = class Modals extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", ModalsCode);
  }
  test() {
    console.log("test");
  }
};
Modals$1 = __decorateClass([
  Component({
    components: {
      Button,
      DemoSection,
      ModalComp
    }
  })
], Modals$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Modal Basic")]), _c("DemoSection", {
    attrs: {
      "title": "Modal Basic",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("ModalComp", {
          attrs: {
            "name": "modal-basic",
            "type": "basic",
            "title": "UI Modal",
            "subTitle": "Subtitle",
            "clickToClose": false,
            "text": "\n              Save combining multiple windows like Streamlabels, Twitch Chat,\n              Twitch Dashboard, Video, Streamlabs Dashboard, OBS etc into a\n              live view.\n            "
          }
        }, [_vm._v("Slots Available!")])];
      },
      proxy: true
    }])
  }), _c("div", {
    staticClass: "s-button-container--left"
  }, [_c("Button", {
    attrs: {
      "variation": "default",
      "title": "modal basic"
    },
    on: {
      "click": function($event) {
        return _vm.$modal.show("modal-basic");
      }
    }
  })], 1)], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Modal Subscribe")]), _c("p", [_vm._v("Used once subscribe.")]), _c("DemoSection", {
    attrs: {
      "title": "Modal Subscribe",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("ModalComp", {
          attrs: {
            "type": "subscribe",
            "scrollable": true,
            "title": "Streamlabs",
            "subTitle": "Never pay for GIFs and effects again!",
            "text": "\n              Get unlimited free GIFs and effects that will show up on all\n              alerts on all channels! You’ll also get a fancy ‘Pro’ badge next\n              to your username on your donations.\n            ",
            "subscribe-text": "galazy83 donated $50.00!",
            "subscribe-message": "Thanks for the stream. Go CivRyan!",
            "notes": "You may cancel your subscription at any time."
          }
        })];
      },
      proxy: true
    }])
  }), _c("div", {
    staticClass: "button-container button-container--left"
  }, [_c("Button", {
    attrs: {
      "variation": "default",
      "title": "modal subscribe"
    },
    on: {
      "click": function($event) {
        return _vm.$modal.show("modal-subscribe");
      }
    }
  })], 1)], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Modal Redirect")]), _c("p", [_vm._v("Used for redirect.")]), _c("DemoSection", {
    attrs: {
      "title": "Modal Redirect",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("ModalComp", {
          attrs: {
            "type": "redirect",
            "title": "Redirecting...",
            "text": "\n              Redirecting you to PayPal to update your method of payment.\n              Click here if you have been waiting longer than 5 seconds.\n            "
          }
        })];
      },
      proxy: true
    }])
  }), _c("div", {
    staticClass: "button-container button-container--left"
  }, [_c("Button", {
    attrs: {
      "variation": "default",
      "title": "modal redirect"
    },
    on: {
      "click": function($event) {
        return _vm.$modal.show("modal-redirect");
      }
    }
  })], 1)], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Modal Confirm")]), _c("p", [_vm._v("Used when needed to let the user confirm.")]), _c("DemoSection", {
    attrs: {
      "title": "Modal Confirm",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("ModalComp", {
          attrs: {
            "type": "confirmation",
            "width": 400,
            "subTitle": "Delete ‘Streamlabs Pillow'",
            "text": "\n              Are you sure you want to delete the merch item ‘Streamlabs\n              Pillow’? This action cannot be undone.\n            ",
            "confirmButtonText": "Delete"
          },
          on: {
            "confirm": function() {
            }
          }
        })];
      },
      proxy: true
    }])
  }), _c("div", {
    staticClass: "button-container button-container--left"
  }, [_c("Button", {
    attrs: {
      "variation": "warning",
      "title": "modal confirmation"
    },
    on: {
      "click": function($event) {
        return _vm.$modal.show("modal-confirmation");
      }
    }
  })], 1)], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Modal Welcome Prime")]), _c("p", [_vm._v("Used for welcome prime")]), _c("DemoSection", {
    attrs: {
      "title": "Modal Welcome Prime",
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
            "onClickPrime": _vm.test
          }
        })];
      },
      proxy: true
    }])
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
  })], 1)], 1), _vm._m(1)]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Modal")]), _c("pre", [_c("code", [_vm._v("import { ModalComp } from 'streamlabs-beaker';\n\ncomponents: {\n  ModalComp\n}")])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Props")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("name")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" name is optional. if you need specific name for the modal, use name prop. Also don't forget to change $modal.show() to the name you set as prop. "), _c("br"), _vm._v("ex. "), _c("code", [_vm._v(`:name="'modal-basic2'"`)]), _c("code", [_vm._v("$modal.show('modal-basic2')")])])]), _c("tr", [_c("td", [_vm._v("width")]), _c("td", [_vm._v("number")]), _c("td", [_vm._v("600")]), _c("td", [_vm._v("modal width")])]), _c("tr", [_c("td", [_vm._v("minWidth")]), _c("td", [_vm._v("number")]), _c("td", [_vm._v("600")]), _c("td", [_vm._v("modal minimum width")])]), _c("tr", [_c("td", [_vm._v("type")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Type of the modal. Options are basic, subscribe, redirect, and confirmation ")])]), _c("tr", [_c("td", [_vm._v("title")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("title to display")])]), _c("tr", [_c("td", [_vm._v("subTitle")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("sub title to display")])]), _c("tr", [_c("td", [_vm._v("text")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("text to display")])]), _c("tr", [_c("td", [_vm._v("subscribeText")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" subscribe text only used for "), _c("code", [_vm._v("subscribe")])])]), _c("tr", [_c("td", [_vm._v("subscribeMessage")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" subscribe message only used for "), _c("code", [_vm._v("subscribe")])])]), _c("tr", [_c("td", [_vm._v("notes")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" the note of the bottom only used for "), _c("code", [_vm._v("subscribe")])])]), _c("tr", [_c("td", [_vm._v("@confirm")]), _c("td", [_vm._v("Function")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Callback function when confirmed (in Modal Basic, Modal Confirmation) ")])]), _c("tr", [_c("td", [_vm._v("confirmButtonText")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("Confirm")]), _c("td", [_vm._v("Confirm button text (in Modal Basic, Modal Confirmation)")])]), _c("tr", [_c("td", [_vm._v("buttonVariation")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("warning")]), _c("td", [_vm._v(" Pass in "), _c("code", [_vm._v("action")]), _vm._v(" if it's a confirmation that doesn't warrant a warning (only in Modal Confirmation). In Modal Subscribe default is "), _c("code", [_vm._v("subscribe")]), _vm._v(". Can be set to "), _c("code", [_vm._v("paypal")]), _vm._v(" and "), _c("code", [_vm._v("paypal-blue")]), _vm._v(" variations. ")])]), _c("tr", [_c("td", [_vm._v("buttonTitle")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("Subscribe with PayPal")]), _c("td", [_vm._v("Set subscribe button title (only in Modal Subscribe).")])]), _c("tr", [_c("td", [_vm._v("buttonPrice")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("$5.99")]), _c("td", [_vm._v("Set subscribe button title (only in Modal Subscribe).")])]), _c("tr", [_c("td", [_vm._v("proBadge")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v(" Displays "), _c("code", [_vm._v("Pro")]), _vm._v(" badge in modal header (only in Modal Subscribe). ")])]), _c("tr", [_c("td", [_vm._v("customPreview")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v(" Allows for custom preview above modal text. Uses "), _c("code", [_vm._v("preview")]), _vm._v(" slot. "), _c("code", [_vm._v(" <template #preview>Custom Preview HTML<template> ")]), _vm._v(" (only in Modal Subscribe). ")])]), _c("tr", [_c("td", [_vm._v("buttonTitle")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("Subscribe with PayPal")]), _c("td", [_vm._v("Set subscribe button title (only in Modal Subscribe).")])]), _c("tr", [_c("td", [_vm._v("buttonTitle")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("$5.99")]), _c("td", [_vm._v("Set subscribe button title (only in Modal Subscribe).")])]), _c("tr", [_c("td", [_vm._v("primeButtonText")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("Continue")]), _c("td", [_vm._v("Set button text below (only in Modal Welcom Prime).")])]), _c("tr", [_c("td", [_vm._v("hasPrimeCloseButton")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("Set the close button right top (only in Modal Welcom Prime).")])]), _c("tr", [_c("td", [_vm._v("@onClickPrime")]), _c("td", [_vm._v("Function")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Callback function when click the button below (only in Modal Welcom Prime). ")])]), _c("tr", [_c("td", [_vm._v("clickToClose")]), _c("td", [_vm._v("Boolean")]), _c("td", [_vm._v("true")]), _c("td", [_vm._v(" If set to false, it will not be possible to close modal by clicking on the background or by pressing Esc key. (only in Modal Basic). ")])])])]);
}];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Modals$1,
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
const Modals2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Modals2 as default
};
//# sourceMappingURL=Modals-0bff43ec.js.map
