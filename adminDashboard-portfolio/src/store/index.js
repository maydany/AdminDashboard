import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n' // load vuex i18n module
import * as firebase from 'firebase'
import app from './modules/app'

import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app
  },
  state: {
    user: {
      id: ''
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    signUserUp ({comit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid
            }
          },
          alert('이메일 : ' +payload.email+'\n'+ '비밀번호 : '+payload.password+'로 가입되었습니다.'),
        ).catch(error => {
          console.log(error)
        })
    },
    signUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid
            }
              commit('setUser', newUser)
          }
        ).catch(error => {
          console.log(error),
          alert('아이디와 비밀번호를 다시 확인해주세요.')
        })
    }
  }

})

Vue.use(VuexI18n.plugin, store)

export default store
