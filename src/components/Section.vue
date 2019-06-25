<template>
  <div style="flex-direction: column;
    padding: 0 5px;">
    <div class="section">
      <p class="title">
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

};
</script>

<style lang="stylus" scoped>
primary-color = #007eff; // #1caef7
header-color = #267aff; // #1caef7
light-color = #007eff;
progress-color = #017eff; // #1caef7
progress-bg = #017eff7d;

.section {
  padding: 0 20px;
  flex-direction: column;
  margin-bottom: 1em;

  .title {
    font-size: 22px;
    color: primary-color;
    border-bottom: 1px solid primary-color;

    i {
      align-items: center;
    }
  }

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
          animation-name: incline;

          @keyframes incline {
            100% {
              transform: rotateZ(45deg);
            }
          }
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
          content: '';
          width: 15px;
          height: 15px;
          margin-right: 5px;
          background: #017dff;
          position: absolute;
          left: -25px;
          top: 25.5px;
          border-radius: 7.5px;
          z-index: 1;
          // height: 100%;
        }
      }

      .pj-content {
        margin-left: 45px;
        position: relative;
        // text-indent 2em
        color: #676767;

        &::before {
          content: '';
          width: 5px;
          height: calc(100% + 55px);
          margin-right: 5px;
          background: #8bc0ff;
          position: absolute;
          left: -20px;
          top: -25px;
          border-radius: 2.5px;
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
        font-weight: 500;

        &.long {
          width: 90px;
        }
      }

      .progress {
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
