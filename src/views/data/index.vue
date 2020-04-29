<template>
	<div class="dormitory">
		<div class="area-title">
			<span>< 返回</span>
			<p>南园社区化肥厂宿舍旧城区改建</p>
		</div>
		<!-- <div class="searchWord"><el-input v-model="search" style="display: inline-block;width: 300px;margin-bottom: 20px;" placeholder="请输入搜索内容"></el-input></div> -->
		<!-- <div class="dormitoryData">
			<el-table ref="dormitoryTable" :data="tables.slice((currentPage - 1) * pageSize, currentPage * pageSize)" tooltip-effect="dark" stripe style="width: 100%">
				<el-table-column label="序号" type="index" width="65"></el-table-column>
				<el-table-column label="评估编号" prop="evaluationNumber"></el-table-column>
				<el-table-column label="房屋使用人" prop="houseUser"></el-table-column>
				<el-table-column label="房屋座落" prop="houseLocation"></el-table-column>
				<el-table-column label="估价员" prop="assessor"></el-table-column>
				<el-table-column label="结构" prop="technicalLeader"></el-table-column>
				<el-table-column label="成新" prop="projectLeader"></el-table-column>
				<el-table-column label="成套" prop="constructionArea"></el-table-column>
				<el-table-column label="区位" prop="assessAmount"></el-table-column>
				<el-table-column label="层次" prop="assessAmount"></el-table-column>
				<el-table-column label="朝向" prop="assessAmount"></el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<router-link :to="{ path: '/project/trialCheck', query: { content: scope.row } }" style="color: rgb(51, 153, 204)">
							<el-button size="small">修改</el-button>
						</router-link>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="currentPage"
				:page-sizes="[10, 20, 30, 40]"
				:page-size="pageSize"
				layout="total, sizes, prev, pager, next, jumper"
				:total="dormitory.length"
			></el-pagination>
		</div> -->
		<div>
			<template>
				<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
					<el-tab-pane label="结构" name="first">
						<el-table :data="tableData1" style="width: 100%;margin-bottom: 20px;" border>
							<el-table-column type="index" width="50" label="编号"></el-table-column>
							<el-table-column prop="standarhouse" label="标准房屋" sortable width="180"></el-table-column>
							<el-table-column prop="assesshouse" label="待估房屋" sortable width="180"></el-table-column>
							<el-table-column prop="coefficient" label="系数"></el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
									<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="成新" name="second">
						<el-table :data="tableData2" style="width: 100%" border>
							<el-table-column type="index" width="50" label="编号"></el-table-column>
							<el-table-column prop="standarhouse" label="标准房屋" sortable width="180"></el-table-column>
							<el-table-column prop="assesshouse" label="待估房屋" sortable width="180"></el-table-column>
							<el-table-column prop="coefficient" label="系数"></el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
									<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="功能" name="third">
						<el-table :data="tableData3" style="width: 100%" border>
							<el-table-column type="index" width="50" label="编号"></el-table-column>
							<el-table-column prop="standarhouse" label="标准房屋" sortable width="180"></el-table-column>
							<el-table-column prop="assesshouse" label="待估房屋" sortable width="180"></el-table-column>
							<el-table-column prop="coefficient" label="系数"></el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
									<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="区位" name="fourth">
						<el-table :data="tableData4" style="width: 100%" border>
							<el-table-column type="index" width="50" label="编号"></el-table-column>
							<el-table-column prop="standarhouse" label="标准房屋" sortable width="180"></el-table-column>
							<el-table-column prop="assesshouse" label="待估房屋" sortable width="180"></el-table-column>
							<el-table-column prop="coefficient" label="系数"></el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
									<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="层次" name="five">
						<el-table :data="tableData5" style="width: 100%" border>
							<el-table-column type="index" width="50" label="编号"></el-table-column>
							<el-table-column prop="standarhouse" label="标准房屋" sortable width="180"></el-table-column>
							<el-table-column prop="assesshouse" label="待估房屋" sortable width="180"></el-table-column>
							<el-table-column prop="coefficient" label="系数"></el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
									<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
					<el-tab-pane label="朝向" name="six">
						<el-table :data="tableData6" style="width: 100%" border>
							<el-table-column type="index" width="50" label="编号"></el-table-column>
							<el-table-column prop="standarhouse" label="标准房屋" sortable width="180"></el-table-column>
							<el-table-column prop="assesshouse" label="待估房屋" sortable width="180"></el-table-column>
							<el-table-column prop="coefficient" label="系数"></el-table-column>
							<el-table-column label="操作">
								<template slot-scope="scope">
									<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
									<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</el-tab-pane>
				</el-tabs>
			</template>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dormitory: [
				{
					evaluationNumber: '000001',
					houseUser: '张三',
					houseLocation: '安宜镇齐心村',
					assessor: '张三',
					technicalLeader: '王小二',
					projectLeader: '王小二',
					constructionArea: 100,
					assessAmount: 100000
				},
				{
					evaluationNumber: '000001',
					houseUser: '李四',
					houseLocation: '南园社区化肥厂宿舍旧城区改建',
					assessor: '李四',
					technicalLeader: '李四',
					projectLeader: '李四',
					constructionArea: 1100,
					assessAmount: 1100000
				}
			],
			trial: {},
			search: '',
			tableDataEnd: [],
			currentPage: 1,
			pageSize: 10,
			totalItems: 4,
			filterTableDataEnd: [],
			flag: false,
			trailId: '',
			activeName: 'first',
			tableData1: [
				{
					standarhouse: '钢筋混凝土一等',
					assesshouse: '',
					coefficient: 100
				},
				{
					standarhouse: '',
					assesshouse: '钢筋混凝土二等',
					coefficient: 99
				},
				{
					standarhouse: '',
					assesshouse: '砖混一等',
					coefficient: 98
				},
				{
					standarhouse: '',
					assesshouse: '砖混二等',
					coefficient: 97
				}
			],
			tableData2: [
				{
					standarhouse: '成新一等',
					assesshouse: '',
					coefficient: 100
				},
				{
					standarhouse: '',
					assesshouse: '成新二等',
					coefficient: 99
				},
				{
					standarhouse: '',
					assesshouse: '成新三等',
					coefficient: 98
				},
				{
					standarhouse: '',
					assesshouse: '成新四等',
					coefficient: 97
				}
			],
			tableData3: [
				{
					standarhouse: '功能一等',
					assesshouse: '',
					coefficient: 100
				},
				{
					standarhouse: '',
					assesshouse: '功能二等',
					coefficient: 99
				},
				{
					standarhouse: '',
					assesshouse: '功能三等',
					coefficient: 98
				},
				{
					standarhouse: '',
					assesshouse: '功能四等',
					coefficient: 97
				}
			],
			tableData4: [
				{
					standarhouse: '区位一等',
					assesshouse: '',
					coefficient: 100
				},
				{
					standarhouse: '',
					assesshouse: '区位二等',
					coefficient: 99
				},
			],
			tableData5: [
				{
					standarhouse: '层次一等',
					assesshouse: '',
					coefficient: 100
				},
				{
					standarhouse: '',
					assesshouse: '层次二等',
					coefficient: 99
				},
				
			],
			tableData6: [
				{
					standarhouse: '朝向一等',
					assesshouse: '',
					coefficient: 100
				},
				{
					standarhouse: '',
					assesshouse: '朝向二等',
					coefficient: 99
				},
			],
			tableData: [
				{
					id: 1,
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄',
					children: [
						{
							id: 11,
							date: '2016-05-01',
							name: '王小虎',
							address: '上海市普陀区金沙江路 1519 弄'
						},
						{
							id: 12,
							date: '2016-05-01',
							name: '王小虎',
							address: '上海市普陀区金沙江路 1519 弄'
						}
					]
				},
				{
					id: 2,
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄',
					children: [
						{
							id: 21,
							date: '2016-05-01',
							name: '王小虎',
							address: '上海市普陀区金沙江路 1519 弄'
						},
						{
							id: 22,
							date: '2016-05-01',
							name: '王小虎',
							address: '上海市普陀区金沙江路 1519 弄'
						}
					]
				},
				{
					id: 3,
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄',
					children: [
						{
							id: 31,
							date: '2016-05-01',
							name: '王小虎',
							address: '上海市普陀区金沙江路 1519 弄'
						},
						{
							id: 32,
							date: '2016-05-01',
							name: '王小虎',
							address: '上海市普陀区金沙江路 1519 弄'
						}
					]
				},
				{
					id: 4,
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}
			]
		};
	},
	// created() {
	//   const content = this.$route.query.content
	// 	this.trial = content
	//   this.dormitory = content.trialListData
	// 	this.trailId = content.number
	// 	console.log(content)
	// },
	computed: {
		// 模糊搜索
		tables() {
			const search = this.search;
			if (search) {
				// filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
				// 注意： filter() 不会对空数组进行检测。
				// 注意： filter() 不会改变原始数组。
				return this.dormitory.filter(data => {
					// some() 方法用于检测数组中的元素是否满足指定条件;
					// some() 方法会依次执行数组的每个元素：
					// 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
					// 如果没有满足条件的元素，则返回false。
					// 注意： some() 不会对空数组进行检测。
					// 注意： some() 不会改变原始数组。
					return Object.keys(data).some(key => {
						// indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
						// 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
						return (
							String(data[key])
								.toLowerCase()
								.indexOf(search) > -1
						);
					});
				});
			}
			return this.dormitory;
		}
	},
	methods: {
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
			this.pageSize = val;
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			this.currentPage = val;
		},
		handleClick(tab, event) {
			console.log(tab, event);
		},
		load(tree, treeNode, resolve) {
			setTimeout(() => {
				resolve([
					{
						id: 31,
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1519 弄'
					},
					{
						id: 32,
						date: '2016-05-01',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1519 弄'
					}
				]);
			}, 1000);
		}
	}
};
</script>

<style lang="scss" scoped>
.area-title {
	height: 60px;
	// background: #fff;
	line-height: 60px;
	border-bottom: 1px solid #eeeeee;
	margin-bottom: 20px;
}
.area-title span {
	float: left;
	font-size: 16px;
	color: #1890ff;
	cursor: pointer;
	margin-left: 20px;
}
.area-title p {
	margin: 0;
	padding: 0;
	text-align: center;
	font-size: 16px;
	color: rgba(0, 0, 0, 0.647058823529412);
}
</style>
