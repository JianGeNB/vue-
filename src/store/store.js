import Vue from 'vue'
import Vuex from 'vuex'
import state from './state/cityState';
import mutations from './mutations/mutations';
import actions from './actions/actions';
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions
})
