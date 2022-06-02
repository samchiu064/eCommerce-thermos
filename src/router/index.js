import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'StoreView',
    component: () => import('../views/StoreView.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/StoreHome.vue'),
      },
      {
        path: 'thermos/classic',
        name: 'thermosClassic',
        component: () => import('../views/StoreThermosClassic.vue'),
      },
      {
        path: 'thermos/classic/details',
        name: 'thermosClassicDetails',
        component: () => import('../views/StoreThermosClassicDetails.vue'),
      },
      {
        path: 'user/cart',
        name: 'usercart',
        component: () => import('../views/StoreUserCartView.vue'),
        children: [
          {
            path: '',
            name: 'cart',
            components: {
              productTable: () => import('@/components/StoreUserCartProductTable.vue'),
              spreadSheet: () => import('@/components/StoreUserCartSpreadsheet.vue'),
            },
          },
          {
            path: 'order',
            name: 'order',
            components: {
              orderForm: () => import('@/components/StoreUserCartOrderForm.vue'),
              spreadSheet: () => import('@/components/StoreUserCartSpreadsheet.vue'),
            },
          },
          {
            path: 'checkout',
            name: 'checkout',
            components: {
              checkout: () => import('../views/StoreUserCartCheckout.vue'),
            },
          },
        ],
      },
      // {
      //   path: 'product/:productId',
      //   component: () => import('../views/StoreProduct.vue'),
      // },
    ],
  },
  {
    path: '/dashboard',
    name: 'DashboardView',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('../views/DashboardHome.vue'),
      },
      {
        path: 'products',
        component: () => import('../views/DashboardProducts.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/DashboardOrders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/DashboardCoupons.vue'),
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/DashboardLogin.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
