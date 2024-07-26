import { g as getDefaultExportFromCjs } from "./index-158ccef1.js";
var camel2hyphen$1 = function(str) {
  return str.replace(/[A-Z]/g, function(match) {
    return "-" + match.toLowerCase();
  }).toLowerCase();
};
var camel2hyphen_1 = camel2hyphen$1;
var camel2hyphen = camel2hyphen_1;
var isDimension = function(feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};
var obj2mq = function(obj) {
  var mq = "";
  var features = Object.keys(obj);
  features.forEach(function(feature, index2) {
    var value = obj[feature];
    feature = camel2hyphen(feature);
    if (isDimension(feature) && typeof value === "number") {
      value = value + "px";
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += "not " + feature;
    } else {
      mq += "(" + feature + ": " + value + ")";
    }
    if (index2 < features.length - 1) {
      mq += " and ";
    }
  });
  return mq;
};
var json2mq = function(query) {
  var mq = "";
  if (typeof query === "string") {
    return query;
  }
  if (query instanceof Array) {
    query.forEach(function(q, index2) {
      mq += obj2mq(q);
      if (index2 < query.length - 1) {
        mq += ", ";
      }
    });
    return mq;
  }
  return obj2mq(query);
};
var json2mq_1 = json2mq;
const json2mq$1 = /* @__PURE__ */ getDefaultExportFromCjs(json2mq_1);
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)
      arr2[i] = arr[i];
    return arr2;
  } else {
    return Array.from(arr);
  }
}
function convertBreakpointsToMediaQueries(breakpoints) {
  var keys = Object.keys(breakpoints);
  var values = keys.map(function(key) {
    return breakpoints[key];
  });
  var breakpointValues = [0].concat(_toConsumableArray(values.slice(0, -1)));
  var mediaQueries = breakpointValues.reduce(function(sum, value, index2) {
    var options = Object.assign({
      minWidth: value
    }, index2 < keys.length - 1 ? {
      maxWidth: breakpointValues[index2 + 1] - 1
    } : {});
    var mediaQuery = json2mq$1(options);
    return Object.assign(sum, _defineProperty({}, keys[index2], mediaQuery));
  }, {});
  return mediaQueries;
}
function transformValuesFromBreakpoints(breakpoints, values, currentBreakpoint) {
  var findClosestValue = function findClosestValue2(currentBreakpoint2) {
    if (values[currentBreakpoint2] !== void 0)
      return values[currentBreakpoint2];
    var index2 = breakpoints.findIndex(function(b) {
      return b === currentBreakpoint2;
    });
    var newBreakpoint = index2 !== -1 || index2 !== 0 ? breakpoints[index2 - 1] : null;
    if (!newBreakpoint)
      return values[index2];
    return values[newBreakpoint] !== void 0 ? values[newBreakpoint] : findClosestValue2(newBreakpoint);
  };
  return findClosestValue(currentBreakpoint);
}
function selectBreakpoints(breakpoints, currentBreakpoint) {
  var index2 = breakpoints.findIndex(function(b) {
    return b === currentBreakpoint;
  });
  return breakpoints.slice(index2);
}
function subscribeToMediaQuery(mediaQuery, enter) {
  var mql = window.matchMedia(mediaQuery);
  var cb = function cb2(_ref) {
    var matches = _ref.matches;
    if (matches)
      enter();
  };
  mql.addListener(cb);
  cb(mql);
}
function isArray(arg) {
  return Object.prototype.toString.call(arg) === "[object Array]";
}
var component = {
  props: {
    mq: {
      required: true,
      type: [String, Array]
    }
  },
  computed: {
    plusModifier: function plusModifier() {
      return !isArray(this.mq) && this.mq.slice(-1) === "+";
    },
    activeBreakpoints: function activeBreakpoints() {
      var breakpoints = Object.keys(this.$mqAvailableBreakpoints);
      var mq = this.plusModifier ? this.mq.slice(0, -1) : isArray(this.mq) ? this.mq : [this.mq];
      return this.plusModifier ? selectBreakpoints(breakpoints, mq) : mq;
    }
  },
  render: function render(h, props) {
    var shouldRenderChildren = this.activeBreakpoints.includes(this.$mq);
    return shouldRenderChildren ? h("div", this.$slots.default) : h();
  }
};
var DEFAULT_BREAKPOINT = {
  sm: 450,
  md: 1250,
  lg: Infinity
};
var install = function install2(Vue) {
  var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$breakpoints = _ref.breakpoints, breakpoints = _ref$breakpoints === void 0 ? DEFAULT_BREAKPOINT : _ref$breakpoints, _ref$defaultBreakpoin = _ref.defaultBreakpoint, defaultBreakpoint = _ref$defaultBreakpoin === void 0 ? "sm" : _ref$defaultBreakpoin;
  var hasSetupListeners = false;
  var reactorComponent = new Vue({
    data: function data() {
      return {
        currentBreakpoint: defaultBreakpoint
      };
    }
  });
  Vue.filter("mq", function(currentBreakpoint, values) {
    return transformValuesFromBreakpoints(Object.keys(breakpoints), values, currentBreakpoint);
  });
  Vue.mixin({
    computed: {
      $mq: function $mq() {
        return reactorComponent.currentBreakpoint;
      }
    },
    created: function created() {
      if (this.$isServer)
        reactorComponent.currentBreakpoint = defaultBreakpoint;
    },
    mounted: function mounted() {
      if (!hasSetupListeners) {
        var mediaQueries = convertBreakpointsToMediaQueries(breakpoints);
        var _loop = function _loop2(key2) {
          var mediaQuery = mediaQueries[key2];
          var enter = function enter2() {
            reactorComponent.currentBreakpoint = key2;
          };
          subscribeToMediaQuery(mediaQuery, enter);
        };
        for (var key in mediaQueries) {
          _loop(key);
        }
        hasSetupListeners = true;
      }
    }
  });
  Vue.prototype.$mqAvailableBreakpoints = breakpoints;
  Vue.component("MqLayout", component);
};
var index = {
  install
};
export {
  index as i
};
//# sourceMappingURL=vue-mq.es-228d853f.js.map
