<template>
  <div id="home">
    <home-body />
    <div
      v-bind:class="{ 'avatarMouseoverBackground': store.state.avatarMouseover }"
      id="background"></div>
  <!-- <img
    v-bind:src="backgroundImage"
    v-bind:class="{ 'avatarMouseoverBackground': state.avatarMouseover }"
    alt="Failed loading background image" id="background"> -->
  </div>
</template>

<style>
  #home {
    display: block;
    position: absolute;
    margin: 0;
    padding: 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
  }
  #background {
    display: block;
    position: absolute;
    margin: 0;
    padding: 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    background-image: url('../assets/images/background.jpg');
    background-repeat: no-repeat;
    background-color: #212121;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    filter: blur(10px);
    transform: scale(1.02);
    transition: 1s ease-in-out;
  }
  .avatarMouseoverBackground {
    transform: scale(1.1) !important;
    transition: 1s ease-in-out !important;
  }
</style>

<script>
import { onMounted } from 'vue';

import homeBody from '../components/Home.Body.vue';
import globalStore from '../store/global';

export default {
  components: {
    'home-body': homeBody,
  },
  data() {
    return {
      store: globalStore,
      publicPath: '/assets/',
    };
  },
};
</script>
