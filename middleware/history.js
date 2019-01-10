export default function({ store, route }) {
  store.commit('addHistory', route.path)
}
