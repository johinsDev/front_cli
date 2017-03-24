import checkout from '../../services/Checkout'
import * as types from '../mutation-types'
import redirect from '../../main'

//states initial

const state = {
    checkoutStatus: null,
    ticketsBuy: {},
    order: {},
    state: '',
    urlPdf: '',
    urlPayment: '',
    payment_method: '',
    banks: []
};

//getters

const getters = {
    checkoutStatus: (state) => state.checkoutStatus,
    getTicketsBuy: (state) => state.ticketsBuy,
    getOrder: (state) => state.order,
    getUrls: (state) => {
        return {
            url: state.urlPayment,
            file: state.urlPdf
        }
    },
    getState: state => state.state,
    getPaymentMethod: state => state.payment_method,
    getBankList: state => state.banks
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
    },
    getBankList({commit}) {

        checkout.getBankList(
            (response) => commit(types.LIST_BANKS ,response)
        )
    },
    setPaymentMethod ({commit} , value){
        var card_method = null;
        var patterns = function () {
            if (card_method === null) {
                card_method = {
                    'VISA': '^(4)(\\d{12}|\\d{15})$|^(606374\\d{10}$)',
                    'MASTERCARD': '^(5[1-5]\\d{14}$)|^(2(?:2(?:2[1-9]|[3-9]\\d)|[3-6]\\d\\d|7(?:[01]\\d|20))\\d{12}$)',
                    'AMEX': '^3[47][0-9]{13}$',
                    'DINERS': '(^[35](?:0[0-5]|[68][0-9])[0-9]{11}$)|(^30[0-5]{11}$)|(^3095(\\d{10})$)|(^36{12}$)|(^3[89](\\d{12})$)',
                    'NARANJA': '^(589562)\\d{10}$',
                    'SHOPPING': '(^603488(\\d{10})$)|(^2799(\\d{9})$)',
                    'CABAL': '(^604(([23][0-9][0-9])|(400))(\\d{10})$)|(^589657(\\d{10})$)',
                    'ARGENCARD': '^(501105|532362)(\\d{10}$)',
                    'CENCOSUD': '^603493(\\d{10})$',
                    'HIPERCARD': '^(384100|384140|384160|606282)(\\d{10}|\\d{13})$',
                    'CODENSA': '^590712(\\d{10})$',
                    'ELO': '(^(636368|438935|504175|451416|636297|650901|650485|650541|650700|650720|650720|650720|655021|650405)\\d{10})$|(^(5090|5067|4576|4011)\\d{12})$|(^(50904|50905|50906)\\d{11})$'
                };
            }
            return card_method;
        };
        var cardType = function (_v) {
            _v = _v.replace(/\D/g, '');
            var patt = patterns();
            for (var propt in patt) {
                if (patt.hasOwnProperty(propt)) {
                    var test = new RegExp(patt[propt]);
                    if (test.test(_v)) {
                        return propt;
                    }
                }
            }
            return 'none'
        };
        commit(types.SET_PAYMENT_METHOD ,  cardType(value) );
    }
};

//mutations

const mutations = {
    [types.CHECKOUT_REQUEST] (state) {
        state.checkoutStatus = null
    },
    [types.SET_PAYMENT_METHOD] (state , data) {
        state.payment_method = data
    },
    [types.CHECKOUT_SUCCESS] (state , data) {
        //esto lo podemos llamar en una funcion
       if (data.status == 'APPROVED'){
           localStorage.removeItem('ticket');
           localStorage.removeItem('num');
           localStorage.removeItem('buyer');
           state.ticketsBuy = data.data.tickets;
           state.order = data.data.order;
           state.checkoutStatus = 'successful';
           redirect.push({path: '/finish'});
       }else if(data.status == "PENDING")
       {
           localStorage.removeItem('ticket');
           localStorage.removeItem('num');
           localStorage.removeItem('buyer');
           state.ticketsBuy = data.data.tickets;
           state.order = data.data.order;
           state.checkoutStatus = 'pending';
           state.state = 'pendiente';

           if (data.bankUrl){
               window.open(data.bankUrl, '_blank');
           }

           if (data.backUrl){
                state.urlPayment = data.backUrl;
           }
           if (data.backUrlPdf){
               state.urlPdf = data.backUrlPdf;
               window.location.href = data.backUrlPdf;
           }
           
           redirect.push({path: '/finish'});
       }else{
           state.state = 'rechazado';
           state.checkoutStatus = 'failed';
           redirect.push({path: '/finish'});
       }

    },

    [types.CHECKOUT_FAILURE] (state , error ) {
        state.checkoutStatus = 'failed';
    },
    [types.LIST_BANKS] (state , data ) {

        state.banks = data.banks;
    },
};


export default {
    state,
    getters,
    actions,
    mutations
}