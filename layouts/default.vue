<template lang="pug">
  div
    div.logo
      TheLogo
    div.container
      nuxt
    div.menu
      TheMenu
</template>

<script>
import TheLogo from '~/components/common/TheLogo.vue'
import TheMenu from '~/components/common/TheMenu.vue'

export default {
  components: {
    TheLogo,
    TheMenu
  }
}
</script>

<style lang="stylus">
.container
  display flex
  justify-content center
  align-items center
  min-height 100vh
  text-align center

.logo
  position fixed
  top 30px
  left 30px

.menu
  position fixed
  top 45px
  right 45px
</style>
