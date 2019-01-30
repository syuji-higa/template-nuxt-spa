import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import Vue from 'vue'
import Vuex from 'vuex'
import HistoryList from './-HistoryList.vue'

Vue.use(Vuex)

const sories = storiesOf('Page History', module)

sories.addDecorator(VueInfoAddon).add('HistoryList', () => {
  return {
    components: { HistoryList },
    template: `<HistoryList/>`,
    store: new Vuex.Store({
      state: {
        histories: ['/', '/select', '/dynamic/charli']
      }
    })
  }
})
