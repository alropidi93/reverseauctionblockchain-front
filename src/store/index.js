import Vuex from 'vuex'
import auth from './modules/auth'
import createPersistedState from "vuex-persistedstate";


export default new Vuex.Store({
    modules: {
      auth
    },
    plugins: [createPersistedState()]
  });