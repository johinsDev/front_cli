import * as types from './mutation-types'

export const add = ({ commit }, id) => {
    commit(types.ADD_TICKET, {
        id: id
    });
}