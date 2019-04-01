import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from "../components/LoginForm";
import UserManagement from "../components/user-management/UserManagement";
import Library from "../components/library/Library";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      meta: {
        title: 'Logowanie',
        layout: 'no-sidebar'
      },
      name: 'LoginForm',
      component: LoginForm
    },
    {
      path: '/library',
      meta: {
        title: 'Biblioteka',
      },
      name: 'Library',
      component: Library
    },
    {
      path: '/user-management',
      meta: {
        title: 'Użytkownicy'
      },
      name: 'UserManagement',
      component: UserManagement
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
