import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from "@/views/Register";
import Login from "@/views/Login";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
