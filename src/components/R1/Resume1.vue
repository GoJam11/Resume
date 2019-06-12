<template>
  <div id="app">
    <div class="newStyle" style="display:flex;justify-content:center;position:relative;width:100%">
      <div class="circle1" style></div>
      <div class="outer2">
        <div class="circle2"></div>
      </div>

      <goCard class="goCard" tabindex="1">
        <div style="display: flex;justify-content:space-between">
          <div>
            <h1 style="margin-bottom:0em;" class="myName">{{lang=='cn' ?'孙果':'Sun Guo'}}</h1>
            <p>{{lang=='cn' ?'男 1999.11 广东·广州':'Male 1999.11 Guangzhou Guangdong'}}</p>
            <p>
              <span class="grey">{{lang=='cn' ?'手机':'Tel'}}</span> 13084326595
            </p>
            <p>
              <span class="grey">{{lang=='cn' ?'邮箱':'Email'}}</span> iloveos@live.com
            </p>
          </div>
          <div>
            <p
              style="margin-top:48.24px;font-weight:bold;text-align:right"
            >{{lang=='cn' ?'前端实习':'Front-end internship'}}</p>
            <p
              style="font-weight:bold;text-align:right"
              class="cLang"
              @click="Clang"
            >{{lang=='cn' ?'English':'简体中文'}}</p>
          </div>
        </div>
      </goCard>
    </div>
    <main style="display:flex;justify-content:center;background:#f4f0e6;width:100%">
      <div class="drawer" tabindex="1">
        <section>
          <h1>{{lang=='cn' ?'教育背景':'Education'}}</h1>
          <p style>
            <span
              style="font-weight:bold"
            >{{lang=='cn' ?'华南理工大学·本科':'South China University of Technology'}}</span>
          </p>
          <p>
            {{lang=='cn' ?'广告学':'Bachelor of Advertising'}}
            <span
              style="color:grey;font-size:14px;float:right"
            >2017-2021</span>
          </p>
          <p>
            {{lang=='cn' ?'计算机科学与技术（辅修/双学位）':'Bachelor of Computer Science'}}
            <span
              style="color:grey;font-size:14px;float:right"
            >2018-2021</span>
          </p>
        </section>
        <section>
          <h1>{{lang=='cn' ?'项目经验':'Professional Experience'}}</h1>
          <p>
            <span
              style="font-weight:bold"
            >{{lang=='cn' ?'华工二手市场小程序':'SCUT\'s Second-hand Market Applet'}}</span>
            <span style="color:grey;font-size:14px;float:right">2018.9</span>
          </p>
          <p>
            {{lang=='cn' ?'负责二手市场小程序的前端开发，使用的组件在组件库的基础上二次开发，感受了小程序的布局、特性。熟悉了小程序与网页端的一些不同，比如原生组件与webview的冲突。':'I redeveloped on the basis of the component library and completed the front end of the second-hand market.'}}
            </p>
        </section>
        <section>
          <h1>{{lang=='cn' ?'技能':'Expertise'}}</h1>

          <p
            style="font-weight:bold"
          >{{lang=='cn' ?'熟悉Vue.JS, 原生JavaScript（ES5、6）, HTML5, CSS3':'Vue.JS, Native JavaScript（ES5、6）, HTML5, CSS3'}}</p>
          <p>
            {{lang=='cn' ?'使用（或制作）过Vue-cli、Vue-router、Element UI、Bootstrap、微信小程序、H5APP、Weex、Cocos Creater、Flex、CSS Animation、AJAX、NPM':'I use these technologies: Vue-cli、Vue-router、Element UI、Bootstrap、WeChat applet、H5APP、Weex、Cocos Creater、Flex、CSS Animation、AJAX、NPM'}}
            </p>
          <p>
            {{lang=='cn' ?'会简单的PHP、NodeJS、Swift、Flutter、C++、Python（Numpy）、SQL、Git、汇编，也对新技术抱有兴趣和热情':'I know a little about these technologies: PHP、NodeJS、Swift、Flutter、C++、Python（Numpy）、SQL、Git、Assembly language, while I am passionate about new technologies.'}}
            </p>
          <p>
            {{lang=='cn' ?'在学校学习并研究过计算机组成原理、操作系统、计算机网络、数据结构与算法、数据库':'I have studied computer composition principles, operating systems, computer networks, data structures and algorithms, and databases at school.'}}
            </p>
        </section>
        <section>
          <h1>{{lang=='cn' ?'展示':'Works'}}</h1>
          <p>
            <a href="http://demo.guohere.com" target="_blank">{{lang=='cn' ?'[作品集合]':'[Some works]'}} http://demo.guohere.com</a>
          </p>
          <p>
            <a
              href="http://demo.guohere.com/el-blog"
              target="_blank"
            >
            {{lang=='cn' ?'[Vue+WP后端博客]':'[Vue+Wordpress]'}} http://demo.guohere.com/el-blog
            </a>
          </p>
          <p>
            <a
              href="http://demo.guohere.com/resume1"
              target="_blank"
            >{{lang=='cn' ?'[简历]':'[Resume]'}} http://demo.guohere.com/resume1</a>
          </p>
          <p>
            <a href="https://github.com/GoJam11" target="_blank">[Github] https://github.com/GoJam11</a>
          </p>
        </section>
        <div style="text-align:center;">
          Rendered by
          <img src="../../assets/logo.png" alt height="16em">
        </div>
      </div>
    </main>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
//import Card from "./components/Card";
import goCard from './go-Card'

export default {
  name: "app",
  components: {
    //HelloWorld,
    goCard,
    
  },
  data: function() {
    return {
      lang: "cn",
      edu: {
        date: "2017.9 - 至今",
        school: "华南理工大学",
        major: "广告学"
      },
      avatar: false
    };
  },
  methods: {
    Clang() {
      if (this.lang == "cn") {
        this.lang = "en";
      } else {
        this.lang = "cn";
      }
    }
  }
};
</script>

<style scoped>
body {
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: auto;
}
@media screen and (max-device-width: 498px) {
  .myName {
    font-size: 48px;
  }
}
@media screen and (min-device-width: 499px) {
  .myName {
    font-size: 72px;
  }
}

@media screen and (min-device-width: 750px) {
  .drawer:hover {
    transition: 0.3s;
    transform: translate(0px, -40px);
  }
  .goCard:hover {
    transform: translate(-3px, -4px);
  }
  .drawer:focus {
    transition: 0.3s;
    transform: translate(0px, -40px);
  }
  .goCard:focus {
    transform: translate(-3px, -4px);
  }
}
a {
  text-decoration: none;
  color: #000;
}
a:visited {
  color: black;
}
.mini {
  background: #f4f0e68e;
}
.cLang {
  cursor: grab;
}
td {
  font-weight: bold;
}
tr {
  margin: 16px 0px;
}
.grey {
  color: rgb(114, 111, 111);
  font-size: 14px;
}
.drawer {
  width: calc(100% - 20px) !important;
  max-width: 960px;
  background: #ffffffa9;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  z-index: 1;
  outline: 0;
}
.drawer > * {
  padding: 16px 16px;
}

.goCard {
  z-index: 1;
  width: calc(100% - 20px) !important;
  max-width: 960px;
  justify-content: center;
  outline: 0;
}

.newStyle {
  /**background: linear-gradient(rgb(63, 199, 251) 22%, rgb(255, 255, 253) 100%);
  **/
}

@keyframes circleMove {
  0% {
    left: -200px;
    top: -160px;
  }
  100% {
    left: 600px;
    top: 60px;
  }
}
@keyframes circle2Move {
  0% {
    left: 200px;
    top: 160px;
  }
  100% {
    left: -600px;
    top: 60px;
  }
}
.circle1 {
  --color: #d4edf4;
  position: absolute;
  left: -200px;
  top: -160px;
  border-radius: 200px;
  width: 400px;
  height: 400px;
  background: var(--color);
  box-shadow: 0px 0px 40px var(--color);
  animation: circleMove 10s 5s infinite;
  animation-timing-function: ease-in;
  animation-direction: alternate;
}
.outer2 {
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 400px;
  height: 320px;
  /**overflow: hidden;**/
}
.circle2 {
  position: absolute;
  left: 200px;
  top: 160px;
  border-radius: 200px;
  width: 400px;
  height: 400px;
  background: -webkit-radial-gradient(circle, #e2f2d5 0%, #e2f2d5 60%);
  overflow-x: hidden;
  animation: circle2Move 15s 7s infinite;
  animation-direction: alternate;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  /**flex-direction: column; Safari异常**/
  flex-wrap: wrap;
  justify-content: flex-start;
  height: 100%;
  background: #f4f0e6;
  overflow-x: hidden;
}

html,
body {
  margin: 0;
}
</style>
