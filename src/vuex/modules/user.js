import {requestLogin} from '../../api/api'
import * as types from '../types'

const state = {
    // 用户登录状态
    loginStatus: JSON.parse(sessionStorage.getItem('loginStatus')) || false,
    // 用户登录信息
    userInfo: JSON.parse(sessionStorage.getItem('userInfo')) || {},
    // 用户数据信息
    userData: []
}

const actions = {
    /**
     * 用户登录
     */
    setUserInfo({ commit }, res) {
        sessionStorage.setItem('userInfo', JSON.stringify(res))
        sessionStorage.setItem('loginStatus', true)
        commit(types.SET_USER_INFO, res)
        commit(types.SET_LOGIN_STATUS, true)
    },

    /**
     * 退出登录
     */
    setSignOut({ commit }) {
        sessionStorage.removeItem('loginStatus')
        sessionStorage.removeItem('userInfo')
        commit(types.SET_LOGIN_STATUS, false)
        commit(types.SET_USER_INFO, {})
    },

    /**
     * 请求用户信息
     */
    getUserData({ commit }, id) {
        commit(types.COM_LOADING_STATUS, true)
        requestLogin(id)
            .then(res => {
                commit(types.COM_LOADING_STATUS, false)
                commit(types.GET_USER_DATA, res.data)
            })
    }
}

const getters = {
    getUserData: state => state.userData,
    loginStatus: state => state.loginStatus,
    userInfo: state => state.userInfo
}

const mutations = {
    [types.SET_USER_INFO](state, res) {
        state.userInfo = res
    },

    [types.SET_LOGIN_STATUS](state, status) {
        state.loginStatus = status
    },

    [types.GET_USER_DATA](state, res) {
        state.userData = res
    }
    
}

export default {
    state,
    actions,
    getters,
    mutations
}