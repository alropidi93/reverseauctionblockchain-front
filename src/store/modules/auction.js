import axios from 'axios';
const state = {

    auctions: null,
    goodServices: null,

};

const getters = {
  
    // Auctions: state => state.auctions,
    GoodServices: state => state.goodServices,

};

const actions = {
    
    async GetAuctions({ commit },){
        let response = await axios.get('reverseauction/list',{ headers: { }})
       
        commit('setAuctions', response.data)
    },
    async CreateAuction(_,CreateAuctionForm) {
        console.log("CreateAuctionForm");
        console.log(CreateAuctionForm);
        await axios.post('reverseauction/create',CreateAuctionForm )
        
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