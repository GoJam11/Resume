<template>
  <header :style="{ backgroundColor }" class="header">
    <div class="left" style>
      <div>
        {{ basicInfo.name }}
        <span
          style="font-weight:300;font-size:22px;align-items:flex-end;margin-left:-10px;position:realative;top:4px"
        >{{basicInfo.job}}</span>
      </div>
      <div
        class="right-l"
        style="font-size:16px;font-weight:300;max-width:400px;flex-direction:column"
      >
        <p class="intro">{{basicInfo.description}}</p>
        <p class="intro"></p>
      </div>
    </div>
    <div class="right" style="flex-basis:35%">
      <div class="right-r" style="flex-basis:100%">
        <p class="section" style="font-size:26px;margin-bottom:-3px">{{ $t("contact") }}</p>
        <p style="font-size:16px;margin-bottom:-5px">
          <i class="fa fa-envelope fa-fw"></i>
          邮箱：{{ basicInfo.email }}
        </p>
        <p style="font-size:16px;margin-bottom:-5px">
          <i class="fa fa-phone fa-fw"></i>
          电话：{{ basicInfo.telephone}}
        </p>
        <p style="font-size:16px;margin-bottom:-5px">
          <i class="fa fa-wechat fa-fw"></i>
          微信：{{ basicInfo.wechat }}
        </p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    backgroundColor: { type: String, default: "#6195FF" },
    basicInfo: Object
  }
};
</script>

<style lang="stylus" scoped>
.header {
  height: 263px;
  width: 100%;
  box-sizing: border-box;

  .left {
    color: white;
    font-size: 54px;
    width: 30%;
    flex-direction: column;
    font-weight: 400;
    flex-basis: 72%;
    align-items: flex-start;
    padding-left: 45px;
    justify-content: flex-start;
    margin-top: 60px;

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
    }

    .section {
      font-size: 22px;
      margin-top: 45px;
    }

    .right-r {
      font-size: 16px;
      flex-basis: 40%;
      flex-direction: column;
      font-weight: 300;
    }
  }
}

@media screen and (max-width: 750px) {
  .header {
    flex-direction: column;
    height: auto;

    .left {
      width: 100%;
      box-sizing: border-box;
      padding-left: 20px;
      padding-right: 15px;

      p {
        width: 100%;
      }

      .right-l {
        display: none;
      }
    }

    .right {
      margin-left: 20px;
      margin-bottom: 30px;
      margin-top: 0;
      padding: 0;

      .section {
        margin-top: 10px;
        display none
      }
    }
  }
}
</style>
