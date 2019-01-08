import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import TheTitle from './TheTitle.vue'

const sories = storiesOf('Common', module)

sories.addDecorator(VueInfoAddon).add('TheTitle', () => {
  return {
    components: { TheTitle },
    template: `<TheTitle/>`
  }
})
