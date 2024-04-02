import { V as Vue$1 } from "./index-57ac9c3a.js";
var Vue = Vue$1;
Vue = "default" in Vue ? Vue["default"] : Vue;
var version = "2.1.0";
var compatible = /^2\./.test(Vue.version);
if (!compatible) {
  Vue.util.warn("VueFocus " + version + " only supports Vue 2.x, and does not support Vue " + Vue.version);
}
var focus = {
  inserted: function(el, binding) {
    if (binding.value)
      el.focus();
    else
      el.blur();
  },
  componentUpdated: function(el, binding) {
    if (binding.modifiers.lazy) {
      if (Boolean(binding.value) === Boolean(binding.oldValue)) {
        return;
      }
    }
    if (binding.value)
      el.focus();
    else
      el.blur();
  }
};
var mixin = {
  directives: {
    focus
  }
};
var mixin_1 = mixin;
export {
  mixin_1 as m
};
//# sourceMappingURL=vue-focus.common-b8f4cb6f.js.map
