<template>
	<div class="container">
		<div class="con_top">
			<div class="con_top_box">
				<div class="con_search">
					<div style="padding: 1rem;">
						<el-input placeholder="客户名称查询" v-model="inputSearch" class="input-with-select">
							<el-button slot="append" icon="el-icon-search"></el-button>
						</el-input>
					</div>
					<div>
						<el-date-picker v-model="valueMouth" type="month" placeholder="选择月"></el-date-picker>
					</div>
				</div>
				<div class="top_name">
					<div style="margin-right: 1rem;">
						<span class="labelImg1">
							<el-image style="width: 100%;height: 100%;" :src="img1"></el-image>
						</span>
						<span style="color: #18318C;">所属部门：</span>
						<span>项目咨询部-A组</span>
					</div>
					<div>
						<span class="labelImg1 labelImg2">
							<el-image style="width: 100%;height: 100%;" :src="img2"></el-image>
						</span>
						<span style="color: #18318C;">姓名：</span>
						<span>A组</span>
					</div>
				</div>
			</div>
			<div class="con_color">
				<div class="color color1">
					<div class="color_con">
						<div>项目咨询部</div>
						<div><span class="name_con">A</span>组</div>
					</div>
					<div></div>
					<div class="color_con">
						<div>月度实质签约</div>
						<div><span class="name_con">35</span>单</div>
					</div>
					<div class="shu"></div>
					<div class="color_con">
						<div>月度启动项目</div>
						<div><span class="name_con">45</span>个</div>
					</div>
					<div class="shu"></div>
					<div class="color_con">
						<div>月度未启动项目</div>
						<div><span class="name_con">6</span>个</div>
					</div>
				</div>
				<div class="color color2">
					<div class="color_con">
						<div>项目咨询部</div>
						<div><span class="name_con">A</span>组</div>
					</div>
					<div></div>
					<div class="color_con">
						<div>月度实质签约</div>
						<div><span class="name_con">**</span>单</div>
					</div>
					<div class="shu"></div>
					<div class="color_con">
						<div>月度启动项目</div>
						<div><span class="name_con">**</span>个</div>
					</div>
					<div class="shu"></div>
					<div class="color_con">
						<div>月度未启动项目</div>
						<div><span class="name_con">**</span>个</div>
					</div>
				</div>
				<div class="color color3">
					<div class="color_con">
						<div>项目咨询部</div>
						<div><span class="name_con">C</span>组</div>
					</div>
					<div></div>
					<div class="color_con">
						<div>月度实质签约</div>
						<div><span class="name_con">**</span>单</div>
					</div>
					<div class="shu"></div>
					<div class="color_con">
						<div>月度启动项目</div>
						<div><span class="name_con">**</span>个</div>
					</div>
					<div class="shu"></div>
					<div class="color_con">
						<div>月度未启动项目</div>
						<div><span class="name_con">**</span>个</div>
					</div>
				</div>
			</div>
		</div>
		<div class="table_wrap">
			<div class="table_select">
				<div class="selec_box">
					<div style="width: 95%;">
						<el-select class="select" v-model="value1" placeholder="项目咨询师">
							<el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
						<el-select class="select" v-model="value2" placeholder="项目负责人">
							<el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
						<el-select class="select" v-model="value3" placeholder="项目状态">
							<el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
						<el-date-picker
						style="width: 30%;margin-right: 1rem;"
						      v-model="valDate"
						      type="datetimerange"
						      range-separator="至"
						      start-placeholder="开始日期"
						      end-placeholder="结束日期">
						    </el-date-picker>
						<el-button class="btnSearch" @click="btnSearch">点击筛选</el-button>
					</div>
					<div>
						<el-button class="addColor">新建</el-button>
					</div>
				</div>
				<div>
					<el-table :data="tableData" style="width: 100%">
						<el-table-column prop="name" label="客户名称" min-width="80"></el-table-column>
						<el-table-column prop="projectName" label="项目名称" min-width="100"></el-table-column>
						<el-table-column prop="address" label="项目咨询人" min-width="100"></el-table-column>
						<el-table-column prop="address" label="项目负责人" min-width="100"></el-table-column>
						<el-table-column prop="address" label="签约时间" min-width="100"></el-table-column>
						<el-table-column prop="address" label="接入时间" min-width="100"></el-table-column>
						<el-table-column prop="address" label="执行状态" min-width="100">
							<template slot-scope="scope">
								<span v-if="scope.row.type==1" style="color: #F4AB46;">未启动/待接收</span>
								<span v-if="scope.row.type==2" style="color: #DF4B3C;">项目异常</span>
								<span v-if="scope.row.type==3" style="color: #469F48;">已启动</span>
							</template>
						</el-table-column>
						<el-table-column prop="address" label="操作" align="right">
							<template slot-scope="scope">
								<el-button v-if="scope.row.state=='1'" @click="handleClick(scope.row)" type="text" size="middle" style="color: #18318C;">详情</el-button>
								<el-button v-if="scope.row.state=='2'" type="text" size="middle" style="color: #DF4B3C;">接收</el-button>
							</template>
						</el-table-column>
					</el-table>
					<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" style="text-align: right;"
						:current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100"
						layout="total, sizes, prev, pager, next, jumper" :total="400">
					</el-pagination>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				valueMouth: '',
				inputSearch: '',
				img1: require("../../assets/icons/label.png"),
				img2: require("../../assets/icons/name.png"),
				tableData: [{
					name: '王小虎',
					projectName: '一期项目',
					address: '2023-7-16',
					type: 1,
					state:"1"

				}, {
					name: '王小虎',
					projectName: '一期项目',
					address: '2023-7-16',
					type: 2,
					state:"2"
				}, {
					name: '王小虎',
					projectName: '一期项目',
					address: '2023-7-16',
					type: 3,
					state:"1"
				}],
				currentPage: 4,
				value1:'',
				value2:'',
				value3:'',
				options1:[],
				options2:[],
				options3:[],
				valDate:''
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
			//点击跳转详情
			handleClick() {

			},
			//点击跳转隐藏数据也
			btnSearch(){
				this.$router.push({
				  path: '/projectManage2',
				  query: {
				  }
				})
			}
		},
		mounted() {

		},
	}
</script>

<style lang="scss" scoped>
	.con_top {
		background-color: #FFF;
		padding-bottom: 1.875rem;
		border-radius: 0.625rem;

		.con_top_box {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			font-size: 1.125rem;
			color: #666;

			.con_search {
				width: 50%;
				display: flex;
				flex-direction: row;
				align-items: center;

			}

			.top_name {
				width: 50%;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-end;
				padding-right: 1.875rem;

				.labelImg1 {
					width: 1.375rem;
					height: 1.125rem;
					display: inline-block;
					vertical-align: middle;
					margin-right: 6px;
				}

				.labelImg2 {
					width: 1.125rem;
				}
			}
		}

		.con_color {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			padding: 0 1rem;

			.color {
				width: 31%;
				height: 7.5rem;
				padding: 0 0.6rem;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;

				.color_con {
					font-size: 0.875rem;
					color: #FFF;

					.name_con {
						font-size: 1.875rem;
					}
				}

				.shu {
					width: 1px;
					height: 60px;
					background-color: rgba(255, 255, 255, 0.26);
				}
			}

			.color1 {
				background: url('../../assets/images/color1.png')no-repeat;
				background-size: 100% 100%;
			}

			.color2 {
				background: url('../../assets/images/color2.png')no-repeat;
				background-size: 100% 100%;
			}

			.color3 {
				background: url('../../assets/images/color3.png')no-repeat;
				background-size: 100% 100%;
			}

		}
	}

	.table_wrap {
		background-color: #FFF;
		margin-top: 1.25rem;
		border-radius: 0.625rem;
		padding: 0 1rem 1rem;
		.selec_box{
			padding-top: 1rem;
			display: flex;
			flex-direction: row;
			.select{
				margin-right: 1rem;
				width:17%;
			}
			.btnSearch{
				background-color: #18318C;
				color: #FFF;
			}
			
		}
		.addColor{
			background-color: #F4AB46;
			color: #FFF;
		}
	}
</style>
