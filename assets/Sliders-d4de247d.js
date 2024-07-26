var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { V as Vue, c as commonjsGlobal, g as getDefaultExportFromCjs, W as Watch, C as Component, P as Prop, n as normalizeComponent } from "./index-158ccef1.js";
import { i as index } from "./ResizeObserver.es-25312764.js";
import { A as Accordion } from "./Accordion-7aa9b24d.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
var vueSliderComponent_umd_min = { exports: {} };
(function(module, exports) {
  (function(t, e) {
    module.exports = e(Vue);
  })("undefined" !== typeof self ? self : commonjsGlobal, function(t) {
    return function(t2) {
      var e = {};
      function r(n) {
        if (e[n])
          return e[n].exports;
        var o = e[n] = { i: n, l: false, exports: {} };
        return t2[n].call(o.exports, o, o.exports, r), o.l = true, o.exports;
      }
      return r.m = t2, r.c = e, r.d = function(t3, e2, n) {
        r.o(t3, e2) || Object.defineProperty(t3, e2, { enumerable: true, get: n });
      }, r.r = function(t3) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t3, "__esModule", { value: true });
      }, r.t = function(t3, e2) {
        if (1 & e2 && (t3 = r(t3)), 8 & e2)
          return t3;
        if (4 & e2 && "object" === typeof t3 && t3 && t3.__esModule)
          return t3;
        var n = /* @__PURE__ */ Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", { enumerable: true, value: t3 }), 2 & e2 && "string" != typeof t3)
          for (var o in t3)
            r.d(n, o, (function(e3) {
              return t3[e3];
            }).bind(null, o));
        return n;
      }, r.n = function(t3) {
        var e2 = t3 && t3.__esModule ? function() {
          return t3["default"];
        } : function() {
          return t3;
        };
        return r.d(e2, "a", e2), e2;
      }, r.o = function(t3, e2) {
        return Object.prototype.hasOwnProperty.call(t3, e2);
      }, r.p = "", r(r.s = "fb15");
    }({ "091b": function(t2, e, r) {
      var n = r("24fb");
      e = n(false), e.push([t2.i, ".vue-slider-dot{position:absolute;-webkit-transition:all 0s;transition:all 0s;z-index:5}.vue-slider-dot:focus{outline:none}.vue-slider-dot-tooltip{position:absolute;visibility:hidden}.vue-slider-dot-hover:hover .vue-slider-dot-tooltip,.vue-slider-dot-tooltip-show{visibility:visible}.vue-slider-dot-tooltip-top{top:-10px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.vue-slider-dot-tooltip-bottom{bottom:-10px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.vue-slider-dot-tooltip-left{left:-10px;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.vue-slider-dot-tooltip-right{right:-10px;top:50%;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}", ""]), t2.exports = e;
    }, "24fb": function(t2, e, r) {
      function n(t3, e2) {
        var r2 = t3[1] || "", n2 = t3[3];
        if (!n2)
          return r2;
        if (e2 && "function" === typeof btoa) {
          var i = o(n2), a = n2.sources.map(function(t4) {
            return "/*# sourceURL=".concat(n2.sourceRoot || "").concat(t4, " */");
          });
          return [r2].concat(a).concat([i]).join("\n");
        }
        return [r2].join("\n");
      }
      function o(t3) {
        var e2 = btoa(unescape(encodeURIComponent(JSON.stringify(t3)))), r2 = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e2);
        return "/*# ".concat(r2, " */");
      }
      t2.exports = function(t3) {
        var e2 = [];
        return e2.toString = function() {
          return this.map(function(e3) {
            var r2 = n(e3, t3);
            return e3[2] ? "@media ".concat(e3[2], " {").concat(r2, "}") : r2;
          }).join("");
        }, e2.i = function(t4, r2, n2) {
          "string" === typeof t4 && (t4 = [[null, t4, ""]]);
          var o2 = {};
          if (n2)
            for (var i = 0; i < this.length; i++) {
              var a = this[i][0];
              null != a && (o2[a] = true);
            }
          for (var s = 0; s < t4.length; s++) {
            var u = [].concat(t4[s]);
            n2 && o2[u[0]] || (r2 && (u[2] ? u[2] = "".concat(r2, " and ").concat(u[2]) : u[2] = r2), e2.push(u));
          }
        }, e2;
      };
    }, 2638: function(t2, e, r) {
      function n() {
        return n = Object.assign || function(t3) {
          for (var e2, r2 = 1; r2 < arguments.length; r2++)
            for (var n2 in e2 = arguments[r2], e2)
              Object.prototype.hasOwnProperty.call(e2, n2) && (t3[n2] = e2[n2]);
          return t3;
        }, n.apply(this, arguments);
      }
      var o = ["attrs", "props", "domProps"], i = ["class", "style", "directives"], a = ["on", "nativeOn"], s = function(t3) {
        return t3.reduce(function(t4, e2) {
          for (var r2 in e2)
            if (t4[r2])
              if (-1 !== o.indexOf(r2))
                t4[r2] = n({}, t4[r2], e2[r2]);
              else if (-1 !== i.indexOf(r2)) {
                var s2 = t4[r2] instanceof Array ? t4[r2] : [t4[r2]], l = e2[r2] instanceof Array ? e2[r2] : [e2[r2]];
                t4[r2] = s2.concat(l);
              } else if (-1 !== a.indexOf(r2))
                for (var c in e2[r2])
                  if (t4[r2][c]) {
                    var d = t4[r2][c] instanceof Array ? t4[r2][c] : [t4[r2][c]], f = e2[r2][c] instanceof Array ? e2[r2][c] : [e2[r2][c]];
                    t4[r2][c] = d.concat(f);
                  } else
                    t4[r2][c] = e2[r2][c];
              else if ("hook" == r2)
                for (var h in e2[r2])
                  t4[r2][h] = t4[r2][h] ? u(t4[r2][h], e2[r2][h]) : e2[r2][h];
              else
                t4[r2] = e2[r2];
            else
              t4[r2] = e2[r2];
          return t4;
        }, {});
      }, u = function(t3, e2) {
        return function() {
          t3 && t3.apply(this, arguments), e2 && e2.apply(this, arguments);
        };
      };
      t2.exports = s;
    }, "499e": function(t2, e, r) {
      function n(t3, e2) {
        for (var r2 = [], n2 = {}, o2 = 0; o2 < e2.length; o2++) {
          var i2 = e2[o2], a2 = i2[0], s2 = i2[1], u2 = i2[2], l2 = i2[3], c2 = { id: t3 + ":" + o2, css: s2, media: u2, sourceMap: l2 };
          n2[a2] ? n2[a2].parts.push(c2) : r2.push(n2[a2] = { id: a2, parts: [c2] });
        }
        return r2;
      }
      r.r(e), r.d(e, "default", function() {
        return p;
      });
      var o = "undefined" !== typeof document;
      if ("undefined" !== typeof DEBUG && DEBUG && !o)
        throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
      var i = {}, a = o && (document.head || document.getElementsByTagName("head")[0]), s = null, u = 0, l = false, c = function() {
      }, d = null, f = "data-vue-ssr-id", h = "undefined" !== typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function p(t3, e2, r2, o2) {
        l = r2, d = o2 || {};
        var a2 = n(t3, e2);
        return y(a2), function(e3) {
          for (var r3 = [], o3 = 0; o3 < a2.length; o3++) {
            var s2 = a2[o3], u2 = i[s2.id];
            u2.refs--, r3.push(u2);
          }
          e3 ? (a2 = n(t3, e3), y(a2)) : a2 = [];
          for (o3 = 0; o3 < r3.length; o3++) {
            u2 = r3[o3];
            if (0 === u2.refs) {
              for (var l2 = 0; l2 < u2.parts.length; l2++)
                u2.parts[l2]();
              delete i[u2.id];
            }
          }
        };
      }
      function y(t3) {
        for (var e2 = 0; e2 < t3.length; e2++) {
          var r2 = t3[e2], n2 = i[r2.id];
          if (n2) {
            n2.refs++;
            for (var o2 = 0; o2 < n2.parts.length; o2++)
              n2.parts[o2](r2.parts[o2]);
            for (; o2 < r2.parts.length; o2++)
              n2.parts.push(m(r2.parts[o2]));
            n2.parts.length > r2.parts.length && (n2.parts.length = r2.parts.length);
          } else {
            var a2 = [];
            for (o2 = 0; o2 < r2.parts.length; o2++)
              a2.push(m(r2.parts[o2]));
            i[r2.id] = { id: r2.id, refs: 1, parts: a2 };
          }
        }
      }
      function v() {
        var t3 = document.createElement("style");
        return t3.type = "text/css", a.appendChild(t3), t3;
      }
      function m(t3) {
        var e2, r2, n2 = document.querySelector("style[" + f + '~="' + t3.id + '"]');
        if (n2) {
          if (l)
            return c;
          n2.parentNode.removeChild(n2);
        }
        if (h) {
          var o2 = u++;
          n2 = s || (s = v()), e2 = g.bind(null, n2, o2, false), r2 = g.bind(null, n2, o2, true);
        } else
          n2 = v(), e2 = k.bind(null, n2), r2 = function() {
            n2.parentNode.removeChild(n2);
          };
        return e2(t3), function(n3) {
          if (n3) {
            if (n3.css === t3.css && n3.media === t3.media && n3.sourceMap === t3.sourceMap)
              return;
            e2(t3 = n3);
          } else
            r2();
        };
      }
      var b = function() {
        var t3 = [];
        return function(e2, r2) {
          return t3[e2] = r2, t3.filter(Boolean).join("\n");
        };
      }();
      function g(t3, e2, r2, n2) {
        var o2 = r2 ? "" : n2.css;
        if (t3.styleSheet)
          t3.styleSheet.cssText = b(e2, o2);
        else {
          var i2 = document.createTextNode(o2), a2 = t3.childNodes;
          a2[e2] && t3.removeChild(a2[e2]), a2.length ? t3.insertBefore(i2, a2[e2]) : t3.appendChild(i2);
        }
      }
      function k(t3, e2) {
        var r2 = e2.css, n2 = e2.media, o2 = e2.sourceMap;
        if (n2 && t3.setAttribute("media", n2), d.ssrId && t3.setAttribute(f, e2.id), o2 && (r2 += "\n/*# sourceURL=" + o2.sources[0] + " */", r2 += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o2)))) + " */"), t3.styleSheet)
          t3.styleSheet.cssText = r2;
        else {
          while (t3.firstChild)
            t3.removeChild(t3.firstChild);
          t3.appendChild(document.createTextNode(r2));
        }
      }
    }, "4abb": function(t2, e, r) {
      var n = r("7a57");
      "string" === typeof n && (n = [[t2.i, n, ""]]), n.locals && (t2.exports = n.locals);
      var o = r("499e").default;
      o("b2af7572", n, true, { sourceMap: false, shadowMode: false });
    }, "4ed8": function(t2, e, r) {
      var n = r("091b");
      "string" === typeof n && (n = [[t2.i, n, ""]]), n.locals && (t2.exports = n.locals);
      var o = r("499e").default;
      o("2f6bee1a", n, true, { sourceMap: false, shadowMode: false });
    }, "556c": function(t2, e, r) {
      var n = r("eef2");
      "string" === typeof n && (n = [[t2.i, n, ""]]), n.locals && (t2.exports = n.locals);
      var o = r("499e").default;
      o("1209fd47", n, true, { sourceMap: false, shadowMode: false });
    }, "65d9": function(t2, e, r) {
      /**
      * vue-class-component v7.0.1
      * (c) 2015-present Evan You
      * @license MIT
      */
      function n(t3) {
        return t3 && "object" === typeof t3 && "default" in t3 ? t3["default"] : t3;
      }
      Object.defineProperty(e, "__esModule", { value: true });
      var o = n(r("8bbf")), i = "undefined" !== typeof Reflect && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
      function a(t3, e2) {
        s(t3, e2), Object.getOwnPropertyNames(e2.prototype).forEach(function(r2) {
          s(t3.prototype, e2.prototype, r2);
        }), Object.getOwnPropertyNames(e2).forEach(function(r2) {
          s(t3, e2, r2);
        });
      }
      function s(t3, e2, r2) {
        var n2 = r2 ? Reflect.getOwnMetadataKeys(e2, r2) : Reflect.getOwnMetadataKeys(e2);
        n2.forEach(function(n3) {
          var o2 = r2 ? Reflect.getOwnMetadata(n3, e2, r2) : Reflect.getOwnMetadata(n3, e2);
          r2 ? Reflect.defineMetadata(n3, o2, t3, r2) : Reflect.defineMetadata(n3, o2, t3);
        });
      }
      var u = { __proto__: [] }, l = u instanceof Array;
      function c(t3) {
        return function(e2, r2, n2) {
          var o2 = "function" === typeof e2 ? e2 : e2.constructor;
          o2.__decorators__ || (o2.__decorators__ = []), "number" !== typeof n2 && (n2 = void 0), o2.__decorators__.push(function(e3) {
            return t3(e3, r2, n2);
          });
        };
      }
      function d() {
        for (var t3 = [], e2 = 0; e2 < arguments.length; e2++)
          t3[e2] = arguments[e2];
        return o.extend({ mixins: t3 });
      }
      function f(t3) {
        var e2 = typeof t3;
        return null == t3 || "object" !== e2 && "function" !== e2;
      }
      function h(t3, e2) {
        var r2 = e2.prototype._init;
        e2.prototype._init = function() {
          var e3 = this, r3 = Object.getOwnPropertyNames(t3);
          if (t3.$options.props)
            for (var n3 in t3.$options.props)
              t3.hasOwnProperty(n3) || r3.push(n3);
          r3.forEach(function(r4) {
            "_" !== r4.charAt(0) && Object.defineProperty(e3, r4, { get: function() {
              return t3[r4];
            }, set: function(e4) {
              t3[r4] = e4;
            }, configurable: true });
          });
        };
        var n2 = new e2();
        e2.prototype._init = r2;
        var o2 = {};
        return Object.keys(n2).forEach(function(t4) {
          void 0 !== n2[t4] && (o2[t4] = n2[t4]);
        }), o2;
      }
      var p = ["data", "beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy", "destroyed", "beforeUpdate", "updated", "activated", "deactivated", "render", "errorCaptured", "serverPrefetch"];
      function y(t3, e2) {
        void 0 === e2 && (e2 = {}), e2.name = e2.name || t3._componentTag || t3.name;
        var r2 = t3.prototype;
        Object.getOwnPropertyNames(r2).forEach(function(t4) {
          if ("constructor" !== t4)
            if (p.indexOf(t4) > -1)
              e2[t4] = r2[t4];
            else {
              var n3 = Object.getOwnPropertyDescriptor(r2, t4);
              void 0 !== n3.value ? "function" === typeof n3.value ? (e2.methods || (e2.methods = {}))[t4] = n3.value : (e2.mixins || (e2.mixins = [])).push({ data: function() {
                var e3;
                return e3 = {}, e3[t4] = n3.value, e3;
              } }) : (n3.get || n3.set) && ((e2.computed || (e2.computed = {}))[t4] = { get: n3.get, set: n3.set });
            }
        }), (e2.mixins || (e2.mixins = [])).push({ data: function() {
          return h(this, t3);
        } });
        var n2 = t3.__decorators__;
        n2 && (n2.forEach(function(t4) {
          return t4(e2);
        }), delete t3.__decorators__);
        var s2 = Object.getPrototypeOf(t3.prototype), u2 = s2 instanceof o ? s2.constructor : o, l2 = u2.extend(e2);
        return v(l2, t3, u2), i && a(l2, t3), l2;
      }
      function v(t3, e2, r2) {
        Object.getOwnPropertyNames(e2).forEach(function(n2) {
          if ("prototype" !== n2) {
            var o2 = Object.getOwnPropertyDescriptor(t3, n2);
            if (!o2 || o2.configurable) {
              var i2 = Object.getOwnPropertyDescriptor(e2, n2);
              if (!l) {
                if ("cid" === n2)
                  return;
                var a2 = Object.getOwnPropertyDescriptor(r2, n2);
                if (!f(i2.value) && a2 && a2.value === i2.value)
                  return;
              }
              Object.defineProperty(t3, n2, i2);
            }
          }
        });
      }
      function m(t3) {
        return "function" === typeof t3 ? y(t3) : function(e2) {
          return y(e2, t3);
        };
      }
      m.registerHooks = function(t3) {
        p.push.apply(p, t3);
      }, e.default = m, e.createDecorator = c, e.mixins = d;
    }, "7a57": function(t2, e, r) {
      var n = r("24fb");
      e = n(false), e.push([t2.i, ".vue-slider{position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.vue-slider-rail{position:relative;width:100%;height:100%;-webkit-transition-property:width,height,left,right,top,bottom;transition-property:width,height,left,right,top,bottom}.vue-slider-process{position:absolute;z-index:1}", ""]), t2.exports = e;
    }, 8875: function(t2, e, r) {
      var n, o, i;
      (function(r2, a) {
        o = [], n = a, i = "function" === typeof n ? n.apply(e, o) : n, void 0 === i || (t2.exports = i);
      })("undefined" !== typeof self && self, function() {
        function t3() {
          var e2 = Object.getOwnPropertyDescriptor(document, "currentScript");
          if (!e2 && "currentScript" in document && document.currentScript)
            return document.currentScript;
          if (e2 && e2.get !== t3 && document.currentScript)
            return document.currentScript;
          try {
            throw new Error();
          } catch (h) {
            var r2, n2, o2, i2 = /.*at [^(]*\((.*):(.+):(.+)\)$/gi, a = /@([^@]*):(\d+):(\d+)\s*$/gi, s = i2.exec(h.stack) || a.exec(h.stack), u = s && s[1] || false, l = s && s[2] || false, c = document.location.href.replace(document.location.hash, ""), d = document.getElementsByTagName("script");
            u === c && (r2 = document.documentElement.outerHTML, n2 = new RegExp("(?:[^\\n]+?\\n){0," + (l - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), o2 = r2.replace(n2, "$1").trim());
            for (var f = 0; f < d.length; f++) {
              if ("interactive" === d[f].readyState)
                return d[f];
              if (d[f].src === u)
                return d[f];
              if (u === c && d[f].innerHTML && d[f].innerHTML.trim() === o2)
                return d[f];
            }
            return null;
          }
        }
        return t3;
      });
    }, "8bbf": function(e, r) {
      e.exports = t;
    }, eef2: function(t2, e, r) {
      var n = r("24fb");
      e = n(false), e.push([t2.i, ".vue-slider-marks{position:relative;width:100%;height:100%}.vue-slider-mark{position:absolute;z-index:1}.vue-slider-ltr .vue-slider-mark,.vue-slider-rtl .vue-slider-mark{width:0;height:100%;top:50%}.vue-slider-ltr .vue-slider-mark-step,.vue-slider-rtl .vue-slider-mark-step{top:0}.vue-slider-ltr .vue-slider-mark-label,.vue-slider-rtl .vue-slider-mark-label{top:100%;margin-top:10px}.vue-slider-ltr .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ltr .vue-slider-mark-step{left:0}.vue-slider-ltr .vue-slider-mark-label{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.vue-slider-rtl .vue-slider-mark{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.vue-slider-rtl .vue-slider-mark-step{right:0}.vue-slider-rtl .vue-slider-mark-label{right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.vue-slider-btt .vue-slider-mark,.vue-slider-ttb .vue-slider-mark{width:100%;height:0;left:50%}.vue-slider-btt .vue-slider-mark-step,.vue-slider-ttb .vue-slider-mark-step{left:0}.vue-slider-btt .vue-slider-mark-label,.vue-slider-ttb .vue-slider-mark-label{left:100%;margin-left:10px}.vue-slider-btt .vue-slider-mark{-webkit-transform:translate(-50%,50%);transform:translate(-50%,50%)}.vue-slider-btt .vue-slider-mark-step{top:0}.vue-slider-btt .vue-slider-mark-label{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-ttb .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ttb .vue-slider-mark-step{bottom:0}.vue-slider-ttb .vue-slider-mark-label{bottom:50%;-webkit-transform:translateY(50%);transform:translateY(50%)}.vue-slider-mark-label,.vue-slider-mark-step{position:absolute}", ""]), t2.exports = e;
    }, fb15: function(t2, e, r) {
      if (r.r(e), r.d(e, "ERROR_TYPE", function() {
        return J;
      }), r.d(e, "VueSliderMark", function() {
        return U;
      }), r.d(e, "VueSliderDot", function() {
        return j;
      }), "undefined" !== typeof window) {
        var n = window.document.currentScript, o = r("8875");
        n = o(), "currentScript" in document || Object.defineProperty(document, "currentScript", { get: o });
        var i = n && n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
        i && (r.p = i[1]);
      }
      var a = r("2638"), s = r.n(a);
      function u(t3, e2, r2, n2) {
        var o2, i2 = arguments.length, a2 = i2 < 3 ? e2 : null === n2 ? n2 = Object.getOwnPropertyDescriptor(e2, r2) : n2;
        if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
          a2 = Reflect.decorate(t3, e2, r2, n2);
        else
          for (var s2 = t3.length - 1; s2 >= 0; s2--)
            (o2 = t3[s2]) && (a2 = (i2 < 3 ? o2(a2) : i2 > 3 ? o2(e2, r2, a2) : o2(e2, r2)) || a2);
        return i2 > 3 && a2 && Object.defineProperty(e2, r2, a2), a2;
      }
      var l = r("8bbf"), c = r.n(l), d = r("65d9"), f = r.n(d);
      function h(t3, e2) {
        return void 0 === e2 && (e2 = {}), Object(d["createDecorator"])(function(r2, n2) {
          (r2.props || (r2.props = {}))[n2] = e2, r2.model = { prop: n2, event: t3 || n2 };
        });
      }
      function p(t3) {
        return void 0 === t3 && (t3 = {}), Object(d["createDecorator"])(function(e2, r2) {
          (e2.props || (e2.props = {}))[r2] = t3;
        });
      }
      function y(t3, e2) {
        void 0 === e2 && (e2 = {});
        var r2 = e2.deep, n2 = void 0 !== r2 && r2, o2 = e2.immediate, i2 = void 0 !== o2 && o2;
        return Object(d["createDecorator"])(function(e3, r3) {
          "object" !== typeof e3.watch && (e3.watch = /* @__PURE__ */ Object.create(null));
          var o3 = e3.watch;
          "object" !== typeof o3[t3] || Array.isArray(o3[t3]) ? "undefined" === typeof o3[t3] && (o3[t3] = []) : o3[t3] = [o3[t3]], o3[t3].push({ handler: r3, deep: n2, immediate: i2 });
        });
      }
      r("4ed8");
      function v(t3) {
        return v = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && "function" === typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        }, v(t3);
      }
      function m(t3, e2) {
        if (!(t3 instanceof e2))
          throw new TypeError("Cannot call a class as a function");
      }
      function b(t3, e2) {
        for (var r2 = 0; r2 < e2.length; r2++) {
          var n2 = e2[r2];
          n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
        }
      }
      function g(t3, e2, r2) {
        return e2 && b(t3.prototype, e2), r2 && b(t3, r2), t3;
      }
      function k(t3, e2) {
        if ("function" !== typeof e2 && null !== e2)
          throw new TypeError("Super expression must either be null or a function");
        t3.prototype = Object.create(e2 && e2.prototype, { constructor: { value: t3, writable: true, configurable: true } }), e2 && O(t3, e2);
      }
      function O(t3, e2) {
        return O = Object.setPrototypeOf || function(t4, e3) {
          return t4.__proto__ = e3, t4;
        }, O(t3, e2);
      }
      function x(t3) {
        var e2 = P();
        return function() {
          var r2, n2 = D(t3);
          if (e2) {
            var o2 = D(this).constructor;
            r2 = Reflect.construct(n2, arguments, o2);
          } else
            r2 = n2.apply(this, arguments);
          return w(this, r2);
        };
      }
      function w(t3, e2) {
        return !e2 || "object" !== v(e2) && "function" !== typeof e2 ? S(t3) : e2;
      }
      function S(t3) {
        if (void 0 === t3)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function P() {
        if ("undefined" === typeof Reflect || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if ("function" === typeof Proxy)
          return true;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          })), true;
        } catch (t3) {
          return false;
        }
      }
      function D(t3) {
        return D = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        }, D(t3);
      }
      var R = function() {
        var t3 = function(t4) {
          k(r2, t4);
          var e2 = x(r2);
          function r2() {
            return m(this, r2), e2.apply(this, arguments);
          }
          return g(r2, [{ key: "dragStart", value: function(t5) {
            if (this.disabled)
              return false;
            this.$emit("drag-start");
          } }, { key: "render", value: function() {
            var t5 = arguments[0];
            return t5("div", { ref: "dot", class: this.dotClasses, attrs: { "aria-valuetext": this.tooltipValue ? this.tooltipValue.toString() : "" }, on: { mousedown: this.dragStart, touchstart: this.dragStart } }, [this.$slots.dot || t5("div", { class: this.handleClasses, style: this.dotStyle }), "none" !== this.tooltip ? t5("div", { class: this.tooltipClasses }, [this.$slots.tooltip || t5("div", { class: this.tooltipInnerClasses, style: this.tooltipStyle }, [t5("span", { class: "vue-slider-dot-tooltip-text" }, [this.tooltipValue])])]) : null]);
          } }, { key: "dotClasses", get: function() {
            return ["vue-slider-dot", { "vue-slider-dot-hover": "hover" === this.tooltip || "active" === this.tooltip, "vue-slider-dot-disabled": this.disabled, "vue-slider-dot-focus": this.focus }];
          } }, { key: "handleClasses", get: function() {
            return ["vue-slider-dot-handle", { "vue-slider-dot-handle-disabled": this.disabled, "vue-slider-dot-handle-focus": this.focus }];
          } }, { key: "tooltipClasses", get: function() {
            return ["vue-slider-dot-tooltip", ["vue-slider-dot-tooltip-".concat(this.tooltipPlacement)], { "vue-slider-dot-tooltip-show": this.showTooltip }];
          } }, { key: "tooltipInnerClasses", get: function() {
            return ["vue-slider-dot-tooltip-inner", ["vue-slider-dot-tooltip-inner-".concat(this.tooltipPlacement)], { "vue-slider-dot-tooltip-inner-disabled": this.disabled, "vue-slider-dot-tooltip-inner-focus": this.focus }];
          } }, { key: "showTooltip", get: function() {
            switch (this.tooltip) {
              case "always":
                return true;
              case "none":
                return false;
              case "focus":
              case "active":
                return !!this.focus;
              default:
                return false;
            }
          } }, { key: "tooltipValue", get: function() {
            return this.tooltipFormatter ? "string" === typeof this.tooltipFormatter ? this.tooltipFormatter.replace(/\{value\}/, String(this.value)) : this.tooltipFormatter(this.value) : this.value;
          } }]), r2;
        }(c.a);
        return u([p({ default: 0 })], t3.prototype, "value", void 0), u([p()], t3.prototype, "tooltip", void 0), u([p()], t3.prototype, "dotStyle", void 0), u([p()], t3.prototype, "tooltipStyle", void 0), u([p({ type: String, validator: function(t4) {
          return ["top", "right", "bottom", "left"].indexOf(t4) > -1;
        }, required: true })], t3.prototype, "tooltipPlacement", void 0), u([p({ type: [String, Function] })], t3.prototype, "tooltipFormatter", void 0), u([p({ type: Boolean, default: false })], t3.prototype, "focus", void 0), u([p({ default: false })], t3.prototype, "disabled", void 0), t3 = u([f()({ name: "VueSliderDot" })], t3), t3;
      }(), j = R;
      r("556c");
      function E(t3) {
        return E = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && "function" === typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        }, E(t3);
      }
      function A(t3, e2) {
        if (!(t3 instanceof e2))
          throw new TypeError("Cannot call a class as a function");
      }
      function V(t3, e2) {
        for (var r2 = 0; r2 < e2.length; r2++) {
          var n2 = e2[r2];
          n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
        }
      }
      function M(t3, e2, r2) {
        return e2 && V(t3.prototype, e2), r2 && V(t3, r2), t3;
      }
      function _(t3, e2) {
        if ("function" !== typeof e2 && null !== e2)
          throw new TypeError("Super expression must either be null or a function");
        t3.prototype = Object.create(e2 && e2.prototype, { constructor: { value: t3, writable: true, configurable: true } }), e2 && C(t3, e2);
      }
      function C(t3, e2) {
        return C = Object.setPrototypeOf || function(t4, e3) {
          return t4.__proto__ = e3, t4;
        }, C(t3, e2);
      }
      function I(t3) {
        var e2 = B();
        return function() {
          var r2, n2 = N(t3);
          if (e2) {
            var o2 = N(this).constructor;
            r2 = Reflect.construct(n2, arguments, o2);
          } else
            r2 = n2.apply(this, arguments);
          return L(this, r2);
        };
      }
      function L(t3, e2) {
        return !e2 || "object" !== E(e2) && "function" !== typeof e2 ? T(t3) : e2;
      }
      function T(t3) {
        if (void 0 === t3)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function B() {
        if ("undefined" === typeof Reflect || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if ("function" === typeof Proxy)
          return true;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          })), true;
        } catch (t3) {
          return false;
        }
      }
      function N(t3) {
        return N = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        }, N(t3);
      }
      var z, H = function() {
        var t3 = function(t4) {
          _(r2, t4);
          var e2 = I(r2);
          function r2() {
            return A(this, r2), e2.apply(this, arguments);
          }
          return M(r2, [{ key: "labelClickHandle", value: function(t5) {
            t5.stopPropagation(), this.$emit("pressLabel", this.mark.pos);
          } }, { key: "render", value: function() {
            var t5 = arguments[0], e3 = this.mark;
            return t5("div", { class: this.marksClasses }, [this.$slots.step || t5("div", { class: this.stepClasses, style: [this.stepStyle || {}, e3.style || {}, e3.active && this.stepActiveStyle || {}, e3.active && e3.activeStyle || {}] }), this.hideLabel ? null : this.$slots.label || t5("div", { class: this.labelClasses, style: [this.labelStyle || {}, e3.labelStyle || {}, e3.active && this.labelActiveStyle || {}, e3.active && e3.labelActiveStyle || {}], on: { click: this.labelClickHandle } }, [e3.label])]);
          } }, { key: "marksClasses", get: function() {
            return ["vue-slider-mark", { "vue-slider-mark-active": this.mark.active }];
          } }, { key: "stepClasses", get: function() {
            return ["vue-slider-mark-step", { "vue-slider-mark-step-active": this.mark.active }];
          } }, { key: "labelClasses", get: function() {
            return ["vue-slider-mark-label", { "vue-slider-mark-label-active": this.mark.active }];
          } }]), r2;
        }(c.a);
        return u([p({ required: true })], t3.prototype, "mark", void 0), u([p(Boolean)], t3.prototype, "hideLabel", void 0), u([p()], t3.prototype, "stepStyle", void 0), u([p()], t3.prototype, "stepActiveStyle", void 0), u([p()], t3.prototype, "labelStyle", void 0), u([p()], t3.prototype, "labelActiveStyle", void 0), t3 = u([f()({ name: "VueSlideMark" })], t3), t3;
      }(), U = H, F = function(t3) {
        return "number" === typeof t3 ? "".concat(t3, "px") : t3;
      }, $ = function(t3) {
        var e2 = document.documentElement, r2 = document.body, n2 = t3.getBoundingClientRect(), o2 = { y: n2.top + (window.pageYOffset || e2.scrollTop) - (e2.clientTop || r2.clientTop || 0), x: n2.left + (window.pageXOffset || e2.scrollLeft) - (e2.clientLeft || r2.clientLeft || 0) };
        return o2;
      }, W = function(t3, e2, r2) {
        var n2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, o2 = "targetTouches" in t3 ? t3.targetTouches[0] : t3, i2 = $(e2), a2 = { x: o2.pageX - i2.x, y: o2.pageY - i2.y };
        return { x: r2 ? e2.offsetWidth * n2 - a2.x : a2.x, y: r2 ? e2.offsetHeight * n2 - a2.y : a2.y };
      };
      (function(t3) {
        t3[t3["PAGE_UP"] = 33] = "PAGE_UP", t3[t3["PAGE_DOWN"] = 34] = "PAGE_DOWN", t3[t3["END"] = 35] = "END", t3[t3["HOME"] = 36] = "HOME", t3[t3["LEFT"] = 37] = "LEFT", t3[t3["UP"] = 38] = "UP", t3[t3["RIGHT"] = 39] = "RIGHT", t3[t3["DOWN"] = 40] = "DOWN";
      })(z || (z = {}));
      var G = function(t3, e2) {
        if (e2.hook) {
          var r2 = e2.hook(t3);
          if ("function" === typeof r2)
            return r2;
          if (!r2)
            return null;
        }
        switch (t3.keyCode) {
          case z.UP:
            return function(t4) {
              return "ttb" === e2.direction ? t4 - 1 : t4 + 1;
            };
          case z.RIGHT:
            return function(t4) {
              return "rtl" === e2.direction ? t4 - 1 : t4 + 1;
            };
          case z.DOWN:
            return function(t4) {
              return "ttb" === e2.direction ? t4 + 1 : t4 - 1;
            };
          case z.LEFT:
            return function(t4) {
              return "rtl" === e2.direction ? t4 + 1 : t4 - 1;
            };
          case z.END:
            return function() {
              return e2.max;
            };
          case z.HOME:
            return function() {
              return e2.min;
            };
          case z.PAGE_UP:
            return function(t4) {
              return t4 + 10;
            };
          case z.PAGE_DOWN:
            return function(t4) {
              return t4 - 10;
            };
          default:
            return null;
        }
      };
      function X(t3, e2) {
        if (!(t3 instanceof e2))
          throw new TypeError("Cannot call a class as a function");
      }
      function q(t3, e2) {
        for (var r2 = 0; r2 < e2.length; r2++) {
          var n2 = e2[r2];
          n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
        }
      }
      function K(t3, e2, r2) {
        return e2 && q(t3.prototype, e2), r2 && q(t3, r2), t3;
      }
      var Y, J, Q = function() {
        function t3(e2) {
          X(this, t3), this.num = e2;
        }
        return K(t3, [{ key: "decimal", value: function(t4, e2) {
          var r2 = this.num, n2 = this.getDecimalLen(r2), o2 = this.getDecimalLen(t4), i2 = 0;
          switch (e2) {
            case "+":
              i2 = this.getExponent(n2, o2), this.num = (this.safeRoundUp(r2, i2) + this.safeRoundUp(t4, i2)) / i2;
              break;
            case "-":
              i2 = this.getExponent(n2, o2), this.num = (this.safeRoundUp(r2, i2) - this.safeRoundUp(t4, i2)) / i2;
              break;
            case "*":
              this.num = this.safeRoundUp(this.safeRoundUp(r2, this.getExponent(n2)), this.safeRoundUp(t4, this.getExponent(o2))) / this.getExponent(n2 + o2);
              break;
            case "/":
              i2 = this.getExponent(n2, o2), this.num = this.safeRoundUp(r2, i2) / this.safeRoundUp(t4, i2);
              break;
            case "%":
              i2 = this.getExponent(n2, o2), this.num = this.safeRoundUp(r2, i2) % this.safeRoundUp(t4, i2) / i2;
              break;
          }
          return this;
        } }, { key: "plus", value: function(t4) {
          return this.decimal(t4, "+");
        } }, { key: "minus", value: function(t4) {
          return this.decimal(t4, "-");
        } }, { key: "multiply", value: function(t4) {
          return this.decimal(t4, "*");
        } }, { key: "divide", value: function(t4) {
          return this.decimal(t4, "/");
        } }, { key: "remainder", value: function(t4) {
          return this.decimal(t4, "%");
        } }, { key: "toNumber", value: function() {
          return this.num;
        } }, { key: "getDecimalLen", value: function(t4) {
          var e2 = "".concat(t4).split("e");
          return ("".concat(e2[0]).split(".")[1] || "").length - (e2[1] ? +e2[1] : 0);
        } }, { key: "getExponent", value: function(t4, e2) {
          return Math.pow(10, void 0 !== e2 ? Math.max(t4, e2) : t4);
        } }, { key: "safeRoundUp", value: function(t4, e2) {
          return Math.round(t4 * e2);
        } }]), t3;
      }();
      function Z(t3, e2) {
        var r2 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n2 = Object.getOwnPropertySymbols(t3);
          e2 && (n2 = n2.filter(function(e3) {
            return Object.getOwnPropertyDescriptor(t3, e3).enumerable;
          })), r2.push.apply(r2, n2);
        }
        return r2;
      }
      function tt(t3) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var r2 = null != arguments[e2] ? arguments[e2] : {};
          e2 % 2 ? Z(Object(r2), true).forEach(function(e3) {
            pt(t3, e3, r2[e3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r2)) : Z(Object(r2)).forEach(function(e3) {
            Object.defineProperty(t3, e3, Object.getOwnPropertyDescriptor(r2, e3));
          });
        }
        return t3;
      }
      function et(t3, e2) {
        return ot(t3) || nt(t3, e2) || st(t3, e2) || rt();
      }
      function rt() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function nt(t3, e2) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t3)) {
          var r2 = [], n2 = true, o2 = false, i2 = void 0;
          try {
            for (var a2, s2 = t3[Symbol.iterator](); !(n2 = (a2 = s2.next()).done); n2 = true)
              if (r2.push(a2.value), e2 && r2.length === e2)
                break;
          } catch (u2) {
            o2 = true, i2 = u2;
          } finally {
            try {
              n2 || null == s2["return"] || s2["return"]();
            } finally {
              if (o2)
                throw i2;
            }
          }
          return r2;
        }
      }
      function ot(t3) {
        if (Array.isArray(t3))
          return t3;
      }
      function it(t3) {
        return lt(t3) || ut(t3) || st(t3) || at();
      }
      function at() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function st(t3, e2) {
        if (t3) {
          if ("string" === typeof t3)
            return ct(t3, e2);
          var r2 = Object.prototype.toString.call(t3).slice(8, -1);
          return "Object" === r2 && t3.constructor && (r2 = t3.constructor.name), "Map" === r2 || "Set" === r2 ? Array.from(t3) : "Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? ct(t3, e2) : void 0;
        }
      }
      function ut(t3) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t3))
          return Array.from(t3);
      }
      function lt(t3) {
        if (Array.isArray(t3))
          return ct(t3);
      }
      function ct(t3, e2) {
        (null == e2 || e2 > t3.length) && (e2 = t3.length);
        for (var r2 = 0, n2 = new Array(e2); r2 < e2; r2++)
          n2[r2] = t3[r2];
        return n2;
      }
      function dt(t3, e2) {
        if (!(t3 instanceof e2))
          throw new TypeError("Cannot call a class as a function");
      }
      function ft(t3, e2) {
        for (var r2 = 0; r2 < e2.length; r2++) {
          var n2 = e2[r2];
          n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
        }
      }
      function ht(t3, e2, r2) {
        return e2 && ft(t3.prototype, e2), r2 && ft(t3, r2), t3;
      }
      function pt(t3, e2, r2) {
        return e2 in t3 ? Object.defineProperty(t3, e2, { value: r2, enumerable: true, configurable: true, writable: true }) : t3[e2] = r2, t3;
      }
      (function(t3) {
        t3[t3["VALUE"] = 1] = "VALUE", t3[t3["INTERVAL"] = 2] = "INTERVAL", t3[t3["MIN"] = 3] = "MIN", t3[t3["MAX"] = 4] = "MAX", t3[t3["ORDER"] = 5] = "ORDER";
      })(J || (J = {}));
      var yt = (Y = {}, pt(Y, J.VALUE, 'The type of the "value" is illegal'), pt(Y, J.INTERVAL, 'The prop "interval" is invalid, "(max - min)" must be divisible by "interval"'), pt(Y, J.MIN, 'The "value" must be greater than or equal to the "min".'), pt(Y, J.MAX, 'The "value" must be less than or equal to the "max".'), pt(Y, J.ORDER, 'When "order" is false, the parameters "minRange", "maxRange", "fixed", "enabled" are invalid.'), Y), vt = function() {
        function t3(e2) {
          dt(this, t3), this.dotsPos = [], this.dotsValue = [], this.cacheRangeDir = {}, this.data = e2.data, this.max = e2.max, this.min = e2.min, this.interval = e2.interval, this.order = e2.order, this.marks = e2.marks, this.included = e2.included, this.process = e2.process, this.adsorb = e2.adsorb, this.dotOptions = e2.dotOptions, this.onError = e2.onError, this.order ? (this.minRange = e2.minRange || 0, this.maxRange = e2.maxRange || 0, this.enableCross = e2.enableCross, this.fixed = e2.fixed) : ((e2.minRange || e2.maxRange || !e2.enableCross || e2.fixed) && this.emitError(J.ORDER), this.minRange = 0, this.maxRange = 0, this.enableCross = true, this.fixed = false), this.setValue(e2.value);
        }
        return ht(t3, [{ key: "setValue", value: function(t4) {
          var e2 = this;
          this.setDotsValue(Array.isArray(t4) ? this.order ? it(t4).sort(function(t5, r2) {
            return e2.getIndexByValue(t5) - e2.getIndexByValue(r2);
          }) : it(t4) : [t4], true);
        } }, { key: "setDotsValue", value: function(t4, e2) {
          this.dotsValue = t4, e2 && this.syncDotsPos();
        } }, { key: "setDotsPos", value: function(t4) {
          var e2 = this, r2 = this.order ? it(t4).sort(function(t5, e3) {
            return t5 - e3;
          }) : t4;
          this.dotsPos = r2, this.setDotsValue(r2.map(function(t5) {
            return e2.getValueByPos(t5);
          }), this.adsorb);
        } }, { key: "getValueByPos", value: function(t4) {
          var e2 = this.parsePos(t4);
          if (this.included) {
            var r2 = 100;
            this.markList.forEach(function(n2) {
              var o2 = Math.abs(n2.pos - t4);
              o2 < r2 && (r2 = o2, e2 = n2.value);
            });
          }
          return e2;
        } }, { key: "syncDotsPos", value: function() {
          var t4 = this;
          this.dotsPos = this.dotsValue.map(function(e2) {
            return t4.parseValue(e2);
          });
        } }, { key: "getRecentDot", value: function(t4) {
          var e2 = this, r2 = this.dotsPos.filter(function(t5, r3) {
            return !(e2.getDotOption(r3) && e2.getDotOption(r3).disabled);
          }).map(function(e3) {
            return Math.abs(e3 - t4);
          });
          return r2.indexOf(Math.min.apply(Math, it(r2)));
        } }, { key: "getIndexByValue", value: function(t4) {
          return this.data ? this.data.indexOf(t4) : new Q(+t4).minus(this.min).divide(this.interval).toNumber();
        } }, { key: "getValueByIndex", value: function(t4) {
          return t4 < 0 ? t4 = 0 : t4 > this.total && (t4 = this.total), this.data ? this.data[t4] : new Q(t4).multiply(this.interval).plus(this.min).toNumber();
        } }, { key: "setDotPos", value: function(t4, e2) {
          t4 = this.getValidPos(t4, e2).pos;
          var r2 = t4 - this.dotsPos[e2];
          if (r2) {
            var n2 = new Array(this.dotsPos.length);
            this.fixed ? n2 = this.getFixedChangePosArr(r2, e2) : this.minRange || this.maxRange ? n2 = this.getLimitRangeChangePosArr(t4, r2, e2) : n2[e2] = r2, this.setDotsPos(this.dotsPos.map(function(t5, e3) {
              return t5 + (n2[e3] || 0);
            }));
          }
        } }, { key: "getFixedChangePosArr", value: function(t4, e2) {
          var r2 = this;
          return this.dotsPos.forEach(function(n2, o2) {
            if (o2 !== e2) {
              var i2 = r2.getValidPos(n2 + t4, o2), a2 = i2.pos, s2 = i2.inRange;
              s2 || (t4 = Math.min(Math.abs(a2 - n2), Math.abs(t4)) * (t4 < 0 ? -1 : 1));
            }
          }), this.dotsPos.map(function(e3) {
            return t4;
          });
        } }, { key: "getLimitRangeChangePosArr", value: function(t4, e2, r2) {
          var n2 = this, o2 = [{ index: r2, changePos: e2 }], i2 = e2;
          return [this.minRange, this.maxRange].forEach(function(a2, s2) {
            if (!a2)
              return false;
            var u2 = 0 === s2, l2 = e2 > 0, c2 = 0;
            c2 = u2 ? l2 ? 1 : -1 : l2 ? -1 : 1;
            var d2 = function(t5, e3) {
              var r3 = Math.abs(t5 - e3);
              return u2 ? r3 < n2.minRangeDir : r3 > n2.maxRangeDir;
            }, f2 = r2 + c2, h2 = n2.dotsPos[f2], p2 = t4;
            while (n2.isPos(h2) && d2(h2, p2)) {
              var y2 = n2.getValidPos(h2 + i2, f2), v2 = y2.pos;
              o2.push({ index: f2, changePos: v2 - h2 }), f2 += c2, p2 = v2, h2 = n2.dotsPos[f2];
            }
          }), this.dotsPos.map(function(t5, e3) {
            var r3 = o2.filter(function(t6) {
              return t6.index === e3;
            });
            return r3.length ? r3[0].changePos : 0;
          });
        } }, { key: "isPos", value: function(t4) {
          return "number" === typeof t4;
        } }, { key: "getValidPos", value: function(t4, e2) {
          var r2 = this.valuePosRange[e2], n2 = true;
          return t4 < r2[0] ? (t4 = r2[0], n2 = false) : t4 > r2[1] && (t4 = r2[1], n2 = false), { pos: t4, inRange: n2 };
        } }, { key: "parseValue", value: function(t4) {
          if (this.data)
            t4 = this.data.indexOf(t4);
          else if ("number" === typeof t4 || "string" === typeof t4) {
            if (t4 = +t4, t4 < this.min)
              return this.emitError(J.MIN), 0;
            if (t4 > this.max)
              return this.emitError(J.MAX), 0;
            if ("number" !== typeof t4 || t4 !== t4)
              return this.emitError(J.VALUE), 0;
            t4 = new Q(t4).minus(this.min).divide(this.interval).toNumber();
          }
          var e2 = new Q(t4).multiply(this.gap).toNumber();
          return e2 < 0 ? 0 : e2 > 100 ? 100 : e2;
        } }, { key: "parsePos", value: function(t4) {
          var e2 = Math.round(t4 / this.gap);
          return this.getValueByIndex(e2);
        } }, { key: "isActiveByPos", value: function(t4) {
          return this.processArray.some(function(e2) {
            var r2 = et(e2, 2), n2 = r2[0], o2 = r2[1];
            return t4 >= n2 && t4 <= o2;
          });
        } }, { key: "getValues", value: function() {
          if (this.data)
            return this.data;
          for (var t4 = [], e2 = 0; e2 <= this.total; e2++)
            t4.push(new Q(e2).multiply(this.interval).plus(this.min).toNumber());
          return t4;
        } }, { key: "getRangeDir", value: function(t4) {
          return t4 ? new Q(t4).divide(new Q(this.data ? this.data.length - 1 : this.max).minus(this.data ? 0 : this.min).toNumber()).multiply(100).toNumber() : 100;
        } }, { key: "emitError", value: function(t4) {
          this.onError && this.onError(t4, yt[t4]);
        } }, { key: "getDotOption", value: function(t4) {
          return Array.isArray(this.dotOptions) ? this.dotOptions[t4] : this.dotOptions;
        } }, { key: "getDotRange", value: function(t4, e2, r2) {
          if (!this.dotOptions)
            return r2;
          var n2 = this.getDotOption(t4);
          return n2 && void 0 !== n2[e2] ? this.parseValue(n2[e2]) : r2;
        } }, { key: "markList", get: function() {
          var t4 = this;
          if (!this.marks)
            return [];
          var e2 = function(e3, r2) {
            var n2 = t4.parseValue(e3);
            return tt({ pos: n2, value: e3, label: e3, active: t4.isActiveByPos(n2) }, r2);
          };
          return true === this.marks ? this.getValues().map(function(t5) {
            return e2(t5);
          }) : "[object Object]" === Object.prototype.toString.call(this.marks) ? Object.keys(this.marks).sort(function(t5, e3) {
            return +t5 - +e3;
          }).map(function(r2) {
            var n2 = t4.marks[r2];
            return e2(r2, "string" !== typeof n2 ? n2 : { label: n2 });
          }) : Array.isArray(this.marks) ? this.marks.map(function(t5) {
            return e2(t5);
          }) : "function" === typeof this.marks ? this.getValues().map(function(e3) {
            return { value: e3, result: t4.marks(e3) };
          }).filter(function(t5) {
            var e3 = t5.result;
            return !!e3;
          }).map(function(t5) {
            var r2 = t5.value, n2 = t5.result;
            return e2(r2, n2);
          }) : [];
        } }, { key: "processArray", get: function() {
          if (this.process) {
            if ("function" === typeof this.process)
              return this.process(this.dotsPos);
            if (1 === this.dotsPos.length)
              return [[0, this.dotsPos[0]]];
            if (this.dotsPos.length > 1)
              return [[Math.min.apply(Math, it(this.dotsPos)), Math.max.apply(Math, it(this.dotsPos))]];
          }
          return [];
        } }, { key: "total", get: function() {
          var t4 = 0;
          return t4 = this.data ? this.data.length - 1 : new Q(this.max).minus(this.min).divide(this.interval).toNumber(), t4 - Math.floor(t4) !== 0 ? (this.emitError(J.INTERVAL), 0) : t4;
        } }, { key: "gap", get: function() {
          return 100 / this.total;
        } }, { key: "minRangeDir", get: function() {
          return this.cacheRangeDir[this.minRange] ? this.cacheRangeDir[this.minRange] : this.cacheRangeDir[this.minRange] = this.getRangeDir(this.minRange);
        } }, { key: "maxRangeDir", get: function() {
          return this.cacheRangeDir[this.maxRange] ? this.cacheRangeDir[this.maxRange] : this.cacheRangeDir[this.maxRange] = this.getRangeDir(this.maxRange);
        } }, { key: "valuePosRange", get: function() {
          var t4 = this, e2 = this.dotsPos, r2 = [];
          return e2.forEach(function(n2, o2) {
            r2.push([Math.max(t4.minRange ? t4.minRangeDir * o2 : 0, t4.enableCross ? 0 : e2[o2 - 1] || 0, t4.getDotRange(o2, "min", 0)), Math.min(t4.minRange ? 100 - t4.minRangeDir * (e2.length - 1 - o2) : 100, t4.enableCross ? 100 : e2[o2 + 1] || 100, t4.getDotRange(o2, "max", 100))]);
          }), r2;
        } }, { key: "dotsIndex", get: function() {
          var t4 = this;
          return this.dotsValue.map(function(e2) {
            return t4.getIndexByValue(e2);
          });
        } }]), t3;
      }();
      function mt(t3, e2) {
        if (!(t3 instanceof e2))
          throw new TypeError("Cannot call a class as a function");
      }
      function bt(t3, e2) {
        for (var r2 = 0; r2 < e2.length; r2++) {
          var n2 = e2[r2];
          n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
        }
      }
      function gt(t3, e2, r2) {
        return e2 && bt(t3.prototype, e2), r2 && bt(t3, r2), t3;
      }
      var kt = function() {
        function t3(e2) {
          mt(this, t3), this.states = 0, this.map = e2;
        }
        return gt(t3, [{ key: "add", value: function(t4) {
          this.states |= t4;
        } }, { key: "delete", value: function(t4) {
          this.states &= ~t4;
        } }, { key: "toggle", value: function(t4) {
          this.has(t4) ? this.delete(t4) : this.add(t4);
        } }, { key: "has", value: function(t4) {
          return !!(this.states & t4);
        } }]), t3;
      }();
      r("4abb");
      function Ot(t3, e2) {
        return St(t3) || wt(t3, e2) || At(t3, e2) || xt();
      }
      function xt() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function wt(t3, e2) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t3)) {
          var r2 = [], n2 = true, o2 = false, i2 = void 0;
          try {
            for (var a2, s2 = t3[Symbol.iterator](); !(n2 = (a2 = s2.next()).done); n2 = true)
              if (r2.push(a2.value), e2 && r2.length === e2)
                break;
          } catch (u2) {
            o2 = true, i2 = u2;
          } finally {
            try {
              n2 || null == s2["return"] || s2["return"]();
            } finally {
              if (o2)
                throw i2;
            }
          }
          return r2;
        }
      }
      function St(t3) {
        if (Array.isArray(t3))
          return t3;
      }
      function Pt(t3, e2) {
        var r2 = Object.keys(t3);
        if (Object.getOwnPropertySymbols) {
          var n2 = Object.getOwnPropertySymbols(t3);
          e2 && (n2 = n2.filter(function(e3) {
            return Object.getOwnPropertyDescriptor(t3, e3).enumerable;
          })), r2.push.apply(r2, n2);
        }
        return r2;
      }
      function Dt(t3) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var r2 = null != arguments[e2] ? arguments[e2] : {};
          e2 % 2 ? Pt(Object(r2), true).forEach(function(e3) {
            Rt(t3, e3, r2[e3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r2)) : Pt(Object(r2)).forEach(function(e3) {
            Object.defineProperty(t3, e3, Object.getOwnPropertyDescriptor(r2, e3));
          });
        }
        return t3;
      }
      function Rt(t3, e2, r2) {
        return e2 in t3 ? Object.defineProperty(t3, e2, { value: r2, enumerable: true, configurable: true, writable: true }) : t3[e2] = r2, t3;
      }
      function jt(t3) {
        return Mt(t3) || Vt(t3) || At(t3) || Et();
      }
      function Et() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function At(t3, e2) {
        if (t3) {
          if ("string" === typeof t3)
            return _t(t3, e2);
          var r2 = Object.prototype.toString.call(t3).slice(8, -1);
          return "Object" === r2 && t3.constructor && (r2 = t3.constructor.name), "Map" === r2 || "Set" === r2 ? Array.from(t3) : "Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? _t(t3, e2) : void 0;
        }
      }
      function Vt(t3) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t3))
          return Array.from(t3);
      }
      function Mt(t3) {
        if (Array.isArray(t3))
          return _t(t3);
      }
      function _t(t3, e2) {
        (null == e2 || e2 > t3.length) && (e2 = t3.length);
        for (var r2 = 0, n2 = new Array(e2); r2 < e2; r2++)
          n2[r2] = t3[r2];
        return n2;
      }
      function Ct(t3) {
        return Ct = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && "function" === typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        }, Ct(t3);
      }
      function It(t3, e2) {
        if (!(t3 instanceof e2))
          throw new TypeError("Cannot call a class as a function");
      }
      function Lt(t3, e2) {
        for (var r2 = 0; r2 < e2.length; r2++) {
          var n2 = e2[r2];
          n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
        }
      }
      function Tt(t3, e2, r2) {
        return e2 && Lt(t3.prototype, e2), r2 && Lt(t3, r2), t3;
      }
      function Bt(t3, e2) {
        if ("function" !== typeof e2 && null !== e2)
          throw new TypeError("Super expression must either be null or a function");
        t3.prototype = Object.create(e2 && e2.prototype, { constructor: { value: t3, writable: true, configurable: true } }), e2 && Nt(t3, e2);
      }
      function Nt(t3, e2) {
        return Nt = Object.setPrototypeOf || function(t4, e3) {
          return t4.__proto__ = e3, t4;
        }, Nt(t3, e2);
      }
      function zt(t3) {
        var e2 = Ft();
        return function() {
          var r2, n2 = $t(t3);
          if (e2) {
            var o2 = $t(this).constructor;
            r2 = Reflect.construct(n2, arguments, o2);
          } else
            r2 = n2.apply(this, arguments);
          return Ht(this, r2);
        };
      }
      function Ht(t3, e2) {
        return !e2 || "object" !== Ct(e2) && "function" !== typeof e2 ? Ut(t3) : e2;
      }
      function Ut(t3) {
        if (void 0 === t3)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t3;
      }
      function Ft() {
        if ("undefined" === typeof Reflect || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if ("function" === typeof Proxy)
          return true;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          })), true;
        } catch (t3) {
          return false;
        }
      }
      function $t(t3) {
        return $t = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
          return t4.__proto__ || Object.getPrototypeOf(t4);
        }, $t(t3);
      }
      var Wt = { None: 0, Drag: 2, Focus: 4 }, Gt = 4, Xt = function() {
        var t3 = function(t4) {
          Bt(r2, t4);
          var e2 = zt(r2);
          function r2() {
            var t5;
            return It(this, r2), t5 = e2.apply(this, arguments), t5.states = new kt(Wt), t5.scale = 1, t5.focusDotIndex = 0, t5;
          }
          return Tt(r2, [{ key: "isObjectData", value: function(t5) {
            return !!t5 && "[object Object]" === Object.prototype.toString.call(t5);
          } }, { key: "isObjectArrayData", value: function(t5) {
            return !!t5 && Array.isArray(t5) && t5.length > 0 && "object" === Ct(t5[0]);
          } }, { key: "onValueChanged", value: function() {
            this.control && !this.states.has(Wt.Drag) && this.isNotSync && (this.control.setValue(this.value), this.syncValueByPos());
          } }, { key: "created", value: function() {
            this.initControl();
          } }, { key: "mounted", value: function() {
            this.bindEvent();
          } }, { key: "beforeDestroy", value: function() {
            this.unbindEvent();
          } }, { key: "bindEvent", value: function() {
            document.addEventListener("touchmove", this.dragMove, { passive: false }), document.addEventListener("touchend", this.dragEnd, { passive: false }), document.addEventListener("mousedown", this.blurHandle), document.addEventListener("mousemove", this.dragMove, { passive: false }), document.addEventListener("mouseup", this.dragEnd), document.addEventListener("mouseleave", this.dragEnd), document.addEventListener("keydown", this.keydownHandle);
          } }, { key: "unbindEvent", value: function() {
            document.removeEventListener("touchmove", this.dragMove), document.removeEventListener("touchend", this.dragEnd), document.removeEventListener("mousedown", this.blurHandle), document.removeEventListener("mousemove", this.dragMove), document.removeEventListener("mouseup", this.dragEnd), document.removeEventListener("mouseleave", this.dragEnd), document.removeEventListener("keydown", this.keydownHandle);
          } }, { key: "setScale", value: function() {
            var t5 = new Q(Math.floor(this.isHorizontal ? this.$refs.rail.offsetWidth : this.$refs.rail.offsetHeight));
            void 0 !== this.zoom && t5.multiply(this.zoom), t5.divide(100), this.scale = t5.toNumber();
          } }, { key: "initControl", value: function() {
            var t5 = this;
            this.control = new vt({ value: this.value, data: this.sliderData, enableCross: this.enableCross, fixed: this.fixed, max: this.max, min: this.min, interval: this.interval, minRange: this.minRange, maxRange: this.maxRange, order: this.order, marks: this.sliderMarks, included: this.included, process: this.process, adsorb: this.adsorb, dotOptions: this.dotOptions, onError: this.emitError }), this.syncValueByPos(), ["data", "enableCross", "fixed", "max", "min", "interval", "minRange", "maxRange", "order", "marks", "process", "adsorb", "included", "dotOptions"].forEach(function(e3) {
              t5.$watch(e3, function(r3) {
                if ("data" === e3 && Array.isArray(t5.control.data) && Array.isArray(r3) && t5.control.data.length === r3.length && r3.every(function(e4, r4) {
                  return e4 === t5.control.data[r4];
                }))
                  return false;
                switch (e3) {
                  case "data":
                  case "dataLabel":
                  case "dataValue":
                    t5.control.data = t5.sliderData;
                    break;
                  case "mark":
                    t5.control.marks = t5.sliderMarks;
                    break;
                  default:
                    t5.control[e3] = r3;
                }
                ["data", "max", "min", "interval"].indexOf(e3) > -1 && t5.control.syncDotsPos();
              });
            });
          } }, { key: "syncValueByPos", value: function() {
            var t5 = this.control.dotsValue;
            this.isDiff(t5, Array.isArray(this.value) ? this.value : [this.value]) && this.$emit("change", 1 === t5.length ? t5[0] : jt(t5), this.focusDotIndex);
          } }, { key: "isDiff", value: function(t5, e3) {
            return t5.length !== e3.length || t5.some(function(t6, r3) {
              return t6 !== e3[r3];
            });
          } }, { key: "emitError", value: function(t5, e3) {
            this.silent || console.error("[VueSlider error]: ".concat(e3)), this.$emit("error", t5, e3);
          } }, { key: "dragStartOnProcess", value: function(t5) {
            if (this.dragOnClick) {
              this.setScale();
              var e3 = this.getPosByEvent(t5), r3 = this.control.getRecentDot(e3);
              if (this.dots[r3].disabled)
                return;
              this.dragStart(r3), this.control.setDotPos(e3, this.focusDotIndex), this.lazy || this.syncValueByPos();
            }
          } }, { key: "dragStart", value: function(t5) {
            this.focusDotIndex = t5, this.setScale(), this.states.add(Wt.Drag), this.states.add(Wt.Focus), this.$emit("drag-start", this.focusDotIndex);
          } }, { key: "dragMove", value: function(t5) {
            if (!this.states.has(Wt.Drag))
              return false;
            t5.preventDefault();
            var e3 = this.getPosByEvent(t5);
            this.isCrossDot(e3), this.control.setDotPos(e3, this.focusDotIndex), this.lazy || this.syncValueByPos();
            var r3 = this.control.dotsValue;
            this.$emit("dragging", 1 === r3.length ? r3[0] : jt(r3), this.focusDotIndex);
          } }, { key: "isCrossDot", value: function(t5) {
            if (this.canSort) {
              var e3 = this.focusDotIndex, r3 = t5;
              if (r3 > this.dragRange[1] ? (r3 = this.dragRange[1], this.focusDotIndex++) : r3 < this.dragRange[0] && (r3 = this.dragRange[0], this.focusDotIndex--), e3 !== this.focusDotIndex) {
                var n2 = this.$refs["dot-".concat(this.focusDotIndex)];
                n2 && n2.$el && n2.$el.focus(), this.control.setDotPos(r3, e3);
              }
            }
          } }, { key: "dragEnd", value: function(t5) {
            var e3 = this;
            if (!this.states.has(Wt.Drag))
              return false;
            setTimeout(function() {
              e3.lazy && e3.syncValueByPos(), e3.included && e3.isNotSync ? e3.control.setValue(e3.value) : e3.control.syncDotsPos(), e3.states.delete(Wt.Drag), e3.useKeyboard && !("targetTouches" in t5) || e3.states.delete(Wt.Focus), e3.$emit("drag-end", e3.focusDotIndex);
            });
          } }, { key: "blurHandle", value: function(t5) {
            if (!this.states.has(Wt.Focus) || !this.$refs.container || this.$refs.container.contains(t5.target))
              return false;
            this.states.delete(Wt.Focus);
          } }, { key: "clickHandle", value: function(t5) {
            if (!this.clickable || this.disabled)
              return false;
            if (!this.states.has(Wt.Drag)) {
              this.setScale();
              var e3 = this.getPosByEvent(t5);
              this.setValueByPos(e3);
            }
          } }, { key: "focus", value: function() {
            var t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            this.states.add(Wt.Focus), this.focusDotIndex = t5;
          } }, { key: "blur", value: function() {
            this.states.delete(Wt.Focus);
          } }, { key: "getValue", value: function() {
            var t5 = this.control.dotsValue;
            return 1 === t5.length ? t5[0] : t5;
          } }, { key: "getIndex", value: function() {
            var t5 = this.control.dotsIndex;
            return 1 === t5.length ? t5[0] : t5;
          } }, { key: "setValue", value: function(t5) {
            this.control.setValue(Array.isArray(t5) ? jt(t5) : [t5]), this.syncValueByPos();
          } }, { key: "setIndex", value: function(t5) {
            var e3 = this, r3 = Array.isArray(t5) ? t5.map(function(t6) {
              return e3.control.getValueByIndex(t6);
            }) : this.control.getValueByIndex(t5);
            this.setValue(r3);
          } }, { key: "setValueByPos", value: function(t5) {
            var e3 = this, r3 = this.control.getRecentDot(t5);
            if (this.disabled || this.dots[r3].disabled)
              return false;
            this.focusDotIndex = r3, this.control.setDotPos(t5, r3), this.syncValueByPos(), this.useKeyboard && this.states.add(Wt.Focus), setTimeout(function() {
              e3.included && e3.isNotSync ? e3.control.setValue(e3.value) : e3.control.syncDotsPos();
            });
          } }, { key: "keydownHandle", value: function(t5) {
            var e3 = this;
            if (!this.useKeyboard || !this.states.has(Wt.Focus))
              return false;
            var r3 = this.included && this.marks, n2 = G(t5, { direction: this.direction, max: r3 ? this.control.markList.length - 1 : this.control.total, min: 0, hook: this.keydownHook });
            if (n2) {
              t5.preventDefault();
              var o2 = -1, i2 = 0;
              r3 ? (this.control.markList.some(function(t6, r4) {
                return t6.value === e3.control.dotsValue[e3.focusDotIndex] && (o2 = n2(r4), true);
              }), o2 < 0 ? o2 = 0 : o2 > this.control.markList.length - 1 && (o2 = this.control.markList.length - 1), i2 = this.control.markList[o2].pos) : (o2 = n2(this.control.getIndexByValue(this.control.dotsValue[this.focusDotIndex])), i2 = this.control.parseValue(this.control.getValueByIndex(o2))), this.isCrossDot(i2), this.control.setDotPos(i2, this.focusDotIndex), this.syncValueByPos();
            }
          } }, { key: "getPosByEvent", value: function(t5) {
            return W(t5, this.$refs.rail, this.isReverse, this.zoom)[this.isHorizontal ? "x" : "y"] / this.scale;
          } }, { key: "renderSlot", value: function(t5, e3, r3, n2) {
            var o2 = this.$createElement, i2 = this.$scopedSlots[t5];
            return i2 ? n2 ? i2(e3) : o2("template", { slot: t5 }, [i2(e3)]) : r3;
          } }, { key: "render", value: function() {
            var t5 = this, e3 = arguments[0];
            return e3("div", s()([{ ref: "container", class: this.containerClasses, style: this.containerStyles, on: { click: this.clickHandle, touchstart: this.dragStartOnProcess, mousedown: this.dragStartOnProcess } }, this.$attrs]), [e3("div", { ref: "rail", class: "vue-slider-rail", style: this.railStyle }, [this.processArray.map(function(r3, n2) {
              return t5.renderSlot("process", r3, e3("div", { class: "vue-slider-process", key: "process-".concat(n2), style: r3.style }), true);
            }), this.sliderMarks ? e3("div", { class: "vue-slider-marks" }, [this.control.markList.map(function(r3, n2) {
              var o2;
              return t5.renderSlot("mark", r3, e3("vue-slider-mark", { key: "mark-".concat(n2), attrs: { mark: r3, hideLabel: t5.hideLabel, stepStyle: t5.stepStyle, stepActiveStyle: t5.stepActiveStyle, labelStyle: t5.labelStyle, labelActiveStyle: t5.labelActiveStyle }, style: (o2 = {}, Rt(o2, t5.isHorizontal ? "height" : "width", "100%"), Rt(o2, t5.isHorizontal ? "width" : "height", t5.tailSize), Rt(o2, t5.mainDirection, "".concat(r3.pos, "%")), o2), on: { pressLabel: function(e4) {
                return t5.clickable && t5.setValueByPos(e4);
              } } }, [t5.renderSlot("step", r3, null), t5.renderSlot("label", r3, null)]), true);
            })]) : null, this.dots.map(function(r3, n2) {
              var o2;
              return e3("vue-slider-dot", { ref: "dot-".concat(n2), key: "dot-".concat(n2), attrs: Dt({ value: r3.value, disabled: r3.disabled, focus: r3.focus, "dot-style": [r3.style, r3.disabled ? r3.disabledStyle : null, r3.focus ? r3.focusStyle : null], tooltip: r3.tooltip || t5.tooltip, "tooltip-style": [t5.tooltipStyle, r3.tooltipStyle, r3.disabled ? r3.tooltipDisabledStyle : null, r3.focus ? r3.tooltipFocusStyle : null], "tooltip-formatter": Array.isArray(t5.sliderTooltipFormatter) ? t5.sliderTooltipFormatter[n2] : t5.sliderTooltipFormatter, "tooltip-placement": t5.tooltipDirections[n2], role: "slider", "aria-valuenow": r3.value, "aria-valuemin": t5.min, "aria-valuemax": t5.max, "aria-orientation": t5.isHorizontal ? "horizontal" : "vertical", tabindex: "0" }, t5.dotAttrs), style: [t5.dotBaseStyle, (o2 = {}, Rt(o2, t5.mainDirection, "".concat(r3.pos, "%")), Rt(o2, "transition", "".concat(t5.mainDirection, " ").concat(t5.animateTime, "s")), o2)], on: { "drag-start": function() {
                return t5.dragStart(n2);
              } }, nativeOn: { focus: function() {
                return !r3.disabled && t5.focus(n2);
              }, blur: function() {
                return t5.blur();
              } } }, [t5.renderSlot("dot", r3, null), t5.renderSlot("tooltip", r3, null)]);
            }), this.renderSlot("default", { value: this.getValue() }, null, true)])]);
          } }, { key: "tailSize", get: function() {
            return F((this.isHorizontal ? this.height : this.width) || Gt);
          } }, { key: "containerClasses", get: function() {
            return ["vue-slider", ["vue-slider-".concat(this.direction)], { "vue-slider-disabled": this.disabled }];
          } }, { key: "containerStyles", get: function() {
            var t5 = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize], e3 = Ot(t5, 2), r3 = e3[0], n2 = e3[1], o2 = this.width ? F(this.width) : this.isHorizontal ? "auto" : F(Gt), i2 = this.height ? F(this.height) : this.isHorizontal ? F(Gt) : "auto";
            return { padding: this.contained ? "".concat(n2 / 2, "px ").concat(r3 / 2, "px") : this.isHorizontal ? "".concat(n2 / 2, "px 0") : "0 ".concat(r3 / 2, "px"), width: o2, height: i2 };
          } }, { key: "processArray", get: function() {
            var t5 = this;
            return this.control.processArray.map(function(e3, r3) {
              var n2, o2 = Ot(e3, 3), i2 = o2[0], a2 = o2[1], s2 = o2[2];
              if (i2 > a2) {
                var u2 = [a2, i2];
                i2 = u2[0], a2 = u2[1];
              }
              var l2 = t5.isHorizontal ? "width" : "height";
              return { start: i2, end: a2, index: r3, style: Dt(Dt((n2 = {}, Rt(n2, t5.isHorizontal ? "height" : "width", "100%"), Rt(n2, t5.isHorizontal ? "top" : "left", 0), Rt(n2, t5.mainDirection, "".concat(i2, "%")), Rt(n2, l2, "".concat(a2 - i2, "%")), Rt(n2, "transitionProperty", "".concat(l2, ",").concat(t5.mainDirection)), Rt(n2, "transitionDuration", "".concat(t5.animateTime, "s")), n2), t5.processStyle), s2) };
            });
          } }, { key: "dotBaseStyle", get: function() {
            var t5, e3 = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize], r3 = Ot(e3, 2), n2 = r3[0], o2 = r3[1];
            return t5 = this.isHorizontal ? Rt({ transform: "translate(".concat(this.isReverse ? "50%" : "-50%", ", -50%)"), "-WebkitTransform": "translate(".concat(this.isReverse ? "50%" : "-50%", ", -50%)"), top: "50%" }, "ltr" === this.direction ? "left" : "right", "0") : Rt({ transform: "translate(-50%, ".concat(this.isReverse ? "50%" : "-50%", ")"), "-WebkitTransform": "translate(-50%, ".concat(this.isReverse ? "50%" : "-50%", ")"), left: "50%" }, "btt" === this.direction ? "bottom" : "top", "0"), Dt({ width: "".concat(n2, "px"), height: "".concat(o2, "px") }, t5);
          } }, { key: "mainDirection", get: function() {
            switch (this.direction) {
              case "ltr":
                return "left";
              case "rtl":
                return "right";
              case "btt":
                return "bottom";
              case "ttb":
                return "top";
            }
          } }, { key: "isHorizontal", get: function() {
            return "ltr" === this.direction || "rtl" === this.direction;
          } }, { key: "isReverse", get: function() {
            return "rtl" === this.direction || "btt" === this.direction;
          } }, { key: "tooltipDirections", get: function() {
            var t5 = this.tooltipPlacement || (this.isHorizontal ? "top" : "left");
            return Array.isArray(t5) ? t5 : this.dots.map(function() {
              return t5;
            });
          } }, { key: "dots", get: function() {
            var t5 = this;
            return this.control.dotsPos.map(function(e3, r3) {
              return Dt({ pos: e3, index: r3, value: t5.control.dotsValue[r3], focus: t5.states.has(Wt.Focus) && t5.focusDotIndex === r3, disabled: t5.disabled, style: t5.dotStyle }, (Array.isArray(t5.dotOptions) ? t5.dotOptions[r3] : t5.dotOptions) || {});
            });
          } }, { key: "animateTime", get: function() {
            return this.states.has(Wt.Drag) ? 0 : this.duration;
          } }, { key: "canSort", get: function() {
            return this.order && !this.minRange && !this.maxRange && !this.fixed && this.enableCross;
          } }, { key: "sliderData", get: function() {
            var t5 = this;
            return this.isObjectArrayData(this.data) ? this.data.map(function(e3) {
              return e3[t5.dataValue];
            }) : this.isObjectData(this.data) ? Object.keys(this.data) : this.data;
          } }, { key: "sliderMarks", get: function() {
            var t5 = this;
            return this.marks ? this.marks : this.isObjectArrayData(this.data) ? function(e3) {
              var r3 = { label: e3 };
              return t5.data.some(function(n2) {
                return n2[t5.dataValue] === e3 && (r3.label = n2[t5.dataLabel], true);
              }), r3;
            } : this.isObjectData(this.data) ? this.data : void 0;
          } }, { key: "sliderTooltipFormatter", get: function() {
            var t5 = this;
            if (this.tooltipFormatter)
              return this.tooltipFormatter;
            if (this.isObjectArrayData(this.data))
              return function(e4) {
                var r3 = "" + e4;
                return t5.data.some(function(n2) {
                  return n2[t5.dataValue] === e4 && (r3 = n2[t5.dataLabel], true);
                }), r3;
              };
            if (this.isObjectData(this.data)) {
              var e3 = this.data;
              return function(t6) {
                return e3[t6];
              };
            }
          } }, { key: "isNotSync", get: function() {
            var t5 = this.control.dotsValue;
            return Array.isArray(this.value) ? this.value.length !== t5.length || this.value.some(function(e3, r3) {
              return e3 !== t5[r3];
            }) : this.value !== t5[0];
          } }, { key: "dragRange", get: function() {
            var t5 = this.dots[this.focusDotIndex - 1], e3 = this.dots[this.focusDotIndex + 1];
            return [t5 ? t5.pos : -1 / 0, e3 ? e3.pos : 1 / 0];
          } }]), r2;
        }(c.a);
        return u([h("change", { default: 0 })], t3.prototype, "value", void 0), u([p({ type: Boolean, default: false })], t3.prototype, "silent", void 0), u([p({ default: "ltr", validator: function(t4) {
          return ["ltr", "rtl", "ttb", "btt"].indexOf(t4) > -1;
        } })], t3.prototype, "direction", void 0), u([p({ type: [Number, String] })], t3.prototype, "width", void 0), u([p({ type: [Number, String] })], t3.prototype, "height", void 0), u([p({ default: 14 })], t3.prototype, "dotSize", void 0), u([p({ default: false })], t3.prototype, "contained", void 0), u([p({ type: Number, default: 0 })], t3.prototype, "min", void 0), u([p({ type: Number, default: 100 })], t3.prototype, "max", void 0), u([p({ type: Number, default: 1 })], t3.prototype, "interval", void 0), u([p({ type: Boolean, default: false })], t3.prototype, "disabled", void 0), u([p({ type: Boolean, default: true })], t3.prototype, "clickable", void 0), u([p({ type: Boolean, default: false })], t3.prototype, "dragOnClick", void 0), u([p({ type: Number, default: 0.5 })], t3.prototype, "duration", void 0), u([p({ type: [Object, Array] })], t3.prototype, "data", void 0), u([p({ type: String, default: "value" })], t3.prototype, "dataValue", void 0), u([p({ type: String, default: "label" })], t3.prototype, "dataLabel", void 0), u([p({ type: Boolean, default: false })], t3.prototype, "lazy", void 0), u([p({ type: String, validator: function(t4) {
          return ["none", "always", "focus", "hover", "active"].indexOf(t4) > -1;
        }, default: "active" })], t3.prototype, "tooltip", void 0), u([p({ type: [String, Array], validator: function(t4) {
          return (Array.isArray(t4) ? t4 : [t4]).every(function(t5) {
            return ["top", "right", "bottom", "left"].indexOf(t5) > -1;
          });
        } })], t3.prototype, "tooltipPlacement", void 0), u([p({ type: [String, Array, Function] })], t3.prototype, "tooltipFormatter", void 0), u([p({ type: Boolean, default: true })], t3.prototype, "useKeyboard", void 0), u([p(Function)], t3.prototype, "keydownHook", void 0), u([p({ type: Boolean, default: true })], t3.prototype, "enableCross", void 0), u([p({ type: Boolean, default: false })], t3.prototype, "fixed", void 0), u([p({ type: Boolean, default: true })], t3.prototype, "order", void 0), u([p(Number)], t3.prototype, "minRange", void 0), u([p(Number)], t3.prototype, "maxRange", void 0), u([p({ type: [Boolean, Object, Array, Function], default: false })], t3.prototype, "marks", void 0), u([p({ type: [Boolean, Function], default: true })], t3.prototype, "process", void 0), u([p({ type: [Number] })], t3.prototype, "zoom", void 0), u([p(Boolean)], t3.prototype, "included", void 0), u([p(Boolean)], t3.prototype, "adsorb", void 0), u([p(Boolean)], t3.prototype, "hideLabel", void 0), u([p()], t3.prototype, "dotOptions", void 0), u([p()], t3.prototype, "dotAttrs", void 0), u([p()], t3.prototype, "railStyle", void 0), u([p()], t3.prototype, "processStyle", void 0), u([p()], t3.prototype, "dotStyle", void 0), u([p()], t3.prototype, "tooltipStyle", void 0), u([p()], t3.prototype, "stepStyle", void 0), u([p()], t3.prototype, "stepActiveStyle", void 0), u([p()], t3.prototype, "labelStyle", void 0), u([p()], t3.prototype, "labelActiveStyle", void 0), u([y("value")], t3.prototype, "onValueChanged", null), t3 = u([f()({ name: "VueSlider", data: function() {
          return { control: null };
        }, components: { VueSliderDot: j, VueSliderMark: U } })], t3), t3;
      }(), qt = Xt;
      qt.VueSliderMark = U, qt.VueSliderDot = j;
      var Kt = qt;
      e["default"] = Kt;
    } })["default"];
  });
})(vueSliderComponent_umd_min);
var vueSliderComponent_umd_minExports = vueSliderComponent_umd_min.exports;
const VueSliderComponent = /* @__PURE__ */ getDefaultExportFromCjs(vueSliderComponent_umd_minExports);
const _default = "";
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
let Slider$1 = class Slider extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "$refs");
    __publicField(this, "width");
    __publicField(this, "value");
    __publicField(this, "min");
    __publicField(this, "max");
    __publicField(this, "interval");
    __publicField(this, "tooltip");
    __publicField(this, "prefix");
    __publicField(this, "suffix");
    __publicField(this, "disabled");
    __publicField(this, "data");
    __publicField(this, "simpleTheme");
    __publicField(this, "displayValue", 1);
    __publicField(this, "debounced", false);
    __publicField(this, "ro");
  }
  updateLocalValue() {
    this.displayValue = this.value;
  }
  created() {
    this.$on("input", this.setValue);
  }
  mounted() {
    this.ro = new index((entries, observer) => {
      for (let entry of entries) {
        entry.contentRect;
        if (!this.debounced) {
          this.debounce().then(() => {
            var _a;
            if ((_a = this.$refs) == null ? void 0 : _a.slider)
              ;
          });
        }
      }
    });
    this.ro.observe(this.$refs.slider.$el);
    this.displayValue = this.value;
  }
  beforeDestroy() {
    this.ro.unobserve(this.$refs.slider.$el);
  }
  destroyed() {
    this.$off("input", this.setValue);
  }
  emitInput(val) {
    this.$emit("input", val);
  }
  setValue(val) {
    this.displayValue = val;
  }
  debounce() {
    return new Promise((resolve) => {
      if (!this.debounced) {
        this.debounced = true;
        setTimeout(() => {
          this.debounced = false;
          resolve();
        }, 500);
      }
    });
  }
};
__decorateClass$2([
  Watch("value")
], Slider$1.prototype, "updateLocalValue", 1);
__decorateClass$2([
  Prop()
], Slider$1.prototype, "width", 2);
__decorateClass$2([
  Prop({ default: 1 })
], Slider$1.prototype, "value", 2);
__decorateClass$2([
  Prop({ default: 0 })
], Slider$1.prototype, "min", 2);
__decorateClass$2([
  Prop({ default: 100 })
], Slider$1.prototype, "max", 2);
__decorateClass$2([
  Prop({ default: 1 })
], Slider$1.prototype, "interval", 2);
__decorateClass$2([
  Prop({ default: "always" })
], Slider$1.prototype, "tooltip", 2);
__decorateClass$2([
  Prop({ default: "" })
], Slider$1.prototype, "prefix", 2);
__decorateClass$2([
  Prop({ default: "" })
], Slider$1.prototype, "suffix", 2);
__decorateClass$2([
  Prop({ default: false })
], Slider$1.prototype, "disabled", 2);
__decorateClass$2([
  Prop()
], Slider$1.prototype, "data", 2);
__decorateClass$2([
  Prop({ default: false })
], Slider$1.prototype, "simpleTheme", 2);
Slider$1 = __decorateClass$2([
  Component({
    components: {
      VueSliderComponent
    }
  })
], Slider$1);
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("vue-slider-component", _vm._g(_vm._b({
    ref: "slider",
    staticClass: "s-slider",
    class: {
      "s-slider--simple": _vm.simpleTheme,
      "s-slider--has-tooltip": _vm.tooltip === "always"
    },
    attrs: {
      "width": _vm.width,
      "height": 8,
      "dot-size": [24, 16],
      "tooltip": _vm.tooltip,
      "tooltip-placement": "bottom",
      "min": _vm.min,
      "max": _vm.max,
      "interval": _vm.interval,
      "value": _vm.displayValue,
      "tooltip-formatter": _vm.prefix + "{value}" + _vm.suffix,
      "data": _vm.data,
      "disabled": _vm.disabled
    },
    on: {
      "change": function(value) {
        return _vm.emitInput(value);
      }
    }
  }, "vue-slider-component", _vm.$attrs, false), _vm.$listeners));
};
var staticRenderFns$2 = [];
const Slider_vue_vue_type_style_index_0_lang = "";
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(
  Slider$1,
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
const Slider2 = /* @__PURE__ */ function() {
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
let SliderTwo$1 = class SliderTwo extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "$refs");
    __publicField(this, "isDragging", false);
    __publicField(this, "size", 0);
    __publicField(this, "currentValue", 0);
    __publicField(this, "lazy", false);
    __publicField(this, "offset", null);
    __publicField(this, "range", []);
    __publicField(this, "currentWidth", 0);
    __publicField(this, "currentHeight", 0);
    __publicField(this, "bounced", false);
    __publicField(this, "halt", false);
    __publicField(this, "interval");
    __publicField(this, "steps");
    __publicField(this, "data");
    __publicField(this, "dataIndexing");
    __publicField(this, "value");
    __publicField(this, "min");
    __publicField(this, "max");
    __publicField(this, "tooltip");
    __publicField(this, "suffix");
    __publicField(this, "prefix");
    __publicField(this, "simpleTheme");
    __publicField(this, "marks");
    __publicField(this, "labels");
    __publicField(this, "isDisabled");
    __publicField(this, "draggable");
  }
  get val() {
    if (this.dataIndexing) {
      return this.data ? this.data.indexOf(this.data[this.currentValue]) : this.currentValue;
    } else {
      return this.data ? this.data[this.currentValue] : this.currentValue;
    }
  }
  set val(newVal) {
    if (this.data) {
      let index2 = this.data.indexOf(newVal);
      if (index2 > -1) {
        this.currentValue = index2;
      }
    } else {
      this.currentValue = newVal;
    }
  }
  get displayValue() {
    if (this.data) {
      return this.dataIndexing ? this.data[this.currentIndex] : this.currentValue;
    } else {
      return this.currentValue;
    }
  }
  get currentIndex() {
    return (this.currentValue - this.minimum) / this.spacing;
  }
  get indexRange() {
    return [0, this.currentIndex];
  }
  get minimum() {
    return this.data ? 0 : this.min;
  }
  get maximum() {
    return this.data ? this.data.length - 1 : this.max;
  }
  get spacing() {
    return this.data ? 1 : this.interval;
  }
  get multiple() {
    let decimals = `${this.interval}`.split(".")[1];
    return decimals ? Math.pow(10, decimals.length) : 1;
  }
  get total() {
    if (this.data) {
      return this.data.length - 1;
    } else if (Math.floor((this.maximum - this.minimum) * this.multiple) % (this.interval * this.multiple) !== 0) {
      console.error(
        "[ERROR]: Prop[interval] must be a divisor of [max] - [min]"
      );
    }
    return (this.maximum - this.minimum) / this.interval;
  }
  get gap() {
    return this.size / this.total;
  }
  get position() {
    return (this.currentValue - this.minimum) / this.spacing * this.gap;
  }
  get limit() {
    return [0, this.size];
  }
  get valueLimit() {
    return [this.minimum, this.maximum];
  }
  watchValue(newVal) {
    this.setValue(newVal);
  }
  debounce() {
    return new Promise((resolve) => {
      if (!this.bounced) {
        this.bounced = true;
        setTimeout(() => {
          this.bounced = false;
          resolve();
        }, 100);
      }
    });
  }
  dnr() {
    this.debounce().then(() => {
      let size = this.$refs.elem.getBoundingClientRect();
      let newWidth = size.width;
      let newHeight = size.height;
      if (newWidth != this.currentWidth || newHeight != this.currentHeight) {
        this.currentWidth = newWidth;
        this.currentHeight = newHeight;
        this.refresh(this.$refs.elem);
      }
    });
  }
  resizeSensor(el) {
    let expand = document.createElement("div");
    expand.classList.add("s-slider-expand-watch");
    expand.style.position = "absolute";
    expand.style.left = "0px";
    expand.style.top = "0px";
    expand.style.right = "0px";
    expand.style.bottom = "0px";
    expand.style.overflow = "hidden";
    expand.style.visibility = "hidden";
    let expandChild = document.createElement("div");
    expandChild.style.position = "absolute";
    expandChild.style.left = "0px";
    expandChild.style.top = "0px";
    expandChild.style.width = "10000000px";
    expandChild.style.height = "10000000px";
    expand.appendChild(expandChild);
    let shrink = document.createElement("div");
    shrink.classList.add("s-slider-shrink-watch");
    shrink.style.position = "absolute";
    shrink.style.left = "0px";
    shrink.style.top = "0px";
    shrink.style.right = "0px";
    shrink.style.bottom = "0px";
    shrink.style.overflow = "hidden";
    shrink.style.visibility = "hidden";
    let shrinkChild = document.createElement("div");
    shrinkChild.style.position = "absolute";
    shrinkChild.style.left = "0px";
    shrinkChild.style.top = "0px";
    shrinkChild.style.width = "200%";
    shrinkChild.style.height = "200%";
    shrink.appendChild(shrinkChild);
    el.appendChild(expand);
    el.appendChild(shrink);
    this.setSensorScroll(this.$refs.elem);
    let size = el.getBoundingClientRect();
    this.currentWidth = size.width;
    this.currentHeight = size.height;
  }
  setSensorScroll(el) {
    el.querySelector(".s-slider-expand-watch").scrollLeft = 1e7;
    el.querySelector(".s-slider-expand-watch").scrollTop = 1e7;
    el.querySelector(".s-slider-shrink-watch").scrollLeft = 1e7;
    el.querySelector(".s-slider-shrink-watch").scrollTop = 1e7;
  }
  bindEvents(el) {
    document.addEventListener("mousemove", this.moving);
    document.addEventListener("mouseup", this.moveEnd);
    document.addEventListener("mouseleave", this.moveEnd);
    el.querySelector(".s-slider-shrink-watch").addEventListener(
      "scroll",
      this.dnr
    );
    el.querySelector(".s-slider-expand-watch").addEventListener(
      "scroll",
      this.dnr
    );
  }
  unbindEvents(el) {
    document.removeEventListener("mousemove", this.moving);
    document.removeEventListener("mouseup", this.moveEnd);
    document.removeEventListener("mouseleave", this.moveEnd);
    el.querySelector(".s-slider-shrink-watch").removeEventListener(
      "scroll",
      this.dnr
    );
    el.querySelector(".s-slider-expand-watch").removeEventListener(
      "scroll",
      this.dnr
    );
  }
  getPos(e) {
    return e.clientX - this.offset;
  }
  wrapClick(e) {
    if (this.isDisabled)
      return false;
    let pos = this.getPos(e);
    this.setValueOnPos(pos, false);
    if (!this.isDragging)
      this.setTransform(this.position);
  }
  moveStart() {
    if (!this.draggable)
      return false;
    this.isDragging = true;
    this.$emit("dragStart", this);
  }
  moving(e) {
    if (!this.isDragging || !this.draggable)
      return false;
    e.preventDefault();
    this.setValueOnPos(this.getPos(e), true);
    if (!this.halt)
      this.setTransform(this.getPos(e));
  }
  moveEnd(e) {
    if (this.isDragging && this.draggable) {
      this.$emit("dragEnd", this);
      this.setValue(this.limitValue(this.value));
      this.setTransitionTime(0.125);
      this.setTransform(this.position);
      this.isDragging = false;
      if (this.lazy && this.isDiff(this.val, this.value)) {
        this.syncValue();
      }
    } else {
      return false;
    }
  }
  setValueOnPos(pos, isDrag) {
    let range = this.limit;
    let valueRange = this.valueLimit;
    if (pos >= range[0] && pos <= range[1]) {
      this.halt = false;
      let v = (Math.round(pos / this.gap) * (this.spacing * this.multiple) + this.minimum * this.multiple) / this.multiple;
      this.setCurrentValue(v, isDrag);
    } else if (pos < range[0]) {
      this.halt = true;
      console.log("overshoot1");
      this.setTransform(range[0]);
      this.setCurrentValue(valueRange[0], true);
    } else {
      this.halt = true;
      console.log("overshoot2");
      this.setTransform(range[1]);
      this.setCurrentValue(valueRange[1], true);
    }
  }
  createMarks() {
    if (Array.isArray(this.data)) {
      let ticks = this.data.length;
      for (let i = 0; i < ticks; i++) {
        this.range.push(this.data[i]);
      }
    } else if (Math.floor((this.maximum - this.minimum) * this.multiple) % (this.interval * this.multiple) !== 0) {
      console.error(
        "[ERROR]: Prop[interval] must be a divisor of [max] - [min]"
      );
    } else {
      let ticks = (this.max - this.min) / this.interval;
      let t = 0 - this.interval;
      for (let i = -1; i < ticks; i++) {
        t = t + this.interval;
        this.range.push(t);
      }
    }
  }
  isDiff(a, b) {
    if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
      return true;
    } else if (Array.isArray(a) && a.length === b.length) {
      return a.some((v, i) => v !== b[i]);
    }
    return a !== b;
  }
  setCurrentValue(val, bool) {
    if (val < this.minimum || val > this.maximum)
      return false;
    if (this.isDiff(this.currentValue, val)) {
      this.currentValue = val;
      if (!this.lazy || !this.isDragging) {
        this.syncValue();
      }
    }
  }
  setIndex(val) {
    val = this.spacing * val + this.minimum;
    this.setCurrentValue(val, true);
  }
  setValue(val) {
    if (this.isDiff(this.val, val)) {
      let resetVal = this.limitValue(val);
      this.val = resetVal;
      this.syncValue();
    }
  }
  setTransform(val) {
    let value = val - (this.$refs.handle.scrollWidth - 2) / 2;
    let translateValue = `translateX(${value}px)`;
    this.$refs.handle.style.transform = translateValue;
    this.$refs.handle.style.webkitTransform = translateValue;
    this.$refs.handle.style.transform = translateValue;
    this.$refs.process.style.width = `${val}px`;
  }
  setTransitionTime(t) {
    this.$refs.handle.style.transitionDuration = `${t}s`;
    this.$refs.handle.style.webkitTransitionDuration = `${t}s`;
    this.$refs.process.style.transitionDuration = `${t}s`;
    this.$refs.process.style.webkitTransitionDuration = `${t}s`;
  }
  limitValue(val) {
    if (this.data) {
      return val;
    }
    const inRange = (v) => {
      if (v < this.min) {
        return this.min;
      } else if (v > this.max) {
        return this.max;
      }
      return v;
    };
    return inRange(val);
  }
  syncValue() {
    let val = this.val;
    if (this.range) {
      this.$emit("callbackRange", this.range[this.currentIndex]);
    }
    this.$emit("input", val);
  }
  getValue() {
    return this.val;
  }
  getIndex() {
    return this.currentIndex;
  }
  getStaticData() {
    if (this.$refs.elem) {
      this.size = this.$refs.elem.offsetWidth;
      this.offset = this.$refs.elem.getBoundingClientRect().left;
    }
  }
  refresh(el) {
    if (el) {
      this.getStaticData();
      this.setTransform(this.position);
      this.setSensorScroll(el);
    }
  }
  mounted() {
    if (this.steps !== 0) {
      console.error(
        "[ERROR]: Prop[steps] has been replaced with Prop[interval]"
      );
    }
    this.getStaticData();
    this.setValue(this.limitValue(this.value));
    this.setTransform(this.position);
    if (this.marks) {
      this.createMarks();
    }
    if (this.$refs.elem) {
      this.resizeSensor(this.$refs.elem);
      this.bindEvents(this.$refs.elem);
    }
  }
  updated() {
    if (!this.isDragging) {
      this.setTransitionTime(0.25);
    } else {
      this.setTransitionTime(0);
    }
  }
  beforeDestroy() {
    if (this.$refs.elem) {
      this.unbindEvents(this.$refs.elem);
    }
  }
};
__decorateClass$1([
  Prop({ default: 1 })
], SliderTwo$1.prototype, "interval", 2);
__decorateClass$1([
  Prop({ default: 0 })
], SliderTwo$1.prototype, "steps", 2);
__decorateClass$1([
  Prop({ default: null })
], SliderTwo$1.prototype, "data", 2);
__decorateClass$1([
  Prop({ default: true })
], SliderTwo$1.prototype, "dataIndexing", 2);
__decorateClass$1([
  Prop({ default: 0 })
], SliderTwo$1.prototype, "value", 2);
__decorateClass$1([
  Prop({ default: 0 })
], SliderTwo$1.prototype, "min", 2);
__decorateClass$1([
  Prop({ default: 100 })
], SliderTwo$1.prototype, "max", 2);
__decorateClass$1([
  Prop({ default: "always" })
], SliderTwo$1.prototype, "tooltip", 2);
__decorateClass$1([
  Prop({ default: null })
], SliderTwo$1.prototype, "suffix", 2);
__decorateClass$1([
  Prop({ default: null })
], SliderTwo$1.prototype, "prefix", 2);
__decorateClass$1([
  Prop({ default: false })
], SliderTwo$1.prototype, "simpleTheme", 2);
__decorateClass$1([
  Prop({ default: false })
], SliderTwo$1.prototype, "marks", 2);
__decorateClass$1([
  Prop({ default: false })
], SliderTwo$1.prototype, "labels", 2);
__decorateClass$1([
  Prop({ default: false })
], SliderTwo$1.prototype, "isDisabled", 2);
__decorateClass$1([
  Prop({ default: true })
], SliderTwo$1.prototype, "draggable", 2);
__decorateClass$1([
  Watch("value")
], SliderTwo$1.prototype, "watchValue", 1);
SliderTwo$1 = __decorateClass$1([
  Component({})
], SliderTwo$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    ref: "wrap",
    staticClass: "s-slider",
    on: {
      "click": _vm.wrapClick
    }
  }, [_c("div", {
    ref: "elem",
    staticClass: "s-slider-bar"
  }, [[_c("div", {
    ref: "handle",
    staticClass: "s-slider-dot-cont",
    on: {
      "mousedown": _vm.moveStart
    }
  }, [_vm._m(0), _c("div", {
    staticClass: "s-slider-dot-tooltip"
  }, [_vm._v(" " + _vm._s(_vm.prefix) + _vm._s(_vm.displayValue) + _vm._s(_vm.suffix) + " ")])])], _c("div", {
    ref: "process",
    staticClass: "s-slider-process",
    class: {
      "s-slider-simple": _vm.simpleTheme
    }
  })], 2), _vm.marks ? _c("div", {
    staticClass: "s-slider-mark-cont"
  }, _vm._l(_vm.range, function(tick, index2) {
    return _c("transition-group", {
      key: index2,
      staticClass: "s-slider-marks",
      attrs: {
        "name": "s-slider--ani__ticks",
        "tag": "div"
      }
    }, [_vm.marks && _vm.value != _vm.range[index2] ? _c("div", {
      key: "tick_lines",
      staticClass: "s-slider-tick"
    }) : _vm._e(), _vm.labels && _vm.value != _vm.range[index2] ? _c("div", {
      key: "tick_values",
      staticClass: "s-slider-label"
    }, [_vm._v(" " + _vm._s(_vm.prefix) + _vm._s(_vm.range[index2]) + _vm._s(_vm.suffix) + " ")]) : _vm._e()]);
  }), 1) : _vm._e()]);
};
var staticRenderFns$1 = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "s-slider-dot"
  }, [_c("div", {
    staticClass: "s-slider-dot-handle"
  })]);
}];
const SliderTwo_vue_vue_type_style_index_0_scoped_true_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  SliderTwo$1,
  render$1,
  staticRenderFns$1,
  false,
  __vue2_injectStyles$1,
  "22cd9ac1",
  null,
  null
);
function __vue2_injectStyles$1(context) {
  for (let o in __cssModules$1) {
    this[o] = __cssModules$1[o];
  }
}
const SliderTwo2 = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
const SlidersCode = `<template>
  <div>
    <h1>Sliders</h1>
    <!-- General / Intro -->
    <div class="section">
      <div class="row">
        <p>
          Our slider component is extended from
          <a
            target="_blank"
            href="https://github.com/NightCatSama/vue-slider-component"
            >Vue Slider Component</a
          >
          and makes use of
          <a
            target="_blank"
            href="https://github.com/que-etc/resize-observer-polyfill"
            >Resize Observer Polyfill</a
          >.
        </p>
      </div>
      <pre><code>import { Slider } from 'streamlabs-beaker';

components: {
  Slider
}</code></pre>
    </div>

    <!-- Custom Data -->
    <div class="section">
      <h2>Default Slider</h2>
      <DemoSection title="Default Slider" :code="demoCode">
        <template #components>
          <slider
            :value="value"
            @input="value => updateValue(value)"
            :max="100"
            :min="1"
            :interval="1"
            tooltip="always"
            suffix="%"
          />
        </template>
      </DemoSection>
    </div>

    <!-- Simple Theme -->
    <div class="section">
      <h2>Simple Theme</h2>
      <p>
        Use in more compact places when you don't want the bright teal present.
      </p>
      <DemoSection title="Simple Theme" :code="demoCode">
        <template #components>
          <slider
            :value="value"
            @input="value => updateValue(value)"
            :max="100"
            :min="1"
            :interval="1"
            tooltip="always"
            suffix="%"
            :simpleTheme="true"
          />
        </template>
      </DemoSection>
    </div>

    <!-- Props Table -->
    <div class="section">
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
            <td>width</td>
            <td>Number, String</td>
            <td>auto</td>
            <td>The width of the component.</td>
          </tr>
          <tr>
            <td>value</td>
            <td>Number, String, Array</td>
            <td>1</td>
            <td>Initial value of the slider.</td>
          </tr>
          <tr>
            <td>min</td>
            <td>Number</td>
            <td>0</td>
            <td>The minimum numerical value that can be selected</td>
          </tr>
          <tr>
            <td>max</td>
            <td>Number</td>
            <td>100</td>
            <td>The maximum numerical value that can be selected</td>
          </tr>
          <tr>
            <td>interval</td>
            <td>Number</td>
            <td>1</td>
            <td>The steps between the values</td>
          </tr>
          <tr>
            <td>tooltip</td>
            <td>String</td>
            <td>always</td>
            <td>Show the tooltip or not. Options are 'always' or 'false'</td>
          </tr>
          <tr>
            <td>prefix</td>
            <td>String</td>
            <td>""</td>
            <td>
              Prefix label that will be displayed next to the value in the
              tooltip
            </td>
          </tr>
          <tr>
            <td>suffix</td>
            <td>String</td>
            <td>""</td>
            <td>
              Suffix label that will be displayed next to the value in the
              tooltip
            </td>
          </tr>
          <tr>
            <td>data</td>
            <td>Array</td>
            <td>null</td>
            <td>Custom data.</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Whether to disable the component.</td>
          </tr>
          <tr>
            <td>simpleTheme</td>
            <td>Boolean</td>
            <td>false</td>
            <td>
              Use for toned down colors to avoid bright teal in small areas.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <div class="section">
      <div class="row">
        <h1>NEW SLIDER</h1>
        <p>Dont use this yet.</p>
        <div class="flex-row">
          <slider-two
            :value="localValue"
            @input="value => updateLocalValue(value)"
            :min="0"
            :max="100"
            :dataIndexing="false"
            :suffix="'%'"
          />
          <div class="icon-holder"><i class="fas fa-question-circle"></i></div>
        </div>
      </div>
    </div>

    <slider-two
      :value="localValueTwo"
      @input="value => updateLocalValueTwo(value)"
      :data="data"
      :marks="true"
    /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Slider from "./../components/Slider.vue";
import SliderTwo from "./../components/SliderTwo.vue";
import Accordion from "./../components/Accordion.vue";
import SlidersCode from "./Sliders.vue?raw";
import DemoSection from "./../components/DemoSection.vue";
@Component({
  components: {
    Accordion,
    DemoSection,
    Slider,
    SliderTwo
  }
})
export default class Sliders extends Vue {
  demoCode = SlidersCode;
  localValue: number | string = 15;

  updateLocalValue(value) {
    this.localValue = value;
  }

  localValueTwo: number | string = 15;

  updateLocalValueTwo(value) {
    this.localValueTwo = value;
  }

  value = 50;
  data = ["one", "two", "three", "four", "five", "six"];
  updateValue(value) {
    console.log(value); // this function is required, it doesn't have to do anything, it just needs to exist.
  }
}
<\/script>

<style lang="less">
@import (reference) "./../styles/Imports";

.flex-row {
  display: flex;
  flex-direction: row;
}

.icon-holder {
  .margin-left(2);
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
let Sliders$1 = class Sliders extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", SlidersCode);
    __publicField(this, "localValue", 15);
    __publicField(this, "localValueTwo", 15);
    __publicField(this, "value", 50);
    __publicField(this, "data", ["one", "two", "three", "four", "five", "six"]);
  }
  updateLocalValue(value) {
    this.localValue = value;
  }
  updateLocalValueTwo(value) {
    this.localValueTwo = value;
  }
  updateValue(value) {
    console.log(value);
  }
};
Sliders$1 = __decorateClass([
  Component({
    components: {
      Accordion,
      DemoSection,
      Slider: Slider2,
      SliderTwo: SliderTwo2
    }
  })
], Sliders$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("h1", [_vm._v("Sliders")]), _vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Default Slider")]), _c("DemoSection", {
    attrs: {
      "title": "Default Slider",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("slider", {
          attrs: {
            "value": _vm.value,
            "max": 100,
            "min": 1,
            "interval": 1,
            "tooltip": "always",
            "suffix": "%"
          },
          on: {
            "input": function(value) {
              return _vm.updateValue(value);
            }
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Simple Theme")]), _c("p", [_vm._v(" Use in more compact places when you don't want the bright teal present. ")]), _c("DemoSection", {
    attrs: {
      "title": "Simple Theme",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("slider", {
          attrs: {
            "value": _vm.value,
            "max": 100,
            "min": 1,
            "interval": 1,
            "tooltip": "always",
            "suffix": "%",
            "simpleTheme": true
          },
          on: {
            "input": function(value) {
              return _vm.updateValue(value);
            }
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
  }, [_c("div", {
    staticClass: "row"
  }, [_c("p", [_vm._v(" Our slider component is extended from "), _c("a", {
    attrs: {
      "target": "_blank",
      "href": "https://github.com/NightCatSama/vue-slider-component"
    }
  }, [_vm._v("Vue Slider Component")]), _vm._v(" and makes use of "), _c("a", {
    attrs: {
      "target": "_blank",
      "href": "https://github.com/que-etc/resize-observer-polyfill"
    }
  }, [_vm._v("Resize Observer Polyfill")]), _vm._v(". ")])]), _c("pre", [_c("code", [_vm._v("import { Slider } from 'streamlabs-beaker';\n\ncomponents: {\n  Slider\n}")])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Props")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("width")]), _c("td", [_vm._v("Number, String")]), _c("td", [_vm._v("auto")]), _c("td", [_vm._v("The width of the component.")])]), _c("tr", [_c("td", [_vm._v("value")]), _c("td", [_vm._v("Number, String, Array")]), _c("td", [_vm._v("1")]), _c("td", [_vm._v("Initial value of the slider.")])]), _c("tr", [_c("td", [_vm._v("min")]), _c("td", [_vm._v("Number")]), _c("td", [_vm._v("0")]), _c("td", [_vm._v("The minimum numerical value that can be selected")])]), _c("tr", [_c("td", [_vm._v("max")]), _c("td", [_vm._v("Number")]), _c("td", [_vm._v("100")]), _c("td", [_vm._v("The maximum numerical value that can be selected")])]), _c("tr", [_c("td", [_vm._v("interval")]), _c("td", [_vm._v("Number")]), _c("td", [_vm._v("1")]), _c("td", [_vm._v("The steps between the values")])]), _c("tr", [_c("td", [_vm._v("tooltip")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("always")]), _c("td", [_vm._v("Show the tooltip or not. Options are 'always' or 'false'")])]), _c("tr", [_c("td", [_vm._v("prefix")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v('""')]), _c("td", [_vm._v(" Prefix label that will be displayed next to the value in the tooltip ")])]), _c("tr", [_c("td", [_vm._v("suffix")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v('""')]), _c("td", [_vm._v(" Suffix label that will be displayed next to the value in the tooltip ")])]), _c("tr", [_c("td", [_vm._v("data")]), _c("td", [_vm._v("Array")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("Custom data.")])]), _c("tr", [_c("td", [_vm._v("disabled")]), _c("td", [_vm._v("Boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("Whether to disable the component.")])]), _c("tr", [_c("td", [_vm._v("simpleTheme")]), _c("td", [_vm._v("Boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v(" Use for toned down colors to avoid bright teal in small areas. ")])])])])]);
}];
const Sliders_vue_vue_type_style_index_0_lang = "";
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  Sliders$1,
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
const Sliders2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  Sliders2 as default
};
//# sourceMappingURL=Sliders-d4de247d.js.map
