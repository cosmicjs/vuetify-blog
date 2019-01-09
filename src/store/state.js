// https://vuex.vuejs.org/en/state.html

export default {
  drawer: false,
  status: {
    loading: false,
    success: false,
    error: false
  },
  posts: [],
  menu: [
    { icon: 'mdi-home-outline', title: 'Home', link: '/' },
    { icon: 'mdi-information-outline', title: 'About', link: '/about' },
    { icon: 'mdi-email-outline', title: 'Contact', link: '/contact' }
  ],
  settings: {}
}
