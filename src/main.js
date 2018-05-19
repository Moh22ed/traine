import Vue from 'vue'
import App from './App.vue'
import Inag from './comp/inag.vue'
import Rs from 'vue-resource'
import Rt from 'vue-router'
import ro from './router'
import Add from './comp/add.vue'

//Components
Vue.component('app-inag', Inag);
Vue.component('app-add', Add);

//Use
Vue.use(Rs);
Vue.use(Rt);


//Routes

const router = new Rt({
  routes: ro,
  mode:'history'

});


new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
