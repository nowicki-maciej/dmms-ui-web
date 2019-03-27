import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from "../components/LoginForm";
import UserManagement from "../components/user-management/UserManagement";
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      meta: {
        title: "Login"
      },
      name: 'LoginForm',
      component: LoginForm
    },
    {
      path: '/user-management',
      meta: {
        title: "User management"
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
