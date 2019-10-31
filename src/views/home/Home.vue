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


      <div class="rcmd_wrap" ref='rcmd'>
        <div class="rcmd_wrap_title">
          <img :src="icons.rcmdIcon" alt="">
        </div>
        <Rcmd v-for="(item,idx) in rcmdArr" :key='idx' :item='item'></Rcmd>
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
import Rcmd from './Rcmd.vue'

// import Scroll from 'vue-slim-better-scroll'
// import BScroll from 'better-scroll'
import BScroll from '@better-scroll/core'

import { mapActions, mapState } from 'vuex'
import { icons } from '@/assets/index'
export default {
  data: function() {
    return {
      icons
    }
  },
  components: {
    SearchBar,  // 顶部搜索框组件
    NavBar,     // 底部导航组件
    Swiper,     // 轮播图组件
    Cates,      // 分类导航组件
    Banner,     // 广告位组件
    Skill,      // 秒杀组件
    AdStore,    // 京东小院组件
    Rcmd
  },
  computed: {
    ...mapState(['adArr', 'rcmdArr'])
  },
  mounted() {
    this.getAds()
    this.getRcmds()
    let bs = new BScroll('.rcmd_wrap', {
      probeType: 3,
      pullUpLoad: true
    })
    bs.on('scroll', ()=>{
      console.log(1)
    })
    bs.on('scrollEnd', ()=>{
      console.log('end')
      this.getRcmds()
      setTimeout(()=>{
        bs.refresh()
      },1000)
    })
  },

  methods: {
    ...mapActions(['getAds', 'getRcmds'])
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
    .rcmd_wrap {
      text-align: center;
      .rcmd_wrap_title {
        height: .93rem;
        line-height: .93rem;
        text-align: center;
        .img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
