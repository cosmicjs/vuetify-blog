<template lang="html">
  <v-layout row>
    <v-btn @click.stop="handleDialog()" color="success" flat outline dark>Continue Reading</v-btn>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark fixed color="primary">
          <v-btn icon dark @click.stop="handleCloseDialog()">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ article.title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn color="white" outline round flat @click="handleShare(article)">Share</v-btn>
          <v-toolbar-items>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader style="padding-top: 85px;">
          <h1 class="hidden-md-and-up px-3 font-weight-light display-1">{{ article.title }}</h1>
          <v-subheader>Posted on {{ article.published_at | date }} by {{ article.metadata.author.metadata.your_name }}</v-subheader>
          <!-- <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Content filtering</v-list-tile-title>
              <v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile> -->
          <v-layout
          row justify-center py-2
          class="text-xs-center">
            <v-responsive max-width="600px">
              <v-img alt="featured image" src="https://picsum.photos/600/350/?random"></v-img>
            </v-responsive>
          </v-layout>
          <v-list-tile-content class="px-3" v-html="article.content">
          </v-list-tile-content>
        </v-list>
        <!-- <v-divider></v-divider> -->
        <!-- COMMENTS -->
        <v-list three-line subheader>
        <v-subheader>Comments</v-subheader>
         <template v-for="(comment, i) in comments">
           <v-divider
            :key="i"
            inset
           ></v-divider>

           <v-list-tile
             :key="comment.title"
             avatar
           >
             <v-list-tile-avatar>
               <v-icon color="primary" large>mdi-account-circle-outline</v-icon>
               <!-- <img :src="comment.avatar"> -->
             </v-list-tile-avatar>

             <v-list-tile-content>
               <v-list-tile-title v-html="comment.title"></v-list-tile-title>
               <v-list-tile-sub-title v-html="comment.subtitle"></v-list-tile-sub-title>
             </v-list-tile-content>
           </v-list-tile>
         </template>
       </v-list>
      </v-card>
    </v-dialog>
    <!-- SHARE MENU -->
    <div class="text-xs-center">
    <v-bottom-sheet v-model="shareSheet">
      <!-- <v-btn
        slot="activator"
        color="purple"
        dark
      >
        Click me
      </v-btn> -->

      <v-list>
        <v-subheader>Share via..</v-subheader>
        <v-list-tile
          v-for="(sharer, i) in getShareLinks"
          :key="i"
          :href="sharer.link"
          target="_blank"
        >
          <v-list-tile-avatar>
            <v-avatar size="32px" tile>
              <!-- <img
                :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                :alt="tile.title"
              > -->
              <v-icon>{{ sharer.icon }}</v-icon>
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-title>{{ sharer.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
  </div>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    dialog: false,
    comments: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: `<span class='text--primary'>Ali Connors</span>`,
        subtitle: 'll be in your neighborhood doing errands this weekend. Do you want to hang out?'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: `<span class='text--primary'>Trevor Hansen</span>`,
        subtitle: 'Wish I could come, but I\'m out of town this weekend.'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: `<span class='text--primary'>Sandra Adams</span>`,
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
      }
    ],
    shareSheet: false,
    tiles: [
      { icon: 'mdi-facebook', link: 'https://facebook.com', title: 'Facebook' },
      { icon: 'mdi-twitter', link: 'https://twitter.com', title: 'Twitter' },
      { icon: 'mdi-linkedin', link: 'https://linkedin.com', title: 'LinkedIn' },
      { icon: 'mdi-pinterest', link: 'https://pinterest.com', title: 'Pinterest' },
      { icon: 'mdi-message-text', link: 'sms://+14035550185?body=I%27m%20interested%20in%20your%20product', title: 'Text Message' },
      { icon: 'mdi-email', link: 'mailto:test@test.com', title: 'Send Email' }
    ]
  }),
  computed: {
    ...mapGetters([
      'getShareLinks'
    ])
  },
  created () {
    if (this.$route.params.id == this.article.slug) {
      this.dialog = true
    }
  },
  methods: {
    facebookShare () {
      let sharer = 'https://www.facebook.com/sharer/sharer.php?u='
      let permalink = process.env.VUE_APP_DOMAIN + this.$route.path
      return sharer + permalink
    },
    handleShare (post) {
      this.shareSheet = true
      const payload = {
        route: this.$route.path,
        post
      }
      this.$store.dispatch('buildShareLinks', payload)
      // let permalink = process.env.VUE_APP_DOMAIN + this.$route.path
      // // Facebook Share template
      // let FBsharer = 'https://www.facebook.com/sharer/sharer.php?u='
      // // Twitter Share template
      // let tweet = 'https://twitter.com/home?status=Check%20out%20this%20awesome%20article%3A%20'
      // // LinkedIn Share template
      // let LinkedIn = 'https://www.linkedin.com/shareArticle?mini=true&url='
      // let LinkedInParams = '&title=' + post.title + '&summary='+ post.metadata.excerpt +'&source=Cosmicify'
      // // Pinterest Share template
      // let Pin = 'https://pinterest.com/pin/create/button/?url='
      // let PinParams = '&media='+ 'https://picsum.photos/100/100?random' +'&description='+ post.metadata.excerpt
      // // SMS Share template
      // let SMS = 'sms://?body=Hey%20check%20this%20out%20'
      // // Email Share template
      // let Email = 'mailto:?&subject=Check out this article&body='
      // // Build Share Links Array
      // let shareLinks = [
      //   { icon: 'mdi-facebook', link: FBsharer + permalink, title: 'Facebook' },
      //   { icon: 'mdi-twitter', link: tweet + permalink, title: 'Twitter' },
      //   { icon: 'mdi-linkedin', link: LinkedIn + permalink + LinkedInParams, title: 'LinkedIn' },
      //   { icon: 'mdi-pinterest', link: Pin + permalink + PinParams, title: 'Pinterest' },
      //   { icon: 'mdi-message-text', link: SMS + permalink, title: 'Text Message' },
      //   { icon: 'mdi-email', link: Email + permalink, title: 'Send Email' }
      // ]
      // // Commit Link URLs to store
      // this.$store.commit('SET_ShareLinks', shareLinks)
    },
    handleDialog () {
      this.dialog = true
      this.$router.push('/post/'+this.article.slug)
    },
    handleCloseDialog () {
      this.dialog = false
      this.$router.push('/')
    }
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="css">
</style>
