import Vue from 'vue';
import Vuex from 'vuex';

import tasks from './tasks/';
import snackbarAlert from  './snackbarAlert';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      isLoading:false,
  },
  getters: {
      isLoading(state) {
          return state.isLoading;
      },
  },
  mutations: {
      SET_IS_LOADING(state, value) {
          state.isLoading = value;
      },
  },
  actions: {
      initApp({ dispatch }, payload) {
          dispatch('tasks/init', payload);
      },
  },
  modules: {
      tasks,
      snackbarAlert,
  }
})
