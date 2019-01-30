import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import SelectedItemName from './-SelectedItemName.vue'

const sories = storiesOf('Page Select', module)

sories.addDecorator(VueInfoAddon).add('SelectedItemName', () => {
  return {
    components: { SelectedItemName },
    template: `
        <div>
          <div class="storybook-heading">Default</div>
          <SelectedItemName :is-selected="false"/>
          <div class="storybook-heading">Selected</div>
          <SelectedItemName :is-selected="true"/>
        </div>
      `
  }
})
