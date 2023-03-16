import { createRouter,createWebHistory} from 'vue-router'



const  routes = [
    
    {
        path: '/',
        alias:'/home',
        name: 'home',
        component: () => import('@/components/PokedexMain.vue')
    },
    {
        path: '/test/:id',
        alias:'/test',
        name: 'test',
        component: () => import('@/components/HolaMundo.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;