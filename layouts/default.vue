<template>
  <div>
    <nuxt/>
  </div>
</template>

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

button
  padding 0
  outline 0
  border 0
  background-color transparent

  .is-pc &:hover
    cursor pointer
</style>
