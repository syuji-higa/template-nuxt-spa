<template>
  <div>
    <ul class="items">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="item"
      >
        <DefaultButton
          :is-selected="selectedItemName === item.name"
          @click="selectItem(item.name)"
        >
          {{ item.name }}
        </DefaultButton>
      </li>
    </ul>
    <SelectedItemName :is-selected="selectedItemName !== ''">
      {{ selectedItemName || 'Not select' }}
    </SelectedItemName>
  </div>
</template>

<script>
import DefaultButton from '../../components/modules/button/DefaultButton.vue'
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
