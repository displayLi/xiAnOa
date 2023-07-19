<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
           :collapse="isCollapse" background-color="#112466" text-color="#fff" active-text-color="#ffd04b">
    <!-- 要放到导航栏里面 -->
    <div class="noCollapse" v-if="!isCollapse">
      <img src="../assets/icons/logo1.png" alt="">
      <h3>THE ROCK 系统</h3>
    </div>
    <div class="Collapse" v-else>
      <img src="../assets/icons/logo1.png" alt="">
    </div>
    <!-- 观察数据,我们发现name是唯一标识 -->
    <!-- 查看文档,index是唯一标识 -->
    <el-menu-item @click="clickItem(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
      <!-- 这里是字体图标,用模板字符串拼接,注意要动态绑定 -->
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.name">
        <el-menu-item @click="clickItem(subItem)" :index="subItem.name">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  //width: 14.6%;
  height:  100vh;
  // Aside和Header之间没有边框缝隙
  border-right: none;
  .noCollapse{
    //width: 100%;
    margin: 1.75rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 2.25rem;
      height: 2.25rem;
      margin-right: 1.25rem;
    }
    h3 {
      text-align: center;
      line-height: 48px;
      color: #fff;
      font-size: 16px;
      font-weight: 400;
    }
  }
  .Collapse{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.75rem;
    img{
      width: 2.25rem;
      height: 2.25rem;
    }
  }

}
</style>

<script>
import cookie from 'js-cookie'

export default {
  data() {
    return {
      MenuData: [
        {
          path: '/',
          name: 'main',
          label: '首页',
          icon: 's-home',
          url: 'main.vue'
        },{
          path: '/projectManage',
          name: 'projectManage',
          label: '项目管理系统',
          icon: 'files',
          url: 'projectManage.vue'
        },

        {
          label: '业务支持系统',
          icon: 's-cooperation',
          children: [
            {
              path: '/businesSsupport',
              name: 'businesSsupport',
              label: '客户数据',
              icon: 'setting',
              url: 'index.vue'
            },
            // {
            //   path: '/businesSsupport/statistics',
            //   name: 'statistics',
            //   label: '业务统计',
            //   icon: 'setting',
            //   url: '/businesSsupport/statistics.vue'
            // },
            // {
            //   path: '/businesSsupport/detail',
            //   name: 'detail',
            //   label: '详情',
            //   icon: 'setting',
            //   url: '/businesSsupport/detail.vue'
            // },
            // {
            //   path: '/businesSsupport/personal',
            //   name: 'personal',
            //   label: '个人',
            //   icon: 'setting',
            //   url: '/businesSsupport/personal.vue'
            // }
          ]
        },
        {
          path: '/peopleMgt',
          name: 'peopleMgt',
          icon: 'edit',
          url: 'peopleMgt.vue',
          label: '人力资源管理'
        },
        {
          label: '合同管理',
          icon: 's-cooperation',
          children: [
            {
              path: '/contractManage',
              name: 'contractManage',
              label: '合同列表',
              icon: 'setting',
              url: 'index.vue'
            },
            {
              path: '/application',
              name: 'application',
              label: '合同申领',
              icon: 'setting',
              url: 'application.vue'
            }
          ]
        },
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickItem(item) {
      // 防止自己跳自己的报错
      if (this.$route.path !== item.path && !(this.$route.path === '/HomeView' && (item.path === '/'))) {
        this.$router.push(item.path)
      }
      // 面包屑
      this.$store.commit('SelectMenu', item)
    }
  },
  computed: {
    noChildren() {
      // 如果没有children则返回true,会被过滤器留下
      console.log("this.MenuData", this.MenuData)
      return this.MenuData.filter(item => !item.children)
    },
    hasChildren() {
      return this.MenuData.filter(item => item.children)
    },
    // 要放到计算属性,自动计算
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
    // 获取菜单
    // MenuData() {
    //     return JSON.parse(cookie.get('menu')) || this.$store.state.tab.menu
    // }
  }
}
</script>