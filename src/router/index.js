import Vue from 'vue'
import Router from 'vue-router'

let routes = []
Vue.use(Router)

const Dashborad = () => import('@/components/dashboard/index.vue')
routes.push({ path: '/', component: Dashborad, meta: { auth: true } })
export default new Router({
  mode: 'history',
  routes
})
