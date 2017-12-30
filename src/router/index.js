import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '../subpages/AppHome.vue'
import AppContact from '../subpages/AppContact.vue'
import AppInstruments from '../subpages/AppInstruments.vue'
import AppBio from '../subpages/AppBio.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/contact',
      name: 'AppContact',
      component: AppContact
    },
    {
      path: '/instruments',
      name: 'AppInstruments',
      component: AppInstruments
    },
    {
      path: '/bio',
      name: 'AppBio',
      component: AppBio
    }
  ]
})
