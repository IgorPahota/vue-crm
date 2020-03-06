import Vue from 'vue';
import Vuelidate from 'vuelidate/src';
import App from './App.vue';


import './registerServiceWorker';
import router from './router';
import store from './store';
import 'materialize-css';
import 'bootstrap'
import dateFilter from './filters/date.filter';
import messagePlugin from './utils/message.plugin'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'


Vue.config.productionTip = false;


Vue.use(Vuelidate);
Vue.use(messagePlugin);

Vue.filter('date', dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyBeJpxEeK2YMFK_U806GzrK3LZiSReVrAE",
  authDomain: "vue-crm-5e012.firebaseapp.com",
  databaseURL: "https://vue-crm-5e012.firebaseio.com",
  projectId: "vue-crm-5e012",
  storageBucket: "vue-crm-5e012.appspot.com",
  messagingSenderId: "543624880142",
  appId: "1:543624880142:web:ce8574fe998b8739299c5f",
  measurementId: "G-421CYC7B1X"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});


