<template>
  <div class="detail-project">
    <div class="project">
      <div class="pj-title">
      
            <slot name="title"></slot>
        
      </div>
      <div class="pj-content">
          <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
        top: 7.5px;
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
</style>
