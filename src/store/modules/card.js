import Card from './../../services/Card'
import * as types from '../mutation-types'
//state

const state = {
    cards: [],
    token_card : '',
    card: {}
};
//cosas que no me gustas el checkout final
//el agregar la tarjeta
//algunas cosas del localstorage
//algunos componentes por reusar
//dividar os componentes en carpetas
//el orden en que se llaman algune¿os datos en los componentes
//getters

const getters = {
    getAllCards : (state) => state.cards,
    getCard : (state) => state.card,
    getTokenCard : (state) => state.token_card
};

//actions

const actions = {
    setCard ({commit , dispatch , rootState} , data) {
        let card = data.card;
        card.identificationNumber = data.user.identificationNumber;
        card.name = data.user.name;
        let user = data.user;
        let payment_method = data.payment_method
        Card.create(card , (data) => {
            commit(types.SET_TOKEN_CARD, data.card.creditCardTokenId);
            commit(types.SET_CARD, data.card);
            dispatch('checkout' , {
                credit_card: data.card.creditCardTokenId,
                ticket: localStorage.getItem('ticket'),
                data: rootState.data.buyer,
                quantity: rootState.tickets.num_tickets,
                user: user,
                payment_method: payment_method
            })
        }, (error) => {
            console.log(error)
            //dispatch('setErrors' , error)
        })
    }
};

//mutations

const mutations = {
    [types.SET_TOKEN_CARD] : (state ,token) => {
        state.token_card = token;
        localStorage.setItem('token_card' , token);
    },
    [types.SET_CARD] : (state ,card) => {
        state.card = card;
        localStorage.setItem('card' , JSON.stringify(card));
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}