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
    name:'HomeView',
    component: HomeView,
    redirect: '/HomeView', // 重定向
  },
  {
    path: '/HomeView',
    name: 'HomeView',
    component: () => import("../views/HomeView.vue"),
    children: [
      // 子路由
      { path: '/main', name: 'main', component: () => import("../views/main/main.vue"), }, // 首页
      //   业务支持
      {
        path: '/businesSsupport',
        name: 'businesSsupport',
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
        component: () => import("../views/businesSsupport/detail.vue"),
      },
      {
        path: '/businesSsupport/personal',
        name: 'personal',
        component: () => import("../views/businesSsupport/personal.vue"),
      },
      //   人力资源管理
      {
        path: '/peopleMgt',
        name: 'peopleMgt',
        component: () => import("../views/peopleMgt/index.vue"),
      }, {
        path: '/baseInfo',
        name: 'baseInfo',
        component: () => import("../views/peopleMgt/baseInfo.vue"),
      },{
        path: '/addEmployees',
        name: 'addEmployees',
        component: () => import("../views/peopleMgt/addEmployees.vue"),
      },
      //   合同管理
      {
        path: '/contractManage',
        name: 'contractManage',
        component: () => import("../views/contractManage/index.vue"),
      },
      {
        path: '/application',
        name: 'application',
        component: () => import("../views/contractManage/application.vue"),
      },
      //   项目管理
      {
        path: '/projectManage',
        name: 'projectManage',
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
  const token = localStorage.getItem('token')
  let isSetPass=localStorage.getItem('isSetPass')
  console.log("is---->",isSetPass)
  if (!token && to.name !== 'register') {
    next({ name: 'register' })
  //   如果用户已登陆过判断用户是否需要设置密码
  } else if (token && isSetPass!=0 && to.name === 'register') {
    next({ name: 'main' })
  } else {
    next()
  }
})

export default router
