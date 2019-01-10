import { shallowMount } from '@vue/test-utils'
import TheTitle from './TheTitle.vue'

describe('TheTitle', () => {
  const wrapper = shallowMount(TheTitle, {
    slots: {
      default: 'Test Button'
    }
  })

  it('should be render component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should be visible component', () => {
    expect(wrapper.isVisible()).toBeTruthy()
  })
})
