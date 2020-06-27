import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import DetailAvengerView from '../views/DetailAvenger.vue';
import Profile from '../views/Profile.vue';

Vue.use(VueRouter);

  const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:avengerName',
      name: 'DetailAvenger',
      component: DetailAvengerView
    },
    {
      path: '/perfil',
      name: 'profile',
      component: Profile,
      props: true
    }
  ];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
