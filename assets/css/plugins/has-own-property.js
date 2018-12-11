module.exports = () => style => {
  style.define('has-own-property', (obj, key) => {
    return JSON.parse(obj).hasOwnProperty(key.val)
  })
}
