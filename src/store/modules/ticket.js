import ticket from '../../services/ticket'
import * as types from '../mutation-types'

//states initial

const state = {
    all: []
};

//getters

const getters = {
  allTickets: (state) => state.all
};


//actions

const actions = {
    getAllTickets ({ commit }) {
        ticket.get(tickets => {
            commit(types.RECEIVE_TICKETS, { tickets })
        })
    }
};

//mutations

const mutations = {
    [types.RECEIVE_TICKETS] : (state , { tickets }) => {
        state.all = tickets;
    }
};


export default {
    state,
    getters,
    actions,
    mutations
}