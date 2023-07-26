<template>
	<div class="container">
		<div class="con_top_box">
			<div class="con_top">
				<div class="tipTop">
					<span class="labelImg">
						<el-image style="width: 100%;height: 100%;" :src="img1"></el-image>
					</span>
					<span style="color: #18318C;">项目状态</span>
				</div>
				<div class="btn_box">
					<div class="errorBtn" @click="nextBtn('error')"><i class="el-icon-warning-outline"></i>项目异常</div>
					<div class="nextBtn" @click="nextBtn('warning')">下一步</div>
				</div>	
			</div>
			<div class="table_wrap">
				<!-- 此处判断步骤条状态 -->
				<el-steps :active="active + 1">
				  <el-step 
					v-for="(item, index) in progressObj.all" 
					:key="index" 
					:status="
						progressObj.now && progressObj.now[index] && progressObj.now[index].check_status == 0 ? 
							'wait' :  // 黄色
						progressObj.now && progressObj.now[index] && progressObj.now[index].check_status == 1 ? 
							'success' : // 绿色
						progressObj.now && progressObj.now[index] &&progressObj.now[index].check_status == 2 ? 
							'error' :  // 红色
						'process'"  
					>
					  <template slot="description">
						<!-- 
							2023年7月20日16:25:37
							看不懂没关系，可以慢慢看。主打的一个骚操作
						 -->
						  <div class="name" :style="{color: progressObj.now && progressObj.now[index] && progressObj.now[index].check_status == 0 ? '#F2A944' : progressObj.now && progressObj.now[index] && progressObj.now[index].check_status == 1 ? '#2DB52A' : progressObj.now && progressObj.now[index] && progressObj.now[index].check_status == 2 ? '#DD4C3D' : '#19318F' }">负责人：{{ item.nickname }}</div>
						  <div class="nameState" :style="{color: progressObj.now && progressObj.now[index] && progressObj.now[index].check_status == 0 ? '#F2A944' : progressObj.now && progressObj.now[index] && progressObj.now[index].check_status == 1 ? '#2DB52A' : progressObj.now && progressObj.now[index] && progressObj.now[index].check_status == 2 ? '#DD4C3D' : '#19318F' }">{{ item.name }}</div>
						  <div class="nameDate" v-if="progressObj.now">{{ progressObj.now[index]?.create_at }}</div>
					  </template>
				  </el-step>
				</el-steps>
			</div>
		</div>
		<div class="content">
			<div class="con_left">
				<div class="tipTop">
					<span class="labelImg">
						<el-image style="width: 100%;height: 100%;" :src="img1"></el-image>
					</span>
					<span style="color: #18318C;">项目信息</span>
					<span class="box_name" v-if="projectDetail.business_type == 0">自有业务</span>
					<span class="box_name" v-if="projectDetail.business_type == 1">外包业务</span>
				</div>
				<div class="content_bottom">
					<div class="top_content">
						<div class="content_left">
							<div class="odd">客户名称：{{ projectDetail.customer_name || '/' }}</div>
							<div class="even">项目咨询师：{{ projectDetail.consultant_name || '/' }}</div>
							<div class="odd">合同类型：{{ projectDetail.contract_type || '/' }}</div>
							<div class="even">项目授权人：{{ projectDetail.authorized_name || '/' }}</div>
							<div class="odd" v-if="projectDetail.business_type == 0">项目工程师：{{ projectDetail.engineer_name || '/' }}</div>
							<div class="odd" v-if="projectDetail.business_type == 1">合作机构：{{ projectDetail.partners || '/' }}</div>
							<div class="even" v-if="projectDetail.business_type == 1">外包对接人：{{ projectDetail.outsource || '/' }}</div>
							<div class="odd" v-if="projectDetail.business_type == 1">启动时间：{{ progressObj.now && progressObj.now[0]?.create_at || '/' }}</div>
							<div class="even" v-if="projectDetail.business_type == 0">启动时间：{{ progressObj.now && progressObj.now[0]?.create_at || '/' }}</div>
						</div>
						<div class="content_right">
							<div class="odd">项目名称：{{ projectDetail.name || '/' }}</div>
							<div class="even">签约时间：{{ projectDetail.signing_time || '/' }}</div>
							<div class="odd">合同编号：{{ projectDetail.contract_number || '/' }}</div>
							<div class="even" v-if="projectDetail.business_type == 0">分配时间：{{ projectDetail.allocation_time || '/' }}</div>
							<div class="odd" v-if="projectDetail.business_type == 0">资料专员：{{ projectDetail.specialist_name || '/' }}</div>
							<div class="even" v-if="projectDetail.business_type == 1">委托时间：{{ projectDetail.business_time || '/' }}</div>
							<div class="odd" v-if="projectDetail.business_type == 1">委托业务：{{ projectDetail.business || '/' }}</div>
							<div class="even" v-if="projectDetail.business_type == 1">对接人电话：{{ projectDetail.outsource_phone || '/' }}</div>
							<div class="even" v-if="projectDetail.business_type == 0">交付时间：{{ projectDetail.delivery_time || '/' }}</div>
							<div class="odd" v-if="projectDetail.business_type == 1">交付时间：{{ projectDetail.delivery_time || '/' }}</div>
						</div>
					</div>
					<div class="odd" v-if="projectDetail.business_type == 0">备注说明：{{ projectDetail.remark || '/' }}</div>
					<div class="even" v-if="projectDetail.business_type == 1">备注说明：{{ projectDetail.remark || '/' }}</div>
				</div>
			</div>
			<div class="con_right">
				<div class="right_title"><span class="leftColor"></span>本项工作截止时间<span class="rightColor"></span></div>
				<div class="right_time">
					<div class="time_box">
						<div class="num">{{ date.day }}</div>
						<div class="xian"></div>
						<div class="name">天</div>
					</div>
					<div class="time_box">
						<div class="num">{{ date.hours }}</div>
						<div class="xian"></div>
						<div class="name">时</div>
					</div>
					<div class="time_box">
						<div class="num">{{ date.minutes }}</div>
						<div class="xian"></div>
						<div class="name">分</div>
					</div>
					<div class="time_box">
						<div class="num">{{ date.seconds }}</div>
						<div class="xian"></div>
						<div class="name">秒</div>
					</div>
				</div>

				<div class="progress">
					<el-progress type="circle" color="#18318C" :width="180" :strokeWidth='strokeWidth' :percentage="Number(progressObj.percentage ?? 0)"></el-progress>
					<div class="progressTip">项目进度</div>
				</div>
				<div class="last_con">
					<div class="last_left">
						<el-image :src='img1' style="width: 100%;height: 100%;"></el-image>
					</div>
					<div class="last_right">
						<div >负责人：{{ projectDetail.authorized_name || '/' }}</div>
						<div style="color: #18318C; font-size: 14px">截止时间：{{ projectDetail.deadline || '/' }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { getProjectDetail, nextStep, getProgress, abnormalProject } from "@/api/projectApi" 
	export default {
		data() {
			return {
				img1: require("../../assets/images/detailImg1.png"),
				active: 0,
				percentage:33,
				strokeWidth:15,
				projectDetail: {},
				progressObj: {},
				date: {
					day: 0,
					hours: 0,
					minutes: 0,
					seconds: 0
				},
				timer: null
			};
		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			nextBtn(type){
				this.$confirm(type == 'warning' ? '确定进行下一步操作吗?' : '确定执行异常操作吗?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type
				}).then(async () => {
					let params = {
						project_id: this.$route.query.id,
						status: this.progressObj.all[this.active].name || ''
					}
					let res;
					if(type == 'warning') {
						res = await nextStep(params);
					} else {
						res = await abnormalProject(params);
					}

					let { code, data } = res;

					if(code == 1) {
						console.log(data, "===abnormalProject===")
						this.getProgress();
					}

					// this.active ++ 
					
				}).catch(err => {})
			},
			async getProjectDetail() {
				let { code, data } = await getProjectDetail({
					project_id: this.$route.query.id 
				});
				if(code == 1) {
					this.projectDetail = data;
					console.log(data, "===projectDetail===", this.projectDetail.deadline)

					if(this.projectDetail.deadline) {
						let endDate = new Date(this.projectDetail.deadline).getTime();
						let timeResult;
						let t = () => {
							timeResult = (endDate - Date.now()) / 1000; // 毫秒
							let day = parseInt(timeResult / 86400);
							let hours = parseInt(timeResult / 3600 % 24);
							let minutes = parseInt((timeResult / 60) % 60);
							let seconds = parseInt(timeResult % 60);

							const formatZore = (num) => num < 10 && num >= 0 ? `0${num}` : num < 0 ? `00` : num
								
							this.date = {
								day: formatZore(day) ,
								hours:formatZore(hours) ,
								minutes: formatZore(minutes) ,
								seconds: formatZore(seconds) 
							}
							return t;
						}
						this.timer = setInterval(t(), 1000)
					}
				}
			},
			async getProgress() {
				let { code, data } = await getProgress({
					project_id: this.$route.query.id 
				});
				if(code == 1) {
					if(data.now && Array.isArray(data.now) && data.all) {
						data.now.forEach((el, index) => {
							data.all.forEach(item => {
								if(el.status == item.name) {
									this.active = index;
								}
							})
						})
					}
					this.progressObj = data;
					console.log(data, "===progressList===", this.active)
				}
			}
		},
		mounted() {
			this.getProjectDetail();
			this.getProgress();
		},
		destroyed() {
			clearInterval(this.timer);
			this.timer = null
		}
	}
</script>

<style lang="scss" scoped>

.container {
  background-color: #F3F4F9;
  padding: 30px;
  height: calc(100vh - 200px);
  overflow-y: auto;
}
	.con_top_box{
		background-color: #FFF;
		border-radius: 0.625rem;
		padding: 30px;
	}
	.labelImg {
		width:1.5rem;
		height: 1.5rem;
		margin-right: 6px;
	}
	
	.con_top{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1.875rem;
		.tipTop{
			font-size: 24px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			background-color: #FFF;	
		}
		// .labelImg {
		// 	width:1.5rem;
		// 	height: 1.5rem;
		// 	margin-right: 6px;
		// }
		.btn_box{
			cursor: pointer;
			display: flex;
			flex-direction: row;
			align-items: center;
			.errorBtn{
				width: 130px;
				height: 46px;
				line-height: 46px;
				text-align: center;
				background: #FFFFFF;
				border-radius: 10px;
				border: 1px solid #DF4B3C;
				font-size: 1.125rem;
				color: #DF4B3C;
				margin-right: 16px;
			}
			.nextBtn{
				width: 120px;
				height: 46px;
				line-height: 46px;
				text-align: center;
				background: #18318C;
				color: #FFF;
				border-radius: 10px;
			}
		}
	}
	.table_wrap{
		& /deep/ .el-step__head.is-process{
			color: #18318C;
			border-color: #18318C;
		}
		.name{
			margin-top: 1rem;
			color: #18318C;
			font-size: 0.875rem;
		}
		.nameState{
			margin-top:0.6rem;
			color: #313848;
			font-size: 1.5rem;
		}
		.nameDate{
			margin-top:0.6rem;
			color: #ABADB2;
			font-size: 1.125rem;
		}
	}
	.content{
		margin-top: 1.25rem;
		// margin: 1rem;
		border-radius:10px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.box_name{
			padding: 6px 14px;
			background-color: #1ECDBE;
			color: #FFF;
			font-size: 14px;
			line-height: 14px;
			border-radius: 0.3125rem;
			margin-left: 1rem;
		}
		.con_left{
			border-radius: 0.625rem;
			width:68%;
			padding: 20px;
			background-color: #FFF;
			.tipTop{
				font-size: 24px;
				display: flex;
				flex-direction: row;
				align-items: center;
				
			}
			.content_bottom{
				margin-top: 0.875rem;
				border: 1px solid #ABADB2;
				.odd{
					height: 64px;
					line-height: 64px;
					padding-left: 1.875rem;
					background-color:rgba(24,49,140, 0.05);
				}
				.even{
					height: 64px;
					line-height: 64px;
					padding-left: 1.875rem;
				}
				.top_content{
					display: flex;
					flex-direction: row;
					.content_left{
						width: 50%;
						border-right: 1px solid #ABADB2;
					}
					.content_right{
						width: 50%;
					}
				}
			}
		}
		.con_right{
			border-radius: 0.625rem;
			width: 25%;
			background-color: #FFF;	
			padding: 0 1rem;
			font-size: 1.125rem;
			
			.right_title{
				margin-top: 1.875rem;
				color: #1ECDBE;
				text-align: center;
				.leftColor{
					display: inline-block;
					vertical-align: middle;
					margin-right: 0.375rem;
					width: 80px;
					height: 2px;
					background: linear-gradient(270deg, #1ECDBE 0%, rgba(255,255,255,0) 100%);
					border-radius: 10px;
				}
				.rightColor{
					display: inline-block;
					vertical-align: middle;
					margin-left: 6px;
					width: 80px;
					height: 2px;
					background: linear-gradient(90deg, #1ECDBE 0%, rgba(255,255,255,0) 100%);
					border-radius: 10px;
				}
			}
			.right_time{
				display: flex;
				flex-direction: row;
				justify-content: center;
				.time_box{
					margin-top: 1.875rem;
					text-align: center;
					width: 3.375rem;
					padding:0.625rem 0;
					margin-left: 1.25rem;
					background: linear-gradient(180deg, #1ECDBE 0%, #1ECDBE 100%);
					box-shadow: 0px 3px 6px 1px rgba(30,205,190,0.3);
					border-radius: 5px;
					color: #FFF;
					position: relative;
					.num{
						font-size: 1.875rem;
					}
					.xian{
						width: 100%;
						height: 0.0625rem;
						background-color: rgba(255, 255, 255, 0.6);
						position: absolute;
						top: 40px;
					}
					.name{
						font-size: 0.875rem;
					}
				}
			}
			.progress{
				width: 100%;
				margin-top:66px;
				display: inline-block;
				text-align: center;
				position: relative;
				& /deep/ .el-progress--circle .el-progress__text, .el-progress--dashboard .el-progress__text{
					top: 45%;
					font-size:54px!important;
					color: #18318C!important;
				}
				.progressTip{
					position: absolute;
					top:115px;
					left:50%;
					transform: translateX(-50%);
					font-size: 14px;
					color: #18318C;
					font-weight: bold;
				}
			}
			.last_con{
				margin: 30px auto;
				// width: 320px;
				height: 60px;
				background: rgba(54, 87, 207, 0.05);
				border-radius: 10px;
				padding: 1.25rem;
				display: flex;
				flex-direction: row;
				align-items: center;
				font-size: 1.125rem;
				.last_left{
					width: 45px;
					height: 45px;
					border-radius: 50%;
					border: 7px solid #DDE2F1;
					overflow: hidden;
				}
				.last_right{
					margin-left: 20px;
				}
			}
		}
		
	}
	/deep/ .is-wait {
		color: #F1AC44;
		border-color: #F1AC44;
	}
</style>
