<template>
  <div>
    <ul class="items">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="item">
        <Button
          :is-selected="selectedItemName === item.name"
          @click="selectItem(item.name)">
          {{ item.name }}
        </Button>
      </li>
    </ul>
    <SelectedItemName :is-selected="selectedItemName !== ''">
      {{ selectedItemName || 'Not select' }}
    </SelectedItemName>
  </div>
</template>

<script>
import Button from './Button.vue'
import SelectedItemName from './SelectedItemName.vue'

export default {
  components: {
    Button,
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

<style lang="stylus">
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
