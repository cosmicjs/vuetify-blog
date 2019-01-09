<template lang="html">
<v-card hover flat>
  <v-img
    class="white--text"
    height="200px"
    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
  >
    <v-container fill-height fluid>
      <v-layout fill-height>
        <v-flex xs12 align-end flexbox>
          <span class="headline">{{ article.title }}</span>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
  <v-card-title>
    <div>
      <span class="grey--text">{{ article.published_at | date }}</span><br>
      <span>{{ article.metadata.excerpt }}</span>
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
