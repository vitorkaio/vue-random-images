import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

// Faz o Lazy Loading do component.
const Home = () => import(/* webpackChunkName: "info" */'./components/Home.vue');
const Info = () => import(/* webpackChunkName: "info" */'./components/info/Info.vue');


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/info',
    component: Info,
    props: true,
  },
 /*  {
    path: '/info/:id',
    component: Info,
    props: true,
  }, */
  {
    path: '/*',
    redirect: '/'
  }
];

const router = new Router({
  routes,
  mode: 'history'
});

export default router;