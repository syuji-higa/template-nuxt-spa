<template lang="pug">
  section
    div
      div.title
        TheTitle {{ title }} Page
</template>

<script>
import TheTitle from '~/components/common/TheTitle.vue'

export default {
  components: {
    TheTitle
  },
  data() {
    return {
      title: 'Home'
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  margin-bottom 48px
</style>
