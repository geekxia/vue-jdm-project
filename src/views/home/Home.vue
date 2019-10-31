<template>
<div class="home">
  <NavBar></NavBar>
  <SearchBar></SearchBar>

  <div class="swiper_box">
    <Swiper></Swiper>
  </div>

  <div class="content">
    <Cates></Cates>
    <AdBanner></AdBanner>
    <Seckill></Seckill>
  </div>

  <div v-if='cateAdData && cateAdData.length > 0'>
    <CateAd type="1" :item='cateAdData[0]'></CateAd>
    <CateAd type="1" :item='cateAdData[1]'></CateAd>

    <CateAd type="2" :item='cateAdData[2]'></CateAd>
    <CateAd type="2" :item='cateAdData[3]'></CateAd>
  </div>

</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SearchBar from './SearchBar.vue'
import Swiper from './Swiper.vue'
import Cates from './Cates.vue'
import AdBanner from './AdBanner.vue'
import Seckill from './Seckill.vue'
import CateAd from './CateAd.vue'

import { mapActions, mapState } from 'vuex'
export default {
  components: {
    NavBar,
    SearchBar,
    Swiper,
    Cates,
    AdBanner,
    Seckill,
    CateAd
  },
  computed: {
    ...mapState(['cateAdData'])
  },
  mounted() {
    this.getCateAdData()
  },
  methods: {
    ...mapActions(['getCateAdData'])
  }
}
</script>

<style lang="scss" scoped>
.swiper_box {
  width: 100%;
  height: 4.99rem;
  background: rgba(142, 74, 1, 1);
  box-sizing: border-box;
  padding-top: 1.17rem;
}
.content {
  background-color: rgba(246,246,246,1);
}
</style>
