<template>
  <ul class="items">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="item">
      <Button
        :name="item.name" />
    </li>
  </ul>
</template>

<script>
import Button from './Button.vue'

export default {
  components: {
    Button
  },
  data: function() {
    return {
      items: [
        {
          name: 'Alpah'
        },
        {
          name: 'Beta'
        },
        {
          name: 'Charlie'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.items
  display flex
  justify-content center
  padding 0

.item
  list-style none

  &:not(:last-child)
    margin-right 20px
</style>
