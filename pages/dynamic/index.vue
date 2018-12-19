<template>
  <section>
    <div>
      <div class="title">
        <TheTitle>Dynamic Page</TheTitle>
      </div>
      <div class="items">
        <DynamicList/>
      </div>
    </div>
  </section>
</template>

<script>
import TheTitle from '../../components/common/TheTitle.vue'
import DynamicList from './-DynamicList.vue'

export default {
  components: {
    TheTitle,
    DynamicList
  }
}
</script>

<style lang="stylus" scoped>
.title
  margin-bottom 48px
</style>
