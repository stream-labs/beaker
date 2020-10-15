/// <reference path="./../index.d.ts" />
import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import VTooltip from 'v-tooltip';
import VueClipboard from 'vue-clipboard2';
import VeeValidate from 'vee-validate';
import VModal from 'vue-js-modal';
import routes from './router';
import App from './App.vue';

const app = createApp(App);

app.use(VTooltip);
app.use(VModal);
app.use(VueClipboard);
app.use(VeeValidate);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount('#app');
