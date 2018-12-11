<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">Scaffold Nuxt SPA</h1>
      <Items/>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Items from '~/components/Items.vue'

export default {
  components: {
    Logo,
    Items
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
  margin-bottom 48px

.title
  display block
  margin-bottom 48px
  color #389
  font-weight 300
  font-size 80px
</style>
