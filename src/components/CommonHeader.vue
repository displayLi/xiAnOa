<template>
  <div class="header-container">
    <div class="top-content">
      <div class="l-content">
        <div class="close" @click="handleMenu">
          <img :src="iconChange?require('../assets/icons/col-1.png'):require('../assets/icons/col.png')" alt="">
        </div>
      </div>
      <div class="r-content">
        <div class="home-btn" @click="goMain">
          <img src="../assets/icons/home.png" alt="">
          <span class="home-page">主页</span>
        </div>
<!--        <div class="dark-mode">-->
<!--          &lt;!&ndash; <p>切换为深色模式</p>&ndash;&gt;-->
<!--          <el-switch-->
<!--              v-model="value"-->
<!--              active-color="#18318C"-->
<!--              inactive-color="#f8f8f8"-->
<!--              active-icon-class="el-icon-sunny"-->
<!--              inactive-icon-class="el-icon-moon"-->
<!--          >-->
<!--          </el-switch>-->
<!--        </div>-->
        <div class="message">
<!--          <img src="../assets/icons/msg.png" alt="">-->
        </div>
        <div class="personal-info">
          <img src="../assets/icons/personal.png" alt="">
          <el-dropdown>
            <span class="el-dropdown-link">
             {{ userinfo?userinfo.nickname:"用户" }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="loginOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="breadCrumb">
      <div class="top">
        <!-- v-if="$route.name!='projectManage'" -->
        <img @click="backHistory" src="../assets/icons/left.png" alt="">
        <!-- 面包屑 -->
        <el-breadcrumb separator="">
          <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
          <el-breadcrumb-item></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
<!--      <div class="nav-Box" v-if="$route.meta.title==='添加员工'||$route.meta.title==='员工详情'">-->
<!--        <div class='titleBox' v-for="(item,index) in tabList" :key="index" @click='titleClick(item.id)'>-->
<!--          <div :class="currentIndex === item.id ? 'fontColorBox' : ''">{{ item.title }}</div>-->
<!--          <div :class="currentIndex === item.id ? 'lineBox' : 'notLineBox'"></div>-->
<!--        </div>-->
<!--      </div>-->
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
import Cookie from 'js-cookie'

export default {

  data() {
    return {
      value: true,
      iconChange:false,
      showNav: false,
      userinfo:{},
      currentIndex: 1,
      breadList: [],
      tabList: [
        {
          id: 1,
          title: "基本信息"
        }, {
          id: 2,
          title: "岗位职责"
        }, {
          id: 3,
          title: "工资明细"
        }, {
          id: 4,
          title: "价值贡献榜"
        }
      ]
    }
  },
  created() {
    this.userinfo = JSON.parse(localStorage.getItem('userinfo'))
    console.log("userinfo",this.userinfo);
  },

  methods: {
    handleMenu() {
      this.iconChange = !this.iconChange
      // 相当于调用这个方法
      this.$store.commit('CollapseMenu')
    },
    backHistory(){
      if(this.$route.name!="projectManage"){
        this.$router.go(-1);//返回上一层
      }
    },
    // getBreadcrumb() {
    //   console.log(this.$route.matched)  //可以获取上下文路由 也就是可以获取父亲和孩子路由组成的数组
    //   if (Object.keys(this.$route.matched[0].meta).length > 0) {
    //     this.breadList = this.$route.matched
    //     console.log("breadList",this.breadList)
    //   } else {
    //     this.breadList = []
    //   }
    // },
    goMain(){
      this.$router.push('/main')
    },
    //点击tab时触发
    titleClick: function (index) {
      this.currentIndex = index;
    },
    loginOut(){
      localStorage.removeItem('userinfo');
      localStorage.removeItem('token')
      this.$message.success('退出登录成功！')
      setTimeout(()=>{
        this.$router.push('/main')
      },1000)
    }
  },
  mounted() {

  },
  watch:{
  },
  computed: {
    ...mapState({
      tags: state => state.tab.tabList
    })
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  background-color: #FFFFFF;
  height: 120px;

  .top-content {
    width: 100%;
    height: 60px;
    // 让按钮和头像居中
    display: flex;
    justify-content: space-between;
    align-items: center;

    .l-content {
      display: flex;
      // 上下居中
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0 1.875rem;

      .close {
        width: 1.875rem;
        height: 1.875rem;

        & > img {
          width: 1.875rem;
          height: 1.875rem;
        }
      }
    }

    .r-content {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-right: 3.75rem;
      .home-btn{
        width: 86px;
        height: 48px;
        cursor: pointer;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 5px;
        img{
          width: 20px;
          height: 20px;
        }
        .home-page{
          font-size: 18px;
          color: #313848;
          letter-spacing: 2px;
        }
        &:hover{
          background-color: rgba(24, 49, 140, 0.05);
        }
      }
      .message {
        margin: 0 1.875rem 0 1.5rem;

        img {
          width: 2.125rem;
          height: 2.125rem;
        }
      }

      .personal-info {
        display: flex;
        align-items: center;

        img {
          width: 2.125rem;
          height: 2.125rem;
        }

        span {
          display: inline-block;
          margin-left: 0.5625rem;
          font-size: 1.125rem;
          font-family: "SourceHanSansCN-Regular-, SourceHanSansCN-Regular";
          color: #313848;
          // line-height: 120px;
        }
      }
    }
  }

  .line {
    width: 100%;
    height: 1px;
    opacity: 0.2;
    background-color: #18318C;
  }

  .breadCrumb {
    width: 100%;
    background-color: #ffffff;
    height: 60px;
    // min-height: 60px;
    z-index: 99;
    opacity: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: flex-start;
    box-shadow: 0px 0px 20px 1px rgba(24, 49, 140, 0.1);

    padding-left: 1.875rem;

    .top {
      // margin-top: 0.9375rem;
      // margin-bottom: 1.25rem;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      img {
        width: 1.875rem;
        height: 1.875rem;
      }

      .el-breadcrumb {
        margin-left: 15px;

        // deep 强制生效
        /deep/ .el-breadcrumb__item {
          .el-breadcrumb__inner {
            &.is-link {
              color: #666;
            }
          }

          &:last-child {
            .el-breadcrumb__inner {
              color: #fff;
            }
          }
        }
      }
    }

    .nav-Box {
      /* 顶部tab盒子样式 */
      width: 100%;
      margin: 0 0 0 2.8125rem;
      height: 3.375rem;
      background: #FFFFFF;
      z-index: 11;
      opacity: 1;
      vertical-align: bottom;
      display: flex;
      align-items: center;
      justify-content: flex-start;

    }

    .titleBox {
      /* 未选中文字的样式 */
      font-size: 1.125rem; opacity: 1;

      background: #FFFFFF;
      font-family: "SourceHanSansCN-Medium-, SourceHanSansCN-Medium";
      color: #666666;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .fontColorBox,
    .fontColorBox1 {
      /* 文字默认颜色 */
      font-size: 18px;
      color: #18318C;
    }

    .titleBox:nth-child(2) {
      margin: 0 3.75rem 0 3.75rem;
    }

    .titleBox:last-child {
      margin: 0 3.75rem 0 3.75rem;
    }

    .lineBox,
    .notLineBox {
      /* 选中及未选中底线共同样式 */
      width: 54px;
      height: 2px;
      margin-top: 0.625rem;
    }

    .lineBox {
      /* 选中底线样式 */
      background: #18318C;
      margin-top: 0.625rem;
      border-radius: 4px;
    }

    .notLineBox {
      /* 未选中底线样式 */
      //background: transparent;
    }
  }
}


</style>