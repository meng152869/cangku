import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '../pages/HomeIndex'
import ChooseLocation from '../pages/ChooseLocation'
import Mine from '../pages/Mine'
import Login from '../pages/Login'
import SignIn from '../pages/SignIn'
import CategroyPage from '../pages/CategroyPage'
import DetailPage from '../pages/DetailPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeIndex,
    },
    {
      path:'/location',
      component:ChooseLocation,
    },
    {
      path:'/user',
      component:Mine
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/signIn',
      component:SignIn
    },
    {
      path:'/category',
      component:CategroyPage
    },
    {
      path:'/detail',
      component:DetailPage
    }
  ]
})
