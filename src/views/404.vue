<template lang="html">
  <div>
    <v-container
    fluid
    fill-height
    pa-0
    class="burning-spring"
    :style="{ 'height': '300px' }"
    >
      <v-layout
      row wrap
      align-center
      style="background-color: rgba(0, 0, 0, 0.5); color: white;">
      <v-flex xs12 class="text-xs-center">
        <h1 class="display-2">Uh.. This is awkward</h1>
      </v-flex>
    </v-layout>
    <v-layout row wrap align-center>
      <v-flex xs12 class="text-xs-center">
        <h1 class="display-2">404</h1>
        <p class="headline">The page or file you're looking for doesn't exist.</p>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Error: 404 Not Found',
    titleTemplate: '%s | '+process.env.VUE_APP_TITLE
  }
}
</script>

<style lang="css" scoped>
.burning-spring {
  background-image: -webkit-linear-gradient(290deg, #00cdac 0%, #8ddad5 100%);
  background-image: -o-linear-gradient(290deg, #00cdac 0%, #8ddad5 100%);
  background-image: linear-gradient(20deg, #00cdac 0%, #8ddad5 100%);
}
</style>
