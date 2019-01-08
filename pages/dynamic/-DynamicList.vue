<template lang="pug">
  div
    ul.items
      li.item(
        v-for="(item, index) in items"
        :key="index"
      )
        nuxt-link(
          :to=`{
            name: 'dynamic-id',
            path: '/dynamic/:id',
            params: { id: item.id }
          }`
        ) {{ item.id }}
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        {
          id: 'alpah'
        },
        {
          id: 'beta'
        },
        {
          id: 'charlie'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.items
  display flex
  justify-content center
  margin-bottom 30px
  padding 0

.item
  list-style none

  &:not(:last-child)
    margin-right 20px

  a
    font-size 32px
</style>
