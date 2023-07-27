<template>
  <el-menu
    :default-active="$route.name"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#112466"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!-- 要放到导航栏里面 -->
    <div class="noCollapse" v-if="!isCollapse">
      <img src="../assets/icons/logo1.png" alt="" />
      <h3 v-if="!isCollapse">THE ROCK 系统</h3>
    </div>
    <div class="Collapse" v-else>
      <img src="../assets/icons/logo1.png" alt="" />
    </div>
    <p class="line-div"></p>
    <!-- 观察数据,我们发现name是唯一标识 -->
    <!-- 查看文档,index是唯一标识 -->
    <el-menu-item
      @click="clickItem(item)"
      v-for="item in noChildren"
      :key="item.name"
      :index="item.name"
      style="margin: 10px"
    >
      <!-- 这里是字体图标,用模板字符串拼接,注意要动态绑定 -->
      <img :src="require(`../assets/icons/${item.icon}`)" alt="" />
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    
    <el-submenu
      v-for="item in hasChildren"
      :key="item.label"
      :index="item.label"
      style="color: #fff"
    >
      <template slot="title">
        <!-- <i :class="`el-icon-${item.icon}`"></i> -->
        <img :src="require(`../assets/icons/${item.icon}`)" alt="" />
        <span slot="title">{{ item.label }}</span>
      </template>
      
      <!-- <el-menu-item-group v-for="subItem in item.children" :key="subItem.name">
        为什么要用分组？我看设计稿也没有分组啊
      </el-menu-item-group> -->

      <el-menu-item
        v-for="subItem in item.children" :key="subItem.name"
        @click="clickItem(subItem)"
        :index="subItem.name"
        style="color: #ffffff"
        >
        <span slot="title">{{ subItem.label }}</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu .el-menu-item-group .el-menu-item.is-active {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1ecdbe !important;
  color: #ffffff !important;
  border-radius: 10px;
  height: 48px;
}

.el-menu {
  height: 100vh;
}
.el-menu-vertical-demo .el-menu--collapse .el-menu {
  width: 80px;

  /deep/ .el-tooltip {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0px 17px;
  }

  .el-menu-item.is-active {
    // width: 73.5% !important;
    // margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1ecdbe !important;
    color: #ffffff !important;
    border-radius: 10px;
    height: 54px;
    line-height: 54px;
    text-align: center;
  }
}

/*菜单下拉框样式开始*/
/deep/ .el-menu--vertical {
  /deep/ .el-menu--popup-right-start {
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 10px !important;
  }
  /deep/ .el-menu--popup {
    z-index: 100;
    min-width: 160px !important;
    border: none;
    height: auto;
    padding: 10px;
    border-radius: 10px !important;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  /deep/ .el-menu-item-group {
    .el-menu-item.is-active {
      // width: 73.5% !important;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff !important;
      border-radius: 10px;
      // height: 48px;
    }
  }
  /deep/ .el-menu .el-menu-item-group .el-menu-item.is-active[data-v-a28ad4e6] {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none !important;
    color: #ffffff !important;
    border-radius: 10px;
    height: 48px;
  }
}

//.el-menu-item:hover{
//  background-color: #1ECDBE!important;
//  color: #ffffff !important;
//}
/*菜单下拉框样式结束*/

.el-menu {
  width: 80px;
  height: 100vh;
  // Aside和Header之间没有边框缝隙
  border-right: none;

  .noCollapse {
    //width: 100%;
    height: 60px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    img {
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

  .Collapse {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;

    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    img {
      width: 2.25rem;
      height: 2.25rem;
    }
  }

  .el-menu-item {
    // width: 92.8%;
    // margin: 10px auto;
    border-radius: 10px;
    height: 54px;
    line-height: 54px;

    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }

  .el-submenu {
    color: #fff !important;

    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    /deep/ .el-menu--inline{
      padding: 0 10px;
      box-sizing: border-box;
      .el-menu-item{
        width: 100%;
        margin: 10px 0;
        min-width: initial;
      }
    }
  }
  

  /deep/ .el-submenu__title {
    padding-left: 30px !important;
  }

  .el-menu-item-group {
    .el-menu-item.is-active {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #1ecdbe !important;
      color: #ffffff !important;
      border-radius: 10px;
      height: 48px;

      span {
        color: #ffffff !important;
      }
    }
  }
  .el-menu-item-group {
    .el-menu-item {
      display: flex;
      align-items: center;
      justify-content: center;
      //background-color: #1ECDBE !important;
      color: #ffffff;
      border-radius: 10px;
      height: 48px;

      span {
        color: #ffffff !important;
      }
    }
  }

  .el-menu-item.is-active {
    display: flex;
    align-items: center;
    background-color: #1ecdbe !important;
    color: #ffffff !important;
    border-radius: 10px;
    // width: 92.8%;
    // margin: 10px auto;
    height: 54px;
    line-height: 54px;

    span {
      color: #ffffff !important;
    }
  }
}
</style>

<style>
  .el-menu--popup {
    padding: 10px !important;
  }
</style>

<script>
export default {
  data() {
    return {
      MenuData: [
        // {
        //   path: '/',
        //   name: 'main',
        //   label: '首页',
        //   icon: 's-home',
        //   url: 'main.vue'
        // },
        {
          path: "/projectManage",
          name: "projectManage",
          label: "项目管理系统",
          icon: "nav1.png",
          url: "projectManage.vue",
        },

        {
          label: "业务支持系统",
          icon: "nav2.png",
          children: [
            {
              path: "/businesSsupport",
              name: "businesSsupport",
              label: "客户档案",
              url: "index.vue",
            },
          ],
        },
        {
          path: "/peopleMgt",
          name: "peopleMgt",
          icon: "nav3.png",
          url: "peopleMgt.vue",
          label: "人力资源管理",
        },
        {
          label: "合同管理",
          icon: "nav4.png",
          children: [
            {
              path: "/contractManage",
              name: "contractManage",
              label: "合同列表",
              icon: "setting",
              url: "index.vue",
            },
            {
              path: "/application",
              name: "application",
              label: "合同申领",
              icon: "setting",
              url: "application.vue",
            },
          ],
        },
      ],
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
      if (
        this.$route.path !== item.path &&
        !(this.$route.path === "/HomeView" && item.path === "/")
      ) {
        this.$router.push(item.path);
      }
      // 面包屑
      this.$store.commit("SelectMenu", item);
    },
  },
  computed: {
    noChildren() {
      // 如果没有children则返回true,会被过滤器留下
      console.log("this.MenuData", this.MenuData);
      return this.MenuData.filter((item) => !item.children);
    },
    hasChildren() {
      return this.MenuData.filter((item) => item.children);
    },
    // 要放到计算属性,自动计算
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
    // 获取菜单
    // MenuData() {
    //     return JSON.parse(cookie.get('menu')) || this.$store.state.tab.menu
    // }
  },
};
</script>