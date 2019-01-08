<template lang="pug">
  section
    div
      div.title
        TheTitle {{ title }} Page
      div.items
        SelectItems
</template>

<script>
import TheTitle from '~/components/common/TheTitle.vue'
import SelectItems from './-SelectItems.vue'
import headMixin from '~/mixins/headMixin.js'

export default {
  components: {
    TheTitle,
    SelectItems
  },
  mixins: [headMixin],
  data() {
    return {
      title: 'Select',
      description: 'Select Description'
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  margin-bottom 48px
</style>
