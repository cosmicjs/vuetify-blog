// https://vuex.vuejs.org/en/actions.html
import cosmic from '@/plugins/cosmic'

export default {
  initCosmic: ({commit}) => {
    commit('LOADING')
    return cosmic.getObjects().then(data => {
      let settings = data.objects.filter(obj => {
        return obj.type_slug === 'settings'
      })
      commit('SET_Settings', settings)

      let posts = data.objects.filter(obj => {
        return obj.type_slug === 'posts'
      })
      commit('SET_Posts', posts)
      // commit('SET_Total', articles.length)

      // Set state status SUCCESS
      commit('SUCCESS')
    }).catch(err => {
      // Set State status Error
      commit('ERROR', err)
    })
  },
  buildShareLinks: ({commit}, payload) => {
    const post = payload.post
    const permalink = process.env.VUE_APP_DOMAIN + payload.route
    // Facebook Share template
    const FBsharer = 'https://www.facebook.com/sharer/sharer.php?u='
    // Twitter Share template
    const tweet = 'https://twitter.com/home?status=Check%20out%20this%20awesome%20article%3A%20'
    // LinkedIn Share template
    const LinkedIn = 'https://www.linkedin.com/shareArticle?mini=true&url='
    const LinkedInParams = '&title=' + post.title + '&summary='+ post.metadata.excerpt +'&source=Cosmicify'
    // Pinterest Share template
    const Pin = 'https://pinterest.com/pin/create/button/?url='
    const PinParams = '&media='+ 'https://picsum.photos/100/100?random' +'&description='+ post.metadata.excerpt
    // SMS Share template
    const SMS = 'sms://?body=Hey%20check%20this%20out%20'
    // Email Share template
    const Email = 'mailto:?&subject=Check out this article&body='
    // Build Share Links Array
    const shareLinks = [
      { icon: 'mdi-facebook', link: FBsharer + permalink, title: 'Facebook' },
      { icon: 'mdi-twitter', link: tweet + permalink, title: 'Twitter' },
      { icon: 'mdi-linkedin', link: LinkedIn + permalink + LinkedInParams, title: 'LinkedIn' },
      { icon: 'mdi-pinterest', link: Pin + permalink + PinParams, title: 'Pinterest' },
      { icon: 'mdi-message-text', link: SMS + permalink, title: 'Text Message' },
      { icon: 'mdi-email', link: Email + permalink, title: 'Send Email' }
    ]
    // Commit Sharer URLs to store
    commit('SET_ShareLinks', shareLinks)
    // console.log('Set Share Links')
  }
}
