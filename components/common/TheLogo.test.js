import { shallowMount } from '@vue/test-utils'
import TheLogo from './TheLogo.vue'

describe('TheLogo', () => {
  const wrapper = shallowMount(TheLogo)

  it('should be rendered component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should be the visible as component', () => {
    expect(wrapper.isVisible()).toBeTruthy()
  })
})
