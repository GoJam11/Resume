<template>
  <div class="global" v-on:mousewheel="scroll">
    <div class="container">
      <div class="loading" v-if="loading">
        <div class="circle lg">
          <div class="circle sm"></div>
        </div>
      </div>
      <div class="card">
        <header :style="style.header" class="header">
          <div class="left">
            <p>{{$t("name")}}</p>
            <p class="s">{{$t("s")}}</p>
          </div>
          <div class="right">
            <div class="right-l">
              <p class="intro">我是一个由衷热爱前端与交互的前端er，梦想是成为一名前端工程师。</p>
              <p class="intro">目前正在寻找前端工程师实习岗位的工作机会，希望借此为贵公司献上我的一点绵薄之力。</p>
            </div>
            <div class="right-r">
              <p class="section">
                <i class="fa fa-bookmark fa-fw"></i>
                {{$t("intention.t")}}
              </p>
              <p>{{$t("intention.c")}}</p>
              <p class="section">
                <i class="fa fa-bookmark fa-fw"></i>
                {{$t("contact")}}
              </p>
              <p>
                <i class="fa fa-envelope fa-fw"></i>
                {{$t("email")}}iloveos@live.com
              </p>
              <p>
                <i class="fa fa-phone fa-fw"></i>
                {{$t("tel")}}18651403158
              </p>
              <p>
                <i class="fa fa-wechat fa-fw"></i>
                {{$t("wechat")}}iloveos
              </p>
            </div>
          </div>
        </header>
        <div class="body">
          <!--section-->
          <mySection :theme="currentTheme">
            <template v-slot:title>
              <i class="fa fa-bookmark fa-fw"></i>基本信息
            </template>
            <template v-slot:detail>
              <p>
                <span style="font-weight:bold">个人信息：</span>孙果 / 男 / 19岁 / 大二
              </p>
              <p>
                <span style="font-weight:bold">教育经历：</span>华南理工大学
              </p>
              <p>
                <span style="font-weight:bold">英语水平：</span>CET-6 530
              </p>
              <p>
                <span style="font-weight:bold">博客地址：</span>

                <a href="https://guohere.com" target="_blank">https://guohere.com</a>
              </p>
              <p>
                <span style="font-weight:bold">Github主页：</span>
                <a href="https://github.com/GoJam11" target="_blank">https://github.com/GoJam11</a>
              </p>
            </template>
          </mySection>
          <mySection :theme="currentTheme">
            <template v-slot:title>
              <i class="fa fa-bookmark fa-fw"></i>技能
            </template>
            <template v-slot:detail>
              <div class="detail">
                <Progress :theme="currentTheme" percent="50%">
                  <template v-slot:name>
                    <p>HTML</p>
                  </template>
                </Progress>
                <Progress :theme="currentTheme" percent="70%">
                  <template v-slot:name>
                    <p>CSS</p>
                  </template>
                </Progress>
                <Progress :theme="currentTheme" percent="60%">
                  <template v-slot:name>
                    <p>JS</p>
                  </template>
                </Progress>
                <Progress :theme="currentTheme" percent="60%">
                  <template v-slot:name>
                    <p>Vue.JS</p>
                  </template>
                </Progress>
                <Progress :theme="currentTheme" percent="50%">
                  <template v-slot:name>
                    <p>小程序</p>
                  </template>
                </Progress>
                <Progress :theme="currentTheme" percent="30%">
                  <template v-slot:name>
                    <p>Cocos</p>
                  </template>
                </Progress>
           
              </div>

              <div class="detail" style="flex-direction:column">
                <TimeLine :theme="currentTheme">
                  <template v-slot:title>
                    <h2>HTML/CSS</h2>
                  </template>
                  <template v-slot:content>
                    <p>熟悉CSS，能够完成兼容不同设备和复杂的布局，使用Stylus等预处理工具</p>
                  </template>
                </TimeLine>
                <TimeLine :theme="currentTheme">
                  <template v-slot:title>
                    <h2>JavaScript与Vue.JS</h2>
                  </template>
                  <template v-slot:content>
                    <p>能使用Vue编写不同需求的代码，熟悉Vue及Vue的生态，能够在文档的协助下配置环境。也使用JS工具库（如Lodash）、JQuery、CSS in JS相关库、等库与包管理工具。</p>
                  </template>
                </TimeLine>
                <TimeLine :theme="currentTheme">
                  <template v-slot:title>
                    <h2>Webpack、Git、NPM等工具</h2>
                  </template>
                  <template v-slot:content>
                    <p>熟悉Git，了解Webpack等辅助开发/自动化及打包工具，能配合团队编写清晰的代码</p>
                  </template>
                </TimeLine>
                <TimeLine :theme="currentTheme">
                  <template v-slot:title>
                    <h2>其他</h2>
                  </template>
                  <template v-slot:content>
                    <p>有能力搭建前后端完整的项目，持有VPS并长期运行网站，有一定Linux使用经验，包括Web服务器配置与Docker等，会使用Vim等命令行工具</p>
                  </template>
                </TimeLine>
              </div>
            </template>
          </mySection>
          <mySection :theme="currentTheme">
            <template v-slot:title>
              <i class="fa fa-bookmark fa-fw"></i>项目经验
            </template>
            <template v-slot:detail>
              <div style="flex-direction:column">
                <TimeLine :theme="currentTheme">
                  <template v-slot:title>
                    <h2>华工二手市场小程序</h2>
                  </template>
                  <template v-slot:content>
                    <p>暂未上线，功能完善的二手交易平台，我负责使用组件化的方式开发前端，与Spring后端进行交互。</p>
                  </template>
                </TimeLine>
                <TimeLine :theme="currentTheme">
                  <template v-slot:title>
                    <h2>
                      简历Resume
                      <a href="https://github.com/GoJam11/Resume/">
                        <i class="fa fa-github" style="margin-left:.5em"></i>
                      </a>
                    </h2>
                  </template>
                  <template v-slot:content>
                    <p>参考前端大牛的简历，简洁优雅。</p>
                  </template>
                </TimeLine>
                <TimeLine :theme="currentTheme">
                  <template v-slot:title>
                    <h2>
                      Vue+Wordpress博客
                      <a href="https://github.com/GoJam11/el-wordpress-blog">
                        <i class="fa fa-github" style="margin-left:.5em"></i>
                      </a>
                    </h2>
                  </template>
                  <template v-slot:content>
                    <p>以Wordpress作为后端，利用RESTful接口获取文章数据并展示。</p>
                  </template>
                </TimeLine>
              </div>
            </template>
          </mySection>
          <div style="margin:15px;justify-content:center">
            <a href="https://resume.guohere.com">
              <img
                style="width:136px;height:20px;margin-right:20px"
                src="https://api.netlify.com/api/v1/badges/940f63c0-a6cd-4c48-925a-712150fc826b/deploy-status"
              >
            </a>

            <iframe
              src="https://ghbtns.com/github-btn.html?user=GoJam11&repo=Resume&type=star&count=true"
              frameborder="0"
              scrolling="0"
              width="170px"
              height="20px"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <div ref="switch" v-on:mousemove="move" v-on:mouseleave="leave" class="switch">
      <span style="pointer-events:none">中文</span>
      <span style="color:white;pointer-events:none">EN</span>
    </div>
    <div :style="cswitch" class="color-switch" v-on:click="changeTheme" ></div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
import mySection from "./Section";
import TimeLine from "./TimeLine";
import Progress from './Progress'
export default {
  components: {
    mySection,
    TimeLine,
    Progress
  },
  data: () => {
    return {
      loading: true,
      cswitch:{
        background:"#2faffe"
      },
      currentTheme:"light",
      style:{
        header:{
          background:''
        }
      }
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
    scroll(e) {
      console.log(e);
    },
    changeTheme(){
      if(this.currentTheme=="light"){
        this.currentTheme="blue"
        this.cswitch.background="#267aff";
        this.style.header.background="#267aff"
      }else{
        this.currentTheme="light"
        this.cswitch.background="#2faffe";
        
        this.style.header.background="linear-gradient(180deg, #5ad6ff, #009dff)"
        
      }
      
      console.log('clicked')
    }
  },
  created() {
    let that = this;
    setTimeout(() => {
      that.loading = false;
      console.log("allow scroll");
    }, 2000);
  }
};
</script>

<style lang="stylus" scoped>
primary-color = #007eff; // #1caef7
header-color = linear-gradient(180deg, #5ad6ff, #009dff);//linear-gradient(180deg, #8edaf3, #26acff); // #1caef7 #267aff
light-color = #007eff;
progress-color = #017eff; // #1caef7
progress-bg = #017eff7d;

.container {
  position: absolute;
  overflow: scroll;
  width: 100%;
  height: calc(100% - 44px);
  justify-content: center;
  background: rgba(128, 128, 128, 0.1);
  animation-name: overflow;
  animation-duration: 3s;

  &:hover {
  }

  .loading {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0px;
    background: white;
    animation: loading;
    animation-duration: 3s;
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
      width: 35%;
      justify-content: center;
      align-items: center;
      flex-direction: column;

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

        .intro {
          text-indent: 2em;
          padding-left: 32px;
          padding-right: 32px;
        }
      }

      .right-r {
        font-size: 16px;
        flex-basis: 40%;
        flex-direction: column;
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
  position: absolute;
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
p,
h2 {
  cursor: default;
}
*::selection {
  background: rgba(0, 158, 255, 0.32);
}

.color-switch{
  position:absolute;
  width:50px;
  height:50px;
  border-radius: 6px;
  bottom:10px;
  left:10px;
  background:#2faffe
}
</style>
