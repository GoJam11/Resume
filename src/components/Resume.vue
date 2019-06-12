<template>
  <div class="global" v-on:mousewheel="scroll">
    <div class="card">
      <header class="header">
        <div class="left">{{$t("name")}}</div>
        <div class="right">
          <div class="right-l">
            <p >求职意向：前端实习</p>
            
          </div>
          <div class="right-r">
            <p>
              <i class="el-icon-message"></i>邮箱：iloveos@live.com
            </p>
            <p><i class="el-icon-phone-outline"></i>电话：18651403158</p>
          </div>
        </div>
      </header>
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
    scroll(e){
        console.log(e)
    }
  },
  created(){
      
  }
};
</script>

<style lang="stylus" scoped>
.card {
  height: 600px;
  width: 60%;
  border-radius: 12px;
  box-shadow: 9px 20px 20px 0px #00000026;
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .header {
    height: 30%;
    width: 100%;
    background: #007eff;

    .left {
      color: white;
      font-size: 64px;
      width: 27%;
      justify-content: center;
      align-items: center;
    }

    .right {
      color: white;
      font-size: 22px;
      padding: 15px 0px;
      flex-grow: 1;
      .right-l{
          flex-basis 50%
          flex-direction column
      }
      .right-r{
          font-size 16px
          flex-basis 50%
          flex-direction column
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
