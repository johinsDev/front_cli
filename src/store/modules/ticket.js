import ticket from '../../services/ticket'
import * as types from '../mutation-types'

//states initial

const state = {
    all: [],
    added: []
};

//getters

const getters = {
    allTickets: (state) => state.all,
    getTicket: (state) => state.added
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
};

//mutations

const mutations = {
    [types.RECEIVE_TICKETS] : (state , { tickets }) => {
        state.all = tickets;
    },
    [types.GET_TICKET] : (state , ticket) => {
      state.added = ticket
    },
    [types.ADD_TICKET] (state, { id }) {
        const record = state.added == id;
        if (!record) {
            state.added = id
        }
    },
};


export default {
    state,
    getters,
    actions,
    mutations
}