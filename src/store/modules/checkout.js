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
        state.checkoutStatus = 'successful';

        console.log(data);
        //redirect.push({path: '/'});
    },

    [types.CHECKOUT_FAILURE] (state , error ) {
        //si falla solo notificar
        console.log('aqui esta fallando');
        state.checkoutStatus = 'failed';
    }
};


export default {
    state,
    getters,
    actions,
    mutations
}