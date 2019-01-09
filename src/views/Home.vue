<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 lg4 pa-2 v-for="(post) in getPosts" :key="post._id">
        <PostListItem :article="post">
          <app-post-dialog v-if="requestedArticle == post.slug" :article="post" :open="true"></app-post-dialog>
          <app-post-dialog v-else :article="post" :open="false"></app-post-dialog>
        </PostListItem>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PostListItem from '@/components/Posts/PostListItem'
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    //
  }),
  components: {
    PostListItem
  },
  mounted () {
    const postSlug = this.$route.query.post
    if (postSlug) {
      this.$store.commit('SET_RequestedArticle', true)
    }
  },
  computed: {
    ...mapGetters([
      'loading',
      'getPosts',
      'requestedArticle'
    ]),
    // slugPost () {
    //   if (this.$route.query.post) {
    //     this.getPosts.filter(el => {
    //       return el.slug == this.$route.query.post
    //     })
    //   } else { return }
    // }
  },
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | '+process.env.VUE_APP_TITLE
  }
}
</script>
