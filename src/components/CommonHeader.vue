<template>
  <div class="header-container">
    <div class="top-content">
      <div class="l-content">
        <div class="close" @click="handleMenu">
          <img src="../assets/icons/col.png" alt="">
        </div>
      </div>
      <div class="r-content">
        <div class="dark-mode">
        <!-- <p>切换为深色模式</p>-->
          <el-switch
              v-model="value"
              active-color="#18318C"
              inactive-color="#f8f8f8"
              active-icon-class="el-icon-sunny"
              inactive-icon-class="el-icon-moon"
          >
          </el-switch>
        </div>
        <div class="message">
          <img src="../assets/icons/msg.png" alt="">
        </div>
        <div class="personal-info">
          <img src="../assets/icons/personal.png" alt="">
          <span class="info">
            早上好！张某某
          </span>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="breadCrumb">
      <div class="top">
        <img src="../assets/icons/left.png" alt="">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{ item.label }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="nav-Box" v-if="showNav">
        <div class='titleBox' v-for="(item,index) in tabList" :key="index" @click='titleClick(item.id)'>
          <div :class="currentIndex === item.id ? 'fontColorBox' : ''">{{ item.title }}</div>
          <div :class="currentIndex === item.id ? 'lineBox' : 'notLineBox'"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script >
import {mapState} from 'vuex'
import Cookie from 'js-cookie'

export default {

  data(){
    return{
      value: true,
      showNav:false,
      currentIndex: 1,
      tabList:[
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
    console.log(this.$route.path)
    this.$nextTick(()=>{
      if(this.$route.name==='baseInfo'){
        this.showNav = true;
      }else {
        console.log("hhh")
        this.showNav = false
      }
    })
  },

  methods: {
    handleMenu() {
      // 相当于调用这个方法
      this.$store.commit('CollapseMenu')
    },
    //点击tab时触发
    titleClick: function (index) {
      this.currentIndex = index;
    },
  },
  mounted() {

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
  height: 140px;

  .top-content {
    width: 100%;
    height: 57.14%;
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
      .message{
        margin: 0 1.875rem 0 1.5rem;
        img{
          width: 2.125rem;
          height: 2.125rem;
        }
      }
      .personal-info{
        display: flex;
        align-items: center;
        img{
          width: 2.125rem;
          height: 2.125rem;
        }
        span{
          display: inline-block;
          margin-left: 0.5625rem;
          font-size: 1.125rem;
          font-family: "SourceHanSansCN-Regular-, SourceHanSansCN-Regular";
          color: #313848;
          line-height: 120px;
        }
      }
    }
  }
  .line{
    width: 100%;
    height: 1px;
    opacity: 0.2;
    background-color:#18318C;
  }
  .breadCrumb{
    width: 100%;
    height: auto;
    min-height: 3.75rem;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: flex-start;
    box-shadow: 0px 0px 20px 1px rgba(24,49,140,0.1);

    padding-left: 1.875rem;
    .top{
      margin-top: 0.9375rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      img{
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
      margin: 1.25rem 0 0 2.8125rem;
      height: 3.375rem;
      background: #FFFFFF;
      vertical-align: bottom;
      display: flex;
      align-items: center;
      justify-content: flex-start;

    }
    .titleBox {
      /* 未选中文字的样式 */
      font-size: 1.125rem;
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
    .titleBox:nth-child(2){
      margin: 0 3.75rem 0 3.75rem;
    }
    .titleBox:last-child{
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