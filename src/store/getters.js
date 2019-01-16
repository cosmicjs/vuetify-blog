// https://vuex.vuejs.org/en/getters.html

export default {
  menu: state => { return state.menu },
  getSettings: state => { return state.settings },
  getPosts: state => { return state.posts },
  getActivePost: state => { return state.activePost },
  loading: state => { return state.status.loading },
  getShareLinks: state => { return state.shareLinks },
  getSocialSettings: state => { return state.socialSettings },
  getPostComments: state => { return state.postComments }
}
