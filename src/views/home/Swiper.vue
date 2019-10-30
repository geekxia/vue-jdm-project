<template>
<div class="swiper">
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item, idx) in swiper" :key='idx'>
      <img :src="item.src" alt="swiper">
    </mt-swipe-item>
    <!-- <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item> -->

  </mt-swipe>
</div>
</template>

<script>
import { swiper } from '@/assets/index'
export default {
  data: function () {
    return {
      swiper,
      arr: [1,2,3,4]
    }
  }
}
</script>

<style lang='scss' scoped>
.swiper {
  height: 3.73rem;
  width: 100%;
  img {
    width: 9.33rem;
    height: 100%;
  }
}
</style>
