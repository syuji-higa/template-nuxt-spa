<template lang="pug">
  section
    div
      div.title
        TheTitle {{ title }} Page
      div.items
        DynamicList
</template>

<script>
import TheTitle from '~/components/common/TheTitle.vue'
import DynamicList from './-DynamicList.vue'
import headMixin from '~/mixins/headMixin.js'

export default {
  components: {
    TheTitle,
    DynamicList
  },
  mixins: [headMixin],
  data() {
    return {
      title: 'Dynamic',
      description: 'Dynamic Description'
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  margin-bottom 48px
</style>
