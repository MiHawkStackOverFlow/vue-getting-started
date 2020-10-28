import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  heroes: [
    {
      id: 10,
      firstName: 'Ella',
      lastName: 'Papa',
      capeCounter: 1,
      originDate: '1996-06-06',
      description: 'fashionista',
    },
  ],
};
const mutations = {};
const actions = {};
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
