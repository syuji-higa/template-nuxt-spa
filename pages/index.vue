<template>
  <section>
    <div>
      <div class="title">
        <TheTitle>Home Page</TheTitle>
      </div>
    </div>
  </section>
</template>

<script>
import TheTitle from '../components/common/TheTitle.vue'

export default {
  components: {
    TheTitle
  }
}
</script>

<style lang="stylus" scoped>
.title
  margin-bottom 48px
</style>
