<template>
  <div class="container">
    <div class="loading">
      <div class="circle lg">
        <div class="circle sm"></div>
      </div>
    </div>

    <div class="card">
      <div @click="changeTheme" style="cursor:">
        <Header :backgroundColor="currentColor" :basicInfo="resume.basicInfo" @click="changeTheme"></Header>
      </div>
      <div class="body">
        <!--section-->
        <Section :theme="currentColor">
          <template v-slot:title>{{resume.basicInfo.title}}</template>
          <template v-slot:detail>
            <p v-for="item in resume.basicInfo.items" :key="item.title">
              <span class="basic-info-item-title">{{item.title}}</span>
              <a
                v-if="item.link"
                :href="item.link"
                target="_blank"
                style="font-weight:300;text-decoration:none;cursor:pointer"
              >{{item.content}}</a>
              <span v-else style="font-weight:300">{{item.content}}</span>
            </p>
          </template>
        </Section>
        <Section :theme="currentColor" v-for="module in resume.module" :key="module.moduleName">
          <template v-slot:title>{{module.moduleName}}</template>
          <template v-slot:detail>
            <TimeLine
              v-for="block in module.blocks"
              :key="block.title"
              class="hover-img"
              style="margin-bottom:0px;"
            >
              <template v-if="block.time" v-slot:time>{{block.time}}</template>
              <template v-slot:title>{{block.title}}</template>
              <template v-slot:content>
                <p style="font-weight:300;margin-top:6px;white-space:pre-line">{{block.content}}</p>
                <div v-if="block.html" v-html="block.html"></div>
                <div v-if="block.images" style="overflow:auto">
                  <img
                    v-for="img in block.images"
                    :key="img.url"
                    :src="img.url"
                    :width="img.w"
                    :height="img.h"
                    style="border-radius:5px;margin:5px;margin-left:0;margin-right:10px;border:solid #9f9ff5 1px"
                  />
                </div>
              </template>
            </TimeLine>
          </template>
        </Section>

        <div style="margin:15px;justify-content:center;align-items:center;margin-bottom:30px">
          <span style="font-weight:500;font-size:22px;">
            made with
            <span style="color:#40b883;margin-left:6px;margin-right:6px">vue.js</span>
          </span>
        </div>
      </div>
    </div>

    <div :style="{ backgroundColor: currentColor }" class="color-switch" v-on:click="changeTheme"></div>
  </div>
</template>

<script>
import Section from "./Section";
import TimeLine from "./TimeLine";
import Header from "./ResumeBlock/Header";
export default {
  components: {
    Section,
    TimeLine,
    Header,
  },
  data: () => {
    return {
      currentTheme: "light",
      currentColor: "#6195FF",
      resume: {},
      resumeEn: {
        basicInfo: {
          title:'About me',
          const_contact:'Contact me',
          const_email:'E-mail: ',
          const_phone:'Phone: ',
          const_wechat:'Wechat: ',
          name: "Guo Sun",
          job: "Front-end Engineer",
          description:
            "My dream is to be a front-end development engineer. I'm looking for a job at the moment and hope to give me an opportunity to work with you.",
          email: "iloveos@live.com",
          telephone: "18651403158",
          wechat: "iloveos",
          items: [
            {
              title: "Name",
              content: "Guo Sun",
            },
            {
              title: "Education",
              content:
                "South China University of Technology (Bachelor of Arts, graduate at July 2021)",
            },
            {
              title: "Language skill",
              content: "English(normal)",
            },
            {
              title: "Blog",
              content: "guohere.com",
              link: "https://guohere.com",
            },
            {
              title: "Github",
              content: "github.com/GoJam11",
              link: "https://github.com/GoJam11",
            },
          ],
        },
        module: [
          {
            moduleName: "Projects",
            blocks: [
              {
                time: "2020.7 - Summer internship",
                title: "Tencent Tgit",
                content: `Tencent Git front-end engineer. I'm working on adding feature、fixing bugs and migration to ES6.
                · Organize modules by page and usage
                · Migrate to ES6
                `,
              },
              {
                time: "2020.4 - 2020.6 Summer internship",
                title: "Dianping Merchants (Meituan dianping's App)",
                content: `Dianping Merchants front-end engineer. I'm working on adding feature, fixing bugs, implementing UI design, refactoring code on group buying management module.
                · Based on the customized modular framework, responsive layout and adaptation to different models
                · Data acquisition and exchange based on customized form framework
                · Using Redux and HOC to share state between components
                · Flexible use of rebase and cherry picker to assist development
                `,
              },
              {
                time: "2019.7 Internship",
                title: "Backstage of Forum System",
                content: `Standard forum management system‘s administrator interface.
                  · State management based on VueX
                  · Routing based on VueRouter
                  · Page turning, upload, cascade selector and other functions
                  · Back end built by express and MySQL
                  · Use promise to request resources and determine whether the page is loaded
                  · RESTful APIs
                  · Using Axios interceptor and token for authentication`,
                images: [
                  {
                    url: require("../assets/panel1.png"),
                    w: 200,
                    h: 120,
                  },
                  {
                    url: require("../assets/panel3.png"),
                    w: 200,
                    h: 120,
                  },
                ],
              },
              {
                time: "2018.9 School",
                title: "Second-hand Market Mini-program",
                content: `Online second-hand market, you can browse, collect and publish goods, excluding purchase.
                  · Convert the design draft into a mini-program
                  · Component-based application
                  · Using wechat API`,
                images: [
                  {
                    url: require("../assets/market1.png"),
                    w: 115,
                    h: 200,
                  },
                  {
                    url: require("../assets/market2.png"),
                    w: 115,
                    h: 200,
                  },
                  {
                    url: require("../assets/market3.png"),
                    w: 115,
                    h: 200,
                  },
                ],
              },
              {
                title: "Resume",
                content:
                  "This is a Vue project. The components are reusable, the style is written in stylus, and the data is from JSON. It's a responsive web page.",
              },
              {
                title: "Others",
                content:
                  "Gomoku AI、message board、3x3 jigsaw、Resource monitoring and chat room based on Socket.io",
                images: [
                  {
                    url: require("../assets/five.png"),
                    h: 120,
                  },
                  {
                    url: require("../assets/md.png"),
                    h: 120,
                  },
                  {
                    url: require("../assets/note.png"),
                    h: 120,
                  },
                  {
                    url: require("../assets/blocks.png"),
                    h: 120,
                  },
                ],
              },
            ],
          },
          {
            moduleName: "Skills",
            blocks: [
              {
                title: "HTML/CSS",
                content:
                  "Can layout for a variety of complex web pages.",
              },
              {
                title: "JavaScript/ESNext",
                content:
                  "Familiar with JS common methods, asynchronous, prototype chain, design pattern.",
              },
              {
                title: "Vue.JS and React",
                content:
                  "Use frameworks and libraries to writing applications.",
              },
              {
                title: "Webpack、Git、NPM and other tools",
                content:
                  "Work actively with the team.",
              },
              {
                title: "Others",
                content:
                  "Linux, C++, Python, etc.",
              },
            ],
          },
        ],
      },
      resumeCh: {
        basicInfo: {
          title:'基本信息',
          const_contact:'联系方式',
          const_email:'邮箱：',
          const_phone:'电话：',
          const_wechat:'微信：',
          name: "孙果",
          job: "Web前端工程师",
          description:
            "我是一个由衷热爱前端与交互的前端er，梦想是成为一名前端工程师。目前正在寻找前端工程师岗位的工作机会，希望借此为贵公司献上我的一点绵薄之力。",
          email: "iloveos@live.com",
          telephone: "18651403158",
          wechat: "iloveos",
          items: [
            {
              title: "个人信息",
              content: "孙果 / 男 / 20岁",
            },
            {
              title: "教育经历",
              content: "华南理工大学 2021届本科",
            },
            {
              title: "英语水平",
              content: "CET-6",
            },
            {
              title: "博客地址",
              content: "guohere.com",
              link: "https://guohere.com",
            },
            {
              title: "Github主页",
              content: "github.com/GoJam11",
              link: "https://github.com/GoJam11",
            },
          ],
        },
        module: [
          {
            moduleName: "项目经历",
            blocks: [
              {
                time: "2020.7 - 暑期实习 TEG，研发管理部",
                title: "腾讯工蜂",
                content: `腾讯“工蜂”Git系统前端开发。添加feature、参与项目ES6改造，同时接触了Spring MVC。
                · 以页面和功能组织依赖
                · 向工程化前端迁移
                `,
              },
              {
                time: "2020.4 - 2020.6 暑期实习 到店事业群，终端部门",
                title: "点评管家APP",
                content: `美团点评“点评管家”APP RN前端开发。我参与实现App端团购管理模块需求，包括添加功能、界面改版、BUG修复、部分代码重写。
                · 基于定制的模块化框架布局，响应式适配不同机型
                · 基于定制的表单框架获取、交换数据
                · 使用Redux与HOC在组件间传递信息
                · 灵活使用rebase与cherry-picker协助开发
                `,
              },
              {
                time: "2019.7 实习",
                title: "论坛后台管理系统",
                content: `某公司论坛后台前端开发。配合Node后端提供的API文档，独立实现后台对论坛、用户、帖子、回复与评论的管理，左边的系统用于配置前端活动页面。
                  · 基于VueX的全局状态管理
                  · 基于VueRouter的路由支持
                  · 实现翻页、上传、联动选择等功能
                  · 基于Express与MySQL的后端
                  · 利用Promise包装资源请求评估页面加载状态
                  · 纯RESTful风格的API
                  · 利用axios拦截器与token认证`,
                images: [
                  {
                    url: require("../assets/panel1.png"),
                    w: 200,
                    h: 120,
                  },
                  {
                    url: require("../assets/panel3.png"),
                    w: 200,
                    h: 120,
                  },
                ],
              },
              {
                time: "2018.9 组织",
                title: "二手市场小程序",
                content: `学生会二手市场小程序前端开发。未上线，功能完善的二手交易平台，包括浏览、收藏、发布商品，维护商品与个人信息。
                  · 准确复现设计稿
                  · 组件化开发
                  · 了解并应用wxAPI`,
                images: [
                  {
                    url: require("../assets/market1.png"),
                    w: 115,
                    h: 200,
                  },
                  {
                    url: require("../assets/market2.png"),
                    w: 115,
                    h: 200,
                  },
                  {
                    url: require("../assets/market3.png"),
                    w: 115,
                    h: 200,
                  },
                ],
              },
              {
                title: "简历",
                content:
                  "参考前端大牛的简历，简洁优雅。简历是一个由Vue-cli创建的项目，包括Module、Section等组件，使用Stylus预处理器编辑样式，支持切换主题、以JSON配置全部内容。兼容iPad与桌面端的Chrome、Safari等现代浏览器。\n另有React下编写的fullPage版简历，对onMouseWheel事件防抖，同时适配手势与滚轮。",
              },
              {
                title: "更多",
                content:
                  "五子棋AI、学习笔记、留言板、拼图、基于Socket.io的资源监控与聊天室等。",
                images: [
                  {
                    url: require("../assets/five.png"),
                    h: 120,
                  },
                  {
                    url: require("../assets/md.png"),
                    h: 120,
                  },
                  {
                    url: require("../assets/note.png"),
                    h: 120,
                  },
                  {
                    url: require("../assets/blocks.png"),
                    h: 120,
                  },
                ],
              },
            ],
          },
          {
            moduleName: "技能",
            blocks: [
              {
                title: "HTML/CSS",
                content:
                  "熟悉CSS，能够完成兼容不同设备和复杂的布局，使用Stylus等预处理工具。常用Flex盒布局，CSS动画，能准确复现设计稿。读过《CSS揭秘》等书籍，关注张鑫旭的博客。",
              },
              {
                title: "JavaScript/ESNext",
                content:
                  "熟悉原生JS中数组、字符串、对象常用方法，知晓常见设计模式，理解JS的异步机制、原型机制与this指向。正在阅读《JS高级编程指南（第三版）》。",
              },
              {
                title: "Vue.JS、React等框架",
                content:
                  "能使用Vue编写不同需求的代码，熟悉Vue及Vue的生态。了解React组件书写与Context、Hooks等API，使用过Redux与HOC。也使用Lodash、JQuery、CSS in JS相关库（如polished）。",
              },
              {
                title: "Webpack、Git、NPM等工具",
                content:
                  "熟悉Git，了解Webpack等辅助开发/自动化及打包工具，能配合团队编写清晰的代码。",
              },
              {
                title: "其他",
                content:
                  "能够用NodeJS搭建前后端完整的项目，持有VPS并长期运行网站，有一定Linux使用经验，包括Web服务器配置（LAMP和LNMP）与Docker等，会使用Vim等命令行工具。会简单使用C++、Python，用Python爬取过数据。",
              },
            ],
          },
        ],
      },
      en_color:"rgb(136 175 73)",
      cn_color:"rgb(99 122 171)"
    };
  },
  methods: {
    changeTheme() {
      if (this.currentColor == this.en_color) {
        //this.currentColor = "#6195FF";
        this.currentColor=this.cn_color
        this.resume = this.resumeCh;
        localStorage.setItem("lang", "cn");
      } else {
        this.currentColor = this.en_color;
        this.resume = this.resumeEn;
        localStorage.setItem("lang", "en");
      }
    },
  },
  beforeMount() {
    let lang = localStorage.getItem("lang");
    if (!lang) this.resume = this.resumeCh;
    switch (lang) {
      case "cn":
        //this.currentColor = "#6195FF";
        this.currentColor=this.cn_color
        this.resume = this.resumeCh;
        break;
      case "en":
        this.currentColor = this.en_color;
        this.resume = this.resumeEn;
        break;
      default:
        //this.currentColor = "#6195FF";
        this.currentColor=this.cn_color
        this.resume = this.resumeCh;
    }
  },
};
</script>

<style lang="stylus" scoped>
primary-color = #007eff;
header-color = linear-gradient(180deg, #5ad6ff, #009dff);
light-color = #007eff;
progress-color = #017eff;
progress-bg = #017eff7d;

.container {
  width: 100%;
  min-height: 100%;
  justify-content: center;
  background: #f2f2f2;

  .loading {
    position: fixed;
    width: 100%;
    height: 100%;
    bottom: 0px;
    background: white;
    animation: loading;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    z-index: 2;
    display: none;

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
    0% {
      display: flex;
    }

    100% {
      opacity: 0;
    }
  }
}

.card {
  border-radius: 6px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.149);
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 960px;
  height: card-height = max-content;
  background: white;

  .body {
    flex-direction: column;
    padding: 0 5px;

    p {
      margin-top: 0.8em;
      margin-bottom: 0;
    }
  }
}

@media screen and (max-width: 996px) {
  .card {
    width: 100%;
    border-radius: 0px;
    margin: 0px;
  }

  .color-switch {
    display: none;
  }
}

* {
  display: flex;
  cursor: default;
}

p, li, span, a {
  font-family: PingFang SC, Avenir, Microsoft YaHei, Helvetica, Arial, sans-serif;
}

i {
  align-items: center;
}

h2, p {
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
  cursor: pointer;
  transition: 0.3s;

  &:active {
    opacity: 0.8;
  }
}

.basic-info-item-title {
  font-weight: 500;
  margin-right: 10px;
  color: #424242;
}

.project-item-title {
  color: #2f2f2f;
  font-size: 18px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 6px !important;
}

a {
  color: black;
}
</style>
