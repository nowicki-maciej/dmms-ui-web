import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from "../components/LoginForm";
import UserManagement from "../components/user-management/UserManagement";
import Library from "../components/library/Library";
import BookDetails from "../components/library/BookDetails";
import BookAddForm from "../components/library/book-add-form/BookAddForm";
import AppManagement from "../components/app-management/AppManagement";
import CategoryManagement from "../components/category-management/CategoryManagement";
import SharedToMe from "../components/share/SharedToMe";
import SharedToOthers from "../components/share/SharedToOthers";


Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      meta: {
        title: 'Login',
        layout: 'no-sidebar'
      },
      name: 'LoginForm',
      component: LoginForm
    },
    {
      path: '/library',
      meta: {
        title: 'Library',
      },
      name: 'Library',
      component: Library
    },
    {
      path: '/user-management',
      meta: {
        title: 'Users'
      },
      name: 'UserManagement',
      component: UserManagement
    },
    {
      path: '/library/book/new',
      meta: {
        title: "Book addition"
      },
      name: 'BookAddForm',
      component: BookAddForm
    },
    {
      path: '/library/book/:bookId',
      meta: {
        title: 'Book'
      },
      name: 'BookDetails',
      component: BookDetails
    },
    {
      path: '/app-management',
      meta: {
        title: "App management"
      },
      name: 'AppManagement',
      component: AppManagement
    },
    {
      path: '/category-management',
      meta: {
        title: 'Category management'
      },
      name: 'CategoryManagement',
      component: CategoryManagement
    },
    {
      path: '/shared-to-me',
      meta: {
        title: 'Shared to me'
      },
      name: 'SharedToMe',
      component: SharedToMe
    },
    {
      path: '/shared-to-others',
      meta: {
        title: 'Shared to others'
      },
      name: 'SharedToOthers',
      component: SharedToOthers
    },
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
