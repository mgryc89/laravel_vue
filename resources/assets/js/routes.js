import Vue from 'vue';
import VueRouter from 'vue-router';
// import glowny from './components/glowny.vue';
// import Example from './components/Example.vue';
// import mojcomponent from './components/mojcomponent.vue';
// import dalszyComponent from './components/dalszyComponent.vue';
// import nastepny from './components/nastepny.vue';


Vue.use(VueRouter);

var glowny = Vue.component('glowny', require('./components/glowny.vue'));
var Example = Vue.component('example', require('./components/Example.vue'));
var mojcomponent = Vue.component('mojcomponent', require('./components/mojcomponent.vue'));
var dalszyComponent = Vue.component('dalszyComponent', require('./components/dalszyComponent.vue'));
var nastepny = Vue.component('nastepny', require('./components/nastepny.vue'));

const routes = [
  { path: '/vue', component: glowny },
  { path: '/vue/bar', component: Example },
  { path: '/vue/mojcomponent/:id', component: mojcomponent },
  { path: '/vue/nastepny', component: nastepny },
]

export default routes