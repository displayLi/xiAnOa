<template>
  <div class="index-container">
    <div class="team-type">
      <div class="team-box">
        <div class="team-info">
          <img src="../../assets/icons/icon12.png" alt="">
          <div class="num-info">
            <p class="number">{{contractNumber.to_drafted}}</p>
            <p class="info-title">待拟定合同</p>
          </div>
        </div>
        <div class="team-info">
          <img src="../../assets/icons/icon13.png" alt="">
          <div class="num-info">
            <p class="number">{{contractNumber.to_signed}}</p>
            <p class="info-title">待签约合同</p>
          </div>
        </div>
        <div class="team-info">
          <img src="../../assets/icons/icon14.png" alt="">
          <div class="num-info">
            <p class="number">{{contractNumber.to_pay}}</p>
            <p class="info-title">待付款合同</p>
          </div>
        </div>
        <div class="team-info">
          <img src="../../assets/icons/icon15.png" alt="">
          <div class="num-info">
            <p class="number">{{contractNumber.unsettled}}</p>
            <p class="info-title">未结清合同</p>
          </div>
        </div>
        <div class="team-info">
          <img src="../../assets/icons/icon16.png" alt="">
          <div class="num-info">
            <p class="number">{{contractNumber.closed_account}}</p>
            <p class="info-title">已结清合同</p>
          </div>
        </div>
        <div class="team-info">
          <img src="../../assets/icons/icon17.png" alt="">
          <div class="num-info">
            <p class="number">{{contractNumber.invoiced_out}}</p>
            <p class="info-title">已开票合同</p>
          </div>
        </div>
        <div class="team-info">
          <img src="../../assets/icons/icon18.png" alt="">
          <div class="num-info">
            <p class="number">{{contractNumber.filed}}</p>
            <p class="info-title">已归档合同</p>
          </div>
        </div>
      </div>
    </div>
    <div class="table-information">
      <div class="table-header">
        <div class="table-left">
          <el-input
              style="width: 19%;margin-right: 30px;"
              placeholder="客户名称查询"
              suffix-icon="el-icon-search"
              v-model="custormValue"
              clearable>
          </el-input>
          <el-input
              style="width: 19%;margin-right: 30px;"
              placeholder="委托项目"
              v-model="projectName"
              clearable>
          </el-input>
          <el-select v-model="consultant"
             filterable
             clearable
             remote
             reserve-keyword
             placeholder="项目咨询师"
             :remote-method="remoteMethod"
             :loading="loading"
          >
            <el-option
                v-for="item in consultantOptions"
                :key="item.id"
                :label="item.nickname"
                :value="item.id">
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
                :key="item.id"
                :label="item.name"
                :value="item.id">
            </el-option>
          </el-select>
          <div class="filter" @click="getList()">点击筛选</div>
        </div>
        <div class="new" @click="newContract()">新建</div>
      </div>
      <div class="table-detail">
        <el-table
            :data="tableData"
            cell-style="{textarea:'center'}"
            :header-cell-style="{ background:'rgba(24, 49, 140, 0.1)',textarea:'center'}"
            style="width: 100%">
          <el-table-column label="id" prop="id" v-if="false">
          </el-table-column>
          <el-table-column
              prop="name"
              align="center"
              label="客户名称">
          </el-table-column>
          <el-table-column
              prop="project"
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
              prop="main_body"
              label="签约主体">
          </el-table-column>
          <el-table-column
              prop="status"
              label="项目状态">
            <template slot-scope="scope">
              <div
                  :style="{color:(scope.row.status=='0'||scope.row.status=='1'?'#F4AB46':scope.row.status=='4'||scope.row.status=='5'||scope.row.status=='6'?'#469F48':'#DF4B3C')}">
                {{ scope.row.status==0?'待拟定':scope.row.status==1?'待签约':scope.row.status ==2?'待付款':scope.row.status==3?'未结清':scope.row.status==4?'已结清':scope.row.status==5?'已开票':'已归档' }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
              prop="sign_time"
              label="签约日期">
          </el-table-column>
          <el-table-column
              prop="source"
              label="客户来源">
            <template slot-scope="scope">
              <div>
                 {{ scope.row.source==0?'转介绍':'公司介绍' }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
              prop="pay_method"
              label="付款方式">
          </el-table-column>
          <el-table-column
              fixed="right"
              label="操作"
              align="center"
              width="150">
            <template slot-scope="scope">
              <div @click="updateStatus(scope.row.id,scope.row.status)" style="font-size: 14px;color: #18318C;display: inline-block; cursor: pointer;" v-if="scope.row.status!=2">{{ scope.row.status==0?'已拟定':scope.row.status==1?'已签约':scope.row.status==3?'已结清':scope.row.status==4?'已开票':scope.row.status==5?'归档':''}}</div>
              <el-dropdown  v-if="scope.row.status==2">
                <span class="el-dropdown-link" style="font-size: 14px;color: #18318C;">
                  {{ scope.row.status ==2?'已付款':''}}
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="updateStatus(scope.row.id,scope.row.status)">已结清</el-dropdown-item>
                  <el-dropdown-item @click.native="updateStatus(scope.row.id,scope.row.status)">未结清</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-button style="font-size: 14px;color: #18318C;margin-left: 20px" type="text" size="small" @click="edit(scope.row.id)">编辑</el-button>
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
      consultantOptions: [],
      custormValue: '',
      statusOptions: [
        {
          value: 0,
          label: '待拟定'
        }, {
          value: 1,
          label: '待签约'
        },
        {
          value: 2,
          label: '待付款'
        }, {
          value: 3,
          label: '未结清'
        },
        {
          value: 4,
          label: '已结清'
        }, {
          value: 5,
          label: '已开票'
        },
        {
          value: 6,
          label: '已归档'
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
      total:0,
      projectName:"",
      consultant:"",
      loading:false,
      contractNumber:{},
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
        project:this.projectName,
        consultant:this.consultant
      }).then(res => {
        if (res.code === 1) {
          this.tableData = res.data.list
          this.total = res.data.total
        }
        if (res.code === 0) {
          this.tableData=[]
          this.$message.info(res.msg)
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    // 获取项目咨询师列表
    getUserList(name) {
      this.$axios.get("index/userList",{keywords:name}).then((res) => {
        if (res.code === 1) {
          this.consultantOptions = res.data;
        }
        if (res.code === 0) {
          this.tableData=[]
          this.$message.warning(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        console.log("222", query)
        this.getUserList(query)
        setTimeout(() => {
          this.loading = false;

          // this.options = this.options.filter(item => {
          //   return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          // });
        }, 200);
      } else {
        this.options = [];
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.getList()
    },
    newContract(){
      this.$router.push('/application')
    },
    edit(id){
      this.$router.push({path:'/application',query:{id:id}})
    },
    updateStatus(id,status){
      this.$axios.put('contract/creareContract',{
        id:id,
        status:parseInt(status+1)
      }).then(res => {
        if (res.code === 1) {
          this.$message.success(res.msg)
          this.getList();
        }
        if (res.code === 0) {
          this.$message.info(res.msg)
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    // 获取合同数量
    getContractNumber(){
      this.$axios.get('contract/getContractNumber').then(res => {
        if (res.code === 1) {
          this.contractNumber = res.data
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
  }
  ,
//生命周期 - 创建之前",数据模型未加载,方法未加载,html模板未加载
  beforeCreate() {
  }
  ,

//生命周期 - 创建完成（可以访问当前this实例）",数据模型已加载，方法已加载,html模板已加载,html模板未渲染
  created() {
    this.getList();//合同列表
    this.getContractNumber();//合同数量
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

<style lang="scss" scoped>
@import "./contractManageScss/index.scss";

</style>
