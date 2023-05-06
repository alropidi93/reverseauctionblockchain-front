import axios from 'axios';
const state = {
    user: null,
    users: null,
    accessToken: null,
};

const getters = {
    isAuthenticated: state => !!state.user, 
    StateUser: state => state.user,
    AccessToken: state => state.accessToken,
    StateUsers: state => state.users,

};

const actions = {
    async Register({dispatch}, form) {
        // await axios.post('user/save',form )
        let UserForm = new FormData()
        UserForm.append('username', form.username)
        UserForm.append('password', form.password)

        await dispatch('LogIn', UserForm)
    },
    async LogIn({commit}, User) {
        console.log("Login");
       
        var res = await axios.post('login',{}, { auth: { username: User.get('username'), password: User.get('password')}})
        console.log(res.data['access_token']);
        console.log("Se logueo");
        await commit('setUser', User.get('username'))
        await commit('setAccessToken', res.data['access_token'])
    },

    async LogOut({commit}){
        commit('LogOut')
    },
    async GetUsers({ commit, getters },){
        let response = await axios.get('users',{ headers: { 'Authorization': 'Bearer ' + getters.AccessToken}})
        commit('setUsers', response.data)
    },
      
};
const mutations = {
    setUser(state, username){
        state.user = username
    },
    setAccessToken(state, access_token){
        state.accessToken = access_token
        console.log(state.accessToken);
    },
    LogOut(state){
        state.user = null
        state.users = null
    },
    setUsers(state, users){
        state.users = users
    },
      

};
export default {
  state,
  getters,
  actions,
  mutations
};