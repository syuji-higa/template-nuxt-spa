import { shallowMount } from '@vue/test-utils'
import TheTitle from './TheTitle.vue'

describe('TheTitle', () => {
  const wrapper = shallowMount(TheTitle, {
    slots: {
      default: 'Test Button'
    }
  })

  it('should be rendered component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should be the visible as component', () => {
    expect(wrapper.isVisible()).toBeTruthy()
  })
})
