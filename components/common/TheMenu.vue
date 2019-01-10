<template lang="pug">
  nav.menu
    ul.items
      li.item
        nuxt-link(to="/") Home
      li.item
        nuxt-link(to="/select") Select
      li.item
        nuxt-link(to="/dynamic") Dynamic
      li.item
        nuxt-link(to="/history") History
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.items
  display flex
  justify-content center

.item
  margin 0 10px

  a
    font-size 18px
</style>
