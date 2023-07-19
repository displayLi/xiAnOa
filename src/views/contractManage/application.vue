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
              <td class="input" :colspan="1" style="font-weight: normal">
                <span>公司名称：</span>
                <el-input
                    placeholder="请输入内容"
                    suffix-icon="el-icon-search"
                    v-model="tableInfo.companyName">
                </el-input>
              </td>
              <td class="border">
                成立时间：
                <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                </el-date-picker>
              </td>
              <td class="input" >
                <span>注册资金：</span>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </td>
              <td class="input">
                注册辖区：
                <el-input v-model="input" placeholder="请输入注册辖区"></el-input>
              </td>
            </tr>
            <tr>
              <td class="input">
                企业代码：
                <el-input v-model="input" placeholder="请输入注册辖区"></el-input>
              </td>
              <td class="input">
                <span>职工人数：</span>
                <el-input v-model="input" placeholder="请输入职工人数"></el-input>
              </td>
              <td class="input">
                <span>参保人数：</span>
                <el-input v-model="input" placeholder="请输入参保人数"></el-input>
              </td>
              <td class="input" style="border:none">
                <span>企业法人：</span>
                <el-input v-model="input" placeholder="请输入注册辖区"></el-input>
              </td>
            </tr>
            <tr>
              <td class="input" :colspan="2">
                <span>通讯地址：</span>
                <el-input v-model="input" placeholder="请输入通讯地址"></el-input>
              </td>
              <td class="input">
                <span>企业类型：</span>
                <el-input v-model="input" placeholder="请输入企业类型"></el-input>
              </td>
              <td class="input">
                <span>所属行业：</span>
                <el-input v-model="input" placeholder="请输入所属行业"></el-input>
              </td>
            </tr>
            <tr>
              <td class="input">
                <span>开户银行：</span>
                <el-input v-model="input" placeholder="请输入开户银行"></el-input>
              </td>
              <td class="input">
                <span>银行账号：</span>
                <el-input v-model="input" placeholder="请输入银行账号"></el-input>
              </td>
              <td class="input">
                <span>电话号码：</span>
                <el-input v-model="input" placeholder="请输入电话号码"></el-input>
              </td>
              <td class="input"  style="border:none">
                <span>纳税人资质：</span>
                <el-input v-model="input" placeholder="请输入纳税人资质"></el-input>
              </td>
            </tr>
            <tr>
              <td class="check" :colspan="2">
                <img style="display: inline-block;width: 1.125rem;height: 1.125rem;vertical-align:middle;"
                     src="../../assets/icons/tip.png" alt="">
                <span
                    style="vertical-align: middle;margin-left: 10px">企业注册、纳税、统计开户所在地均在同一辖区且经营风险</span>
                <el-radio-group v-model="radio">
                  <el-radio label="1">异常</el-radio>
                  <el-radio label="2">无异常</el-radio>
                </el-radio-group>
              </td>
              <td :colspan="2">主营产品/服务：咨询业务</td>
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
            <div class="add">推送</div>
            <div class="add">添加</div>
          </div>
        </div>
        <table class="table table-condensed table-bordered" border cellspacing="0px">
          <tbody>
          <template>
            <tr>
              <td class="input" >
                <span>甲方对接人：</span>
                <el-input v-model="input" placeholder="请输入对接人姓名"></el-input>
              </td>
              <td class="input" >
                <span>性别：</span>
                <el-input v-model="input" placeholder="请输入性别"></el-input>
              </td>
              <td class="input" >
                <span>职务：</span>
                <el-input v-model="input" placeholder="请输入职务"></el-input>
              </td>
              <td class="input">
                <span>联系方式：</span>
                <el-input v-model="input" placeholder="请输入联系方式"></el-input>
              </td>
            </tr>
            <tr>
              <td class="input" >
                <span>客户名称：</span>
                <el-input v-model="input" placeholder="请输入客户名称"></el-input>
              </td>
              <td class="input" >
                <span>委托项目：</span>
                <el-input v-model="input" placeholder="请输入委托项目"></el-input>
              </td>
              <td class="input" >
                <span>委托业务：</span>
                <el-input v-model="input" placeholder="请输入委托业务"></el-input>
              </td>
              <td class="input">
                <span>项目咨询师：</span>
                <el-input v-model="input" placeholder="请输入项目咨询师"></el-input>
              </td>
            </tr>
            <tr>
              <td class="input" >
                <span>签约主体：</span>
                <el-input v-model="input" placeholder="请输入签约主体"></el-input>
              </td>
              <td class="border" >
                合同类型：
                <el-select v-model="styleValue" clearable placeholder="">
                  <el-option
                      v-for="item in styleOptions"
                      :key="item.styleValue"
                      :label="item.label"
                      :value="item.styleValue">
                  </el-option>
                </el-select>
              </td>
              <td class="border" >
                <span>签约日期：</span>
                <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="选择日期">
                </el-date-picker>
              </td>
              <td class="input">
                <span>客户来源：</span>
                <el-input v-model="input" placeholder="请输入客户来源"></el-input>
              </td>
            </tr>
            <tr>
              <td class="border">
                付款方式：
                <el-select v-model="styleValue" clearable placeholder="">
                  <el-option
                      v-for="item in styleOptions"
                      :key="item.styleValue"
                      :label="item.label"
                      :value="item.styleValue">
                  </el-option>
                </el-select>
              </td>
              <td class="input" >
                <span>支付额度：</span>
                <el-input v-model="input" placeholder="请输入支付额度"></el-input>
              </td>
              <td class="border">
                开票类型：
                <el-select v-model="styleValue" clearable placeholder="">
                  <el-option
                      v-for="item in styleOptions"
                      :key="item.styleValue"
                      :label="item.label"
                      :value="item.styleValue">
                  </el-option>
                </el-select>
              </td>
              <td class="input">
                <span>启动申请：</span>
                <el-input v-model="input" placeholder="请输入启动申请"></el-input>
              </td>
            </tr>
            <tr>
              <td class="input" >
                <span>公示结果：</span>
                <el-input v-model="input" placeholder="请输入公示结果"></el-input>
              </td>
              <td class="input" >
                <span>项目结款：</span>
                <el-input v-model="input" placeholder="请输入项目结款"></el-input>
              </td>
              <td class="input" >
                <span>开户行：</span>
                <el-input v-model="input" placeholder="请输入开户行"></el-input>
              </td>
              <td class="input" style="border:none">
                <span>账户信息：</span>
                <el-input v-model="input" placeholder="请输入账户信息"></el-input>
              </td>
            </tr>
            <tr>
              <td class="input" :colspan="4">
                <span>备注说明：</span>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
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
export default {
  //import引入的组件需要注入到对象中才能使用",
  components: {

  },
  data() {
    //这里存放数据",
    return {
      tableInfo:{
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
      }
    };
  },
  //监听属性 类似于data概念",
  computed: {

  },
  //监控data中的数据变化",
  watch: {

  },
  //方法集合",
  methods: {

  },
  //生命周期 - 创建之前",数据模型未加载,方法未加载,html模板未加载
  beforeCreate() {
  },

  //生命周期 - 创建完成（可以访问当前this实例）",数据模型已加载，方法已加载,html模板已加载,html模板未渲染
  created() {

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

<style lang="scss" >
@import "contractManageScss/application";
</style>
