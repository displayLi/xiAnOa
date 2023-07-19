<template>
  <div class="index-container">
    <div class="team-type">
      <!-- 分组tab -->
      <div class="tab-box">
        <div class="nav">
          <div class='titleBox' v-for="(item,index) in teamList" :key="index" @click='titleClick(item.id)'>
            <div :class="currentIndex === item.id ? 'fontColorBox' : ''">{{ item.title }}</div>
            <div :class="currentIndex === item.id ? 'lineBox' : 'notLineBox'"></div>
          </div>
        </div>
        <div class="picker">
          <el-date-picker
              v-model="create_at"
              type="date"
              placeholder="选择日期">
          </el-date-picker>
        </div>

      </div>
      <div class="team-box">
        <div class="team-info">
          <div class="l-info">
            <img src="../../assets/icons/icon1.png" alt="">
            <div class="num-info">
              <p class="info-title">客户总数</p>
              <p class="number">5620</p>
            </div>
          </div>
          <div class="r-info">
            <img src="../../assets/icons/icon1-1.png" alt="">
          </div>
        </div>
        <div class="team-info">
          <div class="l-info">
            <img src="../../assets/icons/icon2.png" alt="">
            <div class="num-info">
              <p class="info-title">客户总数</p>
              <p class="number">5620</p>
            </div>
          </div>
          <div class="r-info">
            <img src="../../assets/icons/icon2-2.png" alt="">
          </div>
        </div>
        <div class="team-info">
          <div class="l-info">
            <img src="../../assets/icons/icon3.png" alt="">
            <div class="num-info">
              <p class="info-title">客户总数</p>
              <p class="number">5620</p>
            </div>
          </div>
          <div class="r-info">
            <img src="../../assets/icons/icon3-3.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="table-information">
      <div class="table-header">
        <el-select
            v-model="customName"
            multiple
            filterable
            reserve-keyword
            placeholder="客户名称查询">
          <el-option
              v-for="item in custormOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="area" clearable placeholder="所在辖区">
          <el-option
              v-for="item in areaOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="industryValue" clearable placeholder="所属行业">
          <el-option
              v-for="item in industryOptions"
              :key="item.id"
              :label="item.name"
              :value="item.name">
          </el-option>
        </el-select>
        <el-select v-model="statusValue" clearable placeholder="签约状态">
          <el-option
              v-for="item in statusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="scale" clearable placeholder="产值规模">
          <el-option
              v-for="item in scaleOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="source" clearable placeholder="客户来源">
          <el-option
              v-for="item in sourceOptions"
              :key="item.id"
              :label="item.name"
              :value="item.name">
          </el-option>
        </el-select>
        <div class="filter" @click="getTableList">点击筛选</div>
        <div class="new" @click="newProfile">新建</div>
      </div>
      <div class="table-detail">
        <el-table
            :data="tableData"
            :cell-style="{textarea:'center'}"
            :default-sort = "{prop: 'scale', order: 'descending'}"
            :header-cell-style="{ background:'rgba(24, 49, 140, 0.2)',textarea:'center'}"
            style="width: 100%">
          <el-table-column label="id" prop="id" v-if="false"></el-table-column>
          <el-table-column
              prop="name"
              label="姓名">
          </el-table-column>
          <el-table-column
              prop="nickname"
              label="项目咨询师">
          </el-table-column>
          <el-table-column
              prop="area"
              label="所在辖区">
          </el-table-column>
          <el-table-column
              prop="communicate_result"
              label="合作状态">
            <template slot-scope="scope">
              <div :style="{color:(scope.row.communicate_result=='未签约'?'#B93B3B':'#469F48')}">{{ scope.row.communicate_result }}</div>
            </template>
          </el-table-column>
          <el-table-column
              prop="sales_revenue"
              sortable
              label="产值规模">
          </el-table-column>
          <el-table-column
              prop="create_at"
              label="建档日期">
          </el-table-column>
          <el-table-column
              prop="source"
              label="客户来源">
          </el-table-column>
          <el-table-column
              fixed="right"
              label="操作"
              width="100">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="edit(scope.row.id)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[10,20,30]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {color} from "mockjs/src/mock/random/color";

export default {
  //import引入的组件需要注入到对象中才能使用",
  components: {},
  data() {
    //这里存放数据",
    return {
      currentIndex: 1,
      currentPage: 1,
      total:0,
      teamList: [
        {
          id: 1,
          title: "直管组"
        }, {
          id: 2,
          title: "渠道组"
        }, {
          id: 3,
          title: "外拓组"
        }
      ],
      custormOptions: [
        {
          value: '1',
          label: '张宝华'
        }, {
          value: '2',
          label: '李天顺'
        }, {
          value: '3',
          label: '万福多'
        }, {
          value: '4',
          label: '林慢慢'
        }, {
          value: '5',
          label: '邓清清'
        }],
      custormValue: '',
      areaOptions: [
        {
          value: 1,
          label: '黄金糕'
        }, {
          value: 2,
          label: '双皮奶'
        }, {
          value: 3,
          label: '蚵仔煎'
        }, {
          value: 4,
          label: '龙须面'
        }, {
          value: 5,
          label: '北京烤鸭'
        }
      ],
      areaValue: "",
      industryOptions: [
        {id: 0, name: "技术和互联网行业"},
        {id: 1, name: "媒体和娱乐行业"},
        {id: 2, name: "金融和保险行业"},
        {id: 3, name: "私营企业"},
        {id: 4, name: "制造业"},
        {id: 5, name: "零售和电子商务行业"},
        {id: 6, name: "健康保健行业"},
        {id: 7, name: "教育行业"},
        {id: 8, name: "建筑和房地产行业"},
        {id: 9, name: "旅游和酒店行业"},
        {id: 10, name: "农业和农产品行业"}
      ],
      industryValue: "",
      statusOptions: [
        {
          value: 0,
          label: '已签约'
        }, {
          value: 1,
          label: '未签约'
        }
      ],
      statusValue: "",
      scaleOptions: [
        {
          value: 0,
          label: '5万以内'
        }, {
          value: 1,
          label: '5万以上'
        }
      ],
      scaleValue: "",
      sourceOptions: [
        {id: 0, name: "转介绍"},
        {id: 1, name: "公司介绍"},
      ],
      sourceValue: "",
      tableData: [],
      customName: "",
      area: "",
      source:"",
      scale:"",
      create_at:""
    };
  }
  ,
//监听属性 类似于data概念",
  computed: {}
  ,
//监控data中的数据变化",
  watch: {}
  ,
//方法集合",
  methods: {
    color,
    //点击tab时触发
    titleClick: function (index) {
      this.currentIndex = index;
    },
    //
    newProfile(){
      this.$router.push('/detail')
    },
    edit(id){
      this.$router.push({path: '/businesSsupport/detail', query: {id: id}})
    },
    getTableList() {
      this.$axios.get("profile/list", {
        page: this.currentPage,
        limit: 10,
        name: this.customName,
        area: this.area,
        industry: this.industryValue,
        source:this.source,
        create_at:this.create_at,
        communicate_result:this.statusValue
      }).then((res) => {
        if (res.code === 1) {
          this.tableData = res.data.list;
          this.total = res.data.total
        }
        if (res.code === 0) {
          this.$message.warning(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val
      this.getTableList()
    }
  }
  ,
//生命周期 - 创建之前",数据模型未加载,方法未加载,html模板未加载
  beforeCreate() {
  }
  ,

//生命周期 - 创建完成（可以访问当前this实例）",数据模型已加载，方法已加载,html模板已加载,html模板未渲染
  created() {
    this.getTableList();
  }
  ,
//生命周期 - 挂载之前",html模板未渲染
  beforeMount() {

  }
  ,

//生命周期 - 挂载完成（可以访问DOM元素）",html模板已渲染
  mounted() {

  }
  ,

//生命周期 - 更新之前",数据模型已更新,html模板未更新
  beforeUpdate() {

  }
  ,
//生命周期 - 更新之后",数据模型已更新,html模板已更新
  updated() {

  }
  ,
//生命周期 - 销毁之前",
  beforeDestroy() {

  }
  ,
  destroyed() {

  }
  ,
//生命周期 - 销毁完成",
//如果页面有keep-alive缓存功能，这个函数会触发",
  activated() {

  }
  ,
}

</script>

<style lang="scss">
@import "./bussinessCss/index.scss";

</style>
