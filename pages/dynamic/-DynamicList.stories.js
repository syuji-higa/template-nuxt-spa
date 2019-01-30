import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import DynamicList from './-DynamicList.vue'

const sories = storiesOf('Page Dynamic', module)

sories.addDecorator(VueInfoAddon).add('DynamicList', () => {
  return {
    components: { DynamicList },
    template: `<DynamicList/>`
  }
})
