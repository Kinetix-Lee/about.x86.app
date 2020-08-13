import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Redirector from '../components/Redirector.vue';

Vue.use(VueRouter);

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
    props: (route) => route,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
