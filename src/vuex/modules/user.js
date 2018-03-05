import * as types from '../types'

const state = {
    // 用户登录状态
    loginStatus: JSON.parse(sessionStorage.getItem('loginStatus')) || false,
    // 用户登录信息
    userInfo: JSON.parse(sessionStorage.getItem('userInfo')) || {},
    // 用户数据信息
    userData: JSON.parse(sessionStorage.getItem('userData')) || {},
}

const actions = {
    /**
     * 用户登录
     */
    setUserInfo({ commit }, res) {
        sessionStorage.setItem('userInfo', JSON.stringify(res))
        sessionStorage.setItem('loginStatus', true)
        commit(types.SET_USER_INFO, res)
        commit(types.SET_LOGIN_STATUS, false)
    },

    /**
     * 退出登录
     */
    setSignOut({ commit }) {
        sessionStorage.removeItem('loginStatus')
        sessionStorage.removeItem('userInfo')
        sessionStorage.removeItem('userData')
        commit(types.SET_LOGIN_STATUS, false)
        commit(types.SET_USER_INFO, {})
        commit(types.SET_USER_DATA, {})
    },

    /**
     * 设置用户信息
     */
    setUserData({ commit },res) {
        sessionStorage.setItem('userData', JSON.stringify(res))
        commit(types.COM_LOADING_STATUS, false)
        commit(types.SET_USER_DATA, res)
    },

    /**
     * 添加用户课程
    */
    addUserClass({ commit },res) {
        commit(types.ADD_USER_CLASS, res)
    },
}

const getters = {
    getUserData: state => state.userData,
    loginStatus: state => state.loginStatus,
    userInfo: state => state.userInfo,
}

const mutations = {
    [types.SET_USER_INFO](state, res) {
        state.userInfo = res
    },

    [types.SET_LOGIN_STATUS](state, status) {
        state.loginStatus = status
    },

    [types.SET_USER_DATA](state, res) {
        state.userData = res
    },

    [types.ADD_USER_CLASS](state, res) {
        state.userData.nowLearnClass.push(res);
    },
    
}

export default {
    state,
    actions,
    getters,
    mutations
}