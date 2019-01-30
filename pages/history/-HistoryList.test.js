import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import HistoryList from './-HistoryList.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HistoryList', () => {
  let store
  let wrapper

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        histories: ['/', '/select', '/dynamic/charli']
      }
    })
    wrapper = shallowMount(HistoryList, { store, localVue })
  })

  it('should be rendered component', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should be the visible as component', () => {
    expect(wrapper.isVisible()).toBeTruthy()
  })

  it('should be shown "histories" text at "item"', () => {
    const item = wrapper.findAll('.item')
    const { histories } = store.state
    for (let i = 0; i < histories.length; i++) {
      expect(item.at(i).text()).toBe(histories[i])
    }
  })
})
