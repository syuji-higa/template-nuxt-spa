import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon from 'storybook-addon-vue-info'
import SelectItems from './-SelectItems.vue'

const sories = storiesOf('Pages Select', module)

sories.addDecorator(VueInfoAddon).add('SelectItems', () => {
  return {
    components: { SelectItems },
    template: `<SelectItems @click.native="onClick"/>`,
    methods: {
      onClick: action('button-clicked')
    }
  }
})
