<template>
  <v-app>
    <div class="text-xs-center" v-if="loading">
      <v-progress-circular
        :size="50"
        color="green"
        indeterminate
      ></v-progress-circular>
    </div>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Cosmicify</span>
        <span class="font-weight-light"> MATERIAL BLOG</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <transition appear name="fade">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  metaInfo: {
    title: 'App',
    titleTemplate: '%s | '+process.env.VUE_APP_TITLE,
    meta: [
      // OpenGraph data (Most widely used)
      { property: 'og:title', content: 'Predict Your Customer\'s Next Move | Tea Leaf AI' },
      { property: 'og:site_name', content: 'Tea Leaf AI' },
      // The list of types is available here: http://ogp.me/#types
      { property: 'og:type', content: 'website' },
      // Should the the same as your canonical link, see below.
      { property: 'og:url', content: 'https://www.tealeafai.com' },
      { property: 'og:image', content: 'https://www.tealeafai.com/images/Logo.jpg' },
      // Often the same as your meta description, but not always.
      { property: 'og:description', content: 'Actionable Digital Marketing, Data Analytics, and Information Security Insights via Artificial Intelligence (AI) specialization.' },
      // Twitter card
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: 'https://www.tealeafai.com' },
      { name: 'twitter:title', content: 'Predict Your Customer\'s Next Move | Tea Leaf AI' },
      { name: 'twitter:description', content: 'Actionable Digital Marketing, Data Analytics, and Information Security Insights via Artificial Intelligence (AI) specialization.' },
      // Your twitter handle, if you have one.
      { name: 'twitter:creator', content: '@tealeafai' },
      { name: 'twitter:image:src', content: 'https://www.tealeafai.com/images/Logo.jpg' },
      // Google / Schema.org markup:
      { itemprop: 'name', content: '%s | Tea Leaf AI' },
      { name: 'description', itemprop: 'description', content: 'Actionable Digital Marketing, Data Analytics, and Information Security Insights via Artificial Intelligence (AI) specialization.' },
      { itemprop: 'image', content: 'https://www.tealeafai.com/images/Logo.jpg' }
    ]
  },
  data () {
    return {
      //
    }
  },
  computed: {
    ...mapGetters([
      'loading'
    ])
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
transition-property: opacity;
transition-duration: .25s;
}
.fade-enter-active {
transition-delay: .25s;
}
.fade-enter, .fade-leave-active {
opacity: 0;
}
</style>
