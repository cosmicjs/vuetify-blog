// https://vuex.vuejs.org/en/state.html

export default {
  drawer: false,
  status: {
    loading: false,
    success: false,
    error: false
  },
  settings: {},
  menu: [
    { icon: 'mdi-home', title: 'Home', link: '/' },
    { icon: 'mdi-information', title: 'About', link: '/about' },
    { icon: 'mdi-contact-mail', title: 'Contact', link: '/contact' }
  ]
}
