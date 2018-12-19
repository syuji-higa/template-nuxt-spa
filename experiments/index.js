import { log, inspect } from 'vue-whiteroom/api'

const _log = console.log
console.log = function() {
  log(Array.from(arguments))
  _log.apply(console, arguments)
}

/**
 * Dafault
 */
import '../layouts/default.vue'

/**
 * Common
 */
import TheLogo from '../components/common/TheLogo.vue'
inspect(TheLogo, {
  path: 'TheLogo',
  group: 'Common'
})

import TheMenu from '../components/common/TheMenu.vue'
inspect(TheMenu, {
  path: 'TheMenu',
  group: 'Common'
})

import TheTitle from '../components/common/TheTitle.vue'
inspect(TheTitle, {
  path: 'TheTitle',
  group: 'Common'
})

/**
 * module button
 */
import DefaultButton from '../components/modules/button/DefaultButton.vue'
inspect(DefaultButton, {
  path: 'DefaultButton',
  group: 'Module Button'
})

/**
 * page select
 */
import SelectItems from '../pages/select/-SelectItems.vue'
inspect(SelectItems, {
  path: 'SelectItems',
  group: 'Page Select'
})

import SelectedItemName from '../pages/select/-SelectedItemName.vue'
inspect(SelectedItemName, {
  path: 'SelectedItemName',
  group: 'Page Select'
})
