<template>
  <div class="global" v-on:mousewheel="scroll">
    <div class="container">
      <div class="loading" v-if="loading">
        <div class="circle lg">
          <div class="circle sm"></div>
        </div>
      </div>
      <div class="mobile-loading">
        <p
          style="position:absolute;top:50px;padding:0px 40px;font-size:24px;display:block"
        >
          请使用电脑访问，或最大化浏览器窗口。<br
            style="display:inline"
          />移动设备请访问<a
            style="display:inline"
            href="https://resume.local.guohere.com/react"
            >交互版版简历</a
          >。
        </p>
      </div>
      <div class="card">
        <header :style="style.header" class="header">
          <div
            class="left"
            style="flex-basis:72%;align-items:flex-start;margin-left:45px;justify-content:flex-start;margin-top:60px"
          >
            <div>
              {{ $t("name")
              }}<span
                style="font-weight:300;font-size:22px;align-items:flex-end;margin-left:10px;margin-bottom:6px"
                >Web前端工程师</span
              >
            </div>
            <!--<p style="font-size:22px;font-weight:300">Web前端工程师</p>-->
            <div
              class="right-l"
              style="font-size:16px;font-weight:300;width:400px;flex-direction:column"
            >
              <p class="intro">
                我是一个由衷热爱前端与交互的前端er，梦想是成为一名前端工程师。目前正在寻找前端工程师岗位的工作机会，希望借此为贵公司献上我的一点绵薄之力。
              </p>
              <p class="intro"></p>
            </div>
          </div>
          <div class="right" style="flex-basis:28%">
            <div class="right-r" style="flex-basis:100%">
              <p class="section">
                <!--<i class="fa fa-bookmark fa-fw"></i>
                {{ $t("intention.c") }}-->
              </p>
              <!--<p>{{ $t("intention.c") }}</p>-->
              <p class="section" style="margin-top:45px;font-size:26px;margin-bottom:-3px">
                <!--<i class="fa fa-bookmark fa-fw"></i>-->
                {{ $t("contact") }}
              </p>
              <p style="font-size:16px;margin-bottom:-5px">
                <i class="fa fa-envelope fa-fw"></i>
                {{ $t("email") }}iloveos@live.com
              </p>
              <p style="font-size:16px;margin-bottom:-5px">
                <i class="fa fa-phone fa-fw"></i>
                {{ $t("tel") }}18651403158
              </p>
              <p style="font-size:16px;margin-bottom:-5px">
                <i class="fa fa-wechat fa-fw"></i>
                {{ $t("wechat") }}iloveos
              </p>
            </div>
          </div>
        </header>
        <div class="body">
          <!--section-->
          <mySection :theme="currentTheme">
            <template v-slot:title>
              <i class="fa fa-caret-right"></i
              ><span class="section-title">基本信息</span>
            </template>
            <template v-slot:detail>
              <p>
                <span class="basic-info-item-title">个人信息</span>
                <span style="font-weight:300">孙果 / 男 / 20岁</span>
              </p>
              <p>
                <span class="basic-info-item-title">教育经历</span
                ><span style="font-weight:300">华南理工大学 2021届本科</span>
              </p>
              <p>
                <span class="basic-info-item-title">英语水平</span>
                <span style="font-weight:300">CET-6</span>
              </p>
              <p>
                <span class="basic-info-item-title">博客地址</span>

                <a
                  href="https://guohere.com"
                  target="_blank"
                  style="font-weight:300;text-decoration:none"
                  >guohere.com</a
                >
              </p>
              <p>
                <span class="basic-info-item-title">Github主页</span>
                <a
                  href="https://github.com/GoJam11"
                  target="_blank"
                  style="font-weight:300;text-decoration:none"
                  >github.com/GoJam11</a
                >
              </p>
              <!-- <p>
                 <span style="font-weight:500;margin-right:10px">主要课程：</span>
              </p>
              <div class="detail">
                <Progress :theme="currentTheme" percent="60%">
                  <template v-slot:name>
                    <p>计算机网络</p>
                  </template>
                </Progress>
                <Progress :theme="currentTheme" percent="60%">
                  <template v-slot:name>
                    <p>操作系统</p>
                  </template>
                </Progress>
                <Progress :theme="currentTheme" percent="60%">
                  <template v-slot:name>
                    <p>数据结构</p>
                  </template>
                </Progress>
                <Progress :theme="currentTheme" percent="50%">
                  <template v-slot:name>
                    <p>数据库应用</p>
                  </template>
                </Progress>
                <Progress :theme="currentTheme" percent="50%">
                  <template v-slot:name>
                    <p>计算机组成原理</p>
                  </template>
                </Progress>
                <Progress :theme="currentTheme" percent="50%">
                  <template v-slot:name>
                    <p>计算机安全</p>
                  </template>
                </Progress>
              </div>-->
            </template>
          </mySection>
          <mySection :theme="currentTheme">
            <template v-slot:title>
              <i class="fa fa-caret-right"></i
              ><span class="section-title">实习经历</span>
            </template>
            <template v-slot:detail>
              <TimeLine :theme="currentTheme" class="hover-img">
                <template v-slot:title>
                  <p class="project-time">2020.7 -  暑期</p>
                  <h2 class="project-item-title">腾讯 TEG（深圳）</h2>
                </template>
                <template v-slot:content>
                  <p style="font-weight:300;margin-top:6px;margin-bottom:-20px">
                    尚未开始。
                  </p>
                </template>
              </TimeLine>
              <TimeLine :theme="currentTheme" class="hover-img">
                <template v-slot:title>
                  <p class="project-time">2020.4 - 2020.6 暑期</p>
                  <h2 class="project-item-title">美团点评 到店（上海）</h2>
                </template>
                <template v-slot:content>
                  <p style="font-weight:300;margin-top:6px">
                    参与实现App端团购管理模块前端需求，包括添加功能、界面改版、BUG修复、部分代码重构。我负责的模块由RN编写，与Native结合紧密。这段实习经历不仅让我有机会学习React、RN、Redux，还熟悉了如何与产品、后端协调，以及应该遵循什么样的Git协作规范。
                  </p>
                </template>
              </TimeLine>
            </template>
          </mySection>
          <mySection :theme="currentTheme">
            <template v-slot:title>
              <i class="fa fa-caret-right"></i
              ><span class="section-title">项目经验</span>
            </template>
            <template v-slot:detail>
              <div style="flex-direction:column">
                <TimeLine :theme="currentTheme" class="hover-img">
                  <template v-slot:title>
                    <p class="project-time">2019.7</p>
                    <h2 class="project-item-title">论坛后台管理系统</h2>
                  </template>
                  <template v-slot:content>
                    <p style="font-weight:300;margin-top:6px">
                      配合Node后端提供的API文档，实现后台对论坛、用户、帖子、回复与评论的管理，左边的系统用于结合前端页面模板展示不同信息。两套系统的前端由我独立完成。<br />
                      在这段项目经历中熟悉了restful
                      api前后端的开发、设计，ES6语法和实际应用，以及前端路由与状态管理。开发中遇到白屏问题，可能是高版本语法未被转译，配置babel后解决。还遇到了CSS样式不加载的问题，发现是返回的Content-Type不对，重启server后正常。
                    </p>
                    <div>
                      <img
                        src="../assets/panel1.png"
                        width="200px"
                        height="120px"
                        style="border-radius:5px;margin:5px;margin-left:0;border:solid #9f9ff5 1px"
                      />
                      <img
                        src="../assets/panel3.png"
                        width="200px"
                        height="120px"
                        style="border-radius:5px;margin:5px;border:solid #9f9ff5 1px"
                      />
                    </div>
                  </template>
                </TimeLine>
                <TimeLine :theme="currentTheme">
                  <template v-slot:title>
                    <p class="project-time">2018.9</p>
                    <h2 class="project-item-title">二手市场小程序</h2>
                  </template>
                  <template v-slot:content>
                    <p style="font-weight:300;margin-top:6px">
                      未上线，功能完善的二手交易平台，我负责使用组件化的方式开发小程序前端，与Spring后端进行交互。
                      <br />微信小程序开发主要参考官方文档，从这个项目中了解了小程序开发与web网页的区别，比如原生组件和web组件组合，以及不标准的API和不支持DOM操作。
                    </p>
                    <div>
                      <img
                        src="../assets/market1.png"
                        width="115px"
                        height="200px"
                        style="border-radius:5px;margin:5px;margin-left:0;border:solid #9f9ff5 1px"
                      />
                      <img
                        src="../assets/market2.png"
                        width="115px"
                        height="200px"
                        style="border-radius:5px;margin:5px;border:solid #9f9ff5 1px"
                      />
                      <img
                        src="../assets/market3.png"
                        width="115px"
                        height="200px"
                        style="border-radius:5px;margin:5px;border:solid #9f9ff5 1px"
                      />
                    </div>
                  </template>
                </TimeLine>
                <TimeLine :theme="currentTheme">
                  <template v-slot:title>
                    <h2 class="project-item-title">
                      简历
                      <!--<a href="https://github.com/GoJam11/Resume/">
                        <i class="fa fa-github" style="margin-left:.5em"></i>
                      </a>-->
                    </h2>
                  </template>
                  <template v-slot:content>
                    <p style="font-weight:300;margin-top:6px">
                      参考前端大牛的简历，简洁优雅。简历是一个由vue-cli创建的项目，使用Stylus预处理器编辑样式，包括时间轴等多个组件，支持切换主题和语言。兼容iPad与桌面端的Chrome、Safari等现代浏览器。<!--<a style="display:inline;text-decoration:none;color:#676767" href="https://resume.local.guohere.com">(https://resume.local.guohere.com)</a>-->
                    </p>
                  </template>
                </TimeLine>
                <!--  <TimeLine :theme="currentTheme">
                  <template v-slot:title>
                    <h2 class="project-item-title">
                      Vue博客
                      <a href="https://github.com/GoJam11/el-wordpress-blog">
                        <i class="fa fa-github" style="margin-left:.5em"></i>
                      </a>
                    </h2>
                  </template>
                  <template v-slot:content>
                    <p style="font-weight:300;margin-top:6px">
                      以Wordpress作为<b>后端</b>，利用RESTful接口获取文章数据并展示。项目中使用了axios、element
                      ui，通过正则和history
                      api路由，先后以JSONP、服务器代理、设置CORS头的形式解决跨域问题，同时允许在不同分辨率下呈现不同的排版效果。
                    </p>
                  </template>
                </TimeLine>-->
                <TimeLine :theme="currentTheme">
                  <template v-slot:title>
                    <h2 class="project-item-title">
                      更多
                      <!--<a href="https://github.com/GoJam11/el-wordpress-blog">
                        <i class="fa fa-github" style="margin-left:.5em"></i>
                      </a>-->
                    </h2>
                  </template>
                  <template v-slot:content>
                    <p
                      style="display:flex!important;margin-top:6px;font-weight:300;"
                    >
                      <a
                        class="a-hl"
                        style="margin-right:12px"
                        href="https://demo.guohere.com/backgammon/"
                        target="_blank"
                        >·五子棋AI：对棋局估分</a
                      >

                      <a
                        class="a-hl"
                        style="margin-right:12px"
                        href="https://manual.local.guohere.com/"
                        target="_blank"
                        >·前端笔记：学习后整理的文档</a
                      >
                      <a
                        class="a-hl"
                        style="margin-right:12px"
                        href="https://demo.guohere.com/chat/"
                        target="_blank"
                        >·聊天（调用API实现）</a
                      >
                      <a
                        class="a-hl"
                        style="margin-right:12px"
                        href="http://demo.guohere.com/blocks/"
                        target="_blank"
                        >·拼图</a
                      >
                      <a
                        class="a-hl"
                        style="margin-right:12px"
                        href="https://note.guohere.com/"
                        target="_blank"
                        >·留言板（支持QQ登陆）</a
                      >
                    </p>
                    <div>
                      <img
                        src="../assets/five.png"
                        height="120px"
                        style="border-radius:5px;margin:5px;margin-left:0;border:solid #9f9ff5 1px"
                      />
                      <img
                        src="../assets/md.png"
                        height="120px"
                        style="border-radius:5px;margin:5px;border:solid #9f9ff5 1px"
                      />
                      <img
                        src="../assets/chat.png"
                        height="120px"
                        style="border-radius:5px;margin:5px;border:solid #9f9ff5 1px"
                      />
                      <img
                        src="../assets/blocks.png"
                        height="120px"
                        style="border-radius:5px;margin:5px;border:solid #9f9ff5 1px"
                      />
                      <img
                        src="../assets/note.png"
                        height="120px"
                        style="border-radius:5px;margin:5px;border:solid #9f9ff5 1px"
                      />
                    </div>
                  </template>
                </TimeLine>
              </div>
            </template>
          </mySection>
          <mySection :theme="currentTheme">
            <template v-slot:title>
              <i class="fa fa-caret-right"></i
              ><span class="section-title">技能</span>
            </template>
            <template v-slot:detail>
              <div class="detail" style="flex-direction:column">
                <TimeLine :theme="currentTheme">
                  <template v-slot:title>
                    <h2 class="project-item-title" style="margin-top:15px">
                      HTML/CSS
                    </h2>
                  </template>
                  <template v-slot:content>
                    <p
                      style="font-weight:200;margin-bottom:-30px;margin-top:6px"
                    >
                      熟悉CSS，能够完成兼容不同设备和复杂的布局，使用Stylus等预处理工具。常用Flex布局，CSS动画，拥有准确复现设计稿的能力。
                    </p>
                  </template>
                </TimeLine>
                <TimeLine :theme="currentTheme">
                  <template v-slot:title>
                    <h2 class="project-item-title" style="margin-top:15px">
                      JavaScript/ESNext
                    </h2>
                  </template>
                  <template v-slot:content>
                    <p
                      style="font-weight:200;margin-bottom:-30px;margin-top:6px"
                    >
                      熟悉原生JS中数组、字符串、对象常用方法，知晓常见设计模式，理解JS的异步机制、原型机制与this指向。
                    </p>
                  </template>
                </TimeLine>
                <TimeLine :theme="currentTheme">
                  <template v-slot:title>
                    <h2 class="project-item-title" style="margin-top:15px">
                      Vue.JS、React等框架
                    </h2>
                  </template>
                  <template v-slot:content>
                    <p
                      style="font-weight:200;margin-bottom:-30px;margin-top:6px"
                    >
                      能使用Vue编写不同需求的代码，熟悉Vue及Vue的生态。了解React组件书写与Context、Hooks等API，使用过Redux与HOC。也使用Lodash、JQuery、CSS
                      in JS相关库。
                    </p>
                  </template>
                </TimeLine>
                <TimeLine :theme="currentTheme">
                  <template v-slot:title>
                    <h2 class="project-item-title" style="margin-top:15px">
                      Webpack、Git、NPM等工具
                    </h2>
                  </template>
                  <template v-slot:content>
                    <p
                      style="font-weight:300;margin-bottom:-30px;margin-top:6px"
                    >
                      熟悉Git，了解Webpack等辅助开发/自动化及打包工具，能配合团队编写清晰的代码。
                    </p>
                  </template>
                </TimeLine>
                <TimeLine :theme="currentTheme">
                  <template v-slot:title>
                    <h2 class="project-item-title" style="margin-top:15px">
                      其他
                    </h2>
                  </template>
                  <template v-slot:content>
                    <p
                      style="font-weight:300;margin-bottom:10px;margin-top:6px"
                    >
                      有能力搭建前后端完整的项目，持有VPS并长期运行网站，有一定Linux使用经验，包括Web服务器配置（LAMP和LNMP）与Docker等，会使用Vim等命令行工具。会简单使用C++、Python，用Python爬取过数据。
                    </p>
                  </template>
                </TimeLine>
              </div>
            </template>
          </mySection>

          <div style="margin:15px;justify-content:center;align-items:center">
            <span style="font-weight:500;font-size:22px;"
              >made with<span
                style="color:#40b883;margin-left:6px;margin-right:6px"
                >vue.js</span
              ></span
            >
          </div>
        </div>
      </div>
    </div>
    <!--<div
      ref="switch"
      v-on:mousemove="move"
      v-on:mouseleave="leave"
      class="switch"
    >
      <span style="pointer-events:none">中文</span>
      <span style="color:white;pointer-events:none">EN</span>
    </div>-->
    <div :style="cswitch" class="color-switch" v-on:click="changeTheme"></div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
import mySection from "./Section";
import TimeLine from "./TimeLine";
//import Progress from "./Progress";
import MyHeader from "./ResumeBlock/Header";
export default {
  components: {
    mySection,
    TimeLine,
    //Progress,
    MyHeader,
  },
  data: () => {
    return {
      loading: true,
      cswitch: {
        background: "#2faffe",
      },
      currentTheme: "light",
      style: {
        header: {
          background: "",
        },
      },
    };
  },
  methods: {
    move(e) {
      e.srcElement.style.background =
        "linear-gradient(90deg, black " +
        e.offsetX +
        "%, #ffffff " +
        e.offsetX +
        "%)";

      if (e.offsetX <= 50) {
        this.$i18n.locale = "cn";
      } else {
        this.$i18n.locale = "en";
      }
    },
    leave(e) {
      if (e.offsetX <= 0) {
        e.srcElement.style.background =
          "linear-gradient(90deg, black " + 0 + "%, #ffffff " + 0 + "%)";
      } else if (e.offsetX >= 100) {
        e.srcElement.style.background =
          "linear-gradient(90deg, black " + 100 + "%, #ffffff " + 100 + "%)";
      }
    },
    scroll(e) {},
    changeTheme() {
      if (this.currentTheme == "light") {
        this.currentTheme = "blue";
        //#267aff
        this.cswitch.background = "#6195FF";
        this.style.header.background = "#6195FF";
      } else {
        this.currentTheme = "light";
        this.cswitch.background = "rgb(64, 184, 131)";

        this.style.header.background = "rgb(64, 184, 131)";
      }
    },
  },
  created() {
    let that = this;
    setTimeout(() => {
      that.loading = false;
      //console.log("allow scroll");
    }, 2000);
  },
  mounted() {
    /*if (Math.random() > 0.5) {
      this.changeTheme();
    }*/
    this.changeTheme();
  },
};
</script>

<style lang="stylus" scoped>
primary-color = #007eff; // #1caef7
header-color = linear-gradient(180deg, #5ad6ff, #009dff); // linear-gradient(180deg, #8edaf3, #26acff); // #1caef7 #267aff
light-color = #007eff;
progress-color = #017eff; // #1caef7
progress-bg = #017eff7d;

.container {

  //overflow: scroll;
  width: 100%;
  //height: calc(100% - 44px);
  min-height:100%;
  justify-content: center;
  background: rgba(128, 128, 128, 0.1);
  animation-name: overflow;
  animation-duration: 3s;

  &:hover {
  }

  .mobile-loading {
    display: none;
  }

  @media screen and (max-width: 994px) {
    .mobile-loading {
      position: absolute;
      width: 100%;
      height: 100%;
      background: white;
      z-index: 2;
      display: block;
    }
  }

  .loading {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0px;
    background: white;
    animation: loading;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    z-index: 2;

    .circle {
      animation: loading 0.5s;
      animation-iteration-count: 6;
      animation-fill-mode: forwards;
      width: 40px;
      height: 40px;
      border-radius: 20px;

      &.lg {
        animation-name: lg;
        background: #3a88ff8c;
        position: absolute;
        top: calc(50% - 20px);
        left: calc(50% - 20px);
      }

      &.sm {
        animation-name: sm;
        background: #3685ff;
      }
    }
  }

  @keyframes overflow {
    0% {
      overflow: hidden;
    }

    100% {
      overflow: scroll;
    }
  }

  @keyframes lg {
    100% {
      transform: scale(2);
    }
  }

  @keyframes sm {
    100% {
      transform: scale(0.3);
    }
  }

  @keyframes loading {
    100% {
      opacity: 0;
      // transform :translate(-100%,0px)
      display: none;
    }
  }
}

.card {
  // height: 900px;
  width: 60%;
  border-radius: 6px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.149);
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 960px;
  height: card-height = max-content;
  background: white;

  .header {
    height: 263px;
    width: 100%;
    background: header-color;

    .left {
      color: white;
      font-size: 54px;
      width: 30%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-weight:400

      // flex-wrap: wrap;
      p {
        margin: 0;
      }

      .s {
        font-size: 28px;
      }
    }

    .right {
      color: white;
      font-size: 22px;
      padding: 15px 0px;
      flex-grow: 1;
      width: 70%;

      p {
        margin-bottom: 0;
        margin-top: 0.8em;

        &:first-child {
          margin-top: 10px;
        }
      }

      .section {
        font-size: 22px;
      }

      .right-l {
        font-size: 16px;
        flex-basis: 60%;
        flex-direction: column;
        justify-content: center;
        font-weight:300

        .intro {
          text-indent: 2em;
          padding-left: 1em;
          padding-right: 3em;
        }
      }

      .right-r {
        font-size: 16px;
        flex-basis: 40%;
        flex-direction: column;
        font-weight:300
      }
    }
  }

  .body {
    flex-direction: column;
    padding: 0 5px;

    p {
      margin-top: 0.8em;
      margin-bottom: 0;
    }
  }
}

.global {
  display: flex;
  justify-content: center;
}

* {
  display: flex;
}

p, li, span, a {
  font-family: PingFang SC, Avenir, Microsoft YaHei, Helvetica, Arial, sans-serif;
}

.switch {
  //position: absolute;
  position:fixed;
  top: 50px;
  right: 20px;
  width: 100px;
  height: 30px;
  border-radius: 10px;
  box-shadow: 0 0 4px 0 #00000017;
  justify-content: space-around;
  font-weight: bold;
  align-items: center;
  background: white;
}

i {
  align-items: center;
}
</style>

<style>
h2,
p {
  cursor: default;
}
b {
  display: inline !important;
}
*::selection {
  background: rgba(0, 158, 255, 0.32) !important;
}

.color-switch {
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 6px;
  bottom: 10px;
  left: 10px;
  background: #2faffe;
}

.detail {
  width: 100%;
  justify-content: flex-start;
  overflow: hidden;
  & > div {
    flex-basis: 1;
  }
}

.hover-img:hover::before {
  //content:'img';
  position: relative;

  //left:45px;
}

.a-hl:visited {
  color: #676767;
  text-decoration: none !important;
}
.a-hl {
  color: #676767;
  text-decoration: none !important;
}

.basic-info-item-title {
  font-weight: 500;
  margin-right: 10px;
  color: #424242;
}
.section-title {
  font-size: 23px;
  font-weight: 500;
  margin-left: 10px;
  color: #2f2f2f;
}
.project-item-title {
  color: #2f2f2f;
  font-size: 18px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 6px !important;
}
.project-time {
  color: gray;
  font-weight: 300;
  font-size: 13px;
}
</style>
