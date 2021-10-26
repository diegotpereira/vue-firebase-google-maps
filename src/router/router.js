import { createWebHistory, createRouter } from "vue-router";
import firebase from 'firebase'

import Login from '@/views/Login'
import Registro from '@/views/Registro'
import Admin from '@/views/Admin'
import Motorista from '@/views/Motorista'

const routes = [{
        path: '/registro',
        name: 'Registro',
        component: Registro,
        meta: {
            guest: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            guest: true
        }
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        meta: {
            auth: true
        }
    },
    {
        path: '/motorista',
        name: 'Motorista',
        component: Motorista,
        meta: {
            auth: true
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    firebase.auth().onAuthStateChanged(userAuth => {
        if (!userAuth && to.matched.some(record => record.meta.requiresAuth)) {
            next({
                name: 'Login'
            })
        } else if (userAuth) {
            if (to.matched.some(record => record.meta.guest)) {
                next(from.fullPath)
            } else {
                firebase.firestore().collection("roles").doc(userAuth.uid).get().then(snapShot => {
                    if (snapShot.data().isAdmin) {
                        next({
                            name: 'Admin'
                        })
                    } else {
                        next({
                            name: 'Motorista'
                        })
                    }
                })
            }
        } else {
            next()
        }
    })
    next()
})

export default router;