<template>
  <router-view></router-view>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  created() {}
};
</script>

<style lang="stylus" >
.header {
  box-shadow: 0px -8px 9px 0 black;
  padding: 0px 10px 0px 10px;
  display: flex;

  a {
    display: block;
    font-size: 18px;
    padding: 8px 10px 8px 10px;
    color: black;
    font-weight: normal;
    text-decoration: none;
  }

  a:hover {
    background: #3685ff29;
  }

  a.router-link-exact-active {
    color: #3685ff;
    border-bottom: 3px solid #3685ff;
  }

  @media screen and (min-width: 750px) {
  }
}

* {
  font-family: PingFang SC, Avenir, Microsoft YaHei, Helvetica, Arial, sans-serif;
}

body {
  background-color: #f2f2f2;
}

@media screen and (max-width: 996px) {
  background-color: white;
}
</style>

<style>
body {
  margin: 0;
}
</style>
