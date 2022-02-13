import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from "@/components/Admin/Register";
import Login from "@/components/Login/Login";
import TimeTrackingOverview from "@/components/User/TimeTrackingOverview";
import Unauthorized from "@/views/Unauthorized";
import Verwaltung from "@/components/Admin/Verwaltung";
import AdminMain from "@/views/AdminMain";
import ForgotPassword from "@/components/Login/ForgotPassword";
import UserMain from "@/views/UserMain";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/login/forgotpassword',
    name: 'forgotpassword',
    component: ForgotPassword
  },
  {
    path: '/user/',
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token');
      if (token) {
        next();
      } else {
        next('/401');
      }
    },
    component: UserMain,
    children: [
      {
        path: 'timetracking',
        name: 'timetracking',
        component: TimeTrackingOverview
      }
    ]
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
      const token = localStorage.getItem('token');
      if (userRole === "ROLE_ADMIN" && token) {
        next();
      } else {
        next('/401');
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
        component: Verwaltung,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
/*
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (token && to.path === '/login') {
    next('/user/loginarea');
  } else if (!token && to.path !== '/login' && to.path !== '/' && to.path !== '/forgotpassword') {
    next('/login');
  } else {
    next();
  }
}) */

export default router;
