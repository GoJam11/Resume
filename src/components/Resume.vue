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
          <template v-slot:title>基本信息</template>
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
    Header
  },
  data: () => {
    return {
      currentTheme: "light",
      currentColor: "#6195FF",
      resume: {
        basicInfo: {
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
              content: "孙果 / 男 / 20岁"
            },
            {
              title: "教育经历",
              content: "华南理工大学 2021届本科"
            },
            {
              title: "英语水平",
              content: "CET-6"
            },
            {
              title: "博客地址",
              content: "guohere.com",
              link: "https://guohere.com"
            },
            {
              title: "Github主页",
              content: "github.com/GoJam11",
              link: "https://github.com/GoJam11"
            }
          ]
        },
        module: [
         
          {
            moduleName: "项目经验",
            blocks: [
              {
                time:"2020.7 - 暑期实习",
                title:"腾讯工蜂",
                content:`腾讯“工蜂”Git系统前端开发。添加feature、参与项目ES6改造，同时接触了Spring MVC。
                · 以页面和功能组织依赖
                · 向工程化前端迁移
                `
              },
              {
                time:"2020.4-2020.6 暑期实习",
                title:"点评管家APP",
                content:`美团点评终端部门前端开发。我参与实现App端团购管理模块需求，包括添加功能、界面改版、BUG修复、部分代码重写。
                · 基于定制的模块化框架布局，响应式适配不同机型
                · 基于定制的表单框架获取、交换数据
                · 使用Redux与HOC在组件间传递信息
                · 灵活使用rebase与cherry-picker协助开发
                `
              },
              {
                time: "2019.7",
                title: "论坛后台管理系统",
                content: `配合Node后端提供的API文档，实现后台对论坛、用户、帖子、回复与评论的管理，左边的系统用于结合前端页面模板展示不同信息。两套系统的前端由我独立完成。
                  在这段项目经历中熟悉了restfulapi前后端的开发、设计，ES6语法和实际应用，以及前端路由(VueRouter)与状态管理(VueX)。开发中遇到白屏问题，可能是高版本语法未被转译，配置babel后解决。还遇到了CSS样式不加载的问题，发现是返回的Content-Type不对，重启server后正常。
                  · `,
                images: [
                  {
                    url: require("../assets/panel1.png"),
                    w: 200,
                    h: 120
                  },
                  {
                    url: require("../assets/panel3.png"),
                    w: 200,
                    h: 120
                  }
                ]
              },
              {
                time: "2018.9",
                title: "二手市场小程序",
                content:
                  `未上线，功能完善的二手交易平台，我负责使用组件化的方式开发小程序前端，与Spring后端进行交互。
                  微信小程序开发主要参考官方文档，从这个项目中了解了小程序开发与web网页的区别，比如原生组件和web组件组合，以及不标准的API和不支持DOM操作。`,
                images: [
                  {
                    url: require("../assets/market1.png"),
                    w: 115,
                    h: 200
                  },
                  {
                    url: require("../assets/market2.png"),
                    w: 115,
                    h: 200
                  },
                  {
                    url: require("../assets/market3.png"),
                    w: 115,
                    h: 200
                  }
                ]
              },
              {
                title: "简历",
                content:
                  "参考前端大牛的简历，简洁优雅。简历是一个由Vue-cli创建的项目，包括Module、Section等组件，使用Stylus预处理器编辑样式，支持切换主题、以JSON配置全部内容。兼容iPad与桌面端的Chrome、Safari等现代浏览器。\n另有React下编写的fullPage版简历，对onMouseWheel事件防抖，同时适配手势与滚轮。"
              },
              {
                title: "更多",
                content: "五子棋AI、学习笔记、留言板、拼图、基于Socket.io的资源监控与聊天室等。",
                images: [
                  {
                    url: require("../assets/five.png"),
                    h: 120
                  },
                  {
                    url: require("../assets/md.png"),
                    h: 120
                  },
                  {
                    url: require("../assets/note.png"),
                    h: 120
                  },
                  {
                    url: require("../assets/blocks.png"),
                    h: 120
                  }
                ]
              }
            ]
          },
          {
            moduleName: "技能",
            blocks: [
              {
                title: "HTML/CSS",
                content:
                  "熟悉CSS，能够完成兼容不同设备和复杂的布局，使用Stylus等预处理工具。常用Flex盒布局，CSS动画，能准确复现设计稿。读过《CSS揭秘》等书籍，关注张鑫旭的博客。"
              },
              {
                title: "JavaScript/ESNext",
                content:
                  "熟悉原生JS中数组、字符串、对象常用方法，知晓常见设计模式，理解JS的异步机制、原型机制与this指向。正在阅读《JS高级编程指南（第三版）》。"
              },
              {
                title: "Vue.JS、React等框架",
                content:
                  "能使用Vue编写不同需求的代码，熟悉Vue及Vue的生态。了解React组件书写与Context、Hooks等API，使用过Redux与HOC。也使用Lodash、JQuery、CSS in JS相关库（如polished）。"
              },
              {
                title: "Webpack、Git、NPM等工具",
                content:
                  "熟悉Git，了解Webpack等辅助开发/自动化及打包工具，能配合团队编写清晰的代码。"
              },
              {
                title: "其他",
                content:
                  "能够用NodeJS搭建前后端完整的项目，持有VPS并长期运行网站，有一定Linux使用经验，包括Web服务器配置（LAMP和LNMP）与Docker等，会使用Vim等命令行工具。会简单使用C++、Python，用Python爬取过数据。"
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    changeTheme() {
      if (this.currentColor == "rgb(64, 184, 131)") {
        this.currentColor = "#6195FF";
      } else {
        this.currentColor = "rgb(64, 184, 131)";
      }
    }
  }
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
