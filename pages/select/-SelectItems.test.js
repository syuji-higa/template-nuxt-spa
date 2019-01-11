import { mount } from '@vue/test-utils'
import SelectItems from './-SelectItems.vue'
import DefaultButton from '~/components/modules/buttons/DefaultButton.vue'
import SelectedItemName from './-SelectedItemName.vue'

describe('SelectItems', () => {
  const wrapper = mount(SelectItems)

  it('should be render component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should be visible component', () => {
    expect(wrapper.isVisible()).toBeTruthy()
  })

  it('should be same "DefaultButton" text and "SelectedItemName" text when "DefaultButton" clicked', () => {
    const $buttonList = wrapper.findAll(DefaultButton)
    for (let i = 0; $buttonList.length > i; i++) {
      $buttonList.at(i).trigger('click')
      expect(wrapper.find(SelectedItemName).text()).toBe(
        $buttonList.at(i).text()
      )
    }
  })
})
