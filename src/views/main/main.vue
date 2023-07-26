<template>
    <div class="main-container">
      <!--   顶部logo   -->
      <div class="home-header">
        <img src="../../assets/icons/main-17.png" alt="">
        <div class="left-loginInfo">
          <img src="../../assets/icons/main-18.png" alt="">
          <P class="loginInfo" v-if="token">早上好！张某某</P>
          <p class="loginInfo" v-if="!token" @click="goRegister">请登录</p>
        </div>
      </div>
      <div class="middle-infomation">
        <img src="../../assets/icons/main-19.png" alt="">
        <p>THE ROCK 管理系统</p>
        <p class="short-line"></p>
      </div>
      <!-- 菜单按钮 -->
      <div class="menu-content">
        <div class="menu-box">
          <div class="menu-item" v-for="(item,index) in menuList" :key="index" @click="goView(item.path)">
            <div class="icon-img"></div>
            <p class="item-name">
              <span class="chinese">{{item.name}}</span>
              <span class="english">{{item.en_name}}</span>
            </p>
          </div>
        </div>
      </div>
      <!--  菜单按钮适配  -->
      <div class="menu-contentA">
        <div class="menu-box">
          <div class="menu-item" v-for="(item,index) in menuList" :key="index" @click="goView(item.path)">
            <div class="icon-img"></div>
            <p class="item-name">
              <span class="chinese">{{item.name}}</span>
              <span class="english">{{item.en_name}}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="supports-devices">
        <div class="logo-lists">
          <img src="../../assets/icons/main-wx.png" alt="微信">
          <img src="../../assets/icons/main-mini.png" alt="微信小程序">
          <img src="../../assets/icons/main-pc.png" alt="电脑">
        </div>
        <p class="copyrights">THE ROCK-2023-V3.0 版</p>
      </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';


export default {
  //import引入的组件需要注入到对象中才能使用",
  components: {

  },
  data() {
    //这里存放数据",
    return {
      token:"",
      menuList:[
        {
          icon:'main-1',
          path:'/projectManage',
          icon_hover:'main-9',
          name:'项目管理系统',
          en_name:'Project Management System'
        },
        {
          icon:'main-8',
          icon_hover:'main-10',
          path:'/peopleMgt',
          name:'人力资源管理',
          en_name:'Human Resource Management'
        },
        {
          icon:'main-2',
          icon_hover:'main-11',
          path:'/businesSsupport',
          name:'业务支持系统',
          en_name:'Business Supporting System'
        },
        {
          icon:'main-3',
          icon_hover:'main-12',
          path:'/contractManage',
          name:'合同管理',
          en_name:'contract management'
        },
        {
          icon:'main-4',
          icon_hover:'main-13',
          path:'',
          name:'政策数据中心',
          en_name:'Policy Data Center'
        },
        {
          icon:'main-5',
          icon_hover:'main-14',
          path:'',
          name:'内部学习平台',
          en_name:'Internal learning platform'
        },
        {
          icon:'main-6',
          icon_hover:'main-15',
          path:'',
          name:'可视化数据平台',
          en_name:'Visual data platform'
        },{
          icon:'main-7',
          icon_hover:'main-16',
          path:'',
          name:'申报大师',
          en_name:'Declaration Master'
        },

      ]
    };
  },
  //监听属性 类似于data概念",
  computed: {


  },
  //监控data中的数据变化",
  watch: {

  },
  //方法集合",
  methods: {
    goRegister(){
      this.$router.push('/register')
    },
    goView(path){
      console.log("path",path)
      if(path===""){
        this.$message.warning('暂未开通~')
      }else if (!this.token){
        this.$message.warning('请先登录~')
        setTimeout(()=>{this.goRegister()},1000)
      }else {
        this.$router.push({path:path})
      }
    }
  },
  //生命周期 - 创建之前",数据模型未加载,方法未加载,html模板未加载
  beforeCreate() {
  },

  //生命周期 - 创建完成（可以访问当前this实例）",数据模型已加载，方法已加载,html模板已加载,html模板未渲染
  created() {
    this.token = localStorage.getItem('token')
  },
  //生命周期 - 挂载之前",html模板未渲染
  beforeMount() {

  },

  //生命周期 - 挂载完成（可以访问DOM元素）",html模板已渲染
  mounted() {

  },

  //生命周期 - 更新之前",数据模型已更新,html模板未更新
  beforeUpdate() {

  },
  //生命周期 - 更新之后",数据模型已更新,html模板已更新
  updated() {

  },
  //生命周期 - 销毁之前",
  beforeDestroy() {

  },
  destroyed() {

  },
  //生命周期 - 销毁完成",
  //如果页面有keep-alive缓存功能，这个函数会触发",
  activated() {

  },
}

</script>

<style lang="scss" scoped>
@import "./main";
</style>
