<template>
  <div style="flex-direction: column;
    padding: 0 5px;margin-bottom:0px">
    <div class="section">
      <p class="title" :style="style">
        <slot name="title"></slot>
      </p>
      <div class="detail">
        <slot name="detail"></slot>
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
            color: "rgb(64, 184, 131)"
          };
          break;
        case "blue":
          return {
            color: "#6195FF"
          };
          break;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
primary-color = #2faffe; // #1caef7
header-color = #267aff; // #1caef7
light-color = #007eff;
progress-color = #2faffe; // #1caef7
progress-bg = #8ad8f4;

.section {
  padding: 0 20px;
  flex-direction: column;
  margin-bottom: 1em;

  .title {
    font-size: 22px;
    color: primary-color;
    //border-bottom: 1px solid primary-color;

    i {
      align-items: center;
    }

    &:hover {
      i {
        // transition .5s
        // transform rotateZ(270deg) translate(7px,0px)
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
        font-weight: 500;

        &.long {
          width: 90px;
        }
      }

      .progress {
        transition: 0.3s;

        &:hover {
          transform: scale(1.2);
        }

        width: 120px;
        height: 14px;
        border-radius: 7px;
        margin-left: 1em;
        box-shadow: 0 0 3px 0 #8bc0ff;

        &.five {
          background: linear-gradient(to right, progress-color 50%, progress-bg 0%);
        }

        &.seven {
          background: linear-gradient(to right, progress-color 70%, progress-bg 0%);
        }

        &.six {
          background: linear-gradient(to right, progress-color 60%, progress-bg 0%);
        }

        &.three {
          background: linear-gradient(to right, progress-color 30%, progress-bg 0%);
        }
      }
    }
  }
}

* {
  display: flex;
}

p {
  margin-top: 0.8em;
  margin-bottom: 0;
}
</style>
