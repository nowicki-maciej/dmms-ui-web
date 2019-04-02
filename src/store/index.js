import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    appLoading: false,
    currentUser: null
  },
  mutations: {
    appLoading (state, loading) {
      state.appLoading = loading;
    },
  },
  actions: {

  }
});

export default store;
