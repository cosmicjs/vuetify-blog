<template lang="html">
<v-card>
  <v-img
    class="white--text"
    height="200px"
    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
  >
    <v-container fill-height fluid>
      <v-layout fill-height>
        <v-flex xs12 align-end flexbox>
          <span class="headline">Blog Post Title</span>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
  <v-card-title>
    <div>
      <span class="grey--text">Jan 10th, 2019</span><br>
      <span>Excerpt Whitehaven Beach Whitsunday Island, Whitsunday Islands</span>
    </div>
  </v-card-title>
  <v-card-actions>
    <v-btn flat color="orange">Share</v-btn>
    <v-btn flat color="orange">Continue Reading</v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
