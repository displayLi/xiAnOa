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
					<div class="errorBtn"><i class="el-icon-warning-outline"></i>项目异常</div>
					<!-- <el-button type="danger" plain icon="el-icon-warning-outline">项目异常</el-button> -->
					<div class="nextBtn" @click="nextBtn">下一步</div>
				</div>	
			</div>
			<div class="table_wrap">
				<!-- 此处判断步骤条状态 -->
				<el-steps :active="active" finish-status="success" >
				  <el-step>
					  <template slot="description">
						  <div class="name">负责人：薛之谦</div>
						  <div class="nameState">项目启动</div>
						  <div class="nameDate">2023-7-1</div>
					  </template>
				  </el-step>
				  <el-step title="">
					<template slot="description">
					  <div class="name">负责人：薛之谦</div>
					  <div class="nameState">项目筹备</div>
					  <div class="nameDate">2023-7-1</div>
					</template>
				  </el-step>
				  <el-step title="" icon="el-icon-more">
					  <template slot="description">
					    <div class="name">负责人：薛之谦</div>
					    <div class="nameState">申报进行中</div>
					  </template>
				  </el-step>
				  <el-step title="" icon="el-icon-lock">
					  <template slot="description">
					    <div class="name">负责人：薛之谦</div>
					    <div class="nameState">完成提交</div>
					  </template>
				  </el-step>
				  <el-step title="" icon="el-icon-lock">
					  <template slot="description">
					    <div class="name">负责人：薛之谦</div>
					    <div class="nameState">结果跟踪</div>
					  </template>
				  </el-step>
				  <el-step title="" icon="el-icon-lock">
					  <template slot="description">
					    <div class="name">负责人：薛之谦</div>
					    <div class="nameState">项目完结</div>
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
					<span class="box_name" v-if="typeNum=='1'">自有业务</span>
					<span class="box_name" v-if="typeNum=='2'">外包业务</span>
				</div>
				<div class="content_bottom">
					<div class="top_content">
						<div class="content_left">
							<div class="odd">客户名称：独角兽创业孵化器</div>
							<div class="even">项目咨询师：刘科</div>
							<div class="odd">合同类型：合同类型</div>
							<div class="even">项目授权人：卓天赋</div>
							<div class="odd">合作机构：消息海科技</div>
							<div class="even">外包对接人：薛之谦</div>
							<div class="odd">启动时间：2023-02-02</div>
						</div>
						<div class="content_right">
							<div class="odd">项目名称：高新技术企业认定</div>
							<div class="even">签约时间：2023-01-01</div>
							<div class="odd">合同编号：01</div>
							<div class="even">委托时间：2023-04-01</div>
							<div class="odd">委托业务：高新技术企业认定</div>
							<div class="even">对接人电话：1999999999</div>
							<div class="odd">交付时间：2023-08-08</div>
						</div>
					</div>
					<div class="even">备注说明：</div>
				</div>
			</div>
			<div class="con_right">
				<div class="right_title"><span class="leftColor"></span>本项工作截止时间<span class="rightColor"></span></div>
				<div class="right_time">
					<div class="time_box">
						<div class="num">05</div>
						<div class="xian"></div>
						<div class="name">天</div>
					</div>
					<div class="time_box">
						<div class="num">08</div>
						<div class="xian"></div>
						<div class="name">时</div>
					</div>
					<div class="time_box">
						<div class="num">42</div>
						<div class="xian"></div>
						<div class="name">分</div>
					</div>
					<div class="time_box">
						<div class="num">26</div>
						<div class="xian"></div>
						<div class="name">秒</div>
					</div>
				</div>
				<div class="progress">
					<el-progress type="circle" color="#18318C" width="180" :strokeWidth='strokeWidth' :percentage="percentage"></el-progress>
					<div class="progressTip">项目进度</div>
				</div>
				<div class="last_con">
					<div class="last_left">
						<el-image :src='img1' style="width: 100%;height: 100%;"></el-image>
					</div>
					<div class="last_right">
						<div>负责人：卓天赋</div>
						<div style="color: #18318C;">截止时间：2023-05-08</div>
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
				img1: require("../../assets/images/detailImg1.png"),
				active:0,
				percentage:33,
				strokeWidth:15,
				typeNum:''
			};
		},
		computed: {

		},
		watch: {

		},
		methods: {
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
			},
			nextBtn(){
				this.active ++ 
			},
			// dataFun(){
			// 	return "项目进度"
			// }
		},
		mounted() {
			this.typeNum = this.$route.query.type
		},
	}
</script>

<style lang="scss" scoped>
	.con_top_box{
		background-color: #FFF;
		border-radius: 0.625rem;
		padding: 1rem;
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
			font-size: 18px;
			border-radius: 0.3125rem;
			margin-left: 1rem;
		}
		.con_left{
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
					top:110px;
					left:170px;
					font-size: 1.125rem;
				}
			}
			.last_con{
				margin: 30px auto;
				width: 320px;
				height: 60px;
				background: rgba(54, 87, 207, 0.05);
				border-radius: 10px;
				padding: 1.25rem;
				display: flex;
				flex-direction: row;
				align-items: center;
				font-size: 1.125rem;
				.last_left{
					width: 3.75rem;
					height: 3.75rem;
				}
				.last_right{
					margin-left: 20px;
				}
			}
		}
		
	}
</style>
