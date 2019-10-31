<template lang="html">
<div class="home">

  <!-- 顶部搜索框组件 -->
  <SearchBar></SearchBar>
  <!-- 底部导航组件 -->
  <NavBar></NavBar>

  <!-- 轮播图组件 -->
  <div class="swiper_box">
    <Swiper></Swiper>
  </div>

  <div class="content">
    <!-- 分类组件 -->
    <Cates></Cates>
    <!-- 广告位组件 -->
    <Banner></Banner>
    <!-- 秒杀组件 -->
    <Skill></Skill>
    <!-- 东家小院 -->
    <div class="ad_store_wrap">
      <AdStore v-for="(item, idx) in adArr" :key='idx' :item='item'></AdStore>
    </div>
  </div>

</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SearchBar from './SearchBar.vue'
import Swiper from './Swiper.vue'
import Cates from './Cates.vue'
import Banner from './Banner.vue'
import Skill from './Skill.vue'
import AdStore from './AdStore.vue'

import { mapActions, mapState } from 'vuex'
export default {
  components: {
    SearchBar,  // 顶部搜索框组件
    NavBar,     // 底部导航组件
    Swiper,     // 轮播图组件
    Cates,      // 分类导航组件
    Banner,     // 广告位组件
    Skill,      // 秒杀组件
    AdStore,    // 京东小院组件
  },
  computed: {
    ...mapState(['adArr'])
  },
  mounted() {
    this.getAds()
  },

  methods: {
    ...mapActions(['getAds'])
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 2.67rem;
  .swiper_box {
    width: 100%;
    height: 4.99rem;
    background: rgba(142, 74, 1, 1);
    box-sizing: border-box;
    padding-top: 1.17rem;
    text-align: center;
  }
  .content {
    background-color: rgba(246,246,246,1);
    .ad_store_wrap {
      padding: 0 0.31rem;
      margin-top: .29rem;
    }
  }
}
</style>
