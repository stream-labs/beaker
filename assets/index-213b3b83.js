import { g as getDefaultExportFromCjs } from "./index-158ccef1.js";
var dist = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(window, function() {
    return i = {}, o.m = n = [function(e, t, n2) {
      var i2 = n2(6);
      "string" == typeof i2 && (i2 = [[e.i, i2, ""]]), i2.locals && (e.exports = i2.locals);
      (0, n2(4).default)("27d83796", i2, false, {});
    }, function(e, t, n2) {
      var i2 = n2(8);
      "string" == typeof i2 && (i2 = [[e.i, i2, ""]]), i2.locals && (e.exports = i2.locals);
      (0, n2(4).default)("0e783494", i2, false, {});
    }, function(e, t, n2) {
      var i2 = n2(10);
      "string" == typeof i2 && (i2 = [[e.i, i2, ""]]), i2.locals && (e.exports = i2.locals);
      (0, n2(4).default)("17757f60", i2, false, {});
    }, function(e, t) {
      e.exports = function(n2) {
        var a = [];
        return a.toString = function() {
          return this.map(function(e2) {
            var t2 = function(e3, t3) {
              var n3 = e3[1] || "", i2 = e3[3];
              if (!i2)
                return n3;
              if (t3 && "function" == typeof btoa) {
                var o2 = function(e4) {
                  return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e4)))) + " */";
                }(i2), r = i2.sources.map(function(e4) {
                  return "/*# sourceURL=" + i2.sourceRoot + e4 + " */";
                });
                return [n3].concat(r).concat([o2]).join("\n");
              }
              return [n3].join("\n");
            }(e2, n2);
            return e2[2] ? "@media " + e2[2] + "{" + t2 + "}" : t2;
          }).join("");
        }, a.i = function(e2, t2) {
          "string" == typeof e2 && (e2 = [[null, e2, ""]]);
          for (var n3 = {}, i2 = 0; i2 < this.length; i2++) {
            var o2 = this[i2][0];
            "number" == typeof o2 && (n3[o2] = true);
          }
          for (i2 = 0; i2 < e2.length; i2++) {
            var r = e2[i2];
            "number" == typeof r[0] && n3[r[0]] || (t2 && !r[2] ? r[2] = t2 : t2 && (r[2] = "(" + r[2] + ") and (" + t2 + ")"), a.push(r));
          }
        }, a;
      };
    }, function(e, t, n2) {
      function l(e2, t2) {
        for (var n3 = [], i3 = {}, o3 = 0; o3 < t2.length; o3++) {
          var r2 = t2[o3], a2 = r2[0], s2 = { id: e2 + ":" + o3, css: r2[1], media: r2[2], sourceMap: r2[3] };
          i3[a2] ? i3[a2].parts.push(s2) : n3.push(i3[a2] = { id: a2, parts: [s2] });
        }
        return n3;
      }
      n2.r(t), n2.d(t, "default", function() {
        return p;
      });
      var i2 = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !i2)
        throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
      var u = {}, o2 = i2 && (document.head || document.getElementsByTagName("head")[0]), r = null, a = 0, d = false, s = function() {
      }, c = null, h = "data-vue-ssr-id", f = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function p(a2, e2, t2, n3) {
        d = t2, c = n3 || {};
        var s2 = l(a2, e2);
        return m(s2), function(e3) {
          for (var t3 = [], n4 = 0; n4 < s2.length; n4++) {
            var i3 = s2[n4];
            (o3 = u[i3.id]).refs--, t3.push(o3);
          }
          e3 ? m(s2 = l(a2, e3)) : s2 = [];
          for (n4 = 0; n4 < t3.length; n4++) {
            var o3;
            if (0 === (o3 = t3[n4]).refs) {
              for (var r2 = 0; r2 < o3.parts.length; r2++)
                o3.parts[r2]();
              delete u[o3.id];
            }
          }
        };
      }
      function m(e2) {
        for (var t2 = 0; t2 < e2.length; t2++) {
          var n3 = e2[t2], i3 = u[n3.id];
          if (i3) {
            i3.refs++;
            for (var o3 = 0; o3 < i3.parts.length; o3++)
              i3.parts[o3](n3.parts[o3]);
            for (; o3 < n3.parts.length; o3++)
              i3.parts.push(g(n3.parts[o3]));
            i3.parts.length > n3.parts.length && (i3.parts.length = n3.parts.length);
          } else {
            var r2 = [];
            for (o3 = 0; o3 < n3.parts.length; o3++)
              r2.push(g(n3.parts[o3]));
            u[n3.id] = { id: n3.id, refs: 1, parts: r2 };
          }
        }
      }
      function v() {
        var e2 = document.createElement("style");
        return e2.type = "text/css", o2.appendChild(e2), e2;
      }
      function g(t2) {
        var n3, i3, e2 = document.querySelector("style[" + h + '~="' + t2.id + '"]');
        if (e2) {
          if (d)
            return s;
          e2.parentNode.removeChild(e2);
        }
        if (f) {
          var o3 = a++;
          e2 = r = r || v(), n3 = w.bind(null, e2, o3, false), i3 = w.bind(null, e2, o3, true);
        } else
          e2 = v(), n3 = (function(e3, t3) {
            var n4 = t3.css, i4 = t3.media, o4 = t3.sourceMap;
            i4 && e3.setAttribute("media", i4);
            c.ssrId && e3.setAttribute(h, t3.id);
            o4 && (n4 += "\n/*# sourceURL=" + o4.sources[0] + " */", n4 += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o4)))) + " */");
            if (e3.styleSheet)
              e3.styleSheet.cssText = n4;
            else {
              for (; e3.firstChild; )
                e3.removeChild(e3.firstChild);
              e3.appendChild(document.createTextNode(n4));
            }
          }).bind(null, e2), i3 = function() {
            e2.parentNode.removeChild(e2);
          };
        return n3(t2), function(e3) {
          if (e3) {
            if (e3.css === t2.css && e3.media === t2.media && e3.sourceMap === t2.sourceMap)
              return;
            n3(t2 = e3);
          } else
            i3();
        };
      }
      var b, y = (b = [], function(e2, t2) {
        return b[e2] = t2, b.filter(Boolean).join("\n");
      });
      function w(e2, t2, n3, i3) {
        var o3 = n3 ? "" : i3.css;
        if (e2.styleSheet)
          e2.styleSheet.cssText = y(t2, o3);
        else {
          var r2 = document.createTextNode(o3), a2 = e2.childNodes;
          a2[t2] && e2.removeChild(a2[t2]), a2.length ? e2.insertBefore(r2, a2[t2]) : e2.appendChild(r2);
        }
      }
    }, function(e, t, n2) {
      var i2 = n2(0);
      n2.n(i2).a;
    }, function(e, t, n2) {
      (e.exports = n2(3)(false)).push([e.i, "\n.vue-modal-resizer {\n  display: block;\n  overflow: hidden;\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  right: 0;\n  bottom: 0;\n  z-index: 9999999;\n  background: transparent;\n  cursor: se-resize;\n}\n.vue-modal-resizer::after {\n  display: block;\n  position: absolute;\n  content: '';\n  background: transparent;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-bottom: 10px solid #ddd;\n  border-left: 10px solid transparent;\n}\n.vue-modal-resizer.clicked::after {\n  border-bottom: 10px solid #369be9;\n}\n", ""]);
    }, function(e, t, n2) {
      var i2 = n2(1);
      n2.n(i2).a;
    }, function(e, t, n2) {
      (e.exports = n2(3)(false)).push([e.i, "\n.v--modal-block-scroll {\n  overflow: hidden;\n  width: 100vw;\n}\n.v--modal-overlay {\n  position: fixed;\n  box-sizing: border-box;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.2);\n  z-index: 999;\n  opacity: 1;\n}\n.v--modal-overlay.scrollable {\n  height: 100%;\n  min-height: 100vh;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.v--modal-overlay .v--modal-background-click {\n  width: 100%;\n  min-height: 100%;\n  height: auto;\n}\n.v--modal-overlay .v--modal-box {\n  position: relative;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.v--modal-overlay.scrollable .v--modal-box {\n  margin-bottom: 2px;\n}\n.v--modal {\n  background-color: white;\n  text-align: left;\n  border-radius: 3px;\n  box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);\n  padding: 0;\n}\n.v--modal.v--modal-fullscreen {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  left: 0;\n  top: 0;\n}\n.v--modal-top-right {\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.overlay-fade-enter-active,\n.overlay-fade-leave-active {\n  transition: all 0.2s;\n}\n.overlay-fade-enter,\n.overlay-fade-leave-active {\n  opacity: 0;\n}\n.nice-modal-fade-enter-active,\n.nice-modal-fade-leave-active {\n  transition: all 0.4s;\n}\n.nice-modal-fade-enter,\n.nice-modal-fade-leave-active {\n  opacity: 0;\n  transform: translateY(-20px);\n}\n", ""]);
    }, function(e, t, n2) {
      var i2 = n2(2);
      n2.n(i2).a;
    }, function(e, t, n2) {
      (e.exports = n2(3)(false)).push([e.i, "\n.vue-dialog div {\n  box-sizing: border-box;\n}\n.vue-dialog .dialog-flex {\n  width: 100%;\n  height: 100%;\n}\n.vue-dialog .dialog-content {\n  flex: 1 0 auto;\n  width: 100%;\n  padding: 15px;\n  font-size: 14px;\n}\n.vue-dialog .dialog-c-title {\n  font-weight: 600;\n  padding-bottom: 15px;\n}\n.vue-dialog .dialog-c-text {\n}\n.vue-dialog .vue-dialog-buttons {\n  display: flex;\n  flex: 0 1 auto;\n  width: 100%;\n  border-top: 1px solid #eee;\n}\n.vue-dialog .vue-dialog-buttons-none {\n  width: 100%;\n  padding-bottom: 15px;\n}\n.vue-dialog-button {\n  font-size: 12px !important;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  cursor: pointer;\n  box-sizing: border-box;\n  line-height: 40px;\n  height: 40px;\n  color: inherit;\n  font: inherit;\n  outline: none;\n}\n.vue-dialog-button:hover {\n  background: rgba(0, 0, 0, 0.01);\n}\n.vue-dialog-button:active {\n  background: rgba(0, 0, 0, 0.025);\n}\n.vue-dialog-button:not(:first-of-type) {\n  border-left: 1px solid #eee;\n}\n", ""]);
    }, function(e, t, n2) {
      n2.r(t), n2.d(t, "getModalsContainer", function() {
        return N;
      });
      function i2() {
        var t2 = this, e2 = t2.$createElement, n3 = t2._self._c || e2;
        return n3("transition", { attrs: { name: t2.overlayTransition } }, [t2.visibility.overlay ? n3("div", { ref: "overlay", class: t2.overlayClass, attrs: { "aria-expanded": t2.visibility.overlay.toString(), "data-modal": t2.name } }, [n3("div", { staticClass: "v--modal-background-click", on: { mousedown: function(e3) {
          return e3.target !== e3.currentTarget ? null : t2.handleBackgroundClick(e3);
        }, touchstart: function(e3) {
          return e3.target !== e3.currentTarget ? null : t2.handleBackgroundClick(e3);
        } } }, [n3("div", { staticClass: "v--modal-top-right" }, [t2._t("top-right")], 2), t2._v(" "), n3("transition", { attrs: { name: t2.transition }, on: { "before-enter": t2.beforeTransitionEnter, "after-enter": t2.afterTransitionEnter, "after-leave": t2.afterTransitionLeave } }, [t2.visibility.modal ? n3("div", { ref: "modal", class: t2.modalClass, style: t2.modalStyle, attrs: { role: "dialog", "aria-modal": "true" } }, [t2._t("default"), t2._v(" "), t2.resizable && !t2.isAutoHeight ? n3("resizer", { attrs: { "min-width": t2.minWidth, "min-height": t2.minHeight, "max-width": t2.maxWidth, "max-height": t2.maxHeight }, on: { resize: t2.handleModalResize } }) : t2._e()], 2) : t2._e()])], 1)]) : t2._e()]);
      }
      function o2() {
        var e2 = this.$createElement;
        return (this._self._c || e2)("div", { class: this.className });
      }
      function r(e2, t2) {
        return function(e3) {
          if (Array.isArray(e3))
            return e3;
        }(e2) || function(e3, t3) {
          var n3 = [], i3 = true, o3 = false, r2 = void 0;
          try {
            for (var a2, s2 = e3[Symbol.iterator](); !(i3 = (a2 = s2.next()).done) && (n3.push(a2.value), !t3 || n3.length !== t3); i3 = true)
              ;
          } catch (e4) {
            o3 = true, r2 = e4;
          } finally {
            try {
              i3 || null == s2.return || s2.return();
            } finally {
              if (o3)
                throw r2;
            }
          }
          return n3;
        }(e2, t2) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
      }
      function a(t2) {
        for (var e2 = 1; e2 < arguments.length; e2++) {
          var n3 = null != arguments[e2] ? arguments[e2] : {}, i3 = Object.keys(n3);
          "function" == typeof Object.getOwnPropertySymbols && (i3 = i3.concat(Object.getOwnPropertySymbols(n3).filter(function(e3) {
            return Object.getOwnPropertyDescriptor(n3, e3).enumerable;
          }))), i3.forEach(function(e3) {
            s(t2, e3, n3[e3]);
          });
        }
        return t2;
      }
      function s(e2, t2, n3) {
        return t2 in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
      }
      o2._withStripped = i2._withStripped = true;
      function c(e2, t2, n3) {
        return n3 < e2 ? e2 : t2 < n3 ? t2 : n3;
      }
      function l() {
        var e2 = window.innerWidth, t2 = document.documentElement.clientWidth;
        return e2 && t2 ? Math.min(e2, t2) : t2 || e2;
      }
      var d = function(e2) {
        var t2 = 0 < arguments.length && void 0 !== e2 ? e2 : 0;
        return function() {
          return (t2++).toString();
        };
      }(), u = { name: "VueJsModalResizer", props: { minHeight: { type: Number, default: 0 }, minWidth: { type: Number, default: 0 }, maxWidth: { type: Number, default: Number.MAX_SAFE_INTEGER }, maxHeight: { type: Number, default: Number.MAX_SAFE_INTEGER } }, data: function() {
        return { clicked: false, size: {} };
      }, mounted: function() {
        this.$el.addEventListener("mousedown", this.start, false);
      }, computed: { className: function() {
        return { "vue-modal-resizer": true, clicked: this.clicked };
      } }, methods: { start: function(e2) {
        this.clicked = true, window.addEventListener("mousemove", this.mousemove, false), window.addEventListener("mouseup", this.stop, false), e2.stopPropagation(), e2.preventDefault();
      }, stop: function() {
        this.clicked = false, window.removeEventListener("mousemove", this.mousemove, false), window.removeEventListener("mouseup", this.stop, false), this.$emit("resize-stop", { element: this.$el.parentElement, size: this.size });
      }, mousemove: function(e2) {
        this.resize(e2);
      }, resize: function(e2) {
        var t2 = this.$el.parentElement;
        if (t2) {
          var n3 = e2.clientX - t2.offsetLeft, i3 = e2.clientY - t2.offsetTop, o3 = Math.min(l(), this.maxWidth), r2 = Math.min(window.innerHeight, this.maxHeight);
          n3 = c(this.minWidth, o3, n3), i3 = c(this.minHeight, r2, i3), this.size = { width: n3, height: i3 }, t2.style.width = n3 + "px", t2.style.height = i3 + "px", this.$emit("resize", { element: t2, size: this.size });
        }
      } } };
      n2(5);
      function h(e2, t2, n3, i3, o3, r2, a2, s2) {
        var l2, u2 = "function" == typeof e2 ? e2.options : e2;
        if (t2 && (u2.render = t2, u2.staticRenderFns = n3, u2._compiled = true), i3 && (u2.functional = true), r2 && (u2._scopeId = "data-v-" + r2), a2 ? (l2 = function(e3) {
          (e3 = e3 || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e3 = __VUE_SSR_CONTEXT__), o3 && o3.call(this, e3), e3 && e3._registeredComponents && e3._registeredComponents.add(a2);
        }, u2._ssrRegister = l2) : o3 && (l2 = s2 ? function() {
          o3.call(this, this.$root.$options.shadowRoot);
        } : o3), l2)
          if (u2.functional) {
            u2._injectStyles = l2;
            var d2 = u2.render;
            u2.render = function(e3, t3) {
              return l2.call(t3), d2(e3, t3);
            };
          } else {
            var c2 = u2.beforeCreate;
            u2.beforeCreate = c2 ? [].concat(c2, l2) : [l2];
          }
        return { exports: e2, options: u2 };
      }
      var f = h(u, o2, [], false, null, null, null);
      f.options.__file = "src/Resizer.vue";
      var p = f.exports;
      function m(e2) {
        return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        })(e2);
      }
      function v(e2) {
        switch (m(e2)) {
          case "number":
            return { type: "px", value: e2 };
          case "string":
            return function(t2) {
              if ("auto" === t2)
                return { type: t2, value: 0 };
              var e3 = y.find(function(e4) {
                return e4.regexp.test(t2);
              });
              return e3 ? { type: e3.name, value: parseFloat(t2) } : { type: "", value: t2 };
            }(e2);
          default:
            return { type: "", value: e2 };
        }
      }
      function g(e2) {
        if ("string" != typeof e2)
          return 0 <= e2;
        var t2 = v(e2);
        return ("%" === t2.type || "px" === t2.type) && 0 < t2.value;
      }
      var b = "[-+]?[0-9]*.?[0-9]+", y = [{ name: "px", regexp: new RegExp("^".concat(b, "px$")) }, { name: "%", regexp: new RegExp("^".concat(b, "%$")) }, { name: "px", regexp: new RegExp("^".concat(b, "$")) }];
      function w(e2, t2, n3) {
        return t2 in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
      }
      var x = { name: "VueJsModal", props: { name: { required: true, type: String }, delay: { type: Number, default: 0 }, resizable: { type: Boolean, default: false }, adaptive: { type: Boolean, default: false }, draggable: { type: [Boolean, String], default: false }, scrollable: { type: Boolean, default: false }, reset: { type: Boolean, default: false }, overlayTransition: { type: String, default: "overlay-fade" }, transition: { type: String }, clickToClose: { type: Boolean, default: true }, classes: { type: [String, Array], default: "v--modal" }, styles: { type: [String, Array, Object] }, minWidth: { type: Number, default: 0, validator: function(e2) {
        return 0 <= e2;
      } }, minHeight: { type: Number, default: 0, validator: function(e2) {
        return 0 <= e2;
      } }, maxWidth: { type: Number, default: Number.MAX_SAFE_INTEGER }, maxHeight: { type: Number, default: Number.MAX_SAFE_INTEGER }, width: { type: [Number, String], default: 600, validator: g }, height: { type: [Number, String], default: 300, validator: function(e2) {
        return "auto" === e2 || g(e2);
      } }, pivotX: { type: Number, default: 0.5, validator: function(e2) {
        return 0 <= e2 && e2 <= 1;
      } }, pivotY: { type: Number, default: 0.5, validator: function(e2) {
        return 0 <= e2 && e2 <= 1;
      } } }, components: { Resizer: p }, data: function() {
        return { visible: false, visibility: { modal: false, overlay: false }, shift: { left: 0, top: 0 }, modal: { width: 0, widthType: "px", height: 0, heightType: "px", renderedHeight: 0 }, viewportHeight: 0, viewportWidth: 0, mutationObserver: null };
      }, created: function() {
        this.setInitialSize();
      }, beforeMount: function() {
        var t2 = this;
        if (A.event.$on("toggle", this.handleToggleEvent), window.addEventListener("resize", this.handleWindowResize), this.handleWindowResize(), this.scrollable && !this.isAutoHeight && console.warn('Modal "'.concat(this.name, '" has scrollable flag set to true ') + 'but height is not "auto" ('.concat(this.height, ")")), this.isAutoHeight) {
          var e2 = function() {
            if ("undefined" != typeof window)
              for (var e3 = ["", "WebKit", "Moz", "O", "Ms"], t3 = 0; t3 < e3.length; t3++) {
                var n3 = e3[t3] + "MutationObserver";
                if (n3 in window)
                  return window[n3];
              }
            return false;
          }();
          e2 ? this.mutationObserver = new e2(function(e3) {
            t2.updateRenderedHeight();
          }) : console.warn("MutationObserver was not found. Vue-js-modal automatic resizing relies heavily on MutationObserver. Please make sure to provide shim for it.");
        }
        this.clickToClose && window.addEventListener("keyup", this.handleEscapeKeyUp);
      }, beforeDestroy: function() {
        A.event.$off("toggle", this.handleToggleEvent), window.removeEventListener("resize", this.handleWindowResize), this.clickToClose && window.removeEventListener("keyup", this.handleEscapeKeyUp), this.scrollable && document.body.classList.remove("v--modal-block-scroll");
      }, computed: { isAutoHeight: function() {
        return "auto" === this.modal.heightType;
      }, position: function() {
        var e2 = this.viewportHeight, t2 = this.viewportWidth, n3 = this.shift, i3 = this.pivotX, o3 = this.pivotY, r2 = this.trueModalWidth, a2 = this.trueModalHeight, s2 = t2 - r2, l2 = Math.max(e2 - a2, 0), u2 = n3.left + i3 * s2, d2 = n3.top + o3 * l2;
        return { left: parseInt(c(0, s2, u2)), top: parseInt(c(0, l2, d2)) };
      }, trueModalWidth: function() {
        var e2 = this.viewportWidth, t2 = this.modal, n3 = this.adaptive, i3 = this.minWidth, o3 = this.maxWidth, r2 = "%" === t2.widthType ? e2 / 100 * t2.width : t2.width, a2 = Math.max(i3, Math.min(e2, o3));
        return n3 ? c(i3, a2, r2) : r2;
      }, trueModalHeight: function() {
        var e2 = this.viewportHeight, t2 = this.modal, n3 = this.isAutoHeight, i3 = this.adaptive, o3 = this.minHeight, r2 = this.maxHeight, a2 = "%" === t2.heightType ? e2 / 100 * t2.height : t2.height;
        if (n3)
          return this.modal.renderedHeight;
        var s2 = Math.max(o3, Math.min(e2, r2));
        return i3 ? c(o3, s2, a2) : a2;
      }, overlayClass: function() {
        return { "v--modal-overlay": true, scrollable: this.scrollable && this.isAutoHeight };
      }, modalClass: function() {
        return ["v--modal-box", this.classes];
      }, stylesProp: function() {
        return "string" == typeof this.styles ? this.styles.split(";").map(function(e2) {
          return e2.trim();
        }).filter(Boolean).map(function(e2) {
          return e2.split(":");
        }).reduce(function(e2, t2) {
          var n3 = r(t2, 2);
          return a({}, e2, s({}, n3[0], n3[1]));
        }, {}) : this.styles;
      }, modalStyle: function() {
        return [this.stylesProp, { top: this.position.top + "px", left: this.position.left + "px", width: this.trueModalWidth + "px", height: this.isAutoHeight ? "auto" : this.trueModalHeight + "px" }];
      } }, watch: { visible: function(e2) {
        var t2 = this;
        e2 ? (this.visibility.overlay = true, setTimeout(function() {
          t2.visibility.modal = true, t2.$nextTick(function() {
            t2.addDraggableListeners(), t2.callAfterEvent(true);
          });
        }, this.delay)) : (this.visibility.modal = false, setTimeout(function() {
          t2.visibility.overlay = false, t2.$nextTick(function() {
            t2.removeDraggableListeners(), t2.callAfterEvent(false);
          });
        }, this.delay));
      } }, methods: { handleToggleEvent: function(e2, t2, n3) {
        if (this.name === e2) {
          var i3 = void 0 === t2 ? !this.visible : t2;
          this.toggle(i3, n3);
        }
      }, setInitialSize: function() {
        var e2 = this.modal, t2 = v(this.width), n3 = v(this.height);
        e2.width = t2.value, e2.widthType = t2.type, e2.height = n3.value, e2.heightType = n3.type;
      }, handleEscapeKeyUp: function(e2) {
        27 === e2.which && this.visible && this.$modal.hide(this.name);
      }, handleWindowResize: function() {
        this.viewportWidth = l(), this.viewportHeight = window.innerHeight, this.ensureShiftInWindowBounds();
      }, createModalEvent: function(e2) {
        var t2 = 0 < arguments.length && void 0 !== e2 ? e2 : {};
        return function(e3) {
          var t3 = 0 < arguments.length && void 0 !== e3 ? e3 : {};
          return a({ id: d(), timestamp: Date.now(), canceled: false }, t3);
        }(function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var n3 = null != arguments[e3] ? arguments[e3] : {}, i3 = Object.keys(n3);
            "function" == typeof Object.getOwnPropertySymbols && (i3 = i3.concat(Object.getOwnPropertySymbols(n3).filter(function(e4) {
              return Object.getOwnPropertyDescriptor(n3, e4).enumerable;
            }))), i3.forEach(function(e4) {
              w(t3, e4, n3[e4]);
            });
          }
          return t3;
        }({ name: this.name, ref: this.$refs.modal }, t2));
      }, handleModalResize: function(e2) {
        this.modal.widthType = "px", this.modal.width = e2.size.width, this.modal.heightType = "px", this.modal.height = e2.size.height;
        var t2 = this.modal.size;
        this.$emit("resize", this.createModalEvent({ size: t2 }));
      }, toggle: function(e2, t2) {
        var n3 = this.reset, i3 = this.scrollable, o3 = this.visible;
        if (o3 !== e2) {
          var r2 = o3 ? "before-close" : "before-open";
          "before-open" == r2 ? (n3 && (this.setInitialSize(), this.shift.left = 0, this.shift.top = 0), i3 && document.body.classList.add("v--modal-block-scroll")) : i3 && document.body.classList.remove("v--modal-block-scroll");
          var a2 = false, s2 = this.createModalEvent({ stop: function() {
            a2 = true;
          }, state: e2, params: t2 });
          this.$emit(r2, s2), a2 || (this.visible = e2, "before-open" == r2 && "undefined" != typeof document && document.activeElement && "BODY" !== document.activeElement.tagName && document.activeElement.blur && document.activeElement.blur());
        }
      }, getDraggableElement: function() {
        var e2 = "string" != typeof this.draggable ? ".v--modal-box" : this.draggable;
        return e2 ? this.$refs.overlay.querySelector(e2) : null;
      }, handleBackgroundClick: function() {
        this.clickToClose && this.toggle(false);
      }, callAfterEvent: function(e2) {
        e2 ? this.connectObserver() : this.disconnectObserver();
        var t2 = e2 ? "opened" : "closed", n3 = this.createModalEvent({ state: e2 });
        this.$emit(t2, n3);
      }, addDraggableListeners: function() {
        var r2 = this;
        if (this.draggable) {
          var e2 = this.getDraggableElement();
          if (e2) {
            var a2 = 0, s2 = 0, l2 = 0, u2 = 0, d2 = function(e3) {
              return e3.touches && 0 < e3.touches.length ? e3.touches[0] : e3;
            }, t2 = function(e3) {
              var t3 = e3.target;
              if (!t3 || "INPUT" !== t3.nodeName && "TEXTAREA" !== t3.nodeName && "SELECT" !== t3.nodeName) {
                var n3 = d2(e3), i3 = n3.clientX, o3 = n3.clientY;
                document.addEventListener("mousemove", c2), document.addEventListener("touchmove", c2), document.addEventListener("mouseup", h2), document.addEventListener("touchend", h2), a2 = i3, s2 = o3, l2 = r2.shift.left, u2 = r2.shift.top;
              }
            }, c2 = function(e3) {
              var t3 = d2(e3), n3 = t3.clientX, i3 = t3.clientY;
              r2.shift.left = l2 + n3 - a2, r2.shift.top = u2 + i3 - s2, e3.preventDefault();
            }, h2 = function e3(t3) {
              r2.ensureShiftInWindowBounds(), document.removeEventListener("mousemove", c2), document.removeEventListener("touchmove", c2), document.removeEventListener("mouseup", e3), document.removeEventListener("touchend", e3), t3.preventDefault();
            };
            e2.addEventListener("mousedown", t2), e2.addEventListener("touchstart", t2);
          }
        }
      }, removeDraggableListeners: function() {
      }, updateRenderedHeight: function() {
        this.$refs.modal && (this.modal.renderedHeight = this.$refs.modal.getBoundingClientRect().height);
      }, connectObserver: function() {
        this.mutationObserver && this.mutationObserver.observe(this.$refs.overlay, { childList: true, attributes: true, subtree: true });
      }, disconnectObserver: function() {
        this.mutationObserver && this.mutationObserver.disconnect();
      }, beforeTransitionEnter: function() {
        this.connectObserver();
      }, afterTransitionEnter: function() {
      }, afterTransitionLeave: function() {
      }, ensureShiftInWindowBounds: function() {
        var e2 = this.viewportHeight, t2 = this.viewportWidth, n3 = this.shift, i3 = this.pivotX, o3 = this.pivotY, r2 = this.trueModalWidth, a2 = this.trueModalHeight, s2 = t2 - r2, l2 = Math.max(e2 - a2, 0), u2 = n3.left + i3 * s2, d2 = n3.top + o3 * l2;
        this.shift.left -= u2 - c(0, s2, u2), this.shift.top -= d2 - c(0, l2, d2);
      } } }, E = (n2(7), h(x, i2, [], false, null, null, null));
      E.options.__file = "src/Modal.vue";
      function _() {
        var n3 = this, e2 = n3.$createElement, i3 = n3._self._c || e2;
        return i3("modal", { attrs: { name: "dialog", height: "auto", classes: ["v--modal", "vue-dialog", this.params.class], width: n3.width, "pivot-y": 0.3, adaptive: true, clickToClose: n3.clickToClose, transition: n3.transition }, on: { "before-open": n3.beforeOpened, "before-close": n3.beforeClosed, opened: function(e3) {
          n3.$emit("opened", e3);
        }, closed: function(e3) {
          n3.$emit("closed", e3);
        } } }, [i3("div", { staticClass: "dialog-content" }, [n3.params.title ? i3("div", { staticClass: "dialog-c-title", domProps: { innerHTML: n3._s(n3.params.title || "") } }) : n3._e(), n3._v(" "), n3.params.component ? i3(n3.params.component, n3._b({ tag: "component" }, "component", n3.params.props, false)) : i3("div", { staticClass: "dialog-c-text", domProps: { innerHTML: n3._s(n3.params.text || "") } })], 1), n3._v(" "), n3.buttons ? i3("div", { staticClass: "vue-dialog-buttons" }, n3._l(n3.buttons, function(e3, t2) {
          return i3("button", { key: t2, class: e3.class || "vue-dialog-button", style: n3.buttonStyle, attrs: { type: "button" }, domProps: { innerHTML: n3._s(e3.title) }, on: { click: function(e4) {
            e4.stopPropagation(), n3.click(t2, e4);
          } } }, [n3._v("\n      " + n3._s(e3.title) + "\n    ")]);
        })) : i3("div", { staticClass: "vue-dialog-buttons-none" })]);
      }
      var S = E.exports;
      _._withStripped = true;
      var O = { name: "VueJsDialog", props: { width: { type: [Number, String], default: 400 }, clickToClose: { type: Boolean, default: true }, transition: { type: String, default: "fade" } }, data: function() {
        return { params: {}, defaultButtons: [{ title: "CLOSE" }] };
      }, computed: { buttons: function() {
        return this.params.buttons || this.defaultButtons;
      }, buttonStyle: function() {
        return { flex: "1 1 ".concat(100 / this.buttons.length, "%") };
      } }, methods: { beforeOpened: function(e2) {
        window.addEventListener("keyup", this.onKeyUp), this.params = e2.params || {}, this.$emit("before-opened", e2);
      }, beforeClosed: function(e2) {
        window.removeEventListener("keyup", this.onKeyUp), this.params = {}, this.$emit("before-closed", e2);
      }, click: function(e2, t2, n3) {
        var i3 = 2 < arguments.length && void 0 !== n3 ? n3 : "click", o3 = this.buttons[e2];
        o3 && "function" == typeof o3.handler ? o3.handler(e2, t2, { source: i3 }) : this.$modal.hide("dialog");
      }, onKeyUp: function(e2) {
        if (13 === e2.which && 0 < this.buttons.length) {
          var t2 = 1 === this.buttons.length ? 0 : this.buttons.findIndex(function(e3) {
            return e3.default;
          });
          -1 !== t2 && this.click(t2, e2, "keypress");
        }
      } } }, k = (n2(9), h(O, _, [], false, null, null, null));
      k.options.__file = "src/Dialog.vue";
      function T() {
        var n3 = this, e2 = n3.$createElement, i3 = n3._self._c || e2;
        return i3("div", { attrs: { id: "modals-container" } }, n3._l(n3.modals, function(t2) {
          return i3("modal", n3._g(n3._b({ key: t2.id, on: { closed: function(e3) {
            n3.remove(t2.id);
          } } }, "modal", t2.modalAttrs, false), t2.modalListeners), [i3(t2.component, n3._g(n3._b({ tag: "component", on: { close: function(e3) {
            n3.$modal.hide(t2.modalAttrs.name);
          } } }, "component", t2.componentAttrs, false), n3.$listeners))], 1);
        }));
      }
      var M = k.exports;
      function C(e2, t2, n3) {
        return t2 in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
      }
      T._withStripped = true;
      var $ = h({ data: function() {
        return { modals: [] };
      }, created: function() {
        this.$root._dynamicContainer = this;
      }, methods: { add: function(e2, t2, n3, i3) {
        var o3 = this, r2 = 1 < arguments.length && void 0 !== t2 ? t2 : {}, a2 = 2 < arguments.length && void 0 !== n3 ? n3 : {}, s2 = 3 < arguments.length && void 0 !== i3 ? i3 : {}, l2 = d(), u2 = a2.name || "_dynamic_modal_" + l2;
        this.modals.push({ id: l2, modalAttrs: function(t3) {
          for (var e3 = 1; e3 < arguments.length; e3++) {
            var n4 = null != arguments[e3] ? arguments[e3] : {}, i4 = Object.keys(n4);
            "function" == typeof Object.getOwnPropertySymbols && (i4 = i4.concat(Object.getOwnPropertySymbols(n4).filter(function(e4) {
              return Object.getOwnPropertyDescriptor(n4, e4).enumerable;
            }))), i4.forEach(function(e4) {
              C(t3, e4, n4[e4]);
            });
          }
          return t3;
        }({}, a2, { name: u2 }), modalListeners: s2, component: e2, componentAttrs: r2 }), this.$nextTick(function() {
          o3.$modal.show(u2);
        });
      }, remove: function(t2) {
        var e2 = this.modals.findIndex(function(e3) {
          return e3.id === t2;
        });
        -1 !== e2 && this.modals.splice(e2, 1);
      } } }, T, [], false, null, null, null);
      $.options.__file = "src/ModalsContainer.vue";
      var j = $.exports;
      function z(e2) {
        return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        })(e2);
      }
      function L(e2, t2, n3) {
        return t2 in e2 ? Object.defineProperty(e2, t2, { value: n3, enumerable: true, configurable: true, writable: true }) : e2[t2] = n3, e2;
      }
      var N = function(e2, t2, n3) {
        if (!n3._dynamicContainer && t2.injectModalsContainer) {
          var i3 = (o3 = document.createElement("div"), document.body.appendChild(o3), o3);
          new e2({ parent: n3, render: function(e3) {
            return e3(j);
          } }).$mount(i3);
        }
        var o3;
        return n3._dynamicContainer;
      }, H = { install: function(a2, e2) {
        var s2 = 1 < arguments.length && void 0 !== e2 ? e2 : {};
        if (!this.installed) {
          this.installed = true, this.event = new a2(), this.rootInstance = null;
          var t2 = s2.componentName || "Modal", l2 = s2.dynamicDefaults || {}, o3 = function(e3, t3, n3, i3) {
            var o4 = n3 && n3.root ? n3.root : H.rootInstance, r2 = N(a2, s2, o4);
            r2 ? r2.add(e3, t3, function(t4) {
              for (var e4 = 1; e4 < arguments.length; e4++) {
                var n4 = null != arguments[e4] ? arguments[e4] : {}, i4 = Object.keys(n4);
                "function" == typeof Object.getOwnPropertySymbols && (i4 = i4.concat(Object.getOwnPropertySymbols(n4).filter(function(e5) {
                  return Object.getOwnPropertyDescriptor(n4, e5).enumerable;
                }))), i4.forEach(function(e5) {
                  L(t4, e5, n4[e5]);
                });
              }
              return t4;
            }({}, l2, n3), i3) : console.warn("[vue-js-modal] In order to render dynamic modals, a <modals-container> component must be present on the page.");
          };
          a2.prototype.$modal = { show: function(e3) {
            for (var t3 = arguments.length, n3 = new Array(1 < t3 ? t3 - 1 : 0), i3 = 1; i3 < t3; i3++)
              n3[i3 - 1] = arguments[i3];
            switch (z(e3)) {
              case "string":
                return (function(e4, t4) {
                  H.event.$emit("toggle", e4, true, t4);
                }).apply(void 0, [e3].concat(n3));
              case "object":
              case "function":
                return s2.dynamic ? o3.apply(void 0, [e3].concat(n3)) : console.warn("[vue-js-modal] $modal() received object as a first argument, but dynamic modals are switched off. https://github.com/euvl/vue-js-modal/#dynamic-modals");
              default:
                console.warn("[vue-js-modal] $modal() received an unsupported argument as a first argument.", e3);
            }
          }, hide: function(e3, t3) {
            H.event.$emit("toggle", e3, false, t3);
          }, toggle: function(e3, t3) {
            H.event.$emit("toggle", e3, void 0, t3);
          } }, a2.component(t2, S), s2.dialog && a2.component("VDialog", M), s2.dynamic && (a2.component("ModalsContainer", j), a2.mixin({ beforeMount: function() {
            null === H.rootInstance && (H.rootInstance = this.$root);
          } }));
        }
      } }, A = t.default = H;
    }], o.c = i, o.d = function(e, t, n2) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: true, get: n2 });
    }, o.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: true });
    }, o.t = function(t, e) {
      if (1 & e && (t = o(t)), 8 & e)
        return t;
      if (4 & e && "object" == typeof t && t && t.__esModule)
        return t;
      var n2 = /* @__PURE__ */ Object.create(null);
      if (o.r(n2), Object.defineProperty(n2, "default", { enumerable: true, value: t }), 2 & e && "string" != typeof t)
        for (var i2 in t)
          o.d(n2, i2, (function(e2) {
            return t[e2];
          }).bind(null, i2));
      return n2;
    }, o.n = function(e) {
      var t = e && e.__esModule ? function() {
        return e.default;
      } : function() {
        return e;
      };
      return o.d(t, "a", t), t;
    }, o.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, o.p = "/dist/", o(o.s = 11);
    function o(e) {
      if (i[e])
        return i[e].exports;
      var t = i[e] = { i: e, l: false, exports: {} };
      return n[e].call(t.exports, t, t.exports, o), t.l = true, t.exports;
    }
    var n, i;
  });
})(dist);
var distExports = dist.exports;
const VModal = /* @__PURE__ */ getDefaultExportFromCjs(distExports);
export {
  VModal as V
};
//# sourceMappingURL=index-213b3b83.js.map
