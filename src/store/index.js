import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as state from './states'
import tickets from './modules/ticket'
import auth from './modules/auth'

import * as types from './mutation-types'

//falta hacer mas modular los servicios, las mutations, las states

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state : {
        errors: {}
    },
    actions,
    mutations:{
        [types.SHOW_ERROR] (state , errors) {
            state.errors = errors
        }
    },
    getters,
    modules: {
        tickets,
        auth
    }
})