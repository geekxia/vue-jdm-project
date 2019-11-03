<template>
<div class="cate_list">
  <div class="cate_item" v-for='item in 100' :key='item'>
    <span>图书音像</span>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.cate_list {
  width: 2.27rem;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  background-color: rgb(248, 248, 248);
  overflow: scroll;
  padding-bottom: 1.6rem;
  .cate_item {
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: .37rem;
    text-align: center;
  }
  .cate_item.on {
    color: #e93b3d;
    background-color: rgb(255, 255, 255);
  }
}
</style>
