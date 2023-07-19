<!--添加员工-->
<template>
  <div class="addEmployees-container">
    <div class="table-box">
      <div class="base-info">
        <div class="table-header">
          <div class="l-header">
            <p style="display: flex;align-items: center">
              <img src="../../assets/icons/icon11.png" alt="">
              <span>个人信息</span>
            </p>
          </div>
          <div class="save" @click="saveInformation">保存</div>
        </div>
        <table class="table table-condensed table-bordered" border cellspacing="0px">
          <tbody>
          <template>
            <tr>
              <td class="input">
                <span>姓名：</span>
                <el-input v-model="personalInfo.nickname" placeholder="请输入姓名"></el-input>
              </td>
              <td class="border">
                性别：
                <el-select v-model="personalInfo.gender" clearable placeholder="请选择性别">
                  <el-option
                      v-for="item in genderOptions"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                  </el-option>
                </el-select>
              </td>
              <td class="input">
                <span>民  族：</span>
                <el-input v-model="personalInfo.nation" placeholder="请输入民族"></el-input>
              </td>
              <td class="border">
                出生年月：
                <el-date-picker
                    v-model="personalInfo.birthday"
                    type="date"
                    placeholder="选择日期"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd">
                </el-date-picker>
              </td>
            </tr>
            <tr>
              <td class="input">
                <span>手机号：</span>
                <el-input style="width: 67%" v-model="personalInfo.mobile" placeholder="请输入手机号"></el-input>
              </td>
              <td class="input">
                <span>电子邮箱：</span>
                <el-input style="width: 67%" v-model="personalInfo.email" placeholder="请输入电子邮箱"></el-input>
              </td>
              <td class="input">
                <span>证件号码：</span>
                <el-input style="width: 67%" v-model="personalInfo.id_card" placeholder="请输入证件号码"></el-input>
              </td>
              <td class="input">
                <span>籍贯：</span>
                <el-input style="width: 67%" v-model="personalInfo.native_place" placeholder="请输入籍贯"></el-input>
              </td>
            </tr>
            <tr>
              <td class="border">
                部门：
                <el-select v-model="personalInfo.department" clearable placeholder="请选择部门">
                  <el-option
                      v-for="item in departmentOptions"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                  </el-option>
                </el-select>
              </td>
              <td class="border">
                岗位：
                <el-select v-model="personalInfo.post" clearable placeholder="请选择岗位">
                  <el-option
                      v-for="item in postOptions"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                  </el-option>
                </el-select>
              </td>
              <td class="border">
                员工状态：
                <el-select v-model="personalInfo.mployee_status" clearable placeholder="请选择员工状态">
                  <el-option
                      v-for="item in statusOptions"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                  </el-option>
                </el-select>
              </td>
              <td class="border">
                入职状态：
                <el-select v-model="personalInfo.entry_status" clearable placeholder="请选择入职状态">
                  <el-option
                      v-for="item in onboardingOptions"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                  </el-option>
                </el-select>
              </td>
            </tr>
            <tr>
              <td class="border">
                健康状况：
                <el-select v-model="personalInfo.health_status" clearable placeholder="请选择健康状况">
                  <el-option
                      v-for="item in healthOptions"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                  </el-option>
                </el-select>
              </td>
              <td class="border">
                婚姻状况：
                <el-select v-model="personalInfo.marital_status" clearable placeholder="请选择婚姻状况">
                  <el-option
                      v-for="item in marryOptions"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                  </el-option>
                </el-select>
              </td>
              <td class="border">
                政治面貌：
                <el-select v-model="personalInfo.political_outlook" clearable placeholder="请选择政治面貌">
                  <el-option
                      v-for="item in politicsOptions"
                      :key="item.id"
                      :label="item.name"
                      :value="item.name">
                  </el-option>
                </el-select>
              </td>
              <td class="border">
                入职时间：
                <el-date-picker
                    v-model="personalInfo.entry_time"
                    type="date"
                    placeholder="选择日期"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd">
                </el-date-picker>
              </td>
            </tr>
            <tr>
              <td class="border">
                所属组别：
                <el-select v-model="personalInfo.group_id" clearable
                           placeholder="请选择所属组别">
                  <el-option
                      v-for="item in groupOptions"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                  </el-option>
                </el-select>
              </td>
              <td class="border">
                组内身份：
                <el-select v-model="personalInfo.is_leads" clearable placeholder="请选择组内身份">
                  <el-option
                      v-for="item in leadsOptions"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                  </el-option>
                </el-select>
              </td>
              <td class="input">
                <span>开户行：</span>
                <el-input v-model="personalInfo.bank" placeholder="请输入开户行"></el-input>
              </td>
              <td class="input">
                <span>银行卡：</span>
                <el-input v-model="personalInfo.bank_card" placeholder="请输入开户卡号"></el-input>
              </td>
            </tr>
            <tr>
              <td class="input" :colspan="2">
                现居住地：
                <el-input v-model="personalInfo.address" placeholder="请输入现居地"></el-input>
              </td>
              <td class="input" :colspan="2">
                <span>身份证地址：</span>
                <el-input v-model="personalInfo.id_card_address" placeholder="请输入身份证地址"></el-input>
              </td>
            </tr>
            <tr>
              <td class="border">
                最高学历：
                <el-select v-model="personalInfo.education" clearable placeholder="请选择最高学历">
                  <el-option
                      v-for="item in degreeOptions"
                      :key="item.id"
                      :label="item.name"
                      :value="item.name">
                  </el-option>
                </el-select>
              </td>
              <td class="input">
                毕业院校：
                <el-input v-model="personalInfo.school" placeholder="请输入毕业院校"></el-input>
              </td>
              <td class="input">
                所学专业：
                <el-input v-model="personalInfo.speciality" placeholder="请输入所学专业"></el-input>
              </td>
              <td class="input">
                <span>紧急联系人：</span>
                <el-input v-model="personalInfo.emergency_contact" placeholder="请输入紧急联系人"></el-input>
              </td>
            </tr>
            <tr>
              <td class="input">
                <span>联系人关系：</span>
                <el-input v-model="personalInfo.relationship" placeholder="请输入联系人关系"></el-input>
              </td>
              <td class="input">
                <span>联系人电话：</span>
                <el-input v-model="personalInfo.contact_phone" placeholder="请输入联系人电话"></el-input>
              </td>
            </tr>
          </template>
          </tbody>
        </table>
      </div>
      <div class="base-info">
        <div class="table-header">
          <div class="l-header">
            <p>
              <img src="../../assets/icons/icon10.png" alt="">
              <span>入职资料</span>
            </p>
            <span>(归档资料)</span>
          </div>
        </div>
        <table class="table table-condensed table-bordered" cellspacing="0px">
          <tbody>
          <template>
            <tr>
              <td class="check" style="font-weight: normal">
                <el-checkbox v-model="entry_infor.radio0">身份证复印件</el-checkbox>
              </td>
              <td class="check" style="font-weight: normal">
                <el-checkbox v-model="entry_infor.radio1">学历证明</el-checkbox>
              </td>
              <td class="check" style="font-weight: normal">
                <el-checkbox v-model="entry_infor.radio2">劳动合同</el-checkbox>
              </td>
              <td class="check" style="font-weight: normal">
                <el-checkbox v-model="entry_infor.radio3">保密协议</el-checkbox>
              </td>
            </tr>
            <tr>
              <td class="check" style="font-weight: normal">
                  <el-checkbox v-model="entry_infor.radio4">制度确认</el-checkbox>
              </td>
              <td class="check" style="font-weight: normal">
                <el-checkbox v-model="entry_infor.radio5">岗位说明书</el-checkbox>
              </td>
              <td class="check" style="font-weight: normal">
                <el-checkbox v-model="entry_infor.radio6">银行卡信息</el-checkbox>
              </td>
              <td class="check" style="font-weight: normal">
                <el-checkbox v-model="entry_infor.radio7">入职简历</el-checkbox>
              </td>
            </tr>
            <tr>
              <td class="check" style="font-weight: normal">
                <el-checkbox v-model="entry_infor.radio8">转正申请</el-checkbox>
              </td>
              <td class="check" style="font-weight: normal">
                <el-checkbox v-model="entry_infor.radio9">转岗手续</el-checkbox>
              </td>
              <td class="check" style="font-weight: normal">
                <el-checkbox v-model="entry_infor.radio10">平台使用承诺</el-checkbox>
              </td>
              <td class="check" style="font-weight: normal">
                <el-checkbox v-model="entry_infor.radio11">离职审批</el-checkbox>
              </td>
            </tr>
          </template>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  //import引入的组件需要注入到对象中才能使用",
  components: {},
  data() {
    //这里存放数据",
    return {
      personalInfo: {
        mobile: "",
        email: "",
        avatar: "",
        gender: "",
        birthday: "",
        id_card: "",
        id_card_address: "",
        nation: "",
        native_place: "",
        health_status: "",
        marital_status: "",
        political_outlook: "",
        address: "",
        bank: "",
        bank_card: "",
        education: "",
        school: "",
        speciality: "",
        emergency_contact: "",
        contact_phone: "",
        contract_number: "",
        post: "",
        department: "",
        relationship: "",
        mployee_status: "",
        entry_status: "",
        nickname: "",
        is_leads: "",
        group_id: "",
        entry_time: "",
        user_id:""
      },
      departmentOptions: [],
      postOptions: [],
      statusOptions: [
        {id: 0, name: "试用期"},
        {id: 1, name: "实习期"},
        {id: 2, name: "正式员工"},
        {id: 3, name: "已离职"},
      ],
      onboardingOptions: [
        {id: 0, name: "未入职"},
        {id: 1, name: "已入职"}
      ],
      healthOptions: [
        {id: 0, name: "健康"},
        {id: 1, name: "良好"},
        {id: 2, name: "一般"},
        {id: 3, name: "较差"},
        {id: 4, name: "残疾"},
      ],
      marryOptions: [
        {id: 0, name: "未婚"},
        {id: 1, name: "已婚"},
        {id: 2, name: "离异"}
      ],
      politicsOptions: [
        {id: 0, name: "群众"},
        {id: 1, name: "共青团员"},
        {id: 2, name: "中共党员"}
      ],
      groupOptions: [],
      leadsOptions: [
        {id: 0, name: "组员"},
        {id: 1, name: "组长"}
      ],
      degreeOptions: [
        {id: 0, name: "高中"},
        {id: 1, name: "大专"},
        {id: 2, name: "本科"},
        {id: 3, name: "硕士研究生"},
        {id: 4, name: "博士研究生"},
      ],
      genderOptions: [
        {id: 0, name: "男"},
        {id: 1, name: "女"}
      ],
      entry_infor: {
        radio0: false,
        radio1: false,
        radio2: false,
        radio3: false,
        radio4: false,
        radio5: false,
        radio6: false,
        radio7: false,
        radio8: false,
        radio9: false,
        radio10: false,
        radio11: false,
      },
      information: [],
      personalDetail: {},
    };
  },
  //监听属性 类似于data概念",
  computed: {},
  //监控data中的数据变化",
  watch: {},
  //方法集合",
  methods: {
    // 获取组
    getGroup() {
      this.$axios.get('index/getGroup').then(res => {
        if (res.code === 1) {
          this.groupOptions = res.data
        }
        if (res.code === 0) {
          this.$message.info(res.msg)
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
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
    // 获取职位
    getPostList() {
      this.$axios.get('index/getPostList').then(res => {
        if (res.code === 1) {
          this.postOptions = res.data

        }
        if (res.code === 0) {
          this.$message.info(res.msg)
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    // 保存
    saveInformation() {
      this.information=[]
      if (this.entry_infor) {
        for (let key in this.entry_infor) {
          //for循环let key是对象里面的键，再通过,[]的形式this.objNum[item]去获取对象的value值
          console.log('key', key);
          console.log('value', this.entry_infor[key]);
          if (this.entry_infor[key]) {
            let last = key.charAt(key.length - 1)
            this.information.push(last)
          }
        }
      }
      this.personalInfo.information = this.information.toString()
      if(!this.$route.query.id){
        this.$axios.post('index/createUser', this.personalInfo).then(res => {
          if (res.code === 1) {
            this.$message.success(res.msg)
          }
          setTimeout(() => {
            this.$router.push('/peopleMgt')
          }, 1000)
          if (res.code === 0) {
            this.$message.info(res.msg)
          }
        }).catch((error) => {
          console.log(error, "请求失败");
        });
      }else {
        this.personalInfo.user_id = this.$route.query.id
        console.log("this.personalInfo",this.personalInfo)
        this.$axios.put('index/modifyStaff', this.personalInfo).then(res => {
          if (res.code === 1) {
            this.$message.success(res.msg)
          }
          setTimeout(() => {
            this.$router.push('/peopleMgt')
          }, 1000)
          if (res.code === 0) {
            this.$message.info(res.msg)
          }
        }).catch((error) => {
          console.log(error, "请求失败");
        });
      }
    },
    // 查看详情
    getPersonalDetail() {
      // 判断是否有该员工的信息
      if (!this.$route.query.id) return;
      this.$axios.get('index/getStaffDetail', {
        user_id: this.$route.query.id
      }).then(res => {
        if (res.code === 1) {
          this.personalInfo = res.data
          this.information = res.data.information.split(',')
          this.information.forEach(item => {
            if(item){
              this.entry_infor["radio" + item] = true
            }

          })
        }
        if (res.code === 0) {
          this.$message.info(res.msg)
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },

  },
  //生命周期 - 创建之前",数据模型未加载,方法未加载,html模板未加载
  beforeCreate() {
  },

  //生命周期 - 创建完成（可以访问当前this实例）",数据模型已加载，方法已加载,html模板已加载,html模板未渲染
  created() {
    this.getGroup();//组别
    this.getDepartmentList()//部门
    this.getPostList();//岗位
    this.getPersonalDetail();//获取详情数据
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

<style lang="scss">
@import "peopleMgtCss/addEmployees.scss";
</style>
