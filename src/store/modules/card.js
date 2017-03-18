import Card from './../../services/Card'
import * as types from '../mutation-types'
//state

const state = {
    cards: [],
    token_card : '',
    card: {}
};

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
        let user = data.user
        Card.create(card , (data) => {
            commit(types.SET_TOKEN_CARD, data.card.creditCardTokenId);
            commit(types.SET_CARD, data.card);
            dispatch('checkout' , {
                credit_card: data.card.creditCardTokenId,
                ticket: localStorage.getItem('ticket'),
                data: rootState.data.buyer,
                quantity: rootState.tickets.num_tickets,
                user: user
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