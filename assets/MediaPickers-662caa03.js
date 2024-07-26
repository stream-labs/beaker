var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { W as Watch, C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { F as FormGroup } from "./FormGroup-a1ca8cc5.js";
import { m as mixin_1 } from "./vue-focus.common-28b20e5f.js";
import { i as index } from "./ResizeObserver.es-25312764.js";
import { B as Button } from "./Button-8b9ecd72.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
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
let MediaPicker$1 = class MediaPicker extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "$refs");
    __publicField(this, "variation");
    __publicField(this, "mediaLink");
    __publicField(this, "mediaPreview");
    __publicField(this, "title");
    __publicField(this, "value");
    __publicField(this, "controlsAlwaysVisible");
    __publicField(this, "canDelete");
    __publicField(this, "mediaPickerSmall", false);
    __publicField(this, "mediaBroken", false);
    __publicField(this, "mediaControlsVisible", false);
    __publicField(this, "focused", 0);
  }
  get mediaControls() {
    const controlData = [
      {
        key: "media-link",
        available: !!this.mediaLink,
        class: "s-media-picker__link-icon",
        emit: "link-media",
        title: `Link ${this.variationTitle}`,
        icon: "icon-link"
      },
      {
        key: "media-selected-zoom",
        available: this.mediaPreview && this.variation === "image" && this.media.selected && !this.mediaBroken,
        class: "s-media-picker__zoom-icon",
        emit: "preview-media",
        title: `Preview ${this.variationTitle}`,
        icon: "icon-zoom"
      },
      {
        key: "media-selected-play",
        available: this.mediaPreview && !this.mediaBroken && this.variation === "audio" && this.media.selected,
        class: "s-media-picker__play-icon",
        emit: "preview-media",
        title: `preview ${this.variationTitle}`,
        icon: "icon-media-share-2"
      },
      {
        key: "media-remove",
        available: this.media.selected,
        class: "s-media-picker__small-remove",
        emit: "remove-media",
        title: `Remove ${this.variationTitle}`,
        icon: "icon-close"
      },
      {
        key: "media-select",
        available: true,
        class: "s-media-picker__small-remove",
        emit: "select-media",
        title: `Select ${this.variationTitle}`,
        icon: "icon-upload-image"
      }
    ];
    return controlData.filter((control) => {
      if (!control.available) {
        return false;
      }
      if (!this.canDelete && control.key === "media-remove") {
        return false;
      }
      return true;
    });
  }
  get mediaInputPlaceholder() {
    return this.variation === "audio" ? `Select Audio File` : `Select Image/Video File`;
  }
  get buttonTitle() {
    return this.variation ? `Select ${this.variation}` : "Select Media";
  }
  get variationTitle() {
    return this.variation === "image" ? "Image" : "Audio";
  }
  get media() {
    return {
      selected: this.value ? true : false,
      fileName: this.value ? this.value.split("/").pop() : "",
      url: this.value
    };
  }
  get noMediaIcon() {
    return this.variation === "image" ? "icon-image" : "icon-music";
  }
  get valueIsVideo() {
    const src = this.value;
    if (!src) {
      return false;
    }
    const videoTypes = [
      ".mov",
      ".wmv",
      ".flv",
      ".avi",
      ".webm",
      ".mkv",
      ".mp4"
    ];
    const urlStripped = src.split("?")[0];
    return videoTypes.some((type) => urlStripped.endsWith(type));
  }
  watchValue() {
    this.setBrokenMedia(null);
  }
  watchMediaControlsVisible() {
    if (this.mediaPickerSmall && !this.mediaControlsVisible) {
      this.focused = -1;
    }
  }
  watchMediaControls(newVal) {
    this.focused = newVal.length - 1;
  }
  mounted() {
    const ro = new index((entries, observer) => {
      for (const entry of entries) {
        const { left, top, width, height } = entry.contentRect;
        this.mediaPickerSmall = width < 500 ? true : false;
      }
    });
    ro.observe(this.$refs.mediaPicker);
    this.focused = this.mediaControls.length - 1;
  }
  setBrokenMedia(event) {
    this.mediaBroken = event ? true : false;
  }
  onTabOut() {
    if (this.mediaPickerSmall)
      this.mediaControlsVisible = false;
  }
  moveRight() {
    this.focused = Math.min(this.focused + 1, this.mediaControls.length - 1);
  }
  moveLeft() {
    this.focused = Math.max(this.focused - 1, 0);
  }
  showMediaControls() {
    this.mediaControlsVisible = true;
    this.focused = this.mediaControls.length - 1;
  }
  handleControlVisibility(showControls) {
    if (this.controlsAlwaysVisible)
      return;
    this.mediaControlsVisible = showControls;
  }
};
__decorateClass$1([
  Prop()
], MediaPicker$1.prototype, "variation", 2);
__decorateClass$1([
  Prop({ default: false })
], MediaPicker$1.prototype, "mediaLink", 2);
__decorateClass$1([
  Prop({ default: true })
], MediaPicker$1.prototype, "mediaPreview", 2);
__decorateClass$1([
  Prop()
], MediaPicker$1.prototype, "title", 2);
__decorateClass$1([
  Prop()
], MediaPicker$1.prototype, "value", 2);
__decorateClass$1([
  Prop({ default: false })
], MediaPicker$1.prototype, "controlsAlwaysVisible", 2);
__decorateClass$1([
  Prop({ default: true })
], MediaPicker$1.prototype, "canDelete", 2);
__decorateClass$1([
  Watch("value")
], MediaPicker$1.prototype, "watchValue", 1);
__decorateClass$1([
  Watch("mediaControlsVisible")
], MediaPicker$1.prototype, "watchMediaControlsVisible", 1);
__decorateClass$1([
  Watch("mediaControls")
], MediaPicker$1.prototype, "watchMediaControls", 1);
MediaPicker$1 = __decorateClass$1([
  Component({
    components: {
      Button
    },
    mixins: [mixin_1]
  })
], MediaPicker$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    ref: "mediaPicker",
    staticClass: "s-media-picker"
  }, [_c("div", {
    staticClass: "s-media-picker__input-wrapper"
  }, [_c("div", {
    staticClass: "s-media-picker__thumb"
  }, [_c("transition", {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [!_vm.media.selected ? _c("i", {
    key: "thumb-upload",
    staticClass: "s-media-picker__no-media",
    class: _vm.noMediaIcon
  }) : _vm._e(), _vm.media.selected && _vm.variation === "audio" ? _c("i", {
    key: "thumb-audio",
    staticClass: "icon-music"
  }, [_c("audio", {
    key: "thumb-audio",
    attrs: {
      "src": _vm.media.url
    },
    on: {
      "error": _vm.setBrokenMedia
    }
  })]) : _vm._e(), _vm.media.selected && _vm.variation === "image" && !_vm.valueIsVideo ? _c("img", {
    key: "thumb-image",
    attrs: {
      "src": _vm.media.url
    },
    on: {
      "error": _vm.setBrokenMedia
    }
  }) : _vm._e(), _vm.media.selected && _vm.variation === "image" && _vm.valueIsVideo ? _c("i", {
    key: "thumb-video",
    staticClass: "icon-studio"
  }) : _vm._e()]), _c("transition", {
    attrs: {
      "name": "custom-classes-transition",
      "leave-active-class": "fade-slow-leave-active",
      "mode": "out-in"
    }
  }, [_vm.media.selected && _vm.mediaBroken ? _c("div", {
    staticClass: "s-media-picker__broken-image"
  }) : _vm._e()])], 1), _c("div", {
    staticClass: "s-media-picker__filename"
  }, [_c("transition", {
    attrs: {
      "mode": "out-in",
      "name": "fade"
    }
  }, [_vm.value ? _c("div", {
    key: "media-selected",
    staticClass: "s-media-picker__text"
  }, [_vm._v(" " + _vm._s(_vm.media.fileName) + " ")]) : _vm._e(), !_vm.value ? _c("div", {
    key: "media-not-selected",
    staticClass: "s-media-picker__text-placeholder"
  }, [_vm._v(" " + _vm._s(_vm.title || _vm.mediaInputPlaceholder) + " ")]) : _vm._e()]), _c("div", {
    staticClass: "s-media-picker__controls s-media-picker__controls--small",
    on: {
      "mouseenter": function($event) {
        return _vm.handleControlVisibility(true);
      },
      "mouseleave": function($event) {
        return _vm.handleControlVisibility(false);
      }
    }
  }, [_vm.mediaPickerSmall && !_vm.mediaControlsVisible && !_vm.controlsAlwaysVisible ? _c("i", {
    directives: [{
      name: "focus",
      rawName: "v-focus",
      value: _vm.focused === -1,
      expression: "focused === -1"
    }],
    staticClass: "icon-add",
    attrs: {
      "tabindex": _vm.mediaPickerSmall && !_vm.mediaControlsVisible ? 0 : -1
    },
    on: {
      "focus": function($event) {
        _vm.focused = -1;
      },
      "keydown": [function($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"]))
          return null;
        $event.preventDefault();
        return _vm.showMediaControls.apply(null, arguments);
      }, function($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter"))
          return null;
        $event.preventDefault();
        return _vm.showMediaControls.apply(null, arguments);
      }]
    }
  }) : _c("transition-group", {
    staticClass: "s-media-picker__controls-group",
    attrs: {
      "tag": "div",
      "mode": "out-in",
      "name": "fade"
    }
  }, _vm._l(_vm.mediaControls, function(control, index2) {
    return _c("a", {
      directives: [{
        name: "focus",
        rawName: "v-focus",
        value: _vm.focused === index2,
        expression: "focused === index"
      }],
      key: control.key,
      class: control.class,
      attrs: {
        "title": control.title,
        "tabindex": _vm.focused === index2 ? 0 : -1
      },
      on: {
        "focus": function($event) {
          _vm.focused = index2;
        },
        "click": function($event) {
          $event.stopPropagation();
          return _vm.$emit(control.emit);
        },
        "keydown": [function($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab"))
            return null;
          return _vm.onTabOut.apply(null, arguments);
        }, function($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "space", 32, $event.key, [" ", "Spacebar"]))
            return null;
          $event.preventDefault();
          return _vm.$emit(control.emit);
        }, function($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter"))
            return null;
          $event.preventDefault();
          return _vm.$emit(control.emit);
        }, function($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "left", 37, $event.key, ["Left", "ArrowLeft"]))
            return null;
          if ("button" in $event && $event.button !== 0)
            return null;
          $event.preventDefault();
          return _vm.moveLeft();
        }, function($event) {
          if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "right", 39, $event.key, ["Right", "ArrowRight"]))
            return null;
          if ("button" in $event && $event.button !== 2)
            return null;
          $event.preventDefault();
          return _vm.moveRight();
        }]
      }
    }, [_c("i", {
      class: control.icon
    })]);
  }), 0)], 1)], 1)])]);
};
var staticRenderFns$1 = [];
const MediaPicker_vue_vue_type_style_index_0_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  MediaPicker$1,
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
const MediaPicker2 = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
const MediaPickersCode = '<template>\n  <div>\n    <div class="section">\n      <h1>Media Pickers</h1>\n\n      <pre><code>import { MediaPicker } from \'streamlabs-beaker\';\n\ncomponents: {\n  MediaPicker\n}</code></pre>\n    </div>\n\n    <div class="section">\n      <DemoSection title="Default" :code="demoCode">\n        <template #components>\n          <FormGroup>\n            <media-picker\n              slot="input"\n              variation="image"\n              :media-link="true"\n              :media-preview="false"\n              @select-media="selectVideoMedia"\n              @preview-media="previewVideoMedia"\n              @remove-media="removeVideoMedia"\n              title="Select Video Media"\n              v-model="videoMedia"\n            />\n\n            <media-picker\n              slot="input"\n              variation="image"\n              :media-link="true"\n              :media-preview="false"\n              @select-media="selectImageMedia"\n              @preview-media="previewImageMedia"\n              @remove-media="removeImageMedia"\n              title="Select Image Media"\n              v-model="imageMedia"\n            />\n\n            <media-picker\n              slot="input"\n              variation="audio"\n              :media-link="true"\n              @select-media="selectAudioMedia"\n              @remove-media="removeAudioMedia"\n              v-model="audioMedia"\n            />\n\n            <media-picker\n              slot="input"\n              variation="audio"\n              title="My Sample Title"\n              :media-link="true"\n              :controls-always-visible="true"\n              @select-media="selectAudioMedia"\n              @remove-media="removeAudioMedia"\n              v-model="audioMedia"\n            />\n          </FormGroup>\n        </template>\n      </DemoSection>\n    </div>\n\n    <div class="section">\n      <table class="docs-table">\n        <thead>\n          <tr>\n            <th>Props</th>\n            <th>Type</th>\n            <th>Default</th>\n            <th>Description</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>variation</td>\n            <td>string</td>\n            <td>null</td>\n            <td>\n              Available variations include `image` and `audio`. Video is under\n              the `image` variation.\n            </td>\n          </tr>\n          <tr>\n            <td>title</td>\n            <td>string</td>\n            <td>null</td>\n            <td>Customizable button text</td>\n          </tr>\n          <tr>\n            <td>mediaLink</td>\n            <td>boolean</td>\n            <td>false</td>\n            <td>\n              Will display a clickable link icon that emits `link-media` event.\n              Primarily used on SL core to add a link to a media href.\n            </td>\n          </tr>\n          <tr>\n            <td>value</td>\n            <td>string</td>\n            <td>null</td>\n            <td>A URL string to the selected media.</td>\n          </tr>\n          <tr>\n            <td>controlsAlwaysVisible</td>\n            <td>boolean</td>\n            <td>false</td>\n            <td>Use if controls always need to be shown.</td>\n          </tr>\n          <tr>\n            <td>link-media</td>\n            <td>event</td>\n            <td>null</td>\n            <td>Event emitted when the link icon is clicked</td>\n          </tr>\n          <tr>\n            <td>preview-media</td>\n            <td>event</td>\n            <td>null</td>\n            <td>\n              Event emitted when the magnifiy glass or play icons are clicked\n            </td>\n          </tr>\n          <tr>\n            <td>remove-media</td>\n            <td>event</td>\n            <td>null</td>\n            <td>\n              Event emitted when the close icon or \'Remove\' button is clicked\n            </td>\n          </tr>\n          <tr>\n            <td>select-media</td>\n            <td>event</td>\n            <td>null</td>\n            <td>\n              Event emitted when the plus icon or \'Select Media\' button is\n              clicked\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</template>\n\n<script lang="ts">\nimport { Component, Vue } from "vue-property-decorator";\n\nimport FormGroup from "./../components/FormGroup.vue";\nimport MediaPicker from "./../components/MediaPicker.vue";\nimport MediaPickersCode from "./MediaPickers.vue?raw";\nimport DemoSection from "./../components/DemoSection.vue";\n\n@Component({\n  components: {\n    DemoSection,\n    FormGroup,\n    MediaPicker\n  }\n})\nexport default class ImagePickers extends Vue {\n  demoCode = MediaPickersCode;\n  msg = "Hi!";\n  audioMedia = "";\n  imageMedia = "";\n  videoMedia = "";\n\n  selectVideoMedia() {\n    this.videoMedia =\n      "https://cdn.streamlabs.com/static/imgs/intro-maker/highlight-key-info-before-your-stream.jpg.mp4";\n  }\n  selectImageMedia() {\n    this.imageMedia =\n      "https://uploads.twitchalerts.com/000/045/005/127/foolofsoul-design-1521842129-0.png";\n  }\n\n  selectAudioMedia() {\n    this.audioMedia =\n      "https://cdn1.twitchalerts.com/twitch-bits/sounds/bits.ogg";\n  }\n\n  removeImageMedia() {\n    this.imageMedia = "";\n  }\n  removeVideoMedia() {\n    this.videoMedia = "";\n  }\n\n  removeAudioMedia() {\n    this.audioMedia = "";\n  }\n\n  previewVideoMedia() {\n    console.log("Previewing Video");\n    window.open(this.videoMedia);\n  }\n  previewImageMedia() {\n    console.log("Previewing Media");\n    window.open(this.imageMedia);\n  }\n}\n<\/script>\n';
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
let ImagePickers = class extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", MediaPickersCode);
    __publicField(this, "msg", "Hi!");
    __publicField(this, "audioMedia", "");
    __publicField(this, "imageMedia", "");
    __publicField(this, "videoMedia", "");
  }
  selectVideoMedia() {
    this.videoMedia = "https://cdn.streamlabs.com/static/imgs/intro-maker/highlight-key-info-before-your-stream.jpg.mp4";
  }
  selectImageMedia() {
    this.imageMedia = "https://uploads.twitchalerts.com/000/045/005/127/foolofsoul-design-1521842129-0.png";
  }
  selectAudioMedia() {
    this.audioMedia = "https://cdn1.twitchalerts.com/twitch-bits/sounds/bits.ogg";
  }
  removeImageMedia() {
    this.imageMedia = "";
  }
  removeVideoMedia() {
    this.videoMedia = "";
  }
  removeAudioMedia() {
    this.audioMedia = "";
  }
  previewVideoMedia() {
    console.log("Previewing Video");
    window.open(this.videoMedia);
  }
  previewImageMedia() {
    console.log("Previewing Media");
    window.open(this.imageMedia);
  }
};
ImagePickers = __decorateClass([
  Component({
    components: {
      DemoSection,
      FormGroup,
      MediaPicker: MediaPicker2
    }
  })
], ImagePickers);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("DemoSection", {
    attrs: {
      "title": "Default",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("FormGroup", [_c("media-picker", {
          attrs: {
            "slot": "input",
            "variation": "image",
            "media-link": true,
            "media-preview": false,
            "title": "Select Video Media"
          },
          on: {
            "select-media": _vm.selectVideoMedia,
            "preview-media": _vm.previewVideoMedia,
            "remove-media": _vm.removeVideoMedia
          },
          slot: "input",
          model: {
            value: _vm.videoMedia,
            callback: function($$v) {
              _vm.videoMedia = $$v;
            },
            expression: "videoMedia"
          }
        }), _c("media-picker", {
          attrs: {
            "slot": "input",
            "variation": "image",
            "media-link": true,
            "media-preview": false,
            "title": "Select Image Media"
          },
          on: {
            "select-media": _vm.selectImageMedia,
            "preview-media": _vm.previewImageMedia,
            "remove-media": _vm.removeImageMedia
          },
          slot: "input",
          model: {
            value: _vm.imageMedia,
            callback: function($$v) {
              _vm.imageMedia = $$v;
            },
            expression: "imageMedia"
          }
        }), _c("media-picker", {
          attrs: {
            "slot": "input",
            "variation": "audio",
            "media-link": true
          },
          on: {
            "select-media": _vm.selectAudioMedia,
            "remove-media": _vm.removeAudioMedia
          },
          slot: "input",
          model: {
            value: _vm.audioMedia,
            callback: function($$v) {
              _vm.audioMedia = $$v;
            },
            expression: "audioMedia"
          }
        }), _c("media-picker", {
          attrs: {
            "slot": "input",
            "variation": "audio",
            "title": "My Sample Title",
            "media-link": true,
            "controls-always-visible": true
          },
          on: {
            "select-media": _vm.selectAudioMedia,
            "remove-media": _vm.removeAudioMedia
          },
          slot: "input",
          model: {
            value: _vm.audioMedia,
            callback: function($$v) {
              _vm.audioMedia = $$v;
            },
            expression: "audioMedia"
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
  }, [_c("h1", [_vm._v("Media Pickers")]), _c("pre", [_c("code", [_vm._v("import { MediaPicker } from 'streamlabs-beaker';\n\ncomponents: {\n  MediaPicker\n}")])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Props")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("variation")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Available variations include `image` and `audio`. Video is under the `image` variation. ")])]), _c("tr", [_c("td", [_vm._v("title")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Customizable button text")])]), _c("tr", [_c("td", [_vm._v("mediaLink")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v(" Will display a clickable link icon that emits `link-media` event. Primarily used on SL core to add a link to a media href. ")])]), _c("tr", [_c("td", [_vm._v("value")]), _c("td", [_vm._v("string")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("A URL string to the selected media.")])]), _c("tr", [_c("td", [_vm._v("controlsAlwaysVisible")]), _c("td", [_vm._v("boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("Use if controls always need to be shown.")])]), _c("tr", [_c("td", [_vm._v("link-media")]), _c("td", [_vm._v("event")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Event emitted when the link icon is clicked")])]), _c("tr", [_c("td", [_vm._v("preview-media")]), _c("td", [_vm._v("event")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Event emitted when the magnifiy glass or play icons are clicked ")])]), _c("tr", [_c("td", [_vm._v("remove-media")]), _c("td", [_vm._v("event")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Event emitted when the close icon or 'Remove' button is clicked ")])]), _c("tr", [_c("td", [_vm._v("select-media")]), _c("td", [_vm._v("event")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Event emitted when the plus icon or 'Select Media' button is clicked ")])])])])]);
}];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  ImagePickers,
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
const MediaPickers = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  MediaPickers as default
};
//# sourceMappingURL=MediaPickers-662caa03.js.map
