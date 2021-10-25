import { createWebHistory, createRouter } from "vue-router";

import Login from '@/views/Login'
import Registro from '@/views/Registro'
import Admin from '@/views/Admin'
import Motorista from '@/views/Motorista'
import Cliente from '@/views/Cliente'

const routes = [{
        path: '/registro',
        name: 'registro',
        component: Registro,
        // meta: {
        //     guest: true
        // }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        // meta: {
        //     guest: true
        // }
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
        // meta: {
        //     auth: true
        // }
    },
    {
        path: '/motorista',
        name: 'motorista',
        component: Motorista,
        // meta: {
        //     auth: true
        // }
    },
    {
        path: '/cliente',
        name: 'cliente',
        component: Cliente,
        // meta: {
        //     auth: true
        // }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;