import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DepositFiet from '../views/DepositFiet.vue'
import CurrencyConverter from '../views/CurrencyConverter.vue'
import KYCVerification from '../views/KYCVerification.vue'
import Login from '../components/login.vue'
import SignUp from '../components/SignUp.vue'
import NewDeviceForm from '../components/NewDeviceForm'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/NewDeviceForm',
        name: 'NewDeviceForm',
        component: NewDeviceForm
    },
    {
        path: '/DepositFiet',
        name: 'DepositFiet',
        component: DepositFiet
    },
    {
        path: '/CurrencyConverter',
        name: 'CurrencyConverter',
        component: CurrencyConverter
    },
    {
        path: '/KYCVerification',
        name: 'KYCVerification',
        component: KYCVerification
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router