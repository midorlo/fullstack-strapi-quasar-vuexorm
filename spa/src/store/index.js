import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

import VuexORM from '@vuex-orm/core'
import VuexORMAxios from '@vuex-orm/plugin-axios'

import Article from "src/models/Article";

export default function () {

  // Register
  Vue.use(Vuex)
  VuexORM.use(VuexORMAxios, {
    axios,
    baseURL: 'http://localhost:9090/'
  })


  // Create a new instance of Database.
  const database = new VuexORM.Database()

  // Register Models to Database.
  database.register(Article)

  const opts = {
    // namespaced: true,
    plugins: [VuexORM.install(database)]
  }

  // Create Vuex Store and register database through Vuex ORM.
  // const Store = new Vuex.Store(opts)
  // return Store

  // Create Vuex Store and register database through Vuex ORM.
  return new Vuex.Store(opts)
}
