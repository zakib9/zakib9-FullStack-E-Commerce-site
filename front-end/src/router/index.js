import { createRouter, createWebHistory } from 'vue-router'
import ProductsPage from '@/pages/ProductsPage.vue'
import ShoppingCartPage from '@/pages/ShoppingCartPage.vue'
import ProductDetailPage from '@/pages/ProductDetailPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/products',
      name: 'productsPage',
      component: ProductsPage
    },
    {
        path: '/cart',
        name: 'shoppingCartPage',
        component: ShoppingCartPage
      },
      {
        path: '/products/:productId',
        name: 'productDetailPage',
        component: ProductDetailPage
      },{
        path: '/:pathMatch(.*)*',
        component: NotFoundPage
      }
  ]
})

export default router
