import * as types from './mutation-types'
import redirect from '../main'
import ticket from '../services/ticket'

export const add = ({ commit , rootState , dispatch}, id) => {
    window.localStorage.setItem('ticket' , id);
    if (!rootState.tickets.num_tickets){
        rootState.data.buyer = [
            {
                name: '',
                last_name: '',
                cc: '',
                license: '',
                email: '',
            }
        ]
        dispatch('setBuyer' , rootState.data.buyer);
        ticket.setNum(1 , (num) => {
            commit(types.SET_NUM_TICKETS , num)
        })
    }
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