<template lang="html">
  <section :class="this.color">
    <v-layout row wrap :class="this.rowSpace">
      <v-flex xs12 class="text-xs-center">
          <slot></slot>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    },
    rowSpace: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="css">
</style>
