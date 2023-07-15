import { createWebHashHistory, createRouter } from 'vue-router'
import HomePage from './components/HomePage.vue'
import LayoutDefault from './layouts/LayoutDefault.vue'
import BlogPage from './components/BlogPage.vue'
import BlogDetailsPage from './components/BlogDetailsPage.vue';
import AboutPage from './components/AboutPage.vue';

const routes = [
  {
    path: '/',
    component: LayoutDefault,
    children: [
      {
        path: '/',
        component: HomePage,
        fullmatch: true
      },
      {
        path: '/blog',
        component: BlogPage
      },
      {
        path: '/blog/:id',
        component: BlogDetailsPage
      },
      {
        path: '/about',
        component: AboutPage
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;