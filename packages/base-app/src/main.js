import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import {registerMicroApps, start} from "qiankun";

Vue.config.productionTip = false;
import apps from './apps.json'

registerMicroApps(apps);
start();


new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
