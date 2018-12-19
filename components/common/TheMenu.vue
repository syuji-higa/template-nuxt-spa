<template>
  <nav class="menu">
    <ul class="items">
      <li class="item">
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li class="item">
        <nuxt-link to="/select">Select</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="stylus" scoped>
.items
  display flex
  justify-content center

.item
  margin 0 10px

  a
    color #389
    font-size 24px
</style>
