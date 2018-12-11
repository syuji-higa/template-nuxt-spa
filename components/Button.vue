<template>
  <button>{{ name }}</button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: 'Button'
    }
  }
}
</script>

<style lang="stylus">
button
  padding 10px 15px
  border 1px solid #389
  border-radius 6px
  color #389
  font-size 24px
  cursor pointer
  transition .1s all ease-in-out

  &:hover
    background-color #389
    color #fff
</style>
