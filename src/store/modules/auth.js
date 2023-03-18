import axios from 'axios';
const state = {
    user: null,
    posts: null,
};
const getters = {

};
const actions = {
    async Register({dispatch}, form) {
        // await axios.post('register', form)
        let UserForm = new FormData()
        UserForm.append('username', form.username)
        UserForm.append('password', form.password)
        await dispatch('LogIn', UserForm)
    },
    async LogIn({commit}, User) {
        
        var basicAuth = 'Basic ' + Buffer.from(User.get('username') + ':' + User.get('password')).toString('base64');
        await axios.post('login', {},{headers: { 'Authorization':  basicAuth }})
        await commit('setUser', User.get('username'))
    },
};
const mutations = {
    setUser(state, username){
        state.user = username
    },

};
export default {
  state,
  getters,
  actions,
  mutations
};