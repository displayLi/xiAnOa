<template>
  <div class="container">
    <div class="con_top">
      <div class="con_top_box">
        <div class="con_search">
          <div style="padding: 1rem">
            <el-input
              placeholder="客户名称查询"
              v-model="queryVo.customer_name"
              class="input-with-select"
              clearable
            >
              <el-button
                slot="append"
                icon="el-icon-search"
                @click="getProjectList"
              ></el-button>
            </el-input>
          </div>
          <!-- <div>
						<el-date-picker v-model="valueMouth" type="month" placeholder="选择月"></el-date-picker>
					</div> -->
        </div>
        <div class="top_name">
          <div style="margin-right: 1rem">
            <span class="labelImg1">
              <el-image
                style="width: 100%; height: 100%"
                :src="img1"
              ></el-image>
            </span>
            <span style="color: #18318c">所属部门：</span>
            <span>项目咨询部-A组</span>
          </div>
          <div>
            <span class="labelImg1 labelImg2">
              <el-image
                style="width: 100%; height: 100%"
                :src="img2"
              ></el-image>
            </span>
            <span style="color: #18318c">姓名：</span>
            <span>A组</span>
          </div>
        </div>
      </div>
      <div class="con_color">
        <div class="color color1">
          <div class="color_con">
            <div>项目咨询部</div>
            <div><span class="name_con">A</span>组</div>
          </div>
          <div></div>
          <div class="color_con">
            <div>月度实质签约</div>
            <div><span class="name_con">35</span>单</div>
          </div>
          <div class="shu"></div>
          <div class="color_con">
            <div>月度启动项目</div>
            <div><span class="name_con">45</span>个</div>
          </div>
          <div class="shu"></div>
          <div class="color_con">
            <div>月度未启动项目</div>
            <div><span class="name_con">6</span>个</div>
          </div>
        </div>
        <div class="color color2">
          <div class="color_con">
            <div>项目咨询部</div>
            <div><span class="name_con">A</span>组</div>
          </div>
          <div></div>
          <div class="color_con">
            <div>月度实质签约</div>
            <div><span class="name_con">35</span>单</div>
          </div>
          <div class="shu"></div>
          <div class="color_con">
            <div>月度启动项目</div>
            <div><span class="name_con">45</span>个</div>
          </div>
          <div class="shu"></div>
          <div class="color_con">
            <div>月度未启动项目</div>
            <div><span class="name_con">6</span>个</div>
          </div>
        </div>
        <div class="color color3">
          <div class="color_con">
            <div>项目咨询部</div>
            <div><span class="name_con">A</span>组</div>
          </div>
          <div></div>
          <div class="color_con">
            <div>月度实质签约</div>
            <div><span class="name_con">35</span>单</div>
          </div>
          <div class="shu"></div>
          <div class="color_con">
            <div>月度启动项目</div>
            <div><span class="name_con">45</span>个</div>
          </div>
          <div class="shu"></div>
          <div class="color_con">
            <div>月度未启动项目</div>
            <div><span class="name_con">6</span>个</div>
          </div>
        </div>
      </div>
    </div>
    <div class="table_wrap">
      <div class="table_select">
        <div class="selec_box">
          <div style="width: 95%">
            <el-select
              class="select"
              v-model="queryVo.consultant_id"
              placeholder="项目咨询师"
              clearable
            >
              <el-option
                v-for="item in userList"
                :key="item.id"
                :label="item.nickname"
                :value="item.id"
              >
              </el-option>
            </el-select>
            <el-select
              class="select"
              v-model="queryVo.authorized_person"
              placeholder="项目负责人"
              clearable
            >
              <el-option
                v-for="item in leadsList"
                :key="item.id"
                :label="item.nickname"
                :value="item.id"
              >
              </el-option>
            </el-select>
            <el-select
              class="select"
              v-model="queryVo.status"
              placeholder="项目状态"
              clearable
            >
              <el-option
                v-for="(item, index) in projectStatus"
                :key="index"
                :label="item.name"
                :value="index"
              >
              </el-option>
            </el-select>
            <el-date-picker
              style="width: 30%; margin-right: 1rem"
              v-model="queryVo.signing_time"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd HH:mm:ss"
            >
            </el-date-picker>
            <el-button class="btnSearch" @click="getProjectList"
              >点击筛选</el-button
            >
          </div>
          <div>
            <el-button class="addColor" @click="addData()" v-if="isAdmin"
              >新建</el-button
            >
          </div>
        </div>
        <div>
          <el-table
            :data="tableData"
            style="width: 100%"
            :cell-style="
              ({ row, column, rowIndex, columnIndex }) => {
                if ([null, undefined, ''].includes(row[column.property])) {
                  row[column.property] = '/';
                }
              }
            "
          >
            <el-table-column
              prop="customer_name"
              label="客户名称"
              min-width="80"
            ></el-table-column>
            <el-table-column
              prop="name"
              label="项目名称"
              min-width="100"
            ></el-table-column>
            <el-table-column
              prop="consultant_name"
              label="项目咨询师"
              min-width="100"
            ></el-table-column>
            <el-table-column
              prop="authorized_name"
              label="项目负责人"
              min-width="100"
            ></el-table-column>
            <el-table-column
              prop="signing_time"
              label="签约时间"
              min-width="100"
            ></el-table-column>
            <el-table-column
              prop="delivery_time"
              label="接入时间"
              min-width="100"
            ></el-table-column>
            <el-table-column prop="status" label="执行状态" min-width="100">
              <template slot-scope="scope">
                <span
                  :style="{
                    color: projectStatus[scope.row.status || 0]?.color,
                  }"
                  >{{ projectStatus[scope.row.status || 0]?.name }}</span
                >
              </template>
            </el-table-column>
            <el-table-column
              prop="address"
              label="操作"
              align="right"
              min-width="180"
            >
              <template slot-scope="scope">
                <div>
                  <!-- style="color: #abadb2" -->
                  <el-button
                    :style="
                      scope.row.status < 2
                        ? 'color: #abadb2; cursor:not-allowed;'
                        : 'color: #19318f'
                    "
                    type="text"
                    @click="scope.row.status >= 2 && handleClick(scope.row)"
                    size="small"
                    >详情</el-button
                  >
                  <el-button
                    v-if="isLeads == 1 && scope.row.status == 0"
                    style="color: #df4b3c"
                    type="text"
                    size="small"
                    @click="editRow(scope.row, 'push')"
                    >推送</el-button
                  >
                  <template v-if="scope.row.action && isLeads == 1">
                    <el-button
                      type="text"
                      size="small"
                      style="color: #f2a944"
                      @click="reCopy(scope.row)"
                      >驳回</el-button
                    >
                    <el-button
                      type="text"
                      size="small"
                      @click="editRow(scope.row, 'push')"
                      style="color: #df4b3c"
                      >接收</el-button
                    >
                  </template>
                  
                  <el-button
                    type="text"
                    size="small"
                    style="color: #df4b3c"
                    @click="editRow(scope.row, 'rePush')"
                    v-if="isAdmin == 1 && scope.row.authorized_person == null"
                    >重新推送</el-button
                  >
                  <el-button
                   v-if="isLeads == 1 && scope.row.check_status == 0"
                    type="text"
                    size="small"
                    style="color: #df4b3c"
                    @click="approved(scope.row)"
                    >确认审核</el-button
                  >
                </div>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            style="text-align: right"
            :current-page="pageInfo.page"
            :page-sizes="[10, 20, 30, 40]"
            :page-size.sync="pageInfo.limit"
            layout="total, sizes, prev, pager, next, jumper"
            :total="pageInfo.total"
          >
          </el-pagination>
        </div>

        <el-dialog
          title="项目建立"
          :visible.sync="dialogFormVisible"
          class="dialog"
          @close="resetForm('ruleForm')"
          :close-on-click-modal="false"
        >
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <div v-if="step == 1">
              <el-form-item
                label="业务类型"
                prop="business_type"
                style="width: 45%"
              >
                <el-select
                  v-model="ruleForm.business_type"
                  placeholder="请选择业务类型"
                  style="width: 100%"
                  :popper-append-to-body="false"
                  clearable
                >
                  <el-option label="自有业务" :value="0"></el-option>
                  <el-option label="外包业务" :value="1"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="项目类型" prop="type" style="width: 45%">
                <el-select
                  v-model="ruleForm.type"
                  placeholder="请选择项目类型"
                  style="width: 100%"
                  :popper-append-to-body="false"
                  clearable
                >
                  <el-option
                    :label="item.name"
                    :value="item.id"
                    v-for="item in projectTypeList"
                    :key="item.id"
                  />
                </el-select>
              </el-form-item>

              <el-form-item
                label="客户名称"
                prop="customer_name"
                style="width: 45%"
              >
                <el-input
                  v-model="ruleForm.customer_name"
                  placeholder="请输入客户名称"
                  clearable
                ></el-input>
              </el-form-item>

              <el-form-item label="项目名称" prop="name" style="width: 45%">
                <el-input
                  v-model="ruleForm.name"
                  placeholder="请输入项目名称"
                  clearable
                ></el-input>
              </el-form-item>

              <el-form-item
                label="项目授权人"
                prop="authorized_person"
                style="width: 45%"
              >
                <el-select
                  v-model="ruleForm.authorized_person"
                  placeholder="请选择项目授权人"
                  style="width: 100%"
                  :popper-append-to-body="false"
                  clearable
                >
                  <el-option
                    v-for="(item, index) in leadsList"
                    :key="index"
                    :label="item.nickname"
                    :value="item.id"
                    >{{ item.nickname }}</el-option
                  >
                </el-select>
              </el-form-item>

              <el-form-item
                prop="signing_time"
                label="签约时间"
                style="width: 45%"
              >
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.signing_time"
                  style="width: 100%"
                  clearable
                  value-format="yyyy-MM-dd"
                ></el-date-picker>
              </el-form-item>

              <el-form-item
                label="合同类型"
                prop="contract_type"
                style="width: 45%"
              >
                <el-select
                  v-model="ruleForm.contract_type"
                  placeholder="请选择合同类型"
                  style="width: 100%"
                  :popper-append-to-body="false"
                  clearable
                >
                  <el-option label="技术合同" value="技术合同"></el-option>
                  <el-option label="委托合同" value="委托合同"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item
                label="合同编号"
                prop="contract_number"
                style="width: 45%"
              >
                <el-input
                  v-model="ruleForm.contract_number"
                  placeholder="请输入合同编号"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="项目咨询师"
                prop="consultant_id"
                style="width: 45%"
              >
                <el-select
                  v-model="ruleForm.consultant_id"
                  placeholder="请选择项目咨询师"
                  style="width: 100%"
                  :popper-append-to-body="false"
                >
                  <el-option
                    v-for="(item, index) in userList"
                    :key="index"
                    :label="item.nickname"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>

              <el-form-item
                prop="business_time"
                label="委托时间"
                style="width: 45%"
                v-show="ruleForm.business_type == 1"
              >
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.business_time"
                  style="width: 100%"
                  value-format="yyyy-MM-dd"
                ></el-date-picker>
              </el-form-item>

              <el-form-item
                label="合作机构"
                prop="partners"
                style="width: 45%"
                v-show="ruleForm.business_type == 1"
              >
                <el-input
                  v-model="ruleForm.partners"
                  placeholder="请输入合作机构"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="委托业务"
                prop="business"
                style="width: 45%"
                v-show="ruleForm.business_type == 1"
              >
                <el-input
                  v-model="ruleForm.business"
                  placeholder="请输入委托业务"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="项目工程师"
                prop="engineer"
                style="width: 45%"
              >
                <el-select
                  v-model="ruleForm.engineer"
                  placeholder="请选择项目工程师"
                  style="width: 100%"
                  :popper-append-to-body="false"
                  clearable
                >
                  <el-option
                    v-for="(item, index) in userList"
                    :key="index"
                    :label="item.nickname"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item
                label="资料专员"
                prop="data_specialist"
                style="width: 45%"
              >
                <el-select
                  v-model="ruleForm.data_specialist"
                  placeholder="请选择资料专员"
                  style="width: 100%"
                  :popper-append-to-body="false"
                  clearable
                >
                  <el-option
                    v-for="(item, index) in userList"
                    :key="index"
                    :label="item.nickname"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>

              <el-form-item
                label="外包对接人"
                prop="outsource"
                style="width: 45%"
                v-show="ruleForm.business_type == 1"
              >
                <el-input
                  v-model="ruleForm.outsource"
                  placeholder="请输入外包对接人"
                ></el-input>
              </el-form-item>

              <el-form-item
                label="对接人电话"
                prop="outsource_phone"
                style="width: 45%"
                v-show="ruleForm.business_type == 1"
              >
                <el-input
                  v-model="ruleForm.outsource_phone"
                  placeholder="请输入对接人电话"
                ></el-input>
              </el-form-item>

              <el-form-item
                prop="delivery_time"
                label="交付时间"
                style="width: 45%"
              >
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.delivery_time"
                  style="width: 100%"
                  value-format="yyyy-MM-dd"
                ></el-date-picker>
              </el-form-item>

              <el-form-item
                prop="deadline"
                label="项目截止时间"
                style="width: 45%"
              >
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="ruleForm.deadline"
                  style="width: 100%"
                  value-format="yyyy-MM-dd"
                ></el-date-picker>
              </el-form-item>

              <el-form-item label="备注说明" prop="remark" style="width: 100%">
                <el-input
                  v-model="ruleForm.remark"
                  placeholder="请输入备注"
                ></el-input>
              </el-form-item>
            </div>

            <div v-if="step == 2">
              <div style="width: 100%; font-size: 22px; margin-bottom: 20px">
                负责人
              </div>
              <el-form-item
                :label="item.name"
                style="width: 45%"
                v-for="(item, index) in projectTypeList
                  .filter((el) => el.id == ruleForm.type)
                  .at(0)?.options"
                :key="index"
              >
                <el-select
                  v-model="item.val"
                  placeholder="请选择"
                  style="width: 100%"
                  :popper-append-to-body="false"
                >
                  <el-option
                    :label="t.nickname"
                    :value="t.id"
                    v-for="(t, k) in personList"
                    :key="k"
                  ></el-option>
                </el-select>
              </el-form-item>
            </div>

            <div
              style="text-align: right; width: 100%; margin-top: 1.25rem; justify-content: flex-end;"
              v-if="isAdmin == 1 && !ruleForm.id"
            >
              <el-button @click="resetForm('ruleForm')">取消</el-button>
              <el-button
                class="addPush"
                type="primary"
                @click="submitForm('ruleForm')"
                >确认并推送</el-button
              >
            </div>

            <div
              style="text-align: right; width: 100%; margin-top: 1.25rem; justify-content: flex-end;"
              v-else
            >
              <el-button @click="step = 1" v-if="step == 2">上一步</el-button>
              <el-button @click="resetForm('ruleForm')" v-if="step == 1"
                >取消</el-button
              >
              <el-button
                class="addPush"
                type="primary"
                @click="nextStep"
                v-if="ruleForm.business_type == 0 && step == 1"
                >下一步</el-button
              >
              <el-button
                class="addPush"
                type="primary"
                @click="submitForm('ruleForm')"
                v-if="
                  ruleForm.business_type == 1 ||
                  step == 2 ||
                  ruleForm.business_type == undefined
                "
                >确认并推送</el-button
              >
          </div>
          </el-form>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getProjectList,
  getProjectType,
  getLeads,
  userList,
  getProjectTypeDetail,
  createProject,
  getGroupStaff,
  updateProject,
  approved,
  rejectProject,
  rePush
} from "@/api/projectApi";
import { cloneDeep } from "lodash";
export default {
  data() {
    return {
      img1: require("../../assets/icons/label.png"),
      img2: require("../../assets/icons/name.png"),
      queryVo: {
        consultant_id: "",
        authorized_person: "",
        customer_name: "",
        signing_time: "",
        status: "",
      },
      step: 1,
      tableData: [],
      authList: [],
      leadsList: [],
      userList: [],
      personList: [],
      projectStatus: [
        { name: "待分配", color: "#ccc" },
        { name: "待接收", color: "#F4AB46" },
        { name: "未启动", color: "#F4AB46" },
        { name: "已启动", color: "#469F48" },
        { name: "已完成", color: "#469F48" },
        { name: "已驳回", color: "#DF4B3C" },
        { name: "项目异常", color: "#DF4B3C" },
      ],
      projectTypeList: [],
      pageInfo: {
        page: 1,
        limit: 10,
        total: 0,
      },
      dialogFormVisible: false,
      ruleForm: {},
      rules: {
        name: {
          required: true,
          message: "请输入活动名称",
          trigger: "blur",
        },
        customer_name: {
          required: true,
          message: "请输入客户名称",
          trigger: "blur",
        },
        business_type: {
          required: true,
          message: "请选择业务类型",
          trigger: "change",
        },
        type: {
          required: true,
          message: "请选择项目类型",
          trigger: "change",
        },
        authorized_person: {
          required: true,
          message: "请选择项目授权人",
          trigger: "change",
        },
        signing_time: {
          required: true,
          message: "请选择签约时间",
          trigger: "change",
        },
      },
      isAdmin:
        (localStorage.userinfo &&
          JSON.parse(localStorage.userinfo)?.is_admin) ||
        0,
      isLeads: (localStorage.userinfo &&
        JSON.parse(localStorage.userinfo)?.is_admin) ||
      0,
    };
  },
  methods: {
    handleSizeChange(val) {
      this.pageInfo.limit = val;
      this.getProjectList();
    },
    handleCurrentChange(val) {
      this.pageInfo.page = val;
      this.getProjectList();
    },
    //点击跳转详情
    handleClick(row) {
      this.$router.push({
        path: "/detailPro",
        query: {
          id: row.id,
        },
      });
    },
    addData(row, num) {
      this.dialogFormVisible = true;
      this.ruleForm = {};
      this.$nextTick(() => {
        this.$refs['ruleForm'].clearValidate()
      })
    },
    //点击跳转隐藏数据也
    btnSearch() {
      this.$router.push({
        path: "/projectManage1",
        query: {},
      });
    },
    editRow(row, flag) {
      this.dialogFormVisible = true;
      row.flag = flag;
      let [ curr ] = this.projectTypeList.filter(el => el.id == row.type)
      if(curr) {
        row.options && row.options.forEach(el => {
          curr && curr.options && curr.options.forEach(item => {
            if(el.name == item.name) {
                item.val = el.nickname
            }
          })
        })
      }
     
      this.ruleForm = cloneDeep(row);
    },
    //新建提交保存按钮
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {

          let res = null;
          if (this.isAdmin == 1 && !this.ruleForm.id) {
            res = await createProject(this.ruleForm);
          } else {

            if (
              this.ruleForm.business_type == 0 &&
              this.ruleForm.id
            ) {
              let [curr] = this.projectTypeList.filter(
                (el) => el.id == this.ruleForm.type
              );
              curr.options.forEach((el) => {
                if (!el.val) {
                  this.$message.error("请选择" + el.name);
                  throw new Error(`请选择${el.name}输入框`);
                }
              });

              this.ruleForm.options = curr.options.map((el) => ({
                user_id: el.val,
                name: el.name,
              }));
            } else {
              this.ruleForm.options = []
            }

            if(this.ruleForm.flag == 'push') {
              res = await updateProject(this.ruleForm);
            } else if(this.ruleForm.flag == 'rePush') {
              res = await rePush({
                project_id: this.ruleForm.id,
                user_id: localStorage.userinfo && JSON.parse(localStorage.userinfo)?.id
              });
            }
          }

          let { code, data } = res;

          if (code == 1) {
            this.$message.success(!this.ruleForm.id ? "创建成功" : '操作成功');
            this.dialogFormVisible = false;
            this.getProjectList();
            this.getProjectTypeDetail();
            this.resetForm("ruleForm");
            this.ruleForm.options = [];
            this.step = 1;
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.dialogFormVisible = false;
      this.$refs[formName].resetFields();
      this.getProjectTypeDetail();
      this.step = 1;
    },
    nextStep() {
      if (["", undefined, null].includes(this.ruleForm.type)) {
        return this.$message.error("请选择项目类型后在进行下一步操作");
      }

      this.step = 2;
    },
    async getProjectList() {
      let { code, data } = await getProjectList({
        ...this.queryVo,
        ...this.pageInfo,
      });
      if (code == 1) {
        this.tableData = data.list || [];
        this.pageInfo.total = data.total || 0;
      }
    },
    async getProjectType() {
      let { code, data } = await getProjectType();
      if (code == 1) {
        this.authList = data;
      }
    },
    async getLeads() {
      let { code, data } = await getLeads();
      if (code == 1) {
        this.leadsList = data;
      }
    },
    async userLists() {
      let { code, data } = await userList();
      if (code == 1) {
        this.userList = data;
      }
    },
    async getProjectTypeDetail() {
      let { code, data } = await getProjectTypeDetail();
      if (code == 1) {
        data &&
          Array.isArray(data) &&
          data.forEach((el) => {
            if (typeof el.options == "string")
              el.options = JSON.parse(el.options);
          });
        this.projectTypeList = data;
      }
    },
    async getGroupStaff() {
      let { code, data } = await getGroupStaff();
      if (code == 1) {
        this.personList = data;
      }
    },
    getStatusObj(status) {
      return this.projectStatus[status];
    },
    approved(row) {
      this.$confirm("确认审核通过吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let { code, data } = await approved({
            project_id: row.id,
          });
          if (code == 1) {
            this.$message.success("审核成功");
            this.getProjectList();
          }
        })
        .catch(() => {});
    },
    reCopy(row) {
      this.$confirm("确认驳回吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let { code, data } = await rejectProject({
            project_id: row.id,
          });
          if (code == 1) {
            this.$message.success("驳回成功");
            this.getProjectList();
          }
        })
        .catch(() => {});
    },
  },
  mounted() {
    this.getProjectList();
    this.getProjectType();
    this.getLeads();
    this.userLists();
    this.getProjectTypeDetail();
    this.getGroupStaff();
  },
};
</script>

<style lang="scss" scoped>
.con_top {
  background-color: #fff;
  padding-bottom: 1.875rem;
  border-radius: 0.625rem;
  .con_top_box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.125rem;
    color: #666;
    .con_search {
      width: 50%;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .top_name {
      width: 50%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      padding-right: 1.875rem;
      .labelImg1 {
        width: 1.375rem;
        height: 1.125rem;
        display: inline-block;
        vertical-align: middle;
        margin-right: 6px;
      }
      .labelImg2 {
        width: 1.125rem;
      }
    }
  }
  .con_color {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 1rem;
    .color {
      width: 31%;
      height: 7.5rem;
      padding: 0 0.6rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .color_con {
        font-size: 0.875rem;
        color: #fff;
        .name_con {
          font-size: 1.875rem;
        }
      }
      .shu {
        width: 1px;
        height: 60px;
        background-color: rgba(255, 255, 255, 0.26);
      }
    }
    .color1 {
      background: url("../../assets/images/color1.png") no-repeat;
      background-size: 100% 100%;
    }
    .color2 {
      background: url("../../assets/images/color2.png") no-repeat;
      background-size: 100% 100%;
    }
    .color3 {
      background: url("../../assets/images/color3.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}

.table_wrap {
  background-color: #fff;
  margin-top: 1.25rem;
  border-radius: 0.625rem;
  padding: 0 1rem 1rem;
  .selec_box {
    padding-top: 1rem;
    display: flex;
    flex-direction: row;
    .select {
      margin-right: 1rem;
      width: 17%;
    }
    .btnSearch {
      background-color: #18318c;
      color: #fff;
    }
  }
  .addColor {
    background-color: #f4ab46;
    color: #fff;
  }
}
.dialog {
  & /deep/ .el-form > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  & /deep/ .el-dialog__header {
    border-bottom: 1px solid #ccc;
  }
  & /deep/ .el-dialog__title {
    font-size: 24px;
  }
  & /deep/ .el-form-item {
    margin-bottom: 0;
  }
  & /deep/ .el-form-item__label {
    float: initial;
    font-size: 1.125rem;
  }
  & /deep/ .el-form-item__content {
    margin-left: 0 !important;
  }
  & /deep/ .el-input__inner {
    background-color: #f4f5f5;
    font-size: 1.125rem;
    height: 3.375rem;
    line-height: 3.375rem;
  }
  & /deep/ .el-select-dropdown__item {
    font-size: 1.125rem !important;
  }
  & /deep/ .el-button--primary,
  & /deep/ .el-button--primary:hover {
    background-color: #18318c;
    color: #fff;
  }
}
</style>
