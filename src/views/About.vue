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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis eu. Sed sed risus pretium quam vulputate dignissim suspendisse. Integer quis auctor elit sed vulputate mi. Pellentesque diam volutpat commodo sed. Ipsum dolor sit amet consectetur. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Id porta nibh venenatis cras sed felis eget velit aliquet. Placerat vestibulum lectus mauris ultrices eros. In nibh mauris cursus mattis molestie a. Dis parturient montes nascetur ridiculus mus. Lacus sed turpis tincidunt id. Praesent elementum facilisis leo vel fringilla est. At ultrices mi tempus imperdiet nulla malesuada pellentesque.
        </p>
        <p class="body-2">
          Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. Mauris augue neque gravida in fermentum. Mollis aliquam ut porttitor leo. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Morbi enim nunc faucibus a. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Mi ipsum faucibus vitae aliquet. Integer vitae justo eget magna fermentum iaculis eu non. Vel eros donec ac odio tempor. Nulla at volutpat diam ut venenatis tellus in. Rhoncus mattis rhoncus urna neque viverra justo. Ligula ullamcorper malesuada proin libero nunc. Pellentesque id nibh tortor id aliquet lectus. Mus mauris vitae ultricies leo. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien.
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
    metaInfo: () => ({
      title: 'About',
      titleTemplate: '%s | '+process.env.VUE_APP_TITLE
    })
  }
</script>
<style scoped>
.ariels-smile {
  background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
}
</style>
