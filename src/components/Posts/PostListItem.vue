<template lang="html">
<v-card hover flat @click="handlePostcard">
  <v-img
    class="white--text"
    height="200px"
    :src="article.metadata.featured_image.imgix_url"
  >
    <v-container fill-height fluid>
      <v-layout fill-height>
        <v-flex xs12 align-end flexbox>
          <h2 class="headline" style="text-shadow: 0px 2px 5px #222;">{{ article.title }}</h2>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
  <v-card-title>
    <div>
      <p class="grey--text" v-if="article.metadata.author">{{ article.published_at | date }} by {{ article.metadata.author.metadata.your_name }}</p>
      <p class="grey--text" v-else>{{ article.published_at | date }}</p>
      <p>
        {{ article.metadata.excerpt | truncate(200) | tailing('...') }}
      </p>
    </div>
  </v-card-title>
  <v-card-actions>
    <v-btn color="success" flat outline dark>{{ getSettings.metadata.read_more_button }}</v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'getSettings'
    ]),
    postDialog: {
      get () {
        return this.$store.state.postDialog
      },
      set (val) {
        this.$store.commit('setPostDialog', val)
      }
    }
  },
  methods: {
    handlePostcard () {
      this.$router.push('/post/'+this.article.slug)
      this.$store.commit('setActivePost', this.article)
      this.$store.commit('setPostDialog', true)
      this.$store.dispatch('filter_PostComments', this.article._id)
    }
  },
  created () {
    if (this.$route.params.id == this.article.slug) {
      this.$store.commit('setActivePost', this.article)
      this.$store.commit('setPostDialog', true)
      this.$store.dispatch('filter_PostComments', this.article._id)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
