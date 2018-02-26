import * as types from '../types'

/**
 * App通用配置
 */
const state = {
    loading: false,
    showToast: false,
    leftNavStatus: false,
    showSuccess: true,
	showFail: false,
    toastMsg: '操作成功',
    showTimePicker: false,
    alertMsg: '退出登录',
    showAlert: false
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