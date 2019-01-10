<template lang="pug">
  section
    div
      div.title
        TheTitle {{ title }} Page
      div.items
        HistoryList
</template>

<script>
import TheTitle from '~/components/common/TheTitle.vue'
import HistoryList from './-HistoryList.vue'
import headMixin from '~/mixins/headMixin.js'

export default {
  components: {
    TheTitle,
    HistoryList
  },
  mixins: [headMixin],
  data() {
    return {
      title: 'History',
      description: 'History Description'
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  margin-bottom 48px
</style>
