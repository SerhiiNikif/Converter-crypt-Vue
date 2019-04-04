import Vue from 'vue'
import App from './App.vue'

import BlockXrp from './components/BlockXrp.vue';
import BlockEth from './components/BlockEth.vue';
import BlockBtc from './components/BlockBtc.vue';
import Calculation from './components/Calculation.vue';

  Vue.component('BlockXrp', BlockXrp);
Vue.component('BlockEth', BlockEth);
Vue.component('BlockBtc', BlockBtc);
Vue.component('Calculation', Calculation);

new Vue({
  el: '#training',
  render: h => h(App)
})
