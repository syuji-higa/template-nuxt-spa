import { mount } from '@vue/test-utils'
import SelectItems from './-SelectItems.vue'
import DefaultButton from '~/components/modules/buttons/DefaultButton.vue'
import SelectedItemName from './-SelectedItemName.vue'

describe('SelectItems', () => {
  const wrapper = mount(SelectItems)

  it('should be rendered component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should be the visible as component', () => {
    expect(wrapper.isVisible()).toBeTruthy()
  })

  it('should be "DefaultButton" text the same as "SelectedItemName" text when "DefaultButton" clicked', () => {
    const buttonList = wrapper.findAll(DefaultButton)
    for (let i = 0; buttonList.length > i; i++) {
      buttonList.at(i).trigger('click')
      expect(wrapper.find(SelectedItemName).text()).toBe(
        buttonList.at(i).text()
      )
    }
  })
})
