import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import {routes} from './routes'
import App from './app.vue'
import store from './vuex/store'


Vue.use(VueRouter)
Vue.use(ElementUI)
//Vue.use(routes)

const router = new VueRouter({
    routes
})

new Vue({
    el:'#app',
    router:router,
    store,
    render: h=>h(App)
})

