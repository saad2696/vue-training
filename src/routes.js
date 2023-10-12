import {createWebHistory, createRouter} from 'vue-router'
import HomeComp from './components/Home.vue'
import HelloWorld from './components/HelloWorld.vue'
const routes = [
        {
            name: 'Home',
            path: '/',
            component: HomeComp
        },
        {
            name: 'HelloWorld',
            path: '/helloWorld',
            component: HelloWorld
        }
    
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router