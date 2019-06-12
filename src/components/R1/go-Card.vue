<template>
  <div class="_card">
    <div class="_header" v-if="$slots.header">
      <div class="_padding">
        <slot name="header"></slot>
      </div>
    </div>
    <div class="_body">
      <div class="_padding">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
._card {
  margin: 10px;
  width: 400px;
  height: 300px;
  transition: 0.3s;
  box-shadow: 0px 0px 7px rgb(241, 238, 238);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  
  background: #f9fbba8c;
}
._card:hover {
  box-shadow: 0px 0px 20px rgb(241, 238, 238);
}
._header {
  border-bottom: 1px solid cornflowerblue;
  /**margin: 5px 5px;**/
  text-align: center;
}
._body {
  /**margin: 5px 5px;**/
  flex-grow: 1;
}
._padding {
  padding: 5px 16px;
  
}
</style>

<script>
export default {
  name: "goCard",
  mounted: function() {}
};
</script>
