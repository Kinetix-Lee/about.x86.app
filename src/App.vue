<template>
  <div id="app">
    <AppNav />
    <router-view />
    <AppFooter />
  </div>
</template>

<style>
</style>

<script>
import AppNav from './components/App.Nav.vue';
import AppFooter from './components/App.Footer.vue';

export default {
  name: 'app',
  components: {
    AppNav,
    AppFooter,
  },
};
</script>
