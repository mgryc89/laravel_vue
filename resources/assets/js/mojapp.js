import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Router from './routes.js';

Vue.use(VueAxios, axios);

// var glowny = Vue.component('glowny', require('./components/glowny.vue'));
// var Bar = Vue.component('example', require('./components/Example.vue'));
// var mojcomponent = Vue.component('mojcomponent', require('./components/mojcomponent.vue'));
// var dalszyComponent = Vue.component('dalszyComponent', require('./components/dalszyComponent.vue'));
// var nastepny = Vue.component('nastepny', require('./components/nastepny.vue'));


// routes
// Vue.use(VueRouter);

// const routes = [
//   { path: '/vue', component: glowny },
//   { path: '/vue/bar', component: Bar },
//   { path: '/vue/mojcomponent/:id', component: mojcomponent },
//   { path: '/vue/nastepny', component: nastepny },
// ]

const router = new VueRouter({
	mode: 'history',
  	routes: Router,
});


const mojapp = new Vue({
    el: '#mojapp',
    router
    
});


