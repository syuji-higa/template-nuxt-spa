<template lang="pug">
  button(
    class="button"
    :class="{ 'is-selected': isSelected }"
    @click="onClick"
  )
    slot Button
</template>

<script>
export default {
  props: {
    isSelected: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus" scoped>
.button
  padding 10px 15px
  border 1px solid $main-color
  border-radius 6px
  color $main-color
  font-size 24px
  cursor pointer
  transition .1s all ease-in-out

  &.is-selected
  &:hover
    background-color $main-color
    color #fff
</style>
