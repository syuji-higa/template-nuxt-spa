<template lang="pug">
  div
    ul.items
      li.item(
        v-for="(item, index) in items"
        :key="index"
      )
        DefaultButton(
          :is-selected="selectedItemName === item.name"
          @click="selectItem(item.name)"
        ) {{ item.name }}
    SelectedItemName(:is-selected="selectedItemName !== ''")
      | {{ selectedItemName || 'Not select' }}
</template>

<script>
import DefaultButton from '~/components/modules/buttons/DefaultButton.vue'
import SelectedItemName from './-SelectedItemName.vue'

export default {
  components: {
    DefaultButton,
    SelectedItemName
  },
  data: function() {
    return {
      selectedItemName: '',
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
  },
  methods: {
    selectItem(name) {
      this.selectedItemName = name
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
</style>
