import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

function fetch(api, callback) {
  // 显示加载中
  axios({
    method: "GET",
    url: 'http://localhost:8080'+api
  }).then(res=>{
    let data = null
    if (res.data.err === 0) {
      data = res.data.data
    }
    callback && callback(data)
  }).catch(err=>{
    console.log('接口请求异常', err)
  }).then(()=>{
    // 总是会执行
    // 隐藏加载中
  })
}

const store = new Vuex.Store({
  state: {
    msg: 'hello',
    skillArr: [],
    adArr: []
  },
  mutations: {
    updateSkillArr(state, payload) {
      state.skillArr = payload
    },
    updateAdArr(state, payload) {
      state.adArr = payload
    }
  },
  actions: {
    getSkillGoods(store) {
      fetch('/db/goods.json', data=>{
        console.log(data)
        store.commit('updateSkillArr', data)
      })
    },
    getAds(store) {
      fetch('/db/ads.json', data=>{
        console.log(data)
        store.commit('updateAdArr', data)
      })
    }
  }
})

export default store
