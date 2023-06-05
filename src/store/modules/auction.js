import axios from 'axios';
const state = {

    auctions: null,
    goodServices: null,

};

const getters = {
  
    Auctions: state => state.auctions,
    GoodServices: state => state.goodServices,

};

const actions = {
    
    async GetAuctions({ commit },){
        let response = await axios.get('reverseauction/list',{ headers: { }})
       
        commit('setAuctions', response.data)
    },
    async CreateAuction({rootState }, payload) {
        console.log("CreateAuctionForm");
        console.log(rootState.auth.accessToken);
        console.log(payload.entityCode);
        await axios.post('reverseauction/create/' + payload.entityCode ,payload.auctionData,{ headers: { 'Authorization': 'Bearer ' + rootState.auth.accessToken}}  )
        
    },

    async GetGoodServices({ commit },){
        let response = await axios.get('reverseauction/getGoodServices',{ headers: { }})
       
        commit('setGoodServices', response.data)
    },

      
};
const mutations = {

    setAuctions(state, auctions){
        state.auctions = auctions
    },
    setGoodServices(state, goodServices){
        state.goodServices = goodServices
    },

     

};
export default {
  state,
  getters,
  actions,
  mutations
};