import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: () => import('../views/FavouritesView.vue')
    },
    {
      path: '/deleted',
      name: 'deleted',
      component: () => import('../views/DeletedView.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/CreateView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    }
  ]
})

export default router
