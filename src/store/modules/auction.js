import axios from 'axios';
const state = {

    auctions: null,

};

// const getters = {
  
//     Auctions: state => state.auctions,

// };

const actions = {
    
    async GetAuctions({ commit },){
        let response = await axios.get('reverseauction/list',{ headers: { }})
       
        commit('setAuctions', response.data)
    },
      
};
const mutations = {

    setAuctions(state, auctions){
        state.auctions = auctions
    },
     

};
export default {
  state,
//   getters,
  actions,
  mutations
};