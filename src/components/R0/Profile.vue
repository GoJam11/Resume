<template>
  <div class="profile">
    <h1>{{name}}</h1>
    <div class="detail">
      <div class="inline">
        <div style="flex-grow:1">性别：{{sex}}</div>
        <div style="flex-grow:1">年龄：{{age}}</div>
        <div>年级：{{grade}}</div>
      </div>
      <div>联系电话：{{tel}}</div>
      <div>电子邮件：{{mail}}</div>
      <div>求职意愿：{{intention}}</div>
    </div>
    <div class="avatar" v-if="avatar">
        
        <p>注：不需要照片</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
  props: {
    name: String,
    age: String,
    sex: String,
    grade: String,
    tel: String,
    mail: String,
    intention: String,
    avatar:Boolean
  }
};
</script>

<style>
.profile {
  height: 160px;
  width: calc(100% - 20px);
  background: rgb(194, 224, 240);
  display: flex;
  justify-content: space-between;
  padding: 10px;
  
}
.detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 14px
}
.inline {
  display: inline-flex;
  width: 100%
}
.avatar{
    display: flex;
    align-items: center;
    background: url("../../assets/avatar.jpeg");
    height: 150px;
    background-size: cover
}
@media screen and (max-device-width:750px){
  .avatar{
      display: none;
  }
}
</style>
