import Vue from 'vue';
import VueRouter from 'vue-router';

import VueLazyload from 'vue-lazyload';

import Home from '../views/Index.vue';
import Redirector from '../views/Redirector.vue';

Vue.use(VueRouter);
Vue.use(VueLazyload, {
  error: 'https://assets.fwdl.ink/universal/static/lazyload/error.png',
});

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:target',
    name: 'Redirector',
    component: Redirector,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
