
import Vue from 'vue'
import VueResource from 'vue-resource'

import * as API from './const'

Vue.use(VueResource)


export default  {
    setData: function (data , item , cb) {
       localStorage.setItem(item , JSON.stringify(data));
        return cb(data);
    },
}
