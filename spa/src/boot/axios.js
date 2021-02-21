import Vue from 'vue'
import axios from 'axios'

const instance = axios.create({})

instance.defaults.baseURL = process.env.API_BASEURL
instance.defaults.headers.common['Accept'] = 'application/json'
instance.defaults.headers.common['X-RequesterId'] = 'unknown'
instance.defaults.headers.post['Content-Type'] = 'application/json'
instance.defaults.headers.patch['Content-Type'] = 'application/json'
instance.interceptors.request.use(function (config) {
  Vue.$log.debug('axios', 'request', config.method.toUpperCase() + ' ' + config.url)
  if (config.headers.common) Vue.$log.debug('axios', 'request', 'headers-common', config.headers.common)
  if (config.headers[config.method]) Vue.$log.debug('axios', 'request', 'headers-method', config.headers[config.method])
  if (config.data) Vue.$log.debug('axios', 'request', 'data', config.data)
  return config
}, function (error) {
  Vue.$log.error('axios', 'request', 'error', error)
  return error
})

instance.interceptors.response.use(function (response) {
  Vue.$log.debug('axios', 'response', response.status + ' ' + response.statusText)
  if (response.headers) Vue.$log.debug('axios', 'response', 'headers', response.headers)
  if (response.data) Vue.$log.debug('axios', 'response', 'data', response.data)
  return response
}, function (error) {
  Vue.$log.error('axios', 'response', 'error', error)
  return error
})

export { instance }
