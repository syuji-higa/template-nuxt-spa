import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import VueInfoAddon from 'storybook-addon-vue-info'
import DefaultButton from './DefaultButton.vue'

const sories = storiesOf('Modules Button', module)

sories.addDecorator(VueInfoAddon).add('DefaultButton', () => {
  return {
    components: { DefaultButton },
    template: `
        <div>
          <div class="storybook-heading">Default</div>
          <DefaultButton :is-selected="false" @click.native="onClick"/>
          <div class="storybook-heading">Selected</div>
          <DefaultButton :is-selected="true" @click.native="onClick"/>
        </div>
      `,
    methods: {
      onClick: action('button-clicked')
    }
  }
})
