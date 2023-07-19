
<template>
    <div class="container">
      <el-container>
        <!-- width自适应,不然header与aside有间隔 -->
        <el-aside width="auto" style="background: #18318C">
          <common-aside></common-aside>
        </el-aside>
        <el-container>
          <el-header style="height: auto;min-height: 8.75rem">
            <common-header/>
          </el-header>
          <el-main style="padding: 0">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonTags from '../components/CommonTags.vue'
export default {
  //import引入的组件需要注入到对象中才能使用",
  components: {
    CommonAside,
    CommonHeader,
    CommonTags
  },
  data() {
    //这里存放数据",
    return {

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

  },
  //生命周期 - 创建之前",数据模型未加载,方法未加载,html模板未加载
  beforeCreate() {
  },

  //生命周期 - 创建完成（可以访问当前this实例）",数据模型已加载，方法已加载,html模板已加载,html模板未渲染
  created() {

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
.el-header{
  padding:0;

}
</style>
