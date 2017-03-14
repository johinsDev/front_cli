import * as types from '../mutation-types'
import user from './../../services/User'
import redirect from '../../main'

//states

const state = {
    user: [],
    authenticate: false,
    token:''
};

//getters

const getters = {
    getUser: (state) => state.user,
    isAuthenticate: (state) => state.authenticate,
    getToken: (state) => state.token
};

//mutations

const mutations = {
    [types.GET_USER] : (state , {user}) => {
        state.user = user;
        state.authenticate = true;
    },
    [types.SET_USER] : (state , user) => {
        state.user = user;
        state.authenticate = true;
        localStorage.setItem('user' , JSON.stringify(user))
        if (!user){
            localStorage.removeItem('user');
        }
    },
    [types.SET_TOKEN] : (state , token) => {
        state.token = token
    },
};

//actions

const actions = {
    login({commit , dispatch} , data) {

        user.login(data , (data) => {
            commit(types.SET_USER , data.user);
            dispatch('setToken' , data.token);
            redirect.push({path: 'me'})
        } , (err) => {
            dispatch('setErrors' , {errors: err.data})
        });
    },
    register({commit , dispatch} ,data) {
        user.register(data , (data) => {
            commit(types.GET_USER , data.user);
            dispatch('setToken' , data.token)
        } , (err) => {
            dispatch('setErrors' , {errors: err.data})
        });
    },
    setToken({commit} , token) {
        window.localStorage.setItem('token' , token);
        commit(types.SET_TOKEN , token)
        redirect.push({path: 'me'})
    },
    getToken({commit , state}){
        user.getToken((token) => {
            if (token){
                state.authenticate = true;
            }
            commit(types.SET_TOKEN , token)
        });
    },
    logout({commit , state}){
        user.logout(() => {
            commit(types.SET_TOKEN , '');
            commit(types.SET_USER , null);
            state.authenticate = false;
            redirect.push({path: '/'});
        });

    }
};

export default {
    state,
    getters,
    actions,
    mutations
}