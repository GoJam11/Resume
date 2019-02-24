<template>
  <div id="app" :style="div">
    <!--<p class="title" @click="next" :class="{show:isP}">你做好准备了吗</p>
    <card title="标题在此"  width="calc(20% + 20px)" content="content"><p>哈哈</p></card>-->
    <profile
      name="姓名"
      sex="男"
      age="20"
      grade="大二"
      tel="130xxxxiiii"
      mail="ebluewebmail@gmail.com"
      intention="前端实习"
    ></profile>

    <module title="教育背景">
      <div class="flex">
        <div>{{edu.date}}</div>
        <div>{{edu.school}}</div>
        <div>{{edu.major}}</div>
        <!--<div>{{grade}}</div>-->
      </div>
      <div class="flex">
        <div >2018.9 - 至今</div>
        <div >华南理工大学</div>
        <div class="twoline"><div>计算机科学与技术</div><div>(辅修)</div></div>
      </div>
      <div>主修课程：<b>计算机组成原理，数据结构与算法，数据库技术应用</b></div>
    </module>
    <module title="项目经验">
      <b>华工二手市场小程序</b>
      负责二手市场小程序的前端开发，使用的组件在组件库的基础上二次开发，感受了小程序的布局、特性
    </module>
    <module title="技能">
      <div>
        语言：C++,
        <b>CSS,HTML,JavaScript</b>,PHP,Python,SQL,Swift
      </div>
      <div>
        系统/框架：Linux,
        <b>Vue.JS</b>
      </div>
      <i>能够简单地了解和运用以上技能</i>
    </module>

    <!--<module title="校内工作"></module>-->

    <div style="text-align:center;margin-top:10px">
      Rendered by
      <img src="./assets/logo.png" alt height="16em">
    </div>
    <!--<div style="display:flex;justify-content:center">
      <card  style="">
        <div style="text-align:center;color:white">
          Rendered by
          <img src="./assets/logo.png" alt height="16em">
        </div>
      </card>
    </div>-->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Card from "./components/Card";
import Module from "./components/Module";
import Profile from "./components/Profile";

export default {
  name: "app",
  components: {
    HelloWorld,
    Card,
    Module,
    Profile
  },
  data: function() {
    return {
      edu: {
        date: "2017.9 - 至今",
        school: "华南理工大学",
        major: "广告学"
      }
    };
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
}

html,
body {
  height: 100%;
}

.flex {
  display: flex;
  justify-content: space-between;
}
.flex>div{
  flex-basis: 33%
}
.flex>div:last-child{
  display: flex;
  justify-content: flex-end;
  text-align: right;
  flex-direction: column;
}
.flex>div:nth-child(2){
  display: flex;
  justify-content: center;
}
.flex>div:nth-child(2)::before{
  content: '';
  background-image: url("./assets/scut.jpg");
  background-size: contain;
  height:1em;
  width: 1em;
  margin-top: 3px;
  margin-right: 3px
}

.flex-column {
  display: flex;
  flex-direction: column;
  width: calc(100% - 10px);
  padding: 5px;
}

.twoline{
  display: block;
}


@media screen and (min-device-width:750px){
  .flex>div:last-child{
      flex-direction: row;
  }
}
</style>
