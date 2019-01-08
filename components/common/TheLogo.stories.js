import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import TheLogo from './TheLogo.vue'

const sories = storiesOf('Common', module)

sories.addDecorator(VueInfoAddon).add('TheLogo', () => {
  return {
    components: { TheLogo },
    template: `<TheLogo/>`
  }
})
