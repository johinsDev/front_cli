import * as types from './mutation-types'
import redirect from '../main'
import ticket from '../services/ticket'

export const add = ({ commit }, id) => {
    window.localStorage.setItem('ticket' , id);
    ticket.findOne((ticket) => {
        commit(types.ADD_TICKET, ticket);
    })

};

export const setErrors = ({commit} , errors) => {
    commit(types.SHOW_ERROR , { errors: errors.errors})
};


export const next = ({commit} , url) => {
    redirect.push({path : url})
}