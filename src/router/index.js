import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cookie from 'js-cookie'

/**解决点击以打开路由出错开始 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'projectManage',
        component: HomeView,
        redirect: '/projectManage', // 重定向
    },
    {
        path: '/main',
        name: 'main',
        meta: {
            title: "工作台",
        },
        component: () => import("../views/main/main.vue"),
    },

    {
        path: '/HomeView',
        name: 'HomeView',
        component: () => import("../views/HomeView.vue"),
        children: [
            // 子路由

            //   业务支持
            {
                path: '/businesSsupport',
                name: 'businesSsupport',
                meta: {
                    title: "业务支持系统 / 客户档案",
                },
                component: () => import("../views/businesSsupport/index.vue"),
            },
            {
                path: '/businesSsupport/statistics',
                name: 'statistics',
                component: () => import("../views/businesSsupport/statistics.vue"),
            },
            {
                path: '/businesSsupport/detail',
                name: 'detail',
                meta: {
                    title: "业务支持系统 / 客户档案",
                },
                component: () => import("../views/businesSsupport/detail.vue"),
            },
            //   人力资源管理
            {
                path: '/peopleMgt',
                name: 'peopleMgt',
                meta: {
                    title: "人力资源管理",
                },
                component: () => import("../views/peopleMgt/index.vue"),
            }, {
                path: '/addEmployees',
                name: 'addEmployees',
                meta: {
                    title: "添加员工",
                },
                component: () => import("../views/peopleMgt/addEmployees.vue"),
            },
            {
                path: '/HRmanage',
                name: 'HRmanage',
                meta: {
                    title: "员工详情",
                },
                component: () => import("../views/peopleMgt/HRmanage.vue"),
            },
            //   合同管理
            {
                path: '/contractManage',
                name: 'contractManage',
                meta: {
                    title: "合同列表",
                },
                component: () => import("../views/contractManage/index.vue"),
            },
            {
                path: '/application',
                name: 'application',
                meta: {
                    title: "合同申领",
                },
                component: () => import("../views/contractManage/application.vue"),
            },
            //   项目管理
            {
                path: '/projectManage',
                name: 'projectManage',
                meta: {
                    title: "项目管理系统",
                },
                component: () => import("../views/projectManage/projectManage.vue"),
            },
            {
                path: '/detailPro',
                name: 'detailPro',
                hidden: false,
                component: () => import("../views/projectManage/detailPro.vue"),
            },
            {
                path: '/detailPro1',
                name: 'detailPro1',
                hidden: false,
                component: () => import("../views/projectManage/detailPro1.vue"),
            },
            {
                path: '/detailPro2',
                name: 'detailPro2',
                hidden: false,
                component: () => import("../views/projectManage/detailPro2.vue"),
            },
            {
                path: '/detailPro3',
                name: 'detailPro3',
                hidden: false,
                component: () => import("../views/projectManage/detailPro3.vue"),
            },
            {
                path: '/detailPro4',
                name: 'detailPro4',
                hidden: false,
                component: () => import("../views/projectManage/detailPro4.vue"),
            },
            {
                path: '/projectManage1',
                name: 'projectManage1',
                hidden: false,
                component: () => import("../views/projectManage/projectManage1.vue"),
            },
            {
                path: '/projectManage2',
                name: 'projectManage2',
                hidden: false,
                component: () => import("../views/projectManage/projectManage2.vue"),
            },
            {
                path: '/projectManage3',
                name: 'projectManage3',
                hidden: false,
                component: () => import("../views/projectManage/projectManage3.vue"),
            },
        ]
    },
    {
        path: '/register',
        name: 'register',
        component: () => import("../views/register/register.vue"),
    }
]

const router = new VueRouter({
    routes
})
// 路由守卫:全局前置导航守卫
router.beforeEach((to, from, next) => {
    // 获取token
    // const token = localStorage.getItem('token')
    // let isSetPass = localStorage.getItem('isSetPass')
    // if (!token && to.name !== 'main') {
    //     next({name: 'main'})
    //     //   如果用户已登陆过判断用户是否需要设置密码
    // } else if (token && isSetPass != 0 && to.name === 'main') {
    //     next({name: 'main'})
    // } else {
    //     console.log("jjjj")
    //     next()
    // }
    next()
})

export default router
