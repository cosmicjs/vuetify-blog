<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 lg4 pa-2 v-for="(post) in getPosts" :key="post._id">
        <PostListItem :article="post"></PostListItem>
      </v-flex>
      <app-post-dialog v-if="getActivePost" :article="getActivePost"></app-post-dialog>
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
  },
  computed: {
    ...mapGetters([
      'loading',
      'getPosts',
      'getActivePost'
    ]),
  },
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | '+process.env.VUE_APP_TITLE
  }
}
</script>
