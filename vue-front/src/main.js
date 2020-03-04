import Vue from 'vue';
import Vuelidate from 'vuelidate/src';
import App from './App.vue';


import './registerServiceWorker';
import router from './router';
import store from './store';
// eslint-disable-next-line import/no-extraneous-dependencies
// import 'bootstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'materialize-css';
import dateFilter from './filters/date.filter';

Vue.config.productionTip = false;


Vue.use(Vuelidate);
Vue.filter('date', dateFilter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
