import checkout from '../../services/Checkout'
import * as types from '../mutation-types'
import redirect from '../../main'

//states initial

const state = {
    checkoutStatus: null,
    ticketsBuy: {},
    order: {}
};

//getters

const getters = {
    checkoutStatus: (state) => state.checkoutStatus,
    getTicketsBuy: (state) => state.ticketsBuy,
    getOrder: (state) => state.order,
};


//actions

const actions = {
    checkout ({ commit }, data) {
        commit(types.CHECKOUT_REQUEST);
        checkout.buyTicket(
            data,
            (response) => commit(types.CHECKOUT_SUCCESS ,response),
            (error) => commit(types.CHECKOUT_FAILURE, error)
        )
    }
};

//mutations

const mutations = {
    [types.CHECKOUT_REQUEST] (state) {
        state.checkoutStatus = null
    },

    [types.CHECKOUT_SUCCESS] (state , data) {
       if (data.status != 'APPROVED'){
            state.checkoutStatus = 'failed';
        }else{
           localStorage.removeItem('ticket');
           localStorage.removeItem('num_tickets');
           localStorage.removeItem('buyer');
           state.ticketsBuy = data.data.tickets;
           state.order = data.data.order;
           state.checkoutStatus = 'successful';
           redirect.push({path: '/finish'});
        }

    },

    [types.CHECKOUT_FAILURE] (state , error ) {
        state.checkoutStatus = 'failed';
    },
};


export default {
    state,
    getters,
    actions,
    mutations
}