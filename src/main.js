// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'

import VueCordova from 'vue-cordova';
Vue.config.productionTip = false;
import 'mint-ui/lib/style.css'

import './assets/css/index.css';

Vue.use(MintUI);
Vue.prototype.$cordova = VueCordova;
// console.log(VueCordova);
Vue.use(MintUI);




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
