import Payment from '../../services/Payment'
import * as types from '../mutation-types'

//states initial

const state = {
    buyer: [],
    invoice: []
};

//getters

const getters = {
    getBuyer: (state) => state.buyer,
    getInvoice: (state) => state.invoice
};


//actions

const actions = {
    getBuyer ({ commit } , data) {
        Payment.getData(data , 'buyer' , (data) => {
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
    setBuyer ({ commit } , data) {
        Payment.setData(data , 'buyer' , (data) => {
            commit(types.SET_BUYER , data )
        })
    },
    setDataPayment ({ commit , dispatch} , data) {

        dispatch('setBuyer' , data.buyer);
        dispatch('setBuyer' , data.invoice);
    },
};

//mutations

const mutations = {
    [types.SET_BUYER] : (state , { data }) => {
        state.buyer = data;
    },
    [types.SET_INVOICE] : (state , { data }) => {
        state.invoice = data;
    },
    [types.GET_BUYER] : (state , { data }) => {
        state.buyer = data;
    },
};


export default {
    state,
    getters,
    actions,
    mutations
}