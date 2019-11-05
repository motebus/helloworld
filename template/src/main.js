import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {i18n} from './i18n';

import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

const opts = {
  icons: {
    iconfont: 'md', // default - only for display purposes
  },
};

Vue.config.productionTip = false
Vue.use(Vuetify);

Vue.config.productionTip = false;

Vue.prototype.makeId = function(length){
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const DEFAULT_TITLE = 'YpCloud';
router.afterEach((to, from) => {
    document.title = to.meta.title || DEFAULT_TITLE;
});

new Vue({
  vuetify : new Vuetify(opts),
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
