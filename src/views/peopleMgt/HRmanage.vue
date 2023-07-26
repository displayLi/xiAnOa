<template>
  <div class="container">
    <div class="con_wrap">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="基本信息" name="first"></el-tab-pane>
        <el-tab-pane label="岗位职责" name="second"></el-tab-pane>
        <el-tab-pane label="工资明细" name="third"></el-tab-pane>
        <el-tab-pane label="价值贡献榜" name="fourth"></el-tab-pane>
      </el-tabs>
    </div>
    <div v-if="activeName=='first'" class="first_box">
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
                <span v-for="(item,index) in entry_day" :key="index">{{ item }}</span>天
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
    <div v-if="activeName=='second'" class="second_box">
      <div class="second_left">
        <div class="tipTop">
					<span class="labelImg">
						<el-image style="width: 100%;height: 100%;" :src="img1"></el-image>
					</span>
          <span style="color: #18318C;">岗位说明书</span>
        </div>
        <div class="content_bottom">
          <div class="top_content">
            <div class="content_left">
              <div class="odd">就职岗位：{{ postsDetail.name }}</div>
              <div class="even">上级领导：{{ postsDetail.superior_name }}</div>
              <div class="odd">入职时间：{{ postsDetail.entry_time }}</div>
            </div>
            <div class="content_right">
              <div class="odd">所属部门：{{ postsDetail.department_name }}</div>
              <div class="even">主管领导：{{ postsDetail.manager_name }}</div>
              <div class="odd">合同编号：编号</div>
            </div>
          </div>
          <div class="even">薪酬架构：{{ postsDetail.salary }}</div>
          <div class="odd">
            考核方向：{{ postsDetail.examine }}
          </div>
          <div class="even">岗位概述：本岗位人员主要负责公司人力资源相关工作，并配合主管领导统筹管理部门日常事务</div>
          <div class="odd ">附件资料：
            <a :href="'http://oa.s.sn.cn'+postsDetail.attachment" target="_blank">
              <el-image class="img2" :src="img2" ></el-image>
              <span class="img">查看详情</span>
            </a>
          </div>
        </div>
        <div class="tipTop" style="margin: 42px 0 22px 0;">
					<span class="labelImg">
						<el-image style="width: 100%;height: 100%;" :src="img1"></el-image>
					</span>
          <span style="color: #18318C;">员工手册</span>
        </div>
        <div class="bottom_box">
          <div :class="index<=1?'box_con':'box_con con_color'" v-for="(item,index) in postsDetail.file_info" :key="index">
            <div style="margin-right: 24px;">
              <el-image class="img3" :src="index<=1?img3:img4"></el-image>
            </div>
            <div class="box_right">
              <div>{{item.name}}</div>
              <a style="margin-top: 14px;display: inline-block;font-size:14px;color: #313848;cursor: pointer;text-decoration: none" :href="'http://oa.s.sn.cn'+item.url">查看附件<i class="el-icon-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="second_right">
        <div class="right-top"></div>
        <div class="img5_box">
          <el-image class="img5" :src="'http://oa.s.sn.cn'+personalInfo.avatar"></el-image>
          <div style="font-size: 24px;color: #313848;margin: 20px 0 10px 0;">{{ personalInfo.nickname }}</div>
          <div style="font-size: 18px;color: #666;">{{ personalInfo.department_name }}-{{ personalInfo.post_name }}</div>
        </div>
        <div class="btn_box">
          <div class="btn_style" @click="dialogFormVisible=!dialogFormVisible">设为榜样</div>
          <div class="btn_style" style="border: 1px solid #C5C5C5;color: #C5C5C5;">人事异动</div>
          <el-dialog title="设为榜样" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="表彰类型" :label-width="formLabelWidth">
                <el-select v-model="form.type" placeholder="请选择活动区域">
                  <el-option v-for="item in typeList"
                             :key="item.id"
                             :label="item.name"
                             :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="荣誉说明" :label-width="formLabelWidth">
                <el-input v-model="form.desc" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button style="background-color: #18318C;border: none" type="primary" @click="setExample">确 定</el-button>
            </div>
          </el-dialog>
        </div>
        <div class="last_box">
          <div class="last_message">
            <div>手机号码</div>
            <div style="color: #313848;font-size: 24px;">{{personalInfo.mobile}}</div>
          </div>
          <div class="last_message">
            <div>电子邮箱</div>
            <div style="color: #313848;font-size: 24px;">{{personalInfo.email}}</div>
          </div>
          <div class="last_message">
            <div>证件号码</div>
            <div style="color: #313848;font-size: 24px;">{{personalInfo.id_card}}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="activeName=='third'" class="second_box third_box">
      <div class="second_left">
        <div class="third_tip"><i class="el-icon-s-comment"></i>工资每月十号发放；工资最小单位为元，一元金额以内按四舍五入进行计算。</div>
        <div class="table_box">
          <div class="tip_btn">
            <div class="tipTop">
							<span class="labelImg">
								<el-image style="width: 100%;height: 100%;" :src="img1"></el-image>
							</span>
              <span style="color: #18318C;">工资明细</span>
            </div>
            <div class="tip_right">
              <div class="">
                <el-date-picker v-model="value2" type="month" placeholder="选择月"></el-date-picker>
              </div>
              <div class="clickSearch">点击筛选</div>
              <div class="save">保存</div>
            </div>
          </div>
          <div class="third_table">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="基本薪资" min-width="80" align="center">
                <template slot-scope="props">
                  <div><el-input v-model="input"></el-input></div>
                </template>
              </el-table-column>
              <el-table-column prop="date" label="应出勤/天" min-width="80" align="center">
                <template slot-scope="props">
                  <div><el-input v-model="input"></el-input></div>
                </template>
              </el-table-column>
              <el-table-column prop="date" label="实际出勤" min-width="80" align="center">
                <template slot-scope="props">
                  <div><el-input v-model="input" ></el-input></div>
                </template>
              </el-table-column>
              <el-table-column label="应发工资" align="center">
                <el-table-column prop="name" label="工资" min-width="80">
                  <template slot-scope="props">
                    <div><el-input v-model="input"></el-input></div>
                  </template>
                </el-table-column>
                <el-table-column prop="name" label="级别" min-width="80">
                  <template slot-scope="props">
                    <div><el-input v-model="input"></el-input></div>
                  </template>
                </el-table-column>
                <el-table-column prop="name" label="绩效" min-width="80">
                  <template slot-scope="props">
                    <div><el-input v-model="input"></el-input></div>
                  </template>
                </el-table-column>
                <el-table-column prop="name" label="提成" min-width="80">
                  <template slot-scope="props">
                    <div><el-input v-model="input"></el-input></div>
                  </template>
                </el-table-column>
                <el-table-column prop="name" label="补贴" min-width="80">
                  <template slot-scope="props">
                    <div><el-input v-model="input"></el-input></div>
                  </template>
                </el-table-column>
                <el-table-column prop="name" label="奖金" min-width="80">
                  <template slot-scope="props">
                    <div><el-input v-model="input"></el-input></div>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column label="应扣工资" align="center">
                <el-table-column prop="name" label="社保费用" min-width="80">
                  <template slot-scope="props">
                    <div><el-input v-model="input"></el-input></div>
                  </template>
                </el-table-column>
                <el-table-column prop="name" label="个人扣款" min-width="80">
                  <template slot-scope="props">
                    <div><el-input v-model="input"></el-input></div>
                  </template>
                </el-table-column>
              </el-table-column>
              <el-table-column prop="date" label="费用报销" min-width="80" align="center">
                <template slot-scope="props">
                  <div><el-input v-model="input"></el-input></div>
                </template>
              </el-table-column>
              <el-table-column prop="date" label="实发工资" min-width="80" align="center">
                <template slot-scope="props">
                  <div><el-input v-model="input"></el-input></div>
                </template>
              </el-table-column>
            </el-table>
            <div class="last_tr" style="padding: 0;"><span style="width: 100px;">备注信息:</span>
              <el-input v-model="input"></el-input>
            </div>
          </div>
        </div>
        <div class="table_box">
          <div class="tip_btn">
            <div class="tipTop">
							<span class="labelImg">
								<el-image style="width: 100%;height: 100%;" :src="img1"></el-image>
							</span>
              <span style="color: #18318C;">奖罚记录</span>
            </div>
            <div class="tip_right">
              <div class="">
                <el-date-picker v-model="value2" type="month" placeholder="选择月"></el-date-picker>
              </div>
              <div class="clickSearch">点击筛选</div>
              <div class="save" style="background-color: #F4AB46;">编辑</div>
            </div>
          </div>
          <div class="third_table">
            <div class="jiang_box">
              <div class="jiang_one">
                <div class="jiang_title" style="background-color: #F5F7FA;font-size: 18px;color: #313848;">奖罚事项</div>
                <div class="jiang_title">全勤</div>
                <div class="jiang_title" style="border-bottom: none;">迟到</div>
              </div>
              <div class="jiang_one">
                <div class="jiang_title" style="background-color: #F5F7FA;font-size: 18px;color: #313848;">金额</div>
                <div class="jiang_title"><el-input v-model="input"></el-input></div>
                <div class="jiang_title" style="border-bottom: none;"><el-input v-model="input"></el-input></div>
              </div>
              <div class="jiang_two">
                <div class="jiang_title" style="background-color: #F5F7FA;font-size: 18px;color: #313848;">备注说明</div>
                <div class="jiang_title"><el-input v-model="input"></el-input></div>
                <div class="jiang_title" style="border-bottom: none;"><el-input v-model="input"></el-input></div>
              </div>
            </div>
          </div>
        </div>
        <div class="table_box">
          <div class="tip_btn">
            <div class="tipTop">
							<span class="labelImg">
								<el-image style="width: 100%;height: 100%;" :src="img1"></el-image>
							</span>
              <span style="color: #18318C;">工资明细</span>
            </div>
            <div class="tip_right">
              <div class="">
                <el-date-picker v-model="value2" type="month" placeholder="选择月"></el-date-picker>
              </div>
              <div class="clickSearch">点击筛选</div>
              <div class="save">保存</div>
            </div>
          </div>
          <div class="third_table">
            <div class="jiang_box">
              <div class="jiang_one" style="width: 16%;">
                <div class="jiang_title" style="background-color: #F5F7FA;font-size: 18px;color: #313848;">考核时间</div>
                <div class="jiang_title"><el-input v-model="input"></el-input></div>
                <div class="jiang_title" style="border-bottom: none;"><el-input v-model="input"></el-input></div>
              </div>
              <div class="jiang_one" style="width: 16%;">
                <div class="jiang_title" style="background-color: #F5F7FA;font-size: 18px;color: #313848;">考核事项</div>
                <div class="jiang_title"><el-input v-model="input"></el-input></div>
                <div class="jiang_title" style="border-bottom: none;"><el-input v-model="input"></el-input></div>
              </div>
              <div class="jiang_two" style="width: 16%;">
                <div class="jiang_title" style="background-color: #F5F7FA;font-size: 18px;color: #313848;">考核方式</div>
                <div class="jiang_title"><el-input v-model="input"></el-input></div>
                <div class="jiang_title" style="border-bottom: none;"><el-input v-model="input"></el-input></div>
              </div>
              <div class="jiang_one" style="width: 16%;">
                <div class="jiang_title" style="background-color: #F5F7FA;font-size: 18px;color: #313848;">考核时间</div>
                <div class="jiang_title"><el-input v-model="input"></el-input></div>
                <div class="jiang_title" style="border-bottom: none;"><el-input v-model="input"></el-input></div>
              </div>
              <div class="jiang_one" style="width: 16%;">
                <div class="jiang_title" style="background-color: #F5F7FA;font-size: 18px;color: #313848;">考核事项</div>
                <div class="jiang_title"><el-input v-model="input"></el-input></div>
                <div class="jiang_title" style="border-bottom: none;"><el-input v-model="input"></el-input></div>
              </div>
              <div class="jiang_two" style="width: 20%;">
                <div class="jiang_title" style="background-color: #F5F7FA;font-size: 18px;color: #313848;">考核方式</div>
                <div class="jiang_title"><el-input v-model="input"></el-input></div>
                <div class="jiang_title" style="border-bottom: none;"><el-input v-model="input"></el-input></div>
              </div>
            </div>
            <div class="last_tr btnAdd"><i style="margin-left: 10px;" class="el-icon-circle-plus-outline"></i>添加</div>
          </div>
        </div>
      </div>
      <div class="second_right" style="height: 760px;">
        <div class="right-top"></div>
        <div class="img5_box">
          <el-image class="img5" :src="img4"></el-image>
          <div style="font-size: 24px;color: #313848;margin: 20px 0 10px 0;">卓天赋</div>
          <div style="font-size: 18px;color: #666;">直管组-客户经理</div>
        </div>
        <div class="btn_box">
          <div class="btn_style">设为榜样</div>
          <div class="btn_style" style="border: 1px solid #C5C5C5;color: #C5C5C5;">人事异动</div>
        </div>
        <div class="last_box">
          <div class="last_eacarts">
            <span>出勤情况</span>
            <el-date-picker class="pickMouth" v-model="value2" type="month" placeholder="选择月"></el-date-picker>
          </div>
          <div class="Echarts">
            <div id="main" style="width:200px;height: 200px;margin: 0 auto;"></div>
          </div>
          <div class="last_message">
            <div class="message_box">
              <div><span style="font-size: 36px;color: #F4AB46;">23</span>天</div>
              <div><span class="dian dian1"></span>应出勤天数</div>
            </div>
            <div class="message_box">
              <div><span style="font-size: 36px;color: #18318C;">20</span>天</div>
              <div><span class="dian dian2"></span>实际出勤天数</div>
            </div>
            <div class="message_box">
              <div><span style="font-size: 36px;color: #1ECDBE;">3</span>天</div>
              <div><span class="dian dian3"></span>请假天数</div>
            </div>
          </div>
          <div class="last_message">

          </div>
        </div>
      </div>
    </div>
    <div v-if="activeName=='fourth'" class="fourth_box">
      <div class="bg_box">
        <div class="bg_bottom">
          <div class="bg_left">
            <div class="bg_top">
              <div>
                <div class="tip_name">价值贡献榜</div>
                <div class="tip_word">此栏目针对员工是否为公司做出重要突出贡献，做为重要参考依据!</div>
              </div>
              <div class="tip_right">
                <el-date-picker v-model="year" type="year"
                                format="yyyy 年"
                                value-format="yyyy" placeholder="选择年"></el-date-picker>
                <div class="clickSearch" @click="getExampleList">点击筛选</div>
              </div>
            </div>
            <div class="last_bottom">
              <div class="box_last" v-for="(item,index) in exampleList" :key="index">
                <div class="box_top">
                  <div class="box_left">
                    <el-image :src="'http://oa.s.sn.cn'+item.avatar" style="width: 60px;height: 60px;border-radius: 50%;"></el-image>
                    <div class="content_left">
                      <div style="font-size: 24px;color: #313848;">{{item.nickname}}</div>
                      <div style="font-size: 16px;color: #666;">直管组-客户经理</div>
                    </div>
                  </div>
                  <el-image class="boxRight_img" :src="'http://oa.s.sn.cn'+item.icon"></el-image>
                </div>
                <div class="tip_word">{{item.desc}}</div>
              </div>
            </div>
          </div>
          <div class="bg_right">
            <div class="right-top"></div>
            <div class="list_data">
              <div class="list_title">表彰说明</div>
              <div class="list_con" v-for="(item,index) in typeList" :key="index">
                <div class="list_img">
                  <el-image style="width: 43px;height: 48px" :src="'http://oa.s.sn.cn'+item.icon"></el-image>
                </div>
                <div class="list_word">
                  <div>
                    <span style="font-size: 18px;color: #313848;">{{item.name}}</span>
                    <span class="jiang_name">{{item.reward}}</span>
                  </div>
                  <div class="last_word">{{item.desc}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible:false,
      form: {
        type:"",
        desc: ""
      },
      formLabelWidth: '120px',
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
      entry_day: [],
      activeName: 'first',
      img1: require("../../assets/images/detailImg1.png"),
      img2: require("../../assets/images/img.png"),
      img3: require("../../assets/images/img3.png"),
      img4: require("../../assets/images/img4.png"),
      value2: '',
      year:"",
      tableData: [{
        date: '05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市',
        zip: 200333
      }],
      postsDetail: {},
      typeList:[],
      input:"",
      exampleList:[]
    }
  },
  created() {
    this.getPersonalDetail();
    this.getPostsDetail();
    this.getTypeList();
    let date = new Date();
    let yearDate = date.getFullYear()+"";
    this.year=yearDate;
    this.getExampleList();

  },
  mounted(){
    this.myEcharts();
  },
  methods: {
    myEcharts(){
      let myChart = this.$echarts.init(document.getElementById('main'));
      console.log("mycharts====>",myChart)
      //配置图表
      const option = {
        tooltip: {},
        legend: {
          data: []
        },
        xAxis: {
          data: ['应出勤天数','实际出勤天数','请假天数']
        },
        yAxis: {},
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: false,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048},
              { value: 735},
              { value: 580},
            ]
          }
        ]
      };
      console.log("option",option)
      myChart.setOption(option);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 基本信息--查看详情
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
          console.log("date", this.personalInfo.entry_time)
          if (date) {
            for (let i of date) {
              this.entry_day.push(i)
              console.log("this.entry_day", this.entry_day)
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
      if (!data || data === '0000-00-00') {
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
    },
    //   岗位职责
    getPostsDetail() {
      if (!this.$route.query.id) return;
      this.$axios.get('index/getPostsDetail', {
        user_id: this.$route.query.id
      }).then(res => {
        if (res.code === 1) {
          this.postsDetail = res.data
        }
        if (res.code === 0) {
          this.$message.info(res.msg)
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    //  获取榜样等级
    getTypeList(){
      this.$axios.get('example/getTypeList').then(res => {
        if (res.code === 1) {
          this.typeList = res.data
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
  //   设为榜样
    setExample(){
      this.$axios.post('example_log/setExample', {
        user_id: this.$route.query.id,
        type:this.form.type,
        desc:this.form.desc
      }).then(res => {
        if (res.code === 1) {
          this.$message.success(res.msg)
          setTimeout(()=>{
            this.dialogFormVisible=!this.dialogFormVisible
          },1000)
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    //获取工资明细
    getSalary(){
      this.$axios.post('example_log/setExample', {
        user_id: this.$route.query.id,
        type:this.form.type,
        desc:this.form.desc
      }).then(res => {
        if (res.code === 1) {
          this.$message.success(res.msg)
          setTimeout(()=>{
            this.dialogFormVisible=!this.dialogFormVisible
          },1000)
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    },
    getExampleList(){
      this.$axios.get('example_log/getList',{
        date:this.year,
        limit:10,
        page:0
      }).then(res => {
        if (res.code === 1) {
          this.exampleList = res.data.list
        }
        if(res.code === 0){
          this.exampleList=[]
          this.$message.warning(res.msg)
        }
      }).catch((error) => {
        console.log(error, "请求失败");
      });
    }
  },
}
</script>

<style lang="scss" scoped>
@import "./peopleMgtCss/baseInfo";

.container {
  .labelImg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 6px;
  }

  .con_wrap {
    background-color: #FFF;
    position: relative;
    top: -20px;
    left: -57px;
    width: 103%;
    overflow: hidden;

    & /deep/ .el-tabs__item {
      font-size: 18px;
      padding: 0 60px;
      line-height: 20px;
    }

    & /deep/ .el-tabs {
      margin-left: 70px;
      margin-top: 20px;
    }

    & /deep/ .el-tabs__nav-wrap::after {
      background-color: transparent;
    }

    & /deep/ .el-tabs__item.is-active {
      color: #18318C;
    }

    & /deep/ .el-tabs__active-bar {
      background-color: #18318C
    }

    & /deep/ .el-tabs__header {
      margin: 0;
    }
  }

  .first_box {
    background: rgba(24, 49, 140, 0.05);
    overflow: auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    .table-box {
      width: 77.8%;
      height: 51.25rem;
      background: #FFFFFF;
      border-radius: 0.625rem;
      margin: 30px 20px 30px 30px;

      .base-info {
        width: 95.1%;
        height: auto;
        margin: auto;
        background: #FFFFFF;
        border-radius: 10px;
        overflow: hidden;

        .table-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 1.4375rem 0 1.25rem 1.875rem;

          .l-header {
            display: flex;
            align-items: flex-end;
            justify-content: flex-start;
            text-align: end;
            font-size: 14px;
            font-family: "SourceHanSansCN-Light-, SourceHanSansCN-Light";
            color: #666666;

            p {
              margin-right: 0.625rem;

              & > img {
                width: 1.5rem;
                height: 1.5rem;
              }

              & > span {
                margin-left: 10px;
                font-size: 24px;
                color: #18318C;
              }
            }
          }

          .r-header {
            font-size: 0.875rem;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            .status {
              width: 5rem;
              height: 1.875rem;
              line-height: 1.875rem;
              text-align: center;
              background: #1ECDBE;
              border-radius: 15px;
              font-size: 0.875rem;
              font-family: "SourceHanSansCN-Light-, SourceHanSansCN-Light";
              color: #FFFFFF;
            }

            .time {
              font-size: 18px;
              font-family: "SourceHanSansCN-Light-, SourceHanSansCN-Light";
              color: #666666;
              display: flex;
              align-items: center;
              justify-content: flex-start;
              margin-left: 1.25rem;

              & > span {
                display: inline-block;
                width: 1.5rem;
                height: 1.875rem;
                line-height: 1.875rem;
                margin-right: 10px;
                text-align: center;
                background: #1ECDBE;
                border-radius: 5px;
                font-size: 24px;
                font-family: "ArialNarrow-, ArialNarrow";
                color: #FFFFFF;
              }

              span:nth-child(1) {
                margin-left: 10px;
              }
            }

            & > p {
              display: inline-block;
            }

            .add {
              width: 7.5rem;
              height: 2.875rem;
              line-height: 2.875rem;
              margin-left: 1.875rem;
              text-align: center;
              display: inline-block;
              background: #18318C;
              border-radius: 5px;
              font-size: 1.125rem;
              color: #FFFFFF;
            }
          }
        }

        table {
          width: 96.3%;
          height: auto;
          margin: auto;
        }

        table tr {
          height: 64px;
        }


        table tr td {
          height: 64px;
          padding-left: 1.8125rem;
          box-sizing: border-box;
        }

        table tr:nth-child(n) {
          background: rgba(24, 49, 140, 0.05);
        }

        table tr:nth-child(2n) {
          background: #FFFFFF;;
        }

        table td {
          font-size: 1.125rem;
          font-family: "SourceHanSansCN-Light-, SourceHanSansCN-Light";
          font-weight: normal;
          color: #666666;
          border-right: 1px solid rgba(49, 56, 72, 0.05);
        }

        .check {
          .el-radio-group {
            margin-left: 10px;

            .el-radio__inner {
              border-radius: 2px;
              width: 18px;
              height: 18px;
            }

            .el-radio__input.is-checked .el-radio__inner {
              border-color: #18318C;
              background: #18318C;
            }

            .el-radio__input.is-checked + .el-radio__label {
              color: #18318C;
            }

            .el-radio__input.is-checked .el-radio__inner::after {
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
              left: 2px;
              vertical-align: middle;
              transform: rotate(-45deg);
              border-radius: 0px;
              background: none;
            }

          }

        }

        .input {
          //display: flex;
          //align-items: center;
          //justify-content: flex-start;
          & > span {
            display: inline-block;
          }

          .el-input {
            width: 65%;
          }

          .el-input__inner {
            border: none;
            background: transparent !important;
          }

          //.el-textarea__inner,.el-input__inner {
          //
          //}
        }

        .border {
          .el-input__inner {
            border: none;
            box-shadow: none;
            background: transparent !important;
          }

          .el-date-editor.el-input, .el-date-editor.el-input__inner {
            width: 69%;
          }

        }
      }
    }

    .personal-card {
      width: 20.9%;
      height: 51.25rem;
      background: #FFFFFF;
      border-radius: 0.625rem;
      margin: 30px 30px 30px 0;

      .bar {
        width: 100%;
        height: 0.625rem;
        background: #1ECDBE;
        border-radius: 0.625rem 0.625rem 0 0;
      }

      .header-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .avatar {
          width: 7.5rem;
          height: 7.5rem;
          background: rgba(24, 49, 140, 0.1);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 1.25rem;

          & > img {
            border-radius: 50%;
            width: 6.25rem;
            height: 6.25rem;
          }
        }

        .name {
          font-size: 1.5rem;
          font-family: "SourceHanSansCN-Regular-, SourceHanSansCN-Regular";
          color: #313848;
          margin-top: 1.25rem;

          & > img {
            width: 1.5rem;
            height: 1.5rem;
          }
        }

        .team {
          font-size: 1.125rem;
          font-family: "SourceHanSansCN-Light-, SourceHanSansCN-Light";
          color: #666666;
          margin-top: 0.625rem;
        }
      }

      .btn-box {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 1.875rem;

        .transfers {
          width: 7.8125rem;
          height: 3rem;
          line-height: 3rem;
          text-align: center;
          background: #FFFFFF;
          border-radius: 10px;
          border: 1px solid #18318C;
          font-size: 1.125rem;
          font-family: "SourceHanSansCN-Light-, SourceHanSansCN-Light";
          color: #18318C;
        }

        .change {
          width: 7.8125rem;
          height: 3rem;
          line-height: 3rem;
          text-align: center;
          background: #FFFFFF;
          border-radius: 10px;
          border: 1px solid #C5C5C5;
          font-size: 1.125rem;
          font-family: "SourceHanSansCN-Light-, SourceHanSansCN-Light";
          color: #C5C5C5;
        }
      }

      .lines {
        width: 100%;
        height: 1px;
        background: rgba(49, 56, 72, 0.1);
        margin: 1.875rem 0 -1.875rem;
      }

      .connect-info {
        width: 66.3%;
        margin: 3.75rem auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .label-info {
          font-size: 1.125rem;
          color: #666666;
          margin-bottom: 10px;
        }

        .phone-num {
          font-size: 1.5rem;
          color: #313848;
        }
      }

      .percent {
        width: 78.3%;
        margin: 3.75rem 60px 0;

        .file-percent {
          font-size: 1.125rem;
          color: #666666;
          margin-bottom: 10px;
        }

        .el-progress {
          width: 100%;
        }
      }
    }
  }

  .second_box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20px;
    margin-top: 20px;

    .second_left {
      width: 70%;
      background-color: #FFF;
      margin-right: 20px;
      border-radius: 10px;
      padding: 30px;
      font-size: 18px;

      .tipTop {
        font-size: 24px;
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .content_bottom {
        margin-top: 0.875rem;
        border: 1px solid #ABADB2;
        color: #666;

        .odd {
          height: 64px;
          //line-height: 64px;
          padding-left: 1.875rem;
          background-color: rgba(24, 49, 140, 0.05);
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .img2 {
          width: 18px;
          height: 20px;
          margin-right: 10px;
        }

        .img {
          color: #DF4B3C;
          cursor: pointer;
          font-size: 18px;
        }

        .even {
          height: 64px;
          line-height: 64px;
          padding-left: 1.875rem;
        }

        .top_content {
          display: flex;
          flex-direction: row;

          .content_left {
            width: 50%;
            border-right: 1px solid #ABADB2;
          }

          .content_right {
            width: 50%;
          }
        }
      }

      .bottom_box {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        .box_con {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          // width:21%;
          border-radius: 10px;
          padding: 24px 34px;
          background-color: rgba(223, 75, 60, 0.05);
          font-size: 18px;
          margin-right: 20px;
          .img3 {
            width: 52px;
            height: 60px;
          }
        }

        .con_color {
          background-color: rgba(24, 49, 140, 0.05)
        }

        .box_right {
        }
      }
    }

    .second_right {
      width: 400px;
      background-color: #FFF;

      .right-top {
        width: 100%;
        height: 10px;
        background: #1ECDBE;
        border-radius: 10px 10px 0px 0px;
      }

      .img5_box {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 20px 0;
        border-radius: 50%;

        .img5 {
          width: 120px;
          height: 120px;
          border-radius: 50%;
        }
      }

      .btn_box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 30px;

        .btn_style {
          width: 125px;
          height: 48px;
          cursor: pointer;
          line-height: 48px;
          text-align: center;
          background: #FFFFFF;
          font-size: 18px;
          border-radius: 10px 10px 10px 10px;
          border: 1px solid #18318C;
        }
      }

      .last_box {
        margin-top: 30px;
        border-top: 1px solid #313848;
        padding: 30px;

        .last_message {
          font-size: 18px;
          color: #666;
          padding-bottom: 60px;
        }
      }
    }
  }

  .third_box {
    .third_tip {
      width: 95%;
      height: 54px;
      line-height: 54px;
      padding: 0 30px;
      background: rgba(30, 205, 190, 0.1);
      border-radius: 10px 10px 10px 10px;
      opacity: 1;
      border: 1px solid #1ECDBE;
      color: #1ECDBE;
      font-size: 18px;
      margin-bottom: 30px;
      .el-icon-s-comment {
        color: #1ECDBE;
      }
    }
    .tip_btn {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 20px;
      .tipTop {
        font-size: 24px;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .tip_right {
        display: flex;
        flex-direction: row;
        .clickSearch {
          margin: 0 60px;
          width: 120px;
          height: 46px;
          line-height: 46px;
          font-size: 16px;
          color: #fff;
          text-align: center;
          background: #18318C;
          border-radius: 5px;
          cursor: pointer;
        }
        .save {
          width: 120px;
          height: 46px;
          line-height: 46px;
          background: #1ECDBE;
          border-radius: 5px;
          font-size: 16px;
          color: #fff;
          text-align: center;
          cursor: pointer;
        }
      }
    }
    .table_box{
      margin-top: 30px;
      .third_table{
        & /deep/ .el-input__inner{border: none;}
        & /deep/ .el-input__inner:hover{border: none;}
        .th_input{
          display: flex;
          flex-direction: row;
          border: 1px solid rgba(49, 56, 72,0.2);
          border-top: none;
          .con_name{
            width:100px;
            height: 40px;
            border-right: 1px solid rgba(49, 56, 72,0.2);
          }
          .con_tip{
            width: 80px;
            border-right: 1px solid rgba(49, 56, 72,0.2);
          }
        }
        .last_tr{
          width: 100%;
          border: 1px solid rgba(49, 56, 72, 0.2);
          border-top: none;
          // padding: 12px;
          height: 50px;
          font-size: 18px;
          color: #666;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
        .btnAdd{
          text-align: center;
          cursor: pointer;
          color: #18318C;
        }
      }
      .jiang_box{
        width: 100%;
        display: flex;
        flex-direction: row;
        border: 1px solid rgba(49, 56, 72, 0.2);
        .jiang_one{
          width: 25%;
          text-align: center;
          border-right: 1px solid rgba(49, 56, 72, 0.2);
        }
        .jiang_two{
          width: 50%;
          text-align: center;
        }
        .jiang_title{
          height: 50px;
          line-height: 50px;
          border-bottom: 1px solid rgba(49, 56, 72, 0.2);
          color: #666;
        }
      }
    }
    .last_box{
      .last_eacarts{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: 18px;
        margin-bottom: 35px;
        & /deep/ .el-date-editor.el-input{width: 130px;}
      }
      .last_message{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .message_box{
          font-size: 16px;
          .dian{
            display: inline-block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            margin-right: 6px;
          }
          .dian1{
            background-color: #F4AB46;
          }
          .dian2{
            background-color: #18318C;
          }
          .dian3{
            background-color: #1ECDBE;
          }
        }
      }

    }
  }

  .fourth_box {
    position: relative;
    width: 100%;
    height: 100%;
    background: url("../../assets/images/bg.png") no-repeat;
    background-size: 100% 100%;
    .bg_box {

      position: absolute;
      top: -20px;
      left: -20px;
      width: 100%;
      height: auto;

      .bg_bottom {
        width: 98%;
        margin-top: 300px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .bg_left {
          width: 70%;
          margin: 30px auto;

          .bg_top {
            // width: 1180px;
            padding: 20px;
            background: #FFFFFF;
            border-radius: 10px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .tip_name {
              font-size: 24px;
              font-weight: 500;
              color: #18318C;
              margin-bottom: 8px;
            }

            .tip_word {
              font-size: 14px;
              color: #1ECDBE;
            }

            .tip_right {
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              align-items: center;

              & /deep/ .el-input__inner {
                height: 46px;
                line-height: 46px;
              }

              .clickSearch {
                margin: 0 60px;
                width: 120px;
                height: 46px;
                line-height: 46px;
                font-size: 16px;
                color: #fff;
                text-align: center;
                background: #18318C;
                border-radius: 5px;
                cursor: pointer;
              }
            }
          }

          .last_bottom {
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;

            .box_last {
              width: 340px;
              // height: 188px;
              background-color: #FFF;
              border-radius: 10px;
              padding: 20px;
              margin-bottom: 20px;

              .box_top {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;

                .box_left {
                  display: flex;
                  flex-direction: row;
                  width: 70%;

                  .content_left {
                    margin-left: 20px;
                  }
                }

                .boxRight_img {
                  width: 44px;
                  height: 48px;
                  border-radius: 50%;
                }
              }

              .tip_word {
                font-size: 18px;
                color: #666;
              }
            }
          }
        }
      }

      .bg_right {
        margin: 30px;
        width: 380px;
        background-color: #FFF;

        .right-top {
          width: 100%;
          height: 10px;
          background: #1ECDBE;
          border-radius: 10px 10px 0px 0px;
        }

        .list_data {
          margin: 20px;

          .list_title {
            font-size: 24px;
            font-weight: 400;
            color: #18318C;
            text-align: center;
            margin: 20px 0;
          }

          .list_con {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            margin-bottom: 30px;

            .list_img {
              margin-right: 10px;
            }

            .list_word {
              .iocn_name {
                width: 20px;
                height: 22px;
                margin: 22px;
              }

              .jiang_name {
                font-size: 14px;
                margin-left: 10px;
                color: #DF4B3C;
              }

              .last_word {
                font-size: 16px;
                color: #666;
                margin-top: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>