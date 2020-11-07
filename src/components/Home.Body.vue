<template>
  <div id="home-body">
    <div id="avatar-container">
      <img
        v-on:mouseover="store.setAvatarMouseover(true)"
        v-on:mouseleave="store.setAvatarMouseover(false)"
        src="/avatar.jpg"
        id="avatar" alt="Kinetix" draggable="false">
    </div>
    <div id="introduction">
      <h1 id="name">Kinetix <small>(Kx)</small></h1>
      <div id="summary" v-html="generateIntroductionAuto()"></div>
    </div>
    <div id="social-link-group">
      <router-link
        v-for="item in this.linkList"
        v-bind:to="'/' + item.index.toLowerCase()"
        v-bind:key="item.name" class="social-link-item">
        {{ item.name }}
      </router-link>
    </div>
  </div>
</template>

<style>
  #home-body {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    z-index: 1;
  }
  #avatar-container {
    width: 10rem;
    height: 10rem;
    padding: 2rem;
    padding-bottom: 1rem;
  }
  #avatar {
    width: 100%;
    height: 100%;
    display: block;
    background-color: whitesmoke;
    box-shadow: 0 0 0 .4rem rgba(33, 33, 33, .2);
    transition: .15s ease-in-out;
    border-radius: 5%;
    -webkit-user-drag: none;
    user-select: none;
  }
  #avatar:hover {
    box-shadow: 0 0 0 .8rem rgba(33, 33, 33, .4);
    border-radius: 2%;
    transition: .15s ease-in-out;
  }
  #name {
    margin: 0;
    /*font-weight: normal;*/
  }
  #name small {
    font-weight: normal;
  }
  #summary {
    margin-top: .25rem;
    font-size: 1.4rem;
  }
  #introduction {
    margin: .5rem;
    padding: .25rem;
  }
  #introduction h1 {
    margin-top: .3rem;
  }
  /*#name small {*/
  /*  font-weight: normal;*/
  /*}*/
  #social-link-group {
    display: flex;
    flex-direction: row;
    min-width: 8rem;
    max-width: 80%;
    justify-content: center;
    flex-wrap: wrap;
    align-content: space-around;
  }
  .social-link-item {
    display: block;
    margin: auto;
    padding: .8rem;
    color: white;
    user-select: none;
    text-decoration: none;
    border: none;
    outline: 0 rgba(33, 33, 33, .2) solid;
    transition: .1s ease-in-out;
    font-size: 18px;
  }
  .social-link-item:hover {
    background-color: rgba(33, 33, 33, .5);
    transition: .1s ease-in-out;
  }
  .social-link-item:active {
    outline: .4rem rgba(33, 33, 33, .2) solid;
    transition: .05s ease-in-out;
  }
  .social-link-item:visited {
    outline: .4rem rgba(33, 33, 33, .2) solid;
    transition: .05s ease-in-out;
  }
  .light {
    font-weight: lighter;
  }
</style>
<script>
import globalStore from '../store/global';

export default {
  name: 'HomeBody',
  data() {
    return {
      store: globalStore,
      linkList: globalStore.linkList,
      generateIntroductionAuto: () => globalStore.generateIntroductionAuto(),
      // introduction: globalStore.generateIntroductionAuto();
    };
  },
};
</script>
