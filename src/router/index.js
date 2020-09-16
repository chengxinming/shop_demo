import Vue from 'vue'
import Router from 'vue-router'
import list from '@/pages/list'
import news from '@/pages/news'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/list"
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/news',
      name: 'news',
      component: news
    }
  ]
})
