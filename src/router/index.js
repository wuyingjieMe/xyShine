import Vue from 'vue'
import Router from 'vue-router'

//这里就是引入配置路由的地方  (比如我新增一个模块，你也可以当做是一个html页面)
import Aaa from '@/common/Aaa'

import NavBar from '@/common/NavBar'

import tabS from '@/common/tabS'

import footers from '@/common/footers'
//  common 里面是放公共的模块，
import Home from '@/components/Home'

import Course from '@/components/Course'

import newMusic from  '@/components/newMusic'

import students from '@/components/students'

import teachers from '@/components/teachers'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      // 这里配置 路由 你爱叫啥叫啥
      path:'/abc',
      name:'hahasuibianxie',
      component:Aaa
    },{
      path:'/courses',
      name:'kechengjieshao',
      component:Course
    },{
      path:'/NavBar',
      name:'nav',
      component:NavBar
    },{
      path:'/footers',
      name:'footers',
      component:footers
    },{
    path:'/tabS',
    name:'tabSwitch',
    component:tabS
    },{
    path:'/newMusic',
      name:'new',
      component:newMusic
    },{
      path:'/students',
      name:'students',
      component:students
    },{
      path:'/teachers',
      name:'teachers',
      component:teachers
    },
  ]
})
