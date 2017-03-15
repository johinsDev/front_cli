
import VueResource from 'vue-resource'

import Vue from 'vue'
import auth from './User'

import * as API from './const'

Vue.use(VueResource);

Vue.http.interceptors.push(function(request, next) {
    let token = auth.getToken((token) => token );
    request.headers.set('Authorization', 'Bearer ' + token);

    next();
});

export default  {
    buyTicket: function (data , cb , cbError) {
        Vue.http.post(API.CHECKOUT_URL , data)
            .then((response) =>  cb(response.data))
            .catch((error) => cbError(error))
    },
}

