export default function ({Vue}) {
  Vue.prototype.$log = console.log.bind(console)
}
