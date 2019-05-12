import Vuex from 'vuex';
import Vue from 'vue';
import { userModule } from "./user";

//TODO: try to move to components
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user: {
      namespaced: true,
      ...userModule
    },
  },

  state: {
    appLoading: false
  },
  mutations: {
    appLoading (state, loading) {
      state.appLoading = loading;
    },
    currentUser (state, currentUser) {
      state.currentUser = currentUser;
    },
  },
  actions: {

  }
});


export default store;
