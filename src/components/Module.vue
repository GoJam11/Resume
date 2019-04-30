<template>
  <div class="divm">
    <p class="m-title">{{title}}</p>
    <div class="aline"></div>
    <div class="flex-column" style="font-size:14px">
    <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "module",
  props: {
    title: String,
    date: String,
    school: String,
    major: String,
    grade: String
  }
};
</script>

<style>
.divm {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top:10px;
}

.m-title {
  background-color: rgb(76, 141, 226);
  color: white;
  padding: 3px 5px;
  align-items: flex-start;
  margin:0px 0px;
  font-size:16px
}
.aline {
  height: 5px;
  background-color: rgb(76, 141, 226);
  width: 100%;
  margin-top: -5px
}
</style>
