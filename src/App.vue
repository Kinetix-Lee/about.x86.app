<template>
  <div id="app">
    <app-nav />
    <router-view />
    <app-footer />
  </div>
</template>

<style>
</style>

<script>
import appNav from './components/App.Nav.vue';
import appFooter from './components/App.Footer.vue';

export default {
  name: 'app',
  components: {
    'app-nav': appNav,
    'app-footer': appFooter,
  },
};
</script>
