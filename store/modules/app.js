const app = {
  namespaced: true,
  state: {
    headerShow: true,
    defaultImg: 'this.src="' + require('@/static/default-img.png') + '"', // 默认图片
    defaultHeadImg:
      'this.src="' + require('@/static/default-head.svg') + '"', // 默认头像
    personList: [],
    editIndexStr: '' // 编辑的Index值
  },
  mutations: {
    TOGGLE_HEADER: (state, isShow) => {
      state.headerShow = isShow
    },
    SET_PERSON_LIST: (state, data) => {
      state.personList = data
    },
    SET_EDIT_INDEX_STR: (state, data) => {
      state.editIndexStr = data
    }
  },
  actions: {
    ToggleHeader({ commit }, isShow) {
      commit('TOGGLE_HEADER', isShow)
    },
    setPersonList({ commit }, data) {
      commit('SET_PERSON_LIST', data)
    },
    setEditIndexStr({ commit }, data) {
      commit('SET_EDIT_INDEX_STR', data)
    }
  }
}

export default app
