/// <reference path="./../index.d.ts" />
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VModal from 'vue-js-modal'
 
Vue.use(VModal)

Vue.config.productionTip = false;

const Beaker = require("@/system");

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
