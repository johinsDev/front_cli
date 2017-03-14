import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import tickets from './modules/ticket'
import auth from './modules/auth'
import data from './modules/data'
import card from './modules/card'
import checkout from './modules/checkout'

import * as types from './mutation-types'

//falta hacer mas modular los servicios, las mutations, las states
//revisar como reusar un formulario
//revisar como no perder el estado atraves de los routes
//revisar la mejor forma de proteger routes o middlewares
//revisar vue recource un progress de la peticion , como tambien un mejor lugar par alos interceptors
Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state : {
        errors: {},
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
        auth,
        data,
        card,
        checkout
    }
})