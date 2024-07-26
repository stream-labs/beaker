var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { V as Vue, C as Component, P as Prop, n as normalizeComponent } from "./index-158ccef1.js";
import { B as Button } from "./Button-8b9ecd72.js";
import { i as index } from "./vue-mq.es-228d853f.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import { l as logo } from "./logo-8a0a8934.js";
import "./Accordion-7aa9b24d.js";
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
Vue.use(index, {
  breakpoints: {
    // default breakpoints - customize this
    sm: 900,
    md: 1250,
    lg: Infinity
  },
  defaultBreakpoint: "sm"
  // customize this for SSR
});
let CallToAction$1 = class CallToAction extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "bgColor");
    __publicField(this, "titleColor");
    __publicField(this, "subTitleColor");
    __publicField(this, "thumbnail");
    __publicField(this, "hasThumbnail");
    __publicField(this, "thumbnailWidth");
    __publicField(this, "thumbnailHeight");
    __publicField(this, "thumbnailBg");
    __publicField(this, "thumbnailAlt");
    __publicField(this, "title");
    __publicField(this, "description");
    __publicField(this, "buttonVariation");
    __publicField(this, "buttonTitle");
    __publicField(this, "buttonDescription");
    __publicField(this, "buttonHref");
    __publicField(this, "buttonTo");
    __publicField(this, "buttonTag");
    __publicField(this, "buttonClick");
    __publicField(this, "buttonBg");
    __publicField(this, "buttonTextColor");
    __publicField(this, "customButtonSlot");
    __publicField(this, "bgPrime");
    __publicField(this, "buttonIcon");
    __publicField(this, "$mq");
    __publicField(this, "callToActiontitleColor", {
      color: this.titleColor
    });
    __publicField(this, "callToActionSubTitleColor", {
      color: this.subTitleColor
    });
    __publicField(this, "callToActionBg", {
      backgroundColor: this.bgColor
    });
    __publicField(this, "callToActionThumb", {
      width: `${this.thumbnailWidth}px`,
      height: `${this.thumbnailHeight}px`,
      backgroundColor: this.thumbnailBg
    });
  }
  get callToActionMq() {
    return this.$mq === "sm" ? "s-call-to-action-mq" : "";
  }
  get callToActionThumbMq() {
    return this.$mq === "sm" ? "s-call-to-action__thumb-mq" : "";
  }
  get callToActionDescMq() {
    return this.$mq === "sm" ? "s-call-to-action__description-mq" : "";
  }
  get titleMq() {
    return this.$mq === "sm" ? "s-title-mq" : "";
  }
};
__decorateClass$1([
  Prop()
], CallToAction$1.prototype, "bgColor", 2);
__decorateClass$1([
  Prop()
], CallToAction$1.prototype, "titleColor", 2);
__decorateClass$1([
  Prop()
], CallToAction$1.prototype, "subTitleColor", 2);
__decorateClass$1([
  Prop({ default: "https://cdn.streamlabs.com/static/kevin-standard.svg" })
], CallToAction$1.prototype, "thumbnail", 2);
__decorateClass$1([
  Prop({ default: true })
], CallToAction$1.prototype, "hasThumbnail", 2);
__decorateClass$1([
  Prop({ default: 80 })
], CallToAction$1.prototype, "thumbnailWidth", 2);
__decorateClass$1([
  Prop({ default: 80 })
], CallToAction$1.prototype, "thumbnailHeight", 2);
__decorateClass$1([
  Prop()
], CallToAction$1.prototype, "thumbnailBg", 2);
__decorateClass$1([
  Prop({ default: "Get started by downloading Streamlabs OBS" })
], CallToAction$1.prototype, "thumbnailAlt", 2);
__decorateClass$1([
  Prop({ default: "Get started by downloading Streamlabs OBS" })
], CallToAction$1.prototype, "title", 2);
__decorateClass$1([
  Prop({
    default: "Over 800k creators use Streamlabs OBS daily, delivering entertainment."
  })
], CallToAction$1.prototype, "description", 2);
__decorateClass$1([
  Prop({ default: "slobs-download" })
], CallToAction$1.prototype, "buttonVariation", 2);
__decorateClass$1([
  Prop({ default: "Download Streamlabs OBS" })
], CallToAction$1.prototype, "buttonTitle", 2);
__decorateClass$1([
  Prop()
], CallToAction$1.prototype, "buttonDescription", 2);
__decorateClass$1([
  Prop()
], CallToAction$1.prototype, "buttonHref", 2);
__decorateClass$1([
  Prop()
], CallToAction$1.prototype, "buttonTo", 2);
__decorateClass$1([
  Prop()
], CallToAction$1.prototype, "buttonTag", 2);
__decorateClass$1([
  Prop()
], CallToAction$1.prototype, "buttonClick", 2);
__decorateClass$1([
  Prop()
], CallToAction$1.prototype, "buttonBg", 2);
__decorateClass$1([
  Prop()
], CallToAction$1.prototype, "buttonTextColor", 2);
__decorateClass$1([
  Prop({ default: false })
], CallToAction$1.prototype, "customButtonSlot", 2);
__decorateClass$1([
  Prop({ default: false })
], CallToAction$1.prototype, "bgPrime", 2);
__decorateClass$1([
  Prop()
], CallToAction$1.prototype, "buttonIcon", 2);
CallToAction$1 = __decorateClass$1([
  Component({
    components: {
      Button
    }
  })
], CallToAction$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-call-to-action",
    class: _vm.callToActionMq,
    style: _vm.callToActionBg
  }, [_vm.buttonVariation === "prime" | _vm.buttonVariation === "prime-white" ? _c("i", {
    staticClass: "icon-prime prime-bg"
  }) : _vm._e(), _vm.hasThumbnail ? _c("div", {
    staticClass: "s-call-to-action__thumb",
    class: _vm.callToActionThumbMq,
    style: _vm.callToActionThumb
  }, [_c("img", {
    attrs: {
      "src": _vm.thumbnail,
      "alt": _vm.thumbnailAlt
    }
  })]) : _vm._e(), _c("div", {
    staticClass: "s-call-to-action__description",
    class: _vm.callToActionDescMq
  }, [_c("div", {
    staticClass: "s-title",
    class: _vm.titleMq,
    style: _vm.callToActiontitleColor
  }, [_vm._v(" " + _vm._s(_vm.title) + " ")]), _c("div", {
    staticClass: "s-subtitle",
    style: _vm.callToActionSubTitleColor
  }, [_vm._v(" " + _vm._s(_vm.description) + " ")])]), _vm.customButtonSlot ? _vm._t("default") : _c("div", {
    staticClass: "s-button-container s-button-container--right"
  }, [_vm.buttonClick ? _c("Button", {
    attrs: {
      "variation": _vm.buttonVariation,
      "size": "large",
      "title": _vm.buttonTitle,
      "description": _vm.buttonDescription,
      "href": _vm.buttonHref,
      "to": _vm.buttonTo,
      "tag": _vm.buttonTag,
      "bgColor": _vm.buttonBg,
      "icon": _vm.buttonIcon,
      "textColor": _vm.buttonTextColor
    },
    on: {
      "click": _vm.buttonClick
    }
  }) : _c("Button", {
    attrs: {
      "variation": _vm.buttonVariation,
      "size": "large",
      "title": _vm.buttonTitle,
      "description": _vm.buttonDescription,
      "href": _vm.buttonHref,
      "to": _vm.buttonTo,
      "tag": _vm.buttonTag,
      "icon": _vm.buttonIcon,
      "bgColor": _vm.buttonBg,
      "textColor": _vm.buttonTextColor
    }
  })], 1)], 2);
};
var staticRenderFns$1 = [];
const CallToAction_vue_vue_type_style_index_0_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  CallToAction$1,
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
const CallToAction2 = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
const CallToActionCode = `<template>
  <div>
    <div class="section">
      <h1>Call To Action</h1>
      <p>
        You can use our callout component if you need to display an important
        message.
      </p>

      <pre><code>import { CallToAction } from 'streamlabs-beaker';

components: {
  CallToAction
}</code></pre>
    </div>
    <div class="section">
      <h2>Default Call to Action</h2>
      <DemoSection title="Default" :code="demoCode">
        <template #components>
          <CallToAction :buttonClick="test" />
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Custom Call to Action</h2>

      <div class="section">
        <DemoSection title="Custom" :code="demoCode">
          <template #components>
            <CallToAction
              bgColor="#31c3a2"
              titleColor="#ffffff"
              subTitleColor="#ffffff"
              :thumbnail="logo"
              :thumbnailWidth="120"
              :thumbnailHeight="80"
              thumbnailBg="#ffffff"
              title="This is a Custom Call To Action"
              description="A Custom Description"
              buttonVariation="default"
              buttonTitle="Click Me"
              buttonDescription
              buttonTag="a"
              buttonHref="https://google.com"
              buttonBg="#ffffff"
              buttonTextColor="#000000"
            />
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <CallToAction
          :bgColor="'#31c3a2'"
          :titleColor="'#fff'"
          :subTitleColor="'#fff'"
          :title="'This is a Custom Call To Action'"
          :description="'A Custom Description'"
          :hasThumbnail="false"
          :customButtonSlot="true"
        >
          <div class="s-button-container">
            <Button :title="'Using slot'"></Button>
            <Button :title="'Using slot'"></Button>
          </div>
        </CallToAction>
      </div>

      <div class="section">
        <CallToAction
          :bgColor="'#CAA368'"
          :titleColor="'#fff'"
          :subTitleColor="'#fff'"
          :hasThumbnail="false"
          :title="'Join Prime today!'"
          :description="
            'Our premium tool-set for professional content creators.'
          "
          :buttonVariation="'prime-white'"
          :buttonTitle="'Sign Up'"
          :buttonDescription="''"
          :buttonIcon="'prime'"
          :bgPrime="true"
        />
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
            <td>bgColor</td>
            <td>String</td>
            <td>#f5f8fa</td>
            <td>Background color, default color is @day-section (#f5f8fa)</td>
          </tr>

          <tr>
            <td>titleColor</td>
            <td>String</td>
            <td>#09161d</td>
            <td>Title color, default color is @day-title (#09161d)</td>
          </tr>

          <tr>
            <td>subTitleColor</td>
            <td>String</td>
            <td>#4f5e65</td>
            <td>Sub title color, default color is @day-paragraph (#4f5e65)</td>
          </tr>

          <tr>
            <td>thumbnail</td>
            <td>String</td>
            <td>'https://cdn.streamlabs.com/static/kevin-standard.svg'</td>
            <td>A Thumbnail image</td>
          </tr>
          <tr>
            <td>thumbnailBg</td>
            <td>String</td>
            <td>#31C3A2</td>
            <td>
              A Thumbnail background color, default color is @teal (#31C3A2)
            </td>
          </tr>

          <tr>
            <td>thumbnailWidth</td>
            <td>Number</td>
            <td>80</td>
            <td>A Thumbnail width</td>
          </tr>

          <tr>
            <td>thumbnailHeight</td>
            <td>Number</td>
            <td>80</td>
            <td>A Thumbnail height</td>
          </tr>

          <tr>
            <td>thumbnailAlt</td>
            <td>String</td>
            <td>Get started by downloading Streamlabs OBS</td>
            <td>A Thumbnail alt</td>
          </tr>

          <tr>
            <td>title</td>
            <td>String</td>
            <td>Get started by downloading Streamlabs OBS</td>
            <td>Title for the call to action component</td>
          </tr>
          <tr>
            <td>description</td>
            <td>String</td>
            <td>
              Over 800k creators use Streamlabs OBS daily, delivering
              entertainment.
            </td>
            <td>A short description for the call the action component</td>
          </tr>
          <tr>
            <td>buttonVariation</td>
            <td>String</td>
            <td>slobs-download</td>
            <td>Takes any button variation, but 'action' is recomended</td>
          </tr>
          <tr>
            <td>buttonTitle</td>
            <td>String</td>
            <td>Download Streamlabs OBS</td>
            <td>The title for the button</td>
          </tr>
          <tr>
            <td>buttonDescription</td>
            <td>String</td>
            <td>Windows 7+ 245.8MB</td>
            <td>
              Description for 'slobs-download' button variation only, recomended
              left blank otherwise ( :buttonDescription="'" )
            </td>
          </tr>
          <tr>
            <td>buttonBg</td>
            <td>String</td>
            <td>null</td>
            <td>Button background is forced to be changed</td>
          </tr>
          <tr>
            <td>buttonTextColor</td>
            <td>String</td>
            <td>null</td>
            <td>Button text color is forced to be changed</td>
          </tr>

          <tr>
            <td>buttonHref</td>
            <td>String</td>
            <td>null</td>
            <td>
              Used if the the
              <code>type</code> is an <code>a</code> element (links).
            </td>
          </tr>
          <tr>
            <td>buttonTo</td>
            <td>String</td>
            <td>null</td>
            <td>
              Used if the the
              <code>type</code> is a <code>router-link</code>. Define the path.
            </td>
          </tr>
          <tr>
            <td>buttonTag</td>
            <td>String</td>
            <td>null</td>
            <td>
              What type of element the component is. Options are
              <code>button</code>, <code>a</code>,
              <code>router-link</code>
            </td>
          </tr>
          <tr>
            <td>buttonClick</td>
            <td>Function</td>
            <td>null</td>
            <td>Emits a click function.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "./../components/Button.vue";
import CallToAction from "./../components/CallToAction.vue";
import CallToActionCode from "./CallToActions.vue?raw";
import DemoSection from "./../components/DemoSection.vue";
import logo from './../assets/imgs/logo.svg';

@Component({
  components: {
    Button,
    CallToAction,
    DemoSection
  }
})
export default class CallToActions extends Vue {
  demoCode = CallToActionCode;

  logo = logo;

  test() {
    alert("test");
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
let CallToActions$1 = class CallToActions extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", CallToActionCode);
    __publicField(this, "logo", logo);
  }
  test() {
    alert("test");
  }
};
CallToActions$1 = __decorateClass([
  Component({
    components: {
      Button,
      CallToAction: CallToAction2,
      DemoSection
    }
  })
], CallToActions$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Default Call to Action")]), _c("DemoSection", {
    attrs: {
      "title": "Default",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("CallToAction", {
          attrs: {
            "buttonClick": _vm.test
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Custom Call to Action")]), _c("div", {
    staticClass: "section"
  }, [_c("DemoSection", {
    attrs: {
      "title": "Custom",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("CallToAction", {
          attrs: {
            "bgColor": "#31c3a2",
            "titleColor": "#ffffff",
            "subTitleColor": "#ffffff",
            "thumbnail": _vm.logo,
            "thumbnailWidth": 120,
            "thumbnailHeight": 80,
            "thumbnailBg": "#ffffff",
            "title": "This is a Custom Call To Action",
            "description": "A Custom Description",
            "buttonVariation": "default",
            "buttonTitle": "Click Me",
            "buttonDescription": "",
            "buttonTag": "a",
            "buttonHref": "https://google.com",
            "buttonBg": "#ffffff",
            "buttonTextColor": "#000000"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("CallToAction", {
    attrs: {
      "bgColor": "#31c3a2",
      "titleColor": "#fff",
      "subTitleColor": "#fff",
      "title": "This is a Custom Call To Action",
      "description": "A Custom Description",
      "hasThumbnail": false,
      "customButtonSlot": true
    }
  }, [_c("div", {
    staticClass: "s-button-container"
  }, [_c("Button", {
    attrs: {
      "title": "Using slot"
    }
  }), _c("Button", {
    attrs: {
      "title": "Using slot"
    }
  })], 1)])], 1), _c("div", {
    staticClass: "section"
  }, [_c("CallToAction", {
    attrs: {
      "bgColor": "#CAA368",
      "titleColor": "#fff",
      "subTitleColor": "#fff",
      "hasThumbnail": false,
      "title": "Join Prime today!",
      "description": "Our premium tool-set for professional content creators.",
      "buttonVariation": "prime-white",
      "buttonTitle": "Sign Up",
      "buttonDescription": "",
      "buttonIcon": "prime",
      "bgPrime": true
    }
  })], 1), _vm._m(1)])]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Call To Action")]), _c("p", [_vm._v(" You can use our callout component if you need to display an important message. ")]), _c("pre", [_c("code", [_vm._v("import { CallToAction } from 'streamlabs-beaker';\n\ncomponents: {\n  CallToAction\n}")])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Props")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("bgColor")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("#f5f8fa")]), _c("td", [_vm._v("Background color, default color is @day-section (#f5f8fa)")])]), _c("tr", [_c("td", [_vm._v("titleColor")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("#09161d")]), _c("td", [_vm._v("Title color, default color is @day-title (#09161d)")])]), _c("tr", [_c("td", [_vm._v("subTitleColor")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("#4f5e65")]), _c("td", [_vm._v("Sub title color, default color is @day-paragraph (#4f5e65)")])]), _c("tr", [_c("td", [_vm._v("thumbnail")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("'https://cdn.streamlabs.com/static/kevin-standard.svg'")]), _c("td", [_vm._v("A Thumbnail image")])]), _c("tr", [_c("td", [_vm._v("thumbnailBg")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("#31C3A2")]), _c("td", [_vm._v(" A Thumbnail background color, default color is @teal (#31C3A2) ")])]), _c("tr", [_c("td", [_vm._v("thumbnailWidth")]), _c("td", [_vm._v("Number")]), _c("td", [_vm._v("80")]), _c("td", [_vm._v("A Thumbnail width")])]), _c("tr", [_c("td", [_vm._v("thumbnailHeight")]), _c("td", [_vm._v("Number")]), _c("td", [_vm._v("80")]), _c("td", [_vm._v("A Thumbnail height")])]), _c("tr", [_c("td", [_vm._v("thumbnailAlt")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("Get started by downloading Streamlabs OBS")]), _c("td", [_vm._v("A Thumbnail alt")])]), _c("tr", [_c("td", [_vm._v("title")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("Get started by downloading Streamlabs OBS")]), _c("td", [_vm._v("Title for the call to action component")])]), _c("tr", [_c("td", [_vm._v("description")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v(" Over 800k creators use Streamlabs OBS daily, delivering entertainment. ")]), _c("td", [_vm._v("A short description for the call the action component")])]), _c("tr", [_c("td", [_vm._v("buttonVariation")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("slobs-download")]), _c("td", [_vm._v("Takes any button variation, but 'action' is recomended")])]), _c("tr", [_c("td", [_vm._v("buttonTitle")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("Download Streamlabs OBS")]), _c("td", [_vm._v("The title for the button")])]), _c("tr", [_c("td", [_vm._v("buttonDescription")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("Windows 7+ 245.8MB")]), _c("td", [_vm._v(` Description for 'slobs-download' button variation only, recomended left blank otherwise ( :buttonDescription="'" ) `)])]), _c("tr", [_c("td", [_vm._v("buttonBg")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Button background is forced to be changed")])]), _c("tr", [_c("td", [_vm._v("buttonTextColor")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Button text color is forced to be changed")])]), _c("tr", [_c("td", [_vm._v("buttonHref")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Used if the the "), _c("code", [_vm._v("type")]), _vm._v(" is an "), _c("code", [_vm._v("a")]), _vm._v(" element (links). ")])]), _c("tr", [_c("td", [_vm._v("buttonTo")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Used if the the "), _c("code", [_vm._v("type")]), _vm._v(" is a "), _c("code", [_vm._v("router-link")]), _vm._v(". Define the path. ")])]), _c("tr", [_c("td", [_vm._v("buttonTag")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" What type of element the component is. Options are "), _c("code", [_vm._v("button")]), _vm._v(", "), _c("code", [_vm._v("a")]), _vm._v(", "), _c("code", [_vm._v("router-link")])])]), _c("tr", [_c("td", [_vm._v("buttonClick")]), _c("td", [_vm._v("Function")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Emits a click function.")])])])]);
}];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  CallToActions$1,
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
const CallToActions2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  CallToActions2 as default
};
//# sourceMappingURL=CallToActions-289b960e.js.map
