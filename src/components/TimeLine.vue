<template>
  <div class="detail-project">
    <div class="project">
      <div class="before-title" :style="style"></div>
      <div class="pj-title">
        <slot name="title"></slot>
      </div>
      <div class="before-content" :style="style2"></div>
      <div class="pj-content">
        <slot name="content"></slot>
      </div>
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
            background: "#2faffe"
          };
          break;
        case "blue":
          return {
            background: "#267aff"
          };
          break;
      }
    },
    style2() {
      switch (this.theme) {
        case "light":
          return {
            background: "rgb(138, 216, 244)"
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
  &:last-child {
    .project {
      .pj-content:before {
        height: calc(100% + 35px);
      }
    }
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

    .pj-title {
      margin-left: 45px;
      position: relative;

      h2 {
        margin-bottom: 0px;

        a {
          color: black;
          text-decoration: none;

          &:hover {
          }
        }
      }

      &::before {
        // height: 100%;
      }
    }

    .pj-content {
      margin-left: 45px;
      position: relative;
      // text-indent 2em
      color: #676767;
      /* &::before {
        content: '';
        width: 5px;
        height: calc(100% + 55px);
        margin-right: 5px;
        background: #8ad8f4;
        position: absolute;
        left: -20px;
        top: -25px;
        border-radius: 2.5px;
      } */
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
  top: 27.5px;
  border-radius: 7.5px;
  z-index: 1;

  &:hover {
    transition: 0.5s;
    background: #8ad8f4;
    border-radius: 3px;
    // animation-name: incline;
    animation-duration: 0.3s;
    // animation-iteration-count infinite
    animation-fill-mode: forwards;

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
  height: calc(100%);
  margin-right: 5px;
  background: rgb(138, 216, 244);
  position: absolute;
  left: 25px;
  top: 30px;
  border-radius: 2.5px;
}
</style>
