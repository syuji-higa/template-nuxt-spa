<template lang="pug">
  ul.items
    li.item(
      v-for="(item, index) in histories"
      :key="index"
    ) {{ item }}
</template>

<script>
export default {
  computed: {
    histories() {
      return this.$store.state.histories
    }
  }
}
</script>

<style lang="stylus" scoped>
.items
  padding 0

.item
  padding 14px
  border-bottom 1px solid $main-color
  list-style none
  text-align left
  font-size 24px

  &:first-child
    border-top 1px solid $main-color
</style>
