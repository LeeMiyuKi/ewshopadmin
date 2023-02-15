import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import {createRouter, createWebHistory} from "vue-router";

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    {path:'/',component: Home},
    {path: '/login',component: Login},
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    //4.内部提供了history模式的实现。为了简单起见，我们在这里使用hash模式
    history:createWebHistory(),
    routes,//`routes: routes`的编写
})

export default router;