import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Network from '@/components/Network'
import Hashtags from '@/components/Hashtags'
import URLS from '@/components/URLS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Network',
      name: 'Network',
      component: Network
    },
    {
      path: '/Hashtags',
      name: 'Hashtags',
      component: Hashtags
    },
    {
      path: '/URLS',
      name: 'URLS',
      component: URLS
    }
  ]
})
