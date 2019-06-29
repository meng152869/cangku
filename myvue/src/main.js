// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from  'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/font-awesome/css/font-awesome.css'
import axios from 'axios';
import $ from './assets/jquery';


// 设置axios可以携带cookie
axios.defaults.withCredentials = true;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(ElementUI);


Vue.filter('fanCalc',function(val){
  val= parseInt(val);
  if(val > 10000){
    return (val/10000).toFixed(1) + '万';
  }else{
    return val + '千';
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
