import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import DetailAvengerView from '../views/DetailAvenger.vue';

Vue.use(VueRouter);

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail/:avengerName',
      name: 'DetailAvenger',
      component: DetailAvengerView
    }
  ];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
