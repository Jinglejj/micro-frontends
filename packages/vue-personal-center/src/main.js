import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';

Vue.config.productionTip = false;


let router = null;
let vm = null;

function render(props = {}) {
    const {container} = props;
    router = new VueRouter({
        base: window.__POWERED_BY_QIANKUN__ ? '/personalCenter/' : '/',
        mode: 'history',
        routes,
    });
    vm = new Vue({
        router,
        store,
        render: h => h(App),
    }).$mount(container ? container.querySelector('#app') : '#app');
}

// 开发环境下
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('personalCenter boostrap!')
}

export async function mount(props) {
    render(props);
}

export async function unmount() {
    vm.$destroy();
    vm.$el.innerHTML = '';
    vm = null;
    router = null;
}
