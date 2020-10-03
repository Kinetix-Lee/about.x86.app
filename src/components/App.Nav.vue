<template>
    <div id="nav">
      <router-link to="/" class="nav-item active">关于我</router-link>
<!--      <span class="nav-item-divider">&nbsp;|&nbsp;</span>-->
      <router-link to="/kdev" class="nav-item">Kdev</router-link>
    </div>
</template>

<style scoped>
  #nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    margin: 0;
    user-select: none;
    background-color: rgba(33, 33, 33, .35);
    /*-webkit-backdrop-filter: blur(10px);*/
    /*backdrop-filter: blur(10px);*/
    z-index: 2;
  }

  .nav-item {
    display: inline-block;
    position: relative;
    margin: auto;
    top: 0;
    height: 100%;
    min-width: 6rem;
    text-align: center;
    text-decoration: none;
    line-height: 3rem;
    color: white;
    backdrop-filter: none;
    background-color: rgba(0, 0, 0, 0);
    transition: all .25s ease-in-out;
  }

  .nav-item:hover {
    /*backdrop-filter: blur(15px);*/
    background-color: rgba(33, 33, 33, .2);
    transition: all .25s ease-in-out;
  }

  .nav-item.active {
    font-weight: bold;
  }

  /*.nav-item-divider {*/
  /*  margin: 0;*/
  /*  padding: 0;*/
  /*  font-weight: lighter;*/
  /*  transform: scale(.8);*/
  /*}*/
</style>

<script>
export default {
  name: 'AppNav',
}
</script>
