import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// Vue.prototype.$axios = axios

Vue.use(VueAxios, axios)

const Axios = axios.create({
  baseURL: 'https://api.neustreet.com/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default ({ app, Vue }) => {
  Vue.prototype.$axios = axios
}

export { Axios }