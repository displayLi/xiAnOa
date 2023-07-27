<template>
  <div class="application-container">
    <div class="base-info">
      <div class="table-header">
        <p class="l-header">
          <img src="../../assets/icons/icon4.png" alt="">
          <span>企业基础信息</span>
        </p>
        <p class="r-header">建档日期：2023-05-06</p>
      </div>
      <table class="table table-condensed table-bordered" cellspacing="0px">
        <tbody>
        <template>
          <tr>
            <td class="input" style="width: 25%; position: relative;">
              <span>公司名称：</span>
              <el-select v-model="tableInfo.id" @change="contractDetail(tableInfo.id)"
                  filterable
                  remote
                  reserve-keyword
                  placeholder="请输入关键词"
                  :remote-method="remoteMethod"
                  :loading="loading"
                  >
                <el-option
                    v-for="item in options"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
              </el-select>
              <img src="../../assets/icons/icon-search.png" alt="" style="position: absolute; top: 50%;transform: translateY(-50%);right: 15px;">
            </td>
            <td class="border" style="width: 25%;">
              成立时间：{{ tableInfo.establish_time }}
            </td>
            <td class="input">
              注册资金：{{ tableInfo.fund }}
            </td>
            <td class="input">
              注册辖区：{{ tableInfo.area }}
            </td>
          </tr>
          <tr>
            <td class="input">
              企业代码：{{ tableInfo.enterprise_code }}
            </td>
            <td class="input">
              职工人数：{{ tableInfo.workers_number }}
            </td>
            <td class="input">
              参保人数：{{ tableInfo.insured_number }}
            </td>
            <td class="input">
              企业法人：{{ tableInfo.legal_person }}
            </td>
          </tr>
          <tr>
            <td class="input" :colspan="2">
              通讯地址：{{ tableInfo.address }}
            </td>
            <td class="input">
              企业类型：{{ tableInfo.type }}
            </td>
            <td class="input">
              所属行业：{{ tableInfo.industry }}
            </td>
          </tr>
          <tr>
            <td class="input">
              开户银行：{{ tableInfo.bank }}
            </td>
            <td class="input">
              银行账号：{{ tableInfo.bank_card }}
            </td>
            <td class="input">
              电话号码：{{ tableInfo.phone }}
            </td>
            <td class="input">
              纳税人资质：{{ tableInfo.taxpayer_qualification }}
            </td>
          </tr>
          <tr>
            <td class="check" :colspan="2">
              <img style="display: inline-block;width: 1.125rem;height: 1.125rem;vertical-align:middle;"
                    src="../../assets/icons/tip.png" alt="">
                <span
                    style="vertical-align: middle;margin-left: 10px; font-size: 14px;">企业注册、纳税、统计开户所在地均在同一辖区且经营风险</span>
              <el-radio-group v-model="tableInfo.operating_risk">
                <el-radio :label="0">异常</el-radio>
                <el-radio :label="1">无异常</el-radio>
              </el-radio-group>
            </td>
            <td>主营产品/服务：{{ tableInfo.main_products }}</td>
            <td>客户来源：{{ tableInfo.source == '0' ? '转介绍' :tableInfo.source == '1'? '公司介绍':''}}</td>
          </tr>
        </template>
        </tbody>
      </table>
    </div>
    <div class="base-info">
      <div class="table-header">
        <p class="l-header">
          <img src="../../assets/icons/icon5.png" alt="">
          <span>合作事项</span>
        </p>
        <div class="r-header">
          <p>
            推送日期：2023-05-06
          </p>
          <div class="add" @click="add">推送</div>
        </div>
      </div>
      <table class="table table-condensed table-bordered" border cellspacing="0px" style="table-layout:fixed;">
        <tbody>
        <template>
          <tr >
            <td class="input" style="word-wrap:break-word;">
              <span>甲方对接人：</span>
              <el-input v-model="contractInfo.name" placeholder="请输入对接人姓名"></el-input>
            </td>
            <td class="border">
              <span>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</span>
              <el-select v-model="contractInfo.gender" clearable placeholder="请选择性别">
                <el-option
                    v-for="item in sexOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
              </el-select>
            </td>
            <td class="input">
              <span>职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务：</span>
              <el-input v-model="contractInfo.job" placeholder="请输入职务"></el-input>
            </td>
            <td class="input">
              <span>联系方式：</span>
              <el-input v-model="contractInfo.mobile" placeholder="请输入联系方式"></el-input>
            </td>
          </tr>
          <tr>
            <td class="input">
              <span>客 户 名 称：</span>
              <el-input v-model="contractInfo.customer_name" placeholder="请输入客户名称"></el-input>
            </td>
            <td class="input">
              <span>委托项目：</span>
              <el-input v-model="contractInfo.project" placeholder="请输入委托项目"></el-input>
            </td>
            <td class="input">
              <span>委托业务：</span>
              <el-input v-model="contractInfo.business" placeholder="请输入委托业务"></el-input>
            </td>
            <td class="input">
              <span>项目咨询师：</span>
              <el-input v-model="contractInfo.consultant" placeholder="请输入项目咨询师"></el-input>
            </td>
          </tr>
          <tr>
            <td class="input">
              <span>签 约 主 体：</span>
              <el-input v-model="contractInfo.main_body" placeholder="请输入签约主体"></el-input>
            </td>
            <td class="border">
              <span>合同类型：</span>
              <el-select v-model="contractInfo.type" clearable placeholder="">
                <el-option
                    v-for="item in contrType"
                    :key="item.id"
                    :label="item.name"
                    :value="item.name">
                </el-option>
              </el-select>
            </td>
            <td class="border">
              <span>签约日期：</span>
              <el-date-picker
                  v-model="contractInfo.sign_time"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  type="date"
                  placeholder="选择日期">
              </el-date-picker>
            </td>
            <td class="input">
              <span>客户来源：</span>
              <el-input v-model="contractInfo.source=='0'?'转介绍':'公司介绍'" placeholder="请输入客户来源"></el-input>
            </td>
          </tr>
          <tr>
            <td class="border">
              <span>付 款 方 式：</span>
              <el-select v-model="contractInfo.pay_method" clearable placeholder="">
                <el-option
                    v-for="item in payType"
                    :key="item.id"
                    :label="item.name"
                    :value="item.name">
                </el-option>
              </el-select>
            </td>
            <td class="input">
              <span>支付额度：</span>
              <el-input v-model="contractInfo.pay_amount" placeholder="请输入支付额度"></el-input>
            </td>
            <td class="border">
              <span>开票类型：</span>
              <el-select v-model="contractInfo.billing_type" clearable placeholder="">
                <el-option
                    v-for="item in ticketType"
                    :key="item.id"
                    :label="item.name"
                    :value="item.name">
                </el-option>
              </el-select>
            </td>
            <td class="input">
              <span>启动申请：</span>
              <el-input v-model="contractInfo.start" placeholder="请输入启动申请"></el-input>
            </td>
          </tr>
          <tr>
            <td class="input">
              <span>公 示 结 果：</span>
              <el-input v-model="contractInfo.result" placeholder="请输入公示结果"></el-input>
            </td>
            <td class="input">
              <span>项目结款：</span>
              <el-input v-model="contractInfo.amount" placeholder="请输入项目结款"></el-input>
            </td>
            <td class="input">
              <span>开户行：</span>
              <el-input v-model="contractInfo.bank" placeholder="请输入开户行"></el-input>
            </td>
            <td class="input">
              <span>账户信息：</span>
              <el-input v-model="contractInfo.bank_card" placeholder="请输入账户信息"></el-input>
            </td>
          </tr>
          <tr>
            <td class="input" :colspan="4">
              <span>备 注 说 明：</span>
              <el-input v-model="contractInfo.remark" placeholder="请输入内容"></el-input>
            </td>
          </tr>
        </template>
        </tbody>
      </table>
    </div>
    <div class="base-info">
      <div class="table-header">
        <p class="l-header">
          <img src="../../assets/icons/icon5.png" alt="">
          <span>合作事项</span>
        </p>
        <div class="r-header">
          <p>
            推送日期：2023-05-06
          </p>
          <div class="add" @click="add">推送</div>
        </div>
      </div>
      <table class="table table-condensed table-bordered" border cellspacing="0px">
        <tbody>
        <template>
          <tr >
            <td class="input">
              <span>甲方对接人：</span>
              <el-input v-model="contractInfo.name" placeholder="请输入对接人姓名"></el-input>
            </td>
            <td class="border">
              性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：
              <el-select v-model="contractInfo.gender" clearable placeholder="请选择性别">
                <el-option
                    v-for="item in sexOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
              </el-select>
            </td>
            <td class="input">
              <span>职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务：</span>
              <el-input v-model="contractInfo.job" placeholder="请输入职务"></el-input>
            </td>
          </tr>
          <tr>
            <td class="input">
              <span>联系方式：</span>
              <el-input v-model="contractInfo.mobile" placeholder="请输入联系方式"></el-input>
            </td>
            <td class="input">
              <span>客 户 名 称：</span>
              <el-input v-model="contractInfo.customer_name" placeholder="请输入客户名称"></el-input>
            </td>
            <td class="input">
              <span>委托项目：</span>
              <el-input v-model="contractInfo.project" placeholder="请输入委托项目"></el-input>
            </td>
          </tr>
          <tr>
            <td class="input">
              <span>委托业务：</span>
              <el-input v-model="contractInfo.business" placeholder="请输入委托业务"></el-input>
            </td>
            <td class="input">
              <span>项目咨询师：</span>
              <el-input v-model="contractInfo.consultant" placeholder="请输入项目咨询师"></el-input>
            </td>
            <td class="input">
              <span>签约主体：</span>
              <el-input v-model="contractInfo.main_body" placeholder="请输入签约主体"></el-input>
            </td>
          </tr>
          <tr>
            <td class="border">
              合同类型：
              <el-select v-model="contractInfo.type" clearable placeholder="请选择合同类型">
                <el-option
                    v-for="item in contrType"
                    :key="item.id"
                    :label="item.name"
                    :value="item.name">
                </el-option>
              </el-select>
            </td>
            <td class="border">
              <span>签 约 日 期：</span>
              <el-date-picker
                  v-model="contractInfo.sign_time"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  type="date"
                  placeholder="选择日期">
              </el-date-picker>
            </td>
            <td class="input">
              <span>客户来源：</span>
              <el-input v-model="contractInfo.source=='0'?'转介绍':'公司介绍'" placeholder="请输入客户来源"></el-input>
            </td>
          </tr>
          <tr>
            <td class="border">
              <span>付款方式：</span>
              <el-select v-model="contractInfo.pay_method" clearable placeholder="请选择付款方式" style="width: 58%">
                <el-option
                    v-for="item in payType"
                    :key="item.id"
                    :label="item.name"
                    :value="item.name">
                </el-option>
              </el-select>
            </td>
            <td class="input">
              <span>支 付 额 度：</span>
              <el-input v-model="contractInfo.pay_amount" placeholder="请输入支付额度"></el-input>
            </td>
            <td class="border">
              开票类型：
              <el-select v-model="contractInfo.billing_type" clearable placeholder="请选择开票类型">
                <el-option
                    v-for="item in ticketType"
                    :key="item.id"
                    :label="item.name"
                    :value="item.name">
                </el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td class="input">
              <span>启动申请：</span>
              <el-input v-model="contractInfo.start" placeholder="请输入启动申请"></el-input>
            </td>
            <td class="input">
              <span>公 示 结 果：</span>
              <el-input v-model="contractInfo.result" placeholder="请输入公示结果"></el-input>
            </td>
            <td class="input">
              <span>项目结款：</span>
              <el-input v-model="contractInfo.amount" placeholder="请输入项目结款"></el-input>
            </td>
          </tr>
          <tr>
            <td class="input">
              <span>开 户 行 ：</span>
              <el-input v-model="contractInfo.bank" placeholder="请输入开户行"></el-input>
            </td>
            <td class="input" :colspan="2">
              <span>账 户 信 息：</span>
              <el-input v-model="contractInfo.bank_card" placeholder="请输入账户信息"></el-input>
            </td>
          </tr>
          <tr>
            <td class="input" :colspan="4">
              <span>备注说明：</span>
              <el-input v-model="contractInfo.remark" placeholder="请输入内容"></el-input>
            </td>
          </tr>
        </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import tab from "../../store/tab";
import {id} from "mockjs/src/mock/random/misc";

export default {
  //import引入的组件需要注入到对象中才能使用",
  components: {},
  data() {
    //这里存放数据",
    return {
      options: [],
      tableInfo: {
        name: "",
        establish_time: "",
        fund: "",
        area: "",
        enterprise_code: "",
        workers_number: "",
        insured_number: "",
        legal_person: "",
        address: "",
        type: '',
        industry: "",
        bank: "",
        bank_card: "",
        phone: "",
        taxpayer_qualification: "",
        main_products: "",
        operating_risk: "",
        source: "",
        id: "",
      },
      contractInfo: {
        profile_id: "",
        name: "",
        gender: "",
        job: "",
        mobile: "",
        customer_name: "",
        project: "",
        business: "",
        main_body: "",
        type: "",
        sign_time: "",
        pay_method: "",
        pay_amount: "",
        billing_type: "",
        start: "",
        result: "",
        amount: "",
        bank: "",
        bank_card: "",
        remark: ""
      },
      //   付款方式
      payType: [
        {id: 0, name: "一次性支付"},
        {id: 1, name: "分期支付"},
        {id: 2, name: "其他方式"},
      ],
      //合同类型
      contrType: [
        {id: 0, name: "技术合同"},
        {id: 1, name: "委托合同"}
      ],
      //   开票类型
      ticketType: [
        {id: 0, name: "产品销售开票"},
        {id: 1, name: "服务费用开票"},
        {id: 2, name: "委托代理费用"},
      ],
      sexOptions: [
        {
          id: 0,
          name: '男'
        }, {
          id: 1,
          name: '女'
        }
      ],
      loading:false
    };
  },
  //监听属性 类似于data概念",
  computed: {
    tab() {
      return tab
    }

  },
  //监控data中的数据变化",
  watch: {},
  //方法集合",
  methods: {
    searchName(name) {
      this.$axios.get("profile/searchProfile", {
            name: name
          }
      ).then((res) => {
        if (res.code === 1) {
          this.options = res.data
        }
        if (res.code === 0) {
          this.options = []
          // this.$message.warning(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    // 推送
    add() {
      if (!this.tableInfo.id) {
        this.$message.warning('请先选择企业基本信息！')
        return
      } else {
        this.contractInfo.profile_id = this.tableInfo.id
      }
      if (!this.$route.query.id) {
        this.$axios.post("contract/creareContract", this.contractInfo
        ).then((res) => {
          if (res.code === 1) {
            this.$message.success(res.msg);
            setTimeout(() => {
              this.$router.push('/contractManage')
            }, 1000)
          }
          if (res.code === 0) {
            this.tableInfo = {}
            this.$message.warning(res.msg);
          }
        }).catch((error) => {
          console.log(error, "请求失败");
        });
      } else {
        this.contractInfo.id = this.$route.query.id
        delete this.contractInfo.profile
        this.$axios.put("contract/creareContract", this.contractInfo
        ).then((res) => {
          if (res.code === 1) {
            this.$message.success(res.msg);
            setTimeout(() => {
              this.$router.push('/contractManage')
            }, 1000)
          }
          if (res.code === 0) {
            this.tableInfo = {}
            this.$message.warning(res.msg);
          }
        }).catch((error) => {
          console.log(error, "请求失败");
        });
      }
    },
    //   详情
    contractDetail(id) {
      this.$axios.get("contract/getContractDetail", {
            id: this.$route.query.id ? this.$route.query.id : id
          }
      ).then((res) => {
        if (res.code === 1) {
          if(!id){
            this.contractInfo = res.data;
          }
          this.tableInfo = res.data.profile;

        }
        if (res.code === 0) {
          // this.$message.warning(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        console.log("222", query)
        this.searchName(query)
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
  },
  //生命周期 - 创建之前",数据模型未加载,方法未加载,html模板未加载
  beforeCreate() {
  },

  //生命周期 - 创建完成（可以访问当前this实例）",数据模型已加载，方法已加载,html模板已加载,html模板未渲染
  created() {
    if (this.$route.query.id) {
      this.contractDetail();
    }

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
/deep/ .el-radio__input.is-checked+.el-radio__label {
  color: #18318C !important;
}
/deep/ .el-radio__input.is-checked .el-radio__inner {
  border-color: #18318C;
  background: #18318C;
}
/deep/ .el-radio__inner {
  border: 1px solid #DCDFE6;
  border-radius: 2px;
  width: 18px;
  height: 18px;
  background-color: #FFF;
  cursor: pointer;
  box-sizing: border-box;
}
/deep/ .el-radio__input.is-checked .el-radio__inner::after {
  content: "";
  width: 10px;
  height: 5px;
  border: 1px solid white;
  border-top: transparent;
  border-right: transparent;
  text-align: center;
  font-weight: 500;
  display: block;
  position: absolute;
  top: 3px;
  left: 3px;
  vertical-align: middle;
  transform: rotate(-45deg);
  border-radius: 0px;
  background: none;
}

@import "contractManageScss/application";
</style>
