import Vuex from 'vuex'
import auth from './modules/auth'
import auction from './modules/auction'
import createPersistedState from "vuex-persistedstate";


export default new Vuex.Store({
    modules: {
      auth,
      auction
    },
    plugins: [createPersistedState()]
  });