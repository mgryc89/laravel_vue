import Vue from 'vue';
import VueRouter from 'vue-router';

// import Example from './components/Example.vue';
// import Mojcomponent from './components/mojcomponent.vue';


const routes = [
  { path: '/vue/foo/:id', component: Vue.component('mojcomponent', require('./components/mojcomponent.vue')) },
  { path: '/vue/bar', component: Bar }
]

const router = new VueRouter({
	mode: 'history',
  routes,
});

export default router