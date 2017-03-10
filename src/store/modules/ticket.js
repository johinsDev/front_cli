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
    allAdded: (state) => state.added
};


//actions

const actions = {
    getAllTickets ({ commit }) {
        ticket.get(tickets => {
            commit(types.RECEIVE_TICKETS, { tickets })
        })
    },
};

//mutations

const mutations = {
    [types.RECEIVE_TICKETS] : (state , { tickets }) => {
        state.all = tickets;
    },
    [types.ADD_TICKET] (state, { id }) {
        const record = state.added.find(p => p.id === id)
        if (!record) {
            state.added = [];
            //aqui vaciamos el state y el localstorage agregamos el nuevo
            //hay que cambiar la propieda para que la boleta agregada cambie
            state.added.push({
                id,
            })
        }
    },
};


export default {
    state,
    getters,
    actions,
    mutations
}