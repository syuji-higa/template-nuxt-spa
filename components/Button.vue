<template>
  <button
    :class="{ 'is-selected': isSelected }"
    @click="onClick()">
    <slot>Button</slot>
  </button>
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

<style lang="stylus">
button
  padding 10px 15px
  border 1px solid #389
  border-radius 6px
  color #389
  font-size 24px
  cursor pointer
  transition .1s all ease-in-out

  &.is-selected
  &:hover
    background-color #389
    color #fff
</style>
