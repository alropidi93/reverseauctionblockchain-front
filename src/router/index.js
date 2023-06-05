import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserDashboard from '@/components/UserDashboard.vue'
import AuctionDashboard from '@/components/AuctionDashboard.vue'
import CreateAuctionForm from '@/components/CreateAuctionForm.vue'
import SelectionAuctionDetail from '@/components/SelectionAuctionDetail.vue'
import ActivitiesAuctionDetail from '@/components/ActivitiesAuctionDetail.vue'
import AuctionBidderEnrollment from '@/components/AuctionBidderEnrollment.vue'
import AuctionFirstBid from '@/components/AuctionFirstBid.vue'
import AuctionPriceBid from '@/components/AuctionPriceBid.vue'

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
      {
        path: 'detail/auction/:auctionCode/selection',
        name: 'Selection-Auction-Detail',
        component: SelectionAuctionDetail
      },
      {
        path: 'detail/auction/:auctionCode/activities',
        name: 'Activities-Auction-Detail',
        component: ActivitiesAuctionDetail
      },
      {
        path: 'auction/:auctionCode/bidder-enrollment',
        name: 'Auction-Bidder-Enrollment',
        component: AuctionBidderEnrollment
      },
      {
        path: 'auction/:auctionCode/first-bid',
        name: 'Auction-First-Bid',
        component: AuctionFirstBid
      },
      {
        path: 'auction/:auctionCode/price-bid',
        name: 'Auction-Price-Bid',
        component: AuctionPriceBid
      },
      // {
      //   path: 'auction/:auctionCode/firstBid',
      //   name: 'Activities-Auction-Detail',
      //   component: ActivitiesAuctionDetail
      // },
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
