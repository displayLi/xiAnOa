<template>
  <div class="index-container">
    <div class="team-type">
      <div class="team-box">
        <div class="team-info">
          <img src="../../assets/icons/icon13.png" alt="">
          <div class="num-info">
            <p class="number">12</p>
            <p class="info-title">待拟定合同</p>
          </div>
        </div>
        <div class="team-info">
          <img src="../../assets/icons/icon14.png" alt="">
          <div class="num-info">
            <p class="number">14</p>
            <p class="info-title">待签约合同</p>
          </div>
        </div>
        <div class="team-info">
          <img src="../../assets/icons/icon15.png" alt="">
          <div class="num-info">
            <p class="number">13</p>
            <p class="info-title">待付款合同</p>
          </div>
        </div>
        <div class="team-info">
          <img src="../../assets/icons/icon16.png" alt="">
          <div class="num-info">
            <p class="number">10</p>
            <p class="info-title">未结清合同</p>
          </div>
        </div>
        <div class="team-info">
          <img src="../../assets/icons/icon17.png" alt="">
          <div class="num-info">
            <p class="number">20</p>
            <p class="info-title">已结清合同</p>
          </div>
        </div>
        <div class="team-info">
          <img src="../../assets/icons/icon18.png" alt="">
          <div class="num-info">
            <p class="number">5620</p>
            <p class="info-title">已开票合同</p>
          </div>
        </div>
        <div class="team-info">
          <img src="../../assets/icons/icon12.png" alt="">
          <div class="num-info">
            <p class="number">32</p>
            <p class="info-title">已归档合同</p>
          </div>
        </div>
      </div>
    </div>
    <div class="table-information">
      <div class="table-header">
        <div class="table-left">
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
          <el-select v-model="areaValue" clearable placeholder="委托项目">
            <el-option
                v-for="item in areaOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="industryValue" clearable placeholder="项目咨询师">
            <el-option
                v-for="item in industryOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="statusValue" clearable placeholder="合同状态">
            <el-option
                v-for="item in statusOptions"
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
          <div class="filter" @click="getList()">点击筛选</div>
        </div>
        <div class="new">新建</div>
      </div>
      <div class="table-detail">
        <el-table
            :data="tableData"
            :cell-style="{textarea:'center'}"
            :header-cell-style="{ background:'rgba(24, 49, 140, 0.2)',textarea:'center'}"
            style="width: 100%">
          <el-table-column label="id" prop="id" v-if="false">
          </el-table-column>
          <el-table-column
              prop="name"
              label="客户名称">
          </el-table-column>
          <el-table-column
              prop="commission"
              label="委托项目">
          </el-table-column>
          <el-table-column
              prop="business"
              label="委托业务">
          </el-table-column>
          <el-table-column
              prop="consultant"
              label="项目咨询师">
          </el-table-column>
          <el-table-column
              prop="signing"
              label="签约主体">
          </el-table-column>
          <el-table-column
              prop="status"
              label="项目状态">
            <template slot-scope="scope">
              <div
                  :style="{color:(scope.row.status=='待拟定'?'#F4AB46':scope.row.status=='已结清'||scope.row.status=='已开票'||scope.row.status=='已归档'?'#469F48':'#DF4B3C')}">
                {{ scope.row.status }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
              prop="date"
              label="签约日期">
          </el-table-column>
          <el-table-column
              prop="source"
              label="客户来源">
          </el-table-column>
          <el-table-column
              prop="payType"
              label="付款方式">
          </el-table-column>
          <el-table-column
              fixed="right"
              label="操作"
              width="150">
            <template slot-scope="scope">
              <el-dropdown>
                <span class="el-dropdown-link" style="font-size: 14px;color: #18318C;" >
                  已付款
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>已结清</el-dropdown-item>
                  <el-dropdown-item>未结清</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-button style="font-size: 14px;color: #18318C;margin-left: 20px" type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[10, 20, 30, 40]"
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
          id: 0,
          name: '待拟定'
        }, {
          id: 1,
          name: '待签约'
        }, {
          id: 2,
          name: '待付款'
        }, {
          id: 3,
          name: '未结清'
        }, {
          id: 4,
          name: '已结清'
        }, {
          id: 5,
          name: '已开票'
        }, {
          id: 6,
          name: '已归档'
        }
      ],
      statusValue: "",

      sourceOptions: [
        {
          id: 0,
          name: '转介绍'
        }, {
          id: 1,
          name: '公司介绍'
        },
      ],
      sourceValue: "",
      tableData: [],
      total:0
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
    // 获取合同列表
    getList() {
      this.$axios.get('contract/getList',{
        page:this.currentPage,
        limit:10,
        customer_name:this.custormValue,
        status:this.statusValue,
        source:this.sourceValue,
      }).then(res => {
        if (res.code === 1) {
          this.tableData = res.data.list
          this.total = res.data.total
        }
        if (res.code === 0) {
          this.$message.info(res.msg)
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
      this.currentPage = val;
      this.getList()
    }
  }
  ,
//生命周期 - 创建之前",数据模型未加载,方法未加载,html模板未加载
  beforeCreate() {
  }
  ,

//生命周期 - 创建完成（可以访问当前this实例）",数据模型已加载，方法已加载,html模板已加载,html模板未渲染
  created() {
    this.getList();//合同列表
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
@import "./contractManageScss/index.scss";

</style>
