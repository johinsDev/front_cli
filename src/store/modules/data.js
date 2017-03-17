import Payment from '../../services/Payment'
import * as types from '../mutation-types'
import redirect from '../../main'

//states initial

const state = {
    buyer: {
        name: '',
        last_name: '',
        cc: '',
        license: '',
        email: '',
    },
    invoice: {
        name: '',
        last_name: '',
        cc: '',
        license: '',
        email: '',
    }
};

//getters

const getters = {
    getBuyer: (state) => state.buyer,
    getInvoice: (state) => state.invoice
};


//actions

const actions = {
    getInvoice ({ commit }) {
        Payment.getData('invoice' , (data) => {
            commit(types.GET_INVOICE , data )
        })
    },
    getBuyer ({ commit }) {
        Payment.getData('buyer' , (data) => {
            commit(types.GET_BUYER , data )
        })
    },
    setBuyer ({ commit } , data) {
        Payment.setData(data , 'buyer' , (data) => {
            commit(types.SET_BUYER , data )
        })
    },
    setInvoice ({ commit } , data) {
        Payment.setData(data , 'invoice' , (data) => {
            commit(types.SET_BUYER , data )
        })
    },
    setDataPayment ({ commit , dispatch} , data) {
        dispatch('setBuyer' , data);
        //redirect.push({path: 'confirmation'})
    },
};

//mutations

const mutations = {
    [types.SET_BUYER] : (state , data) => {
        state.buyer = data;
    },
    [types.SET_INVOICE] : (state , { data }) => {
        state.invoice = data;
    },
    [types.GET_BUYER] : (state , data) => {
        if (data){
            state.buyer = data;
        }
    },
    [types.GET_INVOICE] : (state , data) => {
        if (data){
            state.invoice = data;
        }
    },
};


export default {
    state,
    getters,
    actions,
    mutations
}