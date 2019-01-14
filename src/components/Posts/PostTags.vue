<template lang="html">
  <div class="text-xs-left pl-3">
    <v-chip
    label
    color="grey lighten-1"
    text-color="black"
    v-for="(tag, i) in tags"
    :key="i"
    >{{ tag.tag }}</v-chip>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="css">
</style>
