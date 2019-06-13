import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/font-awesome.min.css'

import R0 from './components/R0/Resume0.vue'
import R1 from './components/R1/Resume1.vue'
import R from './components/Resume.vue'

//Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueI18n)

Vue.config.productionTip = false

const router = new VueRouter({
    routes: [
        { path: '/r0', component: R0 },
        { path: '/r1', component: R1 },
        { path: '/', component: R },
    ]
})

const i18n = new VueI18n({
    locale: 'cn',
    messages: {
        cn: {
            name: '孙果',
            s: '的简历',
            intention: '前端实习'
        },
        en: {
            name: 'Sun Guo',
            s: '',
            intention: 'Front-end internship'
        }
    }
})

new Vue({
    render: h => h(App),
    router,
    i18n
}).$mount('#app')