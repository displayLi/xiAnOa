import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/iconfont/iconfont.css";
//把axios实例化后引入main.js文件。挂载在axios原型链上全局使用。
import http from "./api/api";
import store from './store/index'


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$axios = http;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit('addMenu', router)
  }
}).$mount('#app')
