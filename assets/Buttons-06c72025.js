var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { C as Component, V as Vue, E as EventBus, n as normalizeComponent } from "./index-158ccef1.js";
import { A as Accordion } from "./Accordion-7aa9b24d.js";
import { B as Button } from "./Button-8b9ecd72.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
const ButtonCode = `<template>
  <div>
    <div class="section">
      <h1>Buttons</h1>
      <p>
        Our button component is super flexible. It can act as type
        <code>button</code>, <code>a</code> tag or <code>router-link</code>.
        Please note that you may need to use 'ButtonInput' rather than 'Button'
        to avoid issues.
      </p>

      <pre><code>import { Button } from 'streamlabs-beaker';

components: {
  Button
}</code></pre>
    </div>

    <div class="section">
      <h2>Standard Buttons</h2>
      <p>Used throughout website Dashboard.</p>
      <div class="section">
        <h3>Active</h3>
        <DemoSection title="Active" :code="demoCode">
          <template #components>
            <div class="s-button-container s-button-container--left">
              <Button
                variation="default"
                title="Default"
                tag="a"
                href="https://laravel.com/docs/5.8/routing"
              />

              <Button
                variation="action"
                title="Action"
                @click="buttonClick('Action')"
              />

              <Button
                variation="warning"
                title="Warning"
                @click="buttonClick('Warning')"
              />

              <Button
                variation="default"
                title="With icon"
                icon="add-circle"
                @click="buttonClick('With icon')"
              />

              <Button
                variation="default"
                title="Custom Colors"
                bg-color="pink"
                text-color="red"
                @click="buttonClick('Custom Colors')"
              />

              <Button
                variation="prime"
                title="Join Prime"
                icon="prime"
                @click="buttonClick('Join Prime')"
              />

              <Button
                variation="prime-white"
                title="Join Prime"
                icon="prime"
                @click="buttonClick('Join Prime')"
              />

               <Button
                variation="ultra"
                title="Join Ultra"
                icon="ultra"
                @click="buttonClick('Join Ultra')"
              />

              <Button variation="action" @click="buttonClick('Custom Slot')">
                <div slot="custom" class="custom-html">
                  <i class="icon-add-circle"></i>
                  <span>Custom Slot</span>
                </div>
              </Button>
            </div>
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h3>Disabled</h3>
        <DemoSection title="Disabled" :code="demoCode">
          <template #components>
            <div class="s-button-container s-button-container--left">
              <Button
                :variation="'default'"
                :state="'disabled'"
                :title="'Default'"
              />

              <Button
                :variation="'action'"
                :state="'disabled'"
                :title="'Action'"
              />

              <Button
                :variation="'warning'"
                :state="'disabled'"
                :title="'Warning'"
              />

              <Button
                :variation="'default'"
                :state="'disabled'"
                :title="'with icon'"
                :icon="'edit'"
              />
            </div>
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h3>Focus</h3>
        <DemoSection title="Focus" :code="demoCode">
          <template #components>
            <div class="s-button-container s-button-container--left">
              <Button
                :variation="'default'"
                :state="'focused'"
                :title="'Default'"
              />

              <Button
                :variation="'action'"
                :state="'focused'"
                :title="'Action'"
              />

              <Button
                :variation="'warning'"
                :state="'focused'"
                :title="'Warning'"
              />

              <Button
                :variation="'default'"
                :state="'focused'"
                :title="'with icon'"
                :icon="'edit'"
              />
            </div>
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h3>Loading</h3>
        <DemoSection title="Loading" :code="demoCode">
          <template #components>
            <div class="s-button-container s-button-container--left">
              <Button
                :variation="'default'"
                :state="'loading'"
                :title="'Default'"
              />

              <Button
                :variation="'action'"
                :state="'loading'"
                :title="'Action'"
              />

              <Button
                :variation="'warning'"
                :state="'loading'"
                :title="'Warning'"
              />

              <Button
                :variation="'default'"
                :state="'loading'"
                :title="'with icon'"
                :icon="'recent-events'"
              />
            </div>
          </template>
        </DemoSection>

        <p>
          Click
          <a @click="isLoadingExample = !isLoadingExample">here</a> to test.
        </p>

        <Button
          :class="{ 'is-loading': isLoadingExample }"
          :type="'button'"
          :variation="'default'"
          :title="'with icon'"
          :icon="'pop-out-1'"
        />
      </div>
    </div>

    <div class="section">
      <h2>Small Buttons</h2>
      <p>
        Small is the size used on Streamlabs OBS. It is slightly smaller than
        our standard button.
      </p>

      <DemoSection title="Small Buttons" :code="demoCode">
        <template #components>
          <div class="s-button-container s-button-container--left">
            <Button
              :type="'button'"
              :size="'small'"
              :variation="'default'"
              :title="'Default'"
            />

            <Button
              :type="'button'"
              :size="'small'"
              :variation="'action'"
              :title="'Action'"
            />

            <Button
              :type="'button'"
              :size="'small'"
              :variation="'warning'"
              :title="'Warning'"
            />

            <Button
              :type="'button'"
              :size="'small'"
              :variation="'default'"
              :title="'With Icon'"
              :icon="'image'"
            />

            <Button
              :variation="'rewards-standard'"
              :size="'small'"
              :title="'Rewards'"
            />
          </div>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Large Buttons</h2>
      <p>
        Used on website marketing pages and for the Donate button on the tip
        page.
      </p>
      <DemoSection title="Large Buttons" :code="demoCode">
        <template #components>
          <div class="s-button-container s-button-container--left">
            <Button
              :type="'button'"
              :size="'large'"
              :variation="'default'"
              :title="'Default'"
            />

            <Button
              :type="'button'"
              :size="'large'"
              :variation="'action'"
              :title="'Action'"
            />

            <Button
              :type="'button'"
              :size="'large'"
              :variation="'warning'"
              :title="'Warning'"
            />

            <Button
              :type="'button'"
              :size="'large'"
              :variation="'default'"
              :title="'With Icon'"
              :icon="'image'"
            />

            <Button
              :size="'large'"
              :variation="'prime'"
              :title="'Join Prime'"
              :icon="'prime'"
            />
            <Button
              :size="'large'"
              :variation="'prime-white'"
              :title="'Join Prime'"
              :icon="'prime'"
            />
            <Button
              :size="'large'"
              :variation="'ultra'"
              :title="'Join Ultra'"
              :icon="'ultra'"
            />
          </div>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Fixed Width Buttons</h2>
      <p>Used throughout website Dashboard. Width is fixed at 96px.</p>

      <DemoSection title="Fixed Width Buttons" :code="demoCode">
        <template #components>
          <div class="s-button-container s-button-container--left">
            <Button
              type="button"
              size="fixed-width"
              variation="default"
              title="Default"
            />

            <Button
              type="button"
              size="fixed-width"
              variation="action"
              title="Action"
            />

            <Button
              type="button"
              size="fixed-width"
              variation="warning"
              title="Warning"
            />

            <Button
              type="button"
              size="fixed-width"
              variation="default"
              title="'WithIcon"
              icon="image"
            />
          </div>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Full-Width Buttons</h2>
      <div class="section">
        <h3>Default</h3>
        <p>Used within cards and panels in the Dashboard.</p>
        <DemoSection title="Default" :code="demoCode">
          <template #components>
            <Button
              size="full-width"
              variation="default"
              title="Start Giveaway"
            />
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h3>Subscribe</h3>
        <p>Used on the App Platform for Subscribing to Apps.</p>
        <DemoSection title="Subscribe" :code="demoCode">
          <template #components>
            <Button variation="subscribe" title="Subscribe" price="$4.99" />
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h3>Paypal</h3>
        <p>Used on the Tip Page for Subscribing to Pro.</p>
        <DemoSection title="Paypal" :code="demoCode">
          <template #components>
            <Button
              variation="paypal"
              title="Subscribe with PayPal"
              price="$4.99"
            />
          </template>
        </DemoSection>
      </div>

      <div class="section">
        <h3>Download</h3>
        <p>Used for Download Streamlabs OBS buttons.</p>
        <DemoSection title="Download" :code="demoCode">
          <template #components>
            <div class="s-button-container s-button-container--left">
              <Button
                variation="slobs-download"
                title="Download Streamlabs OBS"
              />
              <Button
                variation="slobs-download-landing"
                osType="windows"
              ></Button>
              <Button variation="slobs-download-landing" osType="mac"></Button>
            </div>
          </template>
        </DemoSection>
      </div>
    </div>
    <div class="section">
      <h2>Square Buttons</h2>
      <p>Used for add and subtract number inputs as well as login buttons.</p>
      <DemoSection title="Square Buttons" :code="demoCode">
        <template #components>
          <div class="s-button-container s-button-container--left">
            <Button
              type="button"
              size="square"
              variation="default"
              icon="add"
            />

            <Button
              type="button"
              size="square"
              variation="default"
              icon="subtract"
            />

            <Button
              type="button"
              variation="facebook"
              size="square"
              icon="facebook"
            />

            <Button
              type="button"
              variation="periscope"
              size="square"
              icon="periscope"
            />

            <Button
              type="button"
              variation="mixer"
              size="square"
              icon="mixer"
            />

            <Button
              type="button"
              variation="picarto"
              size="square"
              icon="picarto"
            />

                <Button
              type="button"
              variation="ultra"
              size="square"
              icon="ultra"
            />
          </div>
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Navigation Buttons</h2>
      <p>Used to bring you between different page states.</p>

      <DemoSection title="Navigation Buttons" :code="demoCode">
        <template #components>
          <Button
            variation="navigation"
            icon="back-alt"
            title="Back to Listings"
          />
        </template>
      </DemoSection>
    </div>

    <div class="section">
      <h2>Prime Button Text</h2>
      <p>Used for prime button with text.</p>

      <DemoSection title="Prime Button Text" :code="demoCode">
        <template #components>
          <div class="s-button-container s-button-container--left">
            <Button variation="prime-simple" />
            <Button variation="prime-simple" primeTitle="test" />
          </div>
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
          <td>@click</td>
          <td>Function</td>
          <td>null</td>
          <td>
            Emits a click function. If you are using an event modifier such as
            <code>prevent</code>, use <code>native</code>. For example
            <code>@click.native.prevent</code>.
          </td>
        </tr>
        <tr>
          <td>bgColor</td>
          <td>String</td>
          <td>null</td>
          <td>Used for background color.</td>
        </tr>
        <tr>
          <td>textColor</td>
          <td>String</td>
          <td>null</td>
          <td>Used for text color.</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>String</td>
          <td>null</td>
          <td>
            Use the endings of our custom icons. For example 'icon-settings'
            would be 'settings'. See icons page of the design system for a full
            list.
          </td>
        </tr>
        <tr>
          <td>iconPosition</td>
          <td>String</td>
          <td>left</td>
          <td>
            Positions the icon left or right. If positioned right, the icon will
            have a left margin of 24px.
          </td>
        </tr>
        <tr>
          <td>iconImg</td>
          <td>String</td>
          <td>null</td>
          <td>
            Takes image source string to use an image as an icon. Icon image
            will have a 14px width.
          </td>
        </tr>
        <tr>
          <td>title</td>
          <td>String</td>
          <td>null</td>
          <td>Main button text.</td>
        </tr>
        <tr>
          <td>price</td>
          <td>String</td>
          <td>null</td>
          <td>Used for subscribe buttons in the App Store.</td>
        </tr>
        <tr>
          <td>description</td>
          <td>String</td>
          <td>null</td>
          <td>
            Used for Streamlabs OBS download buttons to describe the version,
            size and compatibility.
          </td>
        </tr>
        <tr>
          <td>href</td>
          <td>String</td>
          <td>null</td>
          <td>
            Used if the the
            <code>type</code> is an <code>a</code> element (links).
          </td>
        </tr>
        <tr>
          <td>size</td>
          <td>String</td>
          <td>standard</td>
          <td>
            Size of the button. Options are
            <code>small</code>, <code>large</code>, <code>square</code>,
            <code>fixed-width</code>, and
            <code>full-width</code>
          </td>
        </tr>
        <tr>
          <td>state</td>
          <td>String</td>
          <td>null</td>
          <td>
            State of the button. Options are
            <code>hover</code>, <code>focus</code>, <code>loading</code> and
            <code>disabled</code>.
          </td>
        </tr>
        <tr>
          <td>type</td>
          <td>String</td>
          <td>null</td>
          <td>Set to string 'submit'.</td>
        </tr>
        <tr>
          <td>to</td>
          <td>String</td>
          <td>null</td>
          <td>
            Used if the the
            <code>type</code> is a <code>router-link</code>. Define the path.
          </td>
        </tr>
        <tr>
          <td>tag</td>
          <td>String</td>
          <td>button</td>
          <td>
            What type of element the component is. Options are
            <code>button</code>, <code>a</code>,
            <code>router-link</code>
          </td>
        </tr>
        <tr>
          <td>target</td>
          <td>String</td>
          <td>_self</td>
          <td>
            Used to set different targets for
            <code>a</code>
            links,
            <code>_self</code>, <code>_blank</code>, <code>_parent</code>,
            <code>_top</code>
          </td>
        </tr>
        <tr>
          <td>primeBgColor</td>
          <td>String</td>
          <td>null</td>
          <td>
            You can use this prop when you set variation as
            <code>prime</code>. Option is only <code>white</code>.
          </td>
        </tr>
        <tr>
          <td>primeTitle</td>
          <td>String</td>
          <td>null</td>
          <td>
            Used for prime button text. You can use this prop when you set
            variation as
            <code>prime-simple</code>
          </td>
        </tr>
        <tr>
          <td>variation</td>
          <td>String</td>
          <td>default</td>
          <td>
            The variation style of a button. Primary options are
            <code>default</code>, <code>action</code>, <code>prime</code> and
            <code>warning</code>. Other options are <code>subscribe</code>,
            <code>paypal</code>, <code>download</code>, and
            <code>navigation</code>. Reward options are
            <code>rewards-standard</code>, <code>rewards-silver</code>,
            <code>rewards-gold</code>, <code>rewards-platinum</code>,
            <code>rewards-diamond</code>, and <code>rewards-legend</code>.
            Platform options are <code>facebook</code>, <code>mixer</code>,
            <code>twitch</code>, <code>youtube</code>, <code>periscope</code>,
            <code>picarto</code>and <code>paypal-blue</code>.
          </td>
        </tr>
        <tr>
          <td>slobsDownloadTitle</td>
          <td>String</td>
          <td>Download Streamlabs</td>
          <td>Used for slobs download landing button title.</td>
        </tr>
        <tr>
          <td>osType</td>
          <td>String</td>
          <td>windows</td>
          <td>
            Used for slobs download landing button icon. Options are
            <code>windows</code> and <code>mac</code>.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accordion from "./../components/Accordion.vue";
import Button from "./../components/Button.vue";
import DemoSection from "./../components/DemoSection.vue";
import ButtonCode from "./Buttons.vue?raw";
import { EventBus } from "./../plugins/event-bus";

@Component({
  components: {
    Accordion,
    Button,
    DemoSection
  }
})
export default class Forms extends Vue {
  isLoading = true;
  isLoadingExample = false;
  demoCode = ButtonCode;

  buttonClick(buttonType) {
    EventBus.$emit("copy-success", \`"\${buttonType}" button clicked\`);
  }
}
<\/script>

<style lang="less" scoped>
.custom-html {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
}
</style>
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
let Forms = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "isLoading", true);
    __publicField(this, "isLoadingExample", false);
    __publicField(this, "demoCode", ButtonCode);
  }
  buttonClick(buttonType) {
    EventBus.$emit("copy-success", `"${buttonType}" button clicked`);
  }
};
Forms = __decorateClass([
  Component({
    components: {
      Accordion,
      Button,
      DemoSection
    }
  })
], Forms);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Standard Buttons")]), _c("p", [_vm._v("Used throughout website Dashboard.")]), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Active")]), _c("DemoSection", {
    attrs: {
      "title": "Active",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("div", {
          staticClass: "s-button-container s-button-container--left"
        }, [_c("Button", {
          attrs: {
            "variation": "default",
            "title": "Default",
            "tag": "a",
            "href": "https://laravel.com/docs/5.8/routing"
          }
        }), _c("Button", {
          attrs: {
            "variation": "action",
            "title": "Action"
          },
          on: {
            "click": function($event) {
              return _vm.buttonClick("Action");
            }
          }
        }), _c("Button", {
          attrs: {
            "variation": "warning",
            "title": "Warning"
          },
          on: {
            "click": function($event) {
              return _vm.buttonClick("Warning");
            }
          }
        }), _c("Button", {
          attrs: {
            "variation": "default",
            "title": "With icon",
            "icon": "add-circle"
          },
          on: {
            "click": function($event) {
              return _vm.buttonClick("With icon");
            }
          }
        }), _c("Button", {
          attrs: {
            "variation": "default",
            "title": "Custom Colors",
            "bg-color": "pink",
            "text-color": "red"
          },
          on: {
            "click": function($event) {
              return _vm.buttonClick("Custom Colors");
            }
          }
        }), _c("Button", {
          attrs: {
            "variation": "prime",
            "title": "Join Prime",
            "icon": "prime"
          },
          on: {
            "click": function($event) {
              return _vm.buttonClick("Join Prime");
            }
          }
        }), _c("Button", {
          attrs: {
            "variation": "prime-white",
            "title": "Join Prime",
            "icon": "prime"
          },
          on: {
            "click": function($event) {
              return _vm.buttonClick("Join Prime");
            }
          }
        }), _c("Button", {
          attrs: {
            "variation": "ultra",
            "title": "Join Ultra",
            "icon": "ultra"
          },
          on: {
            "click": function($event) {
              return _vm.buttonClick("Join Ultra");
            }
          }
        }), _c("Button", {
          attrs: {
            "variation": "action"
          },
          on: {
            "click": function($event) {
              return _vm.buttonClick("Custom Slot");
            }
          }
        }, [_c("div", {
          staticClass: "custom-html",
          attrs: {
            "slot": "custom"
          },
          slot: "custom"
        }, [_c("i", {
          staticClass: "icon-add-circle"
        }), _c("span", [_vm._v("Custom Slot")])])])], 1)];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Disabled")]), _c("DemoSection", {
    attrs: {
      "title": "Disabled",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("div", {
          staticClass: "s-button-container s-button-container--left"
        }, [_c("Button", {
          attrs: {
            "variation": "default",
            "state": "disabled",
            "title": "Default"
          }
        }), _c("Button", {
          attrs: {
            "variation": "action",
            "state": "disabled",
            "title": "Action"
          }
        }), _c("Button", {
          attrs: {
            "variation": "warning",
            "state": "disabled",
            "title": "Warning"
          }
        }), _c("Button", {
          attrs: {
            "variation": "default",
            "state": "disabled",
            "title": "with icon",
            "icon": "edit"
          }
        })], 1)];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Focus")]), _c("DemoSection", {
    attrs: {
      "title": "Focus",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("div", {
          staticClass: "s-button-container s-button-container--left"
        }, [_c("Button", {
          attrs: {
            "variation": "default",
            "state": "focused",
            "title": "Default"
          }
        }), _c("Button", {
          attrs: {
            "variation": "action",
            "state": "focused",
            "title": "Action"
          }
        }), _c("Button", {
          attrs: {
            "variation": "warning",
            "state": "focused",
            "title": "Warning"
          }
        }), _c("Button", {
          attrs: {
            "variation": "default",
            "state": "focused",
            "title": "with icon",
            "icon": "edit"
          }
        })], 1)];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Loading")]), _c("DemoSection", {
    attrs: {
      "title": "Loading",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("div", {
          staticClass: "s-button-container s-button-container--left"
        }, [_c("Button", {
          attrs: {
            "variation": "default",
            "state": "loading",
            "title": "Default"
          }
        }), _c("Button", {
          attrs: {
            "variation": "action",
            "state": "loading",
            "title": "Action"
          }
        }), _c("Button", {
          attrs: {
            "variation": "warning",
            "state": "loading",
            "title": "Warning"
          }
        }), _c("Button", {
          attrs: {
            "variation": "default",
            "state": "loading",
            "title": "with icon",
            "icon": "recent-events"
          }
        })], 1)];
      },
      proxy: true
    }])
  }), _c("p", [_vm._v(" Click "), _c("a", {
    on: {
      "click": function($event) {
        _vm.isLoadingExample = !_vm.isLoadingExample;
      }
    }
  }, [_vm._v("here")]), _vm._v(" to test. ")]), _c("Button", {
    class: {
      "is-loading": _vm.isLoadingExample
    },
    attrs: {
      "type": "button",
      "variation": "default",
      "title": "with icon",
      "icon": "pop-out-1"
    }
  })], 1)]), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Small Buttons")]), _c("p", [_vm._v(" Small is the size used on Streamlabs OBS. It is slightly smaller than our standard button. ")]), _c("DemoSection", {
    attrs: {
      "title": "Small Buttons",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("div", {
          staticClass: "s-button-container s-button-container--left"
        }, [_c("Button", {
          attrs: {
            "type": "button",
            "size": "small",
            "variation": "default",
            "title": "Default"
          }
        }), _c("Button", {
          attrs: {
            "type": "button",
            "size": "small",
            "variation": "action",
            "title": "Action"
          }
        }), _c("Button", {
          attrs: {
            "type": "button",
            "size": "small",
            "variation": "warning",
            "title": "Warning"
          }
        }), _c("Button", {
          attrs: {
            "type": "button",
            "size": "small",
            "variation": "default",
            "title": "With Icon",
            "icon": "image"
          }
        }), _c("Button", {
          attrs: {
            "variation": "rewards-standard",
            "size": "small",
            "title": "Rewards"
          }
        })], 1)];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Large Buttons")]), _c("p", [_vm._v(" Used on website marketing pages and for the Donate button on the tip page. ")]), _c("DemoSection", {
    attrs: {
      "title": "Large Buttons",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("div", {
          staticClass: "s-button-container s-button-container--left"
        }, [_c("Button", {
          attrs: {
            "type": "button",
            "size": "large",
            "variation": "default",
            "title": "Default"
          }
        }), _c("Button", {
          attrs: {
            "type": "button",
            "size": "large",
            "variation": "action",
            "title": "Action"
          }
        }), _c("Button", {
          attrs: {
            "type": "button",
            "size": "large",
            "variation": "warning",
            "title": "Warning"
          }
        }), _c("Button", {
          attrs: {
            "type": "button",
            "size": "large",
            "variation": "default",
            "title": "With Icon",
            "icon": "image"
          }
        }), _c("Button", {
          attrs: {
            "size": "large",
            "variation": "prime",
            "title": "Join Prime",
            "icon": "prime"
          }
        }), _c("Button", {
          attrs: {
            "size": "large",
            "variation": "prime-white",
            "title": "Join Prime",
            "icon": "prime"
          }
        }), _c("Button", {
          attrs: {
            "size": "large",
            "variation": "ultra",
            "title": "Join Ultra",
            "icon": "ultra"
          }
        })], 1)];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Fixed Width Buttons")]), _c("p", [_vm._v("Used throughout website Dashboard. Width is fixed at 96px.")]), _c("DemoSection", {
    attrs: {
      "title": "Fixed Width Buttons",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("div", {
          staticClass: "s-button-container s-button-container--left"
        }, [_c("Button", {
          attrs: {
            "type": "button",
            "size": "fixed-width",
            "variation": "default",
            "title": "Default"
          }
        }), _c("Button", {
          attrs: {
            "type": "button",
            "size": "fixed-width",
            "variation": "action",
            "title": "Action"
          }
        }), _c("Button", {
          attrs: {
            "type": "button",
            "size": "fixed-width",
            "variation": "warning",
            "title": "Warning"
          }
        }), _c("Button", {
          attrs: {
            "type": "button",
            "size": "fixed-width",
            "variation": "default",
            "title": "'WithIcon",
            "icon": "image"
          }
        })], 1)];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Full-Width Buttons")]), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Default")]), _c("p", [_vm._v("Used within cards and panels in the Dashboard.")]), _c("DemoSection", {
    attrs: {
      "title": "Default",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Button", {
          attrs: {
            "size": "full-width",
            "variation": "default",
            "title": "Start Giveaway"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Subscribe")]), _c("p", [_vm._v("Used on the App Platform for Subscribing to Apps.")]), _c("DemoSection", {
    attrs: {
      "title": "Subscribe",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Button", {
          attrs: {
            "variation": "subscribe",
            "title": "Subscribe",
            "price": "$4.99"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Paypal")]), _c("p", [_vm._v("Used on the Tip Page for Subscribing to Pro.")]), _c("DemoSection", {
    attrs: {
      "title": "Paypal",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Button", {
          attrs: {
            "variation": "paypal",
            "title": "Subscribe with PayPal",
            "price": "$4.99"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Download")]), _c("p", [_vm._v("Used for Download Streamlabs OBS buttons.")]), _c("DemoSection", {
    attrs: {
      "title": "Download",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("div", {
          staticClass: "s-button-container s-button-container--left"
        }, [_c("Button", {
          attrs: {
            "variation": "slobs-download",
            "title": "Download Streamlabs OBS"
          }
        }), _c("Button", {
          attrs: {
            "variation": "slobs-download-landing",
            "osType": "windows"
          }
        }), _c("Button", {
          attrs: {
            "variation": "slobs-download-landing",
            "osType": "mac"
          }
        })], 1)];
      },
      proxy: true
    }])
  })], 1)]), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Square Buttons")]), _c("p", [_vm._v("Used for add and subtract number inputs as well as login buttons.")]), _c("DemoSection", {
    attrs: {
      "title": "Square Buttons",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("div", {
          staticClass: "s-button-container s-button-container--left"
        }, [_c("Button", {
          attrs: {
            "type": "button",
            "size": "square",
            "variation": "default",
            "icon": "add"
          }
        }), _c("Button", {
          attrs: {
            "type": "button",
            "size": "square",
            "variation": "default",
            "icon": "subtract"
          }
        }), _c("Button", {
          attrs: {
            "type": "button",
            "variation": "facebook",
            "size": "square",
            "icon": "facebook"
          }
        }), _c("Button", {
          attrs: {
            "type": "button",
            "variation": "periscope",
            "size": "square",
            "icon": "periscope"
          }
        }), _c("Button", {
          attrs: {
            "type": "button",
            "variation": "mixer",
            "size": "square",
            "icon": "mixer"
          }
        }), _c("Button", {
          attrs: {
            "type": "button",
            "variation": "picarto",
            "size": "square",
            "icon": "picarto"
          }
        }), _c("Button", {
          attrs: {
            "type": "button",
            "variation": "ultra",
            "size": "square",
            "icon": "ultra"
          }
        })], 1)];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Navigation Buttons")]), _c("p", [_vm._v("Used to bring you between different page states.")]), _c("DemoSection", {
    attrs: {
      "title": "Navigation Buttons",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Button", {
          attrs: {
            "variation": "navigation",
            "icon": "back-alt",
            "title": "Back to Listings"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Prime Button Text")]), _c("p", [_vm._v("Used for prime button with text.")]), _c("DemoSection", {
    attrs: {
      "title": "Prime Button Text",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("div", {
          staticClass: "s-button-container s-button-container--left"
        }, [_c("Button", {
          attrs: {
            "variation": "prime-simple"
          }
        }), _c("Button", {
          attrs: {
            "variation": "prime-simple",
            "primeTitle": "test"
          }
        })], 1)];
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
  }, [_c("h1", [_vm._v("Buttons")]), _c("p", [_vm._v(" Our button component is super flexible. It can act as type "), _c("code", [_vm._v("button")]), _vm._v(", "), _c("code", [_vm._v("a")]), _vm._v(" tag or "), _c("code", [_vm._v("router-link")]), _vm._v(". Please note that you may need to use 'ButtonInput' rather than 'Button' to avoid issues. ")]), _c("pre", [_c("code", [_vm._v("import { Button } from 'streamlabs-beaker';\n\ncomponents: {\n  Button\n}")])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Prop")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("@click")]), _c("td", [_vm._v("Function")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Emits a click function. If you are using an event modifier such as "), _c("code", [_vm._v("prevent")]), _vm._v(", use "), _c("code", [_vm._v("native")]), _vm._v(". For example "), _c("code", [_vm._v("@click.native.prevent")]), _vm._v(". ")])]), _c("tr", [_c("td", [_vm._v("bgColor")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Used for background color.")])]), _c("tr", [_c("td", [_vm._v("textColor")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Used for text color.")])]), _c("tr", [_c("td", [_vm._v("icon")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Use the endings of our custom icons. For example 'icon-settings' would be 'settings'. See icons page of the design system for a full list. ")])]), _c("tr", [_c("td", [_vm._v("iconPosition")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("left")]), _c("td", [_vm._v(" Positions the icon left or right. If positioned right, the icon will have a left margin of 24px. ")])]), _c("tr", [_c("td", [_vm._v("iconImg")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Takes image source string to use an image as an icon. Icon image will have a 14px width. ")])]), _c("tr", [_c("td", [_vm._v("title")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Main button text.")])]), _c("tr", [_c("td", [_vm._v("price")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Used for subscribe buttons in the App Store.")])]), _c("tr", [_c("td", [_vm._v("description")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Used for Streamlabs OBS download buttons to describe the version, size and compatibility. ")])]), _c("tr", [_c("td", [_vm._v("href")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Used if the the "), _c("code", [_vm._v("type")]), _vm._v(" is an "), _c("code", [_vm._v("a")]), _vm._v(" element (links). ")])]), _c("tr", [_c("td", [_vm._v("size")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("standard")]), _c("td", [_vm._v(" Size of the button. Options are "), _c("code", [_vm._v("small")]), _vm._v(", "), _c("code", [_vm._v("large")]), _vm._v(", "), _c("code", [_vm._v("square")]), _vm._v(", "), _c("code", [_vm._v("fixed-width")]), _vm._v(", and "), _c("code", [_vm._v("full-width")])])]), _c("tr", [_c("td", [_vm._v("state")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" State of the button. Options are "), _c("code", [_vm._v("hover")]), _vm._v(", "), _c("code", [_vm._v("focus")]), _vm._v(", "), _c("code", [_vm._v("loading")]), _vm._v(" and "), _c("code", [_vm._v("disabled")]), _vm._v(". ")])]), _c("tr", [_c("td", [_vm._v("type")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Set to string 'submit'.")])]), _c("tr", [_c("td", [_vm._v("to")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Used if the the "), _c("code", [_vm._v("type")]), _vm._v(" is a "), _c("code", [_vm._v("router-link")]), _vm._v(". Define the path. ")])]), _c("tr", [_c("td", [_vm._v("tag")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("button")]), _c("td", [_vm._v(" What type of element the component is. Options are "), _c("code", [_vm._v("button")]), _vm._v(", "), _c("code", [_vm._v("a")]), _vm._v(", "), _c("code", [_vm._v("router-link")])])]), _c("tr", [_c("td", [_vm._v("target")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("_self")]), _c("td", [_vm._v(" Used to set different targets for "), _c("code", [_vm._v("a")]), _vm._v(" links, "), _c("code", [_vm._v("_self")]), _vm._v(", "), _c("code", [_vm._v("_blank")]), _vm._v(", "), _c("code", [_vm._v("_parent")]), _vm._v(", "), _c("code", [_vm._v("_top")])])]), _c("tr", [_c("td", [_vm._v("primeBgColor")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" You can use this prop when you set variation as "), _c("code", [_vm._v("prime")]), _vm._v(". Option is only "), _c("code", [_vm._v("white")]), _vm._v(". ")])]), _c("tr", [_c("td", [_vm._v("primeTitle")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Used for prime button text. You can use this prop when you set variation as "), _c("code", [_vm._v("prime-simple")])])]), _c("tr", [_c("td", [_vm._v("variation")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("default")]), _c("td", [_vm._v(" The variation style of a button. Primary options are "), _c("code", [_vm._v("default")]), _vm._v(", "), _c("code", [_vm._v("action")]), _vm._v(", "), _c("code", [_vm._v("prime")]), _vm._v(" and "), _c("code", [_vm._v("warning")]), _vm._v(". Other options are "), _c("code", [_vm._v("subscribe")]), _vm._v(", "), _c("code", [_vm._v("paypal")]), _vm._v(", "), _c("code", [_vm._v("download")]), _vm._v(", and "), _c("code", [_vm._v("navigation")]), _vm._v(". Reward options are "), _c("code", [_vm._v("rewards-standard")]), _vm._v(", "), _c("code", [_vm._v("rewards-silver")]), _vm._v(", "), _c("code", [_vm._v("rewards-gold")]), _vm._v(", "), _c("code", [_vm._v("rewards-platinum")]), _vm._v(", "), _c("code", [_vm._v("rewards-diamond")]), _vm._v(", and "), _c("code", [_vm._v("rewards-legend")]), _vm._v(". Platform options are "), _c("code", [_vm._v("facebook")]), _vm._v(", "), _c("code", [_vm._v("mixer")]), _vm._v(", "), _c("code", [_vm._v("twitch")]), _vm._v(", "), _c("code", [_vm._v("youtube")]), _vm._v(", "), _c("code", [_vm._v("periscope")]), _vm._v(", "), _c("code", [_vm._v("picarto")]), _vm._v("and "), _c("code", [_vm._v("paypal-blue")]), _vm._v(". ")])]), _c("tr", [_c("td", [_vm._v("slobsDownloadTitle")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("Download Streamlabs")]), _c("td", [_vm._v("Used for slobs download landing button title.")])]), _c("tr", [_c("td", [_vm._v("osType")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("windows")]), _c("td", [_vm._v(" Used for slobs download landing button icon. Options are "), _c("code", [_vm._v("windows")]), _vm._v(" and "), _c("code", [_vm._v("mac")]), _vm._v(". ")])])])]);
}];
const Buttons_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Forms,
  render,
  staticRenderFns,
  false,
  __vue2_injectStyles,
  "ebe722fa",
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
const Buttons = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Buttons as default
};
//# sourceMappingURL=Buttons-06c72025.js.map
