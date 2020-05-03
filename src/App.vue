<template>
  <div>
   <!-- <header class="header">
      <router-link to="/">Resume</router-link>
      <router-link to="/md" style="pointer-events:none;color:#80808052">MarkDown</router-link>
      <router-link to="/r0" style="pointer-events:none;color:#80808052">R0</router-link>
      <router-link to="/r1" style="pointer-events:none;color:#80808052">R1</router-link>
    </header>-->

    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  created() {}
};
</script>

<style lang="stylus" scoped>
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
    background :#3685ff29
  }


  a.router-link-exact-active {
    color: #3685ff;
    border-bottom: 3px solid #3685ff;
  }

  @media screen and (min-width: 750px) {
  }
}
*{
  font-family: PingFang SC, Avenir, Microsoft YaHei, Helvetica, Arial, sans-serif;
}
</style>

<style>
body {
  margin: 0;
}
</style>
