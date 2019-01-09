<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md6 lg4 pa-2 v-for="(n, i) in 9" :key="i">
        <PostListItem></PostListItem>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PostListItem from '@/components/Posts/PostListItem'
export default {
  components: {
    PostListItem
  },
  metaInfo: {
    title: 'Home',
    titleTemplate: '%s | '+process.env.VUE_APP_TITLE
  }
}
</script>
