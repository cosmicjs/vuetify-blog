// https://vuex.vuejs.org/en/mutations.html

export default {
  setDrawer: (state, payload) => { state.drawer = payload },
  LOADING: (state) => {
    state.status = {
      loading: true,
      success: false,
      error: false
    }
  },
  SUCCESS: (state) => {
    state.status = {
      loading: false,
      success: true,
      error: false
    }
  },
  ERROR: (state, payload) => {
    state.status = {
      loading: false,
      success: false,
      error: payload
    }
  },
  CLEAR_ERROR: (state) => {
    state.status = {
      loading: false,
      success: false,
      error: false
    }
  },
  SET_RequestedArticle: (state, payload) => { state.requestedArticle = payload },
  SET_Cosmic: (state, payload) => { state.cosmicDB = payload },
  SET_Settings: (state, payload) => { state.settings = payload },
  SET_Posts: (state, payload) => { state.posts = payload }
}
