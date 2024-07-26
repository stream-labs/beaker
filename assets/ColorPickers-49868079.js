var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { c as commonjsGlobal, C as Component, P as Prop, V as Vue, n as normalizeComponent } from "./index-158ccef1.js";
import { D as DemoSection } from "./DemoSection-d8bdef32.js";
import "./Accordion-7aa9b24d.js";
var vueColor_min = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }("undefined" != typeof self ? self : commonjsGlobal, function() {
    return function(e) {
      function t(r) {
        if (n[r])
          return n[r].exports;
        var i = n[r] = { i: r, l: false, exports: {} };
        return e[r].call(i.exports, i, i.exports, t), i.l = true, i.exports;
      }
      var n = {};
      return t.m = e, t.c = n, t.d = function(e2, n2, r) {
        t.o(e2, n2) || Object.defineProperty(e2, n2, { configurable: false, enumerable: true, get: r });
      }, t.n = function(e2) {
        var n2 = e2 && e2.__esModule ? function() {
          return e2.default;
        } : function() {
          return e2;
        };
        return t.d(n2, "a", n2), n2;
      }, t.o = function(e2, t2) {
        return Object.prototype.hasOwnProperty.call(e2, t2);
      }, t.p = "", t(t.s = 60);
    }([function(e, t) {
      function n(e2, t2) {
        var n2 = e2[1] || "", i = e2[3];
        if (!i)
          return n2;
        if (t2 && "function" == typeof btoa) {
          var o = r(i);
          return [n2].concat(i.sources.map(function(e3) {
            return "/*# sourceURL=" + i.sourceRoot + e3 + " */";
          })).concat([o]).join("\n");
        }
        return [n2].join("\n");
      }
      function r(e2) {
        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e2)))) + " */";
      }
      e.exports = function(e2) {
        var t2 = [];
        return t2.toString = function() {
          return this.map(function(t3) {
            var r2 = n(t3, e2);
            return t3[2] ? "@media " + t3[2] + "{" + r2 + "}" : r2;
          }).join("");
        }, t2.i = function(e3, n2) {
          "string" == typeof e3 && (e3 = [[null, e3, ""]]);
          for (var r2 = {}, i = 0; i < this.length; i++) {
            var o = this[i][0];
            "number" == typeof o && (r2[o] = true);
          }
          for (i = 0; i < e3.length; i++) {
            var a = e3[i];
            "number" == typeof a[0] && r2[a[0]] || (n2 && !a[2] ? a[2] = n2 : n2 && (a[2] = "(" + a[2] + ") and (" + n2 + ")"), t2.push(a));
          }
        }, t2;
      };
    }, function(e, t, n) {
      function r(e2) {
        for (var t2 = 0; t2 < e2.length; t2++) {
          var n2 = e2[t2], r2 = u[n2.id];
          if (r2) {
            r2.refs++;
            for (var i2 = 0; i2 < r2.parts.length; i2++)
              r2.parts[i2](n2.parts[i2]);
            for (; i2 < n2.parts.length; i2++)
              r2.parts.push(o(n2.parts[i2]));
            r2.parts.length > n2.parts.length && (r2.parts.length = n2.parts.length);
          } else {
            for (var a2 = [], i2 = 0; i2 < n2.parts.length; i2++)
              a2.push(o(n2.parts[i2]));
            u[n2.id] = { id: n2.id, refs: 1, parts: a2 };
          }
        }
      }
      function i() {
        var e2 = document.createElement("style");
        return e2.type = "text/css", f.appendChild(e2), e2;
      }
      function o(e2) {
        var t2, n2, r2 = document.querySelector("style[" + b + '~="' + e2.id + '"]');
        if (r2) {
          if (p)
            return v;
          r2.parentNode.removeChild(r2);
        }
        if (x) {
          var o2 = h++;
          r2 = d || (d = i()), t2 = a.bind(null, r2, o2, false), n2 = a.bind(null, r2, o2, true);
        } else
          r2 = i(), t2 = s.bind(null, r2), n2 = function() {
            r2.parentNode.removeChild(r2);
          };
        return t2(e2), function(r3) {
          if (r3) {
            if (r3.css === e2.css && r3.media === e2.media && r3.sourceMap === e2.sourceMap)
              return;
            t2(e2 = r3);
          } else
            n2();
        };
      }
      function a(e2, t2, n2, r2) {
        var i2 = n2 ? "" : r2.css;
        if (e2.styleSheet)
          e2.styleSheet.cssText = m(t2, i2);
        else {
          var o2 = document.createTextNode(i2), a2 = e2.childNodes;
          a2[t2] && e2.removeChild(a2[t2]), a2.length ? e2.insertBefore(o2, a2[t2]) : e2.appendChild(o2);
        }
      }
      function s(e2, t2) {
        var n2 = t2.css, r2 = t2.media, i2 = t2.sourceMap;
        if (r2 && e2.setAttribute("media", r2), g.ssrId && e2.setAttribute(b, t2.id), i2 && (n2 += "\n/*# sourceURL=" + i2.sources[0] + " */", n2 += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i2)))) + " */"), e2.styleSheet)
          e2.styleSheet.cssText = n2;
        else {
          for (; e2.firstChild; )
            e2.removeChild(e2.firstChild);
          e2.appendChild(document.createTextNode(n2));
        }
      }
      var c = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !c)
        throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
      var l = n(64), u = {}, f = c && (document.head || document.getElementsByTagName("head")[0]), d = null, h = 0, p = false, v = function() {
      }, g = null, b = "data-vue-ssr-id", x = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      e.exports = function(e2, t2, n2, i2) {
        p = n2, g = i2 || {};
        var o2 = l(e2, t2);
        return r(o2), function(t3) {
          for (var n3 = [], i3 = 0; i3 < o2.length; i3++) {
            var a2 = o2[i3], s2 = u[a2.id];
            s2.refs--, n3.push(s2);
          }
          t3 ? (o2 = l(e2, t3), r(o2)) : o2 = [];
          for (var i3 = 0; i3 < n3.length; i3++) {
            var s2 = n3[i3];
            if (0 === s2.refs) {
              for (var c2 = 0; c2 < s2.parts.length; c2++)
                s2.parts[c2]();
              delete u[s2.id];
            }
          }
        };
      };
      var m = function() {
        var e2 = [];
        return function(t2, n2) {
          return e2[t2] = n2, e2.filter(Boolean).join("\n");
        };
      }();
    }, function(e, t) {
      e.exports = function(e2, t2, n, r, i, o) {
        var a, s = e2 = e2 || {}, c = typeof e2.default;
        "object" !== c && "function" !== c || (a = e2, s = e2.default);
        var l = "function" == typeof s ? s.options : s;
        t2 && (l.render = t2.render, l.staticRenderFns = t2.staticRenderFns, l._compiled = true), n && (l.functional = true), i && (l._scopeId = i);
        var u;
        if (o ? (u = function(e3) {
          e3 = e3 || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e3 || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e3 = __VUE_SSR_CONTEXT__), r && r.call(this, e3), e3 && e3._registeredComponents && e3._registeredComponents.add(o);
        }, l._ssrRegister = u) : r && (u = r), u) {
          var f = l.functional, d = f ? l.render : l.beforeCreate;
          f ? (l._injectStyles = u, l.render = function(e3, t3) {
            return u.call(t3), d(e3, t3);
          }) : l.beforeCreate = d ? [].concat(d, u) : [u];
        }
        return { esModule: a, exports: s, options: l };
      };
    }, function(e, t, n) {
      function r(e2, t2) {
        var n2, r2 = e2 && e2.a;
        !(n2 = e2 && e2.hsl ? (0, o.default)(e2.hsl) : e2 && e2.hex && e2.hex.length > 0 ? (0, o.default)(e2.hex) : e2 && e2.hsv ? (0, o.default)(e2.hsv) : e2 && e2.rgba ? (0, o.default)(e2.rgba) : e2 && e2.rgb ? (0, o.default)(e2.rgb) : (0, o.default)(e2)) || void 0 !== n2._a && null !== n2._a || n2.setAlpha(r2 || 1);
        var i2 = n2.toHsl(), a = n2.toHsv();
        return 0 === i2.s && (a.h = i2.h = e2.h || e2.hsl && e2.hsl.h || t2 || 0), { hsl: i2, hex: n2.toHexString().toUpperCase(), hex8: n2.toHex8String().toUpperCase(), rgba: n2.toRgb(), hsv: a, oldHue: e2.h || t2 || i2.h, source: e2.source, a: e2.a || n2.getAlpha() };
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(65), o = function(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }(i);
      t.default = { props: ["value"], data: function() {
        return { val: r(this.value) };
      }, computed: { colors: { get: function() {
        return this.val;
      }, set: function(e2) {
        this.val = e2, this.$emit("input", e2);
      } } }, watch: { value: function(e2) {
        this.val = r(e2);
      } }, methods: { colorChange: function(e2, t2) {
        this.oldHue = this.colors.hsl.h, this.colors = r(e2, t2 || this.oldHue);
      }, isValidHex: function(e2) {
        return (0, o.default)(e2).isValid();
      }, simpleCheckForValidColor: function(e2) {
        for (var t2 = ["r", "g", "b", "a", "h", "s", "l", "v"], n2 = 0, r2 = 0, i2 = 0; i2 < t2.length; i2++) {
          var o2 = t2[i2];
          e2[o2] && (n2++, isNaN(e2[o2]) || r2++);
        }
        if (n2 === r2)
          return e2;
      }, paletteUpperCase: function(e2) {
        return e2.map(function(e3) {
          return e3.toUpperCase();
        });
      }, isTransparent: function(e2) {
        return 0 === (0, o.default)(e2).getAlpha();
      } } };
    }, function(e, t) {
      var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = n);
    }, function(e, t, n) {
      function r(e2) {
        n(66);
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(36), o = n.n(i);
      for (var a in i)
        "default" !== a && function(e2) {
          n.d(t, e2, function() {
            return i[e2];
          });
        }(a);
      var s = n(68), l = n(2), u = r, f = l(o.a, s.a, false, u, null, null);
      f.options.__file = "src/components/common/EditableInput.vue", t.default = f.exports;
    }, function(e, t) {
      var n = {}.hasOwnProperty;
      e.exports = function(e2, t2) {
        return n.call(e2, t2);
      };
    }, function(e, t, n) {
      var r = n(8), i = n(18);
      e.exports = n(9) ? function(e2, t2, n2) {
        return r.f(e2, t2, i(1, n2));
      } : function(e2, t2, n2) {
        return e2[t2] = n2, e2;
      };
    }, function(e, t, n) {
      var r = n(16), i = n(42), o = n(25), a = Object.defineProperty;
      t.f = n(9) ? Object.defineProperty : function(e2, t2, n2) {
        if (r(e2), t2 = o(t2, true), r(n2), i)
          try {
            return a(e2, t2, n2);
          } catch (e3) {
          }
        if ("get" in n2 || "set" in n2)
          throw TypeError("Accessors not supported!");
        return "value" in n2 && (e2[t2] = n2.value), e2;
      };
    }, function(e, t, n) {
      e.exports = !n(17)(function() {
        return 7 != Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a;
      });
    }, function(e, t, n) {
      var r = n(90), i = n(24);
      e.exports = function(e2) {
        return r(i(e2));
      };
    }, function(e, t, n) {
      var r = n(29)("wks"), i = n(19), o = n(4).Symbol, a = "function" == typeof o;
      (e.exports = function(e2) {
        return r[e2] || (r[e2] = a && o[e2] || (a ? o : i)("Symbol." + e2));
      }).store = r;
    }, function(e, t) {
      e.exports = function(e2) {
        return "object" == typeof e2 ? null !== e2 : "function" == typeof e2;
      };
    }, function(e, t, n) {
      function r(e2) {
        n(111);
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(51), o = n.n(i);
      for (var a in i)
        "default" !== a && function(e2) {
          n.d(t, e2, function() {
            return i[e2];
          });
        }(a);
      var s = n(113), l = n(2), u = r, f = l(o.a, s.a, false, u, null, null);
      f.options.__file = "src/components/common/Hue.vue", t.default = f.exports;
    }, function(e, t) {
      e.exports = true;
    }, function(e, t) {
      var n = e.exports = { version: "2.6.11" };
      "number" == typeof __e && (__e = n);
    }, function(e, t, n) {
      var r = n(12);
      e.exports = function(e2) {
        if (!r(e2))
          throw TypeError(e2 + " is not an object!");
        return e2;
      };
    }, function(e, t) {
      e.exports = function(e2) {
        try {
          return !!e2();
        } catch (e3) {
          return true;
        }
      };
    }, function(e, t) {
      e.exports = function(e2, t2) {
        return { enumerable: !(1 & e2), configurable: !(2 & e2), writable: !(4 & e2), value: t2 };
      };
    }, function(e, t) {
      var n = 0, r = Math.random();
      e.exports = function(e2) {
        return "Symbol(".concat(void 0 === e2 ? "" : e2, ")_", (++n + r).toString(36));
      };
    }, function(e, t, n) {
      function r(e2) {
        n(123);
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(54), o = n.n(i);
      for (var a in i)
        "default" !== a && function(e2) {
          n.d(t, e2, function() {
            return i[e2];
          });
        }(a);
      var s = n(127), l = n(2), u = r, f = l(o.a, s.a, false, u, null, null);
      f.options.__file = "src/components/common/Saturation.vue", t.default = f.exports;
    }, function(e, t, n) {
      function r(e2) {
        n(128);
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(55), o = n.n(i);
      for (var a in i)
        "default" !== a && function(e2) {
          n.d(t, e2, function() {
            return i[e2];
          });
        }(a);
      var s = n(133), l = n(2), u = r, f = l(o.a, s.a, false, u, null, null);
      f.options.__file = "src/components/common/Alpha.vue", t.default = f.exports;
    }, function(e, t, n) {
      function r(e2) {
        n(130);
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(56), o = n.n(i);
      for (var a in i)
        "default" !== a && function(e2) {
          n.d(t, e2, function() {
            return i[e2];
          });
        }(a);
      var s = n(132), l = n(2), u = r, f = l(o.a, s.a, false, u, null, null);
      f.options.__file = "src/components/common/Checkboard.vue", t.default = f.exports;
    }, function(e, t) {
      var n = Math.ceil, r = Math.floor;
      e.exports = function(e2) {
        return isNaN(e2 = +e2) ? 0 : (e2 > 0 ? r : n)(e2);
      };
    }, function(e, t) {
      e.exports = function(e2) {
        if (void 0 == e2)
          throw TypeError("Can't call method on  " + e2);
        return e2;
      };
    }, function(e, t, n) {
      var r = n(12);
      e.exports = function(e2, t2) {
        if (!r(e2))
          return e2;
        var n2, i;
        if (t2 && "function" == typeof (n2 = e2.toString) && !r(i = n2.call(e2)))
          return i;
        if ("function" == typeof (n2 = e2.valueOf) && !r(i = n2.call(e2)))
          return i;
        if (!t2 && "function" == typeof (n2 = e2.toString) && !r(i = n2.call(e2)))
          return i;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(e, t) {
      e.exports = {};
    }, function(e, t, n) {
      var r = n(46), i = n(30);
      e.exports = Object.keys || function(e2) {
        return r(e2, i);
      };
    }, function(e, t, n) {
      var r = n(29)("keys"), i = n(19);
      e.exports = function(e2) {
        return r[e2] || (r[e2] = i(e2));
      };
    }, function(e, t, n) {
      var r = n(15), i = n(4), o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
      (e.exports = function(e2, t2) {
        return o[e2] || (o[e2] = void 0 !== t2 ? t2 : {});
      })("versions", []).push({ version: r.version, mode: n(14) ? "pure" : "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)" });
    }, function(e, t) {
      e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function(e, t, n) {
      var r = n(8).f, i = n(6), o = n(11)("toStringTag");
      e.exports = function(e2, t2, n2) {
        e2 && !i(e2 = n2 ? e2 : e2.prototype, o) && r(e2, o, { configurable: true, value: t2 });
      };
    }, function(e, t, n) {
      t.f = n(11);
    }, function(e, t, n) {
      var r = n(4), i = n(15), o = n(14), a = n(32), s = n(8).f;
      e.exports = function(e2) {
        var t2 = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
        "_" == e2.charAt(0) || e2 in t2 || s(t2, e2, { value: a.f(e2) });
      };
    }, function(e, t) {
      t.f = {}.propertyIsEnumerable;
    }, function(e, t, n) {
      function r(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(3), o = r(i), a = n(5), s = r(a), c = ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#CCCCCC", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"];
      t.default = { name: "Compact", mixins: [o.default], props: { palette: { type: Array, default: function() {
        return c;
      } } }, components: { "ed-in": s.default }, computed: { pick: function() {
        return this.colors.hex.toUpperCase();
      } }, methods: { handlerClick: function(e2) {
        this.colorChange({ hex: e2, source: "hex" });
      } } };
    }, function(e, t, n) {
      Object.defineProperty(t, "__esModule", { value: true }), t.default = { name: "editableInput", props: { label: String, labelText: String, desc: String, value: [String, Number], max: Number, min: Number, arrowOffset: { type: Number, default: 1 } }, computed: { val: { get: function() {
        return this.value;
      }, set: function(e2) {
        if (!(void 0 !== this.max && +e2 > this.max))
          return e2;
        this.$refs.input.value = this.max;
      } }, labelId: function() {
        return "input__label__" + this.label + "__" + Math.random().toString().slice(2, 5);
      }, labelSpanText: function() {
        return this.labelText || this.label;
      } }, methods: { update: function(e2) {
        this.handleChange(e2.target.value);
      }, handleChange: function(e2) {
        var t2 = {};
        t2[this.label] = e2, void 0 === t2.hex && void 0 === t2["#"] ? this.$emit("change", t2) : e2.length > 5 && this.$emit("change", t2);
      }, handleKeyDown: function(e2) {
        var t2 = this.val, n2 = Number(t2);
        if (n2) {
          var r = this.arrowOffset || 1;
          38 === e2.keyCode && (t2 = n2 + r, this.handleChange(t2), e2.preventDefault()), 40 === e2.keyCode && (t2 = n2 - r, this.handleChange(t2), e2.preventDefault());
        }
      } } };
    }, function(e, t, n) {
      Object.defineProperty(t, "__esModule", { value: true });
      var r = n(3), i = function(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }(r), o = ["#FFFFFF", "#F2F2F2", "#E6E6E6", "#D9D9D9", "#CCCCCC", "#BFBFBF", "#B3B3B3", "#A6A6A6", "#999999", "#8C8C8C", "#808080", "#737373", "#666666", "#595959", "#4D4D4D", "#404040", "#333333", "#262626", "#0D0D0D", "#000000"];
      t.default = { name: "Grayscale", mixins: [i.default], props: { palette: { type: Array, default: function() {
        return o;
      } } }, components: {}, computed: { pick: function() {
        return this.colors.hex.toUpperCase();
      } }, methods: { handlerClick: function(e2) {
        this.colorChange({ hex: e2, source: "hex" });
      } } };
    }, function(e, t, n) {
      function r(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(5), o = r(i), a = n(3), s = r(a);
      t.default = { name: "Material", mixins: [s.default], components: { "ed-in": o.default }, methods: { onChange: function(e2) {
        e2 && (e2.hex ? this.isValidHex(e2.hex) && this.colorChange({ hex: e2.hex, source: "hex" }) : (e2.r || e2.g || e2.b) && this.colorChange({ r: e2.r || this.colors.rgba.r, g: e2.g || this.colors.rgba.g, b: e2.b || this.colors.rgba.b, a: e2.a || this.colors.rgba.a, source: "rgba" }));
      } } };
    }, function(e, t, n) {
      function r(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(81), o = r(i), a = n(3), s = r(a), c = n(13), l = r(c);
      t.default = { name: "Slider", mixins: [s.default], props: { swatches: { type: Array, default: function() {
        return [{ s: 0.5, l: 0.8 }, { s: 0.5, l: 0.65 }, { s: 0.5, l: 0.5 }, { s: 0.5, l: 0.35 }, { s: 0.5, l: 0.2 }];
      } } }, components: { hue: l.default }, computed: { normalizedSwatches: function() {
        return this.swatches.map(function(e2) {
          return "object" !== (void 0 === e2 ? "undefined" : (0, o.default)(e2)) ? { s: 0.5, l: e2 } : e2;
        });
      } }, methods: { isActive: function(e2, t2) {
        var n2 = this.colors.hsl;
        return 1 === n2.l && 1 === e2.l || (0 === n2.l && 0 === e2.l || Math.abs(n2.l - e2.l) < 0.01 && Math.abs(n2.s - e2.s) < 0.01);
      }, hueChange: function(e2) {
        this.colorChange(e2);
      }, handleSwClick: function(e2, t2) {
        this.colorChange({ h: this.colors.hsl.h, s: t2.s, l: t2.l, source: "hsl" });
      } } };
    }, function(e, t, n) {
      var r = n(14), i = n(41), o = n(44), a = n(7), s = n(26), c = n(88), l = n(31), u = n(95), f = n(11)("iterator"), d = !([].keys && "next" in [].keys()), h = function() {
        return this;
      };
      e.exports = function(e2, t2, n2, p, v, g, b) {
        c(n2, t2, p);
        var x, m, _, w = function(e3) {
          if (!d && e3 in F)
            return F[e3];
          switch (e3) {
            case "keys":
            case "values":
              return function() {
                return new n2(this, e3);
              };
          }
          return function() {
            return new n2(this, e3);
          };
        }, y = t2 + " Iterator", C = "values" == v, k = false, F = e2.prototype, S = F[f] || F["@@iterator"] || v && F[v], A = S || w(v), O = v ? C ? w("entries") : A : void 0, E = "Array" == t2 ? F.entries || S : S;
        if (E && (_ = u(E.call(new e2()))) !== Object.prototype && _.next && (l(_, y, true), r || "function" == typeof _[f] || a(_, f, h)), C && S && "values" !== S.name && (k = true, A = function() {
          return S.call(this);
        }), r && !b || !d && !k && F[f] || a(F, f, A), s[t2] = A, s[y] = h, v)
          if (x = { values: C ? A : w("values"), keys: g ? A : w("keys"), entries: O }, b)
            for (m in x)
              m in F || o(F, m, x[m]);
          else
            i(i.P + i.F * (d || k), t2, x);
        return x;
      };
    }, function(e, t, n) {
      var r = n(4), i = n(15), o = n(86), a = n(7), s = n(6), c = function(e2, t2, n2) {
        var l, u, f, d = e2 & c.F, h = e2 & c.G, p = e2 & c.S, v = e2 & c.P, g = e2 & c.B, b = e2 & c.W, x = h ? i : i[t2] || (i[t2] = {}), m = x.prototype, _ = h ? r : p ? r[t2] : (r[t2] || {}).prototype;
        h && (n2 = t2);
        for (l in n2)
          (u = !d && _ && void 0 !== _[l]) && s(x, l) || (f = u ? _[l] : n2[l], x[l] = h && "function" != typeof _[l] ? n2[l] : g && u ? o(f, r) : b && _[l] == f ? function(e3) {
            var t3 = function(t4, n3, r2) {
              if (this instanceof e3) {
                switch (arguments.length) {
                  case 0:
                    return new e3();
                  case 1:
                    return new e3(t4);
                  case 2:
                    return new e3(t4, n3);
                }
                return new e3(t4, n3, r2);
              }
              return e3.apply(this, arguments);
            };
            return t3.prototype = e3.prototype, t3;
          }(f) : v && "function" == typeof f ? o(Function.call, f) : f, v && ((x.virtual || (x.virtual = {}))[l] = f, e2 & c.R && m && !m[l] && a(m, l, f)));
      };
      c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c;
    }, function(e, t, n) {
      e.exports = !n(9) && !n(17)(function() {
        return 7 != Object.defineProperty(n(43)("div"), "a", { get: function() {
          return 7;
        } }).a;
      });
    }, function(e, t, n) {
      var r = n(12), i = n(4).document, o = r(i) && r(i.createElement);
      e.exports = function(e2) {
        return o ? i.createElement(e2) : {};
      };
    }, function(e, t, n) {
      e.exports = n(7);
    }, function(e, t, n) {
      var r = n(16), i = n(89), o = n(30), a = n(28)("IE_PROTO"), s = function() {
      }, c = function() {
        var e2, t2 = n(43)("iframe"), r2 = o.length;
        for (t2.style.display = "none", n(94).appendChild(t2), t2.src = "javascript:", e2 = t2.contentWindow.document, e2.open(), e2.write("<script>document.F=Object<\/script>"), e2.close(), c = e2.F; r2--; )
          delete c.prototype[o[r2]];
        return c();
      };
      e.exports = Object.create || function(e2, t2) {
        var n2;
        return null !== e2 ? (s.prototype = r(e2), n2 = new s(), s.prototype = null, n2[a] = e2) : n2 = c(), void 0 === t2 ? n2 : i(n2, t2);
      };
    }, function(e, t, n) {
      var r = n(6), i = n(10), o = n(91)(false), a = n(28)("IE_PROTO");
      e.exports = function(e2, t2) {
        var n2, s = i(e2), c = 0, l = [];
        for (n2 in s)
          n2 != a && r(s, n2) && l.push(n2);
        for (; t2.length > c; )
          r(s, n2 = t2[c++]) && (~o(l, n2) || l.push(n2));
        return l;
      };
    }, function(e, t) {
      var n = {}.toString;
      e.exports = function(e2) {
        return n.call(e2).slice(8, -1);
      };
    }, function(e, t, n) {
      var r = n(24);
      e.exports = function(e2) {
        return Object(r(e2));
      };
    }, function(e, t) {
      t.f = Object.getOwnPropertySymbols;
    }, function(e, t, n) {
      var r = n(46), i = n(30).concat("length", "prototype");
      t.f = Object.getOwnPropertyNames || function(e2) {
        return r(e2, i);
      };
    }, function(e, t, n) {
      Object.defineProperty(t, "__esModule", { value: true }), t.default = { name: "Hue", props: { value: Object, direction: { type: String, default: "horizontal" } }, data: function() {
        return { oldHue: 0, pullDirection: "" };
      }, computed: { colors: function() {
        var e2 = this.value.hsl.h;
        return 0 !== e2 && e2 - this.oldHue > 0 && (this.pullDirection = "right"), 0 !== e2 && e2 - this.oldHue < 0 && (this.pullDirection = "left"), this.oldHue = e2, this.value;
      }, directionClass: function() {
        return { "vc-hue--horizontal": "horizontal" === this.direction, "vc-hue--vertical": "vertical" === this.direction };
      }, pointerTop: function() {
        return "vertical" === this.direction ? 0 === this.colors.hsl.h && "right" === this.pullDirection ? 0 : -100 * this.colors.hsl.h / 360 + 100 + "%" : 0;
      }, pointerLeft: function() {
        return "vertical" === this.direction ? 0 : 0 === this.colors.hsl.h && "right" === this.pullDirection ? "100%" : 100 * this.colors.hsl.h / 360 + "%";
      } }, methods: { handleChange: function(e2, t2) {
        !t2 && e2.preventDefault();
        var n2 = this.$refs.container;
        if (n2) {
          var r, i, o = n2.clientWidth, a = n2.clientHeight, s = n2.getBoundingClientRect().left + window.pageXOffset, c = n2.getBoundingClientRect().top + window.pageYOffset, l = e2.pageX || (e2.touches ? e2.touches[0].pageX : 0), u = e2.pageY || (e2.touches ? e2.touches[0].pageY : 0), f = l - s, d = u - c;
          "vertical" === this.direction ? (d < 0 ? r = 360 : d > a ? r = 0 : (i = -100 * d / a + 100, r = 360 * i / 100), this.colors.hsl.h !== r && this.$emit("change", { h: r, s: this.colors.hsl.s, l: this.colors.hsl.l, a: this.colors.hsl.a, source: "hsl" })) : (f < 0 ? r = 0 : f > o ? r = 360 : (i = 100 * f / o, r = 360 * i / 100), this.colors.hsl.h !== r && this.$emit("change", { h: r, s: this.colors.hsl.s, l: this.colors.hsl.l, a: this.colors.hsl.a, source: "hsl" }));
        }
      }, handleMouseDown: function(e2) {
        this.handleChange(e2, true), window.addEventListener("mousemove", this.handleChange), window.addEventListener("mouseup", this.handleMouseUp);
      }, handleMouseUp: function(e2) {
        this.unbindEventListeners();
      }, unbindEventListeners: function() {
        window.removeEventListener("mousemove", this.handleChange), window.removeEventListener("mouseup", this.handleMouseUp);
      } } };
    }, function(e, t, n) {
      function r(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(118), o = r(i), a = n(3), s = r(a), c = ["red", "pink", "purple", "deepPurple", "indigo", "blue", "lightBlue", "cyan", "teal", "green", "lightGreen", "lime", "yellow", "amber", "orange", "deepOrange", "brown", "blueGrey", "black"], l = ["900", "700", "500", "300", "100"], u = function() {
        var e2 = [];
        return c.forEach(function(t2) {
          var n2 = [];
          "black" === t2.toLowerCase() || "white" === t2.toLowerCase() ? n2 = n2.concat(["#000000", "#FFFFFF"]) : l.forEach(function(e3) {
            var r2 = o.default[t2][e3];
            n2.push(r2.toUpperCase());
          }), e2.push(n2);
        }), e2;
      }();
      t.default = { name: "Swatches", mixins: [s.default], props: { palette: { type: Array, default: function() {
        return u;
      } } }, computed: { pick: function() {
        return this.colors.hex;
      } }, methods: { equal: function(e2) {
        return e2.toLowerCase() === this.colors.hex.toLowerCase();
      }, handlerClick: function(e2) {
        this.colorChange({ hex: e2, source: "hex" });
      } } };
    }, function(e, t, n) {
      function r(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(3), o = r(i), a = n(5), s = r(a), c = n(20), l = r(c), u = n(13), f = r(u), d = n(21), h = r(d);
      t.default = { name: "Photoshop", mixins: [o.default], props: { head: { type: String, default: "Color Picker" }, disableFields: { type: Boolean, default: false }, hasResetButton: { type: Boolean, default: false }, acceptLabel: { type: String, default: "OK" }, cancelLabel: { type: String, default: "Cancel" }, resetLabel: { type: String, default: "Reset" }, newLabel: { type: String, default: "new" }, currentLabel: { type: String, default: "current" } }, components: { saturation: l.default, hue: f.default, alpha: h.default, "ed-in": s.default }, data: function() {
        return { currentColor: "#FFF" };
      }, computed: { hsv: function() {
        var e2 = this.colors.hsv;
        return { h: e2.h.toFixed(), s: (100 * e2.s).toFixed(), v: (100 * e2.v).toFixed() };
      }, hex: function() {
        var e2 = this.colors.hex;
        return e2 && e2.replace("#", "");
      } }, created: function() {
        this.currentColor = this.colors.hex;
      }, methods: { childChange: function(e2) {
        this.colorChange(e2);
      }, inputChange: function(e2) {
        e2 && (e2["#"] ? this.isValidHex(e2["#"]) && this.colorChange({ hex: e2["#"], source: "hex" }) : e2.r || e2.g || e2.b || e2.a ? this.colorChange({ r: e2.r || this.colors.rgba.r, g: e2.g || this.colors.rgba.g, b: e2.b || this.colors.rgba.b, a: e2.a || this.colors.rgba.a, source: "rgba" }) : (e2.h || e2.s || e2.v) && this.colorChange({ h: e2.h || this.colors.hsv.h, s: e2.s / 100 || this.colors.hsv.s, v: e2.v / 100 || this.colors.hsv.v, source: "hsv" }));
      }, clickCurrentColor: function() {
        this.colorChange({ hex: this.currentColor, source: "hex" });
      }, handleAccept: function() {
        this.$emit("ok");
      }, handleCancel: function() {
        this.$emit("cancel");
      }, handleReset: function() {
        this.$emit("reset");
      } } };
    }, function(e, t, n) {
      function r(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(125), o = r(i), a = n(126), s = r(a);
      t.default = { name: "Saturation", props: { value: Object }, computed: { colors: function() {
        return this.value;
      }, bgColor: function() {
        return "hsl(" + this.colors.hsv.h + ", 100%, 50%)";
      }, pointerTop: function() {
        return -100 * this.colors.hsv.v + 1 + 100 + "%";
      }, pointerLeft: function() {
        return 100 * this.colors.hsv.s + "%";
      } }, methods: { throttle: (0, s.default)(function(e2, t2) {
        e2(t2);
      }, 20, { leading: true, trailing: false }), handleChange: function(e2, t2) {
        !t2 && e2.preventDefault();
        var n2 = this.$refs.container;
        if (n2) {
          var r2 = n2.clientWidth, i2 = n2.clientHeight, a2 = n2.getBoundingClientRect().left + window.pageXOffset, s2 = n2.getBoundingClientRect().top + window.pageYOffset, c = e2.pageX || (e2.touches ? e2.touches[0].pageX : 0), l = e2.pageY || (e2.touches ? e2.touches[0].pageY : 0), u = (0, o.default)(c - a2, 0, r2), f = (0, o.default)(l - s2, 0, i2), d = u / r2, h = (0, o.default)(-f / i2 + 1, 0, 1);
          this.throttle(this.onChange, { h: this.colors.hsv.h, s: d, v: h, a: this.colors.hsv.a, source: "hsva" });
        }
      }, onChange: function(e2) {
        this.$emit("change", e2);
      }, handleMouseDown: function(e2) {
        window.addEventListener("mousemove", this.handleChange), window.addEventListener("mouseup", this.handleChange), window.addEventListener("mouseup", this.handleMouseUp);
      }, handleMouseUp: function(e2) {
        this.unbindEventListeners();
      }, unbindEventListeners: function() {
        window.removeEventListener("mousemove", this.handleChange), window.removeEventListener("mouseup", this.handleChange), window.removeEventListener("mouseup", this.handleMouseUp);
      } } };
    }, function(e, t, n) {
      Object.defineProperty(t, "__esModule", { value: true });
      var r = n(22), i = function(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }(r);
      t.default = { name: "Alpha", props: { value: Object, onChange: Function }, components: { checkboard: i.default }, computed: { colors: function() {
        return this.value;
      }, gradientColor: function() {
        var e2 = this.colors.rgba, t2 = [e2.r, e2.g, e2.b].join(",");
        return "linear-gradient(to right, rgba(" + t2 + ", 0) 0%, rgba(" + t2 + ", 1) 100%)";
      } }, methods: { handleChange: function(e2, t2) {
        !t2 && e2.preventDefault();
        var n2 = this.$refs.container;
        if (n2) {
          var r2, i2 = n2.clientWidth, o = n2.getBoundingClientRect().left + window.pageXOffset, a = e2.pageX || (e2.touches ? e2.touches[0].pageX : 0), s = a - o;
          r2 = s < 0 ? 0 : s > i2 ? 1 : Math.round(100 * s / i2) / 100, this.colors.a !== r2 && this.$emit("change", { h: this.colors.hsl.h, s: this.colors.hsl.s, l: this.colors.hsl.l, a: r2, source: "rgba" });
        }
      }, handleMouseDown: function(e2) {
        this.handleChange(e2, true), window.addEventListener("mousemove", this.handleChange), window.addEventListener("mouseup", this.handleMouseUp);
      }, handleMouseUp: function() {
        this.unbindEventListeners();
      }, unbindEventListeners: function() {
        window.removeEventListener("mousemove", this.handleChange), window.removeEventListener("mouseup", this.handleMouseUp);
      } } };
    }, function(e, t, n) {
      function r(e2, t2, n2) {
        if ("undefined" == typeof document)
          return null;
        var r2 = document.createElement("canvas");
        r2.width = r2.height = 2 * n2;
        var i2 = r2.getContext("2d");
        return i2 ? (i2.fillStyle = e2, i2.fillRect(0, 0, r2.width, r2.height), i2.fillStyle = t2, i2.fillRect(0, 0, n2, n2), i2.translate(n2, n2), i2.fillRect(0, 0, n2, n2), r2.toDataURL()) : null;
      }
      function i(e2, t2, n2) {
        var i2 = e2 + "," + t2 + "," + n2;
        if (o[i2])
          return o[i2];
        var a = r(e2, t2, n2);
        return o[i2] = a, a;
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var o = {};
      t.default = { name: "Checkboard", props: { size: { type: [Number, String], default: 8 }, white: { type: String, default: "#fff" }, grey: { type: String, default: "#e6e6e6" } }, computed: { bgStyle: function() {
        return { "background-image": "url(" + i(this.white, this.grey, this.size) + ")" };
      } } };
    }, function(e, t, n) {
      function r(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(3), o = r(i), a = n(5), s = r(a), c = n(20), l = r(c), u = n(13), f = r(u), d = n(21), h = r(d), p = n(22), v = r(p), g = ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF", "rgba(0,0,0,0)"];
      t.default = { name: "Sketch", mixins: [o.default], components: { saturation: l.default, hue: f.default, alpha: h.default, "ed-in": s.default, checkboard: v.default }, props: { presetColors: { type: Array, default: function() {
        return g;
      } }, disableAlpha: { type: Boolean, default: false }, disableFields: { type: Boolean, default: false } }, computed: { hex: function() {
        var e2 = void 0;
        return e2 = this.colors.a < 1 ? this.colors.hex8 : this.colors.hex, e2.replace("#", "");
      }, activeColor: function() {
        var e2 = this.colors.rgba;
        return "rgba(" + [e2.r, e2.g, e2.b, e2.a].join(",") + ")";
      } }, methods: { handlePreset: function(e2) {
        this.colorChange({ hex: e2, source: "hex" });
      }, childChange: function(e2) {
        this.colorChange(e2);
      }, inputChange: function(e2) {
        e2 && (e2.hex ? this.isValidHex(e2.hex) && this.colorChange({ hex: e2.hex, source: "hex" }) : (e2.r || e2.g || e2.b || e2.a) && this.colorChange({ r: e2.r || this.colors.rgba.r, g: e2.g || this.colors.rgba.g, b: e2.b || this.colors.rgba.b, a: e2.a || this.colors.rgba.a, source: "rgba" }));
      } } };
    }, function(e, t, n) {
      function r(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(3), o = r(i), a = n(5), s = r(a), c = n(20), l = r(c), u = n(13), f = r(u), d = n(21), h = r(d), p = n(22), v = r(p);
      t.default = { name: "Chrome", mixins: [o.default], props: { disableAlpha: { type: Boolean, default: false }, disableFields: { type: Boolean, default: false } }, components: { saturation: l.default, hue: f.default, alpha: h.default, "ed-in": s.default, checkboard: v.default }, data: function() {
        return { fieldsIndex: 0, highlight: false };
      }, computed: { hsl: function() {
        var e2 = this.colors.hsl, t2 = e2.h, n2 = e2.s, r2 = e2.l;
        return { h: t2.toFixed(), s: (100 * n2).toFixed() + "%", l: (100 * r2).toFixed() + "%" };
      }, activeColor: function() {
        var e2 = this.colors.rgba;
        return "rgba(" + [e2.r, e2.g, e2.b, e2.a].join(",") + ")";
      }, hasAlpha: function() {
        return this.colors.a < 1;
      } }, methods: { childChange: function(e2) {
        this.colorChange(e2);
      }, inputChange: function(e2) {
        if (e2) {
          if (e2.hex)
            this.isValidHex(e2.hex) && this.colorChange({ hex: e2.hex, source: "hex" });
          else if (e2.r || e2.g || e2.b || e2.a)
            this.colorChange({ r: e2.r || this.colors.rgba.r, g: e2.g || this.colors.rgba.g, b: e2.b || this.colors.rgba.b, a: e2.a || this.colors.rgba.a, source: "rgba" });
          else if (e2.h || e2.s || e2.l) {
            var t2 = e2.s ? e2.s.replace("%", "") / 100 : this.colors.hsl.s, n2 = e2.l ? e2.l.replace("%", "") / 100 : this.colors.hsl.l;
            this.colorChange({ h: e2.h || this.colors.hsl.h, s: t2, l: n2, source: "hsl" });
          }
        }
      }, toggleViews: function() {
        if (this.fieldsIndex >= 2)
          return void (this.fieldsIndex = 0);
        this.fieldsIndex++;
      }, showHighlight: function() {
        this.highlight = true;
      }, hideHighlight: function() {
        this.highlight = false;
      } } };
    }, function(e, t, n) {
      function r(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(5), o = r(i), a = n(3), s = r(a), c = ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"];
      t.default = { name: "Twitter", mixins: [s.default], components: { editableInput: o.default }, props: { width: { type: [String, Number], default: 276 }, defaultColors: { type: Array, default: function() {
        return c;
      } }, triangle: { default: "top-left", validator: function(e2) {
        return ["hide", "top-left", "top-right"].includes(e2);
      } } }, computed: { hsv: function() {
        var e2 = this.colors.hsv;
        return { h: e2.h.toFixed(), s: (100 * e2.s).toFixed(), v: (100 * e2.v).toFixed() };
      }, hex: function() {
        var e2 = this.colors.hex;
        return e2 && e2.replace("#", "");
      } }, methods: { equal: function(e2) {
        return e2.toLowerCase() === this.colors.hex.toLowerCase();
      }, handlerClick: function(e2) {
        this.colorChange({ hex: e2, source: "hex" });
      }, inputChange: function(e2) {
        e2 && (e2["#"] ? this.isValidHex(e2["#"]) && this.colorChange({ hex: e2["#"], source: "hex" }) : e2.r || e2.g || e2.b || e2.a ? this.colorChange({ r: e2.r || this.colors.rgba.r, g: e2.g || this.colors.rgba.g, b: e2.b || this.colors.rgba.b, a: e2.a || this.colors.rgba.a, source: "rgba" }) : (e2.h || e2.s || e2.v) && this.colorChange({ h: e2.h || this.colors.hsv.h, s: e2.s / 100 || this.colors.hsv.s, v: e2.v / 100 || this.colors.hsv.v, source: "hsv" }));
      } } };
    }, function(e, t, n) {
      function r(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      var i = n(61), o = r(i), a = n(70), s = r(a), c = n(74), l = r(c), u = n(78), f = r(u), d = n(115), h = r(d), p = n(120), v = r(p), g = n(135), b = r(g), x = n(139), m = r(x), _ = n(143), w = r(_), y = n(21), C = r(y), k = n(22), F = r(k), S = n(5), A = r(S), O = n(13), E = r(O), M = n(20), j = r(M), L = n(3), P = r(L), R = { version: "2.8.1", Compact: o.default, Grayscale: s.default, Twitter: w.default, Material: l.default, Slider: f.default, Swatches: h.default, Photoshop: v.default, Sketch: b.default, Chrome: m.default, Alpha: C.default, Checkboard: F.default, EditableInput: A.default, Hue: E.default, Saturation: j.default, ColorMixin: P.default };
      e.exports = R;
    }, function(e, t, n) {
      function r(e2) {
        n(62);
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(35), o = n.n(i);
      for (var a in i)
        "default" !== a && function(e2) {
          n.d(t, e2, function() {
            return i[e2];
          });
        }(a);
      var s = n(69), l = n(2), u = r, f = l(o.a, s.a, false, u, null, null);
      f.options.__file = "src/components/Compact.vue", t.default = f.exports;
    }, function(e, t, n) {
      var r = n(63);
      "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
      n(1)("6ce8a5a8", r, false, {});
    }, function(e, t, n) {
      t = e.exports = n(0)(false), t.push([e.i, "\n.vc-compact {\n  padding-top: 5px;\n  padding-left: 5px;\n  width: 245px;\n  border-radius: 2px;\n  box-sizing: border-box;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-compact-colors {\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n.vc-compact-color-item {\n  list-style: none;\n  width: 15px;\n  height: 15px;\n  float: left;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  position: relative;\n  cursor: pointer;\n}\n.vc-compact-color-item--white {\n  box-shadow: inset 0 0 0 1px #ddd;\n}\n.vc-compact-color-item--white .vc-compact-dot {\n  background: #000;\n}\n.vc-compact-dot {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  bottom: 5px;\n  left: 5px;\n  border-radius: 50%;\n  opacity: 1;\n  background: #fff;\n}\n", ""]);
    }, function(e, t) {
      e.exports = function(e2, t2) {
        for (var n = [], r = {}, i = 0; i < t2.length; i++) {
          var o = t2[i], a = o[0], s = o[1], c = o[2], l = o[3], u = { id: e2 + ":" + i, css: s, media: c, sourceMap: l };
          r[a] ? r[a].parts.push(u) : n.push(r[a] = { id: a, parts: [u] });
        }
        return n;
      };
    }, function(e, t, n) {
      var r;
      !function(i) {
        function o(e2, t2) {
          if (e2 = e2 || "", t2 = t2 || {}, e2 instanceof o)
            return e2;
          if (!(this instanceof o))
            return new o(e2, t2);
          var n2 = a(e2);
          this._originalInput = e2, this._r = n2.r, this._g = n2.g, this._b = n2.b, this._a = n2.a, this._roundA = G(100 * this._a) / 100, this._format = t2.format || n2.format, this._gradientType = t2.gradientType, this._r < 1 && (this._r = G(this._r)), this._g < 1 && (this._g = G(this._g)), this._b < 1 && (this._b = G(this._b)), this._ok = n2.ok, this._tc_id = U++;
        }
        function a(e2) {
          var t2 = { r: 0, g: 0, b: 0 }, n2 = 1, r2 = null, i2 = null, o2 = null, a2 = false, c2 = false;
          return "string" == typeof e2 && (e2 = N(e2)), "object" == typeof e2 && (H(e2.r) && H(e2.g) && H(e2.b) ? (t2 = s(e2.r, e2.g, e2.b), a2 = true, c2 = "%" === String(e2.r).substr(-1) ? "prgb" : "rgb") : H(e2.h) && H(e2.s) && H(e2.v) ? (r2 = D(e2.s), i2 = D(e2.v), t2 = f(e2.h, r2, i2), a2 = true, c2 = "hsv") : H(e2.h) && H(e2.s) && H(e2.l) && (r2 = D(e2.s), o2 = D(e2.l), t2 = l(e2.h, r2, o2), a2 = true, c2 = "hsl"), e2.hasOwnProperty("a") && (n2 = e2.a)), n2 = O(n2), { ok: a2, format: e2.format || c2, r: V(255, q(t2.r, 0)), g: V(255, q(t2.g, 0)), b: V(255, q(t2.b, 0)), a: n2 };
        }
        function s(e2, t2, n2) {
          return { r: 255 * E(e2, 255), g: 255 * E(t2, 255), b: 255 * E(n2, 255) };
        }
        function c(e2, t2, n2) {
          e2 = E(e2, 255), t2 = E(t2, 255), n2 = E(n2, 255);
          var r2, i2, o2 = q(e2, t2, n2), a2 = V(e2, t2, n2), s2 = (o2 + a2) / 2;
          if (o2 == a2)
            r2 = i2 = 0;
          else {
            var c2 = o2 - a2;
            switch (i2 = s2 > 0.5 ? c2 / (2 - o2 - a2) : c2 / (o2 + a2), o2) {
              case e2:
                r2 = (t2 - n2) / c2 + (t2 < n2 ? 6 : 0);
                break;
              case t2:
                r2 = (n2 - e2) / c2 + 2;
                break;
              case n2:
                r2 = (e2 - t2) / c2 + 4;
            }
            r2 /= 6;
          }
          return { h: r2, s: i2, l: s2 };
        }
        function l(e2, t2, n2) {
          function r2(e3, t3, n3) {
            return n3 < 0 && (n3 += 1), n3 > 1 && (n3 -= 1), n3 < 1 / 6 ? e3 + 6 * (t3 - e3) * n3 : n3 < 0.5 ? t3 : n3 < 2 / 3 ? e3 + (t3 - e3) * (2 / 3 - n3) * 6 : e3;
          }
          var i2, o2, a2;
          if (e2 = E(e2, 360), t2 = E(t2, 100), n2 = E(n2, 100), 0 === t2)
            i2 = o2 = a2 = n2;
          else {
            var s2 = n2 < 0.5 ? n2 * (1 + t2) : n2 + t2 - n2 * t2, c2 = 2 * n2 - s2;
            i2 = r2(c2, s2, e2 + 1 / 3), o2 = r2(c2, s2, e2), a2 = r2(c2, s2, e2 - 1 / 3);
          }
          return { r: 255 * i2, g: 255 * o2, b: 255 * a2 };
        }
        function u(e2, t2, n2) {
          e2 = E(e2, 255), t2 = E(t2, 255), n2 = E(n2, 255);
          var r2, i2, o2 = q(e2, t2, n2), a2 = V(e2, t2, n2), s2 = o2, c2 = o2 - a2;
          if (i2 = 0 === o2 ? 0 : c2 / o2, o2 == a2)
            r2 = 0;
          else {
            switch (o2) {
              case e2:
                r2 = (t2 - n2) / c2 + (t2 < n2 ? 6 : 0);
                break;
              case t2:
                r2 = (n2 - e2) / c2 + 2;
                break;
              case n2:
                r2 = (e2 - t2) / c2 + 4;
            }
            r2 /= 6;
          }
          return { h: r2, s: i2, v: s2 };
        }
        function f(e2, t2, n2) {
          e2 = 6 * E(e2, 360), t2 = E(t2, 100), n2 = E(n2, 100);
          var r2 = i.floor(e2), o2 = e2 - r2, a2 = n2 * (1 - t2), s2 = n2 * (1 - o2 * t2), c2 = n2 * (1 - (1 - o2) * t2), l2 = r2 % 6;
          return { r: 255 * [n2, s2, a2, a2, c2, n2][l2], g: 255 * [c2, n2, n2, s2, a2, a2][l2], b: 255 * [a2, a2, c2, n2, n2, s2][l2] };
        }
        function d(e2, t2, n2, r2) {
          var i2 = [R(G(e2).toString(16)), R(G(t2).toString(16)), R(G(n2).toString(16))];
          return r2 && i2[0].charAt(0) == i2[0].charAt(1) && i2[1].charAt(0) == i2[1].charAt(1) && i2[2].charAt(0) == i2[2].charAt(1) ? i2[0].charAt(0) + i2[1].charAt(0) + i2[2].charAt(0) : i2.join("");
        }
        function h(e2, t2, n2, r2, i2) {
          var o2 = [R(G(e2).toString(16)), R(G(t2).toString(16)), R(G(n2).toString(16)), R(B(r2))];
          return i2 && o2[0].charAt(0) == o2[0].charAt(1) && o2[1].charAt(0) == o2[1].charAt(1) && o2[2].charAt(0) == o2[2].charAt(1) && o2[3].charAt(0) == o2[3].charAt(1) ? o2[0].charAt(0) + o2[1].charAt(0) + o2[2].charAt(0) + o2[3].charAt(0) : o2.join("");
        }
        function p(e2, t2, n2, r2) {
          return [R(B(r2)), R(G(e2).toString(16)), R(G(t2).toString(16)), R(G(n2).toString(16))].join("");
        }
        function v(e2, t2) {
          t2 = 0 === t2 ? 0 : t2 || 10;
          var n2 = o(e2).toHsl();
          return n2.s -= t2 / 100, n2.s = M(n2.s), o(n2);
        }
        function g(e2, t2) {
          t2 = 0 === t2 ? 0 : t2 || 10;
          var n2 = o(e2).toHsl();
          return n2.s += t2 / 100, n2.s = M(n2.s), o(n2);
        }
        function b(e2) {
          return o(e2).desaturate(100);
        }
        function x(e2, t2) {
          t2 = 0 === t2 ? 0 : t2 || 10;
          var n2 = o(e2).toHsl();
          return n2.l += t2 / 100, n2.l = M(n2.l), o(n2);
        }
        function m(e2, t2) {
          t2 = 0 === t2 ? 0 : t2 || 10;
          var n2 = o(e2).toRgb();
          return n2.r = q(0, V(255, n2.r - G(-t2 / 100 * 255))), n2.g = q(0, V(255, n2.g - G(-t2 / 100 * 255))), n2.b = q(0, V(255, n2.b - G(-t2 / 100 * 255))), o(n2);
        }
        function _(e2, t2) {
          t2 = 0 === t2 ? 0 : t2 || 10;
          var n2 = o(e2).toHsl();
          return n2.l -= t2 / 100, n2.l = M(n2.l), o(n2);
        }
        function w(e2, t2) {
          var n2 = o(e2).toHsl(), r2 = (n2.h + t2) % 360;
          return n2.h = r2 < 0 ? 360 + r2 : r2, o(n2);
        }
        function y(e2) {
          var t2 = o(e2).toHsl();
          return t2.h = (t2.h + 180) % 360, o(t2);
        }
        function C(e2) {
          var t2 = o(e2).toHsl(), n2 = t2.h;
          return [o(e2), o({ h: (n2 + 120) % 360, s: t2.s, l: t2.l }), o({ h: (n2 + 240) % 360, s: t2.s, l: t2.l })];
        }
        function k(e2) {
          var t2 = o(e2).toHsl(), n2 = t2.h;
          return [o(e2), o({ h: (n2 + 90) % 360, s: t2.s, l: t2.l }), o({ h: (n2 + 180) % 360, s: t2.s, l: t2.l }), o({ h: (n2 + 270) % 360, s: t2.s, l: t2.l })];
        }
        function F(e2) {
          var t2 = o(e2).toHsl(), n2 = t2.h;
          return [o(e2), o({ h: (n2 + 72) % 360, s: t2.s, l: t2.l }), o({ h: (n2 + 216) % 360, s: t2.s, l: t2.l })];
        }
        function S(e2, t2, n2) {
          t2 = t2 || 6, n2 = n2 || 30;
          var r2 = o(e2).toHsl(), i2 = 360 / n2, a2 = [o(e2)];
          for (r2.h = (r2.h - (i2 * t2 >> 1) + 720) % 360; --t2; )
            r2.h = (r2.h + i2) % 360, a2.push(o(r2));
          return a2;
        }
        function A(e2, t2) {
          t2 = t2 || 6;
          for (var n2 = o(e2).toHsv(), r2 = n2.h, i2 = n2.s, a2 = n2.v, s2 = [], c2 = 1 / t2; t2--; )
            s2.push(o({ h: r2, s: i2, v: a2 })), a2 = (a2 + c2) % 1;
          return s2;
        }
        function O(e2) {
          return e2 = parseFloat(e2), (isNaN(e2) || e2 < 0 || e2 > 1) && (e2 = 1), e2;
        }
        function E(e2, t2) {
          L(e2) && (e2 = "100%");
          var n2 = P(e2);
          return e2 = V(t2, q(0, parseFloat(e2))), n2 && (e2 = parseInt(e2 * t2, 10) / 100), i.abs(e2 - t2) < 1e-6 ? 1 : e2 % t2 / parseFloat(t2);
        }
        function M(e2) {
          return V(1, q(0, e2));
        }
        function j(e2) {
          return parseInt(e2, 16);
        }
        function L(e2) {
          return "string" == typeof e2 && -1 != e2.indexOf(".") && 1 === parseFloat(e2);
        }
        function P(e2) {
          return "string" == typeof e2 && -1 != e2.indexOf("%");
        }
        function R(e2) {
          return 1 == e2.length ? "0" + e2 : "" + e2;
        }
        function D(e2) {
          return e2 <= 1 && (e2 = 100 * e2 + "%"), e2;
        }
        function B(e2) {
          return i.round(255 * parseFloat(e2)).toString(16);
        }
        function T(e2) {
          return j(e2) / 255;
        }
        function H(e2) {
          return !!J.CSS_UNIT.exec(e2);
        }
        function N(e2) {
          e2 = e2.replace(I, "").replace($, "").toLowerCase();
          var t2 = false;
          if (W[e2])
            e2 = W[e2], t2 = true;
          else if ("transparent" == e2)
            return { r: 0, g: 0, b: 0, a: 0, format: "name" };
          var n2;
          return (n2 = J.rgb.exec(e2)) ? { r: n2[1], g: n2[2], b: n2[3] } : (n2 = J.rgba.exec(e2)) ? { r: n2[1], g: n2[2], b: n2[3], a: n2[4] } : (n2 = J.hsl.exec(e2)) ? { h: n2[1], s: n2[2], l: n2[3] } : (n2 = J.hsla.exec(e2)) ? { h: n2[1], s: n2[2], l: n2[3], a: n2[4] } : (n2 = J.hsv.exec(e2)) ? { h: n2[1], s: n2[2], v: n2[3] } : (n2 = J.hsva.exec(e2)) ? { h: n2[1], s: n2[2], v: n2[3], a: n2[4] } : (n2 = J.hex8.exec(e2)) ? { r: j(n2[1]), g: j(n2[2]), b: j(n2[3]), a: T(n2[4]), format: t2 ? "name" : "hex8" } : (n2 = J.hex6.exec(e2)) ? { r: j(n2[1]), g: j(n2[2]), b: j(n2[3]), format: t2 ? "name" : "hex" } : (n2 = J.hex4.exec(e2)) ? { r: j(n2[1] + "" + n2[1]), g: j(n2[2] + "" + n2[2]), b: j(n2[3] + "" + n2[3]), a: T(n2[4] + "" + n2[4]), format: t2 ? "name" : "hex8" } : !!(n2 = J.hex3.exec(e2)) && { r: j(n2[1] + "" + n2[1]), g: j(n2[2] + "" + n2[2]), b: j(n2[3] + "" + n2[3]), format: t2 ? "name" : "hex" };
        }
        function z(e2) {
          var t2, n2;
          return e2 = e2 || { level: "AA", size: "small" }, t2 = (e2.level || "AA").toUpperCase(), n2 = (e2.size || "small").toLowerCase(), "AA" !== t2 && "AAA" !== t2 && (t2 = "AA"), "small" !== n2 && "large" !== n2 && (n2 = "small"), { level: t2, size: n2 };
        }
        var I = /^\s+/, $ = /\s+$/, U = 0, G = i.round, V = i.min, q = i.max, X = i.random;
        o.prototype = { isDark: function() {
          return this.getBrightness() < 128;
        }, isLight: function() {
          return !this.isDark();
        }, isValid: function() {
          return this._ok;
        }, getOriginalInput: function() {
          return this._originalInput;
        }, getFormat: function() {
          return this._format;
        }, getAlpha: function() {
          return this._a;
        }, getBrightness: function() {
          var e2 = this.toRgb();
          return (299 * e2.r + 587 * e2.g + 114 * e2.b) / 1e3;
        }, getLuminance: function() {
          var e2, t2, n2, r2, o2, a2, s2 = this.toRgb();
          return e2 = s2.r / 255, t2 = s2.g / 255, n2 = s2.b / 255, r2 = e2 <= 0.03928 ? e2 / 12.92 : i.pow((e2 + 0.055) / 1.055, 2.4), o2 = t2 <= 0.03928 ? t2 / 12.92 : i.pow((t2 + 0.055) / 1.055, 2.4), a2 = n2 <= 0.03928 ? n2 / 12.92 : i.pow((n2 + 0.055) / 1.055, 2.4), 0.2126 * r2 + 0.7152 * o2 + 0.0722 * a2;
        }, setAlpha: function(e2) {
          return this._a = O(e2), this._roundA = G(100 * this._a) / 100, this;
        }, toHsv: function() {
          var e2 = u(this._r, this._g, this._b);
          return { h: 360 * e2.h, s: e2.s, v: e2.v, a: this._a };
        }, toHsvString: function() {
          var e2 = u(this._r, this._g, this._b), t2 = G(360 * e2.h), n2 = G(100 * e2.s), r2 = G(100 * e2.v);
          return 1 == this._a ? "hsv(" + t2 + ", " + n2 + "%, " + r2 + "%)" : "hsva(" + t2 + ", " + n2 + "%, " + r2 + "%, " + this._roundA + ")";
        }, toHsl: function() {
          var e2 = c(this._r, this._g, this._b);
          return { h: 360 * e2.h, s: e2.s, l: e2.l, a: this._a };
        }, toHslString: function() {
          var e2 = c(this._r, this._g, this._b), t2 = G(360 * e2.h), n2 = G(100 * e2.s), r2 = G(100 * e2.l);
          return 1 == this._a ? "hsl(" + t2 + ", " + n2 + "%, " + r2 + "%)" : "hsla(" + t2 + ", " + n2 + "%, " + r2 + "%, " + this._roundA + ")";
        }, toHex: function(e2) {
          return d(this._r, this._g, this._b, e2);
        }, toHexString: function(e2) {
          return "#" + this.toHex(e2);
        }, toHex8: function(e2) {
          return h(this._r, this._g, this._b, this._a, e2);
        }, toHex8String: function(e2) {
          return "#" + this.toHex8(e2);
        }, toRgb: function() {
          return { r: G(this._r), g: G(this._g), b: G(this._b), a: this._a };
        }, toRgbString: function() {
          return 1 == this._a ? "rgb(" + G(this._r) + ", " + G(this._g) + ", " + G(this._b) + ")" : "rgba(" + G(this._r) + ", " + G(this._g) + ", " + G(this._b) + ", " + this._roundA + ")";
        }, toPercentageRgb: function() {
          return { r: G(100 * E(this._r, 255)) + "%", g: G(100 * E(this._g, 255)) + "%", b: G(100 * E(this._b, 255)) + "%", a: this._a };
        }, toPercentageRgbString: function() {
          return 1 == this._a ? "rgb(" + G(100 * E(this._r, 255)) + "%, " + G(100 * E(this._g, 255)) + "%, " + G(100 * E(this._b, 255)) + "%)" : "rgba(" + G(100 * E(this._r, 255)) + "%, " + G(100 * E(this._g, 255)) + "%, " + G(100 * E(this._b, 255)) + "%, " + this._roundA + ")";
        }, toName: function() {
          return 0 === this._a ? "transparent" : !(this._a < 1) && (Y[d(this._r, this._g, this._b, true)] || false);
        }, toFilter: function(e2) {
          var t2 = "#" + p(this._r, this._g, this._b, this._a), n2 = t2, r2 = this._gradientType ? "GradientType = 1, " : "";
          if (e2) {
            var i2 = o(e2);
            n2 = "#" + p(i2._r, i2._g, i2._b, i2._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + r2 + "startColorstr=" + t2 + ",endColorstr=" + n2 + ")";
        }, toString: function(e2) {
          var t2 = !!e2;
          e2 = e2 || this._format;
          var n2 = false, r2 = this._a < 1 && this._a >= 0;
          return t2 || !r2 || "hex" !== e2 && "hex6" !== e2 && "hex3" !== e2 && "hex4" !== e2 && "hex8" !== e2 && "name" !== e2 ? ("rgb" === e2 && (n2 = this.toRgbString()), "prgb" === e2 && (n2 = this.toPercentageRgbString()), "hex" !== e2 && "hex6" !== e2 || (n2 = this.toHexString()), "hex3" === e2 && (n2 = this.toHexString(true)), "hex4" === e2 && (n2 = this.toHex8String(true)), "hex8" === e2 && (n2 = this.toHex8String()), "name" === e2 && (n2 = this.toName()), "hsl" === e2 && (n2 = this.toHslString()), "hsv" === e2 && (n2 = this.toHsvString()), n2 || this.toHexString()) : "name" === e2 && 0 === this._a ? this.toName() : this.toRgbString();
        }, clone: function() {
          return o(this.toString());
        }, _applyModification: function(e2, t2) {
          var n2 = e2.apply(null, [this].concat([].slice.call(t2)));
          return this._r = n2._r, this._g = n2._g, this._b = n2._b, this.setAlpha(n2._a), this;
        }, lighten: function() {
          return this._applyModification(x, arguments);
        }, brighten: function() {
          return this._applyModification(m, arguments);
        }, darken: function() {
          return this._applyModification(_, arguments);
        }, desaturate: function() {
          return this._applyModification(v, arguments);
        }, saturate: function() {
          return this._applyModification(g, arguments);
        }, greyscale: function() {
          return this._applyModification(b, arguments);
        }, spin: function() {
          return this._applyModification(w, arguments);
        }, _applyCombination: function(e2, t2) {
          return e2.apply(null, [this].concat([].slice.call(t2)));
        }, analogous: function() {
          return this._applyCombination(S, arguments);
        }, complement: function() {
          return this._applyCombination(y, arguments);
        }, monochromatic: function() {
          return this._applyCombination(A, arguments);
        }, splitcomplement: function() {
          return this._applyCombination(F, arguments);
        }, triad: function() {
          return this._applyCombination(C, arguments);
        }, tetrad: function() {
          return this._applyCombination(k, arguments);
        } }, o.fromRatio = function(e2, t2) {
          if ("object" == typeof e2) {
            var n2 = {};
            for (var r2 in e2)
              e2.hasOwnProperty(r2) && (n2[r2] = "a" === r2 ? e2[r2] : D(e2[r2]));
            e2 = n2;
          }
          return o(e2, t2);
        }, o.equals = function(e2, t2) {
          return !(!e2 || !t2) && o(e2).toRgbString() == o(t2).toRgbString();
        }, o.random = function() {
          return o.fromRatio({ r: X(), g: X(), b: X() });
        }, o.mix = function(e2, t2, n2) {
          n2 = 0 === n2 ? 0 : n2 || 50;
          var r2 = o(e2).toRgb(), i2 = o(t2).toRgb(), a2 = n2 / 100;
          return o({ r: (i2.r - r2.r) * a2 + r2.r, g: (i2.g - r2.g) * a2 + r2.g, b: (i2.b - r2.b) * a2 + r2.b, a: (i2.a - r2.a) * a2 + r2.a });
        }, o.readability = function(e2, t2) {
          var n2 = o(e2), r2 = o(t2);
          return (i.max(n2.getLuminance(), r2.getLuminance()) + 0.05) / (i.min(n2.getLuminance(), r2.getLuminance()) + 0.05);
        }, o.isReadable = function(e2, t2, n2) {
          var r2, i2, a2 = o.readability(e2, t2);
          switch (i2 = false, r2 = z(n2), r2.level + r2.size) {
            case "AAsmall":
            case "AAAlarge":
              i2 = a2 >= 4.5;
              break;
            case "AAlarge":
              i2 = a2 >= 3;
              break;
            case "AAAsmall":
              i2 = a2 >= 7;
          }
          return i2;
        }, o.mostReadable = function(e2, t2, n2) {
          var r2, i2, a2, s2, c2 = null, l2 = 0;
          n2 = n2 || {}, i2 = n2.includeFallbackColors, a2 = n2.level, s2 = n2.size;
          for (var u2 = 0; u2 < t2.length; u2++)
            (r2 = o.readability(e2, t2[u2])) > l2 && (l2 = r2, c2 = o(t2[u2]));
          return o.isReadable(e2, c2, { level: a2, size: s2 }) || !i2 ? c2 : (n2.includeFallbackColors = false, o.mostReadable(e2, ["#fff", "#000"], n2));
        };
        var W = o.names = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" }, Y = o.hexNames = function(e2) {
          var t2 = {};
          for (var n2 in e2)
            e2.hasOwnProperty(n2) && (t2[e2[n2]] = n2);
          return t2;
        }(W), J = function() {
          var e2 = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)", t2 = "[\\s|\\(]+(" + e2 + ")[,|\\s]+(" + e2 + ")[,|\\s]+(" + e2 + ")\\s*\\)?", n2 = "[\\s|\\(]+(" + e2 + ")[,|\\s]+(" + e2 + ")[,|\\s]+(" + e2 + ")[,|\\s]+(" + e2 + ")\\s*\\)?";
          return { CSS_UNIT: new RegExp(e2), rgb: new RegExp("rgb" + t2), rgba: new RegExp("rgba" + n2), hsl: new RegExp("hsl" + t2), hsla: new RegExp("hsla" + n2), hsv: new RegExp("hsv" + t2), hsva: new RegExp("hsva" + n2), hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ };
        }();
        void 0 !== e && e.exports ? e.exports = o : void 0 !== (r = (function() {
          return o;
        }).call(t, n, t, e)) && (e.exports = r);
      }(Math);
    }, function(e, t, n) {
      var r = n(67);
      "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
      n(1)("0f73e73c", r, false, {});
    }, function(e, t, n) {
      t = e.exports = n(0)(false), t.push([e.i, "\n.vc-editable-input {\n  position: relative;\n}\n.vc-input__input {\n  padding: 0;\n  border: 0;\n  outline: none;\n}\n.vc-input__label {\n  text-transform: capitalize;\n}\n", ""]);
    }, function(e, t, n) {
      var r = function() {
        var e2 = this, t2 = e2.$createElement, n2 = e2._self._c || t2;
        return n2("div", { staticClass: "vc-editable-input" }, [n2("input", { directives: [{ name: "model", rawName: "v-model", value: e2.val, expression: "val" }], ref: "input", staticClass: "vc-input__input", attrs: { "aria-labelledby": e2.labelId }, domProps: { value: e2.val }, on: { keydown: e2.handleKeyDown, input: [function(t3) {
          t3.target.composing || (e2.val = t3.target.value);
        }, e2.update] } }), e2._v(" "), n2("span", { staticClass: "vc-input__label", attrs: { for: e2.label, id: e2.labelId } }, [e2._v(e2._s(e2.labelSpanText))]), e2._v(" "), n2("span", { staticClass: "vc-input__desc" }, [e2._v(e2._s(e2.desc))])]);
      }, i = [];
      r._withStripped = true;
      var o = { render: r, staticRenderFns: i };
      t.a = o;
    }, function(e, t, n) {
      var r = function() {
        var e2 = this, t2 = e2.$createElement, n2 = e2._self._c || t2;
        return n2("div", { staticClass: "vc-compact", attrs: { role: "application", "aria-label": "Compact color picker" } }, [n2("ul", { staticClass: "vc-compact-colors", attrs: { role: "listbox" } }, e2._l(e2.paletteUpperCase(e2.palette), function(t3) {
          return n2("li", { key: t3, staticClass: "vc-compact-color-item", class: { "vc-compact-color-item--white": "#FFFFFF" === t3 }, style: { background: t3 }, attrs: { role: "option", "aria-label": "color:" + t3, "aria-selected": t3 === e2.pick }, on: { click: function(n3) {
            return e2.handlerClick(t3);
          } } }, [n2("div", { directives: [{ name: "show", rawName: "v-show", value: t3 === e2.pick, expression: "c === pick" }], staticClass: "vc-compact-dot" })]);
        }), 0)]);
      }, i = [];
      r._withStripped = true;
      var o = { render: r, staticRenderFns: i };
      t.a = o;
    }, function(e, t, n) {
      function r(e2) {
        n(71);
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(37), o = n.n(i);
      for (var a in i)
        "default" !== a && function(e2) {
          n.d(t, e2, function() {
            return i[e2];
          });
        }(a);
      var s = n(73), l = n(2), u = r, f = l(o.a, s.a, false, u, null, null);
      f.options.__file = "src/components/Grayscale.vue", t.default = f.exports;
    }, function(e, t, n) {
      var r = n(72);
      "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
      n(1)("21ddbb74", r, false, {});
    }, function(e, t, n) {
      t = e.exports = n(0)(false), t.push([e.i, "\n.vc-grayscale {\n  width: 125px;\n  border-radius: 2px;\n  box-shadow: 0 2px 15px rgba(0,0,0,.12), 0 2px 10px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-grayscale-colors {\n  border-radius: 2px;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n.vc-grayscale-color-item {\n  list-style: none;\n  width: 25px;\n  height: 25px;\n  float: left;\n  position: relative;\n  cursor: pointer;\n}\n.vc-grayscale-color-item--white .vc-grayscale-dot {\n  background: #000;\n}\n.vc-grayscale-dot {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 6px;\n  height: 6px;\n  margin: -3px 0 0 -2px;\n  border-radius: 50%;\n  opacity: 1;\n  background: #fff;\n}\n", ""]);
    }, function(e, t, n) {
      var r = function() {
        var e2 = this, t2 = e2.$createElement, n2 = e2._self._c || t2;
        return n2("div", { staticClass: "vc-grayscale", attrs: { role: "application", "aria-label": "Grayscale color picker" } }, [n2("ul", { staticClass: "vc-grayscale-colors", attrs: { role: "listbox" } }, e2._l(e2.paletteUpperCase(e2.palette), function(t3) {
          return n2("li", { key: t3, staticClass: "vc-grayscale-color-item", class: { "vc-grayscale-color-item--white": "#FFFFFF" == t3 }, style: { background: t3 }, attrs: { role: "option", "aria-label": "Color:" + t3, "aria-selected": t3 === e2.pick }, on: { click: function(n3) {
            return e2.handlerClick(t3);
          } } }, [n2("div", { directives: [{ name: "show", rawName: "v-show", value: t3 === e2.pick, expression: "c === pick" }], staticClass: "vc-grayscale-dot" })]);
        }), 0)]);
      }, i = [];
      r._withStripped = true;
      var o = { render: r, staticRenderFns: i };
      t.a = o;
    }, function(e, t, n) {
      function r(e2) {
        n(75);
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(38), o = n.n(i);
      for (var a in i)
        "default" !== a && function(e2) {
          n.d(t, e2, function() {
            return i[e2];
          });
        }(a);
      var s = n(77), l = n(2), u = r, f = l(o.a, s.a, false, u, null, null);
      f.options.__file = "src/components/Material.vue", t.default = f.exports;
    }, function(e, t, n) {
      var r = n(76);
      "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
      n(1)("1ff3af73", r, false, {});
    }, function(e, t, n) {
      t = e.exports = n(0)(false), t.push([e.i, '\n.vc-material {\n  width: 98px;\n  height: 98px;\n  padding: 16px;\n  font-family: "Roboto";\n  position: relative;\n  border-radius: 2px;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-material .vc-input__input {\n  width: 100%;\n  margin-top: 12px;\n  font-size: 15px;\n  color: #333;\n  height: 30px;\n}\n.vc-material .vc-input__label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 11px;\n  color: #999;\n  text-transform: capitalize;\n}\n.vc-material-hex {\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n}\n.vc-material-split {\n  display: flex;\n  margin-right: -10px;\n  padding-top: 11px;\n}\n.vc-material-third {\n  flex: 1;\n  padding-right: 10px;\n}\n', ""]);
    }, function(e, t, n) {
      var r = function() {
        var e2 = this, t2 = e2.$createElement, n2 = e2._self._c || t2;
        return n2("div", { staticClass: "vc-material", attrs: { role: "application", "aria-label": "Material color picker" } }, [n2("ed-in", { staticClass: "vc-material-hex", style: { borderColor: e2.colors.hex }, attrs: { label: "hex" }, on: { change: e2.onChange }, model: { value: e2.colors.hex, callback: function(t3) {
          e2.$set(e2.colors, "hex", t3);
        }, expression: "colors.hex" } }), e2._v(" "), n2("div", { staticClass: "vc-material-split" }, [n2("div", { staticClass: "vc-material-third" }, [n2("ed-in", { attrs: { label: "r" }, on: { change: e2.onChange }, model: { value: e2.colors.rgba.r, callback: function(t3) {
          e2.$set(e2.colors.rgba, "r", t3);
        }, expression: "colors.rgba.r" } })], 1), e2._v(" "), n2("div", { staticClass: "vc-material-third" }, [n2("ed-in", { attrs: { label: "g" }, on: { change: e2.onChange }, model: { value: e2.colors.rgba.g, callback: function(t3) {
          e2.$set(e2.colors.rgba, "g", t3);
        }, expression: "colors.rgba.g" } })], 1), e2._v(" "), n2("div", { staticClass: "vc-material-third" }, [n2("ed-in", { attrs: { label: "b" }, on: { change: e2.onChange }, model: { value: e2.colors.rgba.b, callback: function(t3) {
          e2.$set(e2.colors.rgba, "b", t3);
        }, expression: "colors.rgba.b" } })], 1)])], 1);
      }, i = [];
      r._withStripped = true;
      var o = { render: r, staticRenderFns: i };
      t.a = o;
    }, function(e, t, n) {
      function r(e2) {
        n(79);
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(39), o = n.n(i);
      for (var a in i)
        "default" !== a && function(e2) {
          n.d(t, e2, function() {
            return i[e2];
          });
        }(a);
      var s = n(114), l = n(2), u = r, f = l(o.a, s.a, false, u, null, null);
      f.options.__file = "src/components/Slider.vue", t.default = f.exports;
    }, function(e, t, n) {
      var r = n(80);
      "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
      n(1)("7982aa43", r, false, {});
    }, function(e, t, n) {
      t = e.exports = n(0)(false), t.push([e.i, "\n.vc-slider {\n  position: relative;\n  width: 410px;\n}\n.vc-slider-hue-warp {\n  height: 12px;\n  position: relative;\n}\n.vc-slider-hue-warp .vc-hue-picker {\n  width: 14px;\n  height: 14px;\n  border-radius: 6px;\n  transform: translate(-7px, -2px);\n  background-color: rgb(248, 248, 248);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n}\n.vc-slider-swatches {\n  display: flex;\n  margin-top: 20px;\n}\n.vc-slider-swatch {\n  margin-right: 1px;\n  flex: 1;\n  width: 20%;\n}\n.vc-slider-swatch:first-child {\n  margin-right: 1px;\n}\n.vc-slider-swatch:first-child .vc-slider-swatch-picker {\n  border-radius: 2px 0px 0px 2px;\n}\n.vc-slider-swatch:last-child {\n  margin-right: 0;\n}\n.vc-slider-swatch:last-child .vc-slider-swatch-picker {\n  border-radius: 0px 2px 2px 0px;\n}\n.vc-slider-swatch-picker {\n  cursor: pointer;\n  height: 12px;\n}\n.vc-slider-swatch:nth-child(n) .vc-slider-swatch-picker.vc-slider-swatch-picker--active {\n  transform: scaleY(1.8);\n  border-radius: 3.6px/2px;\n}\n.vc-slider-swatch-picker--white {\n  box-shadow: inset 0 0 0 1px #ddd;\n}\n.vc-slider-swatch-picker--active.vc-slider-swatch-picker--white {\n  box-shadow: inset 0 0 0 0.6px #ddd;\n}\n", ""]);
    }, function(e, t, n) {
      function r(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      t.__esModule = true;
      var i = n(82), o = r(i), a = n(100), s = r(a), c = "function" == typeof s.default && "symbol" == typeof o.default ? function(e2) {
        return typeof e2;
      } : function(e2) {
        return e2 && "function" == typeof s.default && e2.constructor === s.default && e2 !== s.default.prototype ? "symbol" : typeof e2;
      };
      t.default = "function" == typeof s.default && "symbol" === c(o.default) ? function(e2) {
        return void 0 === e2 ? "undefined" : c(e2);
      } : function(e2) {
        return e2 && "function" == typeof s.default && e2.constructor === s.default && e2 !== s.default.prototype ? "symbol" : void 0 === e2 ? "undefined" : c(e2);
      };
    }, function(e, t, n) {
      e.exports = { default: n(83), __esModule: true };
    }, function(e, t, n) {
      n(84), n(96), e.exports = n(32).f("iterator");
    }, function(e, t, n) {
      var r = n(85)(true);
      n(40)(String, "String", function(e2) {
        this._t = String(e2), this._i = 0;
      }, function() {
        var e2, t2 = this._t, n2 = this._i;
        return n2 >= t2.length ? { value: void 0, done: true } : (e2 = r(t2, n2), this._i += e2.length, { value: e2, done: false });
      });
    }, function(e, t, n) {
      var r = n(23), i = n(24);
      e.exports = function(e2) {
        return function(t2, n2) {
          var o, a, s = String(i(t2)), c = r(n2), l = s.length;
          return c < 0 || c >= l ? e2 ? "" : void 0 : (o = s.charCodeAt(c), o < 55296 || o > 56319 || c + 1 === l || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? e2 ? s.charAt(c) : o : e2 ? s.slice(c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536);
        };
      };
    }, function(e, t, n) {
      var r = n(87);
      e.exports = function(e2, t2, n2) {
        if (r(e2), void 0 === t2)
          return e2;
        switch (n2) {
          case 1:
            return function(n3) {
              return e2.call(t2, n3);
            };
          case 2:
            return function(n3, r2) {
              return e2.call(t2, n3, r2);
            };
          case 3:
            return function(n3, r2, i) {
              return e2.call(t2, n3, r2, i);
            };
        }
        return function() {
          return e2.apply(t2, arguments);
        };
      };
    }, function(e, t) {
      e.exports = function(e2) {
        if ("function" != typeof e2)
          throw TypeError(e2 + " is not a function!");
        return e2;
      };
    }, function(e, t, n) {
      var r = n(45), i = n(18), o = n(31), a = {};
      n(7)(a, n(11)("iterator"), function() {
        return this;
      }), e.exports = function(e2, t2, n2) {
        e2.prototype = r(a, { next: i(1, n2) }), o(e2, t2 + " Iterator");
      };
    }, function(e, t, n) {
      var r = n(8), i = n(16), o = n(27);
      e.exports = n(9) ? Object.defineProperties : function(e2, t2) {
        i(e2);
        for (var n2, a = o(t2), s = a.length, c = 0; s > c; )
          r.f(e2, n2 = a[c++], t2[n2]);
        return e2;
      };
    }, function(e, t, n) {
      var r = n(47);
      e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e2) {
        return "String" == r(e2) ? e2.split("") : Object(e2);
      };
    }, function(e, t, n) {
      var r = n(10), i = n(92), o = n(93);
      e.exports = function(e2) {
        return function(t2, n2, a) {
          var s, c = r(t2), l = i(c.length), u = o(a, l);
          if (e2 && n2 != n2) {
            for (; l > u; )
              if ((s = c[u++]) != s)
                return true;
          } else
            for (; l > u; u++)
              if ((e2 || u in c) && c[u] === n2)
                return e2 || u || 0;
          return !e2 && -1;
        };
      };
    }, function(e, t, n) {
      var r = n(23), i = Math.min;
      e.exports = function(e2) {
        return e2 > 0 ? i(r(e2), 9007199254740991) : 0;
      };
    }, function(e, t, n) {
      var r = n(23), i = Math.max, o = Math.min;
      e.exports = function(e2, t2) {
        return e2 = r(e2), e2 < 0 ? i(e2 + t2, 0) : o(e2, t2);
      };
    }, function(e, t, n) {
      var r = n(4).document;
      e.exports = r && r.documentElement;
    }, function(e, t, n) {
      var r = n(6), i = n(48), o = n(28)("IE_PROTO"), a = Object.prototype;
      e.exports = Object.getPrototypeOf || function(e2) {
        return e2 = i(e2), r(e2, o) ? e2[o] : "function" == typeof e2.constructor && e2 instanceof e2.constructor ? e2.constructor.prototype : e2 instanceof Object ? a : null;
      };
    }, function(e, t, n) {
      n(97);
      for (var r = n(4), i = n(7), o = n(26), a = n(11)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
        var l = s[c], u = r[l], f = u && u.prototype;
        f && !f[a] && i(f, a, l), o[l] = o.Array;
      }
    }, function(e, t, n) {
      var r = n(98), i = n(99), o = n(26), a = n(10);
      e.exports = n(40)(Array, "Array", function(e2, t2) {
        this._t = a(e2), this._i = 0, this._k = t2;
      }, function() {
        var e2 = this._t, t2 = this._k, n2 = this._i++;
        return !e2 || n2 >= e2.length ? (this._t = void 0, i(1)) : "keys" == t2 ? i(0, n2) : "values" == t2 ? i(0, e2[n2]) : i(0, [n2, e2[n2]]);
      }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries");
    }, function(e, t) {
      e.exports = function() {
      };
    }, function(e, t) {
      e.exports = function(e2, t2) {
        return { value: t2, done: !!e2 };
      };
    }, function(e, t, n) {
      e.exports = { default: n(101), __esModule: true };
    }, function(e, t, n) {
      n(102), n(108), n(109), n(110), e.exports = n(15).Symbol;
    }, function(e, t, n) {
      var r = n(4), i = n(6), o = n(9), a = n(41), s = n(44), c = n(103).KEY, l = n(17), u = n(29), f = n(31), d = n(19), h = n(11), p = n(32), v = n(33), g = n(104), b = n(105), x = n(16), m = n(12), _ = n(48), w = n(10), y = n(25), C = n(18), k = n(45), F = n(106), S = n(107), A = n(49), O = n(8), E = n(27), M = S.f, j = O.f, L = F.f, P = r.Symbol, R = r.JSON, D = R && R.stringify, B = h("_hidden"), T = h("toPrimitive"), H = {}.propertyIsEnumerable, N = u("symbol-registry"), z = u("symbols"), I = u("op-symbols"), $ = Object.prototype, U = "function" == typeof P && !!A.f, G = r.QObject, V = !G || !G.prototype || !G.prototype.findChild, q = o && l(function() {
        return 7 != k(j({}, "a", { get: function() {
          return j(this, "a", { value: 7 }).a;
        } })).a;
      }) ? function(e2, t2, n2) {
        var r2 = M($, t2);
        r2 && delete $[t2], j(e2, t2, n2), r2 && e2 !== $ && j($, t2, r2);
      } : j, X = function(e2) {
        var t2 = z[e2] = k(P.prototype);
        return t2._k = e2, t2;
      }, W = U && "symbol" == typeof P.iterator ? function(e2) {
        return "symbol" == typeof e2;
      } : function(e2) {
        return e2 instanceof P;
      }, Y = function(e2, t2, n2) {
        return e2 === $ && Y(I, t2, n2), x(e2), t2 = y(t2, true), x(n2), i(z, t2) ? (n2.enumerable ? (i(e2, B) && e2[B][t2] && (e2[B][t2] = false), n2 = k(n2, { enumerable: C(0, false) })) : (i(e2, B) || j(e2, B, C(1, {})), e2[B][t2] = true), q(e2, t2, n2)) : j(e2, t2, n2);
      }, J = function(e2, t2) {
        x(e2);
        for (var n2, r2 = g(t2 = w(t2)), i2 = 0, o2 = r2.length; o2 > i2; )
          Y(e2, n2 = r2[i2++], t2[n2]);
        return e2;
      }, K = function(e2, t2) {
        return void 0 === t2 ? k(e2) : J(k(e2), t2);
      }, Z = function(e2) {
        var t2 = H.call(this, e2 = y(e2, true));
        return !(this === $ && i(z, e2) && !i(I, e2)) && (!(t2 || !i(this, e2) || !i(z, e2) || i(this, B) && this[B][e2]) || t2);
      }, Q = function(e2, t2) {
        if (e2 = w(e2), t2 = y(t2, true), e2 !== $ || !i(z, t2) || i(I, t2)) {
          var n2 = M(e2, t2);
          return !n2 || !i(z, t2) || i(e2, B) && e2[B][t2] || (n2.enumerable = true), n2;
        }
      }, ee = function(e2) {
        for (var t2, n2 = L(w(e2)), r2 = [], o2 = 0; n2.length > o2; )
          i(z, t2 = n2[o2++]) || t2 == B || t2 == c || r2.push(t2);
        return r2;
      }, te = function(e2) {
        for (var t2, n2 = e2 === $, r2 = L(n2 ? I : w(e2)), o2 = [], a2 = 0; r2.length > a2; )
          !i(z, t2 = r2[a2++]) || n2 && !i($, t2) || o2.push(z[t2]);
        return o2;
      };
      U || (P = function() {
        if (this instanceof P)
          throw TypeError("Symbol is not a constructor!");
        var e2 = d(arguments.length > 0 ? arguments[0] : void 0), t2 = function(n2) {
          this === $ && t2.call(I, n2), i(this, B) && i(this[B], e2) && (this[B][e2] = false), q(this, e2, C(1, n2));
        };
        return o && V && q($, e2, { configurable: true, set: t2 }), X(e2);
      }, s(P.prototype, "toString", function() {
        return this._k;
      }), S.f = Q, O.f = Y, n(50).f = F.f = ee, n(34).f = Z, A.f = te, o && !n(14) && s($, "propertyIsEnumerable", Z, true), p.f = function(e2) {
        return X(h(e2));
      }), a(a.G + a.W + a.F * !U, { Symbol: P });
      for (var ne = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), re = 0; ne.length > re; )
        h(ne[re++]);
      for (var ie = E(h.store), oe = 0; ie.length > oe; )
        v(ie[oe++]);
      a(a.S + a.F * !U, "Symbol", { for: function(e2) {
        return i(N, e2 += "") ? N[e2] : N[e2] = P(e2);
      }, keyFor: function(e2) {
        if (!W(e2))
          throw TypeError(e2 + " is not a symbol!");
        for (var t2 in N)
          if (N[t2] === e2)
            return t2;
      }, useSetter: function() {
        V = true;
      }, useSimple: function() {
        V = false;
      } }), a(a.S + a.F * !U, "Object", { create: K, defineProperty: Y, defineProperties: J, getOwnPropertyDescriptor: Q, getOwnPropertyNames: ee, getOwnPropertySymbols: te });
      var ae = l(function() {
        A.f(1);
      });
      a(a.S + a.F * ae, "Object", { getOwnPropertySymbols: function(e2) {
        return A.f(_(e2));
      } }), R && a(a.S + a.F * (!U || l(function() {
        var e2 = P();
        return "[null]" != D([e2]) || "{}" != D({ a: e2 }) || "{}" != D(Object(e2));
      })), "JSON", { stringify: function(e2) {
        for (var t2, n2, r2 = [e2], i2 = 1; arguments.length > i2; )
          r2.push(arguments[i2++]);
        if (n2 = t2 = r2[1], (m(t2) || void 0 !== e2) && !W(e2))
          return b(t2) || (t2 = function(e3, t3) {
            if ("function" == typeof n2 && (t3 = n2.call(this, e3, t3)), !W(t3))
              return t3;
          }), r2[1] = t2, D.apply(R, r2);
      } }), P.prototype[T] || n(7)(P.prototype, T, P.prototype.valueOf), f(P, "Symbol"), f(Math, "Math", true), f(r.JSON, "JSON", true);
    }, function(e, t, n) {
      var r = n(19)("meta"), i = n(12), o = n(6), a = n(8).f, s = 0, c = Object.isExtensible || function() {
        return true;
      }, l = !n(17)(function() {
        return c(Object.preventExtensions({}));
      }), u = function(e2) {
        a(e2, r, { value: { i: "O" + ++s, w: {} } });
      }, f = function(e2, t2) {
        if (!i(e2))
          return "symbol" == typeof e2 ? e2 : ("string" == typeof e2 ? "S" : "P") + e2;
        if (!o(e2, r)) {
          if (!c(e2))
            return "F";
          if (!t2)
            return "E";
          u(e2);
        }
        return e2[r].i;
      }, d = function(e2, t2) {
        if (!o(e2, r)) {
          if (!c(e2))
            return true;
          if (!t2)
            return false;
          u(e2);
        }
        return e2[r].w;
      }, h = function(e2) {
        return l && p.NEED && c(e2) && !o(e2, r) && u(e2), e2;
      }, p = e.exports = { KEY: r, NEED: false, fastKey: f, getWeak: d, onFreeze: h };
    }, function(e, t, n) {
      var r = n(27), i = n(49), o = n(34);
      e.exports = function(e2) {
        var t2 = r(e2), n2 = i.f;
        if (n2)
          for (var a, s = n2(e2), c = o.f, l = 0; s.length > l; )
            c.call(e2, a = s[l++]) && t2.push(a);
        return t2;
      };
    }, function(e, t, n) {
      var r = n(47);
      e.exports = Array.isArray || function(e2) {
        return "Array" == r(e2);
      };
    }, function(e, t, n) {
      var r = n(10), i = n(50).f, o = {}.toString, a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], s = function(e2) {
        try {
          return i(e2);
        } catch (e3) {
          return a.slice();
        }
      };
      e.exports.f = function(e2) {
        return a && "[object Window]" == o.call(e2) ? s(e2) : i(r(e2));
      };
    }, function(e, t, n) {
      var r = n(34), i = n(18), o = n(10), a = n(25), s = n(6), c = n(42), l = Object.getOwnPropertyDescriptor;
      t.f = n(9) ? l : function(e2, t2) {
        if (e2 = o(e2), t2 = a(t2, true), c)
          try {
            return l(e2, t2);
          } catch (e3) {
          }
        if (s(e2, t2))
          return i(!r.f.call(e2, t2), e2[t2]);
      };
    }, function(e, t) {
    }, function(e, t, n) {
      n(33)("asyncIterator");
    }, function(e, t, n) {
      n(33)("observable");
    }, function(e, t, n) {
      var r = n(112);
      "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
      n(1)("7c5f1a1c", r, false, {});
    }, function(e, t, n) {
      t = e.exports = n(0)(false), t.push([e.i, "\n.vc-hue {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  border-radius: 2px;\n}\n.vc-hue--horizontal {\n  background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n}\n.vc-hue--vertical {\n  background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n}\n.vc-hue-container {\n  cursor: pointer;\n  margin: 0 2px;\n  position: relative;\n  height: 100%;\n}\n.vc-hue-pointer {\n  z-index: 2;\n  position: absolute;\n}\n.vc-hue-picker {\n  cursor: pointer;\n  margin-top: 1px;\n  width: 4px;\n  border-radius: 1px;\n  height: 8px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n  background: #fff;\n  transform: translateX(-2px) ;\n}\n", ""]);
    }, function(e, t, n) {
      var r = function() {
        var e2 = this, t2 = e2.$createElement, n2 = e2._self._c || t2;
        return n2("div", { class: ["vc-hue", e2.directionClass] }, [n2("div", { ref: "container", staticClass: "vc-hue-container", attrs: { role: "slider", "aria-valuenow": e2.colors.hsl.h, "aria-valuemin": "0", "aria-valuemax": "360" }, on: { mousedown: e2.handleMouseDown, touchmove: e2.handleChange, touchstart: e2.handleChange } }, [n2("div", { staticClass: "vc-hue-pointer", style: { top: e2.pointerTop, left: e2.pointerLeft }, attrs: { role: "presentation" } }, [n2("div", { staticClass: "vc-hue-picker" })])])]);
      }, i = [];
      r._withStripped = true;
      var o = { render: r, staticRenderFns: i };
      t.a = o;
    }, function(e, t, n) {
      var r = function() {
        var e2 = this, t2 = e2.$createElement, n2 = e2._self._c || t2;
        return n2("div", { staticClass: "vc-slider", attrs: { role: "application", "aria-label": "Slider color picker" } }, [n2("div", { staticClass: "vc-slider-hue-warp" }, [n2("hue", { on: { change: e2.hueChange }, model: { value: e2.colors, callback: function(t3) {
          e2.colors = t3;
        }, expression: "colors" } })], 1), e2._v(" "), n2("div", { staticClass: "vc-slider-swatches", attrs: { role: "group" } }, e2._l(e2.normalizedSwatches, function(t3, r2) {
          return n2("div", { key: r2, staticClass: "vc-slider-swatch", attrs: { "data-index": r2, "aria-label": "color:" + e2.colors.hex, role: "button" }, on: { click: function(n3) {
            return e2.handleSwClick(r2, t3);
          } } }, [n2("div", { staticClass: "vc-slider-swatch-picker", class: { "vc-slider-swatch-picker--active": e2.isActive(t3, r2), "vc-slider-swatch-picker--white": 1 === t3.l }, style: { background: "hsl(" + e2.colors.hsl.h + ", " + 100 * t3.s + "%, " + 100 * t3.l + "%)" } })]);
        }), 0)]);
      }, i = [];
      r._withStripped = true;
      var o = { render: r, staticRenderFns: i };
      t.a = o;
    }, function(e, t, n) {
      function r(e2) {
        n(116);
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(52), o = n.n(i);
      for (var a in i)
        "default" !== a && function(e2) {
          n.d(t, e2, function() {
            return i[e2];
          });
        }(a);
      var s = n(119), l = n(2), u = r, f = l(o.a, s.a, false, u, null, null);
      f.options.__file = "src/components/Swatches.vue", t.default = f.exports;
    }, function(e, t, n) {
      var r = n(117);
      "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
      n(1)("10f839a2", r, false, {});
    }, function(e, t, n) {
      t = e.exports = n(0)(false), t.push([e.i, "\n.vc-swatches {\n  width: 320px;\n  height: 240px;\n  overflow-y: scroll;\n  background-color: #fff;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n}\n.vc-swatches-box {\n  padding: 16px 0 6px 16px;\n  overflow: hidden;\n}\n.vc-swatches-color-group {\n  padding-bottom: 10px;\n  width: 40px;\n  float: left;\n  margin-right: 10px;\n}\n.vc-swatches-color-it {\n  box-sizing: border-box;\n  width: 40px;\n  height: 24px;\n  cursor: pointer;\n  background: #880e4f;\n  margin-bottom: 1px;\n  overflow: hidden;\n  -ms-border-radius: 2px 2px 0 0;\n  -moz-border-radius: 2px 2px 0 0;\n  -o-border-radius: 2px 2px 0 0;\n  -webkit-border-radius: 2px 2px 0 0;\n  border-radius: 2px 2px 0 0;\n}\n.vc-swatches-color--white {\n  border: 1px solid #DDD;\n}\n.vc-swatches-pick {\n  fill: rgb(255, 255, 255);\n  margin-left: 8px;\n  display: block;\n}\n.vc-swatches-color--white .vc-swatches-pick {\n  fill: rgb(51, 51, 51);\n}\n", ""]);
    }, function(e, t, n) {
      Object.defineProperty(t, "__esModule", { value: true }), n.d(t, "red", function() {
        return r;
      }), n.d(t, "pink", function() {
        return i;
      }), n.d(t, "purple", function() {
        return o;
      }), n.d(t, "deepPurple", function() {
        return a;
      }), n.d(t, "indigo", function() {
        return s;
      }), n.d(t, "blue", function() {
        return c;
      }), n.d(t, "lightBlue", function() {
        return l;
      }), n.d(t, "cyan", function() {
        return u;
      }), n.d(t, "teal", function() {
        return f;
      }), n.d(t, "green", function() {
        return d;
      }), n.d(t, "lightGreen", function() {
        return h;
      }), n.d(t, "lime", function() {
        return p;
      }), n.d(t, "yellow", function() {
        return v;
      }), n.d(t, "amber", function() {
        return g;
      }), n.d(t, "orange", function() {
        return b;
      }), n.d(t, "deepOrange", function() {
        return x;
      }), n.d(t, "brown", function() {
        return m;
      }), n.d(t, "grey", function() {
        return _;
      }), n.d(t, "blueGrey", function() {
        return w;
      }), n.d(t, "darkText", function() {
        return y;
      }), n.d(t, "lightText", function() {
        return C;
      }), n.d(t, "darkIcons", function() {
        return k;
      }), n.d(t, "lightIcons", function() {
        return F;
      }), n.d(t, "white", function() {
        return S;
      }), n.d(t, "black", function() {
        return A;
      });
      var r = { 50: "#ffebee", 100: "#ffcdd2", 200: "#ef9a9a", 300: "#e57373", 400: "#ef5350", 500: "#f44336", 600: "#e53935", 700: "#d32f2f", 800: "#c62828", 900: "#b71c1c", a100: "#ff8a80", a200: "#ff5252", a400: "#ff1744", a700: "#d50000" }, i = { 50: "#fce4ec", 100: "#f8bbd0", 200: "#f48fb1", 300: "#f06292", 400: "#ec407a", 500: "#e91e63", 600: "#d81b60", 700: "#c2185b", 800: "#ad1457", 900: "#880e4f", a100: "#ff80ab", a200: "#ff4081", a400: "#f50057", a700: "#c51162" }, o = { 50: "#f3e5f5", 100: "#e1bee7", 200: "#ce93d8", 300: "#ba68c8", 400: "#ab47bc", 500: "#9c27b0", 600: "#8e24aa", 700: "#7b1fa2", 800: "#6a1b9a", 900: "#4a148c", a100: "#ea80fc", a200: "#e040fb", a400: "#d500f9", a700: "#aa00ff" }, a = { 50: "#ede7f6", 100: "#d1c4e9", 200: "#b39ddb", 300: "#9575cd", 400: "#7e57c2", 500: "#673ab7", 600: "#5e35b1", 700: "#512da8", 800: "#4527a0", 900: "#311b92", a100: "#b388ff", a200: "#7c4dff", a400: "#651fff", a700: "#6200ea" }, s = { 50: "#e8eaf6", 100: "#c5cae9", 200: "#9fa8da", 300: "#7986cb", 400: "#5c6bc0", 500: "#3f51b5", 600: "#3949ab", 700: "#303f9f", 800: "#283593", 900: "#1a237e", a100: "#8c9eff", a200: "#536dfe", a400: "#3d5afe", a700: "#304ffe" }, c = { 50: "#e3f2fd", 100: "#bbdefb", 200: "#90caf9", 300: "#64b5f6", 400: "#42a5f5", 500: "#2196f3", 600: "#1e88e5", 700: "#1976d2", 800: "#1565c0", 900: "#0d47a1", a100: "#82b1ff", a200: "#448aff", a400: "#2979ff", a700: "#2962ff" }, l = { 50: "#e1f5fe", 100: "#b3e5fc", 200: "#81d4fa", 300: "#4fc3f7", 400: "#29b6f6", 500: "#03a9f4", 600: "#039be5", 700: "#0288d1", 800: "#0277bd", 900: "#01579b", a100: "#80d8ff", a200: "#40c4ff", a400: "#00b0ff", a700: "#0091ea" }, u = { 50: "#e0f7fa", 100: "#b2ebf2", 200: "#80deea", 300: "#4dd0e1", 400: "#26c6da", 500: "#00bcd4", 600: "#00acc1", 700: "#0097a7", 800: "#00838f", 900: "#006064", a100: "#84ffff", a200: "#18ffff", a400: "#00e5ff", a700: "#00b8d4" }, f = { 50: "#e0f2f1", 100: "#b2dfdb", 200: "#80cbc4", 300: "#4db6ac", 400: "#26a69a", 500: "#009688", 600: "#00897b", 700: "#00796b", 800: "#00695c", 900: "#004d40", a100: "#a7ffeb", a200: "#64ffda", a400: "#1de9b6", a700: "#00bfa5" }, d = { 50: "#e8f5e9", 100: "#c8e6c9", 200: "#a5d6a7", 300: "#81c784", 400: "#66bb6a", 500: "#4caf50", 600: "#43a047", 700: "#388e3c", 800: "#2e7d32", 900: "#1b5e20", a100: "#b9f6ca", a200: "#69f0ae", a400: "#00e676", a700: "#00c853" }, h = { 50: "#f1f8e9", 100: "#dcedc8", 200: "#c5e1a5", 300: "#aed581", 400: "#9ccc65", 500: "#8bc34a", 600: "#7cb342", 700: "#689f38", 800: "#558b2f", 900: "#33691e", a100: "#ccff90", a200: "#b2ff59", a400: "#76ff03", a700: "#64dd17" }, p = { 50: "#f9fbe7", 100: "#f0f4c3", 200: "#e6ee9c", 300: "#dce775", 400: "#d4e157", 500: "#cddc39", 600: "#c0ca33", 700: "#afb42b", 800: "#9e9d24", 900: "#827717", a100: "#f4ff81", a200: "#eeff41", a400: "#c6ff00", a700: "#aeea00" }, v = { 50: "#fffde7", 100: "#fff9c4", 200: "#fff59d", 300: "#fff176", 400: "#ffee58", 500: "#ffeb3b", 600: "#fdd835", 700: "#fbc02d", 800: "#f9a825", 900: "#f57f17", a100: "#ffff8d", a200: "#ffff00", a400: "#ffea00", a700: "#ffd600" }, g = { 50: "#fff8e1", 100: "#ffecb3", 200: "#ffe082", 300: "#ffd54f", 400: "#ffca28", 500: "#ffc107", 600: "#ffb300", 700: "#ffa000", 800: "#ff8f00", 900: "#ff6f00", a100: "#ffe57f", a200: "#ffd740", a400: "#ffc400", a700: "#ffab00" }, b = { 50: "#fff3e0", 100: "#ffe0b2", 200: "#ffcc80", 300: "#ffb74d", 400: "#ffa726", 500: "#ff9800", 600: "#fb8c00", 700: "#f57c00", 800: "#ef6c00", 900: "#e65100", a100: "#ffd180", a200: "#ffab40", a400: "#ff9100", a700: "#ff6d00" }, x = { 50: "#fbe9e7", 100: "#ffccbc", 200: "#ffab91", 300: "#ff8a65", 400: "#ff7043", 500: "#ff5722", 600: "#f4511e", 700: "#e64a19", 800: "#d84315", 900: "#bf360c", a100: "#ff9e80", a200: "#ff6e40", a400: "#ff3d00", a700: "#dd2c00" }, m = { 50: "#efebe9", 100: "#d7ccc8", 200: "#bcaaa4", 300: "#a1887f", 400: "#8d6e63", 500: "#795548", 600: "#6d4c41", 700: "#5d4037", 800: "#4e342e", 900: "#3e2723" }, _ = { 50: "#fafafa", 100: "#f5f5f5", 200: "#eeeeee", 300: "#e0e0e0", 400: "#bdbdbd", 500: "#9e9e9e", 600: "#757575", 700: "#616161", 800: "#424242", 900: "#212121" }, w = { 50: "#eceff1", 100: "#cfd8dc", 200: "#b0bec5", 300: "#90a4ae", 400: "#78909c", 500: "#607d8b", 600: "#546e7a", 700: "#455a64", 800: "#37474f", 900: "#263238" }, y = { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.54)", disabled: "rgba(0, 0, 0, 0.38)", dividers: "rgba(0, 0, 0, 0.12)" }, C = { primary: "rgba(255, 255, 255, 1)", secondary: "rgba(255, 255, 255, 0.7)", disabled: "rgba(255, 255, 255, 0.5)", dividers: "rgba(255, 255, 255, 0.12)" }, k = { active: "rgba(0, 0, 0, 0.54)", inactive: "rgba(0, 0, 0, 0.38)" }, F = { active: "rgba(255, 255, 255, 1)", inactive: "rgba(255, 255, 255, 0.5)" }, S = "#ffffff", A = "#000000";
      t.default = { red: r, pink: i, purple: o, deepPurple: a, indigo: s, blue: c, lightBlue: l, cyan: u, teal: f, green: d, lightGreen: h, lime: p, yellow: v, amber: g, orange: b, deepOrange: x, brown: m, grey: _, blueGrey: w, darkText: y, lightText: C, darkIcons: k, lightIcons: F, white: S, black: A };
    }, function(e, t, n) {
      var r = function() {
        var e2 = this, t2 = e2.$createElement, n2 = e2._self._c || t2;
        return n2("div", { staticClass: "vc-swatches", attrs: { role: "application", "aria-label": "Swatches color picker", "data-pick": e2.pick } }, [n2("div", { staticClass: "vc-swatches-box", attrs: { role: "listbox" } }, e2._l(e2.palette, function(t3, r2) {
          return n2("div", { key: r2, staticClass: "vc-swatches-color-group" }, e2._l(t3, function(t4) {
            return n2("div", { key: t4, class: ["vc-swatches-color-it", { "vc-swatches-color--white": "#FFFFFF" === t4 }], style: { background: t4 }, attrs: { role: "option", "aria-label": "Color:" + t4, "aria-selected": e2.equal(t4), "data-color": t4 }, on: { click: function(n3) {
              return e2.handlerClick(t4);
            } } }, [n2("div", { directives: [{ name: "show", rawName: "v-show", value: e2.equal(t4), expression: "equal(c)" }], staticClass: "vc-swatches-pick" }, [n2("svg", { staticStyle: { width: "24px", height: "24px" }, attrs: { viewBox: "0 0 24 24" } }, [n2("path", { attrs: { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" } })])])]);
          }), 0);
        }), 0)]);
      }, i = [];
      r._withStripped = true;
      var o = { render: r, staticRenderFns: i };
      t.a = o;
    }, function(e, t, n) {
      function r(e2) {
        n(121);
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(53), o = n.n(i);
      for (var a in i)
        "default" !== a && function(e2) {
          n.d(t, e2, function() {
            return i[e2];
          });
        }(a);
      var s = n(134), l = n(2), u = r, f = l(o.a, s.a, false, u, null, null);
      f.options.__file = "src/components/Photoshop.vue", t.default = f.exports;
    }, function(e, t, n) {
      var r = n(122);
      "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
      n(1)("080365d4", r, false, {});
    }, function(e, t, n) {
      t = e.exports = n(0)(false), t.push([e.i, '\n.vc-photoshop {\n  background: #DCDCDC;\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15);\n  box-sizing: initial;\n  width: 513px;\n  font-family: Roboto;\n}\n.vc-photoshop__disable-fields {\n  width: 390px;\n}\n.vc-ps-head {\n  background-image: linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%);\n  border-bottom: 1px solid #B1B1B1;\n  box-shadow: inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02);\n  height: 23px;\n  line-height: 24px;\n  border-radius: 4px 4px 0 0;\n  font-size: 13px;\n  color: #4D4D4D;\n  text-align: center;\n}\n.vc-ps-body {\n  padding: 15px;\n  display: flex;\n}\n.vc-ps-saturation-wrap {\n  width: 256px;\n  height: 256px;\n  position: relative;\n  border: 2px solid #B3B3B3;\n  border-bottom: 2px solid #F0F0F0;\n  overflow: hidden;\n}\n.vc-ps-saturation-wrap .vc-saturation-circle {\n  width: 12px;\n  height: 12px;\n}\n.vc-ps-hue-wrap {\n  position: relative;\n  height: 256px;\n  width: 19px;\n  margin-left: 10px;\n  border: 2px solid #B3B3B3;\n  border-bottom: 2px solid #F0F0F0;\n}\n.vc-ps-hue-pointer {\n  position: relative;\n}\n.vc-ps-hue-pointer--left,\n.vc-ps-hue-pointer--right {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 5px 0 5px 8px;\n  border-color: transparent transparent transparent #555;\n}\n.vc-ps-hue-pointer--left:after,\n.vc-ps-hue-pointer--right:after {\n  content: "";\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 4px 0 4px 6px;\n  border-color: transparent transparent transparent #fff;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  transform: translate(-8px, -5px);\n}\n.vc-ps-hue-pointer--left {\n  transform: translate(-13px, -4px);\n}\n.vc-ps-hue-pointer--right {\n  transform: translate(20px, -4px) rotate(180deg);\n}\n.vc-ps-controls {\n  width: 180px;\n  margin-left: 10px;\n  display: flex;\n}\n.vc-ps-controls__disable-fields {\n  width: auto;\n}\n.vc-ps-actions {\n  margin-left: 20px;\n  flex: 1;\n}\n.vc-ps-ac-btn {\n  cursor: pointer;\n  background-image: linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%);\n  border: 1px solid #878787;\n  border-radius: 2px;\n  height: 20px;\n  box-shadow: 0 1px 0 0 #EAEAEA;\n  font-size: 14px;\n  color: #000;\n  line-height: 20px;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.vc-ps-previews {\n  width: 60px;\n}\n.vc-ps-previews__swatches {\n  border: 1px solid #B3B3B3;\n  border-bottom: 1px solid #F0F0F0;\n  margin-bottom: 2px;\n  margin-top: 1px;\n}\n.vc-ps-previews__pr-color {\n  height: 34px;\n  box-shadow: inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000;\n}\n.vc-ps-previews__label {\n  font-size: 14px;\n  color: #000;\n  text-align: center;\n}\n.vc-ps-fields {\n  padding-top: 5px;\n  padding-bottom: 9px;\n  width: 80px;\n  position: relative;\n}\n.vc-ps-fields .vc-input__input {\n  margin-left: 40%;\n  width: 40%;\n  height: 18px;\n  border: 1px solid #888888;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC;\n  margin-bottom: 5px;\n  font-size: 13px;\n  padding-left: 3px;\n  margin-right: 10px;\n}\n.vc-ps-fields .vc-input__label, .vc-ps-fields .vc-input__desc {\n  top: 0;\n  text-transform: uppercase;\n  font-size: 13px;\n  height: 18px;\n  line-height: 22px;\n  position: absolute;\n}\n.vc-ps-fields .vc-input__label {\n  left: 0;\n  width: 34px;\n}\n.vc-ps-fields .vc-input__desc {\n  right: 0;\n  width: 0;\n}\n.vc-ps-fields__divider {\n  height: 5px;\n}\n.vc-ps-fields__hex .vc-input__input {\n  margin-left: 20%;\n  width: 80%;\n  height: 18px;\n  border: 1px solid #888888;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC;\n  margin-bottom: 6px;\n  font-size: 13px;\n  padding-left: 3px;\n}\n.vc-ps-fields__hex .vc-input__label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 14px;\n  text-transform: uppercase;\n  font-size: 13px;\n  height: 18px;\n  line-height: 22px;\n}\n', ""]);
    }, function(e, t, n) {
      var r = n(124);
      "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
      n(1)("b5380e52", r, false, {});
    }, function(e, t, n) {
      t = e.exports = n(0)(false), t.push([e.i, "\n.vc-saturation,\n.vc-saturation--white,\n.vc-saturation--black {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.vc-saturation--white {\n  background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n}\n.vc-saturation--black {\n  background: linear-gradient(to top, #000, rgba(0,0,0,0));\n}\n.vc-saturation-pointer {\n  cursor: pointer;\n  position: absolute;\n}\n.vc-saturation-circle {\n  cursor: head;\n  width: 4px;\n  height: 4px;\n  box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);\n  border-radius: 50%;\n  transform: translate(-2px, -2px);\n}\n", ""]);
    }, function(e, t) {
      function n(e2, t2, n2) {
        return t2 < n2 ? e2 < t2 ? t2 : e2 > n2 ? n2 : e2 : e2 < n2 ? n2 : e2 > t2 ? t2 : e2;
      }
      e.exports = n;
    }, function(e, t) {
      function n(e2, t2, n2) {
        function r2(t3) {
          var n3 = v2, r3 = g2;
          return v2 = g2 = void 0, k = t3, x2 = e2.apply(r3, n3);
        }
        function o2(e3) {
          return k = e3, m2 = setTimeout(u2, t2), F ? r2(e3) : x2;
        }
        function a2(e3) {
          var n3 = e3 - _2, r3 = e3 - k, i2 = t2 - n3;
          return S ? y(i2, b2 - r3) : i2;
        }
        function l2(e3) {
          var n3 = e3 - _2, r3 = e3 - k;
          return void 0 === _2 || n3 >= t2 || n3 < 0 || S && r3 >= b2;
        }
        function u2() {
          var e3 = C();
          if (l2(e3))
            return f2(e3);
          m2 = setTimeout(u2, a2(e3));
        }
        function f2(e3) {
          return m2 = void 0, A && v2 ? r2(e3) : (v2 = g2 = void 0, x2);
        }
        function d2() {
          void 0 !== m2 && clearTimeout(m2), k = 0, v2 = _2 = g2 = m2 = void 0;
        }
        function h2() {
          return void 0 === m2 ? x2 : f2(C());
        }
        function p2() {
          var e3 = C(), n3 = l2(e3);
          if (v2 = arguments, g2 = this, _2 = e3, n3) {
            if (void 0 === m2)
              return o2(_2);
            if (S)
              return m2 = setTimeout(u2, t2), r2(_2);
          }
          return void 0 === m2 && (m2 = setTimeout(u2, t2)), x2;
        }
        var v2, g2, b2, x2, m2, _2, k = 0, F = false, S = false, A = true;
        if ("function" != typeof e2)
          throw new TypeError(c);
        return t2 = s(t2) || 0, i(n2) && (F = !!n2.leading, S = "maxWait" in n2, b2 = S ? w(s(n2.maxWait) || 0, t2) : b2, A = "trailing" in n2 ? !!n2.trailing : A), p2.cancel = d2, p2.flush = h2, p2;
      }
      function r(e2, t2, r2) {
        var o2 = true, a2 = true;
        if ("function" != typeof e2)
          throw new TypeError(c);
        return i(r2) && (o2 = "leading" in r2 ? !!r2.leading : o2, a2 = "trailing" in r2 ? !!r2.trailing : a2), n(e2, t2, { leading: o2, maxWait: t2, trailing: a2 });
      }
      function i(e2) {
        var t2 = typeof e2;
        return !!e2 && ("object" == t2 || "function" == t2);
      }
      function o(e2) {
        return !!e2 && "object" == typeof e2;
      }
      function a(e2) {
        return "symbol" == typeof e2 || o(e2) && _.call(e2) == u;
      }
      function s(e2) {
        if ("number" == typeof e2)
          return e2;
        if (a(e2))
          return l;
        if (i(e2)) {
          var t2 = "function" == typeof e2.valueOf ? e2.valueOf() : e2;
          e2 = i(t2) ? t2 + "" : t2;
        }
        if ("string" != typeof e2)
          return 0 === e2 ? e2 : +e2;
        e2 = e2.replace(f, "");
        var n2 = h.test(e2);
        return n2 || p.test(e2) ? v(e2.slice(2), n2 ? 2 : 8) : d.test(e2) ? l : +e2;
      }
      var c = "Expected a function", l = NaN, u = "[object Symbol]", f = /^\s+|\s+$/g, d = /^[-+]0x[0-9a-f]+$/i, h = /^0b[01]+$/i, p = /^0o[0-7]+$/i, v = parseInt, g = "object" == typeof commonjsGlobal && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal, b = "object" == typeof self && self && self.Object === Object && self, x = g || b || Function("return this")(), m = Object.prototype, _ = m.toString, w = Math.max, y = Math.min, C = function() {
        return x.Date.now();
      };
      e.exports = r;
    }, function(e, t, n) {
      var r = function() {
        var e2 = this, t2 = e2.$createElement, n2 = e2._self._c || t2;
        return n2("div", { ref: "container", staticClass: "vc-saturation", style: { background: e2.bgColor }, on: { mousedown: e2.handleMouseDown, touchmove: e2.handleChange, touchstart: e2.handleChange } }, [n2("div", { staticClass: "vc-saturation--white" }), e2._v(" "), n2("div", { staticClass: "vc-saturation--black" }), e2._v(" "), n2("div", { staticClass: "vc-saturation-pointer", style: { top: e2.pointerTop, left: e2.pointerLeft } }, [n2("div", { staticClass: "vc-saturation-circle" })])]);
      }, i = [];
      r._withStripped = true;
      var o = { render: r, staticRenderFns: i };
      t.a = o;
    }, function(e, t, n) {
      var r = n(129);
      "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
      n(1)("4dc1b086", r, false, {});
    }, function(e, t, n) {
      t = e.exports = n(0)(false), t.push([e.i, "\n.vc-alpha {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.vc-alpha-checkboard-wrap {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  overflow: hidden;\n}\n.vc-alpha-gradient {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.vc-alpha-container {\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  margin: 0 3px;\n}\n.vc-alpha-pointer {\n  z-index: 2;\n  position: absolute;\n}\n.vc-alpha-picker {\n  cursor: pointer;\n  width: 4px;\n  border-radius: 1px;\n  height: 8px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n  background: #fff;\n  margin-top: 1px;\n  transform: translateX(-2px);\n}\n", ""]);
    }, function(e, t, n) {
      var r = n(131);
      "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
      n(1)("7e15c05b", r, false, {});
    }, function(e, t, n) {
      t = e.exports = n(0)(false), t.push([e.i, "\n.vc-checkerboard {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  background-size: contain;\n}\n", ""]);
    }, function(e, t, n) {
      var r = function() {
        var e2 = this, t2 = e2.$createElement;
        return (e2._self._c || t2)("div", { staticClass: "vc-checkerboard", style: e2.bgStyle });
      }, i = [];
      r._withStripped = true;
      var o = { render: r, staticRenderFns: i };
      t.a = o;
    }, function(e, t, n) {
      var r = function() {
        var e2 = this, t2 = e2.$createElement, n2 = e2._self._c || t2;
        return n2("div", { staticClass: "vc-alpha" }, [n2("div", { staticClass: "vc-alpha-checkboard-wrap" }, [n2("checkboard")], 1), e2._v(" "), n2("div", { staticClass: "vc-alpha-gradient", style: { background: e2.gradientColor } }), e2._v(" "), n2("div", { ref: "container", staticClass: "vc-alpha-container", on: { mousedown: e2.handleMouseDown, touchmove: e2.handleChange, touchstart: e2.handleChange } }, [n2("div", { staticClass: "vc-alpha-pointer", style: { left: 100 * e2.colors.a + "%" } }, [n2("div", { staticClass: "vc-alpha-picker" })])])]);
      }, i = [];
      r._withStripped = true;
      var o = { render: r, staticRenderFns: i };
      t.a = o;
    }, function(e, t, n) {
      var r = function() {
        var e2 = this, t2 = e2.$createElement, n2 = e2._self._c || t2;
        return n2("div", { class: ["vc-photoshop", e2.disableFields ? "vc-photoshop__disable-fields" : ""], attrs: { role: "application", "aria-label": "PhotoShop color picker" } }, [n2("div", { staticClass: "vc-ps-head", attrs: { role: "heading" } }, [e2._v(e2._s(e2.head))]), e2._v(" "), n2("div", { staticClass: "vc-ps-body" }, [n2("div", { staticClass: "vc-ps-saturation-wrap" }, [n2("saturation", { on: { change: e2.childChange }, model: { value: e2.colors, callback: function(t3) {
          e2.colors = t3;
        }, expression: "colors" } })], 1), e2._v(" "), n2("div", { staticClass: "vc-ps-hue-wrap" }, [n2("hue", { attrs: { direction: "vertical" }, on: { change: e2.childChange }, model: { value: e2.colors, callback: function(t3) {
          e2.colors = t3;
        }, expression: "colors" } }, [n2("div", { staticClass: "vc-ps-hue-pointer" }, [n2("i", { staticClass: "vc-ps-hue-pointer--left" }), n2("i", { staticClass: "vc-ps-hue-pointer--right" })])])], 1), e2._v(" "), n2("div", { class: ["vc-ps-controls", e2.disableFields ? "vc-ps-controls__disable-fields" : ""] }, [n2("div", { staticClass: "vc-ps-previews" }, [n2("div", { staticClass: "vc-ps-previews__label" }, [e2._v(e2._s(e2.newLabel))]), e2._v(" "), n2("div", { staticClass: "vc-ps-previews__swatches" }, [n2("div", { staticClass: "vc-ps-previews__pr-color", style: { background: e2.colors.hex }, attrs: { "aria-label": "New color is " + e2.colors.hex } }), e2._v(" "), n2("div", { staticClass: "vc-ps-previews__pr-color", style: { background: e2.currentColor }, attrs: { "aria-label": "Current color is " + e2.currentColor }, on: { click: e2.clickCurrentColor } })]), e2._v(" "), n2("div", { staticClass: "vc-ps-previews__label" }, [e2._v(e2._s(e2.currentLabel))])]), e2._v(" "), e2.disableFields ? e2._e() : n2("div", { staticClass: "vc-ps-actions" }, [n2("div", { staticClass: "vc-ps-ac-btn", attrs: { role: "button", "aria-label": e2.acceptLabel }, on: { click: e2.handleAccept } }, [e2._v(e2._s(e2.acceptLabel))]), e2._v(" "), n2("div", { staticClass: "vc-ps-ac-btn", attrs: { role: "button", "aria-label": e2.cancelLabel }, on: { click: e2.handleCancel } }, [e2._v(e2._s(e2.cancelLabel))]), e2._v(" "), n2("div", { staticClass: "vc-ps-fields" }, [n2("ed-in", { attrs: { label: "h", desc: "°", value: e2.hsv.h }, on: { change: e2.inputChange } }), e2._v(" "), n2("ed-in", { attrs: { label: "s", desc: "%", value: e2.hsv.s, max: 100 }, on: { change: e2.inputChange } }), e2._v(" "), n2("ed-in", { attrs: { label: "v", desc: "%", value: e2.hsv.v, max: 100 }, on: { change: e2.inputChange } }), e2._v(" "), n2("div", { staticClass: "vc-ps-fields__divider" }), e2._v(" "), n2("ed-in", { attrs: { label: "r", value: e2.colors.rgba.r }, on: { change: e2.inputChange } }), e2._v(" "), n2("ed-in", { attrs: { label: "g", value: e2.colors.rgba.g }, on: { change: e2.inputChange } }), e2._v(" "), n2("ed-in", { attrs: { label: "b", value: e2.colors.rgba.b }, on: { change: e2.inputChange } }), e2._v(" "), n2("div", { staticClass: "vc-ps-fields__divider" }), e2._v(" "), n2("ed-in", { staticClass: "vc-ps-fields__hex", attrs: { label: "#", value: e2.hex }, on: { change: e2.inputChange } })], 1), e2._v(" "), e2.hasResetButton ? n2("div", { staticClass: "vc-ps-ac-btn", attrs: { "aria-label": "reset" }, on: { click: e2.handleReset } }, [e2._v(e2._s(e2.resetLabel))]) : e2._e()])])])]);
      }, i = [];
      r._withStripped = true;
      var o = { render: r, staticRenderFns: i };
      t.a = o;
    }, function(e, t, n) {
      function r(e2) {
        n(136);
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(57), o = n.n(i);
      for (var a in i)
        "default" !== a && function(e2) {
          n.d(t, e2, function() {
            return i[e2];
          });
        }(a);
      var s = n(138), l = n(2), u = r, f = l(o.a, s.a, false, u, null, null);
      f.options.__file = "src/components/Sketch.vue", t.default = f.exports;
    }, function(e, t, n) {
      var r = n(137);
      "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
      n(1)("612c6604", r, false, {});
    }, function(e, t, n) {
      t = e.exports = n(0)(false), t.push([e.i, "\n.vc-sketch {\n  position: relative;\n  width: 200px;\n  padding: 10px 10px 0;\n  box-sizing: initial;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 8px 16px rgba(0, 0, 0, .15);\n}\n.vc-sketch-saturation-wrap {\n  width: 100%;\n  padding-bottom: 75%;\n  position: relative;\n  overflow: hidden;\n}\n.vc-sketch-controls {\n  display: flex;\n}\n.vc-sketch-sliders {\n  padding: 4px 0;\n  flex: 1;\n}\n.vc-sketch-sliders .vc-hue,\n.vc-sketch-sliders .vc-alpha-gradient {\n  border-radius: 2px;\n}\n.vc-sketch-hue-wrap {\n  position: relative;\n  height: 10px;\n}\n.vc-sketch-alpha-wrap {\n  position: relative;\n  height: 10px;\n  margin-top: 4px;\n  overflow: hidden;\n}\n.vc-sketch-color-wrap {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  margin-top: 4px;\n  margin-left: 4px;\n  border-radius: 3px;\n}\n.vc-sketch-active-color {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 2px;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15), inset 0 0 4px rgba(0, 0, 0, .25);\n  z-index: 2;\n}\n.vc-sketch-color-wrap .vc-checkerboard {\n  background-size: auto;\n}\n.vc-sketch-field {\n  display: flex;\n  padding-top: 4px;\n}\n.vc-sketch-field .vc-input__input {\n  width: 90%;\n  padding: 4px 0 3px 10%;\n  border: none;\n  box-shadow: inset 0 0 0 1px #ccc;\n  font-size: 10px;\n}\n.vc-sketch-field .vc-input__label {\n  display: block;\n  text-align: center;\n  font-size: 11px;\n  color: #222;\n  padding-top: 3px;\n  padding-bottom: 4px;\n  text-transform: capitalize;\n}\n.vc-sketch-field--single {\n  flex: 1;\n  padding-left: 6px;\n}\n.vc-sketch-field--double {\n  flex: 2;\n}\n.vc-sketch-presets {\n  margin-right: -10px;\n  margin-left: -10px;\n  padding-left: 10px;\n  padding-top: 10px;\n  border-top: 1px solid #eee;\n}\n.vc-sketch-presets-color {\n  border-radius: 3px;\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n  margin: 0 10px 10px 0;\n  vertical-align: top;\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);\n}\n.vc-sketch-presets-color .vc-checkerboard {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);\n  border-radius: 3px;\n}\n.vc-sketch__disable-alpha .vc-sketch-color-wrap {\n  height: 10px;\n}\n", ""]);
    }, function(e, t, n) {
      var r = function() {
        var e2 = this, t2 = e2.$createElement, n2 = e2._self._c || t2;
        return n2("div", { class: ["vc-sketch", e2.disableAlpha ? "vc-sketch__disable-alpha" : ""], attrs: { role: "application", "aria-label": "Sketch color picker" } }, [n2("div", { staticClass: "vc-sketch-saturation-wrap" }, [n2("saturation", { on: { change: e2.childChange }, model: { value: e2.colors, callback: function(t3) {
          e2.colors = t3;
        }, expression: "colors" } })], 1), e2._v(" "), n2("div", { staticClass: "vc-sketch-controls" }, [n2("div", { staticClass: "vc-sketch-sliders" }, [n2("div", { staticClass: "vc-sketch-hue-wrap" }, [n2("hue", { on: { change: e2.childChange }, model: { value: e2.colors, callback: function(t3) {
          e2.colors = t3;
        }, expression: "colors" } })], 1), e2._v(" "), e2.disableAlpha ? e2._e() : n2("div", { staticClass: "vc-sketch-alpha-wrap" }, [n2("alpha", { on: { change: e2.childChange }, model: { value: e2.colors, callback: function(t3) {
          e2.colors = t3;
        }, expression: "colors" } })], 1)]), e2._v(" "), n2("div", { staticClass: "vc-sketch-color-wrap" }, [n2("div", { staticClass: "vc-sketch-active-color", style: { background: e2.activeColor }, attrs: { "aria-label": "Current color is " + e2.activeColor } }), e2._v(" "), n2("checkboard")], 1)]), e2._v(" "), e2.disableFields ? e2._e() : n2("div", { staticClass: "vc-sketch-field" }, [n2("div", { staticClass: "vc-sketch-field--double" }, [n2("ed-in", { attrs: { label: "hex", value: e2.hex }, on: { change: e2.inputChange } })], 1), e2._v(" "), n2("div", { staticClass: "vc-sketch-field--single" }, [n2("ed-in", { attrs: { label: "r", value: e2.colors.rgba.r }, on: { change: e2.inputChange } })], 1), e2._v(" "), n2("div", { staticClass: "vc-sketch-field--single" }, [n2("ed-in", { attrs: { label: "g", value: e2.colors.rgba.g }, on: { change: e2.inputChange } })], 1), e2._v(" "), n2("div", { staticClass: "vc-sketch-field--single" }, [n2("ed-in", { attrs: { label: "b", value: e2.colors.rgba.b }, on: { change: e2.inputChange } })], 1), e2._v(" "), e2.disableAlpha ? e2._e() : n2("div", { staticClass: "vc-sketch-field--single" }, [n2("ed-in", { attrs: { label: "a", value: e2.colors.a, "arrow-offset": 0.01, max: 1 }, on: { change: e2.inputChange } })], 1)]), e2._v(" "), n2("div", { staticClass: "vc-sketch-presets", attrs: { role: "group", "aria-label": "A color preset, pick one to set as current color" } }, [e2._l(e2.presetColors, function(t3) {
          return [e2.isTransparent(t3) ? n2("div", { key: t3, staticClass: "vc-sketch-presets-color", attrs: { "aria-label": "Color:" + t3 }, on: { click: function(n3) {
            return e2.handlePreset(t3);
          } } }, [n2("checkboard")], 1) : n2("div", { key: t3, staticClass: "vc-sketch-presets-color", style: { background: t3 }, attrs: { "aria-label": "Color:" + t3 }, on: { click: function(n3) {
            return e2.handlePreset(t3);
          } } })];
        })], 2)]);
      }, i = [];
      r._withStripped = true;
      var o = { render: r, staticRenderFns: i };
      t.a = o;
    }, function(e, t, n) {
      function r(e2) {
        n(140);
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(58), o = n.n(i);
      for (var a in i)
        "default" !== a && function(e2) {
          n.d(t, e2, function() {
            return i[e2];
          });
        }(a);
      var s = n(142), l = n(2), u = r, f = l(o.a, s.a, false, u, null, null);
      f.options.__file = "src/components/Chrome.vue", t.default = f.exports;
    }, function(e, t, n) {
      var r = n(141);
      "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
      n(1)("1cd16048", r, false, {});
    }, function(e, t, n) {
      t = e.exports = n(0)(false), t.push([e.i, "\n.vc-chrome {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3);\n  box-sizing: initial;\n  width: 225px;\n  font-family: Menlo;\n  background-color: #fff;\n}\n.vc-chrome-controls {\n  display: flex;\n}\n.vc-chrome-color-wrap {\n  position: relative;\n  width: 36px;\n}\n.vc-chrome-active-color {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  overflow: hidden;\n  z-index: 1;\n}\n.vc-chrome-color-wrap .vc-checkerboard {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background-size: auto;\n}\n.vc-chrome-sliders {\n  flex: 1;\n}\n.vc-chrome-fields-wrap {\n  display: flex;\n  padding-top: 16px;\n}\n.vc-chrome-fields {\n  display: flex;\n  margin-left: -6px;\n  flex: 1;\n}\n.vc-chrome-field {\n  padding-left: 6px;\n  width: 100%;\n}\n.vc-chrome-toggle-btn {\n  width: 32px;\n  text-align: right;\n  position: relative;\n}\n.vc-chrome-toggle-icon {\n  margin-right: -4px;\n  margin-top: 12px;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n}\n.vc-chrome-toggle-icon-highlight {\n  position: absolute;\n  width: 24px;\n  height: 28px;\n  background: #eee;\n  border-radius: 4px;\n  top: 10px;\n  left: 12px;\n}\n.vc-chrome-hue-wrap {\n  position: relative;\n  height: 10px;\n  margin-bottom: 8px;\n}\n.vc-chrome-alpha-wrap {\n  position: relative;\n  height: 10px;\n}\n.vc-chrome-hue-wrap .vc-hue {\n  border-radius: 2px;\n}\n.vc-chrome-alpha-wrap .vc-alpha-gradient {\n  border-radius: 2px;\n}\n.vc-chrome-hue-wrap .vc-hue-picker, .vc-chrome-alpha-wrap .vc-alpha-picker {\n  width: 12px;\n  height: 12px;\n  border-radius: 6px;\n  transform: translate(-6px, -2px);\n  background-color: rgb(248, 248, 248);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n}\n.vc-chrome-body {\n  padding: 16px 16px 12px;\n  background-color: #fff;\n}\n.vc-chrome-saturation-wrap {\n  width: 100%;\n  padding-bottom: 55%;\n  position: relative;\n  border-radius: 2px 2px 0 0;\n  overflow: hidden;\n}\n.vc-chrome-saturation-wrap .vc-saturation-circle {\n  width: 12px;\n  height: 12px;\n}\n.vc-chrome-fields .vc-input__input {\n  font-size: 11px;\n  color: #333;\n  width: 100%;\n  border-radius: 2px;\n  border: none;\n  box-shadow: inset 0 0 0 1px #dadada;\n  height: 21px;\n  text-align: center;\n}\n.vc-chrome-fields .vc-input__label {\n  text-transform: uppercase;\n  font-size: 11px;\n  line-height: 11px;\n  color: #969696;\n  text-align: center;\n  display: block;\n  margin-top: 12px;\n}\n.vc-chrome__disable-alpha .vc-chrome-active-color {\n  width: 18px;\n  height: 18px;\n}\n.vc-chrome__disable-alpha .vc-chrome-color-wrap {\n  width: 30px;\n}\n.vc-chrome__disable-alpha .vc-chrome-hue-wrap {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n", ""]);
    }, function(e, t, n) {
      var r = function() {
        var e2 = this, t2 = e2.$createElement, n2 = e2._self._c || t2;
        return n2("div", { class: ["vc-chrome", e2.disableAlpha ? "vc-chrome__disable-alpha" : ""], attrs: { role: "application", "aria-label": "Chrome color picker" } }, [n2("div", { staticClass: "vc-chrome-saturation-wrap" }, [n2("saturation", { on: { change: e2.childChange }, model: { value: e2.colors, callback: function(t3) {
          e2.colors = t3;
        }, expression: "colors" } })], 1), e2._v(" "), n2("div", { staticClass: "vc-chrome-body" }, [n2("div", { staticClass: "vc-chrome-controls" }, [n2("div", { staticClass: "vc-chrome-color-wrap" }, [n2("div", { staticClass: "vc-chrome-active-color", style: { background: e2.activeColor }, attrs: { "aria-label": "current color is " + e2.colors.hex } }), e2._v(" "), e2.disableAlpha ? e2._e() : n2("checkboard")], 1), e2._v(" "), n2("div", { staticClass: "vc-chrome-sliders" }, [n2("div", { staticClass: "vc-chrome-hue-wrap" }, [n2("hue", { on: { change: e2.childChange }, model: { value: e2.colors, callback: function(t3) {
          e2.colors = t3;
        }, expression: "colors" } })], 1), e2._v(" "), e2.disableAlpha ? e2._e() : n2("div", { staticClass: "vc-chrome-alpha-wrap" }, [n2("alpha", { on: { change: e2.childChange }, model: { value: e2.colors, callback: function(t3) {
          e2.colors = t3;
        }, expression: "colors" } })], 1)])]), e2._v(" "), e2.disableFields ? e2._e() : n2("div", { staticClass: "vc-chrome-fields-wrap" }, [n2("div", { directives: [{ name: "show", rawName: "v-show", value: 0 === e2.fieldsIndex, expression: "fieldsIndex === 0" }], staticClass: "vc-chrome-fields" }, [n2("div", { staticClass: "vc-chrome-field" }, [e2.hasAlpha ? e2._e() : n2("ed-in", { attrs: { label: "hex", value: e2.colors.hex }, on: { change: e2.inputChange } }), e2._v(" "), e2.hasAlpha ? n2("ed-in", { attrs: { label: "hex", value: e2.colors.hex8 }, on: { change: e2.inputChange } }) : e2._e()], 1)]), e2._v(" "), n2("div", { directives: [{ name: "show", rawName: "v-show", value: 1 === e2.fieldsIndex, expression: "fieldsIndex === 1" }], staticClass: "vc-chrome-fields" }, [n2("div", { staticClass: "vc-chrome-field" }, [n2("ed-in", { attrs: { label: "r", value: e2.colors.rgba.r }, on: { change: e2.inputChange } })], 1), e2._v(" "), n2("div", { staticClass: "vc-chrome-field" }, [n2("ed-in", { attrs: { label: "g", value: e2.colors.rgba.g }, on: { change: e2.inputChange } })], 1), e2._v(" "), n2("div", { staticClass: "vc-chrome-field" }, [n2("ed-in", { attrs: { label: "b", value: e2.colors.rgba.b }, on: { change: e2.inputChange } })], 1), e2._v(" "), e2.disableAlpha ? e2._e() : n2("div", { staticClass: "vc-chrome-field" }, [n2("ed-in", { attrs: { label: "a", value: e2.colors.a, "arrow-offset": 0.01, max: 1 }, on: { change: e2.inputChange } })], 1)]), e2._v(" "), n2("div", { directives: [{ name: "show", rawName: "v-show", value: 2 === e2.fieldsIndex, expression: "fieldsIndex === 2" }], staticClass: "vc-chrome-fields" }, [n2("div", { staticClass: "vc-chrome-field" }, [n2("ed-in", { attrs: { label: "h", value: e2.hsl.h }, on: { change: e2.inputChange } })], 1), e2._v(" "), n2("div", { staticClass: "vc-chrome-field" }, [n2("ed-in", { attrs: { label: "s", value: e2.hsl.s }, on: { change: e2.inputChange } })], 1), e2._v(" "), n2("div", { staticClass: "vc-chrome-field" }, [n2("ed-in", { attrs: { label: "l", value: e2.hsl.l }, on: { change: e2.inputChange } })], 1), e2._v(" "), e2.disableAlpha ? e2._e() : n2("div", { staticClass: "vc-chrome-field" }, [n2("ed-in", { attrs: { label: "a", value: e2.colors.a, "arrow-offset": 0.01, max: 1 }, on: { change: e2.inputChange } })], 1)]), e2._v(" "), n2("div", { staticClass: "vc-chrome-toggle-btn", attrs: { role: "button", "aria-label": "Change another color definition" }, on: { click: e2.toggleViews } }, [n2("div", { staticClass: "vc-chrome-toggle-icon" }, [n2("svg", { staticStyle: { width: "24px", height: "24px" }, attrs: { viewBox: "0 0 24 24" }, on: { mouseover: e2.showHighlight, mouseenter: e2.showHighlight, mouseout: e2.hideHighlight } }, [n2("path", { attrs: { fill: "#333", d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" } })])]), e2._v(" "), n2("div", { directives: [{ name: "show", rawName: "v-show", value: e2.highlight, expression: "highlight" }], staticClass: "vc-chrome-toggle-icon-highlight" })])])])]);
      }, i = [];
      r._withStripped = true;
      var o = { render: r, staticRenderFns: i };
      t.a = o;
    }, function(e, t, n) {
      function r(e2) {
        n(144);
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(59), o = n.n(i);
      for (var a in i)
        "default" !== a && function(e2) {
          n.d(t, e2, function() {
            return i[e2];
          });
        }(a);
      var s = n(146), l = n(2), u = r, f = l(o.a, s.a, false, u, null, null);
      f.options.__file = "src/components/Twitter.vue", t.default = f.exports;
    }, function(e, t, n) {
      var r = n(145);
      "string" == typeof r && (r = [[e.i, r, ""]]), r.locals && (e.exports = r.locals);
      n(1)("669a48a5", r, false, {});
    }, function(e, t, n) {
      t = e.exports = n(0)(false), t.push([e.i, "\n.vc-twitter {\n  background: #fff;\n  border: 0 solid rgba(0,0,0,0.25);\n  box-shadow: 0 1px 4px rgba(0,0,0,0.25);\n  border-radius: 4px;\n  position: relative;\n}\n.vc-twitter-triangle {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0 9px 10px 9px;\n  border-color: transparent transparent #fff transparent;\n  position: absolute;\n}\n.vc-twitter-triangle-shadow {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0 9px 10px 9px;\n  border-color: transparent transparent rgba(0, 0, 0, .1) transparent;\n  position: absolute;\n}\n.vc-twitter-body {\n  padding: 15px 9px 9px 15px;\n}\n.vc-twitter .vc-editable-input {\n  position: relative;\n}\n.vc-twitter .vc-editable-input input {\n  width: 100px;\n  font-size: 14px;\n  color: #666;\n  border: 0px;\n  outline: none;\n  height: 28px;\n  box-shadow: inset 0 0 0 1px #F0F0F0;\n  box-sizing: content-box;\n  border-radius: 0 4px 4px 0;\n  float: left;\n  padding: 1px;\n  padding-left: 8px;\n}\n.vc-twitter .vc-editable-input span {\n  display: none;\n}\n.vc-twitter-hash {\n  background: #F0F0F0;\n  height: 30px;\n  width: 30px;\n  border-radius: 4px 0 0 4px;\n  float: left;\n  color: #98A1A4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vc-twitter-swatch {\n  width: 30px;\n  height: 30px;\n  float: left;\n  border-radius: 4px;\n  margin: 0 6px 6px 0;\n  cursor: pointer;\n  position: relative;\n  outline: none;\n}\n.vc-twitter-clear {\n  clear: both;\n}\n.vc-twitter-hide-triangle .vc-twitter-triangle {\n  display: none;\n}\n.vc-twitter-hide-triangle .vc-twitter-triangle-shadow {\n  display: none;\n}\n.vc-twitter-top-left-triangle .vc-twitter-triangle{\n  top: -10px;\n  left: 12px;\n}\n.vc-twitter-top-left-triangle .vc-twitter-triangle-shadow{\n  top: -11px;\n  left: 12px;\n}\n.vc-twitter-top-right-triangle .vc-twitter-triangle{\n  top: -10px;\n  right: 12px;\n}\n.vc-twitter-top-right-triangle .vc-twitter-triangle-shadow{\n  top: -11px;\n  right: 12px;\n}\n", ""]);
    }, function(e, t, n) {
      var r = function() {
        var e2 = this, t2 = e2.$createElement, n2 = e2._self._c || t2;
        return n2("div", { staticClass: "vc-twitter", class: { "vc-twitter-hide-triangle ": "hide" === e2.triangle, "vc-twitter-top-left-triangle ": "top-left" === e2.triangle, "vc-twitter-top-right-triangle ": "top-right" === e2.triangle }, style: { width: "number" == typeof e2.width ? e2.width + "px" : e2.width } }, [n2("div", { staticClass: "vc-twitter-triangle-shadow" }), e2._v(" "), n2("div", { staticClass: "vc-twitter-triangle" }), e2._v(" "), n2("div", { staticClass: "vc-twitter-body" }, [e2._l(e2.defaultColors, function(t3, r2) {
          return n2("span", { key: r2, staticClass: "vc-twitter-swatch", style: { background: t3, boxShadow: "0 0 4px " + (e2.equal(t3) ? t3 : "transparent") }, on: { click: function(n3) {
            return e2.handlerClick(t3);
          } } });
        }), e2._v(" "), n2("div", { staticClass: "vc-twitter-hash" }, [e2._v("#")]), e2._v(" "), n2("editable-input", { attrs: { label: "#", value: e2.hex }, on: { change: e2.inputChange } }), e2._v(" "), n2("div", { staticClass: "vc-twitter-clear" })], 2)]);
      }, i = [];
      r._withStripped = true;
      var o = { render: r, staticRenderFns: i };
      t.a = o;
    }]);
  });
})(vueColor_min);
var vueColor_minExports = vueColor_min.exports;
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
let ColorPicker$1 = class ColorPicker extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "$refs");
    __publicField(this, "value");
    __publicField(this, "placeholder");
    __publicField(this, "hasAlpha");
    __publicField(this, "isMini");
    __publicField(this, "icon");
    __publicField(this, "error");
    __publicField(this, "displayPicker", false);
    __publicField(this, "backgroundColor", "");
    __publicField(this, "colors", {});
  }
  get alphaClass() {
    return this.hasAlpha ? this.colors["a"] === 1 ? "nonAlpha" : "alpha" : false;
  }
  created() {
    this.colors = Object.assign({}, this.colors, {
      hex: this.value
    });
  }
  updateFromPicker(value) {
    this.colors = value;
    if (this.alphaClass === "alpha") {
      this.$emit("input", value.hex8);
    } else {
      this.$emit("input", value.hex);
    }
  }
  updateFromInput(event) {
    this.colors = event.target.value;
    this.$emit("input", event.target.value);
  }
  hidePicker() {
    document.removeEventListener("click", this.documentClick);
    this.displayPicker = false;
  }
  showPicker() {
    document.addEventListener("click", this.documentClick);
    this.displayPicker = true;
  }
  documentClick(e) {
    let el = this.$refs.colorpicker;
    let target = e.target;
    if (el && el !== target && !el.contains(target)) {
      this.hidePicker();
    }
  }
};
__decorateClass$1([
  Prop()
], ColorPicker$1.prototype, "value", 2);
__decorateClass$1([
  Prop({ default: "#31c3a2" })
], ColorPicker$1.prototype, "placeholder", 2);
__decorateClass$1([
  Prop({ default: false })
], ColorPicker$1.prototype, "hasAlpha", 2);
__decorateClass$1([
  Prop({ default: false })
], ColorPicker$1.prototype, "isMini", 2);
__decorateClass$1([
  Prop()
], ColorPicker$1.prototype, "icon", 2);
__decorateClass$1([
  Prop()
], ColorPicker$1.prototype, "error", 2);
ColorPicker$1 = __decorateClass$1([
  Component({
    inheritAttrs: false,
    components: {
      picker: vueColor_minExports.Chrome
    }
  })
], ColorPicker$1);
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    ref: "colorpicker",
    staticClass: "s-colorpicker-container",
    class: {
      "s-colorpicker-container__mini": _vm.isMini,
      "s-colorpicker-container__mini-icon": _vm.isMini && _vm.icon
    }
  }, [!_vm.isMini ? _c("input", {
    class: {
      "s-colorpicker__input--error": _vm.error
    },
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "click": function($event) {
        return _vm.showPicker();
      },
      "input": _vm.updateFromInput
    }
  }) : _vm._e(), _vm.isMini ? _c("div", {
    staticClass: "s-colorpicker__mini-wrapper",
    class: {
      "s-colorpicker__input--error": _vm.error
    },
    on: {
      "click": function($event) {
        return _vm.showPicker();
      }
    }
  }, [_c("i", {
    class: _vm.icon
  })]) : _vm._e(), _vm.error ? _c("div", {
    staticClass: "s-colorpicker__input-error"
  }, [_c("i", {
    staticClass: "icon-error"
  }), _vm._v(" " + _vm._s(_vm.error) + " ")]) : _vm._e(), _c("div", {
    staticClass: "s-colorpicker__preview",
    style: {
      backgroundColor: _vm.value
    },
    on: {
      "click": function($event) {
        return _vm.showPicker();
      }
    }
  }), _c("div", {
    staticClass: "s-colorpicker__preview--alpha"
  }), _c("transition", {
    attrs: {
      "name": "fade"
    }
  }, [_vm.displayPicker ? _c("div", {
    staticClass: "s-colorpicker__picker-wrapper"
  }, [_c("picker", {
    ref: "chrome-color-picker",
    staticClass: "s-colorpicker",
    class: _vm.alphaClass,
    attrs: {
      "value": _vm.colors,
      "disable-alpha": !_vm.hasAlpha,
      "disable-fields": !_vm.hasAlpha
    },
    on: {
      "input": _vm.updateFromPicker
    }
  }), _vm.isMini ? _c("input", _vm._g({
    staticClass: "s-colorpicker__input--mini",
    class: {
      "s-colorpicker__input--error": _vm.error
    },
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": _vm.updateFromInput
    }
  }, _vm.listeners)) : _vm._e()], 1) : _vm._e()])], 1);
};
var staticRenderFns$1 = [];
const ColorPicker_vue_vue_type_style_index_0_lang = "";
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  ColorPicker$1,
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
const ColorPicker2 = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
const ColorPickersCode = '<template>\n  <div>\n    <div class="section">\n      <h1>Color Picker</h1>\n      <p>This color picker uses a chrome style picker</p>\n\n      <pre><code>import { ColorPicker } from "streamlabs-beaker"\n\ncomponents: {\n  ColorPicker\n}</code></pre>\n    </div>\n\n    <div class="section">\n      <h2>Default Color Picker</h2>\n\n      <div class="section">\n        <DemoSection title="Default" :code="demoCode">\n          <template #components>\n            <ColorPicker v-model="color" />\n          </template>\n        </DemoSection>\n      </div>\n\n      <div class="section">\n        <h3>With Alpha</h3>\n        <DemoSection title="Alpha" :code="demoCode">\n          <template #components>\n            <ColorPicker v-model="alphaColor" :hasAlpha="true" />\n          </template>\n        </DemoSection>\n      </div>\n\n      <div class="section">\n        <h3>Mini, with hex code selector</h3>\n        <DemoSection title="Mini" :code="demoCode">\n          <template #components>\n            <ColorPicker :isMini="true" v-model="miniColor" />\n          </template>\n        </DemoSection>\n      </div>\n\n      <div class="section">\n        <h3>Mini, with icon (optional)</h3>\n        <DemoSection title="MiniIcon" :code="demoCode">\n          <template #components>\n            <ColorPicker\n              icon="icon-text"\n              :isMini="true"\n              v-model="miniIconColor"\n            />\n          </template>\n        </DemoSection>\n      </div>\n\n      <table class="docs-table">\n        <thead>\n          <tr>\n            <th>Props</th>\n            <th>Type</th>\n            <th>Default</th>\n            <th>Description</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td>value</td>\n            <td>String</td>\n            <td>#31c3a2</td>\n            <td>Color to show up on a fresh color picker</td>\n          </tr>\n          <tr>\n            <td>placeholder</td>\n            <td>String</td>\n            <td>null</td>\n            <td>It shows as a placeholder in case of blank</td>\n          </tr>\n          <tr>\n            <td>hasAlpha</td>\n            <td>Boolean</td>\n            <td>false</td>\n            <td>Option to add alpha setting for the color picker</td>\n          </tr>\n          <tr>\n            <td>input events</td>\n            <td>event</td>\n            <td>-</td>\n            <td>\n              Use any standard input field event and it will be tracked to the\n              input field\n            </td>\n          </tr>\n          <tr>\n            <td>isMini</td>\n            <td>Boolean</td>\n            <td>false</td>\n            <td>\n              Mini colorpicker, as just a square. Includes hex code in color\n              picker dropdown.\n            </td>\n          </tr>\n          <tr>\n            <td>icon</td>\n            <td>String</td>\n            <td>null</td>\n            <td>\n              Icon to use with mini colorpicker.\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</template>\n\n<script lang="ts">\nimport { Component, Vue } from "vue-property-decorator";\n\nimport ColorPicker from "./../components/ColorPicker.vue";\nimport ColorPickersCode from "./ColorPickers.vue?raw";\nimport DemoSection from "./../components/DemoSection.vue";\n\n@Component({\n  components: {\n    ColorPicker,\n    DemoSection\n  }\n})\nexport default class ColorPickers extends Vue {\n  demoCode = ColorPickersCode;\n  color = "#5E3BEC";\n  alphaColor = "#EB7777";\n  miniColor = "#5E3BEC";\n  miniIconColor = "#5E3BEC";\n}\n<\/script>\n';
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
let ColorPickers$1 = class ColorPickers extends Vue {
  constructor() {
    super(...arguments);
    __publicField(this, "demoCode", ColorPickersCode);
    __publicField(this, "color", "#5E3BEC");
    __publicField(this, "alphaColor", "#EB7777");
    __publicField(this, "miniColor", "#5E3BEC");
    __publicField(this, "miniIconColor", "#5E3BEC");
  }
};
ColorPickers$1 = __decorateClass([
  Component({
    components: {
      ColorPicker: ColorPicker2,
      DemoSection
    }
  })
], ColorPickers$1);
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_vm._m(0), _c("div", {
    staticClass: "section"
  }, [_c("h2", [_vm._v("Default Color Picker")]), _c("div", {
    staticClass: "section"
  }, [_c("DemoSection", {
    attrs: {
      "title": "Default",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("ColorPicker", {
          model: {
            value: _vm.color,
            callback: function($$v) {
              _vm.color = $$v;
            },
            expression: "color"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("With Alpha")]), _c("DemoSection", {
    attrs: {
      "title": "Alpha",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("ColorPicker", {
          attrs: {
            "hasAlpha": true
          },
          model: {
            value: _vm.alphaColor,
            callback: function($$v) {
              _vm.alphaColor = $$v;
            },
            expression: "alphaColor"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Mini, with hex code selector")]), _c("DemoSection", {
    attrs: {
      "title": "Mini",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("ColorPicker", {
          attrs: {
            "isMini": true
          },
          model: {
            value: _vm.miniColor,
            callback: function($$v) {
              _vm.miniColor = $$v;
            },
            expression: "miniColor"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _c("div", {
    staticClass: "section"
  }, [_c("h3", [_vm._v("Mini, with icon (optional)")]), _c("DemoSection", {
    attrs: {
      "title": "MiniIcon",
      "code": _vm.demoCode
    },
    scopedSlots: _vm._u([{
      key: "components",
      fn: function() {
        return [_c("ColorPicker", {
          attrs: {
            "icon": "icon-text",
            "isMini": true
          },
          model: {
            value: _vm.miniIconColor,
            callback: function($$v) {
              _vm.miniIconColor = $$v;
            },
            expression: "miniIconColor"
          }
        })];
      },
      proxy: true
    }])
  })], 1), _vm._m(1)])]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "section"
  }, [_c("h1", [_vm._v("Color Picker")]), _c("p", [_vm._v("This color picker uses a chrome style picker")]), _c("pre", [_c("code", [_vm._v('import { ColorPicker } from "streamlabs-beaker"\n\ncomponents: {\n  ColorPicker\n}')])])]);
}, function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("table", {
    staticClass: "docs-table"
  }, [_c("thead", [_c("tr", [_c("th", [_vm._v("Props")]), _c("th", [_vm._v("Type")]), _c("th", [_vm._v("Default")]), _c("th", [_vm._v("Description")])])]), _c("tbody", [_c("tr", [_c("td", [_vm._v("value")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("#31c3a2")]), _c("td", [_vm._v("Color to show up on a fresh color picker")])]), _c("tr", [_c("td", [_vm._v("placeholder")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v("It shows as a placeholder in case of blank")])]), _c("tr", [_c("td", [_vm._v("hasAlpha")]), _c("td", [_vm._v("Boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v("Option to add alpha setting for the color picker")])]), _c("tr", [_c("td", [_vm._v("input events")]), _c("td", [_vm._v("event")]), _c("td", [_vm._v("-")]), _c("td", [_vm._v(" Use any standard input field event and it will be tracked to the input field ")])]), _c("tr", [_c("td", [_vm._v("isMini")]), _c("td", [_vm._v("Boolean")]), _c("td", [_vm._v("false")]), _c("td", [_vm._v(" Mini colorpicker, as just a square. Includes hex code in color picker dropdown. ")])]), _c("tr", [_c("td", [_vm._v("icon")]), _c("td", [_vm._v("String")]), _c("td", [_vm._v("null")]), _c("td", [_vm._v(" Icon to use with mini colorpicker. ")])])])]);
}];
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  ColorPickers$1,
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
const ColorPickers2 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  ColorPickers2 as default
};
//# sourceMappingURL=ColorPickers-49868079.js.map
