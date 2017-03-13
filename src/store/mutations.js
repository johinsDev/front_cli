import * as types from './mutation-types'

export default {
    [types.SHOW_ERROR] : ({state} , errors) => {
        state.errors = errors
    }
}