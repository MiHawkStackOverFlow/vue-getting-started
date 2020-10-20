import Vue from 'vue';
import App from '@/app';

Vue.config.productionTip = false;


// this is where it is bootstrapped
new Vue({
  render: h => h(App),
}).$mount('#app');
