// 引入vue
import Vue from 'vue'
// 引入vue-router
import VueRouter from 'vue-router'

// 用vue使用vue-router
Vue.use(VueRouter)

// 导入首页、登录、注册、购物车、商品详情
import Home from '../pages/Cart.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import Cart from '../pages/Cart.vue'
import Mine from '../pages/Mine.vue'
import Search from '../pages/Search.vue'


// 实例化VueRouter并配置参数
const router = new VueRouter({
    routes:[{
        name:'home',
        path:'/home',
        component:Home
    },{
        name:'search',
        path:'/search',
        component:Search
    },{
        name:'login',
        path:'/login',
        component:Login
    },{
        name:'reg',
        path:'/reg',
        component:Reg
    },{
        name:'cart',
        path:'/catr',
        component:Cart
    },{
        name:'mine',
        path:'/mine',
        component:Mine
    }]
})

export default router