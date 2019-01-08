import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import TheMenu from './TheMenu.vue'

const sories = storiesOf('Common', module)

sories.addDecorator(VueInfoAddon).add('TheMenu', () => {
  return {
    components: { TheMenu },
    template: `<TheMenu/>`
  }
})
