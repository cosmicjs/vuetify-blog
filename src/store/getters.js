// https://vuex.vuejs.org/en/getters.html

export default {
  menu: state => { return state.menu },
  getSettings: state => { return state.settings },
  loading: state => { return state.status.loading }
}
