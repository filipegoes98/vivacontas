import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'


// Import Routes 
import router from './router'


//Import plugins
import './plugins/bootstrap-vue'
import './plugins/axios'

//import css
import './assets/css/styles.css'

//Import mask
import VueMask from 'v-mask'
Vue.use(VueMask);

// Import SweetAlert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);


//import Moment 
import moment from 'vue-moment';
Vue.use(moment)


//config eventhub

Vue.prototype.$eventHub = new Vue();

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')