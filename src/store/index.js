import Vue from 'vue';
import Vuex from 'vuex';
import profile from './modules/profile';
import SideBar from './modules/SideBar';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    profile,
    SideBar
  }
});
