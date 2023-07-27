<template>
  <div class="detail-container">
    <div class="base-info">
      <div class="table-header">
        <p class="l-header">
          <img src="../../assets/icons/icon4.png" alt="">
          <span>企业基础信息</span>
        </p>
        <div class="r-header">
          <p>建档日期：2023-05-06</p>
          <div class="save" @click="createProfile()">保存</div>
        </div>
      </div>
      <table class="table table-condensed table-bordered" cellspacing="0px">
        <tbody>
        <template>
          <tr>
            <td class="input">
              <span>公司名称：</span>
              <el-input
                  placeholder="请输入内容"
                  v-model="tableInfo.name">
              </el-input>
            </td>
            <td class="border">
              成立时间：
              <el-date-picker
                  v-model="tableInfo.establish_time"
                  type="date"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期">
              </el-date-picker>
            </td>
            <td class="input">
              <span>注册资金：</span>
              <el-input v-model="tableInfo.fund" placeholder="请输入内容"></el-input>
            </td>
            <td class="input tt">
              注册辖区：
              <el-cascader
                  style="font-size: 14px;"
                  size="large"
                  :options="options"
                  v-model="tableInfo.region"
                  placeholder="所在辖区"
                  @change="handleChange">
              </el-cascader>
            </td>
          </tr>
          <tr>
            <td class="input">
              企业代码：
              <el-input v-model="tableInfo.enterprise_code" placeholder="请输入注册辖区"></el-input>
            </td>
            <td class="input">
              <span>职工人数：</span>
              <el-input v-model="tableInfo.workers_number" placeholder="请输入职工人数"></el-input>
            </td>
            <td class="input">
              <span>参保人数：</span>
              <el-input v-model="tableInfo.insured_number" placeholder="请输入参保人数"></el-input>
            </td>
            <td class="input" style="border:none">
              <span>企业法人：</span>
              <el-input v-model="tableInfo.legal_person" placeholder="请输入注册辖区"></el-input>
            </td>
          </tr>
          <tr>
            <td class="input" :colspan="2">
              <span>通讯地址：</span>
              <el-input v-model="tableInfo.address" placeholder="请输入通讯地址"></el-input>
            </td>
            <td class="border">
              企业类型：
              <el-select v-model="tableInfo.type" clearable placeholder="请选择企业类型">
                <el-option
                    v-for="item in companyOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
              </el-select>
            </td>
            <td class="border">
              所属行业：
              <el-select v-model="tableInfo.industry" clearable placeholder="请选择所属行业">
                <el-option
                    v-for="item in industryOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.name">
                </el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td class="input">
              <span>开户银行：</span>
              <el-input v-model="tableInfo.bank" placeholder="请输入开户银行"></el-input>
            </td>
            <td class="input">
              <span>银行账号：</span>
              <el-input v-model="tableInfo.bank_card" placeholder="请输入银行账号"></el-input>
            </td>
            <td class="input">
              <span>电话号码：</span>
              <el-input v-model="tableInfo.phone" placeholder="请输入电话号码"></el-input>
            </td>
            <td class="input" style="border:none">
              <span>纳税人资质：</span>
              <el-input v-model="tableInfo.taxpayer_qualification" placeholder="请输入纳税人资质"></el-input>
            </td>
          </tr>
          <tr>
            <td class="input" style="border:none">
              <span>主营产品/服务：</span>
              <el-input style="width: 61%"  v-model="tableInfo.main_products" placeholder="请输入主营产品/服务"></el-input>
            </td>
            <td class="border">
              客户来源：
              <el-select v-model="tableInfo.source" clearable placeholder="请选择客户来源">
                <el-option
                    v-for="item in sourceOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
              </el-select>
            </td>
            <td class="border">
              客户归属：
              <el-select v-model="tableInfo.ownership" clearable placeholder="请选择客户归属">
                <el-option
                    v-for="item in ascriptionOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
              </el-select>
            </td>
            <td class="border">
              客户分级：
              <el-select v-model="tableInfo.level" clearable placeholder="请选择客户分级">
                <el-option
                    v-for="item in gradeOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td class="check" :colspan="4">
              <img style="display: inline-block;width: 1.125rem;height: 1.125rem;vertical-align:middle;"
                   src="../../assets/icons/tip.png" alt="">
              <span
                  style="vertical-align: middle;margin-left: 10px">企业注册、纳税、统计开户所在地均在同一辖区且经营风险</span>
              <el-radio-group v-model="tableInfo.operating_risk">
                <el-radio :label="0">异常</el-radio>
                <el-radio :label="1">无异常</el-radio>
              </el-radio-group>
            </td>
          </tr>
        </template>
        </tbody>
      </table>
    </div>
    <div class="base-info">
      <div class="table-header">
        <p class="l-header">
          <img src="../../assets/icons/icon6.png" alt="">
          <span>知识产权</span>
        </p>
        <div class="r-header">
          <div class="save" @click="createIntellectual()">保存</div>
        </div>
      </div>
      <table class="table table-condensed table-bordered" cellspacing="0px">
        <tbody>
        <template>
          <tr>
            <td>专利（数量）</td>
            <td class="input">
              <span>发 明 专 利：</span>
              <el-input v-model="intellectual.invention_patent" placeholder="请输入发明专利"></el-input>
            </td>
            <td class="input">
              <span>实用新型：</span>
              <el-input v-model="intellectual.utility_model" placeholder="请输入实用新型"></el-input>
            </td>
            <td class="input">
              <span>外观设计：</span>
              <el-input v-model="intellectual.appearance_design" placeholder="请输入外观设计"></el-input>
            </td>
          </tr>
          <tr>
            <td class="desc">版权（数量）</td>
            <td class="input">
              <span>软件著作权：</span>
              <el-input v-model="intellectual.copyrights" placeholder="请输入软件著作权"></el-input>
            </td>
            <td class="input">
              <span>美术作品：</span>
              <el-input v-model="intellectual.art_works" placeholder="请输入美术作品"></el-input>
            </td>
            <td class="input">
              <span>其它类别：</span>
              <el-input v-model="intellectual.other" placeholder="请输入其它类别"></el-input>
            </td>
          </tr>
          <tr>
            <td class="desc">商标（数量）</td>
            <td class="desc"></td>
            <td class="check" :colspan="2" style="border:none">
              <span style="vertical-align: middle;">研发团队</span>
              <el-radio-group v-model="intellectual.rd_team">
                <el-radio :label="0">自主研发</el-radio>
                <el-radio :label="1">委托研发</el-radio>
                <el-radio :label="2">联合研发</el-radio>
                <el-radio :label="3">无研发</el-radio>
              </el-radio-group>
            </td>
          </tr>
        </template>
        </tbody>
      </table>
    </div>
    <div class="base-info">
      <div class="table-header">
        <p class="l-header">
          <img src="../../assets/icons/icon7.png" alt="">
          <span>荣誉资质</span>
        </p>
        <div class="r-header">
          <div class="save" @click="createHonors()">保存</div>
        </div>
      </div>
      <table class="table table-condensed table-bordered" cellspacing="0px">
        <tbody>
        <template>
          <tr>
            <td class="check" style="font-weight: normal">
              <span style="vertical-align: middle;margin-right: 3px">科技型中小企业</span>
              <el-radio-group v-model="honors.smes">
                <el-radio :label="0">是</el-radio>
                <el-radio :label="1">否</el-radio>
              </el-radio-group>
            </td>
            <td class="check" style="font-weight: normal">
              <span style="vertical-align: middle;">创 新 型 中小企业</span>
              <el-radio-group v-model="honors.innovative">
                <el-radio :label="0">是</el-radio>
                <el-radio :label="1">否</el-radio>
              </el-radio-group>
            </td>
            <td class="check" style="font-weight: normal">
              <span style="vertical-align: middle;">瞪羚企业</span>
              <el-radio-group v-model="honors.gazelle">
                <el-radio :label="0">是</el-radio>
                <el-radio :label="1">否</el-radio>
              </el-radio-group>
            </td>
            <td class="check" style="font-weight: normal">
              <span style="vertical-align: middle;">企业技术中心</span>
              <el-radio-group v-model="honors.technology_center">
                <el-radio :label="0">是</el-radio>
                <el-radio :label="1">否</el-radio>
              </el-radio-group>
            </td>
          </tr>
          <tr>
            <td class="check" style="font-weight: normal">
              <span style="vertical-align: middle;">高 新 技 术 企业</span>
              <el-radio-group v-model="honors.hightech_enterprise">
                <el-radio :label="0">是</el-radio>
                <el-radio :label="1">否</el-radio>
              </el-radio-group>
            </td>
            <td class="check" style="font-weight: normal">
              <span style="vertical-align: middle;">专精特新中小企业</span>
              <el-radio-group v-model="honors.mastery">
                <el-radio :label="0">是</el-radio>
                <el-radio :label="1">否</el-radio>
              </el-radio-group>
            </td>
            <td class="check" style="font-weight: normal">
              <span style="vertical-align: middle;">规上企业</span>
              <el-radio-group v-model="honors.on_gauge">
                <el-radio :label="0">是</el-radio>
                <el-radio :label="1">否</el-radio>
              </el-radio-group>
            </td>
            <td class="check" style="font-weight: normal">
              <span style="vertical-align: middle;">新型研发机构</span>
              <el-radio-group v-model="honors.new_type">
                <el-radio :label="0">是</el-radio>
                <el-radio :label="1">否</el-radio>
              </el-radio-group>
            </td>
          </tr>
        </template>
        </tbody>
      </table>
    </div>
    <div class="base-info">
      <div class="table-header">
        <p class="l-header">
          <img src="../../assets/icons/icon9.png" alt="">
          <span>财务数据</span>
          <el-date-picker
              v-model="finance.year"
              format="yyyy 年"
              value-format="yyyy"
              type="year"
              placeholder="选择年">
          </el-date-picker>
        </p>
        <div class="r-header">
          <div class="save" @click="createFinance()">保存</div>
        </div>
      </div>
      <table class="table table-condensed table-bordered" cellspacing="0px">
        <tbody>
        <template>
          <tr>
            <td class="input">
              <span>资产总额（万元）：</span>
              <el-input v-model="finance.assets" placeholder="请输入"></el-input>
            </td>
            <td class="input">
              <span>固定资产原值（万元）：</span>
              <el-input style="width: 44%" v-model="finance.immobilisations" placeholder="请输入"></el-input>
            </td>
            <td class="input">
              <span>净资产（万元）：</span>
              <el-input v-model="finance.net_assets" placeholder="请输入"></el-input>
            </td>
            <td class="input">
              <span>负债率（%）：</span>
              <el-input v-model="finance.debt_ratio" placeholder="请输入"></el-input>
            </td>
          </tr>
          <tr>
            <td class="input">
              <span>销售收入（万元）：</span>
              <el-input v-model="finance.sales_revenue" placeholder="请输入"></el-input>
            </td>
            <td class="input">
              <span>净利润（万元）：</span>
              <el-input v-model="finance.net_profit" placeholder="请输入"></el-input>
            </td>
            <td class="input">
              <span>利润总额（万元）：</span>
              <el-input v-model="finance.total_profit" placeholder="请输入"></el-input>
            </td>
            <td class="input">
              <span>研发费用（万元）：</span>
              <el-input v-model="finance.rd_cost" placeholder="请输入"></el-input>
            </td>
          </tr>
          <tr>
            <td class="input">
              <span>所 得 税 （万元）：</span>
              <el-input v-model="finance.income_tax" placeholder="请输入"></el-input>
            </td>
            <td class="input">
              <span>增    值    税   （万元）：</span>
              <el-input v-model="finance.vat" placeholder="请输入"></el-input>
            </td>
            <td class="input">
              <span>完税总额（万元）：</span>
              <el-input v-model="finance.grossduty_paid" placeholder="请输入"></el-input>
            </td>
            <td class="input">
              <span>其它（万元）：</span>
              <el-input v-model="finance.other" placeholder="请输入"></el-input>
            </td>
          </tr>
        </template>
        </tbody>
      </table>
    </div>
    <div class="base-info" style="overflow: auto">
      <div class="table-header">
        <p class="l-header">
          <img src="../../assets/icons/icon8.png" alt="">
          <span>已实施项目</span>
        </p>
        <div class="r-header">
          <div class="save" @click="createImplemented()">保存</div>
          <div class="add" @click="addRow">添加</div>
        </div>
      </div>
      <table id="implemented" class="table table-condensed table-bordered" cellspacing="0px">
        <tbody>
        <template>
          <tr>
            <td>
              项目名称
            </td>
            <td>
              申报年度
            </td>
            <td :colspan="2">
              当前状态
            </td>
          </tr>
          <tr v-for="(item,index) in implemented" :key="index">
            <td class="input">
              <el-input v-model="item.name" placeholder="请输入项目名称"></el-input>
            </td>
            <td class="input">
              <el-input v-model="item.declaration_year" placeholder="请输入时间"></el-input>
            </td>
            <td class="check">
              <el-radio-group v-model="item.declaration">
                <el-radio :label="0">已申报</el-radio>
                <el-radio :label="1">已立项</el-radio>
              </el-radio-group>
            </td>
            <td class="check">
              <el-radio-group v-model="item.status">
                <el-radio :label="0">已验收</el-radio>
                <el-radio :label="1">未验收</el-radio>
              </el-radio-group>
            </td>
          </tr>
        </template>
        </tbody>
      </table>
    </div>
    <div class="base-info" style="overflow: auto;padding-bottom: 30px">
      <div class="table-header">
        <p class="l-header">
          <img src="../../assets/icons/icon5.png" alt="">
          <span>拜访记录</span>
        </p>
        <div class="r-header">
          <div class="save" @click="createVisitLog()">保存</div>
          <div class="add" @click="createNewVisitLog()">添加</div>
        </div>
      </div>
      <table class="table table-condensed table-bordered" id="ccc" cellspacing="0px" style=""
             v-for="(item,index) in visitLog" :key="index">
        <tbody>
        <template>
          <tr>
            <td class="input">
              <span>甲方对接人：</span>
              <el-input style="width: 68%;" v-model="item.name" placeholder="请输入甲方对接人"></el-input>
            </td>
            <td class="border">
              性别：
              <el-select v-model="item.gender" clearable placeholder="请选择性别">
                <el-option
                    v-for="item in sexOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
              </el-select>
            </td>
            <td class="input">
              <span>职务：</span>
              <el-input v-model="item.duties" placeholder="请输入"></el-input>
            </td>
            <td class="input">
              <span>联系方式：</span>
              <el-input v-model="item.mobile" placeholder="请输入联系方式"></el-input>
            </td>
          </tr>
          <tr>
            <td class="border">
              拜访日期：
              <el-date-picker
                  v-model="item.visit_time"
                  type="date"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期">
              </el-date-picker>
            </td>
            <td class="border">
              沟通方式：
              <el-select v-model="item.communicate_type" clearable placeholder="请选择沟通方式">
                <el-option
                    v-for="item in typeOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
              </el-select>
            </td>
            <td class="border">
              沟通意向：
              <el-select v-model="item.communicate_intention" clearable placeholder="请选择沟通意向">

                <el-option
                    v-for="item in intentionOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
              </el-select>
            </td>
            <td class="border">
              沟通结果：
              <el-select v-model="item.communicate_result" clearable placeholder="请选择沟通结果">
                <el-option
                    v-for="item in resultOptions"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td class="input" :colspan="4">
              <span>备注说明：</span>
              <el-input v-model="item.remark" placeholder="请输入备注说明"></el-input>
            </td>
          </tr>
        </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { regionData,CodeToText} from 'element-china-area-data'
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  //import引入的组件需要注入到对象中才能使用",
  components: {},
  data() {
    //这里存放数据",
    return {
      tableInfo: {
        name: "",
        establish_time: "",
        fund: "",
        area: "",//区
        region:"",//省市区
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
        ownership:"",
        level:""
      },
      // 知识产权
      intellectual: {
        invention_patent: "",
        utility_model: "",
        appearance_design: "",
        copyrights: "",
        art_works: "",
        other: "",
        rd_team: "",
        profile_id: "",
      },
      // 荣誉资质
      honors: {
        profile_id: "",
        smes: "",
        innovative: "",
        gazelle: "",
        technology_center: "",
        hightech_enterprise: "",
        mastery: "",
        on_gauge: "",
        new_type: "",
      },
      // 已实施项目
      implemented: [
        {
          profile_id: "",
          name: "",
          declaration_year: "",
          declaration: "",
          status: ""
        }
      ],
      // 财务数据
      finance: {
        assets: "",
        immobilisations: "",
        net_assets: "",
        debt_ratio: "",
        sales_revenue: "",
        net_profit: "",
        total_profit: "",
        rd_cost: "",
        income_tax: "",
        grossduty_paid: "",
        vat: "",
        other: "",
        profile_id: "",
        year: ""
      },
      companyOptions: [
        {id: 0, name: "合资企业"},
        {id: 1, name: "独资企业"},
        {id: 2, name: "国有企业"},
        {id: 3, name: "私营企业"},
        {id: 4, name: "全民所有制"},
        {id: 5, name: "集体所有制"},
        {id: 6, name: "股份制"},
        {id: 7, name: "有限责任"}
      ],
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
      sourceOptions: [
        {id: 0, name: "公司推介"},
        {id: 1, name: "个人推介"},
      ],
      ascriptionOptions:[
        {id: 0, name: "渠道客户"},
        {id: 1, name: "终端客户"},
      ],
      gradeOptions:[
        {id: 0, name: "A级"},
        {id: 1, name: "B级"},
        {id: 2, name: "C级"},
      ],
      // 拜访记录
      visitLog: [
        {
          name: "",
          gender: "",
          profile_id: "",
          duties: "",
          mobile: "",
          visit_time: "",
          communicate_type: "",
          communicate_intention: "",
          communicate_result: "",
          remark: ""
        }
      ],
      typeOptions: [
        {id: 0, name: "电话"},
        {id: 1, name: "面谈"}
      ],
      intentionOptions: [
        {id: 0, name: "强烈"},
        {id: 1, name: "一般"}
      ],
      resultOptions: [
        {id: 0, name: "未签约"},
        {id: 1, name: "已签约"}
      ],
      teamRadio: "1",
      styleOptions: [
        {
          styleValue: 1,
          label: "2023年度"
        },
        {
          styleValue: 2,
          label: "2021年度"
        }
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
      styleValue: "",
      profile_id: "",
      loading: false,
      options:regionData,
      selectedOptions:[],
    };
  },
  //监听属性 类似于data概念",
  computed: {},
  //监控data中的数据变化",
  watch: {},
  //方法集合",
  methods: {
    // 选择辖区触发
    handleChange (value) {
      if(value[2]!==""){
        this.tableInfo.area = CodeToText[value[2]]
      }
    },
    //   创建客户档案
    createProfile() {
      if (this.loading) {
        this.$message.warning('请不要重复提交！');
        return
      }
      if (this.$route.query.id) {
        this.tableInfo.profile_id = this.$route.query.id
        this.$axios.put("profile/update", this.tableInfo
        ).then((res) => {
          if (res.code === 1) {
            this.$message.success(res.msg)
          }
          if (res.code === 0) {
            this.$message.warning(res.msg);
          }
        }).catch((error) => {
          console.log(error, "请求失败");
        });
      } else {
        this.$axios.post("profile/create", this.tableInfo
        ).then((res) => {
          if (res.code === 1) {
            this.$message.success(res.msg)
            this.profile_id = res.data.info
          }
          if (res.code === 0) {
            this.$message.warning(res.msg);
          }
        }).catch((error) => {
          console.log(error, "请求失败");
        }).finally(() => {
          this.loading = true;
        });
      }
    },
    // 知识产权
    createIntellectual() {
      console.log("this.$route.query.id", this.$route.query.id)
      // 先判断是否存在profile_id
      if (!this.profile_id && !this.$route.query.id) {
        this.$message.warning('请先填写企业基本信息！')
        return
      } else if (this.profile_id) {

        this.intellectual.profile_id = this.profile_id
      } else if (this.$route.query.id) {
        this.intellectual.profile_id = this.$route.query.id
      }
      this.$axios.post("intellectual/createIntellectual", this.intellectual
      ).then((res) => {
        if (res.code === 1) {
          this.$message.success(res.msg)
        }
        if (res.code === 0) {
          this.$message.warning(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    // 新建荣誉资质
    createHonors() {
      console.log("this.$route.query.id", this.$route.query.id)
      if (!this.profile_id && !this.$route.query.id) {
        this.$message.warning('请先填写企业基本信息！')
        return
      } else if (this.profile_id) {
        this.honors.profile_id = this.profile_id
      } else if (this.$route.query.id) {
        this.honors.profile_id = this.$route.query.id
      }
      this.$axios.post("honor/createHonor", this.honors
      ).then((res) => {
        if (res.code === 1) {
          this.$message.success(res.msg)
        }
        if (res.code === 0) {
          this.$message.warning(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    // 新建财务数据
    createFinance() {
      if (!this.profile_id && !this.$route.query.id) {
        this.$message.warning('请先填写企业基本信息！')
        return
      } else if (this.profile_id) {
        this.finance.profile_id = this.profile_id
      } else if (this.$route.query.id) {
        this.finance.profile_id = this.$route.query.id
      }
      this.$axios.post("profile/createFinance", this.finance
      ).then((res) => {
        if (res.code === 1) {
          this.$message.success(res.msg)
        }
        if (res.code === 0) {
          this.$message.warning(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    // 创建已实施项目
    createImplemented() {
      let data = {}
      if (!this.profile_id && !this.$route.query.id) {
        this.$message.warning('请先填写企业基本信息！')
        return
      } else if (this.profile_id) {
        data = {
          profile_id: this.profile_id,
          implemented: this.implemented
        }
      } else if (this.$route.query.id) {
        data = {
          profile_id: this.$route.query.id,
          implemented: this.implemented
        }
      }
      this.$axios.post("profile/createLog", data
      ).then((res) => {
        if (res.code === 1) {
          this.$message.success(res.msg)
        }
        if (res.code === 0) {
          this.$message.warning(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    // 新增拜访记录
    createNewVisitLog() {
      this.visitLog.push({
        name: "",
        gender: "",
        profile_id: "",
        duties: "",
        mobile: "",
        visit_time: "",
        communicate_type: "",
        communicate_intention: "",
        communicate_result: "",
        remark: ""
      })
    },
    createVisitLog() {
      let dataVisit = {}
      if (!this.profile_id && !this.$route.query.id) {
        this.$message.warning('请先填写企业基本信息！')
        return
      } else if (this.profile_id) {
        dataVisit = {
          profile_id: this.profile_id,
          visitLog: this.visitLog
        }
      } else if (this.$route.query.id) {
        dataVisit = {
          profile_id: this.$route.query.id,
          visitLog: this.visitLog
        }
      }
      this.$axios.post("profile/createVisitLog", dataVisit
      ).then((res) => {
        if (res.code === 1) {
          this.$message.success(res.msg)
        }
        if (res.code === 0) {
          this.$message.warning(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    // 查看档案详情
    getProfile() {
      this.$axios.get("profile/detail", {
            id: this.$route.query.id
          }
      ).then((res) => {
        if (res.code === 1) {
          this.tableInfo = res.data
        }
        if (res.code === 0) {
          // this.$message.warning(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    // 获取财务数据详情
    getFinancy() {
      this.$axios.get("profile/getFinancrDetail", {
            profile_id: this.$route.query.id,
            year: this.finance.year
          }
      ).then((res) => {
        if (res.code === 1) {
          this.finance = res.data
        }
        if (res.code === 0) {
          // this.$message.warning(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    // 获取知识产权详情
    getIntellectual() {
      this.$axios.get("intellectual/getIntellectualDetail", {
            profile_id: this.$route.query.id
          }
      ).then((res) => {
        if (res.code === 1) {
          this.intellectual = res.data
        }
        if (res.code === 0) {
          // this.$message.warning(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    // 获取荣誉详情
    getHonors() {
      this.$axios.get("honor/getHonor", {
            profile_id: this.$route.query.id
          }
      ).then((res) => {
        if (res.code === 1) {
          this.honors = res.data
        }
        if (res.code === 0) {
          // this.$message.warning(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    // 获取已实施项目详情
    getImplemented() {
      this.$axios.get("profile/getLog", {
            profile_id: this.$route.query.id
          }
      ).then((res) => {
        if (res.code === 1) {
          this.implemented = res.data
        }
        if (res.code === 0) {
          // this.$message.warning(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    // 获取拜访记录详情
    getVisit() {
      this.$axios.get("profile/getVisitLog", {
            profile_id: this.$route.query.id
          }
      ).then((res) => {
        if (res.code === 1) {
          this.visitLog = res.data
        }
        if (res.code === 0) {
          // this.$message.warning(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    addRow() {
      this.implemented.push({
        profile_id: "",
        name: "",
        declaration_year: "",
        declaration: "",
        status: ""
      })
    }
  },
  //生命周期 - 创建之前",数据模型未加载,方法未加载,html模板未加载
  beforeCreate() {
  },

  //生命周期 - 创建完成（可以访问当前this实例）",数据模型已加载，方法已加载,html模板已加载,html模板未渲染
  created() {
    if (this.$route.query.id) {
      this.getProfile();
      this.getFinancy();
      this.getIntellectual();
      this.getHonors();
      this.getImplemented();
      this.getVisit();
    }
    let date = new Date();
    let year = date.getFullYear()+"";

    this.finance.year=year
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
/deep/ .el-radio-button__inner, .el-radio-group {
  margin-left: 10px !important;
}
/deep/ .el-radio__inner {
  border-radius: 2px !important;
  width: 18px !important;
  height: 18px !important;
}

/deep/ .el-radio__inner {
  border: 1px solid #DCDFE6;
  /* border-radius: 100%; */
  width: 18px;
  height: 18px;
  background-color: #FFF;
  cursor: pointer;
  box-sizing: border-box;
}

/deep/ .el-radio__input.is-checked .el-radio__inner {
  border-color: #18318C !important;
  background: #18318C !important;
}

/deep/ .el-radio__input.is-checked + .el-radio__label {
  color: #18318C !important;
}

/deep/ .el-radio__input.is-checked .el-radio__inner::after {
  content: "";
  width: 10px !important;
  height: 5px !important;
  border: 1px solid white;
  border-top: transparent;
  border-right: transparent;
  text-align: center;
  font-weight: 500;
  display: block;
  position: absolute;
  top: 3px !important;
  left: 3px !important;
  vertical-align: middle;
  transform: rotate(-45deg);
  border-radius: 0px;
  background: none;
}
@import "./bussinessCss/detail.scss";

.tt {
  /deep/ .el-cascader {
    .el-input {
      width: 100% !important;
    }
    // .el-input__inner {
    //  font-size: 16px !important;
    // }
  }
}
</style>
