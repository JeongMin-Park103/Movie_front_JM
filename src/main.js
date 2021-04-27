import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'

// page
import movie from './components/movie.vue'
import seats from './components/seats.vue'
import book  from './components/book.vue'

Vue.config.productionTip = false
Vue.prototype.$axios = axios; // prototype에 axios 추가
Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: movie
  },
  {
    path: '/seats',
    component: seats,
    name: 'seats'
 },
 {
   path: '/book',
   component: book,
   name: 'book'
 },

];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
  
}).$mount('#app')
