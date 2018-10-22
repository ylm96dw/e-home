import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from  'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo:{
      username:'',
      header:''
    },
    token:''

  },
  mutations: {
    'CHANGE_userInfo'(state,payload){
      state.userInfo = payload
    },
    'CHANGE_Loading'(state,token){
      state.token=token
    }
  },
  actions:{

  },
  plugins:[ createPersistedState({
    storage: {
      getItem: key => sessionStorage.getItem(key),
      setItem: (key, value) =>
      sessionStorage.setItem(key, value),
      removeItem: key => sessionStorage.removeItem(key),
      },
    }),

  ]
})

export default store
