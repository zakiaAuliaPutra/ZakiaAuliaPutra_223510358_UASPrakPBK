import { createRouter, createWebHistory } from 'vue-router';
import Weather from '../views/Weather.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/weather',
    name: 'Weather',
    component: Weather,
    props: { apiKey: '4fb4881cdb8b643efdfb97cfccc6ce5b' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
