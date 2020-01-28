import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:[]
  },
  mutations: {
    INIT_USER (state, payload){
      state.user = payload
},
    STORE_USER(state,payload){
      state.user.push(payload)
    }
  },
  actions: {
    init({commit}) {
      axios.get("https://petziferum-85609.firebaseio.com/submitted.json")
          .then(res => {
            const data = res.data;
            let userarray = [];
            for(let key in data ){
              const user = data[key]
              user.id = key
                userarray.push(user)
              console.log("commiting user:", user.id)
            }
              commit("INIT_USER", userarray)
          })
    },
    postUser({commit}, content) {
      axios.post("https://petziferum-85609.firebaseio.com/submitted.json", content)
          .then(
            console.log("user wird gespeichert",content)
          )
    commit("STORE_USER", content)

}
},
  getters: {
    getUser:(state) =>{
      return state.user;
}
  },
  modules: {
  }
})
