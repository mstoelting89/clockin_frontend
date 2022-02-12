import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from "@/views/Register";
import Login from "@/views/Login";
import LoginArea from "@/views/LoginArea";
import Unauthorized from "@/views/Unauthorized";
import AdminVerwaltung from "@/views/AdminVerwaltung";
import AdminMain from "@/views/AdminMain";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/:user+',
    beforeEnter: () => {
      console.log("Foo");
    }
  },
  {
    path: '/user/loginarea',
    name: 'LoginArea',
    component: LoginArea
  },
  {
    path: '/401',
    name: 'Unauthorized',
    component: Unauthorized
  },
  {
    path: '/admin/',
    component: AdminMain,
    beforeEnter: (to, from, next) => {
      const userRole = localStorage.getItem('userRole');
      if (userRole !== "ROLE_ADMIN") {
        next('/401');
      } else {
        next();
      }
    },
    children:[
      {
        path: 'register',
        name: 'AdminRegister',
        component: Register,
      },
      {
        path: 'administration',
        name: 'AdminVerwaltung',
        component: AdminVerwaltung,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (token && to.path === '/login') {
    next('/user/loginarea')
  } else if (!token && to.path !== '/login' && to.path !== '/') {
    next('/login');
  } else {
    next();
  }
})

export default router
