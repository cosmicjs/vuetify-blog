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
  }
}
