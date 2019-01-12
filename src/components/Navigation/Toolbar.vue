<template lang="html">
  <div>
    <v-toolbar fixed app :color="color">
      <v-toolbar-side-icon
      @click.stop="onDrawer"
      class="hidden-md-and-up"></v-toolbar-side-icon>
      <router-link to="/" exact>
        <!-- <img src="../assets/img/tealeafai-small-logo.png" style="max-height:38px;" /> -->
        <v-toolbar-title class="headline text-uppercase">
          <span>Cosmicify</span>
          <span class="font-weight-light"> BLOG</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
        flat
        v-for="(item, i) in this.menu"
        :key="i"
        router
        :to="item.link">
          <!-- <v-icon color="primary" left>{{item.icon}}</v-icon> -->
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <Drawer></Drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Drawer from './Drawer'
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: 'white'
    }
  },
  components: {
    Drawer
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters(['menu'])
  },
  methods: {
    onDrawer () {
      this.$store.commit('setDrawer', true)
    }
  }
}
</script>

<style lang="css" scoped>
a {
  text-decoration: none;
}
</style>
