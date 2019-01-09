import { shallowMount } from '@vue/test-utils'
import TheLogo from '~/components/common/TheLogo.vue'

describe('TheLogo', () => {
  const wrapper = shallowMount(TheLogo)
  it('render component', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('visible component', () => {
    expect(wrapper.isVisible()).toBe(true)
  })
})
