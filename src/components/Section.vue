<template>
  <div style="flex-direction: column;
    padding: 0 5px;margin-bottom:0px">
    <div class="section">
      <p class="title">
        <i class="fa fa-caret-right" :style="{ color: theme }"></i>
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
    theme: { type: String, default: "#6195FF" }
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
  padding-left: 10px;
  flex-direction: column;
  margin-bottom: 1em;

  .title {
    font-size: 22px;

    i {
      align-items: center;
    }
  }

  .detail {
    font-size: 15px;
    flex-direction: column;
    align-items: flex-start;

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

@media screen and (max-width: 996px) {
  i {
    display: none;
  }

  .section {
    padding-left: 0px;
      .detail>p{
    padding-left:20px
  }
  }

}
</style>
