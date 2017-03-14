
import Vue from 'vue'
import VueResource from 'vue-resource'

import * as API from './const'

Vue.use(VueResource)


export default  {
    login: function (data , cb , cberror) {
        Vue.http.post(API.LOGIN_URL , data )
            .then((response) =>  cb(response.data))
            .catch((err) => cberror(err))
    },
    register: function (data , cb ,cberror) {
        Vue.http.post(API.SIGNUP_URL , data )
            .then((response) =>  cb(response.data))
            .catch((err) => cberror(err))
    },
    getToken(cb) {
        let token = localStorage.getItem('token')
        return cb(token);
    },
    logout(cb){
        localStorage.removeItem('token')
        return cb();
    }

}
