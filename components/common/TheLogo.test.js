import { shallowMount } from '@vue/test-utils'
import TheLogo from './TheLogo.vue'

describe('TheLogo', () => {
  const wrapper = shallowMount(TheLogo)

  it('should be render component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should be visible component', () => {
    expect(wrapper.isVisible()).toBeTruthy()
  })
})
