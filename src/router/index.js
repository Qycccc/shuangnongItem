import Vue from 'vue'
import VueRouter from 'vue-router'
import Safe from '../views/safecountryside'
import Beauty from '../views/beautycountryside'
import Ele from '../views/ele'
import My from '../views/my'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/safe'
  }, {
    path: '/safe',
    name: 'safe',
    component: Safe,
    meta: {
      title: '平安乡村'
    }
  }, {
    path: '/beauty',
    name: 'beauty',
    component: Beauty,
    meta: {
      title: '美丽乡村'
    }
  }, {
    path: '/ele',
    name: 'ele',
    component: Ele,
    meta: {
      title: '电子围栏'
    }
  }, {
    path: '/my',
    name: 'my',
    component: My,
    meta: {
      title: '我的'
    }
  }]

const router = new VueRouter({
  routes
})

export default router
