import * as types from './mutation-types'
import redirect from '../main'

export const add = ({ commit }, id) => {
    window.localStorage.setItem('ticket' , id)
    commit(types.ADD_TICKET, {
        id: id
    });
};

export const setErrors = ({commit} , errors) => {
    commit(types.SHOW_ERROR , { errors: errors.errors})
};


export const next = ({commit} , url) => {
    redirect.push({path : url})
}