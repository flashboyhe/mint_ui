import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/about'
import Form from '@/components/form'
import Ziluyou from '@/components/ziluyou'
import Ziluyouone from '@/components/ziluyouone'
import Ziluyoutwo from '@/components/ziluyoutwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/form',
      name: 'form',
      component:Form
    },
    {
      path: '/ziluyou',
      name: 'ziluyou',
      component:Ziluyou,
      children: [
        {path: '/',component: Ziluyouone},
        {path: '/ziluyouone', name: 'ziluyouone',component: Ziluyouone},
        {path: '/ziluyoutwo', name: 'ziluyoutwo',component: Ziluyoutwo}
      ]
    }
  ]
})
