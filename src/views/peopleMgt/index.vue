<template>
  <div class="index-container">
    <div class="team-type">
      <div class="people-management">
        <div class="l-information">
          <p class="left-title">
            员工管理
          </p>
          <p class="number">
            共<span>{{employeesNum.total}}</span>人
          </p>
        </div>
        <div class="r-information">
          <div class="boy-info">
            <img src="../../assets/icons/boy.png" alt="">
            <div class="progress-info">
              <p class="prog-title">男生_{{employeesNum.male}}人</p>
              <el-progress :percentage="employeesNum.male/employeesNum.total?(employeesNum.male/employeesNum.total).toFixed(1)*100:0"></el-progress>
            </div>
          </div>
          <div class="girl-info">
            <img src="../../assets/icons/girl.png" alt="">
            <div class="progress-info">
              <p class="prog-title">女生_{{employeesNum.female}}人</p>
              <el-progress color="#F77D7D" :percentage="employeesNum.female/employeesNum.total?(employeesNum.female/employeesNum.total).toFixed(1)*100:0"></el-progress>
            </div>
          </div>
        </div>
      </div>
      <div class="statics">
        <div class="statics-item">
          <div class="statics-num">
            <span>{{employeesNum.probation_period}}</span>人
          </div>
          <div class="statics-title">
            <p class="divide"></p>
            <p class="people">试用期人员</p>
          </div>
        </div>
        <div class="line"></div>
        <div class="statics-item">
          <div class="statics-num">
            <span style="color: #1ECDBE">{{employeesNum.regular}}</span>人
          </div>
          <div class="statics-title">
            <p class="divide1"></p>
            <p class="people">在职人员</p>
          </div>
        </div>
        <div class="line"></div>
        <div class="statics-item">
          <div class="statics-num">
            <span style="color: #F4AB46">{{employeesNum.dangtuan}}</span>人
          </div>
          <div class="statics-title">
            <p class="divide2"></p>
            <p class="people">党团人员</p>
          </div>
        </div>
        <div class="line"></div>
        <div class="statics-item">
          <div class="statics-num">
            <span style="color: #F77D7D">{{employeesNum.other}}</span>人
          </div>
          <div class="statics-title">
            <p class="divide3"></p>
            <p class="people">其他人员</p>
          </div>
        </div>
      </div>
    </div>
    <div class="table-information">
      <div class="table-header">
        <div class="filter-item">
          <div class="search">
            <span>姓名</span>
            <el-input
                placeholder="请输入查询姓名"
                v-model="nickname"
                clearable>
            </el-input>
          </div>
          <el-select  v-model="departmentValue" clearable placeholder="所在部门">
            <el-option
                v-for="item in departmentOptions"
                :key="item.id"
                :label="item.name"
                :value="item.id">
            </el-option>
          </el-select>
          <el-select v-model="statusValue" clearable placeholder="员工状态">
            <el-option
                v-for="item in statusOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
          <div class="filter" @click="getTableList">点击筛选</div>
        </div>
        <div class="operate-btn">
          <div class="delete-btn" @click="deL">删除</div>
          <div class="add" @click="addEmployee">添加员工</div>
        </div>
      </div>
      <div class="table-detail">
        <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            :cell-style="{textarea:'center'}"
            :header-cell-style="{ background:'rgba(24, 49, 140, 0.1)',textarea:'center'}"
            @selection-change="handleSelectionChange">
          <el-table-column
              type="selection"
              width="55">
          </el-table-column>
          <el-table-column label="id" prop="id" v-if="false">
          </el-table-column>
          <el-table-column
              prop="nickname"
              label="姓名">
          </el-table-column>
          <el-table-column
              prop="birthday"
              label="出生年月">
          </el-table-column>
          <el-table-column
              prop="school"
              label="毕业院校">
          </el-table-column>
          <el-table-column
              prop="education"
              label="学历">
          </el-table-column>
          <el-table-column
              prop="mobile"
              label="手机号">
          </el-table-column>
          <el-table-column
              prop="department_name"
              label="所属部门">
          </el-table-column>
          <el-table-column
              prop="post_name"
              label="职位">
          </el-table-column>
          <el-table-column
              prop="entry_time"
              label="入职时间">
          </el-table-column>
          <el-table-column
              prop="mployee_status"
              label="员工状态">
            <template slot-scope="scope">
              <div
                  :style="{color:(scope.row.mployee_status=='试用期'||scope.row.mployee_status=='实习期'?'#B93B3B':scope.row.mployee_status=='正式员工'?'#469F48':'#666666')}">
                {{ scope.row.mployee_status }}
              </div>
            </template>
          </el-table-column>
          <el-table-column
              fixed="right"
              label="操作"
              width="100">
            <template slot-scope="scope">
              <el-button style="color: #18318C"  type="text" size="small" @click="editEmployee(scope.row.id)">编辑</el-button>
              <el-button style="color: #18318C"  type="text" size="small" @click="goEmployeeDetail(scope.row.id)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>

        <div class="pagination">
          <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[10,20,30,40]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total=total>
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
import addEmployees from "@/views/peopleMgt/addEmployees.vue";

export default {
  //import引入的组件需要注入到对象中才能使用",
  components: {},
  data() {
    //这里存放数据",
    return {
      currentPage: 1,
      total: 0,
      multipleSelection: [],
      departmentOptions: [

      ],
      departmentValue: "",
      nickname: "",
      statusOptions: [
        {
          value: 0,
          label: '试用期'
        }, {
          value: 1,
          label: '实习期'
        }, {
          value: 2,
          label: '正式员工'
        }, {
          value: 3,
          label: '已离职'
        }
      ],
      statusValue: "",
      tableData: [],
      employeesNum: {},

    };
  }
  ,
//监听属性 类似于data概念",
  computed: {
    addEmployees() {
      return addEmployees
    }
  },
//监控data中的数据变化",
  watch: {},
//方法集合",
  methods: {
    // 获取顶部卡片信息
    getEmployees() {
      this.$axios.get('index/getStaffNumber').then(res => {
        if (res.code === 1) {
          this.employeesNum = res.data
        }
        if (res.code === 0) {
          this.$message.warning(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    getTableList() {
      this.$axios.post("index/staffList", {
        "page": this.currentPage,
        "limit": 10,
        "nickname": this.nickname,
        "department": this.departmentValue,
        "mployee_status": this.statusValue
      }).then((res) => {
        if (res.code === 1) {
          this.tableData = res.data.list;
          this.total = res.data.total
        }
        if (res.code === 0) {
          this.tableData=[]
          this.$message.warning(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    handleSelectionChange(val) {
      console.log(val)
      this.multipleSelection = val;
    },
    deL() {
      let ids = [];
      this.multipleSelection.forEach((item) => {
        console.log(item)
        ids.push(item.id)
      });
      this.$axios.post('index/deleteStaff', {
        user_id: ids.toString()
      }).then(res => {
        if (res.code === 1) {
          this.$message.success(res.msg)
          this.getTableList();//刷新列表
        }
        if (res.code === 0) {
          this.$message.warning(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    //点击tab时触发
    titleClick: function (index) {
      this.currentIndex = index;
    },
    // 添加员工
    addEmployee() {
      this.$router.push('/addEmployees')
    },
    // 编辑员工
    editEmployee(id) {
      this.$router.push({path: '/addEmployees', query: {id: id}})
    },
    // 查看员工详情
    goEmployeeDetail(id) {
      this.$router.push({path: '/HRmanage', query: {id: id}})
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val
      this.getTableList()
    },
    // 获取部门
    getDepartmentList() {
      this.$axios.get('index/getDepartmentList').then(res => {
        if (res.code === 1) {
          this.departmentOptions = res.data
        }
        if (res.code === 0) {
          this.$message.info(res.msg)
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
    this.getEmployees();
    this.getDepartmentList();

  }
  ,
//生命周期 - 挂载之前",html模板未渲染
  beforeMount() {

  }
  ,

//生命周期 - 挂载完成（可以访问DOM元素）",html模板已渲染
  mounted() {
    this.getTableList()
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
/deep/ .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #18318C !important;
  border-color: #18318C !important;
}
/deep/ .el-checkbox__inner::after {
  height: 10px;
  left: 5px;
  top: 0px;
  width: 6px;
}

@import "./peopleMgtCss/index.scss";

</style>
