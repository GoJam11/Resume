<template>
  <div style="flex-direction: column;
    padding: 0 5px;margin-bottom:0px">
    <div class="section">
      <p class="title" :style="style">
        <i class="fa fa-caret-right"></i>
        <span class="section-title">
          <slot name="title"></slot>
        </span>
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

    i {
      align-items: center;
    }
  }

  .detail {
    flex-wrap: wrap;
    font-size: 15px;

    &>p {
      padding-left: 30px;
      flex-basis: 100%;

      
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

.section-title {
  font-size: 23px;
  font-weight: 500;
  margin-left: 10px;
  color: #2f2f2f;
}
</style>
