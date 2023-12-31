import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'


const routes = [
  { 
    path: '/',
    name: 'Main',
    component: Main,
  },
  //UI 테스트
  
  {  
    path: '/test',
    name: 'Test',
    component: () => import( /* webpackChunkName: 'Test' */ '@/pages/Test.vue')
  },
  {  
    path: '/test02',
    name: 'Test02',
    component: () => import( /* webpackChunkName: 'Test02' */ '@/pages/Test02.vue')
  },

  //회사소개
  {  
      path: '/greet',
      name: 'Greet',
      component: () => import( /* webpackChunkName: 'Greet' */ '@/pages/Greet.vue')
  },
  {  
    path: '/hist',
    name: 'History',
    component: () => import( /* webpackChunkName: 'History' */ '@/pages/History.vue')
  },
  {  
    path: '/cert',
    name: 'Certificate',
    component: () => import( /* webpackChunkName: 'Certificate' */ '@/pages/Certificate.vue')
  },
  {  
    path: '/path',
    name: 'Path',
    component: () => import( /* webpackChunkName: 'Path' */ '@/pages/Path.vue')
  },

  //제품소개
  {  
    path: '/prod/:category',
    name: 'Prod',
    component: () => import( /* webpackChunkName: 'Prod' */ '@/pages/Prod.vue')
  },
  {  
    path: '/prodDetail/:category/:id',
    name: 'ProdDetail',
    component: () => import( /* webpackChunkName: 'ProdDetail' */ '@/pages/ProdDetail.vue')
  },


  //고객지원
  {  
    path: '/noti',
    name: 'Notice',
    component: () => import( /* webpackChunkName: 'Notice' */ '@/pages/Notice.vue')
  },
  {  
    path: '/data',
    name: 'DataRoom',
    component: () => import( /* webpackChunkName: 'DataRoom' */ '@/pages/DataRoom.vue')
  },
  {  
    path: '/news',
    name: 'News',
    component: () => import( /* webpackChunkName: 'News' */ '@/pages/News.vue')
  },
  {  
    path: '/cont',
    name: 'Contact',
    component: () => import( /* webpackChunkName: 'Contact' */ '@/pages/ContactUs.vue')
  },


]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

//webpackChunkName 방식으로 별도의 js로 분리하여 해당 페이지 방문할때 데이터를 불러옴