import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: []
  },
  mutations: {
    SET_USER(state, data) {
      state.user = data;
      console.log(state.user);
    }
  },
  actions: {
    userData({ commit }, data) {
      commit("SET_USER", data);
    }
  },
  getters: {
    getUser: state => {
      console.log("test");
      return state.user;
    }
  }
});
