import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'UserAuth',
    component: () => import('../components/UserAuth.vue')
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: () => import('../components/ForgotPasswordComponent.vue')
  },

  {
    path: '/about',
    name: 'AboutPage',
    component: () => import('../pages/AboutPage.vue')
  },
  {
    path: '/changePassword',
    name: 'ChangePassword',
    component: () => import('../components/ChangePass.vue')
  },
  {
    path: '/',
    name: 'MainPage',
    component: () => import('../pages/MainPage.vue')
  },
  /*{
    path: '/adminPanel',
    name: 'AdminPanel',
    component: () => import('../pages/AdminPanelPage.vue')
  },*/
  {
    path: '/techSupport',
    name: 'TechnicalSupportPage',
    component: () => import('../pages/TechnicalSupportPage.vue')
  },
  {
    path: '/downloadProjects',
    name: 'DownloadProjectsPage',
    component: () => import('../pages/DownloadProjectsPage.vue')
  },
  {
    path: '/landingPage',
    name: 'LandingPageVue',
    component: () => import('../pages/LandingPage.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
