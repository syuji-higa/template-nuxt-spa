import { shallowMount } from '@vue/test-utils'
import TheTitle from '~/components/common/TheTitle.vue'

describe('TheTitle', () => {
  const wrapper = shallowMount(TheTitle, {
    slots: {
      default: 'Test Button'
    }
  })
  it('render component', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('visible component', () => {
    expect(wrapper.isVisible()).toBe(true)
  })
})
