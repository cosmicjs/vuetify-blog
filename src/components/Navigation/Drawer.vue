<template lang="html">
  <v-navigation-drawer
   v-model="drawer"
   temporary
   app
   :mini-variant="mini"
 >
   <v-list class="pt-0">
     <v-list-tile
     v-for="(item, i) in menu"
     :key="i"
     router
     exact
     :to="item.link">
       <v-list-tile-action>
         <v-icon>{{ item.icon }}</v-icon>
       </v-list-tile-action>
       <v-list-tile-content>
         <v-list-tile-title>{{ item.title }}</v-list-tile-title>
       </v-list-tile-content>
     </v-list-tile>
   </v-list>
 </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    mini: false,
    right: true,
    rightDrawer: false
  }),
  computed: {
    ...mapGetters([
      'menu'
    ]),
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.$store.commit('setDrawer', val)
      }
    }
  },
  methods: {}
}
</script>

<style lang="css">
</style>
