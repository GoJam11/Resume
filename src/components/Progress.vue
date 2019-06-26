<template>
  <div class="progress-detail">
    <slot name="name"></slot>
    <div :style="style" class="progress five"></div>
  </div>
</template>

<script>
export default {
  props: {
    percent: String,
    theme: String
  },
  computed: {
    style() {
      switch (this.theme) {
        case "light":
          return {
            background:
              "linear-gradient(to right, #2faffe " +
              this.percent +
              ", #8ad8f4 0%)"
          };
          break;
        case "blue":
          return {
            background:
              "linear-gradient(90deg,#017eff " +
              this.percent +
              ",rgba(1,126,255,.49) 0)"
          };
          break;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.progress-detail {
  align-items: center;
  justify-content: center;
  flex-basis: 33.33%;

  p {
    align-items: center;
    margin: 0 !important;
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
</style>
