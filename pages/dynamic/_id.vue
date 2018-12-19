<template>
  <div>
    <div class="title">
      <TheTitle>Dynamic {{ $route.params.id }} Page</TheTitle>
      <nuxt-link
        class="link"
        to="/dynamic">Back</nuxt-link>
    </div>
  </div>
</template>

<script>
import TheTitle from '../../components/common/TheTitle.vue'

export default {
  components: {
    TheTitle
  }
}
</script>

<style lang="stylus" scoped>
.title
  margin-bottom 48px

.link
  font-size 24px
</style>
