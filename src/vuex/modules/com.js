import * as types from '../types'

/**
 * App通用配置
 */
const state = {
    loading: false,         //暂时只开发这一个 
    showToast: false,
    leftNavStatus: false,
    showSuccess: true,
	showFail: false,
}
const actions = {
    setLoadingState({ commit }, status) {
        commit(types.COM_LOADING_STATUS, status)
    },
}
const getters = {
    loading: state => state.loading,
    showToast: state => state.showToast,
    showAlert: state => state.showAlert
}
const mutations = {
    [types.COM_LOADING_STATUS](state, status) {
        state.loading = status
    },
}


export default {
    state,
    actions,
    getters,
    mutations
}