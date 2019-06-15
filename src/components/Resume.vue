<template>
  <div class="global" v-on:mousewheel="scroll">
    <div class="container">
      <div class="loading" v-if="loading">
        <div class="circle lg">
          <div class="circle sm"></div>
        </div>
      </div>
      <div class="card">
        <header class="header">
          <div class="left">
            <p>{{$t("name")}}</p>
            <p class="s">{{$t("s")}}</p>
          </div>
          <div class="right">
            <div class="right-l">
              <p class="intro">我是一个由衷热爱前端与交互的前端er，梦想是成为一名前端工程师。</p>
              <p class="intro">目前正在寻找前端工程师实习岗位的工作机会，希望借此为xxxx献上我的一点绵薄之力。</p>
            </div>
            <div class="right-r">
              <p class="section">
                <i class="fa fa-bookmark fa-fw"></i>{{$t("intention.t")}}
              </p>
              <p>{{$t("intention.c")}}</p>
              <p class="section">
                <i class="fa fa-bookmark fa-fw"></i>{{$t("contact")}}
              </p>
              <p>
                <i class="fa fa-envelope fa-fw"></i>{{$t("email")}}iloveos@live.com
              </p>
              <p>
                <i class="fa fa-phone fa-fw"></i>{{$t("tel")}}18651403158
              </p>
              <p>
                <i class="fa fa-wechat fa-fw"></i> {{$t("wechat")}}iloveos
              </p>
            </div>
          </div>
        </header>
        <div class="body">
          <div class="section">
            <p class="title">
              <i class="fa fa-bookmark fa-fw"></i>基本信息
            </p>
            <div class="detail">
              <p>个人信息：孙果 / 男 / 19岁 / 大二</p>
              <p>教育经历：华南理工大学 广告学</p>
              <p>英语水平：CET-6 530</p>
              <p>
                博客地址：
                <a href="https://guohere.com" target="_blank">https://guohere.com</a>
              </p>
              <p>
                Github主页：
                <a
                  href="https://github.com/GoJam11"
                  target="_blank"
                >https://github.com/GoJam11</a>
              </p>
            </div>
          </div>
          <div class="section">
            <p class="title">
              <i class="fa fa-bookmark fa-fw"></i>技能
            </p>
            <div class="detail">
              <div class="progress-detail">
                <p>HTML</p>
                <div class="progress five"></div>
              </div>
              <div class="progress-detail">
                <p>CSS</p>
                <div class="progress seven"></div>
              </div>
              <div class="progress-detail">
                <p>JS</p>
                <div class="progress six"></div>
              </div>
              <div class="progress-detail">
                <p>Vue.JS</p>
                <div class="progress six"></div>
              </div>
            </div>
            <p style="padding-left:40px;font-style:italic">扩展</p>
            <div class="detail">
              <div class="progress-detail">
                <p class="long">Cocos Creater</p>
                <div class="progress three"></div>
              </div>
              <div class="progress-detail">
                <p>小程序</p>
                <div class="progress five"></div>
              </div>
              <div class="progress-detail">
                <p>PHP</p>
                <div class="progress three"></div>
              </div>
            </div>
            <div class="detail">
              <div class="content" style="margin-top:30px">
                <ul>
                  <li>熟悉CSS，能够完成兼容不同设备和复杂的布局，使用Stylus等预处理工具</li>
                  <li>能使用Vue编写不同需求的代码，熟悉Vue及Vue的生态，能够在文档的协助下配置环境</li>
                  <li>熟悉Git，了解Webpack等辅助开发/自动化及打包工具，能配合团队编写清晰的代码</li>
                  <li>有能力搭建前后端完整的项目，持有VPS并长期运行网站，有一定Linux使用经验，包括Web服务器配置与Docker等，会使用Vim等命令行工具</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="section">
            <p class="title">
              <i class="fa fa-bookmark fa-fw"></i>项目经验
            </p>
            <div class="detail-project">
              <div class="project">
                <div class="pj-title">
                  <h2>华工二手市场小程序</h2>
                </div>
                <div class="pj-content">
                  <p>我做的第一个官方的小程序，虽然还没有上线，但是学到了很多前端的基础知识。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="switch" v-on:mousemove="move" v-on:mouseleave="leave" class="switch">
      <span style="pointer-events:none">中文</span>
      <span style="color:white;pointer-events:none">EN</span>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data: () => {
    return {
      loading: true
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
    }
  },
  created() {
    let that = this;
    setTimeout(() => {
      that.loading = false;
    }, 3000);
  }
};
</script>

<style lang="stylus" scoped>
.container {
  width: 100%;
  justify-content: center;
  background: rgba(128, 128, 128, 0.1);

  &:hover {
  }

  .loading {
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    animation: loading 3s;
    animation-fill-mode: forwards;

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
    100% {
      opacity: 0;
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
  background: white;

  .header {
    height: 263px;
    width: 100%;
    background: #007eff;

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
        flex-basis: 70%;
        flex-direction: column;
        justify-content: center;

        .intro {
          text-indent: 2em;
          padding-left: 2em;
          padding-right: 2em;
        }
      }

      .right-r {
        font-size: 16px;
        flex-basis: 50%;
        flex-direction: column;
      }
    }
  }

  .body {
    flex-direction: column;

    p {
      margin-top: 0.8em;
      margin-bottom: 0;
    }

    .section {
      padding: 0 20px;
      flex-direction: column;
      margin-bottom: 2em;

      .title {
        font-size: 22px;
        color:#007eff
      }

      .detail-project {
        .project {
          flex-direction: column;

          .pj-title {
              margin-left:45px
              position relative
              h2{
                  margin-bottom:0px
              }
            &::before {
              content: '';
              width: 15px;
              height:15px;
              margin-right: 5px;
              background: #017dff;
              position absolute
              left:-25px
              top:27.5px
              border-radius:7.5px
              z-index 1
              //height: 100%;
            }
          }

          .pj-content {
              margin-left:45px
              position relative
              text-indent 2em
              &::before {
              content: '';
              width: 5px;
              height:calc(100% + 25px)
              margin-right: 5px;
              background: #8bc0ff;
              position absolute
              left:-20px
              top:-25px
              border-radius:2.5px
              
              //height: 100%;
            }
          }
        }
      }

      .detail {
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        font-size: 15px;

        &>p {
          padding-left: 30px;
          flex-basis: 100%;

          a {
            color: black;
          }
        }

        .content {
          padding-left: 0px;
          font-size: 15px;

          ul {
            display: block;

            li {
              display: list-item;
              margin-bottom: 1em;
              padding-right: 60px;
            }

            li:last-child {
              margin-bottom: 0em;
            }
          }
        }

        .progress-detail {
          align-items: center;
          justify-content: center;
          margin-top: 0.8em;
          flex-basis: 33.33%;

          p {
            align-items: center;
            margin: 0;
            width: 40px;
            white-space: nowrap;

            &.long {
              width: 90px;
            }
          }

          .progress {
            width: 120px;
            height: 14px;
            border-radius: 7px;
            margin-left: 1em;

            &.five {
              background: linear-gradient(to right, #017eff 50%, #017eff7d 0%);
            }

            &.seven {
              background: linear-gradient(to right, #017eff 70%, #017eff7d 0%);
            }

            &.six {
              background: linear-gradient(to right, #017eff 60%, #017eff7d 0%);
            }

            &.three {
              background: linear-gradient(to right, #017eff 30%, #017eff7d 0%);
            }
          }
        }
      }
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
