import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueCarousel from 'vue-carousel';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { routes } from './routes';


Vue.use(VueCarousel);
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  routes
})

Vue.filter('to-uppercase',function(value){
  return value.toUpperCase();
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
