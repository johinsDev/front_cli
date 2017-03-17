import ticket from '../../services/ticket'
import * as types from '../mutation-types'

//states initial

const state = {
    all: [],
    added: [],
    num_tickets: 0
};

//getters

const getters = {
    allTickets: (state) => state.all,
    getTicket: (state) => state.added,
    getNumTickets: (state) => parseInt(state.num_tickets),
};


//actions

const actions = {
    getAllTickets ({ commit }) {
        ticket.get(tickets => {
            commit(types.RECEIVE_TICKETS, { tickets })
        })
    },
    getTicket ({ commit }) {
        ticket.findOne(ticket => {
            commit(types.GET_TICKET , ticket)
        })
    },

    getNumTickets ({ commit}) {
       ticket.getNum((num) => {
           commit(types.GET_NUM_TICKETS , num)
       })
    },
    plus({ commit , state , rootState , dispatch}) {
        let num = parseInt(state.num_tickets) + 1;
        console.log(rootState.data.buyer);
        if (num  > rootState.data.buyer.length ){
            rootState.data.buyer.push({
                name: '',
                last_name: '',
                cc: '',
                license: '',
                email: '',
            });
            dispatch('setBuyer' , rootState.data.buyer);
        }else if(typeof  rootState.data.buyer.length === 'undefined'){
            rootState.data.buyer =[{
                name: '',
                last_name: '',
                cc: '',
                license: '',
                email: '',
            }];
            dispatch('setBuyer' , rootState.data.buyer);
        }
        ticket.setNum(num , (num) => {
            commit(types.SET_NUM_TICKETS , num)
        })
    },
    minus({ commit , state}) {
        let num = state.num_tickets > 0 ? parseInt(state.num_tickets) - 1: 0;
        ticket.setNum(num , (num) => {
            commit(types.SET_NUM_TICKETS , num)
        })
    },
};

//mutations
const mutations = {
    [types.RECEIVE_TICKETS] : (state , { tickets }) => {
        state.all = tickets;
    },
    [types.GET_TICKET] : (state , ticket) => {
      state.added = ticket
    },
    [types.ADD_TICKET] (state,ticket) {
        const record = state.added.id == ticket.id;
        if (!record) {
            state.added = ticket;
        }
    },
    [types.GET_NUM_TICKETS] : (state , data) => {
        if (data){
            state.num_tickets = data;
        }
    },
    [types.SET_NUM_TICKETS] (state, num) {
        state.num_tickets = num
    },
};


export default {
    state,
    getters,
    actions,
    mutations
}