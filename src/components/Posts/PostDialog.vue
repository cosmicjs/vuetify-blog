<template lang="html">
  <v-layout row>
    <v-btn @click.stop="handleDialog()" color="success" flat dark>Continue Reading</v-btn>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click.stop="handleCloseDialog()">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ article.title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="sheet = true">Share</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>{{ article.published_at | date }}</v-subheader>
          <!-- <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>Content filtering</v-list-tile-title>
              <v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile> -->
          <v-list-tile avatar>
            <v-list-tile-content>
              <h1>more content header</h1>
              <p>Content</p>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>Comments</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Notifications</v-list-tile-title>
              <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Sound</v-list-tile-title>
              <v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Auto-add widgets</v-list-tile-title>
              <v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-dialog>

    <!-- SHARE MENU -->
    <div class="text-xs-center">
    <v-bottom-sheet v-model="sheet">
      <!-- <v-btn
        slot="activator"
        color="purple"
        dark
      >
        Click me
      </v-btn> -->

      <v-list>
        <v-subheader>Share using</v-subheader>
        <v-list-tile
          v-for="tile in tiles"
          :key="tile.title"
          @click="sheet = false"
        >
          <v-list-tile-avatar>
            <v-avatar size="32px" tile>
              <!-- <img
                :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                :alt="tile.title"
              > -->
              <v-icon>{{ tile.icon }}</v-icon>
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
  </div>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    sheet: false,
    tiles: [
      { icon: 'mdi-facebook', img: 'keep.png', title: 'Facebook' },
      { icon: 'mdi-twitter', img: 'inbox.png', title: 'Twitter' },
      { icon: 'mdi-linkedin', img: 'hangouts.png', title: 'LinkedIn' },
      { icon: 'mdi-message-text', img: 'messenger.png', title: 'Text Message' },
      { icon: 'mdi-email', img: 'google.png', title: 'Send Email' }
    ]
  }),
  methods: {
    handleDialog () {
      this.dialog = true
      // console.log(this.article.slug)
      this.$router.push({query: {post: this.article.slug}})
    },
    handleCloseDialog () {
      this.dialog = false
      this.$router.push({query: null})
    }
  },
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

<style lang="css">
</style>
