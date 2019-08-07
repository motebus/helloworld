const HelloWorld = () => import('@/views/HelloWorld.vue');


import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/hello'
  },
  {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld
  }
];

export default routes;
