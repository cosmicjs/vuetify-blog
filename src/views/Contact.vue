<template>
  <div>
    <v-container
    fluid
    fill-height
    pa-0
    class="burning-spring"
    :style="{ 'height': '200px' }"
    >
      <v-layout
      row wrap
      align-center
      style="background-color: rgba(0, 0, 0, 0.5); color: white;">
        <v-flex xs12 class="text-xs-center">
          <h1 class="display-2">Contact</h1>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container
    fluid
    ma-3
    >
      <v-layout
      row wrap
      align-center
      color="black">
        <v-flex xs12 md8 offset-md2>
          <p class="body-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p class="body-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  export default {
    data: () => ({
      //
    }),
    metaInfo: {
      title: 'Contact',
      titleTemplate: '%s | '+process.env.VUE_APP_TITLE
    }
  }
</script>
<style scoped>
.burning-spring {
  background-image: -webkit-linear-gradient(290deg, #00cdac 0%, #8ddad5 100%);
  background-image: -o-linear-gradient(290deg, #00cdac 0%, #8ddad5 100%);
  background-image: linear-gradient(20deg, #00cdac 0%, #8ddad5 100%);
}
</style>
