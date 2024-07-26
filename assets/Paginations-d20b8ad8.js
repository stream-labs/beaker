var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { c as commonjsGlobal, g as getDefaultExportFromCjs, C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { i as index } from "./ResizeObserver.es-25312764.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import "./Accordion-7aa9b24d.js";
var dist = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(e) {
      function t(s) {
        if (n[s])
          return n[s].exports;
        var a = n[s] = { exports: {}, id: s, loaded: false };
        return e[s].call(a.exports, a, a.exports, t), a.loaded = true, a.exports;
      }
      var n = {};
      return t.m = e, t.c = n, t.p = "", t(0);
    }([function(e, t, n) {
      function s(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      var a = n(1), i = s(a);
      e.exports = i.default;
    }, function(e, t, n) {
      n(2);
      var s = n(6)(n(7), n(8), "data-v-82963a40", null);
      e.exports = s.exports;
    }, function(e, t, n) {
      var s = n(3);
      "string" == typeof s && (s = [[e.id, s, ""]]);
      n(5)(s, {});
      s.locals && (e.exports = s.locals);
    }, function(e, t, n) {
      t = e.exports = n(4)(), t.push([e.id, "a[data-v-82963a40]{cursor:pointer}", ""]);
    }, function(e, t) {
      e.exports = function() {
        var e2 = [];
        return e2.toString = function() {
          for (var e3 = [], t2 = 0; t2 < this.length; t2++) {
            var n = this[t2];
            n[2] ? e3.push("@media " + n[2] + "{" + n[1] + "}") : e3.push(n[1]);
          }
          return e3.join("");
        }, e2.i = function(t2, n) {
          "string" == typeof t2 && (t2 = [[null, t2, ""]]);
          for (var s = {}, a = 0; a < this.length; a++) {
            var i = this[a][0];
            "number" == typeof i && (s[i] = true);
          }
          for (a = 0; a < t2.length; a++) {
            var r = t2[a];
            "number" == typeof r[0] && s[r[0]] || (n && !r[2] ? r[2] = n : n && (r[2] = "(" + r[2] + ") and (" + n + ")"), e2.push(r));
          }
        }, e2;
      };
    }, function(e, t, n) {
      function s(e2, t2) {
        for (var n2 = 0; n2 < e2.length; n2++) {
          var s2 = e2[n2], a2 = c[s2.id];
          if (a2) {
            a2.refs++;
            for (var i2 = 0; i2 < a2.parts.length; i2++)
              a2.parts[i2](s2.parts[i2]);
            for (; i2 < s2.parts.length; i2++)
              a2.parts.push(l(s2.parts[i2], t2));
          } else {
            for (var r2 = [], i2 = 0; i2 < s2.parts.length; i2++)
              r2.push(l(s2.parts[i2], t2));
            c[s2.id] = { id: s2.id, refs: 1, parts: r2 };
          }
        }
      }
      function a(e2) {
        for (var t2 = [], n2 = {}, s2 = 0; s2 < e2.length; s2++) {
          var a2 = e2[s2], i2 = a2[0], r2 = a2[1], o2 = a2[2], l2 = a2[3], u2 = { css: r2, media: o2, sourceMap: l2 };
          n2[i2] ? n2[i2].parts.push(u2) : t2.push(n2[i2] = { id: i2, parts: [u2] });
        }
        return t2;
      }
      function i(e2, t2) {
        var n2 = g(), s2 = C[C.length - 1];
        if ("top" === e2.insertAt)
          s2 ? s2.nextSibling ? n2.insertBefore(t2, s2.nextSibling) : n2.appendChild(t2) : n2.insertBefore(t2, n2.firstChild), C.push(t2);
        else {
          if ("bottom" !== e2.insertAt)
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
          n2.appendChild(t2);
        }
      }
      function r(e2) {
        e2.parentNode.removeChild(e2);
        var t2 = C.indexOf(e2);
        t2 >= 0 && C.splice(t2, 1);
      }
      function o(e2) {
        var t2 = document.createElement("style");
        return t2.type = "text/css", i(e2, t2), t2;
      }
      function l(e2, t2) {
        var n2, s2, a2;
        if (t2.singleton) {
          var i2 = v++;
          n2 = h || (h = o(t2)), s2 = u.bind(null, n2, i2, false), a2 = u.bind(null, n2, i2, true);
        } else
          n2 = o(t2), s2 = d.bind(null, n2), a2 = function() {
            r(n2);
          };
        return s2(e2), function(t3) {
          if (t3) {
            if (t3.css === e2.css && t3.media === e2.media && t3.sourceMap === e2.sourceMap)
              return;
            s2(e2 = t3);
          } else
            a2();
        };
      }
      function u(e2, t2, n2, s2) {
        var a2 = n2 ? "" : s2.css;
        if (e2.styleSheet)
          e2.styleSheet.cssText = b(t2, a2);
        else {
          var i2 = document.createTextNode(a2), r2 = e2.childNodes;
          r2[t2] && e2.removeChild(r2[t2]), r2.length ? e2.insertBefore(i2, r2[t2]) : e2.appendChild(i2);
        }
      }
      function d(e2, t2) {
        var n2 = t2.css, s2 = t2.media, a2 = t2.sourceMap;
        if (s2 && e2.setAttribute("media", s2), a2 && (n2 += "\n/*# sourceURL=" + a2.sources[0] + " */", n2 += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a2)))) + " */"), e2.styleSheet)
          e2.styleSheet.cssText = n2;
        else {
          for (; e2.firstChild; )
            e2.removeChild(e2.firstChild);
          e2.appendChild(document.createTextNode(n2));
        }
      }
      var c = {}, p = function(e2) {
        var t2;
        return function() {
          return "undefined" == typeof t2 && (t2 = e2.apply(this, arguments)), t2;
        };
      }, f = p(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
      }), g = p(function() {
        return document.head || document.getElementsByTagName("head")[0];
      }), h = null, v = 0, C = [];
      e.exports = function(e2, t2) {
        t2 = t2 || {}, "undefined" == typeof t2.singleton && (t2.singleton = f()), "undefined" == typeof t2.insertAt && (t2.insertAt = "bottom");
        var n2 = a(e2);
        return s(n2, t2), function(e3) {
          for (var i2 = [], r2 = 0; r2 < n2.length; r2++) {
            var o2 = n2[r2], l2 = c[o2.id];
            l2.refs--, i2.push(l2);
          }
          if (e3) {
            var u2 = a(e3);
            s(u2, t2);
          }
          for (var r2 = 0; r2 < i2.length; r2++) {
            var l2 = i2[r2];
            if (0 === l2.refs) {
              for (var d2 = 0; d2 < l2.parts.length; d2++)
                l2.parts[d2]();
              delete c[l2.id];
            }
          }
        };
      };
      var b = function() {
        var e2 = [];
        return function(t2, n2) {
          return e2[t2] = n2, e2.filter(Boolean).join("\n");
        };
      }();
    }, function(e, t) {
      e.exports = function(e2, t2, n, s) {
        var a, i = e2 = e2 || {}, r = typeof e2.default;
        "object" !== r && "function" !== r || (a = e2, i = e2.default);
        var o = "function" == typeof i ? i.options : i;
        if (t2 && (o.render = t2.render, o.staticRenderFns = t2.staticRenderFns), n && (o._scopeId = n), s) {
          var l = o.computed || (o.computed = {});
          Object.keys(s).forEach(function(e3) {
            var t3 = s[e3];
            l[e3] = function() {
              return t3;
            };
          });
        }
        return { esModule: a, exports: i, options: o };
      };
    }, function(e, t) {
      Object.defineProperty(t, "__esModule", { value: true }), t.default = { props: { value: { type: Number }, pageCount: { type: Number, required: true }, forcePage: { type: Number }, clickHandler: { type: Function, default: function() {
      } }, pageRange: { type: Number, default: 3 }, marginPages: { type: Number, default: 1 }, prevText: { type: String, default: "Prev" }, nextText: { type: String, default: "Next" }, breakViewText: { type: String, default: "…" }, containerClass: { type: String }, pageClass: { type: String }, pageLinkClass: { type: String }, prevClass: { type: String }, prevLinkClass: { type: String }, nextClass: { type: String }, nextLinkClass: { type: String }, breakViewClass: { type: String }, breakViewLinkClass: { type: String }, activeClass: { type: String, default: "active" }, disabledClass: { type: String, default: "disabled" }, noLiSurround: { type: Boolean, default: false }, firstLastButton: { type: Boolean, default: false }, firstButtonText: { type: String, default: "First" }, lastButtonText: { type: String, default: "Last" }, hidePrevNext: { type: Boolean, default: false } }, beforeUpdate: function() {
        void 0 !== this.forcePage && this.forcePage !== this.selected && (this.selected = this.forcePage);
      }, computed: { selected: { get: function() {
        return this.value || this.innerValue;
      }, set: function(e2) {
        this.innerValue = e2;
      } }, pages: function() {
        var e2 = this, t2 = {};
        if (this.pageCount <= this.pageRange)
          for (var n = 0; n < this.pageCount; n++) {
            var s = { index: n, content: n + 1, selected: n === this.selected - 1 };
            t2[n] = s;
          }
        else {
          for (var a = Math.floor(this.pageRange / 2), i = function(n2) {
            var s2 = { index: n2, content: n2 + 1, selected: n2 === e2.selected - 1 };
            t2[n2] = s2;
          }, r = function(e3) {
            var n2 = { disabled: true, breakView: true };
            t2[e3] = n2;
          }, o = 0; o < this.marginPages; o++)
            i(o);
          var l = 0;
          this.selected - a > 0 && (l = this.selected - 1 - a);
          var u = l + this.pageRange - 1;
          u >= this.pageCount && (u = this.pageCount - 1, l = u - this.pageRange + 1);
          for (var d = l; d <= u && d <= this.pageCount - 1; d++)
            i(d);
          l > this.marginPages && r(l - 1), u + 1 < this.pageCount - this.marginPages && r(u + 1);
          for (var c = this.pageCount - 1; c >= this.pageCount - this.marginPages; c--)
            i(c);
        }
        return t2;
      } }, data: function() {
        return { innerValue: 1 };
      }, methods: { handlePageSelected: function(e2) {
        this.selected !== e2 && (this.innerValue = e2, this.$emit("input", e2), this.clickHandler(e2));
      }, prevPage: function() {
        this.selected <= 1 || this.handlePageSelected(this.selected - 1);
      }, nextPage: function() {
        this.selected >= this.pageCount || this.handlePageSelected(this.selected + 1);
      }, firstPageSelected: function() {
        return 1 === this.selected;
      }, lastPageSelected: function() {
        return this.selected === this.pageCount || 0 === this.pageCount;
      }, selectFirstPage: function() {
        this.selected <= 1 || this.handlePageSelected(1);
      }, selectLastPage: function() {
        this.selected >= this.pageCount || this.handlePageSelected(this.pageCount);
      } } };
    }, function(e, t) {
      e.exports = { render: function() {
        var e2 = this, t2 = e2.$createElement, n = e2._self._c || t2;
        return e2.noLiSurround ? n("div", { class: e2.containerClass }, [e2.firstLastButton ? n("a", { class: [e2.pageLinkClass, e2.firstPageSelected() ? e2.disabledClass : ""], attrs: { tabindex: "0" }, domProps: { innerHTML: e2._s(e2.firstButtonText) }, on: { click: function(t3) {
          e2.selectFirstPage();
        }, keyup: function(t3) {
          return "button" in t3 || !e2._k(t3.keyCode, "enter", 13) ? void e2.selectFirstPage() : null;
        } } }) : e2._e(), e2._v(" "), e2.firstPageSelected() && e2.hidePrevNext ? e2._e() : n("a", { class: [e2.prevLinkClass, e2.firstPageSelected() ? e2.disabledClass : ""], attrs: { tabindex: "0" }, domProps: { innerHTML: e2._s(e2.prevText) }, on: { click: function(t3) {
          e2.prevPage();
        }, keyup: function(t3) {
          return "button" in t3 || !e2._k(t3.keyCode, "enter", 13) ? void e2.prevPage() : null;
        } } }), e2._v(" "), e2._l(e2.pages, function(t3) {
          return [t3.breakView ? n("a", { class: [e2.pageLinkClass, e2.breakViewLinkClass, t3.disabled ? e2.disabledClass : ""], attrs: { tabindex: "0" } }, [e2._t("breakViewContent", [e2._v(e2._s(e2.breakViewText))])], 2) : t3.disabled ? n("a", { class: [e2.pageLinkClass, t3.selected ? e2.activeClass : "", e2.disabledClass], attrs: { tabindex: "0" } }, [e2._v(e2._s(t3.content))]) : n("a", { class: [e2.pageLinkClass, t3.selected ? e2.activeClass : ""], attrs: { tabindex: "0" }, on: { click: function(n2) {
            e2.handlePageSelected(t3.index + 1);
          }, keyup: function(n2) {
            return "button" in n2 || !e2._k(n2.keyCode, "enter", 13) ? void e2.handlePageSelected(t3.index + 1) : null;
          } } }, [e2._v(e2._s(t3.content))])];
        }), e2._v(" "), e2.lastPageSelected() && e2.hidePrevNext ? e2._e() : n("a", { class: [e2.nextLinkClass, e2.lastPageSelected() ? e2.disabledClass : ""], attrs: { tabindex: "0" }, domProps: { innerHTML: e2._s(e2.nextText) }, on: { click: function(t3) {
          e2.nextPage();
        }, keyup: function(t3) {
          return "button" in t3 || !e2._k(t3.keyCode, "enter", 13) ? void e2.nextPage() : null;
        } } }), e2._v(" "), e2.firstLastButton ? n("a", { class: [e2.pageLinkClass, e2.lastPageSelected() ? e2.disabledClass : ""], attrs: { tabindex: "0" }, domProps: { innerHTML: e2._s(e2.lastButtonText) }, on: { click: function(t3) {
          e2.selectLastPage();
        }, keyup: function(t3) {
          return "button" in t3 || !e2._k(t3.keyCode, "enter", 13) ? void e2.selectLastPage() : null;
        } } }) : e2._e()], 2) : n("ul", { class: e2.containerClass }, [e2.firstLastButton ? n("li", { class: [e2.pageClass, e2.firstPageSelected() ? e2.disabledClass : ""] }, [n("a", { class: e2.pageLinkClass, attrs: { tabindex: e2.firstPageSelected() ? -1 : 0 }, domProps: { innerHTML: e2._s(e2.firstButtonText) }, on: { click: function(t3) {
          e2.selectFirstPage();
        }, keyup: function(t3) {
          return "button" in t3 || !e2._k(t3.keyCode, "enter", 13) ? void e2.selectFirstPage() : null;
        } } })]) : e2._e(), e2._v(" "), e2.firstPageSelected() && e2.hidePrevNext ? e2._e() : n("li", { class: [e2.prevClass, e2.firstPageSelected() ? e2.disabledClass : ""] }, [n("a", { class: e2.prevLinkClass, attrs: { tabindex: e2.firstPageSelected() ? -1 : 0 }, domProps: { innerHTML: e2._s(e2.prevText) }, on: { click: function(t3) {
          e2.prevPage();
        }, keyup: function(t3) {
          return "button" in t3 || !e2._k(t3.keyCode, "enter", 13) ? void e2.prevPage() : null;
        } } })]), e2._v(" "), e2._l(e2.pages, function(t3) {
          return n("li", { class: [e2.pageClass, t3.selected ? e2.activeClass : "", t3.disabled ? e2.disabledClass : "", t3.breakView ? e2.breakViewClass : ""] }, [t3.breakView ? n("a", { class: [e2.pageLinkClass, e2.breakViewLinkClass], attrs: { tabindex: "0" } }, [e2._t("breakViewContent", [e2._v(e2._s(e2.breakViewText))])], 2) : t3.disabled ? n("a", { class: e2.pageLinkClass, attrs: { tabindex: "0" } }, [e2._v(e2._s(t3.content))]) : n("a", { class: e2.pageLinkClass, attrs: { tabindex: "0" }, on: { click: function(n2) {
            e2.handlePageSelected(t3.index + 1);
          }, keyup: function(n2) {
            return "button" in n2 || !e2._k(n2.keyCode, "enter", 13) ? void e2.handlePageSelected(t3.index + 1) : null;
          } } }, [e2._v(e2._s(t3.content))])]);
        }), e2._v(" "), e2.lastPageSelected() && e2.hidePrevNext ? e2._e() : n("li", { class: [e2.nextClass, e2.lastPageSelected() ? e2.disabledClass : ""] }, [n("a", { class: e2.nextLinkClass, attrs: { tabindex: e2.lastPageSelected() ? -1 : 0 }, domProps: { innerHTML: e2._s(e2.nextText) }, on: { click: function(t3) {
          e2.nextPage();
        }, keyup: function(t3) {
          return "button" in t3 || !e2._k(t3.keyCode, "enter", 13) ? void e2.nextPage() : null;
        } } })]), e2._v(" "), e2.firstLastButton ? n("li", { class: [e2.pageClass, e2.lastPageSelected() ? e2.disabledClass : ""] }, [n("a", { class: e2.pageLinkClass, attrs: { tabindex: e2.lastPageSelected() ? -1 : 0 }, domProps: { innerHTML: e2._s(e2.lastButtonText) }, on: { click: function(t3) {
          e2.selectLastPage();
        }, keyup: function(t3) {
          return "button" in t3 || !e2._k(t3.keyCode, "enter", 13) ? void e2.selectLastPage() : null;
        } } })]) : e2._e()], 2);
      }, staticRenderFns: [] };
    }]);
  });
})(dist);
var distExports = dist.exports;
const VuePaginateComponent = /* @__PURE__ */ getDefaultExportFromCjs(distExports);
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
let Pagination$1 = class Pagination extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "pageRange", 3);
    __publicField(this, "$refs");
    __publicField(this, "nightBg");
    __publicField(this, "itemsPerPage");
    __publicField(this, "totalItemCount");
    __publicField(this, "totalPageCount");
  }
  mounted() {
    const ro = new index((entries, observer) => {
      for (const entry of entries) {
        const { left, top, width, height } = entry.contentRect;
        if (width < 456)
          this.pageRange = 1;
      }
    });
    ro.observe(this.$refs.pagination);
  }
  get pageCount() {
    if (this.totalPageCount && this.totalPageCount > 0)
      return this.totalPageCount;
    let remainder = this.totalItemCount % this.itemsPerPage > 0 ? 1 : 0;
    return Math.floor(this.totalItemCount / this.itemsPerPage) + remainder;
  }
  selectPage(page) {
    this.$emit("page-selected", page);
  }
};
__decorateClass$1([
  Prop({ default: false })
], Pagination$1.prototype, "nightBg", 2);
__decorateClass$1([
  Prop()
], Pagination$1.prototype, "itemsPerPage", 2);
__decorateClass$1([
  Prop()
], Pagination$1.prototype, "totalItemCount", 2);
__decorateClass$1([
  Prop({ default: 0 })
], Pagination$1.prototype, "totalPageCount", 2);
Pagination$1 = __decorateClass$1([
  Component({
    components: {
      VuePaginateComponent
    }
  })
], Pagination$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    ref: "pagination",
    staticClass: "pagination__container"
  }, [_c("vue-paginate-component", _vm._g(_vm._b({
    class: {
      "pagination--bg": _vm.nightBg
    },
    attrs: {
      "page-count": _vm.pageCount,
      "page-range": _vm.pageRange,
      "click-handler": _vm.selectPage,
      "prev-text": "Prev",
      "next-text": "Next",
      "container-class": "s-pagination",
      "page-class": "s-pagination__page",
      "page-link-class": "s-pagination__page-link",
      "prev-class": "s-pagination__prev",
      "prev-link-class": "s-pagination__prev-link",
      "next-class": "s-pagination__next",
      "next-link-class": "s-pagination__next-link",
      "break-view-class": "s-pagination__break",
      "break-view-link-class": "s-pagination__break-link",
      "active-class": "s-pagination__active",
      "disabled-class": "s-pagination__disabled"
    }
  }, "vue-paginate-component", _vm.$attrs, false), _vm.$listeners))], 1);
};
var staticRenderFns$1 = [];
const Pagination_vue_vue_type_style_index_0_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  Pagination$1,
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
const Pagination2 = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
const PaginationsCode = '<template>\n  <div>\n    <div class="section">\n      <h1>Pagination</h1>\n      <p>\n        You can pass how many items you would like per page and total items for\n        a dynamic page count or manually enter how many pages you want.\n      </p>\n\n      <pre><code>import { Pagination } from "streamlabs-beaker"\n\n@Component({\n  components: {\n    Pagination\n  }\n})</code></pre>\n    </div>\n\n    <div class="section">\n      <DemoSection title="Pagination" :code="demoCode">\n        <template #components>\n          <Pagination\n            :night-bg="true"\n            :items-per-page="4"\n            :total-item-count="2010"\n            @page-selected="consolePage"\n          />\n        </template>\n      </DemoSection>\n    </div>\n\n    <table class="docs-table">\n      <thead>\n        <tr>\n          <th>Props</th>\n          <th>Type</th>\n          <th>Default</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>value | v-model</td>\n          <td>Number</td>\n          <td>undefined</td>\n          <td>Use to change page programmatically.</td>\n        </tr>\n        <tr>\n          <td>nightBg</td>\n          <td>Boolean</td>\n          <td>false</td>\n          <td>Adds dark background while in night mode.</td>\n        </tr>\n        <tr>\n          <td>itemsPerPage</td>\n          <td>Number</td>\n          <td>null</td>\n          <td>The number of items per page.</td>\n        </tr>\n        <tr>\n          <td>totalItemCount</td>\n          <td>Number</td>\n          <td>null</td>\n          <td>The number of items total.</td>\n        </tr>\n        <tr>\n          <td>totalPageCount</td>\n          <td>Number</td>\n          <td>0</td>\n          <td>\n            Manually set the number of pages you want. Will ignore\n            <code>itemsPerPage</code> & <code>totalItemCount</code> props when\n            set.\n          </td>\n        </tr>\n        <tr>\n          <td>@page-selected</td>\n          <td>Event</td>\n          <td>null</td>\n          <td>\n            Event emitted when page is changed. Passes current page number.\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</template>\n\n<script lang="ts">\nimport { Component, Vue } from "vue-property-decorator";\n\nimport Pagination from "./../components/Pagination.vue";\nimport PaginationsCode from "./Paginations.vue?raw";\nimport DemoSection from "./../components/DemoSection.vue";\n\n@Component({\n  components: {\n    DemoSection,\n    Pagination\n  }\n})\nexport default class Paginations extends Vue {\n  demoCode = PaginationsCode;\n\n  consolePage(page: number) {\n    let groupStart = page * 4 - 4;\n  }\n}\n<\/script>\n';
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
let Paginations$1 = class Paginations extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", PaginationsCode);
  }
  consolePage(page) {
  }
};
Paginations$1 = __decorateClass([
  Component({
    components: {
      DemoSection,
      Pagination: Pagination2
    }
  })
], Paginations$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("DemoSection", {
    attrs: {
      "title": "Pagination",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("Pagination", {
          attrs: {
            "night-bg": true,
            "items-per-page": 4,
            "total-item-count": 2010
          },
          on: {
            "page-selected": _vm.consolePage
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
  return _c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Pagination")]), _c("p", [_vm._v(" You can pass how many items you would like per page and total items for a dynamic page count or manually enter how many pages you want. ")]), _c("pre", [_c("code", [_vm._v('import { Pagination } from "streamlabs-beaker"\n\n@Component({\n  components: {\n    Pagination\n  }\n})')])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Props")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("value | v-model")]), _c("td", [_vm._v("Number")]), _c("td", [_vm._v("undefined")]), _c("td", [_vm._v("Use to change page programmatically.")])]), _c("tr", [_c("td", [_vm._v("nightBg")]), _c("td", [_vm._v("Boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("Adds dark background while in night mode.")])]), _c("tr", [_c("td", [_vm._v("itemsPerPage")]), _c("td", [_vm._v("Number")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("The number of items per page.")])]), _c("tr", [_c("td", [_vm._v("totalItemCount")]), _c("td", [_vm._v("Number")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("The number of items total.")])]), _c("tr", [_c("td", [_vm._v("totalPageCount")]), _c("td", [_vm._v("Number")]), _c("td", [_vm._v("0")]), _c("td", [_vm._v(" Manually set the number of pages you want. Will ignore "), _c("code", [_vm._v("itemsPerPage")]), _vm._v(" & "), _c("code", [_vm._v("totalItemCount")]), _vm._v(" props when set. ")])]), _c("tr", [_c("td", [_vm._v("@page-selected")]), _c("td", [_vm._v("Event")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Event emitted when page is changed. Passes current page number. ")])])])]);
}];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Paginations$1,
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
const Paginations2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Paginations2 as default
};
//# sourceMappingURL=Paginations-d20b8ad8.js.map
