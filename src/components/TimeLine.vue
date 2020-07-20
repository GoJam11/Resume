<template>
  <div class="detail-project">
    <div class="project">
      <div class="pj-title">
        <p class="project-time">
          <slot name="time"></slot>
        </p>
        <h2 class="project-item-title">
          <slot name="title"></slot>
        </h2>
        <div style="height:4px;background:#f3f3f3;"></div>
      </div>

      <div class="pj-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="stylus" scoped>



.detail-project {
  margin-bottom: 30px;

  &:last-child {
    .project {
      .pj-content:before {
        height: calc(100% + 35px);
      }
    }

    margin-bottom: 0px;
  }

  .project {
    flex-direction: column;
    width: 100%;

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
      line-height: 23px;

      p {
        display: block !important;
      }
    }
  }
}

.project-item-title {
  color: #2f2f2f;
  font-size: 18px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 6px !important;
}

.project-time {
  color: gray;
  font-weight: 300;
  font-size: 13px;
  margin-bottom: 0;
}

@media screen and (max-width: 996px) {
  .detail-project{
    max-width 100%
    .project{
    .pj-title{
      margin-left 20px
    }
    .pj-content{
      margin-left:20px
    }
  }
  }
  

}
</style>
