<template>
  <div>
    <v-container
    fluid
    fill-height
    pa-0
    class="ariels-smile"
    :style="{ 'height': '200px' }"
    >
      <v-layout
      row wrap
      align-center
      style="background-color: rgba(0, 0, 0, 0.5); color: white;">
      <v-flex xs12 class="text-xs-center">
        <h1 class="display-2">About</h1>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>
<script>
  export default {
    data: () => ({
      //
    })
  }
</script>
<style scoped>
.ariels-smile {
  background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
}
</style>
