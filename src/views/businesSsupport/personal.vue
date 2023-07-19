<template>
  <div class="index-container">
    <div class="team-type">
      <!-- 分组tab -->
      <div class="tab-box">
        <div class="personal-info">
          <p><span>所属部门：</span>项目咨询部—A组</p>
          <p><span>姓名：</span>张悟心</p>
        </div>
        <div class="picker">
          <el-date-picker
              v-model="value1"
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
              <p class="info-title">渠道客户</p>
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
              <p class="info-title">终端客户</p>
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
            v-model="custormValue"
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
        <el-select v-model="areaValue" clearable placeholder="所在辖区">
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
              :key="item.value"
              :label="item.label"
              :value="item.value">
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
        <el-select v-model="scaleValue" clearable placeholder="产值规模">
          <el-option
              v-for="item in scaleOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="sourceValue" clearable placeholder="客户来源">
          <el-option
              v-for="item in sourceOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        <div class="filter">点击筛选</div>
        <div class="new">新建</div>
      </div>
      <div class="table-detail">
        <el-table
            :data="tableData"
            :cell-style="{textarea:'center'}"
            :header-cell-style="{ background:'rgba(24, 49, 140, 0.2)',textarea:'center'}"
            style="width: 100%">
          <el-table-column
              prop="name"
              label="姓名">
          </el-table-column>
          <el-table-column
              prop="consultant"
              label="项目咨询师">
          </el-table-column>
          <el-table-column
              prop="area"
              label="所在辖区">
          </el-table-column>
          <el-table-column
              prop="status"
              label="合作状态">
            <template slot-scope="scope">
              <div :style="{color:(scope.row.status=='未签约'?'#B93B3B':'#469F48')}">{{ scope.row.status }}</div>
            </template>
          </el-table-column>
          <el-table-column
              prop="scale"
              label="产值规模">
          </el-table-column>
          <el-table-column
              prop="date"
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
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
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
      currentPage:1,
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
      industryValue: "",
      statusOptions: [
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
      statusValue: "",
      scaleOptions: [
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
      scaleValue: "",
      sourceOptions: [
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
      sourceValue: "",
      tableData: [{
        name: '中行西安分行',
        consultant: "卓天赋",
        area: "雁塔区",
        status: "未签约",
        scale: "5万以内",
        date: '2016-05-02',
        source: "转介绍"
      }, {
        name: '中行西安分行',
        consultant: "卓天赋",
        area: "雁塔区",
        status: "已签约",
        scale: "5万以内",
        date: '2016-05-02',
        source: "转介绍"
      },
        {
          name: '中行西安分行',
          consultant: "卓天赋",
          area: "雁塔区",
          status: "已签约",
          scale: "5万以内",
          date: '2016-05-02',
          source: "转介绍"
        },
        {
          name: '中行西安分行',
          consultant: "卓天赋",
          area: "雁塔区",
          status: "未签约",
          scale: "5万以内",
          date: '2016-05-02',
          source: "转介绍"
        },
        {
          name: '中行西安分行',
          consultant: "卓天赋",
          area: "雁塔区",
          status: "已签约",
          scale: "5万以内",
          date: '2016-05-02',
          source: "转介绍"
        },
        {
          name: '中行西安分行',
          consultant: "卓天赋",
          area: "雁塔区",
          status: "未签约",
          scale: "5万以内",
          date: '2016-05-02',
          source: "转介绍"
        },
        {
          name: '中行西安分行',
          consultant: "卓天赋",
          area: "雁塔区",
          status: "未签约",
          scale: "5万以内",
          date: '2016-05-02',
          source: "转介绍"
        },
        {
          name: '中行西安分行',
          consultant: "卓天赋",
          area: "雁塔区",
          status: "未签约",
          scale: "5万以内",
          date: '2016-05-02',
          source: "转介绍"
        },
        {
          name: '中行西安分行',
          consultant: "卓天赋",
          area: "雁塔区",
          status: "未签约",
          scale: "5万以内",
          date: '2016-05-02',
          source: "转介绍"
        }]

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
    binConter(v){
      console.log("scope.row.status1",v)
      //状态(0:草稿，1:未评估，2：已评估,3-申诉失败;4-申诉成功；)
      switch (v) {
        case 0:
          return '已签约';
        case 1:
          return '未签约';
        default:
          return '未签约';
      }
    },
    //颜色
    binClass(v){
      console.log("scope.row.status",v)
      switch (v) {
        case '未签约':
          return 'tagblue1';
        case '已签约':
          return 'tagblue2';
        default:
          return '';
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
  ,
//生命周期 - 创建之前",数据模型未加载,方法未加载,html模板未加载
  beforeCreate() {
  }
  ,

//生命周期 - 创建完成（可以访问当前this实例）",数据模型已加载，方法已加载,html模板已加载,html模板未渲染
  created() {

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
@import "./bussinessCss/personal.scss";

</style>
