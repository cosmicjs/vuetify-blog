<template lang="html">
  <div>
    <v-card
     class="flex"
     flat
     tile
     v-if="enableSocialIcons"
     >
     <v-card-title class="light-blue white--text">
       <strong class="subheading">Get connected with me on social networks!</strong>
       <v-spacer></v-spacer>
       <v-btn
         v-for="(icon, i) in socialItems"
         :key="i"
         :href="icon.profile_url"
         dark
         icon
       >
         <v-icon size="24px" v-text="icon.icon"></v-icon>
       </v-btn>
     </v-card-title>
   </v-card>
    <v-footer
      height="auto"
      color="primary">
      <v-layout row wrap>
        <v-flex
        class="attribution"
          text-xs-center
          text-sm-left
          white--text
          xs12
          pl-3
        >
          Made with <v-icon small color="red lighten-1">mdi-heart</v-icon> by <a href="#">Vuetify</a> and <a href="#">Aaron Vail</a> | Proudly Powered by <a href="#">Cosmic JS</a>
        </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    enableSocialIcons: true,
    socialItems: [
      { title: 'Facebook', profile_url: 'https://facebook.com', icon: 'mdi-facebook' },
      { title: 'LinkedIn', profile_url: 'https://linkedin.com', icon: 'mdi-linkedin' },
      { title: 'Instagram', profile_url: 'https://instagram.com', icon: 'mdi-instagram' },
      { title: 'Twitter', profile_url: 'https://twitter.com', icon: 'mdi-twitter' }
    ]
  }),
  computed: {
    ...mapGetters([
      'menu'
    ]),
    getCurrentYear () {
      return (new Date()).getFullYear()
    }
  }
}
</script>

<style lang="css" scoped>
.attribution a[href] {
  text-decoration: none;
  color: #ccc;
}
</style>
