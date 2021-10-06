import Vue from 'vue'
import Vuex from 'vuex'

import content from './content'
import subscriber from './subscriber'


Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      content,
      subscriber,
    }
    //strict: process.env.Dev
  })

  return Store
}