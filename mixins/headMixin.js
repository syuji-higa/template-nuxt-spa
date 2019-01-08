export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.title} - Scaffold Nuxt SPA`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        }
      ]
    }
  }
}
