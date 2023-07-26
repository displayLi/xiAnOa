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
            <p class="status">{{ personalInfo.mployee_status }}</p>
            <div class="time" v-if="entry_day.length>0">
              入职
              <span  v-for="(item,index) in entry_day" :key="index">{{ item }}</span>天
            </div>
            <div class="time" v-if="entry_day.length<=0">
              入职
              <span>0</span><span>0</span><span>0</span>天
            </div>
          </div>
        </div>
        <table class="table table-condensed table-bordered" cellspacing="0px">
          <tbody>
          <template>
            <tr>
              <td class="input">
                <span>民&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;族：</span>
                {{ personalInfo.nation }}
              </td>
              <td class="border">
                出生年月：{{ personalInfo.birthday }}
              </td>
              <td class="input">
                籍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;贯：{{ personalInfo.native_place }}
              </td>
            </tr>
            <tr>
              <td class="border">
                健 康 状 况：{{ personalInfo.health_status }}
              </td>
              <td class="border">
                婚姻状况：{{ personalInfo.marital_status }}
              </td>
              <td class="border">
                政治面貌：{{ personalInfo.political_outlook }}
              </td>
            </tr>
            <tr>
              <td class="border">
                所 属 组 别：{{ personalInfo.group_name }}
              </td>
              <td class="border">
                组内身份：{{ personalInfo.is_leads }}
              </td>
              <td class="desc" style="border:none"></td>
            </tr>
            <tr>
              <td class="input" :colspan="2">
                现 居 住 地：{{ personalInfo.address }}
              </td>
              <td class="input">
                开&nbsp;&nbsp;&nbsp;户&nbsp;&nbsp;&nbsp;行：{{ personalInfo.bank }}
              </td>
            </tr>
            <tr>
              <td class="input" :colspan="2">
                身份证地址：{{ personalInfo.id_card_address }}
              </td>
              <td class="input">
                银&nbsp;&nbsp;&nbsp;行&nbsp;&nbsp;&nbsp;卡：{{ personalInfo.bank_card }}
              </td>
            </tr>
            <tr>
              <td class="border">
                最 高 学 历：{{ personalInfo.education }}
              </td>
              <td class="border">
                毕 业 院 校：{{ personalInfo.school }}
              </td>
              <td class="border">
                所 学 专 业：{{ personalInfo.speciality }}
              </td>
            </tr>
            <tr>
              <td class="input">
                紧急联系人：{{ personalInfo.emergency_contact }}
              </td>
              <td class="input">
                联系人关系：{{ personalInfo.relationship }}
              </td>
              <td class="input">
                联系人电话：{{ personalInfo.contact_phone }}
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
          <img :src="'http://oa.s.sn.cn'+personalInfo.avatar" alt="">
        </p>
        <p class="name">
          <span>{{ personalInfo.nickname }}</span>
          <img v-if="personalInfo.gender === 0" src="../../assets/icons/boy.png" alt="">
          <img v-if="personalInfo.gender === 1" src="../../assets/icons/girl.png" alt="">
        </p>
        <p class="team">{{ personalInfo.department_name }}-{{ personalInfo.post_name }}</p>
      </div>
      <div class="btn-box">
        <div class="transfers">调岗调薪</div>
        <div class="change">人事异动</div>
      </div>
      <p class="lines"></p>
      <div class="connect-info">
        <p class="label-info">手机号</p>
        <p class="phone-num">{{ personalInfo.mobile }}</p>
      </div>
      <div class="connect-info">
        <p class="label-info">电子邮箱</p>
        <p class="phone-num">{{ personalInfo.email }}</p>
      </div>
      <div class="connect-info">
        <p class="label-info">证件号码</p>
        <p class="phone-num">{{ personalInfo.id_card }}</p>
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
        group_name: "",
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
        user_id: ""
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
      entry_day:[]
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
            if (item) {
              this.entry_infor["radio" + item] = true
            }
          })
          let date = this.share_data_time(this.personalInfo.entry_time).toString()
          console.log("date",this.personalInfo.entry_time)
          if(date){
            for(let i of date){
              this.entry_day.push(i)
              console.log("this.entry_day",this.entry_day)
            }
          }
        }
        if (res.code === 0) {
          this.$message.info(res.msg)
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    share_data_time(data) {
      if(!data||data==='0000-00-00'){
        return
      }
      //毕业时间
      let BirthDay = new Date(data);
      //获取当前时间
      let today = new Date();
      let timeold = (today.getTime() - BirthDay.getTime()); //总豪秒数
      let e_daysold = timeold / (24 * 60 * 60 * 1000);
      let daysold = Math.floor(e_daysold);                 //相差天数
      console.log(daysold)
      //将所获取的时间拼接到一起，再把值显示到页面
      return daysold
    }

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

<style lang="scss" scoped>::v-deep .el-checkbox__inner {
  display: inline-block;
  position: relative;
  border: 1px solid #DCDFE6;
  border-radius: 2px;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  background-color: #FFF;
  z-index: 1;
  transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
}
::v-deep .el-checkbox__inner::after {
  box-sizing: content-box;
  content: "";
  border: 1px solid #FFF;
  border-left: 0;
  border-top: 0;
  height: 9px;
  left: 4px;
  position: absolute;
  top: 1px;
  transform: rotate(45deg) scaleY(0);
  width: 6px;
  transition: transform .15s ease-in .05s;
  transform-origin: center;
}
::v-deep .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #18318C;
  border-color: #18318C;
}
::v-deep .el-checkbox__label {
  display: inline-block;
  padding-left: 10px;
  //line-height: 19px;
  font-size: 18px;
}
::v-deep .el-checkbox__input.is-checked+.el-checkbox__label {
  color: #18318C !important;

}

@import "./peopleMgtCss/baseInfo.scss";
</style>
