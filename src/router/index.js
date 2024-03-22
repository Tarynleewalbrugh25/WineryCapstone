import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupComp from '../components/Signup.vue'
import addProductComp from '../components/AddProduct.vue'
import ProductDetails from '../components/ProductDetails.vue'




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/stocks',
    name: 'stocks',
    component: () => import( '../views/StocksView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import( '../views/AdminView.vue')
  },
  {
    path: '/register',
    name: 'SignupComp',
    component: SignupComp
  },
  {
    path: '/addProducts',
    name: 'AddProductComp',
    component: addProductComp 
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  },

]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
