<template>
  <p id="redirectorIndicator">
    Redirecting...
  </p>
</template>
<style>
  #redirectorIndicator {
    position: absolute;
    display: flex;
    left: 0;
    right: 0;
    top: 6rem; /* for navbar */
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>
<script>
import globalStore from '../store/global';

const { linkList } = globalStore;

export default {
  props: ['params'],
  created() {
    const route = this.$route;
    // console.log(linkList);
    setTimeout(() => {
      switch (route.params.target.toLowerCase()) {
        case 'qq':
        case 'ncm':
        case 'bilibili':
        case 'twitter':
        case 'github':
        case 'kdev':
          linkList.forEach((value) => {
            if (
              route.params.target.toLowerCase() === value.index.toLowerCase()
            ) window.open(value.target, '_blank');
          });
          break;
        default:
          break;
      }
    }, 500);
    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  },
};
</script>
