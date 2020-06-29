import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { BModal, VBModal } from 'bootstrap-vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.component('b-modal', BModal);
Vue.directive('b-modal', VBModal);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
