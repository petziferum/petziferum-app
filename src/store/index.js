import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import axiosauth from '@/axios-auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      idToken:null,
      userId: null,
    user:null
  },
  mutations: {
    authUser (state, userData){
        state.idToken = userData.token
        state.userId = userData.userId
    },
    INIT_USER (state, payload){
      state.user = payload
},
    STORE_USER(state,payload){
      state.user = payload
    }
  },
  actions: {
      signup({commit},authData){
              axiosauth.post('/accounts:signUp?key=AIzaSyDmg53knKxrYOFMWUM2h0jUI8etJyuT_vw',{
                  email: authData.email,
                  password: authData.password,
                  returnSecureToken: true
              }).then(res => {
                  console.log(res)
                  commit('authUser', {
                      token: res.data.idToken,
                      userId: res.data.localId
                  })
              }).catch(error => {
                  console.log(error)
              })
      },
      login ({commit,dispatch},authData) {
              axiosauth.post('/accounts:signInWithPassword?key=AIzaSyDmg53knKxrYOFMWUM2h0jUI8etJyuT_vw', {
                  email: authData.email,
                  password: authData.password,
                  returnSecureToken: true
              }).then(res => {
                  console.log(res)
                  commit('authUser', {
                      token: res.data.idToken,
                      userId: res.data.localId
                  })
                  dispatch('storeUser', authData)
              }).catch(error => {
                  console.log(error)
              })

      },
      storeUser({state},userData){
          if(!state.idToken){
              return
          }
          axios.post('/users.json'+'?auth='+ state.idToken,userData)
              .then(res => console.log(res))
              .catch(error => console.log(error))
      },
      fetchUser({commit,state}){
          if(!state.idToken){
              return
          }
            axios.get('/users.json+\'?auth=\'+ state.idToken')
                .then(res =>{
                    const data = res.data()
                    const users = []
                    console.log(res,data,users)
                    for(let key in data){
                        const user = data[key]
                        user.id = key
                        users.push(user)
                    }
                    console.log(users)
                    commit('STORE_USER',users[0])
                })
      },
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
