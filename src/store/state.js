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
    { icon: 'mdi-finance', title: 'Services', link: '/services' },
    { icon: 'mdi-eye-outline', title: 'Our Vision', link: '/our-vision' },
    { icon: 'mdi-information', title: 'About', link: '/about' },
    // { icon: 'mdi-account-multiple', title: 'Team', link: '/team' },
    { icon: 'mdi-contact-mail', title: 'Contact', link: '/contact' }
  ]
}
