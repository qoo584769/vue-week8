import { createRouter, createWebHashHistory } from 'vue-router';
// import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/front/index.vue'),
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/front/all-product.vue'),
  },
  {
    path: '/products/:id',
    name: 'detail',
    component: () => import('../views/front/product-detail.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/front/about.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/front/cart.vue'),
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/front/order.vue'),
  },
  {
    path: '/order/:id',
    name: 'order-detail',
    component: () => import('../views/front/order-detail.vue'),
  },

  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/dashboard/admin.vue'),
    children: [
      {
        path: 'product-list',
        name: 'admin-product-list',
        component: () => import('../components/dashboard/admin-product-list.vue'),
      },
      {
        path: 'order-list',
        name: 'admin-order-list',
        component: () => import('../components/dashboard/admin-order-list.vue'),
      },
      {
        path: 'coupon-list',
        name: 'admin-coupon-list',
        component: () => import('../components/dashboard/admin-coupon-list.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
