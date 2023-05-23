import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserDashboard from '@/components/UserDashboard.vue'
import AuctionDashboard from '@/components/AuctionDashboard.vue'
import AuctionCreate from '@/components/AuctionCreate.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {requiresAuth: true},
    children: [

      {
          path: 'users/list',
          name: 'users',
          component: UserDashboard,

      },
      {
        path: 'auctions',
        name: 'auctions',
        component: AuctionDashboard,

      },
      {
        path: 'auctions/create',
        name: 'auction-create',
        component: AuctionCreate,

      },
    ]
  },
  
  {
    path: '/login',
    name: 'login',
  
    component: () => import(/* webpackChunkName: "Login" */ '../views/LoginView.vue'),
    meta: {guest: true},
  },
  {
    path: '/register',
    name: 'register',
  
    component: () => import(/* webpackChunkName: "Register" */ '../views/RegisterView.vue'),
    meta: {guest: true},
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router
