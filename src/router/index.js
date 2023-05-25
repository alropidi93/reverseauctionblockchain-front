import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserDashboard from '@/components/UserDashboard.vue'
import AuctionDashboard from '@/components/AuctionDashboard.vue'
import CreateAuctionForm from '@/components/CreateAuctionForm.vue'
import DashboardLayout from '@/components/layouts/DashboardLayout.vue'
import store from '@/store'
import UserProfile from '@/components/templates/UserProfile.vue'

const routes = [
  {
    path: '/custom',
    name: 'home',
    component: HomeView,
    meta: {requiresAuth: true},
    children: [

      {
          path: 'users/list',
          name: 'users',
          component: UserDashboard,

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
  },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/auctions',
    meta: {requiresAuth: true},
    children: [

      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'auctions',
        name: 'Auctions',
        component: AuctionDashboard
      },
      {
        path: 'create/auction',
        name: 'Create-Auction',
        component: CreateAuctionForm
      },
      // {
      //   path: 'table-list',
      //   name: 'Table List',
      //   component: TableList
      // },
      // {
      //   path: 'typography',
      //   name: 'Typography',
      //   component: Typography
      // },
      // {
      //   path: 'icons',
      //   name: 'Icons',
      //   component: Icons
      // },
      // {
      //   path: 'maps',
      //   name: 'Maps',
      //   component: Maps
      // },
      // {
      //   path: 'notifications',
      //   name: 'Notifications',
      //   component: Notifications
      // },
      // {
      //   path: 'upgrade',
      //   name: 'Upgrade to PRO',
      //   component: Upgrade
      // }
    ]
  },

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
