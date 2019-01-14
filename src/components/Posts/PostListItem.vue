<template lang="html">
<v-card hover flat>
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
    <slot></slot>
    <!-- <v-btn flat color="green">Continue Reading</v-btn> -->
  </v-card-actions>
</v-card>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: false,
      default: () => ({
        title: 'Default Post Title'
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
