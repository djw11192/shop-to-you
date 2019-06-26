import Vue from 'vue';
import App from './app/App.vue';
import './plugins/plugins';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
