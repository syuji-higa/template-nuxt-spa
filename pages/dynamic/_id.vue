<template lang="pug">
  div
    div.title
      TheTitle {{ title }} Page
      nuxt-link.link(to="/dynamic") Back
</template>

<script>
import TheTitle from '~/components/common/TheTitle.vue'
import headMixin from '~/mixins/headMixin.js'

export default {
  components: {
    TheTitle
  },
  mixins: [headMixin],
  data() {
    return {
      title: `Dynamic ${this.$route.params.id}`,
      description: `Dynamic ${this.$route.params.id} Description`
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  margin-bottom 48px

.link
  font-size 24px
</style>
