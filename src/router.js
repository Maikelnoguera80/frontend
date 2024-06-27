// src/router.js
import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/LoginView.vue';
import Home from './views/HomeView.vue';

Vue.use(Router);

const routes = [
  { path: '/login', component: Login },
  { path: '/home', component: Home },
];

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
