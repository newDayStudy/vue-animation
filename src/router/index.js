import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login/login'
Vue.use(Router)


import routeMap from '@/views/routes.js'

const routes = new Router({
  routes: [
    ...routeMap
  ]
})
console.log(routes)
export default routes

