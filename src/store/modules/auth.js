import * as types from '../mutation-types'
import user from './../../services/User'
//states

const state = {
    user: [],
    authenticate: false,
    token:''
};

//getters

const getters = {
    getUser: (state) => state.user,
    isAuthenticate: (state) => state.authenticate
};

//mutations

const mutations = {
    [types.GET_USER] : (state , {user}) => {
        state.user = user;
        state.authenticate = true;
    }
};

//actions

const actions = {
    login({commit , dispatch} , email , password) {
        let data = {
            email: email,
            password: password
        };
        user.login(data , (user) => {
            commit(types.GET_USER , {user})
        } , (err) => {
            dispatch('setErrors' , {errors: err.data})
        });
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}