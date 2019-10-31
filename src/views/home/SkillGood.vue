<template lang="html">
<div class="scroll_good">
  <div>
    <img :src='item.src' alt="">
  </div>
  <div v-text='item.current_price'></div>
  <div v-text='item.original_price'></div>
</div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss" scoped>
.scroll_good {
  width: 2rem;
  box-sizing: border-box;
  padding: .07rem;
  height: 100%;
  >div:nth-child(1) {
    text-align: center;
    > img {
      display: inline-block;
      width: 1.76rem;
      height: 1.76rem;
    }
  }
  >div:nth-child(2) {
    font-size: .43rem;
    color: #e93b3d;
    font-weight: bold;
  }
  >div:nth-child(3) {
    font-size: .32rem;
    color: #999999;
  }
}
</style>
