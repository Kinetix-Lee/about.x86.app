<template>
  <p>
    Redirecting...
  </p>
</template>
<script>
const linkList = {
  qq: 'https://wpa.qq.com/msgrd?v=3&uin=202938099&site=qq&menu=yes',
  ncm: 'https://music.163.com/#/user/home?id=341431918',
  bilibili: 'https://space.bilibili.com/182888860',
  twitter: 'https://twitter.com/Kinetixxx_',
  github: 'https://github.com/Kinetix-Lee',
  khex: 'https://x86.app/',
  default: '/',
};

export default {
  props: ['params'],
  created() {
    console.log(this.$route);
    console.log(linkList);
    switch (this.$route.params.target) {
      case 'qq':
      case 'ncm':
      case 'bilibili':
      case 'twitter':
      case 'github':
      case 'khex':
      case 'default':
        window.location.href = linkList[this.$route.params.target];
        break;
      default:
        window.location.href = linkList.default;
    }
  },
};
</script>
