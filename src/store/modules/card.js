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
    setCard ({commit , dispatch} , data) {
        Card.create(data , (data) => {
            commit(types.SET_TOKEN_CARD, data.card.creditCardTokenId);
            commit(types.SET_CARD, data.card);
            commit(types.SHOW_ERROR , null)
        }, (error) => {
            dispatch('setErrors' , error)
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