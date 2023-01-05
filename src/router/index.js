import { createRouter, createWebHistory } from 'vue-router'
import ContactForm from '../views/ContactFormView.vue'
import DeletedView from '../views/DeletedView.vue'
// import EditView from '../views/EditView.vue'
import Favourites from '../views/FavouritesView.vue'
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
      component: Favourites
    },
    {
      path: '/deleted',
      name: 'deleted',
      component: DeletedView
    },
    {
      path: '/create',
      name: 'create',
      component: ContactForm
    },
    {
      path: '/edit',
      name: 'edit',
      component: ContactForm
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
    }
  ]
})

export default router
