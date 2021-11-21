import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Board from '../views/Board.vue'
// const Board = () => import('../views/Board.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    component: () => import('../views/Home.vue')
  },
  {
    path: '/seemsg',
    name: 'seemsg',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Board.vue')
    component: Board
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
