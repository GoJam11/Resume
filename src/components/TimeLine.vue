<template>
  <div class="detail-project">
    <div class="project">
      <div class="pj-title">
        <slot name="title"></slot>
        <div style="height:4px;background:#f3f3f3;"></div>
      </div>

      <div class="pj-content">
        <slot name="content"></slot>
      </div>
      <!--
      <div class="before-content" :style="style2"></div>
      <div class="before-title" :style="style"></div>-->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    theme: String
  },
  computed: {
    style() {
      switch (this.theme) {
        case "light":
          return {
            background: "rgb(64, 184, 131)"
          };
          break;
        case "blue":
          return {
            background: "#6195FF"
          };
          break;
      }
    },
    style2() {
      switch (this.theme) {
        case "light":
          return {
            background: "rgb(64, 184, 131)"
          };
          break;
        case "blue":
          return {
            background: "rgba(1, 126, 255, 0.49)"
          };
          break;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.detail-project {
  margin-bottom 30px
  &:last-child {
    .project {
      .pj-content:before {
        height: calc(100% + 35px);
      }
    }
    margin-bottom 0px
  }

  &:hover {
    .project {
      transition: 1s;

      .pj-title::before {
        // content: '';
        // box-shadow 0 0 5px 0 primary-color
      }

      .pj-content::before {
        // box-shadow 0 0 5px 0 #8bc0ff
      }
    }
  }

  .project {
    flex-direction: column;
    width:100%

    .pj-title {
      margin-left: 30px;
      position: relative;

      h2 {
        margin-bottom: 0px;

        a {
          color: black;
          text-decoration: none;
        }
      }
    }

    .pj-content {
      margin-left: 30px;
      position: relative;
      color: #3d3d50;
      line-height 23px
      p{
        display:block!important
      }

    }
  }
}

.project {
  position: relative;
}

.before-title {
  width: 15px;
  height: 15px;
  margin-right: 5px;
  background: #2faffe;
  position: absolute;
  left: 20px;
  top: 22.5px;
  border-radius: 4px;

  // z-index: 1;
  &:hover {
    transition: 0.3s;
    //background: #8ad8f4;
    /*width:30px;
    height:30px;
    left:12.5px;
    top:15px
    border-radius: 15px;*/
    // animation-name: incline;
    animation-duration: 0.3s;

    // animation-iteration-count infinite
    // animation-fill-mode: forwards;
    @keyframes incline {
      100% {
        // transform: scale(1.2);
        background: #8ad8f4;
        border-radius: 3px;
      }
    }
  }
}

.before-content {
  width: 5px;
  height: 100%;
  margin-right: 5px;
  background: rgb(138, 216, 244);
  position: absolute;
  left: 25px;
  top: 30px;
  border-radius: 2.5px;

}

</style>
