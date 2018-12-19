<template>
  <section class="container">
    <div>
      <div class="logo">
        <TheLogo/>
      </div>
      <div class="menu">
        <TheMenu/>
      </div>
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
import TheLogo from '../../components/common/TheLogo.vue'
import TheMenu from '../../components/common/TheMenu.vue'
import TheTitle from '../../components/common/TheTitle.vue'
import SelectItems from './-SelectItems.vue'

export default {
  components: {
    TheLogo,
    TheMenu,
    TheTitle,
    SelectItems
  }
}
</script>

<style lang="stylus" scoped>
.container
  display flex
  justify-content center
  align-items center
  min-height 100vh
  text-align center

.logo
  margin-bottom 48px

.menu
  margin-bottom 48px

.title
  margin-bottom 48px
</style>
