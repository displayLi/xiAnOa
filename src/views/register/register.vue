<template>
  <div class="register-container">
    <div class="register-content">
      <div class="register-left-info">
        <div class="introduce">
          <img src="../../assets/icons/register-logo.png" alt="">
          <h2 class="title">持续创新 数字引领</h2>
          <p class="intr-text">
            独角兽“磐石”数字化综合管理系统，以客户服务为中心、海量数据为基础、人工智能为引领，根据企业架构搭建的多维度数据分析平台和智能协同办公系统。
          </p>
          <p class="intr-text-two">
            通过平台数字化、网络化、智能化，为企业运营管理的所有环节提供辅助支持。
          </p>
          <div class="rock">
            <p>THE ROCK</p>
            <div class="slider"></div>
          </div>
        </div>
      </div>
      <div class="register-right-form">
        <div class="login-content">
          <div class="system-name">
            <p class="bold-name">THE ROCK 管理系统</p>
            <p class="line"></p>
          </div>
          <div class="account-for-login" v-if="!setPass">
            <div class="login-style">
              <div class="type">
                <p @click="currentActive=true" :class="currentActive ? 'fontColor' : ''">验证码登录</p>
                <p class="split"></p>
                <p @click="currentActive=false" :class="!currentActive ? 'fontColor' : ''">密码登录</p>
              </div>
            </div>
            <!-- 账号密码登录 -->
            <div class="form-box" v-if="!currentActive">
              <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm1" label-width="100px"
                       class="demo-ruleForm">
                <el-form-item label="手机号" prop="phone">
                  <el-input v-model="ruleForm.phone" placeholder="请输入手机号" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                  <el-input :type="confirmNewSecretFlag ? 'text' : 'password'" v-model="ruleForm.pass"
                            placeholder="请输入密码"><i
                      slot="suffix"
                      :class=" confirmNewSecretFlag === false? 'iconfont icon-eys': 'el-icon-view'"
                      @click="changeIconState()"
                  ></i></el-input>
                </el-form-item>
              </el-form>
              <div class="remeber-pass">
                <el-checkbox v-model="ruleForm.checked">记住密码</el-checkbox>
              </div>
              <el-button @click="submitLoginForm(ruleForm)">立即登录</el-button>
              <div class="register">
                <span>暂无账号？</span>
                <p @click="currentActive=true">去注册</p>
              </div>
            </div>
            <!-- 验证码登录 -->
            <div class="captcha-login" v-if="currentActive">
              <el-form :model="captchaRuleForm" status-icon :rules="captchaRules" ref="captchaRuleForm1"
                       label-width="100px" class="form-horizontal">
                <el-form-item label="手机号" prop="phone">
                  <el-input v-model="captchaRuleForm.phone" placeholder="请输入手机号" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code">
                  <el-input v-model="captchaRuleForm.code" type="text" placeholder="请输入验证码" maxlength="20"
                            required/>
                  <p class="codeBtn" @click="sendCode">获取验证码</p>
                </el-form-item>
              </el-form>
              <el-button @click="submitForm(captchaRuleForm)">立即登录</el-button>
            </div>
          </div>
          <!--设置密码：首次验证码登陆后跳转设置密码面板-->
          <div class="set-pass" v-if="setPass">
            <div class="login-style">
              <div class="type">
                <p class="fontColor">设置密码</p>
              </div>
            </div>
            <!-- 设置密码 -->
            <div class="form-box">
              <el-form :model="setPassruleForm" status-icon :rules="setPassRules" ref="ruleForm" label-width="100px"
                       class="setPass-ruleForm">
                <el-form-item label="密码" prop="pass">
                  <el-input :type="confirmNewSecretFlag ? 'text' : 'password'" v-model="setPassruleForm.pass"
                            placeholder="请输入密码"><i
                      slot="suffix"
                      :class=" confirmNewSecretFlag === false? 'iconfont icon-eys': 'el-icon-view'"
                      @click="changeIconState()"
                  ></i></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="checkPass">
                  <el-input :type="confirmNewSecretFlag ? 'text' : 'password'" v-model="setPassruleForm.checkPass"
                            placeholder="请输入密码"><i
                      slot="suffix"
                      :class=" confirmNewSecretFlag === false? 'iconfont icon-eys': 'el-icon-view'"
                      @click="changeIconState()"
                  ></i></el-input>
                </el-form-item>
              </el-form>
              <div class="remeber-pass">
                <el-checkbox v-model="setPassruleForm.checked">记住密码</el-checkbox>
              </div>
              <el-button @click="setPasswords(setPassruleForm)">立即登录</el-button>
            </div>
          </div>
          <div class="support-devices">
            <div class="logo-list">
              <img src="../../assets/icons/wx.png" alt="微信">
              <img src="../../assets/icons/wx-mini.png" alt="微信小程序">
              <img src="../../assets/icons/pc.png" alt="电脑">
            </div>
            <p class="copyright">THE ROCK-2023-V3.0 版</p>
          </div>
        </div>
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
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码输入错误，请重新输入！'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatesetPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatesetPass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    //这里存放数据",
    return {
      confirmNewSecretFlag: false,//切换密码是否可见
      currentActive: true,//切换登录方式
      setPass: false,
      ruleForm: {
        phone: "",
        pass: '',
        checked: false
      },
      rules: {
        phone: [
          {required: true, message: "请输入正确的手机号！", trigger: "blur"},
          {
            pattern:
                /^(0|86|17951)?(13[0-9]|15[012356789]|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
            message: "手机号码格式不正确!",
            trigger: "blur",
          },
        ],
        pass: [
          {required: true, validator: validatePass, trigger: 'blur'}
        ],
      },
      captchaRuleForm: {
        phone: "",
        code: "",
      },
      captchaRules: {
        phone: [
          {required: true, message: "请输入正确的手机号！", trigger: "blur"},
          {
            pattern:
                /^(0|86|17951)?(13[0-9]|15[012356789]|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
            message: "手机号码格式不正确!",
            trigger: "blur",
          },
        ],
        code: [
          {required: true, message: "请输入验证码！", trigger: "blur"}
        ],
      },
      setPassruleForm: {
        pass: "",
        checkPass: "",
        checked: false
      },
      setPassRules: {
        pass: [
          {validator: validatesetPass, trigger: 'blur'}
        ],
        checkPass: [
          {validator: validatesetPass2, trigger: 'blur'}
        ],
      },
      mobile: ""
    };
  },
  //监听属性 类似于data概念",
  computed: {},
  //监控data中的数据变化",
  watch: {},
  //方法集合",
  methods: {
    // 显示密码图标/隐藏密码图标切换
    changeIconState() {
      this.confirmNewSecretFlag = !this.confirmNewSecretFlag;
    },
    // 获取验证码
    sendCode() {
      if (!this.captchaRuleForm.phone) {
        this.$message({
          message: "请先输入手机号！",
          type: "error",
        });
        return
      }
      this.$axios.post("sms/send", {mobile: this.captchaRuleForm.phone, event: "mobilelogin"}).then((res) => {
        console.log(res, "返回数据");
        if (res.code === 1) {
          this.$message({
            message: "获取成功",
            type: "success",
          });
          // window.location.href = "/";
        }
        if (res.code === 0) {
          this.$message.error(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    // 提交表单
    submitForm(formdata) {
      console.log("formName", formdata)
      if (!formdata.phone) {
        this.$message({
          message: "请先输入手机号！",
          type: "error",
        });
        return
      }
      if (!formdata.code) {
        this.$message({
          message: "请输入手机验证码！",
          type: "error",
        });
      }
      this.$axios.post("user/mobilelogin", {
        mobile: formdata.phone,
        captcha: formdata.code
      }).then((res) => {
        console.log(res, "返回数据");
        if (res.code === 1) {
          this.$message({
            message: "获取成功",
            type: "success",
          });
          localStorage.setItem("token", res.data.userinfo.token)
          localStorage.setItem("userinfo", JSON.stringify(res.data.userinfo))
          this.mobile = res.data.userinfo.mobile
          // 检查该用户是否需要设置密码
          this.$axios.get("index/checkPassword").then((res) => {
            console.log(res, "返回数据");
            if (res.code === 1) {
              this.$message({
                message: "获取成功",
                type: "success",
              });
            }
            // code为0需要设置密码
            if (res.code === 0) {
              localStorage.setItem("isSetPass", res.code)
              this.$message.warning(res.msg);
              this.setPass = !this.setPass
            }
          }).catch((error) => {
            console.log(error, "请求失败");
          });
        }
        if (res.code === 0) {
          this.$message.error(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    submitLoginForm(formdata) {
      if (!formdata.phone) {
        this.$message({
          message: "手机号未填写正确！",
          type: "error",
        });
        return
      }
      if (!formdata.pass) {
        this.$message({
          message: "请输入密码！",
          type: "error",
        });
      }
      this.$axios.post("user/login", {
        "account": formdata.phone,
        "password": formdata.pass
      }).then((res) => {
        if (res.code === 1) {
          this.$message({
            message: "获取成功",
            type: "success",
          });
          localStorage.setItem("token", res.data.userinfo.token)
          localStorage.setItem("userinfo", JSON.stringify(res.data.userinfo))
          this.$router.push('/main')
        }
        if (res.code === 0) {
          this.$message.error(res.msg);
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    setPasswords(formdata) {
      // if(){
      //
      // }
      this.$axios.post("user/resetpwd", {
        type: "mobile",
        mobile: this.mobile,
        newpassword: formdata.pass,
      }).then((res) => {
        console.log(res, "返回数据");
        if (res.code === 1) {
          this.$message({
            message: "获取成功",
            type: "success",
          });
          this.$router.push('/main')
        }
        // code为0需要设置密码
        if (res.code === 0) {
          this.$message.error(res.msg);
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
@import "register";

</style>
