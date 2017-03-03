import Vue from 'vue';
import VueRouter from 'vue-router';
// import Router from './routes.js';


var glowny = Vue.component('glowny', require('./components/glowny.vue'));
var Bar = Vue.component('example', require('./components/Example.vue'));
var mojcomponent = Vue.component('mojcomponent', require('./components/mojcomponent.vue'));


// routes
Vue.use(VueRouter);

const routes = [
  { path: '/vue', component: glowny },
  { path: '/vue/bar', component: Bar },
  { path: '/vue/mojcomponent/:id', component: mojcomponent },
]

const router = new VueRouter({
	mode: 'history',
  	routes,
});


const mojapp = new Vue({
    el: '#mojapp',
    router
    
});


