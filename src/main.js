// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from "axios";
var instance = axios.create();
instance.defaults.withCredentials = true;
function myAjax(url, data){
  return new Promise(function(resolve, reject){
    instance.post(url, data)
    .then(function(res) {
      resolve(res.data)
    })
    .catch(function(error) {
      reject(error);
    });
  })
}
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.prototype.$http = myAjax;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
