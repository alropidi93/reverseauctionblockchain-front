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
    async CreateAuction(_,CreateAuctionForm) {
        console.log("CreateAuctionForm");
        console.log(CreateAuctionForm);
        await axios.post('reverseauction/create',CreateAuctionForm )
        
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