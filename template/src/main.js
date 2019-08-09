import Vue from 'vue';
import Vuetify from 'vuetify';
import VueTouch from 'vue-touch';
import gitpage from 'vue-gitpage'; // npm install vue-gitpage
import App from './App.vue';
import router from './router';
import store from './store';
import webmms from "webmms";
import { set as setCookie, get as getCookie, remove as removeCookie } from "es-cookie";

// import 'vuetify/dist/vuetify.min.css';
import '@/assets/style/main.styl';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import "vue-loaders/dist/vue-loaders.css";
import "vue-plyr/dist/vue-plyr.css";
// import "vue2-animate/dist/vue2-animate.min.css";

Vue.use(Vuetify, {
  options: {
    customProperties: true,
  },
  theme: {
    dark: '#353535',
  },
  iconfont: 'md',
});


Vue.use(VueTouch);
Vue.use(gitpage);


Vue.config.productionTip = false;

Vue.prototype.$mms = webmms({
  EiToken: getCookie("EiToken") || "",
  SToken: getCookie("SToken") || ""
});


const DEFAULT_TITLE = 'YpCloud';
router.afterEach((to, from) => {
    document.title = to.meta.title || DEFAULT_TITLE;
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
