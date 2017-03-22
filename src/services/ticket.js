
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
    },

   findOne: function (cb) {
    Vue.http.get(API.TIKECT_URL + '/' + window.localStorage.getItem('ticket'))
        .then((response) => {
            let ticket = response.data.ticket;
            ticket['id'] = window.localStorage.getItem('ticket');
            cb(ticket);
        })
        .catch((err) => {
            console.log(err)
        })
    },
    getNum: function (cb) {
        let num = localStorage.getItem('num');
        return cb(num)
    },
    setNum: function (num , cb) {
        localStorage.setItem('num' , num);
        return cb(num)
    },
    empty: (cb) => {
        localStorage.removeItem('num');
        localStorage.removeItem('ticket');
        cb()
    }

}