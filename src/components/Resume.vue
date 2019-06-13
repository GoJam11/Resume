<template>
  <div class="global" v-on:mousewheel="scroll">
    <div class="card">
      <header class="header">
        <div class="left">
          {{$t("name")}}
          <br>
          <span class="s">{{$t("s")}}</span>
        </div>
        <div class="right">
          <div class="right-l">
            <p class="intro">我是一个由衷热爱前端与交互的前端er，梦想是成为一名前端工程师。</p>
            <p class="intro">目前正在寻找前端工程师实习岗位的工作机会，希望借此为xxxx献上我的一点绵薄之力。</p>
          </div>
          <div class="right-r">
            <p class="section">
              <i class="fa fa-bookmark fa-fw"></i>求职意向
            </p>
            <p>{{$t("intention")}}</p>
            <p class="section">
              <i class="fa fa-bookmark fa-fw"></i>联系方式
            </p>
            <p>
              <i class="fa fa-envelope fa-fw"></i>邮箱：iloveos@live.com
            </p>
            <p>
              <i class="fa fa-phone fa-fw"></i>电话：18651403158
            </p>
            <p>
              <i class="fa fa-wechat fa-fw"></i> 微信：iloveos
            </p>
          </div>
        </div>
      </header>
      <div class="body">
        <div class="section">
          <p class="title">
            <i class="fa fa-bookmark fa-fw"></i>基本信息
          </p>
          <p class="detail"></p>
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
          <p style="padding-left:40px;font-style:italic">以下仅供参考</p>
          <div class="detail">
            <div class="progress-detail">
              <p class="long">Cocos Creater</p>
              <div class="progress three"></div>
            </div>
            <div class="progress-detail">
              <p >小程序</p>
              <div class="progress five"></div>
            </div>
            <div class="progress-detail">
              <p >PHP</p>
              <div class="progress three"></div>
            </div>
          </div>
          <div class="detail"><p class="content" style="margin-top:30px">
              <ul>
                  <li>熟悉CSS，能够完成兼容不同设备和复杂的布局，使用Stylus等预处理工具</li>
                  <li>能使用Vue编写不同需求的代码，熟悉Vue及Vue的生态，能够在文档的协助下配置环境</li>
                  <li>熟悉Git，了解Webpack等辅助开发/自动化及打包工具，能配合团队编写清晰的代码</li>
                  <li>有能力搭建前后端完整的项目，持有VPS并长期运行网站，有一定Linux使用经验，包括Web服务器配置与Docker等，会使用Vim等命令行工具</li>
                  
              </ul>
              </p></div>
        </div>
        <div class="section">
          <p class="title">
            <i class="fa fa-bookmark fa-fw"></i>项目经验
          </p>
          <p class="detail"></p>
        </div>
      </div>
    </div>

    <div ref="switch" v-on:mousemove="move" v-on:mouseleave="leave" class="switch">
      <div style="pointer-events:none">中文</div>
      <div style="color:white;pointer-events:none">EN</div>
    </div>
  </div>
</template>

<script>
export default {
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
  created() {}
};
</script>

<style lang="stylus" scoped>
.card {
  height: 900px;
  width: 60%;
  border-radius: 6px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.149);
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 960px;

  .header {
    height: 30%;
    width: 100%;
    background: #007eff;

    .left {
      color: white;
      font-size: 54px;
      width: 35%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      flex-wrap: wrap;

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
      margin-bottom 2em
      .title {
        font-size: 22px;
      }

      .detail {
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        .content{
            padding-left 30px
            font-size 16px
            ul{
                display block
                li{
                    display list-item
                    margin-bottom 1em
                    padding-right 60px
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
            white-space nowrap;
            &.long{
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
}

i {
  align-items: center;
}
</style>
