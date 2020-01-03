/// <reference path="./../index.d.ts" />
import Vue from "vue";
import VTooltip from "v-tooltip";
import App from "./App.vue";
import router from "./router";
import WhatInput from "./plugins/WhatInput/index";
Vue.config.productionTip = false;

Vue.use(WhatInput);
Vue.use(VTooltip);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
