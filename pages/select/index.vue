<template>
  <section>
    <div>
      <div class="title">
        <TheTitle>Select Page</TheTitle>
      </div>
      <div class="items">
        <SelectItems/>
      </div>
    </div>
  </section>
</template>

<script>
import TheTitle from '../../components/common/TheTitle.vue'
import SelectItems from './-SelectItems.vue'

export default {
  components: {
    TheTitle,
    SelectItems
  }
}
</script>

<style lang="stylus" scoped>
.title
  margin-bottom 48px
</style>
