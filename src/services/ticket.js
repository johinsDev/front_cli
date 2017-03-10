
import Vue from 'vue'
import VueResource from 'vue-resource'

import * as API from './const'

Vue.use(VueResource)


export default  {
    get: function (cb) {
        Vue.http.get(API.TIKECT_URL)
            .then((response) =>  cb(response.data.tickets))
            .catch((err) => {
                console.log(err)
            })
    }
}