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
        await axios.post('user/save',form )
        const User = new FormData();
        User.append("username", form.username);
        User.append("password", form.password);

        await dispatch('LogIn', User)
    },
    async LogIn({commit,dispatch}, User) {
        console.log("Login");
       
        var res = await axios.post('login',{}, { auth: { username: User.get('username'), password: User.get('password')}})
        console.log("Se logueo");
     
        await commit('setAccessToken', res.data['access_token'])
        await dispatch('GetInfo')
    },

    async GetInfo({commit,getters}) {
        console.log("GetInfo");
        console.log(getters.AccessToken);
        let response = await axios.get('user/info',{ headers: { 'Authorization': 'Bearer ' + getters.AccessToken}})
        console.log("Trajo info");
        await commit('setUser', response.data)
  
        
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
        state.accessToken = null
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