import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

function fetch(api, callback) {
  axios({
    method: 'GET',
    url: "http://localhost:8080/db"+api
  }).then(res=>{
    let data = null
    if (res.data.err === 0) {
      data = res.data.data
    }
    callback && callback(data)
  }).catch(err=>{
    console.log('接口请求错误', err)
  }).then(()=>{
    // 总会执行
  })
}

const store = new Vuex.Store({
  state: {
    skillArr: [],
    cateAdData: []
  },
  mutations: {
    updateSkillArr(state, payload) {
      state.skillArr = payload
    },
    updateCateAdData(state, payload) {
      state.cateAdData = payload
    }
  },
  actions: {
    getKillGoods(store) {
      fetch('/skill.json', data=>{
        console.log(data)
        store.commit('updateSkillArr', data)
      })
    },
    getCateAdData(store) {
      fetch('/catead.json', data=>{
        console.log(data)
        store.commit('updateCateAdData', data)
      })
    }
  }
})

export default store
