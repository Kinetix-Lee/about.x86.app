<template>
  <div id="home">
    <home-body />
    <div
      v-lazy:background-image="backgroundImage"
      v-bind:class="{ 'avatarMouseoverBackground': state.avatarMouseover }"
      id="background"></div>
<!--    <img-->
<!--      src="@/assets/image/background.webp"-->
<!--      v-bind:class="{ 'avatarMouseoverBackground': state.avatarMouseover }"-->
<!--      alt="Failed loading background image" id="bacskground">-->
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

import homeBody from '../components/Home.Body.vue';
import globalStore from '../store/global';
import backgroundImage from '../assets/images/background.jpg';

// console.log(globalStore.state);

export default {
  components: {
    'home-body': homeBody,
  },
  data() {
    return {
      state: globalStore.state,
      publicPath: '/assets/',
      backgroundImage,
      // eslint-disable-next-line global-require,import/no-unresolved
      // backgroundImageUri: require('@assets/image/background.jpg'),
    };
  },
  methods: {
    setAvatarMouseover: (newValue) => { globalStore.setAvatarMouseover(newValue); },
  },
};
</script>
