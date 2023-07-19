<!--员工信息-->
<template>
  <div class="baseInfo-container">
    <div class="table-box">
      <div class="base-info">
        <div class="table-header">
          <div class="l-header">
            <p style="display: flex;align-items: center">
              <img src="../../assets/icons/icon11.png" alt="">
              <span>个人信息</span>
            </p>
          </div>
          <div class="r-header">
            <p class="status">试用期</p>
            <p class="time">
              入职<span>0</span><span>1</span><span>9</span>天
            </p>
          </div>
        </div>
        <table class="table table-condensed table-bordered" cellspacing="0px">
          <tbody>
          <template>
            <tr>
              <td class="input">
                <span>民  族：</span>
                {{personalInfo.nation}}
              </td>
              <td class="border">
                出生年月：{{personalInfo.birthday}}
              </td>
              <td class="input">
                籍贯：{{personalInfo.native_place}}
              </td>
            </tr>
            <tr>
              <td class="border">
                健康状况：{{personalInfo.health_status}}
              </td>
              <td class="border">
                婚姻状况：{{personalInfo.marital_status}}
              </td>
              <td class="border">
                政治面貌：{{personalInfo.political_outlook}}
              </td>
            </tr>
            <tr>
              <td class="border">
                所属组别：{{personalInfo.group_name}}
              </td>
              <td class="border">
                组内身份：{{personalInfo.is_leads}}
              </td>
              <td class="desc" style="border:none"></td>
            </tr>
            <tr>
              <td class="input" :colspan="2">
                现居住地：{{personalInfo.address}}
              </td>
              <td class="input">
                开户行：{{personalInfo.bank}}
              </td>
            </tr>
            <tr>
              <td class="input" :colspan="2">
                身份证地址：{{personalInfo.id_card_address}}
              </td>
              <td class="input">
                银行卡：{{personalInfo.bank_card}}
              </td>
            </tr>
            <tr>
              <td class="border">
                最高学历：{{personalInfo.education}}
              </td>
              <td class="border">
                毕业院校：{{personalInfo.school}}
              </td>
              <td class="border">
                所学专业：{{personalInfo.speciality}}
              </td>
            </tr>
            <tr>
              <td class="input">
                紧急联系人：{{personalInfo.emergency_contact}}
              </td>
              <td class="input">
                联系人关系：{{personalInfo.relationship}}
              </td>
              <td class="input">
                联系人电话：{{personalInfo.contact_phone}}
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
    <div class="personal-card">
      <p class="bar"></p>
      <div class="header-info">
        <p class="avatar">
          <img :src="personalInfo.avatar" alt="">
        </p>
        <p class="name">
          <span>{{personalInfo.nickname}}</span>
          <img v-if="personalInfo.gender === 0" src="../../assets/icons/boy.png" alt="">
          <img v-else src="../../assets/icons/boy.png" alt="">
        </p>
        <p class="team">{{personalInfo.group_name}}-{{personalInfo.post_name}}</p>
      </div>
      <div class="btn-box">
        <div class="transfers">调岗调薪</div>
        <div class="change">人事异动</div>
      </div>
      <p class="lines"></p>
      <div class="connect-info">
        <p class="label-info">手机号</p>
        <p class="phone-num">{{personalInfo.mobile}}</p>
      </div>
      <div class="connect-info">
        <p class="label-info">电子邮箱</p>
        <p class="phone-num">{{personalInfo.email}}</p>
      </div>
      <div class="connect-info">
        <p class="label-info">证件号码</p>
        <p class="phone-num">{{personalInfo.id_card}}</p>
      </div>
      <div class="percent">
        <p class="file-percent">资料完整度</p>
        <el-progress :stroke-width=10 color="#18318C" :percentage="80"></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  name: "BaseInfo",
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
        group_name:"",
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
    };
  },
  //监听属性 类似于data概念",
  computed: {},
  //监控data中的数据变化",
  watch: {},
  //方法集合",
  methods: {
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
          console.log("entry=----->", this.entry_infor)
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
    this.getPersonalDetail()
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
@import "./peopleMgtCss/baseInfo.scss";
</style>
