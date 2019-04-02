import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from "../components/LoginForm";
import UserManagement from "../components/user-management/UserManagement";
import BookManagement from "../components/book-management/BookManagement";

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
    },
    {
      path: '/book-management',
      meta: {
        title: "Book management"
      },
      name: 'BookManagement',
      component: BookManagement
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
