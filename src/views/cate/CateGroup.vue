<template>
<div class="cate_group">
  <!-- 一层循环 -->
  <div class="cate_panel" v-for="item in [1,2,3]" :key='item'>
    <div class="cate_panel_title">文学</div>
    <div class="cate_panel_list">
      <!-- 二层循环 -->
      <div class="cate_panel_item" v-for="item in [1,2,3,4,5,6, 7]" :key="item">
        <img src="../../assets/test.png" alt="">
        <span>小说</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.cate_group {
  position: fixed;
  left: 2.27rem;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgb(255, 255, 255);
  overflow: scroll;
  padding-bottom: 1.6rem;
  .cate_panel {
    > .cate_panel_title {
      color: #333333;
      font-size: .37rem;
      padding-left: .13rem;
      font-weight: bold;
      line-height: 1.2rem;
    }
    > .cate_panel_list {
      width: 100%;
      .cate_panel_item {
        display: inline-block;
        width: 33.3%;
        text-align: center;
        > img {
          display: inline-block;
          width: 1.87rem;
          height: 1.87rem;
        }
        > span {
          display: block;
          color: #333333;
          font-size: .32rem;
        }
      }
    }

  }
}
</style>
