<template lang="html">
  <div>
    <v-card
     class="flex"
     flat
     tile
     v-if="enableSocialIcons"
     >
     <v-card-title class="primary white--text">
       <strong class="subheading">Get connected with me on social networks!</strong>
       <v-spacer></v-spacer>
       <v-btn
         v-for="(icon, i) in socialIcons"
         :key="i"
         :href="icon.profile_url"
         dark
         icon
       >
         <v-icon size="24px" v-text="icon.icon_key"></v-icon>
       </v-btn>
     </v-card-title>
   </v-card>
    <v-footer
      height="auto"
      color="primary darken-1">
      <v-layout row wrap>
        <v-flex
        class="attribution"
          text-xs-center
          text-sm-left
          white--text
          xs12
          sm6
          pl-3
        >
          Made with <v-icon small color="red lighten-1">mdi-heart</v-icon> by <a href="https://www.aaronvail.io?ref=cosmicify" target="_blank">Aaron Vail</a> and <a href="https://vuetifyjs.com?ref=cosmicify" target="_blank">Vuetify</a> | Proudly Powered by <a href="https://cosmicjs.com/?ref=SJHUGTXvf" target="_blank">Cosmic JS</a>
        </v-flex>
        <v-flex v-if="footerCopyright"
        class="attribution"
        text-xs-center
        text-sm-right
        white--text
        xs12
        sm6
        pr-3
        >
        {{ footerCopyright }} {{ getCurrentYear }}
      </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters([
      'menu',
      'getSocialSettings',
      'getSettings'
    ]),
    footerCopyright () {
      return this.getSettings.metadata.footer_copyright
    },
    enableSocialIcons () {
      return this.getSocialSettings.metadata.enable_social_profile_section
    },
    socialIcons () {
      return this.getSocialSettings.metadata.social_profiles
    },
    getCurrentYear () {
      return (new Date()).getFullYear()
    }
  }
}
</script>

<style lang="css" scoped>
.attribution a[href] {
  text-decoration: underline;
  color: #ccc;
}
</style>
