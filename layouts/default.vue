<template>
  <div>
    <div class="logo">
      <TheLogo/>
    </div>
    <div class="container">
      <nuxt/>
    </div>
    <div class="menu">
      <TheMenu/>
    </div>
  </div>
</template>

<script>
import TheLogo from '../components/common/TheLogo.vue'
import TheMenu from '../components/common/TheMenu.vue'

export default {
  components: {
    TheLogo,
    TheMenu
  }
}
</script>

<style lang="stylus">
html
  background-color $base-background-color
  color $base-font-color
  font-family $base-font-family
  line-height 1
  text-rendering $text-rendering
  font-smoothing $font-smoothing
  osx-font-smoothing grayscale
  text-size-adjust 100%

  media-screen-pc()
    font-size $base-font-size-pc

  media-screen-sp()
    font-size $base-font-size-sp

h1
h2
h3
h4
h5
h6
  margin 0

ul
  margin 0
  padding 0
  list-style none

ol
  list-style none

p
  margin 0

a
  color $main-color

  &:hover
    opacity .8

button
  padding 0
  outline 0
  border 0
  background-color transparent

  .is-pc &:hover
    cursor pointer

.page-enter-active
.page-leave-active
  transition opacity .2s

.page-enter
.page-leave-active
  opacity 0

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
