import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '../views/Index.vue';
import Redirector from '../views/Redirector.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index,
  },
  {
    path: '/:target',
    name: 'Redirector',
    component: Redirector,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
