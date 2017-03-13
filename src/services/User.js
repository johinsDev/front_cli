
import Vue from 'vue'
import VueResource from 'vue-resource'

import * as API from './const'

Vue.use(VueResource)


export default  {
    login: function (data , cb , cberror) {
        Vue.http.post(API.LOGIN_URL , data )
            .then((response) =>  cb(response.data.user))
            .catch((err) => cberror(err))
    }
}
