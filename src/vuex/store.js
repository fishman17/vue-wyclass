import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import com from './modules/com'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        com
    }
})