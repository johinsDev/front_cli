import checkout from '../../services/Checkout'
import * as types from '../mutation-types'
import redirect from '../../main'

//states initial

const state = {
    checkoutStatus: null
};

//getters

const getters = {
    checkoutStatus: (state) => state.checkoutStatus,
};


//actions

const actions = {
    checkout ({ commit }, data) {
        commit(types.CHECKOUT_REQUEST);
        checkout.buyTicket(
            data,
            () => commit(types.CHECKOUT_SUCCESS),
            () => commit(types.CHECKOUT_FAILURE )
        )
    }
};

//mutations

const mutations = {
    [types.CHECKOUT_REQUEST] (state) {
        state.checkoutStatus = null
    },

    [types.CHECKOUT_SUCCESS] (state) {
        state.checkoutStatus = 'successful'
        redirect.push({path: '/'});
    },

    [types.CHECKOUT_FAILURE] (state, { savedCartItems }) {
        //si falla solo notificar
        state.checkoutStatus = 'failed';
    }
};


export default {
    state,
    getters,
    actions,
    mutations
}