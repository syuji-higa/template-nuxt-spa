import { action } from '@storybook/addon-actions'
import { configure } from '@storybook/vue'
import Vue from 'vue';
import './global.vue'

// enable nuxt-link
Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a :href="to" @click="log()"><slot>NuxtLink</slot></a>',
})

// automatically import all files ending in *.stories.js
const reqComponents = require.context('../components', true, /.stories.js$/)
const reqPages = require.context('../pages', true, /.stories.js$/)
function loadStories() {
  reqComponents.keys().forEach(filename => reqComponents(filename))
  reqPages.keys().forEach(filename => reqPages(filename))
}

configure(loadStories, module)
