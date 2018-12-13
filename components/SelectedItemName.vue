<template>
  <div>
    <p
      :class="{ 'is-selected': isSelected }"
      class="selected-item-name">
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

<style lang="stylus">
.selected-item-name
  padding 10px 20px
  border 3px solid #389
  color #eee
  text-align center
  font-weight bold
  font-size 32px

  &.is-selected
    color #389
</style>
