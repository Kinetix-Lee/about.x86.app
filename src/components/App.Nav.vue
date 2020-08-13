<template>
    <div id="nav">
      <router-link to="/" class="nav-item">关于我</router-link>&nbsp;|&nbsp;
      <router-link to="/khex" class="nav-item">kHex</router-link>
    </div>
</template>

<style>
#nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  margin: 0;
  /*background-color: rgba(33, 33, 33, .5);*/
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}

.nav-item {
  display: inline-block;
  position: relative;
  margin: auto;
  top: 0;
  height: 100%;
  min-width: 4rem;
  text-align: center;
  line-height: 100%;
  background-color: rgba(0, 0, 0, 0);
  transition: all .25s ease-in-out;
}

.nav-item:hover {
  backdrop-filter: blur(50px);
  background-color: rgba(33, 33, 33, .2);
  transition: all .25s ease-in-out;
}
</style>
