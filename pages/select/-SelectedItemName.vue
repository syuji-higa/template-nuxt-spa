<template>
  <div>
    <p
      :class="{ 'is-selected': isSelected }"
      class="item"
    >
      <slot>Selected item name</slot>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    isSelected: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.item
  padding 10px 20px
  border 3px solid $main-color
  color #eee
  text-align center
  font-weight bold
  font-size 32px

  &.is-selected
    color $main-color
</style>
