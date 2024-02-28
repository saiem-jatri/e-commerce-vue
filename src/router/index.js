import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    // {
    //     path: '/', components: {
    //         default: ,
    //     }
    // },
    // {
    //     path: '/stories/:id', components: {
    //         default: Story,
    //     },
    //     name: 'story',
    // },
    // {
    //     path: '/comments/:id/:id', components: {
    //         default: Comments,
    //     },
    //     name: 'comments',
    // }
]

const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
    history: createWebHistory(),
    routes
})

export default router