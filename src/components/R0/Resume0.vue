<template>
  <div>
    <card
      title="个人简历"
      width="calc(20% + 20px)"
      style="margin:15px 10px"
      content="我的第一份个人简历，排版已经有些问题了"
      v-if="showTip"
      class="hide"
    >
      <p>Made in early 2019</p>
    </card>

    <profile
      name="孙果"
      sex="男"
      age="19"
      grade="大二"
      tel="13084326595"
      mail="ebluewebmail@gmail.com"
      intention="前端实习"
    ></profile>

    <module title="教育背景">
      <div class="flex">
        <div>{{edu.date}}</div>
        <div>{{edu.school}}</div>
        <div>{{edu.major}}</div>
        <div>{{grade}}</div>
      </div>
      <div class="flex">
        <div>2018.9 - 至今</div>
        <div>华南理工大学</div>
        <div class="twoline">
          <div>计算机科学与技术</div>
          <div>(辅修)</div>
        </div>
      </div>
      <div>
        主修课程：
        <b>计算机组成原理，数据结构与算法，数据库技术应用</b>，操作系统，计算机网络
      </div>
    </module>
    <module title="项目经验">
      <b>华工二手市场小程序（2018.9 - 至今）</b>
      负责二手市场小程序的前端开发，使用的组件在组件库的基础上二次开发，感受了小程序的布局、特性。
    </module>
    <module title="技能">
      <div>
        语言：C++,
        <b>CSS,HTML,JavaScript</b>
      </div>
      <div>
        系统/框架：
        <b>Vue.JS</b>
      </div>
      <i>能够简单地了解和运用以上技能</i>
    </module>

    <module title="校内工作"></module>

    <div style="text-align:center;margin-top:10px">
      Rendered by
      <img src="../../assets/logo.png" alt height="16em">
    </div>
  </div>
</template>
<script>
import Module from "./Module";
import Profile from "./Profile";
import Card from "./Card";
import { setTimeout } from "timers";

export default {
  components: {
    Module,
    Profile,
    Card
  },
  data: () => {
    return {
      edu: { date: "", school: "", major: "" },
      grade: "grade",
      showTip: true
    };
  },
  created() {
    let that = this;
    setTimeout(() => {
      that.showTip = false;
    }, 5000);
  }
};
</script>
<style scoped>
.hide {
  animation-name: hide;
  animation-duration: 5s;
}
@keyframes hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
