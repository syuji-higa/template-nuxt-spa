import { log, inspect } from 'vue-whiteroom/api'

const _log = console.log
console.log = function() {
  log(Array.from(arguments))
  _log.apply(console, arguments)
}

import Logo from '../components/Logo.vue'
inspect(Logo, { group: 'Logo' })

import Button from '../components/Button.vue'
inspect(Button, { group: 'Button' })

import Items from '../components/Items.vue'
inspect(Items, { group: 'Items' })

import SelectedItemName from '../components/SelectedItemName.vue'
inspect(SelectedItemName, { group: 'Items' })
