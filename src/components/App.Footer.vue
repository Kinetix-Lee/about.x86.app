<template>
  <div id="footer">
    <p>
      Copyright &copy; 2020 Kinetix. All rights reserved. <br>
      <small>Background image by <a href="https://commons.wikimedia.org/wiki/File:Huazhong_University_of_Science_and_Technology_-_a_lake_and_a_pavilion_on_a_snow_day_-_P1050013.JPG" title="via Wikimedia Commons">User:Vmenkov</a> / <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA</a></small>
    </p>
  </div>
</template>

<style scoped>
  #footer {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4rem;
    margin: auto;
    background-color: rgba(33, 33, 33, .35);
    /*backdrop-filter: blur(10px);*/
    /*font-weight: lighter;*/
    z-index: 2;
    align-items: center;
    justify-content: center;
  }
  p {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    margin: auto;
    padding: 0;
  }
  a {
    color: whitesmoke;
  }
</style>

<script>

</script>
