import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from "@/views/Register";
import Login from "@/views/Login";
import LoginArea from "@/views/LoginArea";

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
  },
  {
    path: '/loginarea',
    name: 'LoginArea',
    component: LoginArea
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (token && to.path === '/login') {
    next('/loginarea')
  } else if (!token && to.path !== '/login' && to.path !== '/register' && to.path !== '/') {
    next('/login');
  } else {
    next();
  }
})

export default router
